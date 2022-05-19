import { GamepadManager } from "./GamepadManager";
import { HighScore } from "./HighScore";
import { GameData } from "./GameData";
import { KioskState } from "./KioskState";
import configData from "../config.json"

export class Kiosk {
    games: GameData[] = [];
    gamepadManager: GamepadManager = new GamepadManager();
    selectedGameId?: string;
    currentScore: number = 0;
    onGameSelected!: () => void;
    onNavigated!: () => void;
    state: KioskState = KioskState.MainMenu;

    private readonly highScoresLocalStorageKey: string = "HighScores";
    private initializePromise: any;
    private siteElements: ChildNode[] = [];
    private intervalId: any;

    async downloadGameList(): Promise<void> {
        let url = configData.GameDataUrl;
        if (configData.Debug) {
            url = `/static/kiosk/${url}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Unable to download game list from "${url}"`);
        }

        try {
            this.games = (await response.json()).games;
        }
        catch (error) {
            throw new Error(`Unable to process game list downloaded from "${url}": ${error}`);
        }
    }

    gamePadLoop(): void {
        const isDebug = true;
        if (isDebug) {
            // Pressing the reset and menu buttons while playing a game will signal the game is over with
            // a random score.
            if (this.state === KioskState.PlayingGame &&
                this.gamepadManager.isResetButtonPressed() &&
                this.gamepadManager.isEscapeButtonPressed()) {
                this.gameOver(Math.round(Math.random() * 100));
                return;
            }
        }

        if (this.gamepadManager.isResetButtonPressed() &&
            this.gamepadManager.isEscapeButtonPressed() &&
            this.gamepadManager.isBButtonPressed() &&
            this.gamepadManager.isLeftPressed()) {                
                this.resetHighScores();
                console.log("High scores reset");
                return;
        } 

        if (this.gamepadManager.isResetButtonPressed()) {
            this.escapeGame();
            return;
        }
    }

    async initialize(): Promise<void> {
        if (this.initializePromise) {
            return this.initializePromise; 
        }

        this.initializePromise = this.downloadGameList();

        this.intervalId = setInterval(() => this.gamePadLoop(), configData.GamepadPollLoopMilli);

        // window.addEventListener("message", (event) => {
        //     // TODO: Listen for simulator messages that indicate the end of a game.
        //     console.log(event);
        //   });

        return this.initializePromise;
    }

    cleanup() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    private navigate(state: KioskState) {
        this.state = state;
        if (this.onNavigated) {
            this.onNavigated();
        }
    }

    showMainMenu() {
        this.navigate(KioskState.MainMenu);
    }

    selectGame(gameId: string): void {
        this.selectedGameId = gameId;
        this.onGameSelected();
    }

    gameOver(score: number): void {
        if (this.state !== KioskState.PlayingGame) { return; }
        this.currentScore = score;
        this.exitGame(KioskState.EnterHighScore);
    }

    escapeGame(): void {
        if (this.state !== KioskState.PlayingGame) { return; }
        this.exitGame(KioskState.MainMenu);
    }

    exitGame(state: KioskState): void {
        if (this.state !== KioskState.PlayingGame) { return; }
        this.navigate(state);

        const gamespace = document.getElementsByTagName("BODY")[0];
        while (gamespace.firstChild) {
            gamespace.firstChild.remove();
        }

        this.siteElements.forEach(item => gamespace.appendChild(item));
    }

    launchGame(gameId: string): void {
        if (this.state === KioskState.PlayingGame) { return; }
        this.navigate(KioskState.PlayingGame);

        this.siteElements = [];
        const gamespace = document.getElementsByTagName("BODY")[0];
        while (gamespace.firstChild) {
            this.siteElements.push(gamespace.firstChild);
            gamespace.firstChild.remove();
        }

        const playUrl = `${configData.PlayUrlRoot}?id=${gameId}&hideSimButtons=1&noFooter=1&single=1&fullscreen=1`;
        function createIFrame(src: string) {
            const iframe: any = document.createElement("iframe");
            iframe.className = "sim-embed";
            iframe.frameBorder = "0";
            iframe.sandbox = "allow-popups allow-forms allow-scripts allow-same-origin";
            iframe.src = src;
            return iframe;
        }
        gamespace.appendChild(createIFrame(playUrl));
    }

    getAllHighScores(): { [index: string]: HighScore[] } {
        const json = localStorage.getItem(this.highScoresLocalStorageKey);
        if (!json) {
            return {};
        }

        const allHighScores: {[index: string]: HighScore[]} = JSON.parse(json);
        return allHighScores;
    }

    getHighScores(gameId: string): HighScore[] {
        const allHighScores = this.getAllHighScores();
        if (!allHighScores[gameId]) {
            return [];
        }

        return allHighScores[gameId];
    }
   
    saveHighScore(gameId: string, initials: string, score: number) {
        const allHighScores = this.getAllHighScores();
        if (!allHighScores[gameId]) {
            allHighScores[gameId] = [];
        }

        allHighScores[gameId].push(new HighScore(initials, score));

        allHighScores[gameId].sort((first, second) => second.score - first.score);
        allHighScores[gameId].splice(configData.HighScoresToKeep);

        localStorage.setItem(this.highScoresLocalStorageKey, JSON.stringify(allHighScores));        
    }

    resetHighScores() {
        localStorage.removeItem(this.highScoresLocalStorageKey);
    }
}
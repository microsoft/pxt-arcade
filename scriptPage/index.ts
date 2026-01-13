/// <reference path="../node_modules/pxt-core/built/pxtlib.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxt.d.ts" />

interface PubInfo {
    name: string;
    projectId: string;
    description?: string;
    versionSuffix?: string;
}

declare const pxtTickEvent: (eventName: string, data?: any) => void;
declare const ksRunnerReady: (callback: () => void) => void;

declare namespace pxt.runner {
    function simulateAsync(container: HTMLElement, options: any): Promise<any>;
}

(window as any).initScriptPage = function init(info: PubInfo) {
    const editorEmbedURL = `/${info.versionSuffix}#sandbox:${info.projectId}`;
    const showCodeButton = document.getElementById("show-code-button");
    const showCodeButtonIcon = showCodeButton.getElementsByTagName("i").item(0);
    const showCodeButtonOverflow = document.getElementById("show-code-button-overflow");
    const editCodeButton = document.getElementById("editCodeButton");
    const editCodeButtonOverflow = document.getElementById("editCodeButton-overflow");
    const embedContainer = document.getElementById("embed-frame");

    initDescriptionButton(info);
    initOverflowMenu();

    let builtSimJSPromise = Promise.resolve(undefined);
    if (/prebuilt(?:[:=])1/i.test(window.location.href)) {
        const builtSimJsUrl = `/static/builtjs/${info.projectId}.json`
        // kick off fetch immediately, no need to wait for ksrunnerready
        builtSimJSPromise = fetch(builtSimJsUrl)
            .then(resp => resp.json())
            .catch(e => {
                console.error("Failed to get prebuilt code")
                if (pxtTickEvent) {
                    pxtTickEvent("share.prebuilt.missing");
                }
            });
    }

    // Kick off the target config fetch in the background
    initTickEventProxyAsync(info);

    ksRunnerReady(function () {
        runSimulator(embedContainer);
    });

    let isGame = true;

    // The edit code button is a link, so this click event is just for telemetry
    const onEditClick = () => {
        pxtTickEvent('share.editcode', { target: "arcade" });
    };

    const onShowCodeClick = () => {
        while (embedContainer.firstChild) {
            embedContainer.firstChild.remove();
        }

        // toggle game vs. code view
        if (isGame) {
            pxtTickEvent('share.showcode', { target: "arcade" });
            embedContainer.appendChild(createIFrame(editorEmbedURL));
            showCodeButton.title = "Show Game";
            showCodeButtonIcon.className = "fas fa-gamepad";
            showCodeButtonOverflow.textContent = "Show Game";
        }
        else {
            pxtTickEvent('share.showgame', { target: "arcade" });
            showCodeButton.title = "Show Code";
            showCodeButtonIcon.className = "fas fa-code";
            showCodeButtonOverflow.textContent = "Show Code";
            runSimulator(embedContainer);
        }
        isGame = !isGame;
    };

    editCodeButton.addEventListener("click", onEditClick);
    editCodeButtonOverflow.addEventListener("click", onEditClick);
    editCodeButton.addEventListener("keydown", fireClickOnEnter);
    showCodeButton.addEventListener("click", onShowCodeClick);
    showCodeButtonOverflow.addEventListener("click", onShowCodeClick);

    function runSimulator(container: HTMLElement) {
        // yield to UI thread before compiling
        window.setTimeout(async function () {
            const builtSimJS = await builtSimJSPromise;

            const options = {
                id: info.projectId,
                builtJsInfo: builtSimJS,
            };
            console.log('simulating script');
            (window as any).pxtConfig = { simUrl: window.pxt.webConfig.simUrl };

            const built = await pxt.runner.simulateAsync(container, options);
            const loader = document.getElementById("loader");
            if (loader) loader.remove();
            if (!builtSimJS) {
                builtSimJSPromise = Promise.resolve(built);
            }
            console.log('simulator started...');

            if (built.parts.indexOf("multiplayer") !== -1) {
                enableMultiplayerUI(info);
            }
        }, 0);
    }

    function createIFrame(src: string) {
        const iframe = document.createElement("iframe");
        iframe.className = "sim-embed";
        iframe.setAttribute("sandbox", "allow-popups allow-forms allow-scripts allow-same-origin");
        iframe.frameBorder = "0";
        iframe.src = src;
        return iframe;
    }
}

function fireClickOnEnter(e: KeyboardEvent) {
    const charCode = (typeof e.which == "number") ? e.which : e.keyCode;
    if (charCode === 13 /* enter */ || charCode === 32 /* space */) {
        e.preventDefault();
        (e.currentTarget as HTMLElement).click();
    }
}
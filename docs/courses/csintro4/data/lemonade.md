# Lemonade Sales

Below is a game called **Lemonade City**. THe object of the game is use data analysis to run a sucessful lemonade business.

Each day, the player is told the weather forecast of the day. As expected the weather has large impact on the amount of lemonade sales. The hotter the day, the higher the demand for lemonade.

It is the player's job to determine the optimal amount of lemonade that should be sold. Each glass of lemonade costs the player $0.50 and sells for $1.00. The other main cost is the cost of operation. Each lemonade store costs $20/day to operate.

Any lemonade unpurchased at the end of the day is unable to last the night and is discarded.

Over the course of 5 days, try to make as much money as possible.

```sim
namespace lemonadeprompt {
    const MARGIN: number = 1;
    const PADDING: number = 1;
    const FONT: image.Font = image.font8;
    const SCREEN_BACKGROUND = 15;
    const BACKGROUND: number = 13;
    const COLOR: number = 15;
    const COST_COLOR: number = 2;
    const BLINK_COLOR: number = 11;


    let currentFunds = 0;
    let nextTemp = 0;

    let maxQuantity = 0;
    let quantity = 0;
    let confirm = false;
    let inPrompt = false;

    export function askForQuantity(temp: number, funds: number): number {
        currentFunds = funds;
        maxQuantity = ((currentFunds - 60) / 0.5);
        quantity = Math.round(maxQuantity / 4) * 2;
        nextTemp = temp;
        controller._setUserEventsEnabled(false);
        game.pushScene()


        registerHandlers();
        confirm = false;
        game.onPaint(function () {
            screen.fill(SCREEN_BACKGROUND);
            drawTitle();
            drawCurrentData();
            drawCosts();
            drawAmountLeft();
            if (inPrompt) {
                game.showDialog("Purchase " + quantity + " glasses?", undefined, "A = OK, B = CANCEL");
            }
        });
        pauseUntil(() => confirm);

        game.popScene();
        controller._setUserEventsEnabled(true);

        return quantity;
    }


    function drawTitle() {
        screen.fillRect(MARGIN, MARGIN,
            screen.width - (MARGIN * 2),
            FONT.charHeight + (PADDING * 2),
            BACKGROUND);
        screen.printCenter("Purchase Lemonade", MARGIN + PADDING, COLOR, FONT);

    }

    enum TextLineKind {
        Label,
        Equation,
        Amount
    }

    interface TextLine {
        text: string;
        kind: TextLineKind;
        lineNumber: number;
        cost: boolean;
    }

    function drawCurrentData() {
        let top = 2 * MARGIN + 1 * FONT.charHeight + 2 * PADDING;
        let lines: TextLine[] = [];
        const NUM_LINES = 4;
        lines.push({
            text: "Temperature High:",
            lineNumber: 0,
            kind: TextLineKind.Label,
            cost: false
        });
        lines.push({
            text: nextTemp + "°F",
            lineNumber: 1,
            kind: TextLineKind.Amount,
            cost: false
        }); lines.push({
            text: "Current Funds:",
            lineNumber: 2,
            kind: TextLineKind.Label,
            cost: false
        });
        lines.push({
            text: "$" + currentFunds + "",
            lineNumber: 3,
            kind: TextLineKind.Amount,
            cost: false
        });

        screen.fillRect(MARGIN, top, screen.width - 2 * MARGIN, PADDING * 2 + (NUM_LINES * FONT.charHeight), BACKGROUND);
        printLines(lines, top);
    }

    function drawCosts() {
        let top = 3 * MARGIN + 5 * FONT.charHeight + 4 * PADDING;
        let lines: TextLine[] = [];

        const NUM_LINES = 6;

        lines.push({
            text: "Operations:",
            lineNumber: 0,
            kind: TextLineKind.Label,
            cost: false
        });
        lines.push({
            text: "$20 x 3 =",
            lineNumber: 1,
            kind: TextLineKind.Equation,
            cost: false
        });
        lines.push({
            text: "$(60)",
            lineNumber: 1,
            kind: TextLineKind.Amount,
            cost: true
        });
        lines.push({
            text: "Lemonade:",
            lineNumber: 2,
            kind: TextLineKind.Label,
            cost: false
        });
        lines.push({
            text: "$0.50 x " + quantity + " =",
            lineNumber: 3,
            kind: TextLineKind.Equation,
            cost: false
        });
        lines.push({
            text: "$(" + (quantity * 0.5) + ")",
            lineNumber: 3,
            kind: TextLineKind.Amount,
            cost: true
        });
        lines.push({
            text: "Total:",
            lineNumber: 4,
            kind: TextLineKind.Label,
            cost: false
        });
        lines.push({
            text: "$(" + (60 + (quantity * 0.5)) + ")",
            lineNumber: 5,
            kind: TextLineKind.Amount,
            cost: true
        });

        screen.fillRect(MARGIN, top, screen.width - 2 * MARGIN, PADDING * 2 + (NUM_LINES * FONT.charHeight), BACKGROUND);
        if (!inPrompt && Math.round(game.runtime() / 500) % 2 == 0) {
            // blink
            const BLINK_PADDING = 2;
            let x = PADDING + 30 + ("$0.50 x ".length * FONT.charWidth);
            let y = 3 * MARGIN + 5 * FONT.charHeight + 4 * PADDING + PADDING + 3 * (FONT.charHeight);
            screen.fillRect(x - BLINK_PADDING, y - BLINK_PADDING,
                (("" + quantity).length * FONT.charWidth) + (BLINK_PADDING * 2),
                FONT.charHeight + (BLINK_PADDING * 2),
                BLINK_COLOR);
        }
        printLines(lines, top);
    }

    function drawAmountLeft() {
        let top = 4 * MARGIN + (11 * FONT.charHeight) + 6 * PADDING;
        let lines: TextLine[] = [];
        const NUM_LINES = 2;
        lines.push({
            text: "Funds Left:",
            lineNumber: 0,
            kind: TextLineKind.Label,
            cost: false
        });
        lines.push({
            text: "$" + (currentFunds - 60 - (quantity * 0.5)),
            lineNumber: 1,
            kind: TextLineKind.Amount,
            cost: false
        });


        screen.fillRect(MARGIN, top, screen.width - 2 * MARGIN, screen.height - top - MARGIN, BACKGROUND);
        printLines(lines, top);
    }

    function printLines(lines: TextLine[], top: number) {
        for (let line of lines) {
            let x = 0;
            let y = 0;
            if (line.kind == TextLineKind.Label) {
                x = PADDING;
            } else if (line.kind == TextLineKind.Equation) {
                x = PADDING + 30;
            } else if (line.kind == TextLineKind.Amount) {
                const MAX_LENGTH = 7;
                x = (screen.width - PADDING * 2) - PADDING - (MAX_LENGTH * FONT.charWidth);
            }
            y = PADDING + line.lineNumber * (FONT.charHeight);
            screen.print(line.text, x + MARGIN, y + top, line.cost ? COST_COLOR : COLOR, FONT);
        }
    }

    function adjustQuantity(increase: boolean) {
        if (!inPrompt) {
            quantity += increase ? 2 : -2;
            quantity = Math.max(0, Math.min(maxQuantity, quantity));
        }
    }

    function registerHandlers() {
        controller.up.onEvent(SYSTEM_KEY_DOWN, function () {
            adjustQuantity(true);
        })
        controller.up.onEvent(SYSTEM_KEY_REPEAT, function () {
            adjustQuantity(true);
        })
        controller.down.onEvent(SYSTEM_KEY_DOWN, function () {
            adjustQuantity(false);
        })
        controller.down.onEvent(SYSTEM_KEY_REPEAT, function () {
            adjustQuantity(false);
        })
        controller.B.onEvent(SYSTEM_KEY_DOWN, function () {
            inPrompt = false;
        })
        controller.A.onEvent(SYSTEM_KEY_DOWN, function () {
            if (!inPrompt) {
                inPrompt = true;
            } else {
                confirm = true;
                inPrompt = false;
            }
        })
    }
}


let storeSprites = [sprites.create(img`0`), sprites.create(img`0`), sprites.create(img`0`)];
let customerTimes: number[] = [];
let storeSales: number[] = [0, 0, 0];

storeSprites[0].setPosition(46, 48);
storeSprites[1].setPosition(135, 62);
storeSprites[2].setPosition(65, 80);


info.setLifeImage(img`
    . . 1 1 1 1 . .
    . 1 . . . . 1 .
    . 1 1 1 1 1 1 .
    . 1 . . . . 1 .
    . 1 5 5 5 5 1 .
    . 1 5 5 5 5 1 .
    . 1 5 5 5 5 1 .
    . 1 5 5 5 5 1 .
`);
info.setBackgroundColor(0x3)
info.setFontColor(0x1)

let waves: Sprite = null
scene.setBackgroundImage(img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 f f f 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b f f f f f f f b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b f f f f f 5 f f f f f b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f c f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b f f f f f 5 5 5 5 5 f f f f f b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f c c c c c f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b f f f f f 5 5 5 5 f f 5 5 5 f f f f f b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f c c c c c c c c c f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b f f f f f 5 5 5 5 f f f f f 5 5 5 5 f f f f f b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f c c c c c c c c c c c c c f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 b b b b
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 5 5 5 5 f f f f f f 5 5 5 5 5 5 5 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f c c c c c c c c c c c c c c c c c f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 b b b b b b
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 5 5 5 5 f f f f f f 5 5 5 5 5 5 5 5 5 5 5 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f c c c c c c c c c c c c c c c c c c c c c f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 b b b b b b b b
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 5 5 5 5 f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b b
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 5 5 5 5 f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b b b b
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f 5 5 5 5 f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b b
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 5 5 5 5 5 f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f 5 5 5 5 5 f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f c c f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b f f 5 5 f f f f f 5 5 5 5 5 f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f 5 f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f c c c c f f f f f c c c c c c c c c c c c c c c c c c c c c c f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b f f 5 5 5 5 f f f f f 5 5 5 5 5 f f f f f f f 5 5 5 5 5 5 5 5 5 f f f f f 5 5 5 f f b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f c c c c c c f f f f f c c c c c c c c c c c c c c c c c c f f f f f c c f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b f f 5 5 5 5 5 5 f f f f f 5 5 5 5 5 f f f f 5 5 5 5 5 5 5 5 f f f f f 5 5 5 5 5 f f b b b 7 7 7 7 7 7 7 7 7 7 7 7 f f c c c c c c c c f f f f f c c c c c c c c c c c c c c f f f f f c c c c f f 7 7 7 7 7 7 7 7 7 7 f f f 7 b b b b b b b b b b b b b b b b b b b b b b b b
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b f f 5 5 5 5 5 5 5 5 f f f f f 5 5 5 5 5 f 5 5 5 5 5 5 5 f f f f f 5 5 5 5 5 5 5 f f b b b b b 7 7 7 7 7 7 7 7 7 7 f f c c c c c c c c c c f f f f f c c c c c c c c c c f f f f f c c c c c c f f 7 7 7 7 7 7 7 7 f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b f f 5 5 5 5 5 5 5 5 5 5 f f f f f 5 5 5 5 5 5 5 5 5 f f f f f 5 5 5 5 5 5 5 5 5 f f b b b b b b b 7 7 7 7 7 7 7 7 f f c c c c c c c c c c c c f f f f f c c c c c c f f f f f c c c c c c c c f f 7 7 7 7 7 7 f f f f f 5 f f f f f b b b b b b b b b b b b b b b b b b b b b
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b f f 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f 5 5 5 5 5 f f f f f 5 5 5 5 5 5 5 5 5 5 5 f f b b b b b b b b b 7 7 7 7 7 7 f f c c c c c c c c c c c c c c f f f f f c c f f f f f c c c c c c c c c c f f 7 7 7 7 f f f f f 5 5 5 5 5 f f f f f b b b b b b b b 7 7 7 b b b b b b b b
    7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f 5 f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 f f b b b b b b b b b b b 7 7 7 7 f f c c c c c c c c c c c c c c c c f f f f f f f f c c c c c c c c c c c c f f 7 7 f f f f f 5 5 5 5 f f 5 5 5 f f f f f b b b b 7 7 7 7 7 7 7 b b b b b b
    7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f b b b b b b b b b b b b b 7 7 f f f c c c c c c c c c c c c c c c c c f f f f c c c c c c c c c c c c c c f f f f f f f 5 5 5 5 f f f f f 5 5 5 5 f f f f f 7 7 7 7 7 7 7 7 7 7 7 b b b b
    7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f b b b b b b b b b b b b b b b f f f f f c c c c c c c c c c c c c c c c f f c c c c c c c c c c c c c c c f f f f f 5 5 5 5 f f f f f f 5 5 5 5 5 5 5 f f f f f 7 7 7 7 7 7 7 7 7 7 7 b b
    7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f b b b b b b b b b b b b b b b b b f f f f f c c c c c c c c c c c c c c f f c c c c c c c c c c c c c f f f f f 5 5 5 5 f f f f f f 5 5 5 5 5 5 5 5 5 5 5 f f f f f 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f b b b b b b b b b b b b b b b b b b b f f f f f c c c c c c c c c c c c f f c c c c c c c c c c c f f f f f 5 5 5 5 f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f 7 7 7 7 7 7 7 7 7
    7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 5 5 5 5 5 f f f f 5 5 5 5 5 f f f f f 7 7 7 b b b b b b b b b b b b b b b b b b b f f f f f c c c c c c c c c c f f c c c c c c c c c f f f f f 5 5 5 5 f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f 7 7 7 7 7 7 7
    7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 f f f f f 5 5 5 5 5 5 5 5 5 5 5 f f 5 5 5 f f f f f f f f 5 f f f f f 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b f f f f f c c c c c c c c f f c c c c c c c c f f f f 5 5 5 5 f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f 7 7 7 7 7
    b b f f f f b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 5 5 5 5 5 5 5 5 5 f f 5 f f f f f c f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b f f f f f c c c c c c f f c c c c c c f f f f f f f 5 5 5 5 5 f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f 7 7 7 7 7
    f f f f f f f f b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 5 5 5 5 5 5 5 f f f f f f c c c c c f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b f f f f f c c c c f f c c c c f f f f f f f f f f f 5 5 5 5 5 f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f 7 7 7 7 7
    f f f c f f f f f f b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 5 5 5 5 f f f f f c c c c c c c c c f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b f f f f f c c f f c c f f f f f b f f 5 5 f f f f f 5 5 5 5 5 f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f 5 f f 7 7 7 7 7
    f c c c c c f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f c c c c c c c c c c c c c f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f b b b f f 5 5 5 5 f f f f f 5 5 5 5 5 f f f f f f f 5 5 5 5 5 5 5 5 5 f f f f f 5 5 5 f f 7 7 7 7 7
    c c c c c c c c f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f c c c c c c c c c c c c c c c c c f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b f f f f f f f f b b b b b f f 5 5 5 5 5 5 f f f f f 5 5 5 5 5 f f f f 5 5 5 5 5 5 5 5 f f f f f 5 5 5 5 5 f f 7 7 7 7 7
    c c c c c c c c c c f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f c c c c c c c c c c c c c c c c c c c c c f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b f f f f b b b b b b b f f 5 5 5 5 5 5 5 5 f f f f f 5 5 5 5 5 f 5 5 5 5 5 5 5 f f f f f 5 5 5 5 5 5 5 f f 7 7 7 7 7
    c c c c c c c c c c c c f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f 5 5 5 5 5 5 5 5 5 5 f f f f f 5 5 5 5 5 5 5 5 5 f f f f f 5 5 5 5 5 5 5 5 5 f f 7 7 7 7 7
    c c c c c c c c c c c c c c f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b b b b f f 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f 5 5 5 5 5 f f f f f 5 5 5 5 5 5 5 5 5 5 5 f f 7 7 7 7 7
    c c c c c c c c c c c c c c c c f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b b f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f 5 f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 7 7 7 7 7
    c c c c c c c c c c c c c c c c c c f f f f f f 7 7 7 7 7 7 7 7 7 7 f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 7 7 7 7 7
    c c c c c c c c c c c c c c c c c c c c c f f f 7 7 7 7 7 7 7 7 7 7 f f c c f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 7 7 7 7 7
    c c c c c c c c c c c c c c c c c c c c c f f f 7 7 7 7 7 7 7 7 7 7 f f c c c c f f f f f c c c c c c c c c c c c c c c c c c c c c c f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 7 7 7 7 7
    c c c c c c c c c c c c c c c c c c c f f f f f 7 7 7 7 7 7 7 7 7 7 f f c c c c c c f f f f f c c c c c c c c c c c c c c c c c c f f f f f c c f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f 7 7 7 7 7
    c c c c c c c c c c c c c c c c c f f f f f f f 7 7 7 7 7 7 7 7 7 7 f f c c c c c c c c f f f f f c c c c c c c c c c c c c c f f f f f c c c c f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f 7 7 7 7 7 7
    c c c c c c c c c c c c c c c f f f f f c c f f b 7 7 7 7 7 7 7 7 7 f f c c c c c c c c c c f f f f f c c c c c c c c c c f f f f f c c c c c c f f 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f 5 5 5 5 5 5 5 5 5 5 5 f f 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f 7 7 7 7 7 7 7 7
    c c c c c c c c c c c c c f f f f f c c c c f f b b b 7 7 7 7 7 7 7 f f c c c c c c c c c c c c f f f f f c c c c c c f f f f f c c c c c c c c f f 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f 5 5 5 5 5 5 5 5 5 f f 5 5 5 5 5 5 5 5 5 5 f f f f f 7 7 7 7 7 7 7 7 7 7
    f c c c c c c c c c c f f f f f c c c c c c f f b b b b b 7 7 7 7 7 f f c c c c c c c c c c c c c c f f f f f c c f f f f f c c c c c c c c c c f f 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b 7 7 7 b b b b b b b b b b b b b b b b f f f f f 5 5 5 5 5 5 5 f f 5 5 5 5 5 5 5 5 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7
    f f f c c c c c c f f f f f c c c c c c c c f f b b b b b b b 7 7 7 f f c c c c c c c c c c c c c c c c f f f f f f f f c c c c c c c c c c c c f f 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b f f f f f 5 5 5 5 5 f f 5 5 5 5 5 5 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    f f f f f c c f f f f f c c c c c c c c c c f f b b b b b b b b b 7 f f f c c c c c c c c c c c c c c c c c f f f f c c c c c c c c c c c c c c f f 7 7 7 7 b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b f f f f f 5 5 5 f f 5 5 5 5 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    c c f f f f f f f f c c c c c c c c c c c c f f b b b b b b b b b b f f f f f c c c c c c c c c c c c c c c c f f c c c c c c c c c c c c c c c f f 7 7 b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b f f f f f 5 f f 5 5 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    c c c c f f f f c c c c c c c c c c c c c c f f b b b b b b b b b b b b f f f f f c c c c c c c c c c c c c c f f c c c c c c c c c c c c c c f f f b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    c c c c c f f c c c c c c c c c c c c c c c f f b b b b b b b b b b b b b b f f f f f c c c c c c c c c c c c f f c c c c c c c c c c c c f f f f f b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    c c c c c f f c c c c c c c c c c c c c c f f f b b b b b b b b b b b b b b b b f f f f f c c c c c c c c c c f f c c c c c c c c c c f f f f f b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 b b b b b b b b b 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    c c c c c f f c c c c c c c c c c c c f f f f f b b b b b b b b b b b b b b b b b b f f f f f c c c c c c c c f f c c c c c c c c f f f f f b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    c c c c c f f c c c c c c c c c c f f f f f 7 7 7 7 b b b b b b b b b b b b b b b b b b f f f f f c c c c c c f f c c c c c c f f f f f b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    c c c c c f f c c c c c c c c f f f f f 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b f f f f f c c c c f f c c c c f f f f f b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    c c c c c f f c c c c c c f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b f f f f f c c f f c c f f f f f b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    f c c c c f f c c c c f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    f f f c c f f c c f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b f f f f f f f f b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7
    f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b f f f f b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7
    7 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7
    7 7 7 7 f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f b b b b b b b b b b 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f c c c c f f f f f f b b b b b b 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f c c c c c c c c f f f f f f b b 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 b b b b b 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f c c c c c c c c c c c c f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b 7 7 7 b b b b b b b b 8 8 8 8 8 8 8 8 8 b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f c c c c c c c c c c c c c c c c f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 b b b b b b b b b b b b b b 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b f f f f b b b b b b b b b b b b
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f c c c c c c c c c c c c c c c c c c c c f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 b f f f f f f f f b b b b b b b b b b
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b f f f f f c f f f f f f b b b b b b b b
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b f f f f f c c c c c f f f f f f b b b b b b
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b f f f f f c c c c c c c c c f f f f f f b b 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f 7 7 7 7 7 7 f f f 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b f f f f f c c c c c c c c c c c c c f f f f f f 7 7
    b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b f f c c f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f 7 7 7 7 f f f f f f f 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b f f f f f c c c c c c c c c c c c c c c c c f f f f f f
    b b b b 7 7 7 7 7 7 7 7 7 7 b b b b b f f c c c c f f f f f c c c c c c c c c c c c c c c c c c c c c c f f f f f f f 7 7 f f f f f 5 f f f f f 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b f f f f f c c c c c c c c c c c c c c c c c c c c c f f f f
    b b b b b b 7 7 7 7 7 7 b b b b b b b f f c c c c c c f f f f f c c c c c c c c c c c c c c c c c c f f f f f c c f f f f f f f 5 5 5 5 5 f f f f f 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c f f
    b b b b b b b b 7 7 b b b b b b b b b f f c c c c c c c c f f f f f c c c c c c c c c c c c c c f f f f f c c c c f f f f f 5 5 5 5 f f 5 5 5 f f f f f 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    b b b b b b b b b b b b b b b b b b b f f c c c c c c c c c c f f f f f c c c c c c c c c c f f f f f c c c c f f f f f 5 5 5 5 f f f f f 5 5 5 5 f f f f f 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    b b b b b b b b b b b b b b b b b b b f f c c c c c c c c c c c c f f f f f c c c c c c f f f f f c c c c f f f f f 5 5 5 5 f f f f f f 5 5 5 5 5 5 5 f f f f f 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c
    b b b b b b b b b b b b b b b b b b b f f c c c c c c c c c c c c c c f f f f f c c f f f f f c c c c f f f f f 5 5 5 5 f f f f f f 5 5 5 5 5 5 5 5 5 5 5 f f f f f 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 b b b b b b b f f c c f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c
    b b b b b b b b b b b b b b b b b b b f f c c c c c c c c c c c c c c c c f f f f f f f f c c c c f f f f f 5 5 5 5 f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 f f f f b b b b b f f c c c c f f f f f c c c c c c c c c c c c c c c c c c c c c c f
    b b b b b b b b b b b b b b b b b b b f f f c c c c c c c c c c c c c c c c c f f f f c c c c f f f f f 5 5 5 5 f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 f f f f f f f f b b b f f c c c c c c f f f f f c c c c c c c c c c c c c c c c c c f f f
    d b b b b b b b b b b b b b b b b b b f f f f f c c c c c c c c c c c c c c c c f f c c c c f f f f 5 5 5 5 f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b f f f f f c f f f f f f b f f c c c c c c c c f f f f f c c c c c c c c c c c c c c f f f f f
    d d d b b b b b b b b b b b b b b b b b b f f f f f c c c c c c c c c c c c c c f f c c c c f f f f f 5 5 5 5 5 f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b f f f f f c c c c c f f f f f f f c c c c c c c c c c f f f f f c c c c c c c c c c f f f f f c c
    d d d d d b b b b b b b b b b b b b b b b b b f f f f f c c c c c c c c c c c c f f c c c c f f f f f f f 5 5 5 5 5 f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b f f f f f c c c c c c c c c f f f f f f c c c c c c c c c c c f f f f f c c c c c c f f f f f c c c c
    d d d d d d d b b b b b b b b b b b b b b b b b b f f f f f c c c c c c c c c c f f c c c c f f 5 5 f f f f f 5 5 5 5 5 f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f 5 f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b f f f f f c c c c c c c c c c c c c f f f f f f c c c c c c c c c c c f f f f f c c f f f f f c c c c c c
    d d d d d d d d d b b b b b b b b b b b b b b b b b b f f f f f c c c c c c c c f f c c c c f f 5 5 5 5 f f f f f 5 5 5 5 5 f f f f f f f 5 5 5 5 5 5 5 5 5 f f f f f 5 5 5 f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b f f f f f c c c c c c c c c c c c c c c c c f f f f f f c c c c c c c c c c c f f f f f f f f c c c c c c c c
    d d d d d d d d d d d b b b b b b b b b b b b b b b b b b f f f f f c c c c c c f f c c c c f f 5 5 5 5 5 5 f f f f f 5 5 5 5 5 f f f f 5 5 5 5 5 5 5 5 f f f f f 5 5 5 5 5 f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f c c c c c c c c c c c c c c c c c c c c c f f f f f f c c c c c c c c c c c f f f f c c c c c c c c c c
    d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b f f f f f c c c c f f c c c c f f 5 5 5 5 5 5 5 5 f f f f f 5 5 5 5 5 f 5 5 5 5 5 5 5 f f f f f 5 5 5 5 5 5 5 f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f c c c c c c c c c c f f c c c c c c c c c c c
    d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b f f f f f c c f f c c f f f f 5 5 5 5 5 5 5 5 5 5 f f f f f 5 5 5 5 5 5 5 5 5 f f f f f 5 5 5 5 5 5 5 5 5 f f 7 7 7 7 7 7 7 7 7 7 7 f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f c c c c c c c c f f c c c c c c c c c c c
    d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f 5 5 5 5 5 f f f f f 5 5 5 5 5 5 5 5 5 5 5 f f 7 7 7 7 7 7 7 7 7 7 b f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f c c c c c c c c f f c c c c c c c c c c c
    d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b f f f f f f f f 7 f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f 5 f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 7 7 7 7 7 7 7 7 b b b f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f c c c c c c c c f f c c c c c c c c c c f
    d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b f f f f 7 7 7 f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 7 7 7 7 7 7 b b b b b f f c c f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f c c c c c c c c f f c c c c c c c c f f f
    d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b 7 7 7 7 f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 7 7 7 7 b b b b b b b f f c c c c f f f f f c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f c c c c c c f f c c c c c c f f f f f
    d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b 7 7 f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 7 7 b b b b b b b b b f f c c c c c c f f f f f c c c c c c c c c c c c c c c c c c f f f f f c c f f f f f f c c c c f f c c c c f f f f f 7 7
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f b b b b b b b b b b b f f c c c c c c c c f f f f f c c c c c c c c c c c c c c f f f f f c c c c f f b f f f f f c c f f c c f f f f f 7 7 7 7
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f b b b b b b b b b b b b f f c c c c c c c c c c f f f f f c c c c c c c c c c f f f f f c c c c c c f f b b b f f f f f f f f f f f f 7 7 7 7 7 7
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b f f f f f 5 5 5 5 5 5 5 5 5 5 5 f f 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f b b b b b b b b b b b b b b f f c c c c c c c c c c c c f f f f f c c c c c c f f f f f c c c c c c c c f f b b b b b f f f f f f f f 7 7 7 7 7 7 7 7
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b f f f f f 5 5 5 5 5 5 5 5 5 f f 5 5 5 5 5 5 5 5 5 5 f f f f f b b b b b b b b b b b b b b b b f f c c c c c c c c c c c c c c f f f f f c c f f f f f c c c c c c c c c c f f b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b f f f f f 5 5 5 5 5 5 5 f f 5 5 5 5 5 5 5 5 f f f f f b b b b b b b b b b b b b b b b b b f f c c c c c c c c c c c c c c c c f f f f f f f f c c c c c c c c c c c c f f b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b f f f f f 5 5 5 5 5 f f 5 5 5 5 5 5 f f f f f b b b b b b b b b b b b b b b b b b b b f f f c c c c c c c c c c c c c c c c c f f f f c c c c c c c c c c c c c c f f b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b f f f f f 5 5 5 f f 5 5 5 5 f f f f f b b b b b b b b b b b b b b b b b b b b b 7 f f f f f c c c c c c c c c c c c c c c c f f c c c c c c c c c c c c c c c f f b b b b b b b b b b b b b b 7 7 7 7 7 7 7
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b f f f f f 5 f f 5 5 f f f f f b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 f f f f f c c c c c c c c c c c c c c f f c c c c c c c c c c c c c c f f f b b b b b b b b b b b b b b b b 7 7 7 7 7
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 f f f f f c c c c c c c c c c c c f f c c c c c c c c c c c c f f f f f b b b b b b b b b b b b b b b b b b 7 7 7
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b f f f f f f f b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f c c c c c c c c c c f f c c c c c c c c c c f f f f f 7 7 7 b b b b b b b b b b b b b b b b b b b 7
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b f f f b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f c c c c c c c c f f c c c c c c c c f f f f f 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f c c c c c c f f c c c c c c f f f f f 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f c c c c f f c c c c f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f c c f f c c f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b
`)
waves = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    6 6 6 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    8 8 8 6 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    8 8 8 8 6 6 6 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    8 8 8 8 8 8 8 6 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    8 8 8 8 8 8 8 8 6 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    8 8 8 8 8 8 8 8 8 6 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    8 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . .
    8 8 8 8 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . .
    8 8 8 8 8 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . .
    8 8 8 8 8 8 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . .
    8 8 8 8 8 8 8 6 8 8 8 8 8 8 6 6 6 6 6 6 8 8 8 8 8 8 8 8 6 6 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . .
    8 8 8 8 8 8 8 6 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 8 8 8 8 8 8 6 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . .
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 8 8 8 8 8 8 6 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . .
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 8 8 8 8 8 8 6 6 8 8 8 8 8 8 . . . . . . . . . . . . . . .
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 8 8 8 8 8 8 8 8 6 6 8 8 8 8 8 . 8 8 . . . . . . . . . . .
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 8 8 8 8 8 8 8 8 . . . . . . .
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . .
`)
waves.setPosition(15, 111);


const lengthOfDay = 20000;

let time = 0;
const interval = 100;

const initialInvestment = 150;
info.setScore(initialInvestment);
showIntroDialog();

let dayNumber = 0;

newDay();
game.onUpdateInterval(interval, function () {
    waves.setPosition(15 + 6 * Math.sin(game.runtime() / 1000), 111 - 3 * Math.sin(game.runtime() / 1000))
    let newPallet = control.createBuffer(48);
    let lightFactor = 0.6 + 0.4 * ((1 - Math.cos(2 * Math.PI * time / lengthOfDay)) / 2);
    for (let i = 0; i < newPallet.length; i++) {
        let value = origPalette.getNumber(NumberFormat.UInt8BE, i);
        newPallet.setNumber(NumberFormat.UInt8BE, i, Math.round(value * lightFactor));
    }
    while (customerTimes.length > 0 && customerTimes[0] <= time) {
        customerBuy();
        customerTimes.splice(0, 1);
    }
    updateSales();
    image.setPalette(newPallet);
    if (time == lengthOfDay) {
        dayEnd();
    } else {
        time += interval;
    }
})

function showIntroDialog() {
    game.showLongText("Welcome to the wonderful Lemonade City!", DialogLayout.Top);
    game.showLongText("You are in charge of determining how much lemonade to sell to customers.", DialogLayout.Full);
    game.showLongText("Each day, you will be given the weather forecast and will have to estimate how many people will want lemonade.", DialogLayout.Full);
    game.showLongText("The hotter the day, the more people want lemonade. You can buy lemonade for $0.50 and can sell it for $1.00", DialogLayout.Full);
    game.showLongText("Buy too much lemonade and it will expire overnight and not be sold. Buy too little and you won't make enough to cover the costs of the stores. ($20 per store per day)", DialogLayout.Full);
    game.showLongText("Good Luck! You will have 5 days to make as much money as you can!", DialogLayout.Full);
}

function dayEnd() {
    image.setPalette(origPalette);
    displayDayEndScreen();
    if (dayNumber < 5) {
        newDay();
    } else {
        game.splash("After subtracting the $" + initialInvestment + " initial investment");
        info.changeScoreBy(-initialInvestment);
        if (info.score() >= 0) {
            game.splash("Congrats! You made $" + (info.score()));
            game.over(true);
        } else {
            game.splash("Oh no! You lost $" + (-info.score()));
            game.over(false);
        }
    }
}

function displayDayEndScreen() {
    let sum = 0;
    for (let val of storeSales) {
        sum += val;
    }
    game.splash("You sold " + sum + " glasses");
}

function newDay() {
    if (info.score() <= 60) {
        game.splash("Oh no! You don't have enough money to sell lemonade!");
        game.over(false);
    }
    time = 0;
    dayNumber++;
    storeSales = [0, 0, 0];
    let temp = Math.round(calculateNorm(76, 8));
    displayNewDayScreen(temp);
    let numberOfCustomers = calculateCustomers(temp);
    customerTimes = [];
    for (let i = 0; i < numberOfCustomers; i++) {
        customerTimes.push(interval * randint(1, (lengthOfDay / interval) - 1));
    }
    sortCustomers();
}

function displayNewDayScreen(temp: number) {
    let order: number = lemonadeprompt.askForQuantity(temp, info.score());

    info.setScore(info.score() - (order * 0.5) - (20 * 3));
    info.setLife(order);
}

function sortCustomers() {
    // simple selection sort.
    for (let i = 0; i < customerTimes.length - 1; ++i) {
        for (let j = i + 1; j < customerTimes.length; ++j) {
            if (customerTimes[i] > customerTimes[j]) {
                let temp: number = customerTimes[i];
                customerTimes[i] = customerTimes[j];
                customerTimes[j] = temp;
            }
        }
    }
}

function customerBuy() {
    if (info.hasLife() && info.life() > 0) {
        const storeIndex = randint(0, 2);
        storeSales[storeIndex]++;
        info.changeScoreBy(1);
        info.changeLifeBy(-1);
    }
}

info.onLifeZero(function () {

});

function updateSales() {
    storeSprites.forEach(function (value: Sprite, index: number) {
        value.say("" + storeSales[index]);
    })
}

function calculateCustomers(temp: number) {
    return calculateNorm(5 * temp - 200, 8);
}


function calculateNorm(mean: number, std: number) {
    // Uses a Box-Muller Transform to generate a normally distributed sampling
    let v1: number = Math.random();
    let v2: number = Math.random();
    return std * (Math.sqrt(-2 * Math.log(v2)) * Math.cos(2 * Math.PI * v1)) + mean;
}

const origPalette = hex`
    000000
    ffffff
    ff2121
    ff93c4
    ff8135
    fff609
    249ca3
    78dc52
    003fad
    87f2ff
    8e2ec4
    a4839f
    5c406c
    e5cdc4
    91463d
    000000`
```

## Example #1a: Plotting Data

<!---
    TODO: Replace with actual extension name
-->

The extension pxt-arcade-graphing extension has many helpful functions for displaying data. The first one to look at ``display.plotSeries``.

```typescript-ignore
let xValues: number[] = [1, 2, 3, 4, 5, 6];
let yValues: number[] = [6, 5, 4, 3, 2, 1];

display.plotSeries(xValues, yValues);
```

This function takes 2 arrays: an array of x values and an array of y values and plots them on a graph. Each data point on the chart corresponds with an index. Looking at the example above, the first data point will have an x value of the ``xValues[0]`` which is ``1`` and a y value of ``yValues[0]`` which is ``6``.


## Example #1b: Importing Data

<!---
    TODO: Replace with actual extension name
-->

For this Data Analysis section, there are a few data sets provided. Importing these data sets is done by importing the extension pxt-arcade-datasets. Once imported, there will be namespaces with functions to access the specific data for that lesson.

This lesson will use the data set with the namespace ``lemonadedata``. This is a data set that contains data about the temperature and customer demand for lemonade on different days.

``lemonadedata`` has the following functions and constants.

|Name| Description |
|---|---|
|``lemonadedata.NUMBER_OF_DAYS: number`` | Returns the number of days recorded in the data set|
|``lemonadedata.getTemperature(day: number): number``| Returns the temperature recorded for the day specified|
|``lemonadedata.getSales(day: number): number``| Returns the amount of lemonade sold (in glasses) on the day specified|


```typescript-ignore
let temperatures: number[] = [];
let sales: number[] = [];

for (let i = 0; i < lemonadedata.NUMBER_OF_DAYS; i++) {
    temperatures.push(lemonadedata.getTemperature(i));
    sales.push(lemonadedata.getSales(i));
}
game.splash("Temperature Mean: " + stats.mean(temperatures));
game.splash("Sales Mean: " + stats.mean(sales));
```

## Student Task #1: Graphing Lemonade Data

1. Observe Example #1a and how it plots data using certain x and y values
2. Observe Example #1b and how it gets the data about sales and temperature
3. Build 2 arrays of data: One that is the temperature data and another that is the sales data
4. Plot the data using the temperature as the x values and sales as the y values

![Lemonade Sales Graph](/static/courses/csintro4/data/lemonade-graph-1.png)

## Example #2: Correlation

The **correlation** of two arrays is the measure of how well the increase of one results in an increase in the other. For example, it's expected that data points with higher temperatures also have higher lemonade sales.

### ~hint

**Correlation &ne; Causation**

Correlation is just a measure of the observed sample. It may suggest that there is a causal relationship within the data, but it does not prove that an increase of one variable results in an increase (or decrease) of another.

### ~

The correlation of data falls between -1 and 1. If the correlation is 0, then the two variables seem to be completely independent. A positive correlation means that as one variable increases, so does the other. A negative correlation means that if one variable increases, the other decreases. The father away from 0, the more true this trend is.

Correlation can be calculated the following way:

```typescript-ignore
let xValues: number[] = [10, 20, 30, 40, 50, 60];
let yValues: number[] = [70, 50, 50, 20, 30, 0];

game.splash("Correlation = " + stats.correlation(xValues, yValues));
```

## Student Task #2: Correlated Lemonade

1. Import the data as shown in Example 1b
2. Calculate the correlation between temperature and sales

## Example #3: Line of Best Fit

For every data sets with x and y values that contains at least 2 data points, there exists what is known as the **Line of Best Fit**. This is a line that best approximates the data. It's not guaranteed to go through every point, but it will at least be the closest to all the points in general.

Calculating the line of best fit is beyond the scope of this course, but the extensions used for this section contain functions that will calculate it.

Use the following functions when using the line of best fit


|Name| Description |
|---|---|
|``display.graphBestFit(xValues: number[], yValues: number[])`` | Graphs the line of best fit for the given data|
|``stats.slope(xValues: number[], yValues: number[]): number``| Returns the slope of the line of best fit for the given data|
|``stats.intercept(xValues: number[], yValues: number[]): number``| Returns the intercept of the line of best fit for the given data|
|``stats.lineOfBestFit(xValues: number[], yValues: number[]): number[]``| Returns a 2 element array consisting of the form [slope, intercept] for the line of best fit|


```typescript-ignore
let xValues: number[] = [10, 20, 30, 40, 50, 60];
let yValues: number[] = [70, 50, 50, 20, 30, 0];

display.plotSeries(xValues, yValues);
display.graphBestFit(xValues, yValues);
game.splash("Slope = " + stats.slope(xValues, yValues));
game.splash("Intercept = " + stats.intercept(xValues, yValues));
```

## Student Task #3: Line of Best Lemonade

1. Import the data as shown in Example 1b
2. Plot the data on the display
3. Graphs the line of best fit for the data to the display
4. Observe whether or not this line approximates the data well
5. Splash the slope of the line of best fit
6. Splash the intercept of the line of best fit
7. **Challenge:** Go back and play Lemonade City, but use data analysis to estimate customer sales

### ~hint

To approximate customer sales for a given temperature, simply use the following equation:

*sales* &approx; (*slope* &times; *temperature*) + *intercept*

### ~
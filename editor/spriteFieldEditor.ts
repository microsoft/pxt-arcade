/// <reference path="../node_modules/pxt-core/localtypings/blockly.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>

/// <reference path="./spriteEditor.ts" />


namespace pxt.editor {
    const PREVIEW_WIDTH = 40;
    const PREVIEW_HEIGHT = 40;
    const TOP_BOTTOM_MARGIN = 5;

    // These are the characters used to compile, for a list of every supported character see parseBitmap()
    const hexChars = [".", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

    export class FieldSpriteEditor extends Blockly.Field implements Blockly.FieldCustom {
        public isFieldCustom_ = true;

        private params: any;
        private editor: mkcd.SpriteEditor;
        private preview: mkcd.BitmapImage;
        private state: mkcd.Bitmap;

        constructor(text: string, params: any, validator?: Function) {
            super(text, validator);
            this.params = params;
        }

        init() {
            if (this.fieldGroup_) {
                // Field has already been initialized once.
                return;
            }
            // Build the DOM.
            this.fieldGroup_ = Blockly.utils.createSvgElement('g', {}, null);
            if (!this.visible_) {
                (this.fieldGroup_ as any).style.display = 'none';
            }

            if (!this.state) {
                this.state = new mkcd.Bitmap(16, 16);
            }

            this.redrawPreview();

            this.updateEditable();
            this.sourceBlock_.getSvgRoot().appendChild(this.fieldGroup_);

            // Force a render.
            this.render_();
            (this as any).mouseDownWrapper_ = Blockly.bindEventWithChecks_((this as any).getClickTarget_(), "mousedown", this, (this as any).onMouseDown_)
        }

        /**
         * Show the inline free-text editor on top of the text.
         * @private
         */
        showEditor_() {
            // If there is an existing drop-down someone else owns, hide it immediately and clear it.
            Blockly.DropDownDiv.hideWithoutAnimation();
            Blockly.DropDownDiv.clearContent();

            let contentDiv = Blockly.DropDownDiv.getContentDiv();

            this.editor = new mkcd.SpriteEditor(this.preview.bitmap());
            this.editor.setPreview(this.preview);
            this.editor.render(contentDiv);
            this.editor.rePaint();

            goog.style.setHeight(contentDiv, this.editor.outerHeight());
            goog.style.setWidth(contentDiv, this.editor.outerWidth());

            Blockly.DropDownDiv.setColour("#2c3e50", "#2c3e50");
            Blockly.DropDownDiv.showPositionedByBlock(this, this.sourceBlock_, () => {
                this.state = this.preview.image;
                if (this.sourceBlock_ && Blockly.Events.isEnabled()) {
                    Blockly.Events.fire(new Blockly.Events.BlockChange(
                        this.sourceBlock_, 'field', this.name, this.text_, this.getText()));
                }

                goog.style.setHeight(contentDiv, "unset");
                goog.style.setWidth(contentDiv, "unset");
            });
            this.editor.layout();
        }


        private isInFlyout() {
            return (this.sourceBlock_.workspace.getParentSvg() as SVGElement).className.baseVal == "blocklyFlyout";
        }

        render_() {
            super.render_();
            if (this.preview) {
                this.size_.height = this.preview.outerHeight() + TOP_BOTTOM_MARGIN * 2;
                this.size_.width = this.preview.outerWidth() + TOP_BOTTOM_MARGIN * 2;
            }
        }

        getText() {
            if (!this.state) {
                return "img``";
            }
            let res = "img`";

            for (let r = 0; r < this.state.height; r++) {
                res += "\n"
                for (let c = 0; c < this.state.width; c++) {
                    res += hexChars[this.state.get(c, r)] + " ";
                }
            }

            res += "\n`";

            return res;
        }

        setText(newText: string) {
            if (newText == null) {
                return;
            }
            this.parseBitmap(newText);

            if (this.preview) {
                this.redrawPreview();
            }

            super.setText(newText);
        }

        private redrawPreview() {
            this.fieldGroup_.innerHTML = "";
            this.preview = new mkcd.BitmapImage({
                //backgroundFill: this.sourceBlock_.getColourSecondary(),
                outerMargin: 2,
                cellClass: "pixel-cell"
            }, this.state, [
                    "rgba(0, 0, 0, 0)",
                    "#ffffff", // white
                    "#33e2e4", // teal
                    "#05b3e0", // blue
                    "#3d30ad", // violet
                    "#b09eff", // light violet
                    "#5df51f", // green
                    "#6a8927", // dollar green
                    "#65471f", // brown
                    "#98294a", // bordowy
                    "#f80000", // red
                    "#e30ec0", // pink
                    "#ff9da5", // light pink
                    "#ff9005", // orange
                    "#efe204", // yellow
                    "#000000", // black
                ]);

            this.preview.translate(0, TOP_BOTTOM_MARGIN);
            this.preview.setGridDimensions(PREVIEW_WIDTH);
            this.fieldGroup_.appendChild(this.preview.getView().el);
        }

        private parseBitmap(newText: string) {
            // Strip the tagged template string business and the whitespace. We don't have to exhaustively
            // replace encoded characters because the compiler will catch any disallowed characters and throw
            // an error before the decompilation happens. 96 is backtick and 9 is tab
            newText = newText.replace(/[ `]|(?:&#96;)|(?:&#9;)|(?:img)/g, "").trim();
            newText = newText.replace(/&#10;/g, "\n");

            const rows = newText.split("\n");

            // We support "ragged" sprites so not all rows will be the same length
            const sprite: number[][] = [];
            let spriteWidth = 0;

            for (let r = 0; r < rows.length; r++) {
                const row = rows[r];
                const rowValues: number[] = [];
                for (let c = 0; c < row.length; c++) {
                    // This list comes from libs/screen/targetOverrides.ts
                    switch (row[c]) {
                        case "0": case ".": rowValues.push(0); break;
                        case "1": case "#": rowValues.push(1); break;
                        case "2": case "T": rowValues.push(2); break;
                        case "3": case "t": rowValues.push(3); break;
                        case "4": case "N": rowValues.push(4); break;
                        case "5": case "n": rowValues.push(5); break;
                        case "6": case "G": rowValues.push(6); break;
                        case "7": case "g": rowValues.push(7); break;
                        case "8": rowValues.push(8); break;
                        case "9": rowValues.push(9); break;
                        case "a": case "A": case "R": rowValues.push(10); break;
                        case "b": case "B": case "P": rowValues.push(11); break;
                        case "c": case "C": case "p": rowValues.push(12); break;
                        case "d": case "D": case "O": rowValues.push(13); break;
                        case "e": case "E": case "Y": rowValues.push(14); break;
                        case "f": case "F": case "W": rowValues.push(15); break;
                    }
                }

                if (rowValues.length) {
                    sprite.push(rowValues);
                    spriteWidth = Math.max(spriteWidth, rowValues.length);
                }
            }

            const spriteHeight = sprite.length;

            if (spriteHeight === 0 || spriteWidth === 0) {
                // This isn't great because it changes the underlying code; the user entered
                // an empty/invalid sprite and we are converting it to an empty 16x16 sprite
                // next time the project saves. The best behavior would be to flag this in
                // the decompiler and return a grey block but that's not supported.
                this.state = new mkcd.Bitmap(16, 16);
                return;
            }

            this.state = new mkcd.Bitmap(spriteWidth, spriteHeight)

            for (let r = 0; r < spriteHeight; r++) {
                const row = sprite[r];
                for (let c = 0; c < spriteWidth; c++) {
                    if (c < row.length) {
                        this.state.set(c, r, row[c]);
                    }
                    else {
                        this.state.set(c, r, 0);
                    }
                }
            }
        }
    }
}
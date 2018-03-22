/// <reference path="../sim/svg.ts" />
/// <reference path="./tools.ts" />

namespace mkcd {
    import svg = svgUtil;

    export interface ToolbarProps {
        width: number;
        height: number;
        buttonMargin: number;
        optionsMargin: number;
        rowMargin: number;
    }

    export interface ToolbarHost {
        setActiveTool(tool: PaintTool): void;
        setToolWidth(width: number): void;
        undo(): void;
        redo(): void;
        resize(width: number, height: number): void;

        canvasWidth(): number;
        canvasHeight(): number;
    }

    const sizePresets: [number, number][] = [
        [8, 8],
        [8, 16],
        [16, 16],
        [16, 32],
        [32, 32],
    ];

    // The ratio of the toolbar height that is taken up by the options (as opposed to the buttons)
    const TOOLBAR_OPTIONS_RATIO = 0.33333333;

    export class Toolbar {
        protected activeTool = PaintTool.Normal;
        protected toolWidth = 1;

        protected optionBar: svg.Group;
        protected toolsBar: svg.Group;

        protected pencilButton: FontIconButton;
        protected rectButton: FontIconButton;
        protected eraseButton: FontIconButton;
        protected fillButton: FontIconButton;

        protected undoButton: FontIconButton;
        protected redoButton: FontIconButton;

        protected resizeButton: FontIconButton;
        protected cursorSizes: CursorSizeButton[];
        protected selectedSize = 2;

        protected toolbarHeight: number;
        protected optionsHeight: number;

        constructor(protected g: svg.Group, protected props: ToolbarProps, protected host: ToolbarHost) {
            this.toolsBar = g.group();
            this.optionBar = g.group();

            const canvasColumns = this.host.canvasWidth();
            const canvasRows = this.host.canvasHeight();
            sizePresets.forEach(([columns, rows], index) => {
                if (columns === canvasColumns && rows === canvasRows) {
                    this.selectedSize = index;
                }
            });


            this.createButtons();
            this.createOptionsBar();
            this.layout();
        }

        outerWidth() {
            return this.props.width;
        }

        outerHeight() {
            return this.props.height;
        }

        translate(x: number, y: number) {
            this.g.translate(x, y);
        }

        setDimensions(width: number, height: number) {
            if (this.props.width != width || this.props.height != height) {
                this.props.width = width;
                this.props.height = height;
                this.layout();
            }
        }

        protected createButtons() {
            this.pencilButton = this.addTool("\uf040", PaintTool.Normal);
            this.rectButton = this.addTool("\uf096", PaintTool.Rectangle);
            this.eraseButton = this.addTool("\uf12d", PaintTool.Erase);
            this.fillButton = this.addTool("\uf0d0", PaintTool.Fill);

            this.undoButton = this.addButton("\uf0e2");
            this.undoButton.onClick(() => {
                this.host.undo();
            });

            this.redoButton = this.addButton("\uf01e");
            this.redoButton.onClick(() => {
                this.host.redo();
            });

            this.resizeButton = this.addButton("\uf0b2");
            this.resizeButton.onClick(() => {
                this.selectedSize = (this.selectedSize + 1) % sizePresets.length;
                const [width, height] = sizePresets[this.selectedSize];
                this.host.resize(width, height);
            });

            this.setTool(PaintTool.Normal);
        }

        protected createOptionsBar() {
            this.cursorSizes = []
            for (let i = 0; i < 4; i++) {
                const btn = mkCursorSizeButton(i + 1, this.props.height);
                this.cursorSizes.push(btn);
                this.optionBar.appendChild(btn.getView());
                btn.onClick(() => {
                    this.setToolWidth(i + 1);
                });
            }
            this.setToolWidth(1);
        }

        protected layoutOptionsBar() {
            this.cursorSizes.forEach((button, i) => {
                button.setDimensions(this.optionsHeight, this.optionsHeight);
                button.translate(i * (this.optionsHeight + this.props.optionsMargin), 0);
            });
        }

        protected addTool(icon: string, tool: PaintTool) {
            const toolBtn = this.addButton(icon);
            toolBtn.onClick(() => this.setTool(tool));
            return toolBtn;
        }

        protected addButton(icon: string) {
            const btn = mkToolbarButton(icon, this.props.height);
            this.toolsBar.appendChild(btn.getView());

            return btn;
        }

        protected layout() {
            this.optionsHeight = TOOLBAR_OPTIONS_RATIO * this.props.height;
            this.toolbarHeight = this.props.height - this.optionsHeight - this.props.rowMargin;
            this.layoutButton(this.pencilButton, 0, true);
            this.layoutButton(this.eraseButton, 1, true);
            this.layoutButton(this.fillButton, 2, true);
            this.layoutButton(this.rectButton, 3, true);

            this.layoutButton(this.undoButton, 2, false);
            this.layoutButton(this.redoButton, 1, false);
            this.layoutButton(this.resizeButton, 0, false);

            // this.toolsBar.translate(0, this.optionsHeight + this.props.rowMargin);
            this.optionBar.translate(0, this.toolbarHeight + this.props.rowMargin);
            this.layoutOptionsBar();
        }

        protected layoutButton(button: FontIconButton, index: number, fromLeft: boolean) {
            button.setDimensions(this.toolbarHeight, this.toolbarHeight);
            if (fromLeft) {
                button.translate(index * (this.toolbarHeight + this.props.buttonMargin), 0);
            }
            else {
                button.translate(this.props.width - (index + 1) * (this.toolbarHeight + this.props.buttonMargin), 0);
            }
        }

        protected setTool(tool: PaintTool) {
            this.highlightTool(this.activeTool, false);
            this.activeTool = tool;
            this.host.setActiveTool(tool);
            this.highlightTool(this.activeTool, true);
        }

        protected setToolWidth(width: number) {
            this.cursorSizes[this.toolWidth - 1].removeClass("toolbar-button-selected")
            this.toolWidth = width;
            this.host.setToolWidth(width);
            this.cursorSizes[this.toolWidth - 1].addClass("toolbar-button-selected")
        }

        protected highlightTool(tool: PaintTool, highlighted: boolean) {
            let button: FontIconButton;
            switch (tool) {
                case PaintTool.Normal:
                    button = this.pencilButton;
                    break;
                case PaintTool.Rectangle:
                    button = this.rectButton;
                    break;
                case PaintTool.Erase:
                    button = this.eraseButton;
                    break;
            }

            if (button) {
                if (highlighted) {
                    button.addClass("toolbar-button-selected")
                }
                else {
                    button.removeClass("toolbar-button-selected")
                }
            }
        }
    }

    function mkCursorSizeButton(size: number, sideLength: number) {
        return new CursorSizeButton({
            width: sideLength,
            height: sideLength,
            padding: 2,
            cornerRadius: 2,
            rootClass: "toolbar-button",
            backgroundClass: "toolbar-button-background",
            cursorFill: "black",
            cursorSideLength: size
        });
    }

    function mkToolbarButton(icon: string, sideLength: number) {
        return new FontIconButton({
            width: sideLength,
            height: sideLength,
            cornerRadius: 2,
            padding: 4,
            iconFont: "Icons",
            iconString: icon,
            rootClass: "toolbar-button",
            backgroundClass: "toolbar-button-background",
            iconClass: "toolbar-button-icon"
        });
    }
}
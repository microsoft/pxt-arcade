/// <reference path="../sim/svg.ts" />
/// <reference path="./tools.ts" />

namespace mkcd {
    import svg = svgUtil;

    export interface ToolbarProps {
        width: number;
        height: number;
    }

    export interface ToolbarHost {
        setActiveTool(tool: PaintTool): void;
        undo(): void;
        redo(): void;
        resize(width: number, height: number): void;
    }

    const sizePresets: [number, number][] = [
        [8, 8],
        [8, 16],
        [16, 16],
        [16, 32],
        [32, 32],
    ];

    export class Toolbar {
        protected activeTool = PaintTool.Normal;

        protected pencilButton: IconButton;
        protected rectButton: IconButton;
        protected eraseButton: IconButton;

        protected undoButton: IconButton;
        protected redoButton: IconButton;

        protected resizeButton: IconButton;
        protected selectedSize = 2;

        constructor(protected g: svg.Group, protected props: ToolbarProps, protected host: ToolbarHost) {
            this.createButtons();
        }

        protected createButtons() {
            this.pencilButton = this.addTool("\uf040", PaintTool.Normal);
            this.rectButton = this.addTool("\uf096", PaintTool.Rectangle);
            this.eraseButton = this.addTool("\uf12d", PaintTool.Erase);

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
            this.layout();
        }

        protected addTool(icon: string, tool: PaintTool) {
            const toolBtn = this.addButton(icon);
            toolBtn.onClick(() => this.setTool(tool));
            return toolBtn;
        }

        protected addButton(icon: string) {
            const btn = mkToolbarButton(icon, this.props.height);
            this.g.appendChild(btn.getView());

            return btn;
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

        protected layout() {
            this.layoutButton(this.pencilButton, 0, true);
            this.layoutButton(this.rectButton, 1, true);
            this.layoutButton(this.eraseButton, 2, true);
            this.layoutButton(this.undoButton, 3, true);
            this.layoutButton(this.redoButton, 4, true);
            this.layoutButton(this.resizeButton, 0, false);
        }

        protected layoutButton(button: IconButton, index: number, fromLeft: boolean) {
            if (fromLeft) {
                button.translate(index * (this.props.height + 5), 0);
            }
            else {
                button.translate(this.props.width - (index + 1) * (this.props.height + 5), 0);
            }
        }

        protected setTool(tool: PaintTool) {
            this.highlightTool(this.activeTool, false);
            this.activeTool = tool;
            this.host.setActiveTool(tool);
            this.highlightTool(this.activeTool, true);
        }

        protected highlightTool(tool: PaintTool, highlighted: boolean) {
            let button: IconButton;
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

    function mkToolbarButton(icon: string, sideLength: number) {
        return new IconButton({
            width: sideLength,
            height: sideLength,
            cornerRadius: 2,
            iconMargin: sideLength / 5,
            iconFont: "Icons",
            iconString: icon,
            rootClass: "toolbar-button",
            backgroundClass: "toolbar-button-background",
            iconClass: "toolbar-button-icon"
        });
    }
}
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
    }

    export class Toolbar {
        protected activeTool = PaintTool.Normal;

        protected pencilButton: IconButton;
        protected rectButton: IconButton;
        protected eraseButton: IconButton;

        protected undoButton: IconButton;
        protected redoButton: IconButton;

        protected currentIndex = 0;

        constructor(protected g: svg.Group, protected props: ToolbarProps, protected host: ToolbarHost) {
            this.createButtons();
        }

        protected createButtons() {
            this.pencilButton = this.addTool("\uf303", PaintTool.Normal);
            this.rectButton = this.addTool("\uf360", PaintTool.Rectangle);
            this.eraseButton = this.addTool("\uf12d", PaintTool.Erase);

            this.undoButton = this.addButton("\uf2ea");
            this.undoButton.onClick(() => {
                this.host.undo();
            });

            this.redoButton = this.addButton("\uf2f9");
            this.redoButton.onClick(() => {
                this.host.redo();
            });

            this.setTool(PaintTool.Normal);
        }

        protected addTool(icon: string, tool: PaintTool) {
            const toolBtn = this.addButton(icon);
            toolBtn.onClick(() => this.setTool(tool));
            return toolBtn;
        }

        protected addButton(icon: string) {
            const btn = mkToolbarButton(icon, this.props.height);
            btn.translate(this.currentIndex * (this.props.height + 5), 0);
            this.g.appendChild(btn.getView());

            this.currentIndex ++;
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
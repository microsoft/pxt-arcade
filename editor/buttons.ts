namespace mkcd {
    import svg = svgUtil;

    export interface IconButtonProps {
        width: number;
        height: number;

        iconString: string;
        iconFont: string;
        iconMargin: number;
        cornerRadius: number;

        backgroundClass?: string;
        iconClass?: string;
        rootClass?: string;
    }

    export class IconButton {
        protected root: svg.Group;
        protected background: svg.Rect;
        protected icon: svg.Text;

        protected clickHandler: () => void;

        constructor (protected props: IconButtonProps) {
            this.buildDom();
        }

        public onClick(clickHandler: () => void) {
            this.clickHandler = clickHandler;
        }

        public translate(x: number, y: number) {
            this.root.translate(x, y);
        }

        public getView() {
            return this.root;
        }

        public addClass(className: string) {
            this.root.appendClass(className);
        }

        public removeClass(className: string) {
            this.root.removeClass(className);
        }

        protected buildDom() {
            this.root = new svg.Group();

            this.background = this.root.draw("rect")
                .at(0, 0)
                .corner(this.props.cornerRadius)
                .size(this.props.width, this.props.height);

            this.icon = this.drawIcon();

            if (this.props.rootClass) {
                this.root.setClass(this.props.rootClass);
            }
            if (this.props.backgroundClass) {
                this.background.setClass(this.props.backgroundClass);
            }
            if (this.props.iconClass) {
                this.icon.setClass(this.props.iconClass);
            }

            this.root.el.addEventListener("click", () => {
                this.handleClick();
            });
        }

        protected handleClick() {
            if (this.clickHandler) {
                this.clickHandler();
            }
        }

        protected drawIcon(): svg.Text {
            return this.root.draw("text")
                .at(this.props.width / 2, this.props.height / 2)
                .fontFamily(this.props.iconFont)
                .text(this.props.iconString)
                .fontSize(this.props.height - this.props.iconMargin * 2, svg.LengthUnit.px)
                .anchor("middle")
                .alignmentBaseline("middle");
        }
    }
}
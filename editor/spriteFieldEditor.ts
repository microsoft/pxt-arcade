/// <reference path="../node_modules/pxt-core/localtypings/blockly.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>

/// <reference path="./spriteEditor.ts" />


namespace pxt.editor {
    const PREVIEW_WIDTH = 100;
    const PREVIEW_HEIGHT = 100;

    export class FieldSpriteEditor extends Blockly.Field implements Blockly.FieldCustom {
      public isFieldCustom_ = true;
  
      private params: any;
      private editor: mkcd.SpriteEditor;
      private preview: mkcd.Grid;
  
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

        this.preview = new mkcd.Grid({
            rowLength: 16,
            numCells: 16 * 16,
            cellWidth: Math.floor(PREVIEW_WIDTH / 16),
            cellHeight: Math.floor(PREVIEW_HEIGHT / 16),
            cellClass: "pixel-cell"
        });

        for (let c = 0; c < 16; c++) {
            for (let r = 0; r < 16; r++) {
                this.preview.setCellColor(c, r, Math.random() < 0.5 ? "red" : "blue");
            }
        }

        this.fieldGroup_.appendChild(this.preview.getView().el);

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
        this.editor = new mkcd.SpriteEditor();
        this.editor.render(contentDiv);

        Blockly.DropDownDiv.setColour(this.sourceBlock_.parentBlock_.getColour(), this.sourceBlock_.getColourTertiary());
        Blockly.DropDownDiv.showPositionedByBlock(this, this.sourceBlock_);
        this.editor.layout();
    }

  
      private isInFlyout() {
        return (this.sourceBlock_.workspace.getParentSvg() as SVGElement).className.baseVal == "blocklyFlyout";
      }
  
      render_() {
        super.render_();
        if (this.preview) {
            this.size_.height = this.preview.outerHeight() + 20;
            this.size_.width = this.preview.outerWidth() + 20;
        }
      }
  
      getValue() {
        let text = this.getText();
        return "\"hello\"";
      }

      getText() {
          return "\"hello\"";
      }
    }
  }
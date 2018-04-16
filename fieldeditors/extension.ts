/// <reference path="../node_modules/pxt-core/built/pxteditor.d.ts" />

namespace pxt.editor {
    initFieldExtensionsAsync = function (opts: pxt.editor.FieldExtensionOptions): Promise<pxt.editor.FieldExtensionResult> {
        pxt.debug('loading pxt-32 target extensions...');
        const res: pxt.editor.FieldExtensionResult = {
            fieldEditors: [{
                selector: "sprite",
                editor: FieldSpriteEditor
            }],
        };
        return Promise.resolve<pxt.editor.FieldExtensionResult>(res);
    }
}
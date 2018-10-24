/// <reference path="../node_modules/pxt-core/built/pxteditor.d.ts" />

namespace pxt.editor {
    initFieldExtensionsAsync = function (opts: pxt.editor.FieldExtensionOptions): Promise<pxt.editor.FieldExtensionResult> {
        pxt.debug('loading pxt-arcade target extensions...')
        const res: pxt.editor.FieldExtensionResult = {
            fieldEditors: [{
                selector: "position",
                editor: FieldPosition
            }]
        };
        return Promise.resolve<pxt.editor.FieldExtensionResult>(res);
    }
}
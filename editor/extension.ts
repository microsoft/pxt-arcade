/// <reference path="../node_modules/pxt-core/built/pxteditor.d.ts" />

namespace pxt.editor {
    initExtensionsAsync = function (opts: pxt.editor.ExtensionOptions): Promise<pxt.editor.ExtensionResult> {
        pxt.debug('loading pxt-32 target extensions...');
        const res: pxt.editor.ExtensionResult = {
            fieldEditors: [{
                selector: "sprite",
                editor: FieldSpriteEditor
            }],
        };
        return Promise.resolve<pxt.editor.ExtensionResult>(res);
    }
}
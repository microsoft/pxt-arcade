/// <reference path="../libs/core/enums.d.ts"/>

namespace pxsim.image {
    /**
     * Internal
     */
    //%
    export function _show(img: RefImage) {
        board().showImage(img)
    }

    /**
     * Internal
     */
    //%
    export function _stats(s: string) {
        board().stats.textContent = s
    }

}
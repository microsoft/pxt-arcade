/// <reference path="../libs/core/enums.d.ts"/>

namespace pxsim.image {
    /**
     * Internal
     */
    //%
    export function _show(img: Image) {
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
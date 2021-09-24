//% color=#cf6a87
//% weight=79.5
//% icon="\uf004"
//% blockGap=8
//% block="Profile Life"
namespace profilelife {
    const profileLifeKey = "PROFILE_LIFE_SCENE_KEY";
    
    /**
     * TODOs:
     * * support a 'break after' on max life to move to new line for zelda style (multi row life)
     * * support partial hearts? e.g. make it so they can pass an array of images separate for filledLifeImage,
     *     and then each life becomes 1/array.length hearts
     * * support positioning the renderable -- e.g. peg to corner of the screen with an offset
     */

    class ProfileState {
        profileImage: Image;
        filledLifeImage: Image;
        emptyLifeImage: Image;
        name: string;
        font: image.Font;
        textColor: number;
        backgroundColor: number;
        borderColor: number;
        maxLife: number;
        invisible: boolean;

        constructor() {
            this.filledLifeImage = img`
                . c c . c c .
                c 3 3 c 3 3 c
                c 3 3 3 1 3 c
                f 3 2 2 2 3 f
                f f 2 2 2 f f
                . f f 2 f f .
                . . f f f . .
            `;
            this.emptyLifeImage = img`
                . c c . c c .
                c b b c b b c
                c b b b b b c
                f b c c c b f
                f f c c c f f
                . f f c f f .
                . . f f f . .
            `;
            this.maxLife = 3;
            this.font = image.font5;
            this.textColor = 0xC;
            this.backgroundColor = 0x0;
            this.borderColor = 0x0;
        }
    }

    function getState(): ProfileState {
        return game.currentScene().data[profileLifeKey] as ProfileState;
    }

    function init(): ProfileState {
        const scn = game.currentScene();
        let profileState = scn.data[profileLifeKey]
        if (profileState)
            return profileState;

        profileState = game.currentScene().data[profileLifeKey] = new ProfileState();
        
        scene.createRenderable(95, function(target: Image, camera: scene.Camera) {
            const state = getState();
            if (!state || state.invisible)
                return;

            if (state.backgroundColor || state.borderColor) {
                let fullWidth = 3;
                if (state.profileImage) fullWidth += state.profileImage.width;
                fullWidth += Math.max(
                    (state.name || "").length * state.font.charWidth,
                    state.maxLife * (1 + Math.max(
                        state.filledLifeImage.width,
                        state.emptyLifeImage ? state.emptyLifeImage.width : 0  
                    ))
                );
                let fullHeight = Math.max(
                    state.profileImage ? state.profileImage.height : 0,
                    (state.name ? state.font.charHeight + 2 : 0) + Math.max(
                        state.filledLifeImage.height,
                        state.emptyLifeImage ? state.emptyLifeImage.height : 0
                    ) + 4
                )

                if (state.backgroundColor)
                    target.fillRect(0, 0, fullWidth, fullHeight, state.backgroundColor);
                if (state.borderColor) {
                    target.drawRect(-1, -1, fullWidth + 2, fullHeight + 2, state.borderColor);
                }
            }


            const currLife = info.life();

            info.showLife(false)

            if (currLife > state.maxLife) {
                info.setLife(state.maxLife);
            } else if (currLife < 0) {
                info.setLife(0);
            }

            let leftOffset = 2;
            let topOffset = 2;

            if (state.profileImage) {
                target.drawTransparentImage(state.profileImage, 0, 0);
                leftOffset += state.profileImage.width;
            }

            if (state.name) {
                target.print(state.name, leftOffset, topOffset, state.textColor, state.font);
                topOffset += state.font.charHeight + 2;
            }

            for (let i = 0; i < state.maxLife; i++) {
                if (i < currLife) {
                    target.drawTransparentImage(
                        state.filledLifeImage,
                        leftOffset + i * (state.filledLifeImage.width + 1),
                        topOffset
                    );
                } else if (state.emptyLifeImage) {
                    const filledLifeWidth = currLife * (state.filledLifeImage.width + 1);

                    target.drawTransparentImage(
                        state.emptyLifeImage,
                        leftOffset + (i - currLife) * (state.emptyLifeImage.width + 1) + filledLifeWidth,
                        topOffset
                    );
                }
            }
        });

        return profileState;
    }

    //% block="set profile image $profile"
    //% blockId="profilelife_profileImage"
    //% profile.shadow=screen_image_picker
    //% weight=100
    export function setProfileImage(profile: Image) {
        const state = init();
        state.profileImage = profile;
    }

    //% block="set filled life image $filledImage"
    //% blockId="profilelife_filledImage"
    //% filledImage.shadow=screen_image_picker
    //% weight=40
    export function setFilledLifeImage(filledImage: Image) {
        if (!filledImage)
            return;
        const state = init();
        state.filledLifeImage = filledImage;
    }

    //% block="set empty life image $emptyImage"
    //% blockId="profilelife_emptyImg"
    //% emptyImage.shadow=screen_image_picker
    //% weight=30
    export function setEmptyLifeImage(emptyImage: Image) {
        const state = init();
        state.emptyLifeImage = emptyImage;
    }

    //% block="set name to $name"
    //% blockId="profilelife_setName"
    //% name.defl="Bird"
    //% weight=75
    export function setName(name: string) {
        const state = init();
        state.name = name;
    }

    //% block="set text color $textColor"
    //% textColor.shadow="colorindexpicker"
    //% blockId="profilelife_textColor"
    //% textColor.defl=12
    //% weight=70
    export function setTextColor(textColor: number) {
        const state = init();
        state.textColor = textColor;
    }

    //% block="set background $bkgd border $border"
    //% blockId="profilelife_bkgdColor"
    //% bkgd.shadow="colorindexpicker"
    //% bkgd.defl=1
    //% border.shadow="colorindexpicker"
    //% border.defl=15
    //% weight=65
    export function setBackgroundBorder(bkgd: number, border: number) {
        const state = init();
        state.backgroundColor = bkgd;
        state.borderColor = border
    }

    export function setFont(font: image.Font) {
        if (!font) return;
        const state = init();
        state.font = font;
    }

    //% block="set max life $maxLife"
    //% blockId="profilelife_maxLife"
    //% maxLife.defl=3
    //% weight=60
    export function setMaxLife(maxLife: number) {
        const state = init();
        state.maxLife = maxLife;
    }

    //% block="set profile invisible $on"
    //% blockId="profilelife_invisibletoggle"
    //% on.shadow="toggleOnOff"
    //% on.defl=true
    //% weight=50
    export function setInvisible(on: boolean) {
        const state = init();
        state.invisible = on;
    }
}
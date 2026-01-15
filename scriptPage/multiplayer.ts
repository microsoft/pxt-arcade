let multiplayerInitialized = false;

function enableMultiplayerUI(info: PubInfo) {
    if (multiplayerInitialized) return;
    multiplayerInitialized = true;

    pxtTickEvent('share.isMultiplayerGame', { target: "arcade" });

    const presenceBar = document.getElementById("presence-bar");
    if (presenceBar) {
        initPresenceBar();
        presenceBar.style.display = "block";
    }

    const shareButton = document.getElementById("multiplayer-share-button");
    if (shareButton) {
        shareButton.addEventListener("click", function () {
            pxtTickEvent('share.multiplayerShareClick', { target: "arcade" });
            const domain = pxt.BrowserUtils.isLocalHostDev() ? "http://localhost:3000" : "";
            const multiplayerHostUrl = `${domain}${pxt.webConfig.relprefix}multiplayer?host=${info.projectId}`;

            window.open(multiplayerHostUrl, "_blank");
        });
        shareButton.style.display = "block";
    }

    window.addEventListener('message', function (ev) {
        if (ev.data && ev.data.type === "status" && ev.data.state === "running") {
            const iframe = document.getElementsByTagName("iframe").item(0);

            if (iframe) {
                setActivePlayer(1, iframe);
            }
        }
    });

    function initPresenceBar() {
        for (let i = 0; i < 4; i++) {
            const button = document.getElementsByClassName("player-" + (i + 1)).item(0);
            button.addEventListener("click", () => {
                const iframe = document.getElementsByTagName("iframe").item(0);

                if (iframe) {
                    setActivePlayer(i + 1, iframe);
                    iframe.focus();
                }
            });
        }
    }

    function setActivePlayer(playerNumber: number, iframe: HTMLIFrameElement) {
        const setSlotMsg = {
            type: "setactiveplayer",
            playerNumber: playerNumber,
        };
        const connectionMsg = {
            type: "multiplayer",
            content: "Connection",
            slot: playerNumber,
            connected: true,
        };
        iframe.contentWindow.postMessage(setSlotMsg, "*");
        iframe.contentWindow.postMessage(connectionMsg, "*");
    }
}
declare const pxtTargetConfigPromise: Promise<pxt.TargetConfig>;

async function initTickEventProxyAsync(info: PubInfo) {
    let shareLinkIsApproved = false;

    // This promise is defined in pxt/docfiles/targetconfig.html
    const targetConfig = await pxtTargetConfigPromise;

    const approvedShareLinks = targetConfig && targetConfig.shareLinks && targetConfig.shareLinks.approved;
    if (approvedShareLinks && approvedShareLinks.indexOf(info.projectId) >= 0) {
        // This share link has been allow listed; remove cookie banner and allow sending of tick events
        shareLinkIsApproved = true;
        const abuseMessage = document.getElementById("abuse-message");
        if (abuseMessage) {
            abuseMessage.remove();
        }

        pxtTickEvent(
            'approved.shareurl.loaded',
            { shareurl: info.projectId, target: "arcade", cookie: "true" },
        );
    }

    // While we have the target config, check if we should show the eval button
    const evalEnabled = targetConfig && targetConfig.teachertool && targetConfig.teachertool.showSharePageEvalButton;
    if (!evalEnabled) {
        const evalButton = document.getElementById("share-eval-button");
        if (evalButton) {
            evalButton.remove();
        }
    }

    // Proxy tick events from the simulator
    if (shareLinkIsApproved) {
        window.addEventListener('message', function (ev) {
            const d = ev.data;
            if (d.type == "messagepacket" && d.channel == "tick-event" && d.data) {
                let unpackedData = "";
                for (let i = 0; i < d.data.length; ++i)
                    unpackedData += String.fromCharCode(d.data[i]);
                try {
                    const data = JSON.parse(unpackedData);
                    data["shareurl"] = info.projectId;
                    data["target"] = "arcade";
                    data["cookie"] = "true";
                    pxtTickEvent(
                        'simulator.user.tick',
                        data,
                    );
                } catch (e) { /** failed to parse tick from game **/ }
            }
        });
    }
}
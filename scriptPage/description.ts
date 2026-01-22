function initDescriptionButton(info: PubInfo) {
    const showDescriptionButton = document.getElementById("show-description-button");
    if (!showDescriptionButton) return;

    if (!info.description || info.description.trim().length === 0) {
        showDescriptionButton.style.display = "none";
        return;
    }
    const descriptionModalOk = document.getElementById("description-modal-ok");
    const descriptionModal = document.getElementById("description-modal");
    const descriptionDimmer = document.getElementById("description-modal-dimmer");

    let isVisible = false;

    const focusTrap = (e: KeyboardEvent) => {
        if (e.key === "Tab") {
            if (!descriptionModal.contains(document.activeElement)) {
                descriptionModalOk.focus();
            }
            e.preventDefault();
        }
        else if (e.key === "Escape" || e.key === "Esc") {
            setDescriptionVisible(false);
            showDescriptionButton.focus();
        }
    };

    const setDescriptionVisible = (visible: boolean) => {
        descriptionModal.style.display = visible ? "block" : "none";
        isVisible = visible;

        if (visible) {
            descriptionDimmer.style.display = "block";
            document.addEventListener("keydown", focusTrap);
            descriptionModalOk.focus();
        }
        else {
            descriptionDimmer.style.display = "none";
            document.removeEventListener("keydown", focusTrap);
        }
    };

    showDescriptionButton.addEventListener("click", function () {
        pxtTickEvent('share.showDescription', { target: "arcade" });
        setDescriptionVisible(true);
    });
    showDescriptionButton.addEventListener("keydown", fireClickOnEnter);

    descriptionModalOk.addEventListener("click", function () {
        setDescriptionVisible(false);
        showDescriptionButton.focus();
    });
    descriptionModalOk.addEventListener("keydown", fireClickOnEnter);

    descriptionDimmer.addEventListener("click", function () {
        setDescriptionVisible(false);
        showDescriptionButton.focus();
    });
}
function initOverflowMenu() {
    const menuButton = document.getElementById("overflow-menu");
    const menuContentPane = document.getElementById("overflow-menu-content");


    const menuItems = [
        document.getElementById("show-code-button-overflow"),
        document.getElementById("editCodeButton-overflow"),
        document.getElementById("share-eval-button-overflow"),
    ];

    const onBlur = (e: FocusEvent) => {
        const relatedTarget = e.relatedTarget as HTMLElement;
        if (!menuContentPane.contains(relatedTarget) && relatedTarget !== menuButton) {
            setExpanded(false);
        }
    };

    for (const item of menuItems) {
        item.setAttribute("tabindex", "-1");
        item.addEventListener("keydown", fireClickOnEnter);
        item.addEventListener("click", () => {
            setExpanded(false);
            menuButton.focus();
        });
        item.addEventListener("blur", onBlur);
    }

    let isExpanded = false;

    const documentKeydownListener = (e: KeyboardEvent) => {
        if (e.key === "Escape" || e.key === "Esc") {
            setExpanded(false);
            menuButton.focus();
        }
        else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
            e.preventDefault();
            e.stopPropagation();
            const currentlyFocusedElement = document.activeElement;
            const currentIndex = menuItems.indexOf(currentlyFocusedElement as HTMLElement);
            const nextIndex = (currentIndex + 1) % menuItems.length;
            menuItems[nextIndex].focus();
        }
        else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
            e.preventDefault();
            e.stopPropagation();
            const currentlyFocusedElement = document.activeElement;
            const currentIndex = menuItems.indexOf(currentlyFocusedElement as HTMLElement);
            const nextIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
            menuItems[nextIndex].focus();
        }
    };

    const setExpanded = (expanded: boolean) => {
        menuContentPane.style.display = expanded ? "block" : "none";
        menuButton.setAttribute("aria-expanded", expanded ? "true" : "false");
        isExpanded = expanded;

        if (expanded) {
            menuItems[0].focus();
            document.addEventListener("keydown", documentKeydownListener);
        }
        else {
            document.removeEventListener("keydown", documentKeydownListener);
        }
    }

    menuButton.addEventListener("click", () => {
        setExpanded(!isExpanded);
    });

    menuButton.addEventListener("keydown", (e) => {
        const charCode = (typeof e.which == "number") ? e.which : e.keyCode;
        if (charCode === 13 /* enter */ || charCode === 32 /* space */ || charCode === 40 /* down arrow */) {
            e.preventDefault();
            setExpanded(!isExpanded);
        }
    });
}
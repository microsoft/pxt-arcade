/// <reference path="gamejam.d.ts"/>

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let info: JamInfo;
let startDate: number;
let endDate: number;

function initTelemetry() {
    // Watch on mixer button
    document.getElementById("stream")?.addEventListener("click", () => {
        (window as any).pxtTickEvent("gamejam.stream")
    })
    // Submit on itch.io button
    document.querySelector(".submit .button:nth-child(1)").addEventListener("click", () => {
        (window as any).pxtTickEvent("gamejam.submit.itchio")
    })
    // Submit with office forms button
    document.querySelector(".submit .button:nth-child(2)").addEventListener("click", () => {
        (window as any).pxtTickEvent("gamejam.submit.forms")
    })
}

function initRulesTelemetry(id: string,) {
    // Try one of our tutorials text link
    document.querySelector(`#${id} + ul li:nth-child(1) a`)?.addEventListener("click", () => {
        (window as any).pxtTickEvent("gamejam.link.tutorial")
    })
    // How to import images text link
    document.querySelector(`#${id} + ul li:nth-child(3) a`)?.addEventListener("click", () => {
        (window as any).pxtTickEvent("gamejam.link.images")
    })
    // Developer documentation text link
    document.querySelector(`#${id}+ ul li:nth-child(4) a`)?.addEventListener("click", () => {
        (window as any).pxtTickEvent("gamejam.link.developer")
    })
}

function getInfo(path: string) {
    let infoRequest = new XMLHttpRequest();
    infoRequest.addEventListener("load", onLoad);
    infoRequest.open("GET", path);
    infoRequest.send();

    function onLoad() {
        info = JSON.parse(this.responseText) as JamInfo;
        startDate = new Date(info.start).getTime();
        endDate = new Date(info.end).getTime();
        const judged = info.featured.some(el => !!el.description);

        makeTimer();
        makeRules();
        if (judged) makeWinners();
        makeGallery();
        makeSchedule();

        initTelemetry();
    }
}

function makeTimer() {
    const now = Date.now();
    if (now < endDate) {
        const parent = document.getElementById("timer");
        const label = document.createElement("div");
        const labelText = document.createElement("h3");
        label.className = "label";
        label.appendChild(labelText);
        parent.appendChild(label);

        const timer = document.createElement("div");
        timer.appendChild(makeTimeCounter("days"));
        timer.appendChild(makeTimeCounter("hours"));
        timer.appendChild(makeTimeCounter("minutes"));
        timer.appendChild(makeTimeCounter("seconds"));
        parent.appendChild(timer);

        if (now < startDate) {
            labelText.innerText = "Starts in:";
        } else {
            labelText.innerText = "Ends in:";
        }
        setTimer();

        setInterval(setTimer, 1000);
    }
}

function makeTimeCounter(id: string) {
    const counter = document.createElement("div");
    counter.id = id;
    counter.className = "counter";
    const count = document.createElement("div");
    count.className = "number";
    counter.appendChild(count);
    const label = document.createElement("div");
    label.textContent = id;
    counter.appendChild(label);
    return counter;
}

function setTimer() {
    const now = Date.now();
    let delta = Math.floor((now < startDate ? startDate - now : endDate - now) / 1000);

    let dayCounter = document.querySelector("#days .number") as HTMLElement;
    dayCounter.innerText = Math.floor(delta / 86400).toString();
    delta = delta % 86400;

    let hourCounter = document.querySelector("#hours .number") as HTMLElement;
    hourCounter.innerText = Math.floor(delta / 3600).toString();
    delta = delta % 3600;

    let minuteCounter = document.querySelector("#minutes .number") as HTMLElement;
    minuteCounter.innerText = Math.floor(delta / 60).toString();
    delta = delta % 60;

    let secondCounter = document.querySelector("#seconds .number") as HTMLElement;
    secondCounter.innerText = delta.toString();
}

function makeRules() {
    if (info?.rules) {
        let rulesRequest = new XMLHttpRequest();
        rulesRequest.addEventListener("load", onLoad);
        rulesRequest.open("GET", info.rules.path);
        rulesRequest.send();

        function onLoad() {
            marked.setOptions({
                // @ts-ignore
                sanitizer: DOMPurify.sanitizer,
            });
            let markdown = marked(this.responseText);
            const parent = document.getElementById("rules");
            parent.innerHTML = markdown;

            // insert schedule of events after rules
            const collaborateNode = document.getElementById(info.rules.collaborateId);
            if (collaborateNode) {
                collaborateNode.parentElement.insertBefore(document.getElementById("events"), collaborateNode);
            }

            // move submit section if submitPositionId exists
            if (info.rules.submitPositionId) {
                const beforeNode = document.getElementById(info.rules.submitPositionId);
                const submitNode = document.getElementById("submit");
                if (beforeNode && submitNode) {
                    beforeNode.parentElement.insertBefore(submitNode, beforeNode);
                }
            }

            initRulesTelemetry(info.rules.tipsId);
        }
    }
}

function makeWinners() {
    const content = document.querySelector(".content");
    content.className += " winners";
    const gallery = document.querySelector(".gallery");

    const parent = document.createElement("div");
    parent.id = "highlighted";
    parent.className += "segment";
    const title = document.createElement("h2");
    title.innerText = "Honorable Mentions";
    parent.appendChild(title);
    const description = document.createElement("p");
    description.innerText = "These are some games that the judges also loved! Give them a play, we're sure you'll enjoy yourself.";
    parent.appendChild(description);

    const highlighted = info.featured.filter(el => !!el.description);
    let row = document.createElement("div");
    for (let i = 0; i < highlighted.length; i++) {
        row.appendChild(makeGameCard(highlighted[i]));

        if (i % 2 == 1) {
            parent.appendChild(row);
            row = document.createElement("div")
        }
    }
    if (highlighted.length % 2 != 0) {
        parent.appendChild(row);
    }

    content.insertBefore(parent, gallery);
}

function makeGallery() {
    const container = document.querySelector(".gallery") as HTMLElement;
    const parent = document.getElementById("gallery");
    if (container && parent) {
        if (!info?.featured.length) {
            const description = document.querySelector(".gallery .description") as HTMLElement;
            description.innerText = "Check back later to play some submitted games!"
        } else {
            let hint = document.createElement("div");
            hint.className = "hint"
            hint.innerText = "If you see blocks overlapping each other in the editor workspace, you can \
                reformat them by selecting \"Format Code\" from the menu when you right-click \
                on the workspace background."

            container.insertBefore(hint, parent);
        }

        let selected = randomize(info.featured?.filter(g => !g.description)); // show all the games
        let row = document.createElement("div");
        for (let i = 0; i < selected.length; i++) {
            row.appendChild(makeGameCard(selected[i]));

            if (i % 3 == 2) {
                parent.appendChild(row);
                row = document.createElement("div")
            }
        }
        if (selected.length % 3 != 0) {
            parent.appendChild(row);
        }
    }
}

function makeGameCard(game: Game) {
    let card = document.createElement("div");
    card.className = "game";

    let link = document.createElement("a");
    link.href = game.url || `https://arcade.makecode.com/${game.id}`;
    let textLink = link.cloneNode() as HTMLElement;
    let img = document.createElement("img");
    img.src = `https://pxt.azureedge.net/api/${game.id}/thumb`;
    img.onerror = () => {
        let div = document.createElement("div");
        div.setAttribute("class", "placeholder");
        let logo = document.createElement("img");
        logo.src = "/static/logo.png";
        div.appendChild(logo);
        img.remove();
        link.appendChild(div);
    }
    link.appendChild(img);
    card.appendChild(link);

    let label = document.createElement("div");
    textLink.innerText = game.title;
    label.appendChild(textLink);
    if (game.author) {
        let author = document.createElement("div");
        author.innerText = `by ${game.author}`;
        label.appendChild(author);
    }
    card.appendChild(label);
    if (game.description) {
        let description = document.createElement("div");
        description.innerText = game.description;
        label.appendChild(description);
    }
    return card;
}

function makeSchedule() {
    const sorted = info?.sessions?.sort((a, b) => a.date < b.date ? -1 : 1) || [];
    const parent = document.getElementById("schedule");
    for (const session of sorted) {
        const row = document.createElement("div");
        row.className = "event";

        const text = document.createElement("div");
        text.className = "text";
        const title = document.createElement("div");
        title.className = "title";
        title.innerText = session.title;

        const ics = document.createElement("a");
        ics.className = "ics";
        ics.href = session.ics;
        const icon = document.createElement("i");
        icon.className = "icon calendar";
        ics.appendChild(icon);
        title.appendChild(ics);

        row.appendChild(title)

        const details = document.createElement("div");
        details.className = "details";
        const imgContainer = document.createElement("div");
        imgContainer.className = "image"
        const img = document.createElement("img");
        img.src = session.imgSrc;
        imgContainer.appendChild(img)
        details.appendChild(imgContainer)

        const sessionDate = new Date(session.date);
        const date = document.createElement("div");
        date.className = "date";
        date.innerText = `${formatDate(sessionDate)}, ${formatTime(session.time)}`;
        text.appendChild(date);

        const description = document.createElement("div");
        description.innerText = session.description;
        text.appendChild(description)
        details.appendChild(text)
        row.appendChild(details)

        parent.appendChild(row);
    }
}
function formatTime(time: number): string {
    const EST = time + 3;
    return `${time % 12 || 12} ${time < 12 ? "AM" : "PM"} PDT / ${EST % 12 || 12} ${EST < 12 ? "AM" : "PM"} EDT`;
}

function formatDate(date: Date): string {
    return `${MONTHS[date.getMonth()]} ${date.getDate()}`
}

function randomize(arr) {
    const randomized = arr.slice();
    for (let i = randomized.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [randomized[i], randomized[j]] = [randomized[j], randomized[i]];
    }
    return randomized;
}
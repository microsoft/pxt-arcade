interface Session {
    title: string;
    description: string;
    presenter: string;
    time: number; // hour in PST, 24 hr clock
    date: Date; // month and day pulled from date
}

const sessions: Session[] = [
    {
        "title": "Designing Game Levels",
        "description": "Learn the basics level design with Sten Huebler from the Gears of War team.",
        "presenter": "Sten Huebler",
        "time": 13,
        "date": new Date(2020, 5, 4)
    },
    {
        "title": "Getting Started with Pixel Art",
        "description": "Make some pixel art with Stu from the Gears of War Team.",
        "presenter": "Stu Maxwell",
        "time": 11,
        "date": new Date(2020, 5, 9)
    }
]

const featured: string[] = ["_dL3cy1Krd16o", "_UCgg0VWrg8KC"];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const START_DATE = 1590994800000; // midnight PST June 1st
const END_DATE = 1593586800000; // midnight PST June 30th


makeTimer();
makeRules();
makeSchedule();

function makeTimer() {
    const now = Date.now();
    if (now < END_DATE) {
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

        if (now < START_DATE) {
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
    let delta = Math.floor((now < START_DATE ? START_DATE - now : END_DATE - now) / 1000);

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
    let rulesRequest = new XMLHttpRequest();
    rulesRequest.addEventListener("load", onLoad);
    rulesRequest.open("GET", "/static/gamejam/rules.md");
    rulesRequest.send();

    function onLoad() {
        marked.setOptions({
            // @ts-ignore
            sanitizer: DOMPurify.sanitizer,
        });
        let markdown = marked(this.responseText);
        const parent = document.getElementById("rules");
        parent.innerHTML = markdown;

      }
}

function makeSchedule() {
    const sorted = sessions.sort((a, b) => a.date < b.date ? -1 : 1);
    const parent = document.getElementById("schedule");
    parent.appendChild(makeHeader())
    for (const session of sorted) {
        const row = document.createElement("div");

        const date = document.createElement("div");
        date.innerText = formatDate(session.date);
        row.appendChild(date);

        const time = document.createElement("div");
        time.innerText = formatTime(session.time);
        row.appendChild(time);

        const title = document.createElement("div");
        title.innerText = session.title;
        row.appendChild(title)

        const presenter = document.createElement("div");
        presenter.innerText = session.presenter;
        row.appendChild(presenter)
    
        parent.appendChild(row);
    }
}

function makeHeader(): HTMLElement {
    const header = document.createElement("div");
    const dateCell = document.createElement("div");
    dateCell.innerText = "Date";
    header.appendChild(dateCell)
    const timeCell = document.createElement("div");
    timeCell.innerText = "Time";
    header.appendChild(timeCell)
    const titleCell = document.createElement("div");
    titleCell.innerText = "Title";
    header.appendChild(titleCell)
    const presenterCell = document.createElement("div");
    presenterCell.innerText = "Presenter";
    header.appendChild(presenterCell)
    return header;
}

function formatTime(time: number): string {
    const EST = time + 3;
    return `${time % 12 || 12} ${time < 12 ? "AM" : "PM"} PST / ${EST % 12 || 12} ${EST < 12 ? "AM" : "PM"} EST`;
}

function formatDate(date: Date): string {
    return `${MONTHS[date.getMonth()]} ${date.getDay()}`
}
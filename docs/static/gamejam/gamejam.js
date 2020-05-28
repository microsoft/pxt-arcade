var sessions = [
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
];
var featured = ["_dL3cy1Krd16o", "_UCgg0VWrg8KC"];
var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var START_DATE = 1590994800000; // midnight PST June 1st
var END_DATE = 1593586800000; // midnight PST June 30th
makeTimer();
makeRules();
makeSchedule();
function makeTimer() {
    var now = Date.now();
    if (now < END_DATE) {
        var parent_1 = document.getElementById("timer");
        var label = document.createElement("div");
        var labelText = document.createElement("h3");
        label.className = "label";
        label.appendChild(labelText);
        parent_1.appendChild(label);
        var timer = document.createElement("div");
        timer.appendChild(makeTimeCounter("days"));
        timer.appendChild(makeTimeCounter("hours"));
        timer.appendChild(makeTimeCounter("minutes"));
        timer.appendChild(makeTimeCounter("seconds"));
        parent_1.appendChild(timer);
        if (now < START_DATE) {
            labelText.innerText = "Starts in:";
        }
        else {
            labelText.innerText = "Ends in:";
        }
        setTimer();
        setInterval(setTimer, 1000);
    }
}
function makeTimeCounter(id) {
    var counter = document.createElement("div");
    counter.id = id;
    counter.className = "counter";
    var count = document.createElement("div");
    count.className = "number";
    counter.appendChild(count);
    var label = document.createElement("div");
    label.textContent = id;
    counter.appendChild(label);
    return counter;
}
function setTimer() {
    var now = Date.now();
    var delta = Math.floor((now < START_DATE ? START_DATE - now : END_DATE - now) / 1000);
    var dayCounter = document.querySelector("#days .number");
    dayCounter.innerText = Math.floor(delta / 86400).toString();
    delta = delta % 86400;
    var hourCounter = document.querySelector("#hours .number");
    hourCounter.innerText = Math.floor(delta / 3600).toString();
    delta = delta % 3600;
    var minuteCounter = document.querySelector("#minutes .number");
    minuteCounter.innerText = Math.floor(delta / 60).toString();
    delta = delta % 60;
    var secondCounter = document.querySelector("#seconds .number");
    secondCounter.innerText = delta.toString();
}
function makeRules() {
    var rulesRequest = new XMLHttpRequest();
    rulesRequest.addEventListener("load", onLoad);
    rulesRequest.open("GET", "/static/gamejam/rules.md");
    rulesRequest.send();
    function onLoad() {
        marked.setOptions({
            // @ts-ignore
            sanitizer: DOMPurify.sanitizer
        });
        var markdown = marked(this.responseText);
        var parent = document.getElementById("rules");
        parent.innerHTML = markdown;
    }
}
function makeSchedule() {
    var sorted = sessions.sort(function (a, b) { return a.date < b.date ? -1 : 1; });
    var parent = document.getElementById("schedule");
    parent.appendChild(makeHeader());
    for (var _i = 0, sorted_1 = sorted; _i < sorted_1.length; _i++) {
        var session = sorted_1[_i];
        var row = document.createElement("div");
        var date = document.createElement("div");
        date.innerText = formatDate(session.date);
        row.appendChild(date);
        var time = document.createElement("div");
        time.innerText = formatTime(session.time);
        row.appendChild(time);
        var title = document.createElement("div");
        title.innerText = session.title;
        row.appendChild(title);
        var presenter = document.createElement("div");
        presenter.innerText = session.presenter;
        row.appendChild(presenter);
        parent.appendChild(row);
    }
}
function makeHeader() {
    var header = document.createElement("div");
    var dateCell = document.createElement("div");
    dateCell.innerText = "Date";
    header.appendChild(dateCell);
    var timeCell = document.createElement("div");
    timeCell.innerText = "Time";
    header.appendChild(timeCell);
    var titleCell = document.createElement("div");
    titleCell.innerText = "Title";
    header.appendChild(titleCell);
    var presenterCell = document.createElement("div");
    presenterCell.innerText = "Presenter";
    header.appendChild(presenterCell);
    return header;
}
function formatTime(time) {
    var EST = time + 3;
    return (time % 12 || 12) + " " + (time < 12 ? "AM" : "PM") + " PST / " + (EST % 12 || 12) + " " + (EST < 12 ? "AM" : "PM") + " EST";
}
function formatDate(date) {
    return MONTHS[date.getMonth()] + " " + date.getDay();
}

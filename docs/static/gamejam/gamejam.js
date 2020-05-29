var sessions = [
    {
        "title": "Level Design in Games with Sten Huebler",
        "description": "Learn about the effect of different level layouts to the gameplay experience. Sten is a Senior Level Designer at The Coalition, working on Gears of War, making awesome looking and fun levels. He also worked on Crysis and has a passion for Flight Sims.",
        "presenter": "Sten Huebler",
        "time": 13,
        "date": new Date(2020, 5, 11)
    },
    {
        "title": "Q & A with Stu Maxwell",
        "description": "Join Stu Maxwell, the lead VFX artist at The Coalition, as we talk about how to make games look great! Stu makes Gears games feel explosive and atmospheric, and also made the indie game Shape of the World.",
        "presenter": "Stu Maxwell",
        "time": 13,
        "date": new Date(2020, 5, 16)
    }
];
var featured = [
/* fill in with real games once we have submissions
{
    id: "73451-52337-17892-07991",
    title: "test game",
    author: "test author"
}
*/
];
var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var START_DATE = 1590994800000; // midnight PST June 1st
var END_DATE = 1593586800000; // midnight PST June 30th
makeTimer();
makeRules();
makeGallery();
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
function makeGallery() {
    if (!featured.length) {
        var description = document.querySelector(".gallery .description");
        description.innerText = "Check back later to play some submitted games!";
    }
    var submittedGames = featured.slice();
    var selected = [];
    for (var i = 0; i < 3; i++) {
        if (submittedGames.length) {
            var idx = Math.floor(Math.random() * submittedGames.length);
            selected.push(submittedGames[idx]);
            submittedGames.splice(idx, 1);
        }
    }
    var parent = document.getElementById("gallery");
    for (var _i = 0, selected_1 = selected; _i < selected_1.length; _i++) {
        var game = selected_1[_i];
        var card = document.createElement("div");
        card.className = "game";
        var link = document.createElement("a");
        link.href = "https://arcade.makecode.com/" + game.id;
        var textLink = link.cloneNode();
        var img = document.createElement("img");
        img.src = "https://pxt.azureedge.net/api/" + game.id + "/thumb";
        link.appendChild(img);
        card.appendChild(link);
        var label = document.createElement("div");
        textLink.innerText = game.title;
        label.appendChild(textLink);
        if (game.author) {
            var author = document.createElement("div");
            author.innerText = "by " + game.author;
            label.appendChild(author);
        }
        card.appendChild(label);
        parent.appendChild(card);
    }
}
function makeSchedule() {
    var sorted = sessions.sort(function (a, b) { return a.date < b.date ? -1 : 1; });
    var parent = document.getElementById("schedule");
    // parent.appendChild(makeHeader())
    for (var _i = 0, sorted_1 = sorted; _i < sorted_1.length; _i++) {
        var session = sorted_1[_i];
        var row = document.createElement("div");
        row.className = "event";
        var title = document.createElement("div");
        title.className = "title";
        title.innerText = session.title;
        row.appendChild(title);
        var date = document.createElement("div");
        date.className = "date";
        date.innerText = formatDate(session.date) + ", " + formatTime(session.time);
        row.appendChild(date);
        var description = document.createElement("div");
        description.innerText = session.description;
        row.appendChild(description);
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
    return (time % 12 || 12) + " " + (time < 12 ? "AM" : "PM") + " PDT / " + (EST % 12 || 12) + " " + (EST < 12 ? "AM" : "PM") + " EDT";
}
function formatDate(date) {
    return MONTHS[date.getMonth()] + " " + date.getDate();
}

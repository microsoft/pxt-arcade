/// <reference path="gamejam.d.ts"/>
var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var info;
var startDate;
var endDate;
function initTelemetry() {
    var _a;
    // Watch on mixer button
    (_a = document.getElementById("stream")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        window.pxtTickEvent("gamejam.stream");
    });
    // Submit on itch.io button
    document.querySelector(".submit .button:nth-child(1)").addEventListener("click", function () {
        window.pxtTickEvent("gamejam.submit.itchio");
    });
    // Submit with office forms button
    document.querySelector(".submit .button:nth-child(2)").addEventListener("click", function () {
        window.pxtTickEvent("gamejam.submit.forms");
    });
}
function initRulesTelemetry(id) {
    var _a, _b, _c;
    // Try one of our tutorials text link
    (_a = document.querySelector("#" + id + " + ul li:nth-child(1) a")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        window.pxtTickEvent("gamejam.link.tutorial");
    });
    // How to import images text link
    (_b = document.querySelector("#" + id + " + ul li:nth-child(3) a")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
        window.pxtTickEvent("gamejam.link.images");
    });
    // Developer documentation text link
    (_c = document.querySelector("#" + id + "+ ul li:nth-child(4) a")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
        window.pxtTickEvent("gamejam.link.developer");
    });
}
function getInfo(path) {
    var infoRequest = new XMLHttpRequest();
    infoRequest.addEventListener("load", onLoad);
    infoRequest.open("GET", path);
    infoRequest.send();
    function onLoad() {
        info = JSON.parse(this.responseText);
        startDate = new Date(info.start).getTime();
        endDate = new Date(info.end).getTime();
        makeTimer();
        makeRules();
        makeGallery();
        makeSchedule();
        initTelemetry();
    }
}
function makeTimer() {
    var now = Date.now();
    if (now < endDate) {
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
        if (now < startDate) {
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
    var delta = Math.floor((now < startDate ? startDate - now : endDate - now) / 1000);
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
    var _a;
    if ((_a = info) === null || _a === void 0 ? void 0 : _a.rules) {
        var rulesRequest = new XMLHttpRequest();
        rulesRequest.addEventListener("load", onLoad);
        rulesRequest.open("GET", info.rules.path);
        rulesRequest.send();
        function onLoad() {
            marked.setOptions({
                // @ts-ignore
                sanitizer: DOMPurify.sanitizer
            });
            var markdown = marked(this.responseText);
            var parent = document.getElementById("rules");
            parent.innerHTML = markdown;
            // insert schedule of events after rules
            var node = document.getElementById(info.rules.collaborateId);
            if (node) {
                node.parentElement.insertBefore(document.getElementById("events"), node);
            }
            initRulesTelemetry(info.rules.tipsId);
        }
    }
}
function makeGallery() {
    var _a;
    if (!((_a = info) === null || _a === void 0 ? void 0 : _a.featured.length)) {
        var description = document.querySelector(".gallery .description");
        description.innerText = "Check back later to play some submitted games!";
    }
    var selected = randomize(info.featured); // show all the games
    var parent = document.getElementById("gallery");
    var row = document.createElement("div");
    for (var i = 0; i < selected.length; i++) {
        var game = selected[i];
        var card = document.createElement("div");
        card.className = "game";
        var link = document.createElement("a");
        link.href = game.url || "https://arcade.makecode.com/" + game.id;
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
        row.appendChild(card);
        if (i % 3 == 2) {
            parent.appendChild(row);
            row = document.createElement("div");
        }
    }
    if (selected.length % 3 != 0) {
        parent.appendChild(row);
    }
}
function makeSchedule() {
    var _a, _b;
    var sorted = ((_b = (_a = info) === null || _a === void 0 ? void 0 : _a.sessions) === null || _b === void 0 ? void 0 : _b.sort(function (a, b) { return a.date < b.date ? -1 : 1; })) || [];
    var parent = document.getElementById("schedule");
    for (var _i = 0, sorted_1 = sorted; _i < sorted_1.length; _i++) {
        var session = sorted_1[_i];
        var row = document.createElement("div");
        row.className = "event";
        var text = document.createElement("div");
        text.className = "text";
        var title = document.createElement("div");
        title.className = "title";
        title.innerText = session.title;
        var ics = document.createElement("a");
        ics.className = "ics";
        ics.href = session.ics;
        var icon = document.createElement("i");
        icon.className = "icon calendar";
        ics.appendChild(icon);
        title.appendChild(ics);
        row.appendChild(title);
        var details = document.createElement("div");
        details.className = "details";
        var imgContainer = document.createElement("div");
        imgContainer.className = "image";
        var img = document.createElement("img");
        img.src = session.imgSrc;
        imgContainer.appendChild(img);
        details.appendChild(imgContainer);
        var sessionDate = new Date(session.date);
        var date = document.createElement("div");
        date.className = "date";
        date.innerText = formatDate(sessionDate) + ", " + formatTime(session.time);
        text.appendChild(date);
        var description = document.createElement("div");
        description.innerText = session.description;
        text.appendChild(description);
        details.appendChild(text);
        row.appendChild(details);
        parent.appendChild(row);
    }
}
function formatTime(time) {
    var EST = time + 3;
    return (time % 12 || 12) + " " + (time < 12 ? "AM" : "PM") + " PDT / " + (EST % 12 || 12) + " " + (EST < 12 ? "AM" : "PM") + " EDT";
}
function formatDate(date) {
    return MONTHS[date.getMonth()] + " " + date.getDate();
}
function randomize(arr) {
    var _a;
    var randomized = arr.slice();
    for (var i = randomized.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [randomized[j], randomized[i]], randomized[i] = _a[0], randomized[j] = _a[1];
    }
    return randomized;
}

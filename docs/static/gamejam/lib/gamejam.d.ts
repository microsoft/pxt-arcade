interface JamInfo {
    rules: Rules;
    start: string; // eg "2020-06-10 00:00:00 GMT-0700"
    end: string;
    featured?: Game[];
    sessions?: Session[];
}

interface Rules {
    path: string;
    collaborateId?: string;
    tipsId?: string;
    submitPositionId?: string; // Insert the submit section before this ID, if present
}

interface Session {
    title: string;
    description: string;
    presenter: string;
    imgSrc?: string;
    time: number; // hour in PST, 24 hr clock
    date: string; // yyyy/mm/dd
    ics?: string; // ics file for event
}

interface Game {
    id: string;
    title: string;
    author?: string;
    url?: string; // for overriding share with eg github.io
    description?: string; // after judging, games that are honorable mentions are given a description
}
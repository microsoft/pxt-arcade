var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var pxt;
(function (pxt) {
})(pxt || (pxt = {}));
(function (pxt) {
    var analytics;
    (function (analytics) {
        var defaultProps = {};
        var defaultMeasures = {};
        var enabled = false;
        function addDefaultProperties(props) {
            Object.keys(props).forEach(function (k) {
                if (typeof props[k] == "string") {
                    defaultProps[k] = props[k];
                }
                else {
                    defaultMeasures[k] = props[k];
                }
            });
        }
        analytics.addDefaultProperties = addDefaultProperties;
        function enable() {
            if (!pxt.aiTrackException || !pxt.aiTrackEvent || enabled)
                return;
            enabled = true;
            pxt.debug('setting up app insights');
            var te = pxt.tickEvent;
            pxt.tickEvent = function (id, data, opts) {
                var _a;
                if (te)
                    te(id, data, opts);
                if ((_a = opts) === null || _a === void 0 ? void 0 : _a.interactiveConsent)
                    pxt.setInteractiveConsent(true);
                if (!data)
                    pxt.aiTrackEvent(id);
                else {
                    var props_1 = defaultProps || {};
                    var measures_1 = defaultMeasures || {};
                    Object.keys(data).forEach(function (k) {
                        if (typeof data[k] == "string")
                            props_1[k] = data[k];
                        else if (typeof data[k] == "number")
                            measures_1[k] = data[k];
                        else
                            props_1[k] = JSON.stringify(data[k] || '');
                    });
                    pxt.aiTrackEvent(id, props_1, measures_1);
                }
            };
            var rexp = pxt.reportException;
            pxt.reportException = function (err, data) {
                if (rexp)
                    rexp(err, data);
                var props = {
                    target: pxt.appTarget.id,
                    version: pxt.appTarget.versions.target
                };
                if (data)
                    pxt.Util.jsonMergeFrom(props, data);
                pxt.aiTrackException(err, 'exception', props);
            };
            var re = pxt.reportError;
            pxt.reportError = function (cat, msg, data) {
                if (re)
                    re(cat, msg, data);
                try {
                    throw msg;
                }
                catch (err) {
                    var props = {
                        target: pxt.appTarget.id,
                        version: pxt.appTarget.versions.target,
                        category: cat,
                        message: msg
                    };
                    if (data)
                        pxt.Util.jsonMergeFrom(props, data);
                    pxt.aiTrackException(err, 'error', props);
                }
            };
        }
        analytics.enable = enable;
    })(analytics = pxt.analytics || (pxt.analytics = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var AudioContextManager;
    (function (AudioContextManager) {
        var _frequency = 0;
        var _context; // AudioContext
        var _vco; // OscillatorNode;
        var _gain;
        var _mute = false; //mute audio
        function context() {
            if (!_context)
                _context = freshContext();
            return _context;
        }
        function freshContext() {
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            if (window.AudioContext) {
                try {
                    // this call my crash.
                    // SyntaxError: audio resources unavailable for AudioContext construction
                    return new window.AudioContext();
                }
                catch (e) { }
            }
            return undefined;
        }
        function mute(mute) {
            if (!_context)
                return;
            _mute = mute;
            stop();
            if (mute && _vco) {
                _vco.disconnect();
                _gain.disconnect();
                _vco = undefined;
                _gain = undefined;
            }
        }
        AudioContextManager.mute = mute;
        function stop() {
            if (!_context)
                return;
            _gain.gain.setTargetAtTime(0, _context.currentTime, 0.015);
            _frequency = 0;
        }
        AudioContextManager.stop = stop;
        function frequency() {
            return _frequency;
        }
        AudioContextManager.frequency = frequency;
        function tone(frequency) {
            if (_mute)
                return;
            if (frequency < 0)
                return;
            _frequency = frequency;
            var ctx = context();
            if (!ctx)
                return;
            try {
                if (!_vco) {
                    _vco = ctx.createOscillator();
                    _vco.type = 'triangle';
                    _gain = ctx.createGain();
                    _gain.connect(ctx.destination);
                    _vco.connect(_gain);
                    _vco.start(0);
                }
                _vco.frequency.value = frequency;
                _gain.gain.setTargetAtTime(1, _context.currentTime, 0.015);
            }
            catch (e) {
                _vco = undefined;
                return;
            }
        }
        AudioContextManager.tone = tone;
    })(AudioContextManager = pxt.AudioContextManager || (pxt.AudioContextManager = {}));
})(pxt || (pxt = {}));
// Needs to be in its own file to avoid a circular dependency: util.ts -> main.ts -> util.ts
var pxt;
(function (pxt) {
    /**
     * Track an event.
     */
    pxt.tickEvent = function (id) { };
})(pxt || (pxt = {}));
/// <reference path="./tickEvent.ts" />
/// <reference path="./apptarget.ts" />
var ts;
(function (ts) {
    var pxtc;
    (function (pxtc) {
        pxtc.__dummy = 42;
    })(pxtc = ts.pxtc || (ts.pxtc = {}));
})(ts || (ts = {}));
var pxtc = ts.pxtc;
(function (ts) {
    var pxtc;
    (function (pxtc) {
        var Util;
        (function (Util) {
            function assert(cond, msg) {
                if (msg === void 0) { msg = "Assertion failed"; }
                if (!cond) {
                    debugger;
                    throw new Error(msg);
                }
            }
            Util.assert = assert;
            function flatClone(obj) {
                if (obj == null)
                    return null;
                var r = {};
                Object.keys(obj).forEach(function (k) { r[k] = obj[k]; });
                return r;
            }
            Util.flatClone = flatClone;
            function clone(v) {
                if (v == null)
                    return null;
                return JSON.parse(JSON.stringify(v));
            }
            Util.clone = clone;
            function htmlEscape(_input) {
                if (!_input)
                    return _input; // null, undefined, empty string test
                return _input.replace(/([^\w .!?\-$])/g, function (c) { return "&#" + c.charCodeAt(0) + ";"; });
            }
            Util.htmlEscape = htmlEscape;
            function htmlUnescape(_input) {
                if (!_input)
                    return _input; // null, undefined, empty string test
                return _input.replace(/(&#\d+;)/g, function (c) { return String.fromCharCode(Number(c.substr(2, c.length - 3))); });
            }
            Util.htmlUnescape = htmlUnescape;
            function jsStringQuote(s) {
                return s.replace(/[^\w .!?\-$]/g, function (c) {
                    var h = c.charCodeAt(0).toString(16);
                    return "\\u" + "0000".substr(0, 4 - h.length) + h;
                });
            }
            Util.jsStringQuote = jsStringQuote;
            function jsStringLiteral(s) {
                return "\"" + jsStringQuote(s) + "\"";
            }
            Util.jsStringLiteral = jsStringLiteral;
            // Localization functions. Please port any modifications over to pxtsim/localization.ts
            var _localizeLang = "en";
            var _localizeStrings = {};
            var _translationsCache = {};
            //let _didSetlocalizations = false;
            //let _didReportLocalizationsNotSet = false;
            Util.localizeLive = false;
            /**
             * Returns the current user language, prepended by "live-" if in live mode
             */
            function localeInfo() {
                return "" + (Util.localizeLive ? "live-" : "") + userLanguage();
            }
            Util.localeInfo = localeInfo;
            /**
             * Returns current user language iSO-code. Default is `en`.
             */
            function userLanguage() {
                return _localizeLang;
            }
            Util.userLanguage = userLanguage;
            // This function returns normalized language code
            // For example: zh-CN this returns ["zh-CN", "zh", "zh-cn"]
            // First two are valid crowdin\makecode locale code,
            // Last all lowercase one is just for the backup when reading user defined extensions & tutorials.
            function normalizeLanguageCode(code) {
                var langParts = /^(\w{2})-(\w{2}$)/i.exec(code);
                if (langParts && langParts[1] && langParts[2]) {
                    return [langParts[1].toLowerCase() + "-" + langParts[2].toUpperCase(), langParts[1].toLowerCase(),
                        langParts[1].toLowerCase() + "-" + langParts[2].toLowerCase()];
                }
                else {
                    return [(code || "en").toLowerCase()];
                }
            }
            Util.normalizeLanguageCode = normalizeLanguageCode;
            function setUserLanguage(localizeLang) {
                _localizeLang = normalizeLanguageCode(localizeLang)[0];
            }
            Util.setUserLanguage = setUserLanguage;
            function isUserLanguageRtl() {
                return /^ar|dv|fa|ha|he|ks|ku|ps|ur|yi/i.test(_localizeLang);
            }
            Util.isUserLanguageRtl = isUserLanguageRtl;
            Util.TRANSLATION_LOCALE = "pxt";
            function isTranslationMode() {
                return userLanguage() == Util.TRANSLATION_LOCALE;
            }
            Util.isTranslationMode = isTranslationMode;
            function _localize(s) {
                // Needs to be test in localhost / CLI
                /*if (!_didSetlocalizations && !_didReportLocalizationsNotSet) {
                    _didReportLocalizationsNotSet = true;
                    pxt.tickEvent("locale.localizationsnotset");
                    // pxt.reportError can't be used here because of order of file imports
                    // Just use console.error instead, and use an Error so stacktrace is reported
                    console.error(new Error("Attempted to translate a string before localizations were set"));
                }*/
                return _localizeStrings[s] || s;
            }
            Util._localize = _localize;
            function getLocalizedStrings() {
                return _localizeStrings;
            }
            Util.getLocalizedStrings = getLocalizedStrings;
            function setLocalizedStrings(strs) {
                //_didSetlocalizations = true;
                _localizeStrings = strs;
            }
            Util.setLocalizedStrings = setLocalizedStrings;
            function translationsCache() {
                return _translationsCache;
            }
            Util.translationsCache = translationsCache;
            function fmt_va(f, args) {
                if (args.length == 0)
                    return f;
                return f.replace(/\{([0-9]+)(\:[^\}]+)?\}/g, function (s, n, spec) {
                    var v = args[parseInt(n)];
                    var r = "";
                    var fmtMatch = /^:f(\d*)\.(\d+)/.exec(spec);
                    if (fmtMatch) {
                        var precision = parseInt(fmtMatch[2]);
                        var len = parseInt(fmtMatch[1]) || 0;
                        var fillChar = /^0/.test(fmtMatch[1]) ? "0" : " ";
                        var num = v.toFixed(precision);
                        if (len > 0 && precision > 0)
                            len += precision + 1;
                        if (len > 0) {
                            while (num.length < len) {
                                num = fillChar + num;
                            }
                        }
                        r = num;
                    }
                    else if (spec == ":x") {
                        r = "0x" + v.toString(16);
                    }
                    else if (v === undefined)
                        r = "(undef)";
                    else if (v === null)
                        r = "(null)";
                    else if (v.toString)
                        r = v.toString();
                    else
                        r = v + "";
                    if (spec == ":a") {
                        if (/^\s*[euioah]/.test(r.toLowerCase()))
                            r = "an " + r;
                        else if (/^\s*[bcdfgjklmnpqrstvwxz]/.test(r.toLowerCase()))
                            r = "a " + r;
                    }
                    else if (spec == ":s") {
                        if (v == 1)
                            r = "";
                        else
                            r = "s";
                    }
                    else if (spec == ":q") {
                        r = Util.htmlEscape(r);
                    }
                    else if (spec == ":jq") {
                        r = Util.jsStringQuote(r);
                    }
                    else if (spec == ":uri") {
                        r = encodeURIComponent(r).replace(/'/g, "%27").replace(/"/g, "%22");
                    }
                    else if (spec == ":url") {
                        r = encodeURI(r).replace(/'/g, "%27").replace(/"/g, "%22");
                    }
                    else if (spec == ":%") {
                        r = (v * 100).toFixed(1).toString() + '%';
                    }
                    return r;
                });
            }
            Util.fmt_va = fmt_va;
            function fmt(f) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return fmt_va(f, args);
            }
            Util.fmt = fmt;
            var locStats = {};
            function dumpLocStats() {
                var r = {};
                Object.keys(locStats).sort(function (a, b) { return locStats[b] - locStats[a]; })
                    .forEach(function (k) { return r[k] = k; });
                console.log('prioritized list of strings:');
                console.log(JSON.stringify(r, null, 2));
            }
            Util.dumpLocStats = dumpLocStats;
            var sForPlural = true;
            function lf_va(format, args) {
                if (!format)
                    return format;
                locStats[format] = (locStats[format] || 0) + 1;
                var lfmt = Util._localize(format);
                if (!sForPlural && lfmt != format && /\d:s\}/.test(lfmt)) {
                    lfmt = lfmt.replace(/\{\d+:s\}/g, "");
                }
                lfmt = lfmt.replace(/^\{(id|loc):[^\}]+\}/g, '');
                return fmt_va(lfmt, args);
            }
            Util.lf_va = lf_va;
            function lf(format) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return lf_va(format, args);
            }
            Util.lf = lf;
            /**
             * Similar to lf but the string do not get extracted into the loc file.
             */
            function rlf(format) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return lf_va(format, args);
            }
            Util.rlf = rlf;
            function lookup(m, key) {
                if (m.hasOwnProperty(key))
                    return m[key];
                return null;
            }
            Util.lookup = lookup;
            function isoTime(time) {
                var d = new Date(time * 1000);
                return Util.fmt("{0}-{1:f02.0}-{2:f02.0} {3:f02.0}:{4:f02.0}:{5:f02.0}", d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds());
            }
            Util.isoTime = isoTime;
            function userError(msg) {
                var e = new Error(msg);
                e.isUserError = true;
                throw e;
            }
            Util.userError = userError;
            // small deep equals for primitives, objects, arrays. returns error message
            function deq(a, b) {
                if (a === b)
                    return null;
                if (!a || !b)
                    return "Null value";
                if (typeof a == 'object' && typeof b == 'object') {
                    if (Array.isArray(a)) {
                        if (!Array.isArray(b)) {
                            return "Expected array";
                        }
                        if (a.length != b.length) {
                            return "Expected array of length " + a.length + ", got " + b.length;
                        }
                        for (var i = 0; i < a.length; i++) {
                            if (deq(a[i], b[i]) != null) {
                                return "Expected array value " + a[i] + " got " + b[i];
                            }
                        }
                        return null;
                    }
                    var ak = Object.keys(a);
                    var bk = Object.keys(a);
                    if (ak.length != bk.length) {
                        return "Expected " + ak.length + " keys, got " + bk.length;
                    }
                    for (var i = 0; i < ak.length; i++) {
                        if (!Object.prototype.hasOwnProperty.call(b, ak[i])) {
                            return "Missing key " + ak[i];
                        }
                        else if (deq(a[ak[i]], b[ak[i]]) != null) {
                            return "Expected value of " + ak[i] + " to be " + a[ak[i]] + ", got " + b[ak[i]];
                        }
                    }
                    return null;
                }
                return "Unable to compare " + a + ", " + b;
            }
            Util.deq = deq;
        })(Util = pxtc.Util || (pxtc.Util = {}));
    })(pxtc = ts.pxtc || (ts.pxtc = {}));
})(ts || (ts = {}));
var lf = ts.pxtc.Util.lf;
/// <reference path="tickEvent.ts" />
/// <reference path="apptarget.ts"/>
/// <reference path="commonutil.ts"/>
var ts;
(function (ts) {
    var pxtc;
    (function (pxtc) {
        /**
         * atob replacement
         * @param s
         */
        pxtc.decodeBase64 = function (s) { return atob(s); };
        /**
         * bota replacement
         * @param s
         */
        pxtc.encodeBase64 = function (s) { return btoa(s); };
    })(pxtc = ts.pxtc || (ts.pxtc = {}));
})(ts || (ts = {}));
(function (ts) {
    var pxtc;
    (function (pxtc) {
        var Util;
        (function (Util) {
            var CancellationToken = /** @class */ (function () {
                function CancellationToken() {
                    this.pending = false;
                    this.cancelled = false;
                }
                CancellationToken.prototype.startOperation = function () {
                    this.pending = true;
                };
                CancellationToken.prototype.isRunning = function () {
                    return this.pending;
                };
                CancellationToken.prototype.onProgress = function (progressHandler) {
                    this.progressHandler = progressHandler;
                };
                CancellationToken.prototype.reportProgress = function (completed, total) {
                    if (this.progressHandler) {
                        this.progressHandler(completed, total);
                    }
                };
                CancellationToken.prototype.cancel = function () {
                    this.cancelled = true;
                    this.pending = false;
                };
                CancellationToken.prototype.cancelAsync = function () {
                    var _this = this;
                    if (this.cancelled || !this.pending) {
                        this.cancelled = true;
                        this.pending = false;
                        return Promise.resolve();
                    }
                    this.cancelled = true;
                    this.deferred = new Promise(function (resolve) {
                        _this.resolve = resolve;
                    });
                    return this.deferred;
                };
                CancellationToken.prototype.isCancelled = function () {
                    return this.cancelled;
                };
                CancellationToken.prototype.throwIfCancelled = function () {
                    if (this.isCancelled())
                        throw new Error();
                };
                CancellationToken.prototype.resolveCancel = function () {
                    this.pending = false;
                    if (this.deferred) {
                        this.resolve();
                        this.deferred = undefined;
                        this.resolve = undefined;
                    }
                };
                return CancellationToken;
            }());
            Util.CancellationToken = CancellationToken;
            function codalHash16(s) {
                // same hashing as https://github.com/lancaster-university/codal-core/blob/c1fe7a4c619683a50d47cb0c19d15b8ff3bd16a1/source/drivers/PearsonHash.cpp#L26
                var hashTable = [
                    251, 175, 119, 215, 81, 14, 79, 191, 103, 49, 181, 143, 186, 157, 0,
                    232, 31, 32, 55, 60, 152, 58, 17, 237, 174, 70, 160, 144, 220, 90, 57,
                    223, 59, 3, 18, 140, 111, 166, 203, 196, 134, 243, 124, 95, 222, 179,
                    197, 65, 180, 48, 36, 15, 107, 46, 233, 130, 165, 30, 123, 161, 209, 23,
                    97, 16, 40, 91, 219, 61, 100, 10, 210, 109, 250, 127, 22, 138, 29, 108,
                    244, 67, 207, 9, 178, 204, 74, 98, 126, 249, 167, 116, 34, 77, 193,
                    200, 121, 5, 20, 113, 71, 35, 128, 13, 182, 94, 25, 226, 227, 199, 75,
                    27, 41, 245, 230, 224, 43, 225, 177, 26, 155, 150, 212, 142, 218, 115,
                    241, 73, 88, 105, 39, 114, 62, 255, 192, 201, 145, 214, 168, 158, 221,
                    148, 154, 122, 12, 84, 82, 163, 44, 139, 228, 236, 205, 242, 217, 11,
                    187, 146, 159, 64, 86, 239, 195, 42, 106, 198, 118, 112, 184, 172, 87,
                    2, 173, 117, 176, 229, 247, 253, 137, 185, 99, 164, 102, 147, 45, 66,
                    231, 52, 141, 211, 194, 206, 246, 238, 56, 110, 78, 248, 63, 240, 189,
                    93, 92, 51, 53, 183, 19, 171, 72, 50, 33, 104, 101, 69, 8, 252, 83, 120,
                    76, 135, 85, 54, 202, 125, 188, 213, 96, 235, 136, 208, 162, 129, 190,
                    132, 156, 38, 47, 1, 7, 254, 24, 4, 216, 131, 89, 21, 28, 133, 37, 153,
                    149, 80, 170, 68, 6, 169, 234, 151
                ];
                // REF: https://en.wikipedia.org/wiki/Pearson_hashing
                function eightBitHash(s) {
                    var hash = 0;
                    for (var i = 0; i < s.length; i++) {
                        var c = s[i];
                        hash = hashTable[hash ^ c];
                    }
                    return hash;
                }
                function hashN(s, byteCount) {
                    // this hash is used by enum.isHash. So any modification should be considered a breaking change.
                    var hash;
                    var buffer = new Uint8Array(s.length); // TODO unicode
                    for (var i = 0; i < s.length; ++i) {
                        var c = s.charCodeAt(i);
                        buffer[i] = c & 0xff;
                    }
                    var res = 0;
                    for (var i = 0; i < byteCount; ++i) {
                        hash = eightBitHash(buffer);
                        res |= hash << (8 * i);
                        buffer[0] = (buffer[0] + 1) % 255;
                    }
                    return res;
                }
                if (!s)
                    return 0;
                return hashN(s, 2);
            }
            Util.codalHash16 = codalHash16;
            function bufferSerial(buffers, data, source, maxBufLen) {
                if (data === void 0) { data = ""; }
                if (source === void 0) { source = "?"; }
                if (maxBufLen === void 0) { maxBufLen = 255; }
                for (var i = 0; i < data.length; ++i) {
                    var char = data[i];
                    buffers[source] = (buffers[source] || "") + char;
                    if (char === "\n" || buffers[source].length > maxBufLen) {
                        var buffer = buffers[source];
                        buffers[source] = "";
                        window.postMessage({
                            type: "serial",
                            id: source,
                            data: buffer
                        }, "*");
                    }
                }
            }
            Util.bufferSerial = bufferSerial;
            function blobReadAsDataURL(blob) {
                if (!blob)
                    return Promise.resolve(undefined);
                return new Promise(function (resolve, reject) {
                    var reader = new FileReader();
                    reader.onload = function () { return resolve(reader.result); };
                    reader.onerror = function (e) { return reject(e); };
                    reader.readAsDataURL(blob);
                });
            }
            Util.blobReadAsDataURL = blobReadAsDataURL;
            function fileReadAsBufferAsync(f) {
                if (!f)
                    return Promise.resolve(null);
                else {
                    return new Promise(function (resolve, reject) {
                        var reader = new FileReader();
                        reader.onerror = function (ev) { return resolve(null); };
                        reader.onload = function (ev) { return resolve(new Uint8Array(reader.result)); };
                        reader.readAsArrayBuffer(f);
                    });
                }
            }
            Util.fileReadAsBufferAsync = fileReadAsBufferAsync;
            function fileReadAsTextAsync(f) {
                if (!f)
                    return Promise.resolve(null);
                else {
                    return new Promise(function (resolve, reject) {
                        var reader = new FileReader();
                        reader.onerror = function (ev) { return resolve(null); };
                        reader.onload = function (ev) { return resolve(reader.result); };
                        reader.readAsText(f);
                    });
                }
            }
            Util.fileReadAsTextAsync = fileReadAsTextAsync;
            function repeatMap(n, fn) {
                n = n || 0;
                var r = [];
                for (var i = 0; i < n; ++i)
                    r.push(fn(i));
                return r;
            }
            Util.repeatMap = repeatMap;
            function listsEqual(a, b) {
                if (!a || !b || a.length !== b.length) {
                    return false;
                }
                for (var i = 0; i < a.length; i++) {
                    if (a[i] !== b[i]) {
                        return false;
                    }
                }
                return true;
            }
            Util.listsEqual = listsEqual;
            function oops(msg) {
                if (msg === void 0) { msg = "OOPS"; }
                debugger;
                throw new Error(msg);
            }
            Util.oops = oops;
            function reversed(arr) {
                arr = arr.slice(0);
                arr.reverse();
                return arr;
            }
            Util.reversed = reversed;
            function iterMap(m, f) {
                Object.keys(m).forEach(function (k) { return f(k, m[k]); });
            }
            Util.iterMap = iterMap;
            function mapMap(m, f) {
                var r = {};
                Object.keys(m).forEach(function (k) { return r[k] = f(k, m[k]); });
                return r;
            }
            Util.mapMap = mapMap;
            function values(m) {
                return Object.keys(m || {}).map(function (k) { return m[k]; });
            }
            Util.values = values;
            function pushRange(trg, src) {
                for (var i = 0; i < src.length; ++i)
                    trg.push(src[i]);
            }
            Util.pushRange = pushRange;
            // TS gets lost in type inference when this is passed an array
            function concatArrayLike(arrays) {
                return concat(arrays);
            }
            Util.concatArrayLike = concatArrayLike;
            function concat(arrays) {
                var r = [];
                for (var i = 0; i < arrays.length; ++i) {
                    pushRange(r, arrays[i]);
                }
                return r;
            }
            Util.concat = concat;
            function isKV(v) {
                return !!v && typeof v === "object" && !Array.isArray(v);
            }
            function memcpy(trg, trgOff, src, srcOff, len) {
                if (srcOff === void 0)
                    srcOff = 0;
                if (len === void 0)
                    len = src.length - srcOff;
                for (var i = 0; i < len; ++i)
                    trg[trgOff + i] = src[srcOff + i];
            }
            Util.memcpy = memcpy;
            function uint8ArrayConcat(chunks) {
                var numbytes = 0;
                for (var _i = 0, chunks_1 = chunks; _i < chunks_1.length; _i++) {
                    var c = chunks_1[_i];
                    numbytes += c.length;
                }
                var r = new Uint8Array(numbytes);
                var ptr = 0;
                for (var _a = 0, chunks_2 = chunks; _a < chunks_2.length; _a++) {
                    var c = chunks_2[_a];
                    memcpy(r, ptr, c);
                    ptr += c.length;
                }
                return r;
            }
            Util.uint8ArrayConcat = uint8ArrayConcat;
            function jsonTryParse(s) {
                try {
                    return JSON.parse(s);
                }
                catch (e) {
                    return undefined;
                }
            }
            Util.jsonTryParse = jsonTryParse;
            function jsonMergeFrom(trg, src) {
                if (!src)
                    return;
                Object.keys(src).forEach(function (k) {
                    if (isKV(trg[k]) && isKV(src[k]))
                        jsonMergeFrom(trg[k], src[k]);
                    else
                        trg[k] = Util.clone(src[k]);
                });
            }
            Util.jsonMergeFrom = jsonMergeFrom;
            function jsonCopyFrom(trg, src) {
                var v = Util.clone(src);
                for (var _i = 0, _a = Object.keys(src); _i < _a.length; _i++) {
                    var k = _a[_i];
                    trg[k] = v[k];
                }
            }
            Util.jsonCopyFrom = jsonCopyFrom;
            // { a: { b: 1 }, c: 2} => { "a.b": 1, c: 2 }
            function jsonFlatten(v) {
                var res = {};
                var loop = function (pref, v) {
                    if (v !== null && typeof v == "object") {
                        Util.assert(!Array.isArray(v));
                        if (pref)
                            pref += ".";
                        for (var _i = 0, _a = Object.keys(v); _i < _a.length; _i++) {
                            var k = _a[_i];
                            loop(pref + k, v[k]);
                        }
                    }
                    else {
                        res[pref] = v;
                    }
                };
                loop("", v);
                return res;
            }
            Util.jsonFlatten = jsonFlatten;
            function jsonUnFlatten(v) {
                var res = {};
                for (var _i = 0, _a = Object.keys(v); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var ptr = res;
                    var parts = k.split(".");
                    for (var i = 0; i < parts.length; ++i) {
                        var part = parts[i];
                        if (i == parts.length - 1)
                            ptr[part] = v[k];
                        else {
                            if (typeof ptr[part] != "object")
                                ptr[part] = {};
                            ptr = ptr[part];
                        }
                    }
                }
                return res;
            }
            Util.jsonUnFlatten = jsonUnFlatten;
            function strcmp(a, b) {
                if (a == b)
                    return 0;
                if (a < b)
                    return -1;
                else
                    return 1;
            }
            Util.strcmp = strcmp;
            function stringMapEq(a, b) {
                var ak = Object.keys(a);
                var bk = Object.keys(b);
                if (ak.length != bk.length)
                    return false;
                for (var _i = 0, ak_1 = ak; _i < ak_1.length; _i++) {
                    var k = ak_1[_i];
                    if (!b.hasOwnProperty(k))
                        return false;
                    if (a[k] !== b[k])
                        return false;
                }
                return true;
            }
            Util.stringMapEq = stringMapEq;
            function endsWith(str, suffix) {
                if (str.length < suffix.length)
                    return false;
                if (suffix.length == 0)
                    return true;
                return str.slice(-suffix.length) == suffix;
            }
            Util.endsWith = endsWith;
            function startsWith(str, prefix) {
                if (str.length < prefix.length)
                    return false;
                if (prefix.length == 0)
                    return true;
                return str.slice(0, prefix.length) == prefix;
            }
            Util.startsWith = startsWith;
            function contains(str, contains) {
                if (str.length < contains.length)
                    return false;
                if (contains.length == 0)
                    return true;
                return str.indexOf(contains) > -1;
            }
            Util.contains = contains;
            function replaceAll(str, old, new_) {
                if (!old)
                    return str;
                return str.split(old).join(new_);
            }
            Util.replaceAll = replaceAll;
            function sortObjectFields(o) {
                var keys = Object.keys(o);
                keys.sort(strcmp);
                var r = {};
                keys.forEach(function (k) { return r[k] = o[k]; });
                return r;
            }
            Util.sortObjectFields = sortObjectFields;
            function chopArray(arr, chunkSize) {
                var res = [];
                for (var i = 0; i < arr.length; i += chunkSize)
                    res.push(arr.slice(i, i + chunkSize));
                return res;
            }
            Util.chopArray = chopArray;
            function unique(arr, f) {
                var v = [];
                var r = {};
                arr.forEach(function (e) {
                    var k = f(e);
                    if (!r.hasOwnProperty(k)) {
                        r[k] = null;
                        v.push(e);
                    }
                });
                return v;
            }
            Util.unique = unique;
            function groupBy(arr, f) {
                var r = {};
                arr.forEach(function (e) {
                    var k = f(e);
                    if (!r.hasOwnProperty(k))
                        r[k] = [];
                    r[k].push(e);
                });
                return r;
            }
            Util.groupBy = groupBy;
            function toDictionary(arr, f) {
                var r = {};
                arr.forEach(function (e) { r[f(e)] = e; });
                return r;
            }
            Util.toDictionary = toDictionary;
            function toSet(arr, f) {
                var r = {};
                arr.forEach(function (e) { r[f(e)] = true; });
                return r;
            }
            Util.toSet = toSet;
            function toArray(a) {
                if (Array.isArray(a)) {
                    return a;
                }
                var r = [];
                if (!a)
                    return r;
                for (var i = 0; i < a.length; ++i)
                    r.push(a[i]);
                return r;
            }
            Util.toArray = toArray;
            function indexOfMatching(arr, f) {
                for (var i = 0; i < arr.length; ++i)
                    if (f(arr[i]))
                        return i;
                return -1;
            }
            Util.indexOfMatching = indexOfMatching;
            function nextTick(f) {
                Promise._async._schedule(f);
            }
            Util.nextTick = nextTick;
            function memoizeString(createNew) {
                return memoize(function (s) { return s; }, createNew);
            }
            Util.memoizeString = memoizeString;
            function memoize(getId, createNew) {
                var cache = {};
                return function (v) {
                    var id = getId(v);
                    if (cache.hasOwnProperty(id))
                        return cache[id];
                    return (cache[id] = createNew(v));
                };
            }
            Util.memoize = memoize;
            // Returns a function, that, as long as it continues to be invoked, will not
            // be triggered. The function will be called after it stops being called for
            // N milliseconds. If `immediate` is passed, trigger the function on the
            // leading edge, instead of the trailing.
            function debounce(func, wait, immediate) {
                var timeout;
                return function () {
                    var context = this;
                    var args = arguments;
                    var later = function () {
                        timeout = null;
                        if (!immediate)
                            func.apply(context, args);
                    };
                    var callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow)
                        func.apply(context, args);
                    return timeout;
                };
            }
            Util.debounce = debounce;
            var AdaptiveDebouncer = /** @class */ (function () {
                function AdaptiveDebouncer(func, minDelay, maxDelay, slowdownFactor) {
                    var _this = this;
                    if (minDelay === void 0) { minDelay = 300; }
                    if (maxDelay === void 0) { maxDelay = 2000; }
                    if (slowdownFactor === void 0) { slowdownFactor = 2; }
                    this.func = func;
                    this.minDelay = minDelay;
                    this.maxDelay = maxDelay;
                    this.slowdownFactor = slowdownFactor;
                    this.lastPoke = 0;
                    this.recentGaps = [];
                    this.wrapped = function () {
                        _this.timeout = null;
                        _this.func();
                    };
                }
                AdaptiveDebouncer.prototype.poke = function () {
                    var now = Date.now();
                    if (this.lastPoke) {
                        var gap = now - this.lastPoke;
                        if (gap < 10)
                            return; // ignore triggers is quick succession
                        if (gap < 4000)
                            this.recentGaps.push(gap);
                        while (this.recentGaps.length > 10)
                            this.recentGaps.shift();
                    }
                    this.lastPoke = now;
                };
                AdaptiveDebouncer.prototype.trigger = function () {
                    var delay = this.maxDelay;
                    if (this.lastPoke) {
                        var gaps = this.recentGaps.slice();
                        gaps.sort();
                        var median = gaps[gaps.length >> 1] || 1;
                        delay = Math.min(Math.max((median * this.slowdownFactor) | 0, this.minDelay), this.maxDelay);
                        var gap = Date.now() - this.lastPoke;
                        delay -= gap;
                        if (delay < 0)
                            delay = 0;
                        this.lastPoke = null;
                    }
                    clearTimeout(this.timeout);
                    this.timeout = setTimeout(this.wrapped, delay);
                };
                return AdaptiveDebouncer;
            }());
            Util.AdaptiveDebouncer = AdaptiveDebouncer;
            // Returns a function, that, as long as it continues to be invoked, will only
            // trigger every N milliseconds. If `immediate` is passed, trigger the
            // function on the leading edge, instead of the trailing.
            function throttle(func, wait, immediate) {
                var timeout;
                return function () {
                    var context = this;
                    var args = arguments;
                    var later = function () {
                        timeout = null;
                        if (!immediate)
                            func.apply(context, args);
                    };
                    var callNow = immediate && !timeout;
                    if (!timeout)
                        timeout = setTimeout(later, wait);
                    if (callNow)
                        func.apply(context, args);
                };
            }
            Util.throttle = throttle;
            function randomPermute(arr) {
                for (var i = 0; i < arr.length; ++i) {
                    var j = randomUint32() % arr.length;
                    var tmp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = tmp;
                }
            }
            Util.randomPermute = randomPermute;
            function randomPick(arr) {
                if (arr.length == 0)
                    return null;
                return arr[randomUint32() % arr.length];
            }
            Util.randomPick = randomPick;
            function timeSince(time) {
                var now = Date.now();
                time *= 1000;
                var diff = (now - time) / 1000;
                if (isNaN(diff))
                    return "";
                if (diff < -30) {
                    diff = -diff;
                    if (diff < 60)
                        return Util.lf("in a few seconds");
                    if (diff < 2 * 60)
                        return Util.lf("in a minute");
                    if (diff < 60 * 60)
                        return Util.lf("in {0} minute{0:s}", Math.floor(diff / 60));
                    if (diff < 2 * 60 * 60)
                        return Util.lf("in an hour");
                    if (diff < 60 * 60 * 24)
                        return Util.lf("in {0} hour{0:s}", Math.floor(diff / 60 / 60));
                    if (diff < 60 * 60 * 24 * 30)
                        return Util.lf("in {0} day{0:s}", Math.floor(diff / 60 / 60 / 24));
                    if (diff < 60 * 60 * 24 * 365)
                        return Util.lf("in {0} month{0:s}", Math.floor(diff / 60 / 60 / 24 / 30));
                    return Util.lf("in {0} year{0:s}", Math.floor(diff / 60 / 60 / 24 / 365));
                }
                else {
                    if (diff < 0)
                        return Util.lf("now");
                    if (diff < 10)
                        return Util.lf("a few seconds ago");
                    if (diff < 60)
                        return Util.lf("{0} second{0:s} ago", Math.floor(diff));
                    if (diff < 2 * 60)
                        return Util.lf("a minute ago");
                    if (diff < 60 * 60)
                        return Util.lf("{0} minute{0:s} ago", Math.floor(diff / 60));
                    if (diff < 2 * 60 * 60)
                        return Util.lf("an hour ago");
                    if (diff < 60 * 60 * 24)
                        return Util.lf("{0} hour{0:s} ago", Math.floor(diff / 60 / 60));
                    if (diff < 60 * 60 * 24 * 30)
                        return Util.lf("{0} day{0:s} ago", Math.floor(diff / 60 / 60 / 24));
                    if (diff < 60 * 60 * 24 * 365)
                        return Util.lf("{0} month{0:s} ago", Math.floor(diff / 60 / 60 / 24 / 30));
                    return Util.lf("{0} year{0:s} ago", Math.floor(diff / 60 / 60 / 24 / 365));
                }
            }
            Util.timeSince = timeSince;
            function unicodeToChar(text) {
                var r = /\\u([\d\w]{4})/gi;
                return text.replace(r, function (match, grp) {
                    return String.fromCharCode(parseInt(grp, 16));
                });
            }
            Util.unicodeToChar = unicodeToChar;
            function escapeForRegex(str) {
                return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            }
            Util.escapeForRegex = escapeForRegex;
            function stripUrlProtocol(str) {
                return str.replace(/.*?:\/\//g, "");
            }
            Util.stripUrlProtocol = stripUrlProtocol;
            function normalizePath(path) {
                if (path) {
                    path = path.replace(/\\/g, "/");
                }
                return path;
            }
            Util.normalizePath = normalizePath;
            function pathJoin(a, b) {
                normalizePath(a);
                normalizePath(b);
                if (!a && !b)
                    return undefined;
                else if (!a)
                    return b;
                else if (!b)
                    return a;
                if (a.charAt(a.length - 1) !== "/") {
                    a += "/";
                }
                if (b.charAt(0) == "/") {
                    b = b.substring(1);
                }
                return a + b;
            }
            Util.pathJoin = pathJoin;
            // Reliable NodeJS detection is not possible, but the following check should be accurate enough for our needs
            Util.isNodeJS = typeof window === "undefined";
            // debug flag
            //export let debugHttpRequests = false;
            function requestAsync(options) {
                //if (debugHttpRequests)
                //    pxt.debug(`>> ${options.method || "GET"} ${options.url.replace(/[?#].*/, "...")}`); // don't leak secrets in logs
                return Util.httpRequestCoreAsync(options)
                    .then(function (resp) {
                    //if (debugHttpRequests)
                    //    pxt.debug(`  << ${resp.statusCode}`);
                    var statusCode = resp.statusCode;
                    var successCodes = options.successCodes || [304, 200, 201, 202];
                    if (successCodes.indexOf(statusCode) < 0 && !options.allowHttpErrors) {
                        var msg = Util.lf("Bad HTTP status code: {0} at {1}; message: {2}", resp.statusCode, options.url, (resp.text || "").slice(0, 500));
                        var err = new Error(msg);
                        err.statusCode = resp.statusCode;
                        return Promise.reject(err);
                    }
                    if (resp.text && /application\/json/.test(resp.headers["content-type"]))
                        resp.json = pxtc.U.jsonTryParse(resp.text);
                    return resp;
                });
            }
            Util.requestAsync = requestAsync;
            function httpGetTextAsync(url) {
                return requestAsync({ url: url }).then(function (resp) { return resp.text; });
            }
            Util.httpGetTextAsync = httpGetTextAsync;
            function httpGetJsonAsync(url) {
                return requestAsync({ url: url }).then(function (resp) { return resp.json; });
            }
            Util.httpGetJsonAsync = httpGetJsonAsync;
            function httpPostJsonAsync(url, data) {
                return requestAsync({ url: url, data: data || {} }).then(function (resp) { return resp.json; });
            }
            Util.httpPostJsonAsync = httpPostJsonAsync;
            // this will take lower 8 bits from each character
            function stringToUint8Array(input) {
                var len = input.length;
                var res = new Uint8Array(len);
                for (var i = 0; i < len; ++i)
                    res[i] = input.charCodeAt(i) & 0xff;
                return res;
            }
            Util.stringToUint8Array = stringToUint8Array;
            function uint8ArrayToString(input) {
                var len = input.length;
                var res = "";
                for (var i = 0; i < len; ++i)
                    res += String.fromCharCode(input[i]);
                return res;
            }
            Util.uint8ArrayToString = uint8ArrayToString;
            function fromUTF8(binstr) {
                if (!binstr)
                    return "";
                // escape function is deprecated
                var escaped = "";
                for (var i = 0; i < binstr.length; ++i) {
                    var k = binstr.charCodeAt(i) & 0xff;
                    if (k == 37 || k > 0x7f) {
                        escaped += "%" + k.toString(16);
                    }
                    else {
                        escaped += binstr.charAt(i);
                    }
                }
                // decodeURIComponent does the actual UTF8 decoding
                return decodeURIComponent(escaped);
            }
            Util.fromUTF8 = fromUTF8;
            function toUTF8(str, cesu8) {
                var res = "";
                if (!str)
                    return res;
                for (var i = 0; i < str.length; ++i) {
                    var code = str.charCodeAt(i);
                    if (code <= 0x7f)
                        res += str.charAt(i);
                    else if (code <= 0x7ff) {
                        res += String.fromCharCode(0xc0 | (code >> 6), 0x80 | (code & 0x3f));
                    }
                    else {
                        if (!cesu8 && 0xd800 <= code && code <= 0xdbff) {
                            var next = str.charCodeAt(++i);
                            if (!isNaN(next))
                                code = 0x10000 + ((code - 0xd800) << 10) + (next - 0xdc00);
                        }
                        if (code <= 0xffff)
                            res += String.fromCharCode(0xe0 | (code >> 12), 0x80 | ((code >> 6) & 0x3f), 0x80 | (code & 0x3f));
                        else
                            res += String.fromCharCode(0xf0 | (code >> 18), 0x80 | ((code >> 12) & 0x3f), 0x80 | ((code >> 6) & 0x3f), 0x80 | (code & 0x3f));
                    }
                }
                return res;
            }
            Util.toUTF8 = toUTF8;
            function toHex(bytes) {
                var r = "";
                for (var i = 0; i < bytes.length; ++i)
                    r += ("0" + bytes[i].toString(16)).slice(-2);
                return r;
            }
            Util.toHex = toHex;
            function fromHex(hex) {
                var r = new Uint8Array(hex.length >> 1);
                for (var i = 0; i < hex.length; i += 2)
                    r[i >> 1] = parseInt(hex.slice(i, i + 2), 16);
                return r;
            }
            Util.fromHex = fromHex;
            var PromiseQueue = /** @class */ (function () {
                function PromiseQueue() {
                    this.promises = {};
                }
                PromiseQueue.prototype.enqueue = function (id, f) {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        var arr = _this.promises[id];
                        if (!arr) {
                            arr = _this.promises[id] = [];
                        }
                        arr.push(function () {
                            return f()
                                .finally(function () {
                                arr.shift();
                                if (arr.length == 0)
                                    delete _this.promises[id];
                                else
                                    arr[0]();
                            })
                                .then(resolve, reject);
                        });
                        if (arr.length == 1)
                            arr[0]();
                    });
                };
                return PromiseQueue;
            }());
            Util.PromiseQueue = PromiseQueue;
            var PromiseBuffer = /** @class */ (function () {
                function PromiseBuffer() {
                    this.waiting = [];
                    this.available = [];
                }
                PromiseBuffer.prototype.drain = function () {
                    for (var _i = 0, _a = this.waiting; _i < _a.length; _i++) {
                        var f = _a[_i];
                        f(new Error("Promise Buffer Reset"));
                    }
                    this.waiting = [];
                    this.available = [];
                };
                PromiseBuffer.prototype.pushError = function (v) {
                    this.push(v);
                };
                PromiseBuffer.prototype.push = function (v) {
                    var f = this.waiting.shift();
                    if (f)
                        f(v);
                    else
                        this.available.push(v);
                };
                PromiseBuffer.prototype.shiftAsync = function (timeout) {
                    var _this = this;
                    if (timeout === void 0) { timeout = 0; }
                    if (this.available.length > 0) {
                        var v = this.available.shift();
                        if (v instanceof Error)
                            return Promise.reject(v);
                        else
                            return Promise.resolve(v);
                    }
                    else
                        return new Promise(function (resolve, reject) {
                            var f = function (v) {
                                if (v instanceof Error)
                                    reject(v);
                                else
                                    resolve(v);
                            };
                            _this.waiting.push(f);
                            if (timeout > 0) {
                                Promise.delay(timeout)
                                    .then(function () {
                                    var idx = _this.waiting.indexOf(f);
                                    if (idx >= 0) {
                                        _this.waiting.splice(idx, 1);
                                        reject(new Error("Timeout"));
                                    }
                                });
                            }
                        });
                };
                return PromiseBuffer;
            }());
            Util.PromiseBuffer = PromiseBuffer;
            function promisePoolAsync(maxConcurrent, inputValues, handler) {
                return __awaiter(this, void 0, void 0, function () {
                    var curr, promises, output, i, thread;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                curr = 0;
                                promises = [];
                                output = [];
                                for (i = 0; i < maxConcurrent; i++) {
                                    thread = (function () { return __awaiter(_this, void 0, void 0, function () {
                                        var id, input, _a, _b;
                                        return __generator(this, function (_c) {
                                            switch (_c.label) {
                                                case 0:
                                                    if (!(curr < inputValues.length)) return [3 /*break*/, 2];
                                                    id = curr++;
                                                    input = inputValues[id];
                                                    _a = output;
                                                    _b = id;
                                                    return [4 /*yield*/, handler(input)];
                                                case 1:
                                                    _a[_b] = _c.sent();
                                                    return [3 /*break*/, 0];
                                                case 2: return [2 /*return*/];
                                            }
                                        });
                                    }); })();
                                    promises.push(thread);
                                }
                                return [4 /*yield*/, Promise.all(promises)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/, output];
                        }
                    });
                });
            }
            Util.promisePoolAsync = promisePoolAsync;
            function now() {
                return Date.now();
            }
            Util.now = now;
            function nowSeconds() {
                return Math.round(now() / 1000);
            }
            Util.nowSeconds = nowSeconds;
            // node.js overrides this to use process.cpuUsage()
            Util.cpuUs = function () {
                // current time in microseconds
                var perf = typeof performance != "undefined" ?
                    performance.now.bind(performance) ||
                        performance.moznow.bind(performance) ||
                        performance.msNow.bind(performance) ||
                        performance.webkitNow.bind(performance) ||
                        performance.oNow.bind(performance) :
                    Date.now;
                Util.cpuUs = function () { return perf() * 1000; };
                return Util.cpuUs();
            };
            function getMime(filename) {
                var m = /\.([a-zA-Z0-9]+)$/.exec(filename);
                if (m)
                    switch (m[1].toLowerCase()) {
                        case "txt": return "text/plain";
                        case "html":
                        case "htm": return "text/html";
                        case "css": return "text/css";
                        case "js": return "application/javascript";
                        case "jpg":
                        case "jpeg": return "image/jpeg";
                        case "png": return "image/png";
                        case "ico": return "image/x-icon";
                        case "manifest": return "text/cache-manifest";
                        case "webmanifest": return "application/manifest+json";
                        case "json": return "application/json";
                        case "svg": return "image/svg+xml";
                        case "eot": return "application/vnd.ms-fontobject";
                        case "ttf": return "font/ttf";
                        case "woff": return "application/font-woff";
                        case "woff2": return "application/font-woff2";
                        case "md": return "text/markdown";
                        case "xml": return "application/xml";
                        case "m4a": return "audio/m4a";
                        case "mp3": return "audio/mp3";
                        default: return "application/octet-stream";
                    }
                else
                    return "application/octet-stream";
            }
            Util.getMime = getMime;
            function randomUint32() {
                var buf = new Uint8Array(4);
                Util.getRandomBuf(buf);
                return new Uint32Array(buf.buffer)[0];
            }
            Util.randomUint32 = randomUint32;
            function guidGen() {
                function f() { return (randomUint32() | 0x10000).toString(16).slice(-4); }
                return f() + f() + "-" + f() + "-4" + f().slice(-3) + "-" + f() + "-" + f() + f() + f();
            }
            Util.guidGen = guidGen;
            function downloadLiveTranslationsAsync(lang, filename, branch, etag) {
                // hitting the cloud
                function downloadFromCloudAsync(strings) {
                    pxt.debug("downloading translations for " + lang + " " + filename + " " + (branch || ""));
                    var host = pxt.BrowserUtils.isLocalHost() || pxt.webConfig.isStatic ? "https://makecode.com/api/" : "";
                    // https://pxt.io/api/translations?filename=strings.json&lang=pl&approved=true&branch=v0
                    var url = host + "translations?lang=" + encodeURIComponent(lang) + "&filename=" + encodeURIComponent(filename) + "&approved=true";
                    if (branch)
                        url += '&branch=' + encodeURIComponent(branch);
                    var headers = {};
                    if (etag && !pxt.Cloud.useCdnApi())
                        headers["If-None-Match"] = etag;
                    return (host ? requestAsync : pxt.Cloud.apiRequestWithCdnAsync)({ url: url, headers: headers }).then(function (resp) {
                        // if 304, translation not changed, skip
                        if (resp.statusCode == 304 || resp.statusCode == 200) {
                            // store etag and translations
                            etag = resp.headers["etag"] || "";
                            return pxt.BrowserUtils.translationDbAsync()
                                .then(function (db) { return db.setAsync(lang, filename, branch, etag, resp.json || strings); })
                                .then(function () { return resp.json || strings; });
                        }
                        return resp.json;
                    }, function (e) {
                        console.log("failed to load translations from " + url);
                        return undefined;
                    });
                }
                // check for cache
                return pxt.BrowserUtils.translationDbAsync()
                    .then(function (db) { return db.getAsync(lang, filename, branch); })
                    .then(function (entry) {
                    // if cached, return immediately
                    if (entry) {
                        etag = entry.etag;
                        // update expired entries
                        var dt = (Date.now() - entry.time) / 1000;
                        if (dt > 300) // 5min caching time before trying etag again
                            downloadFromCloudAsync(entry.strings).done();
                        return entry.strings;
                    }
                    else
                        return downloadFromCloudAsync();
                });
            }
            Util.downloadLiveTranslationsAsync = downloadLiveTranslationsAsync;
            Util.pxtLangCookieId = "PXT_LANG";
            Util.langCookieExpirationDays = 30;
            // "lang-code": { englishName: "", localizedName: ""},
            // Crowdin code: https://support.crowdin.com/api/language-codes/
            // English name and localized name: https://en.wikipedia.org/wiki/List_of_language_names
            Util.allLanguages = {
                "af": { englishName: "Afrikaans", localizedName: "Afrikaans" },
                "ar": { englishName: "Arabic", localizedName: "العربية" },
                "az": { englishName: "Azerbaijani", localizedName: "آذربایجان دیلی" },
                "bg": { englishName: "Bulgarian", localizedName: "български" },
                "bn": { englishName: "Bengali", localizedName: "বাংলা" },
                "ca": { englishName: "Catalan", localizedName: "Català" },
                "cs": { englishName: "Czech", localizedName: "Čeština" },
                "da": { englishName: "Danish", localizedName: "Dansk" },
                "de": { englishName: "German", localizedName: "Deutsch" },
                "el": { englishName: "Greek", localizedName: "Ελληνικά" },
                "en": { englishName: "English", localizedName: "English" },
                "es-ES": { englishName: "Spanish (Spain)", localizedName: "Español (España)" },
                "es-MX": { englishName: "Spanish (Mexico)", localizedName: "Español (México)" },
                "et": { englishName: "Estonian", localizedName: "Eesti" },
                "eu": { englishName: "Basque", localizedName: "Euskara" },
                "fa": { englishName: "Persian", localizedName: "فارسی" },
                "fi": { englishName: "Finnish", localizedName: "Suomi" },
                "fr": { englishName: "French", localizedName: "Français" },
                "fr-CA": { englishName: "French (Canada)", localizedName: "Français (Canada)" },
                "gu-IN": { englishName: "Gujarati", localizedName: "ગુજરાતી" },
                "he": { englishName: "Hebrew", localizedName: "עברית" },
                "hr": { englishName: "Croatian", localizedName: "Hrvatski" },
                "hu": { englishName: "Hungarian", localizedName: "Magyar" },
                "hy-AM": { englishName: "Armenian (Armenia)", localizedName: "Հայերէն (Հայաստան)" },
                "id": { englishName: "Indonesian", localizedName: "Bahasa Indonesia" },
                "is": { englishName: "Icelandic", localizedName: "Íslenska" },
                "it": { englishName: "Italian", localizedName: "Italiano" },
                "ja": { englishName: "Japanese", localizedName: "日本語" },
                "kab": { englishName: "Kabyle", localizedName: "شئعم" },
                "ko": { englishName: "Korean", localizedName: "한국어" },
                "kmr": { englishName: "Kurmanji (Kurdish)", localizedName: "کورمانجی‎" },
                "kn": { englishName: "Kannada", localizedName: "ಕನ್ನಡ" },
                "lt": { englishName: "Lithuanian", localizedName: "Lietuvių" },
                "lv": { englishName: "Latvian", localizedName: "Latviešu" },
                "ml-IN": { englishName: "Malayalam", localizedName: "മലയാളം" },
                "mr": { englishName: "Marathi", localizedName: "मराठी" },
                "nl": { englishName: "Dutch", localizedName: "Nederlands" },
                "no": { englishName: "Norwegian", localizedName: "Norsk" },
                "nb": { englishName: "Norwegian Bokmal", localizedName: "Norsk bokmål" },
                "nn-NO": { englishName: "Norwegian Nynorsk", localizedName: "Norsk nynorsk" },
                "pa-IN": { englishName: "Punjabi", localizedName: "ਪੰਜਾਬੀ" },
                "pl": { englishName: "Polish", localizedName: "Polski" },
                "pt-BR": { englishName: "Portuguese (Brazil)", localizedName: "Português (Brasil)" },
                "pt-PT": { englishName: "Portuguese (Portugal)", localizedName: "Português (Portugal)" },
                "ro": { englishName: "Romanian", localizedName: "Română" },
                "ru": { englishName: "Russian", localizedName: "Русский" },
                "si-LK": { englishName: "Sinhala (Sri Lanka)", localizedName: "සිංහල (ශ්රී ලංකා)" },
                "sk": { englishName: "Slovak", localizedName: "Slovenčina" },
                "sl": { englishName: "Slovenian", localizedName: "Slovenski" },
                "sr": { englishName: "Serbian", localizedName: "Srpski" },
                "su": { englishName: "Sundanese", localizedName: "ᮘᮞ ᮞᮥᮔ᮪ᮓ" },
                "sv-SE": { englishName: "Swedish (Sweden)", localizedName: "Svenska (Sverige)" },
                "ta": { englishName: "Tamil", localizedName: "தமிழ்" },
                "te": { englishName: "Telugu", localizedName: "తెలుగు" },
                "th": { englishName: "Thai", localizedName: "ภาษาไทย" },
                "tl": { englishName: "Tagalog", localizedName: "ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔" },
                "tr": { englishName: "Turkish", localizedName: "Türkçe" },
                "uk": { englishName: "Ukrainian", localizedName: "Українська" },
                "ur-IN": { englishName: "Urdu (India)", localizedName: "اردو (ہندوستان)" },
                "ur-PK": { englishName: "Urdu (Pakistan)", localizedName: "اردو (پاکستان)" },
                "vi": { englishName: "Vietnamese", localizedName: "Tiếng việt" },
                "zh-CN": { englishName: "Chinese (Simplified)", localizedName: "简体中文" },
                "zh-TW": { englishName: "Chinese (Traditional)", localizedName: "繁体中文" },
            };
            function isLocaleEnabled(code) {
                var _a = Util.normalizeLanguageCode(code), lang = _a[0], baseLang = _a[1];
                var appTheme = pxt.appTarget.appTheme;
                if (appTheme && appTheme.availableLocales) {
                    if (appTheme.availableLocales.indexOf(lang) > -1) {
                        return true;
                    }
                    //check for base language if we didn't find the full language. Example: nl for nl-NL
                    if (baseLang && appTheme.availableLocales.indexOf(baseLang) > -1) {
                        return true;
                    }
                }
                return false;
            }
            Util.isLocaleEnabled = isLocaleEnabled;
            function updateLocalizationAsync(targetId, baseUrl, code, pxtBranch, targetBranch, live, force) {
                code = Util.normalizeLanguageCode(code)[0];
                if (code === "en-US")
                    code = "en"; // special case for built-in language
                if (code === Util.userLanguage() || (!isLocaleEnabled(code) && !force)) {
                    pxt.debug("loc: " + code + " (using built-in)");
                    return Promise.resolve();
                }
                pxt.debug("loc: " + code);
                return downloadTranslationsAsync(targetId, baseUrl, code, pxtBranch, targetBranch, live, ts.pxtc.Util.TranslationsKind.Editor)
                    .then(function (translations) {
                    if (translations) {
                        Util.setUserLanguage(code);
                        Util.setLocalizedStrings(translations);
                        if (live) {
                            Util.localizeLive = true;
                        }
                    }
                    // Download api translations
                    return !live ? ts.pxtc.Util.downloadTranslationsAsync(targetId, baseUrl, code, pxtBranch, targetBranch, live, ts.pxtc.Util.TranslationsKind.Apis)
                        .then(function (trs) {
                        if (trs)
                            ts.pxtc.apiLocalizationStrings = trs;
                    }) : Promise.resolve();
                });
            }
            Util.updateLocalizationAsync = updateLocalizationAsync;
            var TranslationsKind;
            (function (TranslationsKind) {
                TranslationsKind[TranslationsKind["Editor"] = 0] = "Editor";
                TranslationsKind[TranslationsKind["Sim"] = 1] = "Sim";
                TranslationsKind[TranslationsKind["Apis"] = 2] = "Apis";
                TranslationsKind[TranslationsKind["SkillMap"] = 3] = "SkillMap";
            })(TranslationsKind = Util.TranslationsKind || (Util.TranslationsKind = {}));
            function downloadTranslationsAsync(targetId, baseUrl, code, pxtBranch, targetBranch, live, translationKind) {
                translationKind = translationKind || TranslationsKind.Editor;
                code = Util.normalizeLanguageCode(code)[0];
                if (code === "en-US" || code === "en") // shortcut
                    return Promise.resolve(undefined);
                var translationsCacheId = code + "/" + live + "/" + translationKind;
                if (Util.translationsCache()[translationsCacheId]) {
                    return Promise.resolve(Util.translationsCache()[translationsCacheId]);
                }
                var stringFiles;
                switch (translationKind) {
                    case TranslationsKind.Editor:
                        stringFiles = [
                            { branch: pxtBranch, staticName: "strings.json", path: "strings.json" },
                            { branch: targetBranch, staticName: "target-strings.json", path: targetId + "/target-strings.json" },
                        ];
                        break;
                    case TranslationsKind.Sim:
                        stringFiles = [{ branch: targetBranch, staticName: "sim-strings.json", path: targetId + "/sim-strings.json" }];
                        break;
                    case TranslationsKind.Apis:
                        stringFiles = [{ branch: targetBranch, staticName: "bundled-strings.json", path: targetId + "/bundled-strings.json" }];
                        break;
                    case TranslationsKind.SkillMap:
                        stringFiles = [{ branch: targetBranch, staticName: "skillmap-strings.json", path: "/skillmap-strings.json" }];
                        break;
                }
                var translations;
                function mergeTranslations(tr) {
                    if (!tr)
                        return;
                    if (!translations) {
                        translations = {};
                    }
                    Object.keys(tr)
                        .filter(function (k) { return !!tr[k]; })
                        .forEach(function (k) { return translations[k] = tr[k]; });
                }
                if (live) {
                    var errorCount_1 = 0;
                    var pAll = Promise.mapSeries(stringFiles, function (file) { return downloadLiveTranslationsAsync(code, file.path, file.branch)
                        .then(mergeTranslations, function (e) {
                        console.log(e.message);
                        ++errorCount_1;
                    }); });
                    return pAll.then(function () {
                        // Cache translations unless there was an error for one of the files
                        if (errorCount_1) {
                            Util.translationsCache()[translationsCacheId] = translations;
                        }
                        if (errorCount_1 === stringFiles.length || !translations) {
                            // Retry with non-live translations by setting live to false
                            pxt.tickEvent("translations.livetranslationsfailed");
                            return downloadTranslationsAsync(targetId, baseUrl, code, pxtBranch, targetBranch, false, translationKind);
                        }
                        return Promise.resolve(translations);
                    });
                }
                else {
                    return Promise.all(stringFiles.map(function (p) {
                        return Util.httpGetJsonAsync(baseUrl + "locales/" + code + "/" + p.staticName)
                            .catch(function (e) { return undefined; });
                    })).then(function (resps) {
                        var tr = {};
                        resps.forEach(function (res) { return pxt.Util.jsonMergeFrom(tr, res); });
                        if (Object.keys(tr).length) {
                            translations = tr;
                            Util.translationsCache()[translationsCacheId] = translations;
                        }
                    }, function (e) {
                        console.error('failed to load localizations');
                    })
                        .then(function () { return translations; });
                }
            }
            Util.downloadTranslationsAsync = downloadTranslationsAsync;
            function capitalize(n) {
                return n ? (n[0].toLocaleUpperCase() + n.slice(1)) : n;
            }
            Util.capitalize = capitalize;
            function uncapitalize(n) {
                return (n || "").split(/(?=[A-Z])/g).join(" ").toLowerCase();
            }
            Util.uncapitalize = uncapitalize;
            function range(len) {
                var r = [];
                for (var i = 0; i < len; ++i)
                    r.push(i);
                return r;
            }
            Util.range = range;
            function multipartPostAsync(uri, data, filename, filecontents) {
                if (data === void 0) { data = {}; }
                if (filename === void 0) { filename = null; }
                if (filecontents === void 0) { filecontents = null; }
                var boundary = "--------------------------0461489f461126c5";
                var form = "";
                function add(name, val) {
                    form += boundary + "\r\n";
                    form += "Content-Disposition: form-data; name=\"" + name + "\"\r\n\r\n";
                    form += val + "\r\n";
                }
                function addF(name, val) {
                    var fn = name.split('/').reverse()[0];
                    form += boundary + "\r\n";
                    form += "Content-Disposition: form-data; name=\"files[" + name + "]\"; filename=\"" + fn + "\"\r\n";
                    form += "\r\n";
                    form += val + "\r\n";
                }
                Object.keys(data).forEach(function (k) { return add(k, data[k]); });
                if (filename)
                    addF(filename, filecontents);
                form += boundary + "--\r\n";
                var req = {
                    url: uri,
                    method: "POST",
                    headers: {
                        "Content-Type": "multipart/form-data; boundary=" + boundary.slice(2)
                    },
                    data: form
                };
                return Util.httpRequestCoreAsync(req);
            }
            Util.multipartPostAsync = multipartPostAsync;
            function toDataUri(data, mimetype) {
                // TODO does this only support trusted data?
                // weed out urls
                if (/^https?:/i.test(data))
                    return data;
                // already a data uri?
                if (/^data:/i.test(data))
                    return data;
                // infer mimetype
                if (!mimetype) {
                    if (/^<svg/i.test(data))
                        mimetype = "image/svg+xml";
                }
                // encode
                if (/xml|svg/.test(mimetype))
                    return "data:" + mimetype + "," + encodeURIComponent(data);
                else
                    return "data:" + (mimetype || "image/png") + ";base64," + pxtc.encodeBase64(toUTF8(data));
            }
            Util.toDataUri = toDataUri;
            Util.imageMagic = 0x59347a7d; // randomly selected
            Util.imageHeaderSize = 36; // has to be divisible by 9
            function encodeBlobAsync(canvas, blob) {
                var neededBytes = Util.imageHeaderSize + blob.length;
                var usableBytes = (canvas.width * canvas.height - 1) * 3;
                var bpp = 1;
                while (bpp < 4) {
                    if (usableBytes * bpp >= neededBytes * 8)
                        break;
                    bpp++;
                }
                var imgCapacity = (usableBytes * bpp) >> 3;
                var missing = neededBytes - imgCapacity;
                var addedLines = 0;
                var addedOffset = canvas.width * canvas.height * 4;
                if (missing > 0) {
                    var bytesPerLine = canvas.width * 3;
                    addedLines = Math.ceil(missing / bytesPerLine);
                    var c2 = document.createElement("canvas");
                    c2.width = canvas.width;
                    c2.height = canvas.height + addedLines;
                    var ctx_1 = c2.getContext("2d");
                    ctx_1.drawImage(canvas, 0, 0);
                    canvas = c2;
                }
                var header = pxt.HF2.encodeU32LE([
                    Util.imageMagic,
                    blob.length,
                    addedLines,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                ]);
                pxt.Util.assert(header.length == Util.imageHeaderSize);
                function encode(img, ptr, bpp, data) {
                    var shift = 0;
                    var dp = 0;
                    var v = data[dp++];
                    var bppMask = (1 << bpp) - 1;
                    var keepGoing = true;
                    while (keepGoing) {
                        var bits = (v >> shift) & bppMask;
                        var left = 8 - shift;
                        if (left <= bpp) {
                            if (dp >= data.length) {
                                if (left == 0)
                                    break;
                                else
                                    keepGoing = false;
                            }
                            v = data[dp++];
                            bits |= (v << left) & bppMask;
                            shift = bpp - left;
                        }
                        else {
                            shift += bpp;
                        }
                        img[ptr] = ((img[ptr] & ~bppMask) | bits) & 0xff;
                        ptr++;
                        if ((ptr & 3) == 3) {
                            // set alpha to 0xff
                            img[ptr++] = 0xff;
                        }
                    }
                    return ptr;
                }
                var ctx = canvas.getContext("2d");
                var imgdat = ctx.getImageData(0, 0, canvas.width, canvas.height);
                // first pixel holds bpp (LSB are written first, so we can skip what it writes in second and third pixel)
                encode(imgdat.data, 0, 1, [bpp]);
                var ptr = 4;
                // next, the header
                ptr = encode(imgdat.data, ptr, bpp, header);
                pxt.Util.assert((ptr & 3) == 0);
                if (addedLines == 0)
                    ptr = encode(imgdat.data, ptr, bpp, blob);
                else {
                    var firstChunk = imgCapacity - header.length;
                    ptr = encode(imgdat.data, ptr, bpp, blob.slice(0, firstChunk));
                    ptr = encode(imgdat.data, addedOffset, 8, blob.slice(firstChunk));
                }
                // set remaining alpha
                ptr |= 3;
                while (ptr < imgdat.data.length) {
                    imgdat.data[ptr] = 0xff;
                    ptr += 4;
                }
                ctx.putImageData(imgdat, 0, 0);
                return canvas;
            }
            Util.encodeBlobAsync = encodeBlobAsync;
            function decodeBlobAsync(dataURL) {
                return pxt.BrowserUtils.loadCanvasAsync(dataURL)
                    .then(function (canvas) {
                    var ctx = canvas.getContext("2d");
                    var imgdat = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    var d = imgdat.data;
                    var bpp = (d[0] & 1) | ((d[1] & 1) << 1) | ((d[2] & 1) << 2);
                    if (bpp > 5)
                        return Promise.reject(new Error(Util.lf("Invalid encoded PNG format")));
                    function decode(ptr, bpp, trg) {
                        var shift = 0;
                        var i = 0;
                        var acc = 0;
                        var mask = (1 << bpp) - 1;
                        while (i < trg.length) {
                            acc |= (d[ptr++] & mask) << shift;
                            if ((ptr & 3) == 3)
                                ptr++; // skip alpha
                            shift += bpp;
                            if (shift >= 8) {
                                trg[i++] = acc & 0xff;
                                acc >>= 8;
                                shift -= 8;
                            }
                        }
                        return ptr;
                    }
                    var hd = new Uint8Array(pxt.Util.imageHeaderSize);
                    var ptr = decode(4, bpp, hd);
                    var dhd = pxt.HF2.decodeU32LE(hd);
                    if (dhd[0] != pxt.Util.imageMagic)
                        return Promise.reject(new Error(Util.lf("Invalid magic in encoded PNG")));
                    var res = new Uint8Array(dhd[1]);
                    var addedLines = dhd[2];
                    if (addedLines > 0) {
                        var origSize = (canvas.height - addedLines) * canvas.width;
                        var imgCap = (origSize - 1) * 3 * bpp >> 3;
                        var tmp = new Uint8Array(imgCap - pxt.Util.imageHeaderSize);
                        decode(ptr, bpp, tmp);
                        res.set(tmp);
                        var added = new Uint8Array(res.length - tmp.length);
                        decode(origSize * 4, 8, added);
                        res.set(added, tmp.length);
                    }
                    else {
                        decode(ptr, bpp, res);
                    }
                    return res;
                });
            }
            Util.decodeBlobAsync = decodeBlobAsync;
        })(Util = pxtc.Util || (pxtc.Util = {}));
    })(pxtc = ts.pxtc || (ts.pxtc = {}));
})(ts || (ts = {}));
(function (ts) {
    var pxtc;
    (function (pxtc) {
        var BrowserImpl;
        (function (BrowserImpl) {
            pxtc.Util.httpRequestCoreAsync = httpRequestCoreAsync;
            pxtc.Util.sha256 = sha256string;
            pxtc.Util.getRandomBuf = function (buf) {
                if (window.crypto)
                    window.crypto.getRandomValues(buf);
                else {
                    for (var i = 0; i < buf.length; ++i)
                        buf[i] = Math.floor(Math.random() * 255);
                }
            };
            function httpRequestCoreAsync(options) {
                return new Promise(function (resolve, reject) {
                    var client;
                    var resolved = false;
                    var headers = pxtc.Util.clone(options.headers) || {};
                    client = new XMLHttpRequest();
                    if (options.responseArrayBuffer)
                        client.responseType = "arraybuffer";
                    if (options.withCredentials)
                        client.withCredentials = true;
                    client.onreadystatechange = function () {
                        if (resolved)
                            return; // Safari/iOS likes to call this thing more than once
                        if (client.readyState == 4) {
                            resolved = true;
                            var res_1 = {
                                statusCode: client.status,
                                headers: {},
                                buffer: client.responseBody || client.response,
                                text: options.responseArrayBuffer ? undefined : client.responseText,
                            };
                            var allHeaders = client.getAllResponseHeaders();
                            allHeaders.split(/\r?\n/).forEach(function (l) {
                                var m = /^\s*([^:]+): (.*)/.exec(l);
                                if (m)
                                    res_1.headers[m[1].toLowerCase()] = m[2];
                            });
                            resolve(res_1);
                        }
                    };
                    var data = options.data;
                    var method = options.method || (data == null ? "GET" : "POST");
                    var buf;
                    if (data == null) {
                        buf = null;
                    }
                    else if (data instanceof Uint8Array) {
                        buf = data;
                    }
                    else if (typeof data == "object") {
                        buf = JSON.stringify(data);
                        headers["content-type"] = "application/json; charset=utf8";
                    }
                    else if (typeof data == "string") {
                        buf = data;
                    }
                    else {
                        pxtc.Util.oops("bad data");
                    }
                    client.open(method, options.url);
                    Object.keys(headers).forEach(function (k) {
                        client.setRequestHeader(k, headers[k]);
                    });
                    if (buf == null)
                        client.send();
                    else
                        client.send(buf);
                });
            }
            var sha256_k = new Uint32Array([
                0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
                0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
                0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
                0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
                0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
                0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
                0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
                0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
            ]);
            function rotr(v, b) {
                return (v >>> b) | (v << (32 - b));
            }
            function sha256round(hs, w) {
                pxtc.Util.assert(hs.length == 8);
                pxtc.Util.assert(w.length == 64);
                for (var i = 16; i < 64; ++i) {
                    var s0 = rotr(w[i - 15], 7) ^ rotr(w[i - 15], 18) ^ (w[i - 15] >>> 3);
                    var s1 = rotr(w[i - 2], 17) ^ rotr(w[i - 2], 19) ^ (w[i - 2] >>> 10);
                    w[i] = (w[i - 16] + s0 + w[i - 7] + s1) | 0;
                }
                var a = hs[0];
                var b = hs[1];
                var c = hs[2];
                var d = hs[3];
                var e = hs[4];
                var f = hs[5];
                var g = hs[6];
                var h = hs[7];
                for (var i = 0; i < 64; ++i) {
                    var s1 = rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25);
                    var ch = (e & f) ^ (~e & g);
                    var temp1 = (h + s1 + ch + sha256_k[i] + w[i]) | 0;
                    var s0 = rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22);
                    var maj = (a & b) ^ (a & c) ^ (b & c);
                    var temp2 = (s0 + maj) | 0;
                    h = g;
                    g = f;
                    f = e;
                    e = (d + temp1) | 0;
                    d = c;
                    c = b;
                    b = a;
                    a = (temp1 + temp2) | 0;
                }
                hs[0] += a;
                hs[1] += b;
                hs[2] += c;
                hs[3] += d;
                hs[4] += e;
                hs[5] += f;
                hs[6] += g;
                hs[7] += h;
            }
            function sha256buffer(buf) {
                var h = new Uint32Array(8);
                h[0] = 0x6a09e667;
                h[1] = 0xbb67ae85;
                h[2] = 0x3c6ef372;
                h[3] = 0xa54ff53a;
                h[4] = 0x510e527f;
                h[5] = 0x9b05688c;
                h[6] = 0x1f83d9ab;
                h[7] = 0x5be0cd19;
                var work = new Uint32Array(64);
                var chunkLen = 16 * 4;
                function addBuf(buf) {
                    var end = buf.length - (chunkLen - 1);
                    for (var i = 0; i < end; i += chunkLen) {
                        for (var j = 0; j < 16; j++) {
                            var off = (j << 2) + i;
                            work[j] = (buf[off] << 24) | (buf[off + 1] << 16) | (buf[off + 2] << 8) | buf[off + 3];
                        }
                        sha256round(h, work);
                    }
                }
                addBuf(buf);
                var padSize = 64 - (buf.length + 9) % 64;
                if (padSize == 64)
                    padSize = 0;
                var endPos = buf.length - (buf.length % chunkLen);
                var padBuf = new Uint8Array((buf.length - endPos) + 1 + padSize + 8);
                var dst = 0;
                while (endPos < buf.length)
                    padBuf[dst++] = buf[endPos++];
                padBuf[dst++] = 0x80;
                while (padSize-- > 0)
                    padBuf[dst++] = 0x00;
                var len = buf.length * 8;
                dst = padBuf.length;
                while (len > 0) {
                    padBuf[--dst] = len & 0xff;
                    len >>= 8;
                }
                addBuf(padBuf);
                var res = "";
                for (var i = 0; i < h.length; ++i)
                    res += ("000000000" + h[i].toString(16)).slice(-8);
                return res.toLowerCase();
            }
            BrowserImpl.sha256buffer = sha256buffer;
            function sha256string(s) {
                return sha256buffer(pxtc.Util.stringToUint8Array(pxtc.Util.toUTF8(s)));
            }
            BrowserImpl.sha256string = sha256string;
        })(BrowserImpl = pxtc.BrowserImpl || (pxtc.BrowserImpl = {}));
    })(pxtc = ts.pxtc || (ts.pxtc = {}));
})(ts || (ts = {}));
/// <reference path="../localtypings/pxtpackage.d.ts"/>
/// <reference path="../localtypings/pxtparts.d.ts"/>
/// <reference path="../localtypings/pxtarget.d.ts"/>
/// <reference path="../localtypings/projectheader.d.ts"/>
/// <reference path="util.ts"/>
/// <reference path="apptarget.ts"/>
/// <reference path="tickEvent.ts"/>
var pxt;
(function (pxt) {
    var perf;
    (function (perf) {
    })(perf = pxt.perf || (pxt.perf = {}));
})(pxt || (pxt = {}));
(function () {
    // Sometimes these aren't initialized, for example in tests. We only care about them
    // doing anything in the browser.
    if (!pxt.perf.report)
        pxt.perf.report = function () { };
    if (!pxt.perf.recordMilestone)
        pxt.perf.recordMilestone = function () { };
    if (!pxt.perf.measureStart)
        pxt.perf.measureStart = function () { };
    if (!pxt.perf.measureEnd)
        pxt.perf.measureEnd = function () { };
})();
(function (pxt) {
    pxt.U = pxtc.Util;
    pxt.Util = pxtc.Util;
    var savedAppTarget;
    var savedSwitches = {};
    function setAppTarget(trg) {
        pxt.appTarget = trg || {};
        patchAppTarget();
        savedAppTarget = pxt.U.clone(pxt.appTarget);
    }
    pxt.setAppTarget = setAppTarget;
    var apiInfo;
    function setBundledApiInfo(inf) {
        for (var _i = 0, _a = Object.keys(inf); _i < _a.length; _i++) {
            var pkgName = _a[_i];
            var byQName = inf[pkgName].apis.byQName;
            for (var _b = 0, _c = Object.keys(byQName); _b < _c.length; _b++) {
                var apiName = _c[_b];
                var sym = byQName[apiName];
                var lastDot = apiName.lastIndexOf(".");
                var pyQName = sym.pyQName;
                // re-create the object - this will hint the JIT that these are objects of the same type
                // and the same hidden class should be used
                var newsym = byQName[apiName] = {
                    kind: Math.abs(sym.kind || 7),
                    qName: apiName,
                    namespace: apiName.slice(0, lastDot < 0 ? 0 : lastDot),
                    name: apiName.slice(lastDot + 1),
                    pyQName: pyQName,
                    pyName: pyQName ? pyQName.slice(pyQName.lastIndexOf(".") + 1) : undefined,
                    fileName: "",
                    attributes: sym.attributes || {},
                    retType: sym.retType || "void",
                    parameters: sym.parameters ? sym.parameters.map(function (p) { return ({
                        name: p.name,
                        description: p.description || "",
                        type: p.type || "number",
                        initializer: p.initializer,
                        default: p.default,
                        options: p.options || {},
                        isEnum: !!p.isEnum,
                        handlerParameters: p.handlerParameters
                    }); }) : null,
                    extendsTypes: sym.extendsTypes,
                    snippet: sym.kind && sym.kind < 0 ? null : undefined,
                    isInstance: !!sym.isInstance,
                    isReadOnly: !!sym.isReadOnly,
                };
                var attr = newsym.attributes;
                if (!attr.paramDefl)
                    attr.paramDefl = {};
                if (!attr.callingConvention)
                    attr.callingConvention = 0;
                if (!attr.paramHelp)
                    attr.paramHelp = {};
                if (!attr.jsDoc)
                    attr.jsDoc = "";
                attr._name = newsym.name.replace(/@.*/, "");
            }
        }
        apiInfo = inf;
    }
    pxt.setBundledApiInfo = setBundledApiInfo;
    function getBundledApiInfo() {
        return apiInfo;
    }
    pxt.getBundledApiInfo = getBundledApiInfo;
    function savedAppTheme() {
        return savedAppTarget ? savedAppTarget.appTheme : undefined;
    }
    pxt.savedAppTheme = savedAppTheme;
    function setCompileSwitch(name, value) {
        if (/^csv-/.test(name)) {
            pxt.setAppTargetVariant(name.replace(/^csv-*/, ""));
        }
        else if (pxt.appTarget) {
            savedSwitches[name] = value;
            pxt.U.jsonCopyFrom(pxt.appTarget.compile.switches, savedSwitches);
            pxt.U.jsonCopyFrom(savedAppTarget.compile.switches, savedSwitches);
        }
    }
    pxt.setCompileSwitch = setCompileSwitch;
    function setCompileSwitches(names) {
        if (!names)
            return;
        for (var _i = 0, _a = names.split(/[\s,;:]+/); _i < _a.length; _i++) {
            var s = _a[_i];
            if (!s)
                continue;
            if (s[0] == "-") {
                setCompileSwitch(s.slice(1), false);
            }
            else {
                setCompileSwitch(s, true);
            }
        }
    }
    pxt.setCompileSwitches = setCompileSwitches;
    var _bundledcoresvgs;
    function bundledSvg(id) {
        if (!id)
            return undefined;
        var res = _bundledcoresvgs && _bundledcoresvgs[id];
        if (res)
            return res; // cache hit
        // find all core packages images
        if (!pxt.appTarget.simulator || !pxt.appTarget.simulator.dynamicBoardDefinition)
            return undefined;
        if (!_bundledcoresvgs)
            _bundledcoresvgs = {};
        var files = pxt.appTarget.bundledpkgs[id];
        if (!files)
            return undefined;
        // builtin packages are guaranteed to parse out
        var pxtjson = JSON.parse(files["pxt.json"]);
        if (pxtjson.core && files["board.json"]) {
            var boardjson = JSON.parse(files["board.json"]);
            if (boardjson && boardjson.visual && boardjson.visual.image) {
                var boardimg = boardjson.visual.image;
                if (/^pkg:\/\//.test(boardimg))
                    boardimg = files[boardimg.slice(6)];
                // this call gets expensive when having large number of boards
                _bundledcoresvgs[id] = "data:image/svg+xml;base64," + ts.pxtc.encodeBase64(pxt.Util.toUTF8(boardimg));
            }
        }
        return _bundledcoresvgs[id];
    }
    pxt.bundledSvg = bundledSvg;
    function patchAppTarget() {
        // patch-up the target
        var comp = pxt.appTarget.compile;
        if (!comp)
            comp = pxt.appTarget.compile = { isNative: false, hasHex: false, switches: {} };
        if (comp.hasHex) {
            if (!comp.nativeType)
                comp.nativeType = pxtc.NATIVE_TYPE_THUMB;
        }
        if (!comp.switches)
            comp.switches = {};
        pxt.U.jsonCopyFrom(comp.switches, savedSwitches);
        // JS ref counting currently not supported
        comp.jsRefCounting = false;
        if (!comp.useUF2 && !comp.useELF && comp.noSourceInFlash == undefined)
            comp.noSourceInFlash = true; // no point putting sources in hex to be flashed
        if (comp.utf8 === undefined)
            comp.utf8 = true;
        if (!pxt.appTarget.appTheme)
            pxt.appTarget.appTheme = {};
        if (!pxt.appTarget.appTheme.embedUrl)
            pxt.appTarget.appTheme.embedUrl = pxt.appTarget.appTheme.homeUrl;
        var cs = pxt.appTarget.compileService;
        if (cs) {
            if (cs.yottaTarget && !cs.yottaBinary)
                cs.yottaBinary = "pxt-microbit-app-combined.hex";
        }
        // patch logo locations
        var theme = pxt.appTarget.appTheme;
        if (theme) {
            Object.keys(theme)
                .filter(function (k) { return /(logo|hero)$/i.test(k) && /^@cdnUrl@/.test(theme[k]); })
                .forEach(function (k) { return theme[k] = pxt.BrowserUtils.patchCdn(theme[k]); });
        }
        // patching simulator images
        var sim = pxt.appTarget.simulator;
        if (sim
            && sim.boardDefinition
            && sim.boardDefinition.visual) {
            var boardDef = sim.boardDefinition.visual;
            if (boardDef.image) {
                boardDef.image = pxt.BrowserUtils.patchCdn(boardDef.image);
                if (boardDef.outlineImage)
                    boardDef.outlineImage = pxt.BrowserUtils.patchCdn(boardDef.outlineImage);
            }
        }
        // patch icons in bundled packages
        Object.keys(pxt.appTarget.bundledpkgs).forEach(function (pkgid) {
            var res = pxt.appTarget.bundledpkgs[pkgid];
            // path config before storing
            var config = JSON.parse(res[pxt.CONFIG_NAME]);
            if (config.icon)
                config.icon = pxt.BrowserUtils.patchCdn(config.icon);
            res[pxt.CONFIG_NAME] = pxt.Package.stringifyConfig(config);
        });
        // patch any pre-configured query url appTheme overrides
        if (typeof window !== 'undefined') {
            // Map<AppTarget>
            var queryVariants_1 = {
                "lockededitor=1": {
                    appTheme: {
                        lockedEditor: true
                    }
                },
                "hidemenu=1": {
                    appTheme: {
                        hideMenuBar: true
                    }
                }
            };
            // import target specific flags
            if (pxt.appTarget.queryVariants)
                pxt.Util.jsonCopyFrom(queryVariants_1, pxt.appTarget.queryVariants);
            var href_1 = window.location.href;
            Object.keys(queryVariants_1).forEach(function (queryRegex) {
                var regex = new RegExp(queryRegex, "i");
                var match = regex.exec(href_1);
                if (match) {
                    // Apply any appTheme overrides
                    var v = queryVariants_1[queryRegex];
                    if (v) {
                        pxt.U.jsonMergeFrom(pxt.appTarget, v);
                    }
                }
            });
        }
    }
    function reloadAppTargetVariant(temporary) {
        if (temporary === void 0) { temporary = false; }
        pxt.perf.measureStart("reloadAppTargetVariant");
        var curr = temporary ? "" : JSON.stringify(pxt.appTarget);
        pxt.appTarget = pxt.U.clone(savedAppTarget);
        if (pxt.appTargetVariant) {
            var v = pxt.appTarget.variants && pxt.appTarget.variants[pxt.appTargetVariant];
            if (v)
                pxt.U.jsonMergeFrom(pxt.appTarget, v);
            else
                pxt.U.userError(lf("Variant '{0}' not defined in pxtarget.json", pxt.appTargetVariant));
        }
        patchAppTarget();
        // check if apptarget changed
        if (!temporary && pxt.onAppTargetChanged && curr != JSON.stringify(pxt.appTarget))
            pxt.onAppTargetChanged();
        pxt.perf.measureEnd("reloadAppTargetVariant");
    }
    pxt.reloadAppTargetVariant = reloadAppTargetVariant;
    // this is set by compileServiceVariant in pxt.json
    function setAppTargetVariant(variant, opts) {
        if (opts === void 0) { opts = {}; }
        pxt.debug("app variant: " + variant);
        if (!opts.force && (pxt.appTargetVariant === variant || (!pxt.appTargetVariant && !variant)))
            return;
        pxt.appTargetVariant = variant;
        reloadAppTargetVariant(opts.temporary);
    }
    pxt.setAppTargetVariant = setAppTargetVariant;
    // This causes the `hw` package to be replaced with `hw---variant` upon package load
    // the pxt.json of hw---variant would generally specify compileServiceVariant
    // This is controlled by ?hw=variant or by configuration created by dragging `config.bin`
    // into editor.
    function setHwVariant(variant, name) {
        variant = variant.replace(/.*---/, "");
        if (/^[\w\-]+$/.test(variant)) {
            pxt.hwVariant = variant;
            pxt.hwName = name || variant;
        }
        else {
            pxt.hwVariant = null;
            pxt.hwName = null;
        }
        pxt.debug("hwVariant: " + pxt.hwVariant + " (" + pxt.hwName + ")");
    }
    pxt.setHwVariant = setHwVariant;
    function hasHwVariants() {
        return !!pxt.appTarget.variants
            && Object.keys(pxt.appTarget.bundledpkgs).some(function (pkg) { return /^hw---/.test(pkg); });
    }
    pxt.hasHwVariants = hasHwVariants;
    function getHwVariants() {
        if (!pxt.appTarget.variants)
            return [];
        var hws = Object.keys(pxt.appTarget.bundledpkgs).filter(function (pkg) { return /^hw---/.test(pkg); });
        return hws
            .map(function (pkg) { return JSON.parse(pxt.appTarget.bundledpkgs[pkg][pxt.CONFIG_NAME]); })
            .filter(function (cfg) {
            if (pxt.appTarget.appTheme.experimentalHw)
                return true;
            return !cfg.experimentalHw;
        });
    }
    pxt.getHwVariants = getHwVariants;
    pxt.options = {};
    // general error reported
    pxt.debug = typeof console !== "undefined" && !!console.debug
        ? function (msg) {
            if (pxt.options.debug)
                console.debug(msg);
        } : function () { };
    pxt.log = typeof console !== "undefined" && !!console.log
        ? function (msg) {
            console.log(msg);
        } : function () { };
    pxt.reportException = function (e, d) {
        if (console) {
            console.error(e);
            if (d) {
                try {
                    // log it as object, so native object inspector can be used
                    console.log(d);
                    //pxt.log(JSON.stringify(d, null, 2))
                }
                catch (e) { }
            }
        }
    };
    pxt.reportError = function (cat, msg, data) {
        if (console) {
            console.error(cat + ": " + msg);
            if (data) {
                try {
                    pxt.log(JSON.stringify(data, null, 2));
                }
                catch (e) { }
            }
        }
    };
    var activityEvents = {};
    var tickActivityDebounced = pxt.Util.debounce(function () {
        pxt.tickEvent("activity", activityEvents);
        activityEvents = {};
    }, 10000, false);
    /**
     * Ticks activity events. This event gets aggregated and eventually gets sent.
     */
    function tickActivity() {
        var ids = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ids[_i] = arguments[_i];
        }
        ids.filter(function (id) { return !!id; }).map(function (id) { return id.slice(0, 64); })
            .forEach(function (id) { return activityEvents[id] = (activityEvents[id] || 0) + 1; });
        tickActivityDebounced();
    }
    pxt.tickActivity = tickActivity;
    function localWebConfig() {
        var r = {
            relprefix: "/--",
            workerjs: "/worker.js",
            monacoworkerjs: "/monacoworker.js",
            gifworkerjs: "/gifjs/gif.worker.js",
            serviceworkerjs: "/serviceworker.js",
            pxtVersion: "local",
            pxtRelId: "",
            pxtCdnUrl: "/cdn/",
            commitCdnUrl: "/cdn/",
            blobCdnUrl: "/blb/",
            cdnUrl: "/cdn/",
            targetUrl: "",
            targetVersion: "local",
            targetRelId: "",
            targetId: pxt.appTarget ? pxt.appTarget.id : "",
            simUrl: "/sim/simulator.html",
            simserviceworkerUrl: "/simulatorserviceworker.js",
            simworkerconfigUrl: "/sim/workerConfig.js",
            partsUrl: "/sim/siminstructions.html"
        };
        return r;
    }
    pxt.localWebConfig = localWebConfig;
    function getOnlineCdnUrl() {
        if (!pxt.webConfig)
            return null;
        var m = /^(https:\/\/[^\/]+)/.exec(pxt.webConfig.commitCdnUrl);
        if (m)
            return m[1];
        else
            return null;
    }
    pxt.getOnlineCdnUrl = getOnlineCdnUrl;
    function setupWebConfig(cfg) {
        if (cfg)
            pxt.webConfig = cfg;
        else if (!pxt.webConfig)
            pxt.webConfig = localWebConfig();
    }
    pxt.setupWebConfig = setupWebConfig;
    function getEmbeddedScript(id) {
        return pxt.U.lookup(pxt.appTarget.bundledpkgs || {}, id);
    }
    pxt.getEmbeddedScript = getEmbeddedScript;
    var _targetConfigPromise = undefined;
    function targetConfigAsync() {
        if (!_targetConfigPromise) // cached promise
            _targetConfigPromise = pxt.Cloud.downloadTargetConfigAsync()
                .then(function (js) { return js || {}; }, function (err) { return {}; });
        return _targetConfigPromise;
    }
    pxt.targetConfigAsync = targetConfigAsync;
    function packagesConfigAsync() {
        return targetConfigAsync().then(function (config) { return config ? config.packages : undefined; });
    }
    pxt.packagesConfigAsync = packagesConfigAsync;
    pxt.CONFIG_NAME = "pxt.json";
    pxt.SIMSTATE_JSON = ".simstate.json";
    pxt.SERIAL_EDITOR_FILE = "serial.txt";
    pxt.README_FILE = "README.md";
    pxt.GITIGNORE_FILE = ".gitignore";
    pxt.ASSETS_FILE = "assets.json";
    pxt.CLOUD_ID = "pxt/";
    pxt.BLOCKS_PROJECT_NAME = "blocksprj";
    pxt.JAVASCRIPT_PROJECT_NAME = "tsprj";
    pxt.PYTHON_PROJECT_NAME = "pyprj";
    pxt.DEFAULT_GROUP_NAME = "other"; // used in flyout, for snippet groups
    pxt.TILEMAP_CODE = "tilemap.g.ts";
    pxt.TILEMAP_JRES = "tilemap.g.jres";
    pxt.IMAGES_CODE = "images.g.ts";
    pxt.IMAGES_JRES = "images.g.jres";
    pxt.TUTORIAL_CODE_START = "_onCodeStart.ts";
    pxt.TUTORIAL_CODE_STOP = "_onCodeStop.ts";
    pxt.TUTORIAL_INFO_FILE = "tutorial-info-cache.json";
    function outputName(trg) {
        if (trg === void 0) { trg = null; }
        if (!trg)
            trg = pxt.appTarget.compile;
        if (trg.nativeType == ts.pxtc.NATIVE_TYPE_VM)
            return ts.pxtc.BINARY_PXT64;
        else if (trg.useUF2 && !trg.switches.rawELF)
            return ts.pxtc.BINARY_UF2;
        else if (trg.useELF)
            return ts.pxtc.BINARY_ELF;
        else
            return ts.pxtc.BINARY_HEX;
    }
    pxt.outputName = outputName;
    function isOutputText(trg) {
        if (trg === void 0) { trg = null; }
        return outputName(trg) == ts.pxtc.BINARY_HEX;
    }
    pxt.isOutputText = isOutputText;
})(pxt || (pxt = {}));
/// <reference path="main.ts"/>
var pxt;
(function (pxt) {
    var blocks;
    (function (blocks) {
        var THIS_NAME = "this";
        // The JS Math functions supported in the blocks. The order of this array
        // determines the order of the dropdown in the math_js_op block
        blocks.MATH_FUNCTIONS = {
            unary: ["sqrt", "sin", "cos", "tan"],
            binary: ["atan2"],
            infix: ["idiv", "imul"]
        };
        // Like MATH_FUNCTIONS, but used only for rounding operations
        blocks.ROUNDING_FUNCTIONS = ["round", "ceil", "floor", "trunc"];
        // Information for blocks that compile to function calls but are defined by vanilla Blockly
        // and not dynamically by BlocklyLoader
        blocks.builtinFunctionInfo = {
            "Math.abs": { blockId: "math_op3", params: ["x"] },
            "Math.min": { blockId: "math_op2", params: ["x", "y"] },
            "Math.max": { blockId: "math_op2", params: ["x", "y"] }
        };
        function normalizeBlock(b, err) {
            if (err === void 0) { err = pxt.log; }
            if (!b)
                return b;
            // normalize and validate common errors
            // made while translating
            var nb = b.replace(/(?:^|[^\\])([%$])\s+/g, '$1');
            if (nb != b) {
                err("block has extra spaces: " + b);
                b = nb;
            }
            // remove spaces around %foo = ==> %foo=
            b = nb;
            nb = b.replace(/([%$]\w+)\s*=\s*(\w+)/, '$1=$2');
            if (nb != b) {
                err("block has space between %name and = : " + b);
                b = nb;
            }
            // remove spaces before after pipe
            nb = nb.replace(/\s*\|\s*/g, '|');
            return nb;
        }
        blocks.normalizeBlock = normalizeBlock;
        function compileInfo(fn) {
            var res = {
                parameters: [],
                actualNameToParam: {},
                definitionNameToParam: {},
                handlerArgs: []
            };
            var instance = (fn.kind == 1 /* Method */ || fn.kind == 2 /* Property */) && !fn.attributes.defaultInstance;
            var hasBlockDef = !!fn.attributes._def;
            var defParameters = hasBlockDef ? fn.attributes._def.parameters.slice(0) : undefined;
            var optionalStart = hasBlockDef ? defParameters.length : (fn.parameters ? fn.parameters.length : 0);
            var bInfo = blocks.builtinFunctionInfo[fn.qName];
            if (hasBlockDef && fn.attributes._expandedDef) {
                defParameters.push.apply(defParameters, fn.attributes._expandedDef.parameters);
            }
            var refMap = {};
            var definitionsWithoutRefs = defParameters ? defParameters.filter(function (p) {
                if (p.ref) {
                    refMap[p.name] = p;
                    return false;
                }
                return true;
            }) : [];
            if (instance && hasBlockDef && defParameters.length) {
                var def = refMap[THIS_NAME] || defParameters[0];
                var defName = def.name;
                var isVar = !def.shadowBlockId || def.shadowBlockId === "variables_get";
                var defaultValue = void 0;
                if (isVar) {
                    defaultValue = def.varName || fn.attributes.paramDefl[defName] || fn.attributes.paramDefl["this"];
                }
                res.thisParameter = {
                    actualName: THIS_NAME,
                    definitionName: defName,
                    shadowBlockId: def.shadowBlockId,
                    type: fn.namespace,
                    defaultValue: defaultValue,
                    // Normally we pass ths actual parameter name, but the "this" parameter doesn't have one
                    fieldEditor: fieldEditor(defName, THIS_NAME),
                    fieldOptions: fieldOptions(defName, THIS_NAME),
                    shadowOptions: shadowOptions(defName, THIS_NAME),
                };
            }
            if (fn.parameters) {
                var defIndex_1 = (instance && !refMap[THIS_NAME]) ? 1 : 0;
                fn.parameters.forEach(function (p, i) {
                    var def;
                    if (refMap[p.name]) {
                        def = refMap[p.name];
                    }
                    else if (defIndex_1 < definitionsWithoutRefs.length) {
                        def = definitionsWithoutRefs[defIndex_1];
                        ++defIndex_1;
                    }
                    if (def || !hasBlockDef) {
                        var range = undefined;
                        if (p.options && p.options["min"] && p.options["max"]) {
                            range = { min: p.options["min"].value, max: p.options["max"].value };
                        }
                        var defName = def ? def.name : (bInfo ? bInfo.params[defIndex_1++] : p.name);
                        var isVarOrArray = def && (def.shadowBlockId === "variables_get" || def.shadowBlockId == "lists_create_with");
                        res.parameters.push({
                            actualName: p.name,
                            type: p.type,
                            defaultValue: isVarOrArray ? (def.varName || p.default) : p.default,
                            definitionName: defName,
                            shadowBlockId: def && def.shadowBlockId,
                            isOptional: defParameters ? defParameters.indexOf(def) >= optionalStart : false,
                            fieldEditor: fieldEditor(defName, p.name),
                            fieldOptions: fieldOptions(defName, p.name),
                            shadowOptions: shadowOptions(defName, p.name),
                            range: range
                        });
                    }
                    if (p.handlerParameters) {
                        p.handlerParameters.forEach(function (arg) {
                            res.handlerArgs.push({
                                name: arg.name,
                                type: arg.type,
                                inBlockDef: defParameters ? defParameters.some(function (def) { return def.ref && def.name === arg.name; }) : false
                            });
                        });
                    }
                });
            }
            res.parameters.forEach(function (p) {
                res.actualNameToParam[p.actualName] = p;
                res.definitionNameToParam[p.definitionName] = p;
            });
            return res;
            function fieldEditor(defName, actualName) {
                return fn.attributes.paramFieldEditor &&
                    (fn.attributes.paramFieldEditor[defName] || fn.attributes.paramFieldEditor[actualName]);
            }
            function fieldOptions(defName, actualName) {
                return fn.attributes.paramFieldEditorOptions &&
                    (fn.attributes.paramFieldEditorOptions[defName] || fn.attributes.paramFieldEditorOptions[actualName]);
            }
            function shadowOptions(defName, actualName) {
                return fn.attributes.paramShadowOptions &&
                    (fn.attributes.paramShadowOptions[defName] || fn.attributes.paramShadowOptions[actualName]);
            }
        }
        blocks.compileInfo = compileInfo;
        function hasHandler(fn) {
            return fn.parameters && fn.parameters.some(function (p) {
                var _a, _b;
                return (p.type == "() => void" ||
                    p.type == "Action" ||
                    !!((_a = p.properties) === null || _a === void 0 ? void 0 : _a.length) ||
                    !!((_b = p.handlerParameters) === null || _b === void 0 ? void 0 : _b.length));
            });
        }
        blocks.hasHandler = hasHandler;
        /**
         * Returns which Blockly block type to use for an argument reporter based
         * on the specified TypeScript type.
         * @param varType The variable's TypeScript type
         * @return The Blockly block type of the reporter to be used
         */
        function reporterTypeForArgType(varType) {
            var reporterType = "argument_reporter_custom";
            if (varType === "boolean" || varType === "number" || varType === "string") {
                reporterType = "argument_reporter_" + varType;
            }
            return reporterType;
        }
        blocks.reporterTypeForArgType = reporterTypeForArgType;
        function defaultIconForArgType(typeName) {
            if (typeName === void 0) { typeName = ""; }
            switch (typeName) {
                case "number":
                    return "calculator";
                case "string":
                    return "text width";
                case "boolean":
                    return "random";
                default:
                    return "align justify";
            }
        }
        blocks.defaultIconForArgType = defaultIconForArgType;
        function parseFields(b) {
            // normalize and validate common errors
            // made while translating
            return b.split('|').map(function (n, ni) {
                var m = /([^%]*)\s*%([a-zA-Z0-9_]+)/.exec(n);
                if (!m)
                    return { n: n, ni: ni };
                var pre = m[1];
                if (pre)
                    pre = pre.trim();
                var p = m[2];
                return { n: n, ni: ni, pre: pre, p: p };
            });
        }
        blocks.parseFields = parseFields;
        var _blockDefinitions;
        function blockDefinitions() {
            if (!_blockDefinitions)
                cacheBlockDefinitions();
            return _blockDefinitions;
        }
        blocks.blockDefinitions = blockDefinitions;
        function getBlockDefinition(blockId) {
            if (!_blockDefinitions)
                cacheBlockDefinitions();
            return _blockDefinitions[blockId];
        }
        blocks.getBlockDefinition = getBlockDefinition;
        // Resources for built-in and extra blocks
        function cacheBlockDefinitions() {
            _blockDefinitions = {
                'device_while': {
                    name: pxt.Util.lf("a loop that repeats while the condition is true"),
                    tooltip: pxt.Util.lf("Run the same sequence of actions while the condition is met."),
                    url: '/blocks/loops/while',
                    category: 'loops',
                    block: {
                        message0: pxt.Util.lf("while %1"),
                        appendField: pxt.Util.lf("{id:while}do")
                    }
                },
                'pxt_controls_for': {
                    name: pxt.Util.lf("a loop that repeats the number of times you say"),
                    tooltip: pxt.Util.lf("Have the variable '{0}' take on the values from 0 to the end number, counting by 1, and do the specified blocks."),
                    url: 'blocks/loops/for',
                    category: 'loops',
                    block: {
                        message0: pxt.Util.lf("for %1 from 0 to %2"),
                        variable: pxt.Util.lf("{id:var}index"),
                        appendField: pxt.Util.lf("{id:for}do")
                    }
                },
                'controls_simple_for': {
                    name: pxt.Util.lf("a loop that repeats the number of times you say"),
                    tooltip: pxt.Util.lf("Have the variable '{0}' take on the values from 0 to the end number, counting by 1, and do the specified blocks."),
                    url: 'blocks/loops/for',
                    category: 'loops',
                    block: {
                        message0: pxt.Util.lf("for %1 from 0 to %2"),
                        variable: pxt.Util.lf("{id:var}index"),
                        appendField: pxt.Util.lf("{id:for}do")
                    }
                },
                'pxt_controls_for_of': {
                    name: pxt.Util.lf("a loop that repeats for each value in an array"),
                    tooltip: pxt.Util.lf("Have the variable '{0}' take the value of each item in the array one by one, and do the specified blocks."),
                    url: 'blocks/loops/for-of',
                    category: 'loops',
                    block: {
                        message0: pxt.Util.lf("for element %1 of %2"),
                        variable: pxt.Util.lf("{id:var}value"),
                        appendField: pxt.Util.lf("{id:for_of}do")
                    }
                },
                'controls_for_of': {
                    name: pxt.Util.lf("a loop that repeats for each value in an array"),
                    tooltip: pxt.Util.lf("Have the variable '{0}' take the value of each item in the array one by one, and do the specified blocks."),
                    url: 'blocks/loops/for-of',
                    category: 'loops',
                    block: {
                        message0: pxt.Util.lf("for element %1 of %2"),
                        variable: pxt.Util.lf("{id:var}value"),
                        appendField: pxt.Util.lf("{id:for_of}do")
                    }
                },
                'math_op2': {
                    name: pxt.Util.lf("minimum or maximum of 2 numbers"),
                    tooltip: {
                        "min": pxt.Util.lf("smaller value of 2 numbers"),
                        "max": pxt.Util.lf("larger value of 2 numbers")
                    },
                    url: '/blocks/math',
                    operators: {
                        'op': ["min", "max"]
                    },
                    category: 'math'
                },
                'math_op3': {
                    name: pxt.Util.lf("absolute number"),
                    tooltip: pxt.Util.lf("absolute value of a number"),
                    url: '/reference/math',
                    category: 'math',
                    block: {
                        message0: pxt.Util.lf("absolute of %1")
                    }
                },
                'math_number': {
                    name: pxt.Util.lf("{id:block}number"),
                    url: '/blocks/math/random',
                    category: 'math',
                    tooltip: (pxt.appTarget && pxt.appTarget.compile) ?
                        pxt.Util.lf("a decimal number") : pxt.Util.lf("an integer number")
                },
                'math_integer': {
                    name: pxt.Util.lf("{id:block}number"),
                    url: '/blocks/math/random',
                    category: 'math',
                    tooltip: pxt.Util.lf("an integer number")
                },
                'math_whole_number': {
                    name: pxt.Util.lf("{id:block}number"),
                    url: '/blocks/math/random',
                    category: 'math',
                    tooltip: pxt.Util.lf("a whole number")
                },
                'math_number_minmax': {
                    name: pxt.Util.lf("{id:block}number"),
                    url: '/blocks/math/random',
                    category: 'math'
                },
                'math_arithmetic': {
                    name: pxt.Util.lf("arithmetic operation"),
                    url: '/blocks/math',
                    tooltip: {
                        ADD: pxt.Util.lf("Return the sum of the two numbers."),
                        MINUS: pxt.Util.lf("Return the difference of the two numbers."),
                        MULTIPLY: pxt.Util.lf("Return the product of the two numbers."),
                        DIVIDE: pxt.Util.lf("Return the quotient of the two numbers."),
                        POWER: pxt.Util.lf("Return the first number raised to the power of the second number."),
                    },
                    operators: {
                        'OP': ["ADD", "MINUS", "MULTIPLY", "DIVIDE", "POWER"]
                    },
                    category: 'math',
                    block: {
                        MATH_ADDITION_SYMBOL: pxt.Util.lf("{id:op}+"),
                        MATH_SUBTRACTION_SYMBOL: pxt.Util.lf("{id:op}-"),
                        MATH_MULTIPLICATION_SYMBOL: pxt.Util.lf("{id:op}×"),
                        MATH_DIVISION_SYMBOL: pxt.Util.lf("{id:op}÷"),
                        MATH_POWER_SYMBOL: pxt.Util.lf("{id:op}**")
                    }
                },
                'math_modulo': {
                    name: pxt.Util.lf("division remainder"),
                    tooltip: pxt.Util.lf("Return the remainder from dividing the two numbers."),
                    url: '/blocks/math',
                    category: 'math',
                    block: {
                        MATH_MODULO_TITLE: pxt.Util.lf("remainder of %1 ÷ %2")
                    }
                },
                'math_js_op': {
                    name: pxt.Util.lf("math function"),
                    tooltip: {
                        "sqrt": pxt.Util.lf("Returns the square root of the argument"),
                        "sin": pxt.Util.lf("Returns the sine of the argument"),
                        "cos": pxt.Util.lf("Returns the cosine of the argument"),
                        "tan": pxt.Util.lf("Returns the tangent of the argument"),
                        "atan2": pxt.Util.lf("Returns the arctangent of the quotient of the two arguments"),
                        "idiv": pxt.Util.lf("Returns the integer portion of the division operation on the two arguments"),
                        "imul": pxt.Util.lf("Returns the integer portion of the multiplication operation on the two arguments")
                    },
                    url: '/blocks/math',
                    operators: {
                        'OP': ["sqrt", "sin", "cos", "tan", "atan2", "idiv", "imul"]
                    },
                    category: 'math',
                    block: {
                        "sqrt": pxt.Util.lf("{id:op}square root"),
                        "sin": pxt.Util.lf("{id:op}sin"),
                        "cos": pxt.Util.lf("{id:op}cos"),
                        "tan": pxt.Util.lf("{id:op}tan"),
                        "atan2": pxt.Util.lf("{id:op}atan2"),
                        "idiv": pxt.Util.lf("{id:op}integer ÷"),
                        "imul": pxt.Util.lf("{id:op}integer ×"),
                    }
                },
                "math_js_round": {
                    name: pxt.Util.lf("rounding functions"),
                    tooltip: {
                        "round": pxt.Util.lf("Increases the argument to the next higher whole number if its fractional part is more than one half"),
                        "ceil": pxt.Util.lf("Increases the argument to the next higher whole number"),
                        "floor": pxt.Util.lf("Decreases the argument to the next lower whole number"),
                        "trunc": pxt.Util.lf("Removes the fractional part of the argument")
                    },
                    url: '/blocks/math',
                    operators: {
                        "OP": ["round", "ceil", "floor", "trunc"]
                    },
                    category: 'math',
                    block: {
                        "round": pxt.Util.lf("{id:op}round"),
                        "ceil": pxt.Util.lf("{id:op}ceiling"),
                        "floor": pxt.Util.lf("{id:op}floor"),
                        "trunc": pxt.Util.lf("{id:op}truncate"),
                    }
                },
                'variables_change': {
                    name: pxt.Util.lf("update the value of a number variable"),
                    tooltip: pxt.Util.lf("Changes the value of the variable by this amount"),
                    url: '/blocks/variables/change',
                    category: 'variables',
                    block: {
                        message0: pxt.Util.lf("change %1 by %2")
                    }
                },
                'controls_repeat_ext': {
                    name: pxt.Util.lf("a loop that repeats and increments an index"),
                    tooltip: pxt.Util.lf("Do some statements several times."),
                    url: '/blocks/loops/repeat',
                    category: 'loops',
                    block: {
                        CONTROLS_REPEAT_TITLE: pxt.Util.lf("repeat %1 times"),
                        CONTROLS_REPEAT_INPUT_DO: pxt.Util.lf("{id:repeat}do")
                    }
                },
                'variables_get': {
                    name: pxt.Util.lf("get the value of a variable"),
                    tooltip: pxt.Util.lf("Returns the value of this variable."),
                    url: '/blocks/variables',
                    category: 'variables',
                    block: {
                        VARIABLES_GET_CREATE_SET: pxt.Util.lf("Create 'set %1'")
                    }
                },
                'variables_get_reporter': {
                    name: pxt.Util.lf("get the value of a variable"),
                    tooltip: pxt.Util.lf("Returns the value of this variable."),
                    url: '/blocks/variables',
                    category: 'variables',
                    block: {
                        VARIABLES_GET_CREATE_SET: pxt.Util.lf("Create 'set %1'")
                    }
                },
                'variables_set': {
                    name: pxt.Util.lf("assign the value of a variable"),
                    tooltip: pxt.Util.lf("Sets this variable to be equal to the input."),
                    url: '/blocks/variables/assign',
                    category: 'variables',
                    block: {
                        VARIABLES_SET: pxt.Util.lf("set %1 to %2")
                    }
                },
                'controls_if': {
                    name: pxt.Util.lf("a conditional statement"),
                    tooltip: {
                        CONTROLS_IF_TOOLTIP_1: pxt.Util.lf("If a value is true, then do some statements."),
                        CONTROLS_IF_TOOLTIP_2: pxt.Util.lf("If a value is true, then do the first block of statements. Otherwise, do the second block of statements."),
                        CONTROLS_IF_TOOLTIP_3: pxt.Util.lf("If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements."),
                        CONTROLS_IF_TOOLTIP_4: pxt.Util.lf("If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.")
                    },
                    tooltipSearch: "CONTROLS_IF_TOOLTIP_2",
                    url: '/blocks/logic/if',
                    category: 'logic',
                    block: {
                        CONTROLS_IF_MSG_IF: pxt.Util.lf("{id:logic}if"),
                        CONTROLS_IF_MSG_THEN: pxt.Util.lf("{id:logic}then"),
                        CONTROLS_IF_MSG_ELSE: pxt.Util.lf("{id:logic}else"),
                        CONTROLS_IF_MSG_ELSEIF: pxt.Util.lf("{id:logic}else if")
                    }
                },
                'lists_create_with': {
                    name: pxt.Util.lf("create an array"),
                    tooltip: pxt.Util.lf("Creates a new array."),
                    url: '/reference/arrays/create',
                    category: 'arrays',
                    blockTextSearch: "LISTS_CREATE_WITH_INPUT_WITH",
                    block: {
                        LISTS_CREATE_EMPTY_TITLE: pxt.Util.lf("empty array"),
                        LISTS_CREATE_WITH_INPUT_WITH: pxt.Util.lf("array of"),
                        LISTS_CREATE_WITH_CONTAINER_TITLE_ADD: pxt.Util.lf("array"),
                        LISTS_CREATE_WITH_ITEM_TITLE: pxt.Util.lf("value")
                    }
                },
                'lists_length': {
                    name: pxt.Util.lf("array length"),
                    tooltip: pxt.Util.lf("Returns the number of items in an array."),
                    url: '/reference/arrays/length',
                    category: 'arrays',
                    block: {
                        LISTS_LENGTH_TITLE: pxt.Util.lf("length of array %1")
                    }
                },
                'lists_index_get': {
                    name: pxt.Util.lf("get a value in an array"),
                    tooltip: pxt.Util.lf("Returns the value at the given index in an array."),
                    url: '/reference/arrays/get',
                    category: 'arrays',
                    block: {
                        message0: pxt.Util.lf("%1 get value at %2")
                    }
                },
                'lists_index_set': {
                    name: pxt.Util.lf("set a value in an array"),
                    tooltip: pxt.Util.lf("Sets the value at the given index in an array"),
                    url: '/reference/arrays/set',
                    category: 'arrays',
                    block: {
                        message0: pxt.Util.lf("%1 set value at %2 to %3")
                    }
                },
                'logic_compare': {
                    name: pxt.Util.lf("comparing two numbers"),
                    tooltip: {
                        LOGIC_COMPARE_TOOLTIP_EQ: pxt.Util.lf("Return true if both inputs equal each other."),
                        LOGIC_COMPARE_TOOLTIP_NEQ: pxt.Util.lf("Return true if both inputs are not equal to each other."),
                        LOGIC_COMPARE_TOOLTIP_LT: pxt.Util.lf("Return true if the first input is smaller than the second input."),
                        LOGIC_COMPARE_TOOLTIP_LTE: pxt.Util.lf("Return true if the first input is smaller than or equal to the second input."),
                        LOGIC_COMPARE_TOOLTIP_GT: pxt.Util.lf("Return true if the first input is greater than the second input."),
                        LOGIC_COMPARE_TOOLTIP_GTE: pxt.Util.lf("Return true if the first input is greater than or equal to the second input.")
                    },
                    url: '/blocks/logic/boolean',
                    category: 'logic',
                    block: {
                        search: "= ≠ < ≤ > ≥" // Only used for search; this string is not surfaced in the block's text
                    }
                },
                'logic_operation': {
                    name: pxt.Util.lf("boolean operation"),
                    tooltip: {
                        LOGIC_OPERATION_TOOLTIP_AND: pxt.Util.lf("Return true if both inputs are true."),
                        LOGIC_OPERATION_TOOLTIP_OR: pxt.Util.lf("Return true if at least one of the inputs is true.")
                    },
                    url: '/blocks/logic/boolean',
                    category: 'logic',
                    block: {
                        LOGIC_OPERATION_AND: pxt.Util.lf("{id:op}and"),
                        LOGIC_OPERATION_OR: pxt.Util.lf("{id:op}or")
                    }
                },
                'logic_negate': {
                    name: pxt.Util.lf("logical negation"),
                    tooltip: pxt.Util.lf("Returns true if the input is false. Returns false if the input is true."),
                    url: '/blocks/logic/boolean',
                    category: 'logic',
                    block: {
                        LOGIC_NEGATE_TITLE: pxt.Util.lf("not %1")
                    }
                },
                'logic_boolean': {
                    name: pxt.Util.lf("a `true` or `false` value"),
                    tooltip: pxt.Util.lf("Returns either true or false."),
                    url: '/blocks/logic/boolean',
                    category: 'logic',
                    block: {
                        LOGIC_BOOLEAN_TRUE: pxt.Util.lf("{id:boolean}true"),
                        LOGIC_BOOLEAN_FALSE: pxt.Util.lf("{id:boolean}false")
                    }
                },
                'text': {
                    name: pxt.Util.lf("a piece of text"),
                    tooltip: pxt.Util.lf("A letter, word, or line of text."),
                    url: 'types/string',
                    category: 'text',
                    block: {
                        search: pxt.Util.lf("a piece of text") // Only used for search; this string is not surfaced in the block's text
                    }
                },
                'text_length': {
                    name: pxt.Util.lf("number of characters in the string"),
                    tooltip: pxt.Util.lf("Returns the number of letters (including spaces) in the provided text."),
                    url: 'reference/text/length',
                    category: 'text',
                    block: {
                        TEXT_LENGTH_TITLE: pxt.Util.lf("length of %1")
                    }
                },
                'text_join': {
                    name: pxt.Util.lf("join items to create text"),
                    tooltip: pxt.Util.lf("Create a piece of text by joining together any number of items."),
                    url: 'reference/text/join',
                    category: 'text',
                    block: {
                        TEXT_JOIN_TITLE_CREATEWITH: pxt.Util.lf("join")
                    }
                },
                'procedures_defnoreturn': {
                    name: pxt.Util.lf("define the function"),
                    tooltip: pxt.Util.lf("Create a function."),
                    url: 'types/function/define',
                    category: 'functions',
                    block: {
                        PROCEDURES_DEFNORETURN_TITLE: pxt.Util.lf("function"),
                        PROCEDURE_ALREADY_EXISTS: pxt.Util.lf("A function named '%1' already exists.")
                    }
                },
                'procedures_callnoreturn': {
                    name: pxt.Util.lf("call the function"),
                    tooltip: pxt.Util.lf("Call the user-defined function."),
                    url: 'types/function/call',
                    category: 'functions',
                    block: {
                        PROCEDURES_CALLNORETURN_TITLE: pxt.Util.lf("call function")
                    }
                },
                'function_return': {
                    name: pxt.Util.lf("return a value from within a function"),
                    tooltip: pxt.Util.lf("Return a value from within a user-defined function."),
                    url: 'types/function/return',
                    category: 'functions',
                    block: {
                        message_with_value: pxt.Util.lf("return %1"),
                        message_no_value: pxt.Util.lf("return")
                    }
                },
                'function_definition': {
                    name: pxt.Util.lf("define the function"),
                    tooltip: pxt.Util.lf("Create a function."),
                    url: 'types/function/define',
                    category: 'functions',
                    block: {
                        FUNCTIONS_EDIT_OPTION: pxt.Util.lf("Edit Function")
                    }
                },
                'function_call': {
                    name: pxt.Util.lf("call the function"),
                    tooltip: pxt.Util.lf("Call the user-defined function."),
                    url: 'types/function/call',
                    category: 'functions',
                    block: {
                        FUNCTIONS_CALL_TITLE: pxt.Util.lf("call"),
                        FUNCTIONS_GO_TO_DEFINITION_OPTION: pxt.Util.lf("Go to Definition")
                    }
                },
                'function_call_output': {
                    name: pxt.Util.lf("call the function with a return value"),
                    tooltip: pxt.Util.lf("Call the user-defined function with a return value."),
                    url: 'types/function/call',
                    category: 'functions',
                    block: {}
                }
            };
            _blockDefinitions[pxtc.ON_START_TYPE] = {
                name: pxt.Util.lf("on start event"),
                tooltip: pxt.Util.lf("Run code when the program starts"),
                url: '/blocks/on-start',
                category: "loops",
                block: {
                    message0: pxt.Util.lf("on start %1 %2")
                }
            };
            _blockDefinitions[pxtc.PAUSE_UNTIL_TYPE] = {
                name: pxt.Util.lf("pause until"),
                tooltip: pxt.Util.lf("Pause execution of code until the given boolean expression is true"),
                url: '/blocks/pause-until',
                category: "loops",
                block: {
                    message0: pxt.Util.lf("pause until %1")
                }
            };
            _blockDefinitions[pxtc.TS_BREAK_TYPE] = {
                name: pxt.Util.lf("break"),
                tooltip: pxt.Util.lf("Break out of the current loop or switch"),
                url: '/blocks/loops/break',
                category: 'loops',
                block: {
                    message0: pxt.Util.lf("break")
                }
            };
            _blockDefinitions[pxtc.TS_CONTINUE_TYPE] = {
                name: pxt.Util.lf("continue"),
                tooltip: pxt.Util.lf("Skip current iteration and continues with the next iteration in the loop"),
                url: '/blocks/loops/continue',
                category: 'loops',
                block: {
                    message0: pxt.Util.lf("continue")
                }
            };
            if (pxt.Util.isTranslationMode()) {
                var msg_1 = Blockly.Msg;
                pxt.Util.values(_blockDefinitions).filter(function (b) { return b.block; }).forEach(function (b) {
                    var keys = Object.keys(b.block);
                    b.translationIds = pxt.Util.values(b.block);
                    keys.forEach(function (k) { return pxt.crowdin.inContextLoadAsync(b.block[k])
                        .done(function (r) {
                        b.block[k] = r;
                        // override builtin blockly namespace strings
                        if (/^[A-Z_]+$/.test(k))
                            msg_1[k] = r;
                    }); });
                });
            }
        }
    })(blocks = pxt.blocks || (pxt.blocks = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var BrowserUtils;
    (function (BrowserUtils) {
        function isIFrame() {
            try {
                return window && window.self !== window.top;
            }
            catch (e) {
                return true;
            }
        }
        BrowserUtils.isIFrame = isIFrame;
        function hasNavigator() {
            return typeof navigator !== "undefined";
        }
        BrowserUtils.hasNavigator = hasNavigator;
        function isWindows() {
            return hasNavigator() && /(Win32|Win64|WOW64)/i.test(navigator.platform);
        }
        BrowserUtils.isWindows = isWindows;
        function isWindows10() {
            return hasNavigator() && /(Win32|Win64|WOW64)/i.test(navigator.platform) && /Windows NT 10/i.test(navigator.userAgent);
        }
        BrowserUtils.isWindows10 = isWindows10;
        function isMobile() {
            return hasNavigator() && /mobi/i.test(navigator.userAgent);
        }
        BrowserUtils.isMobile = isMobile;
        function isIOS() {
            return hasNavigator() &&
                (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
                    navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        }
        BrowserUtils.isIOS = isIOS;
        function isAndroid() {
            return hasNavigator() && /android/i.test(navigator.userAgent);
        }
        BrowserUtils.isAndroid = isAndroid;
        //MacIntel on modern Macs
        function isMac() {
            return hasNavigator() && /Mac/i.test(navigator.platform);
        }
        BrowserUtils.isMac = isMac;
        //This is generally appears for Linux
        //Android *sometimes* returns this
        function isLinux() {
            return !!navigator && /Linux/i.test(navigator.platform);
        }
        BrowserUtils.isLinux = isLinux;
        // Detects if we are running on ARM (Raspberry pi)
        function isARM() {
            return hasNavigator() && /arm/i.test(navigator.platform);
        }
        BrowserUtils.isARM = isARM;
        // Detects if we are running inside the UWP runtime (Microsoft Edge)
        function isUwpEdge() {
            return typeof window !== "undefined" && !!window.Windows;
        }
        BrowserUtils.isUwpEdge = isUwpEdge;
        /*
        Notes on browser detection
    
        Actually:             Claims to be:
                              IE  MicrosoftEdge    Chrome  Safari  Firefox
                  IE          X                           X?
        Microsoft Edge                    X       X       X
                  Chrome                          X       X
                  Safari                                  X       X
                  Firefox                                         X
    
        I allow Opera to go about claiming to be Chrome because it might as well be
        */
        //Microsoft Edge lies about its user agent and claims to be Chrome, but Microsoft Edge/Version
        //is always at the end
        function isEdge() {
            return hasNavigator() && /Edge/i.test(navigator.userAgent);
        }
        BrowserUtils.isEdge = isEdge;
        //IE11 also lies about its user agent, but has Trident appear somewhere in
        //the user agent. Detecting the different between IE11 and Microsoft Edge isn't
        //super-important because the UI is similar enough
        function isIE() {
            return hasNavigator() && /Trident/i.test(navigator.userAgent);
        }
        BrowserUtils.isIE = isIE;
        //Microsoft Edge and IE11 lie about being Chrome
        function isChrome() {
            return !isEdge() && !isIE() && !!navigator && (/Chrome/i.test(navigator.userAgent) || /Chromium/i.test(navigator.userAgent));
        }
        BrowserUtils.isChrome = isChrome;
        //Chrome and Microsoft Edge lie about being Safari
        function isSafari() {
            //Could also check isMac but I don't want to risk excluding iOS
            //Checking for iPhone, iPod or iPad as well as Safari in order to detect home screen browsers on iOS
            return !isChrome() && !isEdge() && !!navigator && /(Macintosh|Safari|iPod|iPhone|iPad)/i.test(navigator.userAgent);
        }
        BrowserUtils.isSafari = isSafari;
        //Safari and WebKit lie about being Firefox
        function isFirefox() {
            return !isSafari() && !!navigator && (/Firefox/i.test(navigator.userAgent) || /Seamonkey/i.test(navigator.userAgent));
        }
        BrowserUtils.isFirefox = isFirefox;
        //These days Opera's core is based on Chromium so we shouldn't distinguish between them too much
        function isOpera() {
            return hasNavigator() && /Opera|OPR/i.test(navigator.userAgent);
        }
        BrowserUtils.isOpera = isOpera;
        //Midori *was* the default browser on Raspbian, however isn't any more
        function isMidori() {
            return hasNavigator() && /Midori/i.test(navigator.userAgent);
        }
        BrowserUtils.isMidori = isMidori;
        //Epiphany (code name for GNOME Web) is the default browser on Raspberry Pi
        //Epiphany also lies about being Chrome, Safari, and Chromium
        function isEpiphany() {
            return hasNavigator() && /Epiphany/i.test(navigator.userAgent);
        }
        BrowserUtils.isEpiphany = isEpiphany;
        function isTouchEnabled() {
            return typeof window !== "undefined" &&
                ('ontouchstart' in window // works on most browsers
                    || (navigator && navigator.maxTouchPoints > 0)); // works on IE10/11 and Surface);
        }
        BrowserUtils.isTouchEnabled = isTouchEnabled;
        function isPxtElectron() {
            return typeof window != "undefined" && !!window.pxtElectron;
        }
        BrowserUtils.isPxtElectron = isPxtElectron;
        function isIpcRenderer() {
            return typeof window != "undefined" && !!window.ipcRenderer;
        }
        BrowserUtils.isIpcRenderer = isIpcRenderer;
        function isElectron() {
            return isPxtElectron() || isIpcRenderer();
        }
        BrowserUtils.isElectron = isElectron;
        // this function gets overriden when loading pxtwinrt.js
        BrowserUtils.isWinRT = function () { return false; };
        function isLocalHost(ignoreFlags) {
            var _a, _b;
            try {
                return typeof window !== "undefined"
                    && /^http:\/\/(localhost|127\.0\.0\.1):\d+\//.test(window.location.href)
                    && (ignoreFlags || !/nolocalhost=1/.test(window.location.href))
                    && !((_b = (_a = pxt) === null || _a === void 0 ? void 0 : _a.webConfig) === null || _b === void 0 ? void 0 : _b.isStatic);
            }
            catch (e) {
                return false;
            }
        }
        BrowserUtils.isLocalHost = isLocalHost;
        function isLocalHostDev() {
            return isLocalHost() && !isElectron();
        }
        BrowserUtils.isLocalHostDev = isLocalHostDev;
        function hasPointerEvents() {
            return typeof window != "undefined" && !!window.PointerEvent;
        }
        BrowserUtils.hasPointerEvents = hasPointerEvents;
        function hasSaveAs() {
            return isEdge() || isIE() || isFirefox();
        }
        BrowserUtils.hasSaveAs = hasSaveAs;
        function os() {
            if (isWindows())
                return "windows";
            else if (isMac())
                return "mac";
            else if (isLinux() && isARM())
                return "rpi";
            else if (isLinux())
                return "linux";
            else
                return "unknown";
        }
        BrowserUtils.os = os;
        function browser() {
            if (isEdge())
                return "edge";
            if (isEpiphany())
                return "epiphany";
            else if (isMidori())
                return "midori";
            else if (isOpera())
                return "opera";
            else if (isIE())
                return "ie";
            else if (isChrome())
                return "chrome";
            else if (isSafari())
                return "safari";
            else if (isFirefox())
                return "firefox";
            else
                return "unknown";
        }
        BrowserUtils.browser = browser;
        function browserVersion() {
            if (!hasNavigator())
                return null;
            //Unsurprisingly browsers also lie about this and include other browser versions...
            var matches = [];
            if (isOpera()) {
                matches = /(Opera|OPR)\/([0-9\.]+)/i.exec(navigator.userAgent);
            }
            if (isEpiphany()) {
                matches = /Epiphany\/([0-9\.]+)/i.exec(navigator.userAgent);
            }
            else if (isMidori()) {
                matches = /Midori\/([0-9\.]+)/i.exec(navigator.userAgent);
            }
            else if (isSafari()) {
                matches = /Version\/([0-9\.]+)/i.exec(navigator.userAgent);
                // pinned web sites and WKWebview for embedded browsers have a different user agent
                // Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27
                // Mozilla/5.0 (iPad; CPU OS 10_3_3 like Mac OS X) AppleWebKit/603.3.8 (KHTML, like Gecko) Mobile/14G60
                // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/605.1.15 (KHTML, like Gecko)
                if (!matches)
                    matches = /(Macintosh|iPod|iPhone|iPad); (CPU|Intel).*?OS (X )?(\d+)/i.exec(navigator.userAgent);
            }
            else if (isChrome()) {
                matches = /(Chrome|Chromium)\/([0-9\.]+)/i.exec(navigator.userAgent);
            }
            else if (isEdge()) {
                matches = /Edge\/([0-9\.]+)/i.exec(navigator.userAgent);
            }
            else if (isIE()) {
                matches = /(MSIE |rv:)([0-9\.]+)/i.exec(navigator.userAgent);
            }
            else {
                matches = /(Firefox|Seamonkey)\/([0-9\.]+)/i.exec(navigator.userAgent);
            }
            if (!matches || matches.length == 0) {
                return null;
            }
            return matches[matches.length - 1];
        }
        BrowserUtils.browserVersion = browserVersion;
        var hasLoggedBrowser = false;
        // Note that IE11 is no longer supported in any target. Redirect handled in docfiles/pxtweb/browserRedirect.ts
        function isBrowserSupported() {
            var _a, _b, _c;
            if (!navigator) {
                return true; //All browsers define this, but we can't make any predictions if it isn't defined, so assume the best
            }
            // allow bots in general
            if (/bot|crawler|spider|crawling/i.test(navigator.userAgent))
                return true;
            // Check target theme to see if this browser is supported
            var unsupportedBrowsers = ((_a = pxt.appTarget) === null || _a === void 0 ? void 0 : _a.unsupportedBrowsers) || ((_b = window.pxtTargetBundle) === null || _b === void 0 ? void 0 : _b.unsupportedBrowsers);
            if ((_c = unsupportedBrowsers) === null || _c === void 0 ? void 0 : _c.some(function (b) { return b.id == browser(); })) {
                return false;
            }
            // testing browser versions
            var versionString = browserVersion();
            var v = parseInt(versionString || "0");
            var isRecentChrome = isChrome() && v >= 38;
            var isRecentFirefox = isFirefox() && v >= 31;
            var isRecentEdge = isEdge();
            var isRecentSafari = isSafari() && v >= 9;
            var isRecentOpera = (isOpera() && isChrome()) && v >= 21;
            var isModernBrowser = isRecentChrome || isRecentFirefox || isRecentEdge || isRecentSafari || isRecentOpera;
            //In the future this should check for the availability of features, such
            //as web workers
            var isSupported = isModernBrowser;
            var isUnsupportedRPI = isMidori() || (isLinux() && isARM() && isEpiphany());
            var isNotSupported = isUnsupportedRPI;
            isSupported = isSupported && !isNotSupported;
            //Bypass
            isSupported = isSupported || /anybrowser=(true|1)/.test(window.location.href);
            if (!hasLoggedBrowser) {
                pxt.log("Browser: " + browser() + " " + versionString + " on " + os());
                if (!isSupported) {
                    pxt.tickEvent("browser.unsupported", { useragent: navigator.userAgent });
                }
                hasLoggedBrowser = true;
            }
            return isSupported;
        }
        BrowserUtils.isBrowserSupported = isBrowserSupported;
        function devicePixelRatio() {
            if (typeof window === "undefined" || !window.screen)
                return 1;
            // these are IE specific
            var sysXDPI = window.screen.systemXDPI;
            var logicalXDPI = window.screen.logicalXDPI;
            if (sysXDPI !== undefined
                && logicalXDPI !== undefined
                && sysXDPI > logicalXDPI) {
                return sysXDPI / logicalXDPI;
            }
            else if (window && window.devicePixelRatio !== undefined) {
                return window.devicePixelRatio;
            }
            return 1;
        }
        BrowserUtils.devicePixelRatio = devicePixelRatio;
        function browserDownloadBinText(text, name, opt) {
            return browserDownloadBase64(ts.pxtc.encodeBase64(text), name, opt);
        }
        BrowserUtils.browserDownloadBinText = browserDownloadBinText;
        function browserDownloadText(text, name, opt) {
            return browserDownloadBase64(ts.pxtc.encodeBase64(pxt.Util.toUTF8(text)), name, opt);
        }
        BrowserUtils.browserDownloadText = browserDownloadText;
        function isBrowserDownloadInSameWindow() {
            var windowOpen = isMobile() && isSafari() && !/downloadWindowOpen=0/i.test(window.location.href);
            return windowOpen;
        }
        BrowserUtils.isBrowserDownloadInSameWindow = isBrowserDownloadInSameWindow;
        // for browsers that strictly require that a download gets initiated within a user click
        function isBrowserDownloadWithinUserContext() {
            var versionString = browserVersion();
            var v = parseInt(versionString || "0");
            var r = (isMobile() && isSafari() && v >= 11) || /downloadUserContext=1/i.test(window.location.href);
            return r;
        }
        BrowserUtils.isBrowserDownloadWithinUserContext = isBrowserDownloadWithinUserContext;
        function browserDownloadDataUri(uri, name, userContextWindow) {
            var windowOpen = isBrowserDownloadInSameWindow();
            var versionString = browserVersion();
            var v = parseInt(versionString || "0");
            if (windowOpen) {
                if (userContextWindow)
                    userContextWindow.location.href = uri;
                else
                    window.open(uri, "_self");
            }
            else if (pxt.BrowserUtils.isSafari()
                && (v < 10 || (versionString.indexOf('10.0') == 0) || isMobile())) {
                // For Safari versions prior to 10.1 and all Mobile Safari versions
                // For mysterious reasons, the "link" trick closes the
                // PouchDB database
                var iframe = document.getElementById("downloader");
                if (!iframe) {
                    pxt.debug('injecting downloader iframe');
                    iframe = document.createElement("iframe");
                    iframe.id = "downloader";
                    iframe.style.position = "absolute";
                    iframe.style.right = "0";
                    iframe.style.bottom = "0";
                    iframe.style.zIndex = "-1";
                    iframe.style.width = "1px";
                    iframe.style.height = "1px";
                    document.body.appendChild(iframe);
                }
                iframe.src = uri;
            }
            else if (/^data:/i.test(uri) && (pxt.BrowserUtils.isEdge() || pxt.BrowserUtils.isIE())) {
                //Fix for edge
                var byteString = atob(uri.split(',')[1]);
                var ia = pxt.Util.stringToUint8Array(byteString);
                var blob = new Blob([ia], { type: "img/png" });
                window.navigator.msSaveOrOpenBlob(blob, name);
            }
            else {
                var link = window.document.createElement('a');
                if (typeof link.download == "string") {
                    link.href = uri;
                    link.download = name;
                    document.body.appendChild(link); // for FF
                    link.click();
                    document.body.removeChild(link);
                }
                else {
                    document.location.href = uri;
                }
            }
        }
        BrowserUtils.browserDownloadDataUri = browserDownloadDataUri;
        function browserDownloadUInt8Array(buf, name, opt) {
            return browserDownloadBase64(ts.pxtc.encodeBase64(pxt.Util.uint8ArrayToString(buf)), name, opt);
        }
        BrowserUtils.browserDownloadUInt8Array = browserDownloadUInt8Array;
        function toDownloadDataUri(b64, contentType) {
            var protocol = "data";
            if (isMobile() && isSafari() && pxt.appTarget.appTheme.mobileSafariDownloadProtocol)
                protocol = pxt.appTarget.appTheme.mobileSafariDownloadProtocol;
            var m = /downloadProtocol=([a-z0-9:/?]+)/i.exec(window.location.href);
            if (m)
                protocol = m[1];
            var dataurl = protocol + ":" + contentType + ";base64," + b64;
            return dataurl;
        }
        BrowserUtils.toDownloadDataUri = toDownloadDataUri;
        function browserDownloadBase64(b64, name, opt) {
            if (opt === void 0) { opt = {}; }
            var _a;
            pxt.debug('trigger download');
            var _b = opt.contentType, contentType = _b === void 0 ? "application/octet-stream" : _b, userContextWindow = opt.userContextWindow, onError = opt.onError, maintainObjectURL = opt.maintainObjectURL;
            var createObjectURL = (_a = window.URL) === null || _a === void 0 ? void 0 : _a.createObjectURL;
            var asDataUri = pxt.appTarget.appTheme.disableBlobObjectDownload;
            var downloadurl;
            try {
                if (!!createObjectURL && !asDataUri) {
                    var b = new Blob([pxt.Util.stringToUint8Array(atob(b64))], { type: contentType });
                    var objUrl = createObjectURL(b);
                    browserDownloadDataUri(objUrl, name, userContextWindow);
                    if (maintainObjectURL) {
                        downloadurl = objUrl;
                    }
                    else {
                        window.setTimeout(function () { return window.URL.revokeObjectURL(downloadurl); }, 0);
                    }
                }
                else {
                    downloadurl = toDownloadDataUri(b64, name);
                    browserDownloadDataUri(downloadurl, name, userContextWindow);
                }
            }
            catch (e) {
                if (onError)
                    onError(e);
                pxt.debug("saving failed");
            }
            return downloadurl;
        }
        BrowserUtils.browserDownloadBase64 = browserDownloadBase64;
        function loadImageAsync(data) {
            var img = document.createElement("img");
            return new Promise(function (resolve, reject) {
                img.onload = function () { return resolve(img); };
                img.onerror = function () { return resolve(undefined); };
                img.crossOrigin = "anonymous";
                img.src = data;
            });
        }
        BrowserUtils.loadImageAsync = loadImageAsync;
        function loadCanvasAsync(url) {
            return loadImageAsync(url)
                .then(function (img) {
                var canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);
                return canvas;
            });
        }
        BrowserUtils.loadCanvasAsync = loadCanvasAsync;
        function imageDataToPNG(img) {
            if (!img)
                return undefined;
            var canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext("2d");
            ctx.putImageData(img, 0, 0);
            return canvas.toDataURL("image/png");
        }
        BrowserUtils.imageDataToPNG = imageDataToPNG;
        function resolveCdnUrl(path) {
            // don't expand full urls
            if (/^https?:\/\//i.test(path))
                return path;
            var monacoPaths = window.MonacoPaths || {};
            var blobPath = monacoPaths[path];
            // find compute blob url
            if (blobPath)
                return blobPath;
            // might have been exanded already
            if (pxt.U.startsWith(path, pxt.webConfig.commitCdnUrl))
                return path;
            // append CDN
            return pxt.webConfig.commitCdnUrl + path;
        }
        BrowserUtils.resolveCdnUrl = resolveCdnUrl;
        function loadStyleAsync(path, rtl) {
            if (rtl)
                path = "rtl" + path;
            var id = "style-" + path;
            if (document.getElementById(id))
                return Promise.resolve();
            var url = resolveCdnUrl(path);
            var links = pxt.Util.toArray(document.head.getElementsByTagName("link"));
            var link = links.filter(function (l) { return l.getAttribute("href") == url; })[0];
            if (link) {
                if (!link.id)
                    link.id = id;
                return Promise.resolve();
            }
            return new Promise(function (resolve, reject) {
                var el = document.createElement("link");
                el.href = url;
                el.rel = "stylesheet";
                el.type = "text/css";
                el.id = id;
                el.addEventListener('load', function () { return resolve(); });
                el.addEventListener('error', function (e) { return reject(e); });
                document.head.appendChild(el);
            });
        }
        BrowserUtils.loadStyleAsync = loadStyleAsync;
        var loadScriptPromises = {};
        function loadScriptAsync(path) {
            var url = resolveCdnUrl(path);
            var p = loadScriptPromises[url];
            if (!p) {
                p = loadScriptPromises[url] = new Promise(function (resolve, reject) {
                    pxt.debug("script: loading " + url);
                    var script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.addEventListener('load', function () { return resolve(); });
                    script.addEventListener('error', function (e) {
                        // might have had connection issue, allow to try later
                        delete loadScriptPromises[url];
                        reject(e);
                    });
                    script.src = url;
                    script.async = true;
                    document.body.appendChild(script);
                });
            }
            return p;
        }
        BrowserUtils.loadScriptAsync = loadScriptAsync;
        function loadAjaxAsync(url) {
            return new Promise(function (resolve, reject) {
                var httprequest = new XMLHttpRequest();
                httprequest.onreadystatechange = function () {
                    if (httprequest.readyState == XMLHttpRequest.DONE) {
                        if (httprequest.status == 200) {
                            resolve(httprequest.responseText);
                        }
                        else {
                            reject(httprequest.status);
                        }
                    }
                };
                httprequest.open("GET", url, true);
                httprequest.send();
            });
        }
        BrowserUtils.loadAjaxAsync = loadAjaxAsync;
        var loadBlocklyPromise;
        function loadBlocklyAsync() {
            if (!loadBlocklyPromise) {
                pxt.debug("blockly: delay load");
                var p = pxt.BrowserUtils.loadStyleAsync("blockly.css", ts.pxtc.Util.isUserLanguageRtl());
                // js not loaded yet?
                if (typeof Blockly === "undefined")
                    p = p.then(function () { return pxt.BrowserUtils.loadScriptAsync("pxtblockly.js"); });
                p = p.then(function () {
                    pxt.debug("blockly: loaded");
                });
                loadBlocklyPromise = p;
            }
            return loadBlocklyPromise;
        }
        BrowserUtils.loadBlocklyAsync = loadBlocklyAsync;
        function patchCdn(url) {
            if (!url)
                return url;
            var online = pxt.getOnlineCdnUrl();
            if (online)
                return url.replace("@cdnUrl@", online);
            else
                return url.replace(/@cdnUrl@\/(blob|commit)\/[a-f0-9]{40}\//, "./");
        }
        BrowserUtils.patchCdn = patchCdn;
        function initTheme() {
            var theme = pxt.appTarget.appTheme;
            if (theme) {
                if (theme.accentColor) {
                    var style = document.createElement('style');
                    style.type = 'text/css';
                    style.appendChild(document.createTextNode(".ui.accent { color: " + theme.accentColor + "; }\n                .ui.inverted.menu .accent.active.item, .ui.inverted.accent.menu  { background-color: " + theme.accentColor + "; }"));
                    document.getElementsByTagName('head')[0].appendChild(style);
                }
            }
            // RTL languages
            if (pxt.Util.isUserLanguageRtl()) {
                pxt.debug("rtl layout");
                pxt.BrowserUtils.addClass(document.body, "rtl");
                document.body.style.direction = "rtl";
                // replace semantic.css with rtlsemantic.css
                var links = pxt.Util.toArray(document.head.getElementsByTagName("link"));
                var semanticLink = links.filter(function (l) { return pxt.Util.endsWith(l.getAttribute("href"), "semantic.css"); })[0];
                if (semanticLink) {
                    var semanticHref = semanticLink.getAttribute("data-rtl");
                    if (semanticHref) {
                        pxt.debug("swapping to " + semanticHref);
                        semanticLink.setAttribute("href", semanticHref);
                    }
                }
                // replace blockly.css with rtlblockly.css if possible
                var blocklyLink = links.filter(function (l) { return pxt.Util.endsWith(l.getAttribute("href"), "blockly.css"); })[0];
                if (blocklyLink) {
                    var blocklyHref = blocklyLink.getAttribute("data-rtl");
                    if (blocklyHref) {
                        pxt.debug("swapping to " + blocklyHref);
                        blocklyLink.setAttribute("href", blocklyHref);
                        blocklyLink.removeAttribute("data-rtl");
                    }
                }
            }
        }
        BrowserUtils.initTheme = initTheme;
        /**
         * Utility method to change the hash.
         * Pass keepHistory to retain an entry of the change in the browser history.
         */
        function changeHash(hash, keepHistory) {
            if (hash.charAt(0) != '#')
                hash = '#' + hash;
            if (keepHistory) {
                window.location.hash = hash;
            }
            else {
                window.history.replaceState('', '', hash);
            }
        }
        BrowserUtils.changeHash = changeHash;
        /**
         * Simple utility method to join urls.
         */
        function urlJoin(urlPath1, urlPath2) {
            if (!urlPath1)
                return urlPath2;
            if (!urlPath2)
                return urlPath1;
            var normalizedUrl1 = (urlPath1.indexOf('/') == urlPath1.length - 1) ?
                urlPath1.substring(0, urlPath1.length - 1) : urlPath1;
            var normalizedUrl2 = (urlPath2.indexOf('/') == 0) ?
                urlPath2.substring(1) : urlPath2;
            return normalizedUrl1 + "/" + normalizedUrl2;
        }
        BrowserUtils.urlJoin = urlJoin;
        /**
         * Simple utility method to join multiple urls.
         */
        function joinURLs() {
            var parts = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                parts[_i] = arguments[_i];
            }
            var result;
            if (parts) {
                for (var i = 0; i < parts.length; i++) {
                    result = urlJoin(result, parts[i]);
                }
            }
            return result;
        }
        BrowserUtils.joinURLs = joinURLs;
        function storageEstimateAsync() {
            var nav = hasNavigator() && window.navigator;
            if (nav && nav.storage && nav.storage.estimate)
                return nav.storage.estimate();
            else
                return Promise.resolve({});
        }
        BrowserUtils.storageEstimateAsync = storageEstimateAsync;
        BrowserUtils.scheduleStorageCleanup = hasNavigator() && navigator.storage && navigator.storage.estimate // some browser don't support this
            ? ts.pxtc.Util.throttle(function () {
                var MIN_QUOTA = 1000000; // 1Mb
                var MAX_USAGE_RATIO = 0.9; // max 90%
                storageEstimateAsync()
                    .then(function (estimate) {
                    // quota > 50%
                    pxt.debug("storage estimate: " + ((estimate.usage / estimate.quota * 100) >> 0) + "%, " + ((estimate.usage / 1000000) >> 0) + "/" + ((estimate.quota / 1000000) >> 0) + "Mb");
                    if (estimate.quota
                        && estimate.usage
                        && estimate.quota > MIN_QUOTA
                        && (estimate.usage / estimate.quota) > MAX_USAGE_RATIO) {
                        pxt.log("quota usage exceeded, clearing translations");
                        pxt.tickEvent('storage.cleanup');
                        return clearTranslationDbAsync();
                    }
                    return Promise.resolve();
                })
                    .catch(function (e) {
                    pxt.reportException(e);
                });
            }, 10000, false)
            : function () { };
        function stressTranslationsAsync() {
            var md = "...";
            for (var i = 0; i < 16; ++i)
                md += md + Math.random();
            console.log("adding entry " + md.length * 2 + " bytes");
            return Promise.delay(1)
                .then(function () { return translationDbAsync(); })
                .then(function (db) { return db.setAsync("foobar", Math.random().toString(), "", null, undefined, md); })
                .then(function () { return pxt.BrowserUtils.storageEstimateAsync(); })
                .then(function (estimate) { return !estimate.quota || estimate.usage / estimate.quota < 0.8 ? stressTranslationsAsync() : Promise.resolve(); });
        }
        BrowserUtils.stressTranslationsAsync = stressTranslationsAsync;
        var MemTranslationDb = /** @class */ (function () {
            function MemTranslationDb() {
                this.translations = {};
            }
            MemTranslationDb.prototype.key = function (lang, filename, branch) {
                return lang + "|" + filename + "|" + (branch || "master");
            };
            MemTranslationDb.prototype.get = function (lang, filename, branch) {
                return this.translations[this.key(lang, filename, branch)];
            };
            MemTranslationDb.prototype.getAsync = function (lang, filename, branch) {
                return Promise.resolve(this.get(lang, filename, branch));
            };
            MemTranslationDb.prototype.set = function (lang, filename, branch, etag, time, strings, md) {
                this.translations[this.key(lang, filename, branch)] = {
                    etag: etag,
                    time: time,
                    strings: strings,
                    md: md
                };
            };
            MemTranslationDb.prototype.setAsync = function (lang, filename, branch, etag, strings, md) {
                this.set(lang, filename, branch, etag, pxt.Util.now(), strings);
                return Promise.resolve();
            };
            MemTranslationDb.prototype.clearAsync = function () {
                this.translations = {};
                return Promise.resolve();
            };
            return MemTranslationDb;
        }());
        var IDBWrapper = /** @class */ (function () {
            function IDBWrapper(name, version, upgradeHandler, quotaExceededHandler) {
                this.name = name;
                this.version = version;
                this.upgradeHandler = upgradeHandler;
                this.quotaExceededHandler = quotaExceededHandler;
            }
            IDBWrapper.prototype.throwIfNotOpened = function () {
                if (!this._db) {
                    throw new Error("Database not opened; call IDBWrapper.openAsync() first");
                }
            };
            IDBWrapper.prototype.errorHandler = function (err, op, reject) {
                console.error(new Error(this.name + " IDBWrapper error for " + op + ": " + err.message));
                reject(err);
                // special case for quota exceeded
                if (err.name == "QuotaExceededError") {
                    // oops, we ran out of space
                    pxt.log("storage quota exceeded...");
                    pxt.tickEvent('storage.quotaexceedederror');
                    if (this.quotaExceededHandler)
                        this.quotaExceededHandler();
                }
            };
            IDBWrapper.prototype.getObjectStore = function (name, mode) {
                if (mode === void 0) { mode = "readonly"; }
                this.throwIfNotOpened();
                var transaction = this._db.transaction([name], mode);
                return transaction.objectStore(name);
            };
            IDBWrapper.deleteDatabaseAsync = function (name) {
                return new Promise(function (resolve, reject) {
                    var idbFactory = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
                    var request = idbFactory.deleteDatabase(name);
                    request.onsuccess = function () { return resolve(); };
                    request.onerror = function () { return reject(request.error); };
                });
            };
            IDBWrapper.prototype.openAsync = function () {
                var _this = this;
                return new Promise(function (resolve, reject) {
                    var idbFactory = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
                    var request = idbFactory.open(_this.name, _this.version);
                    request.onsuccess = function () {
                        _this._db = request.result;
                        resolve();
                    };
                    request.onerror = function () { return _this.errorHandler(request.error, "open", reject); };
                    request.onupgradeneeded = function (ev) { return _this.upgradeHandler(ev, request); };
                });
            };
            IDBWrapper.prototype.getAsync = function (storeName, id) {
                var _this = this;
                return new Promise(function (resolve, reject) {
                    var store = _this.getObjectStore(storeName);
                    var request = store.get(id);
                    request.onsuccess = function () { return resolve(request.result); };
                    request.onerror = function () { return _this.errorHandler(request.error, "get", reject); };
                });
            };
            IDBWrapper.prototype.getAllAsync = function (storeName) {
                var _this = this;
                return new Promise(function (resolve, reject) {
                    var store = _this.getObjectStore(storeName);
                    var cursor = store.openCursor();
                    var data = [];
                    cursor.onsuccess = function () {
                        if (cursor.result) {
                            data.push(cursor.result.value);
                            cursor.result.continue();
                        }
                        else {
                            resolve(data);
                        }
                    };
                    cursor.onerror = function () { return _this.errorHandler(cursor.error, "getAll", reject); };
                });
            };
            IDBWrapper.prototype.setAsync = function (storeName, data) {
                var _this = this;
                return new Promise(function (resolve, reject) {
                    var store = _this.getObjectStore(storeName, "readwrite");
                    var request;
                    if (typeof data.id !== "undefined" && data.id !== null) {
                        request = store.put(data);
                    }
                    else {
                        request = store.add(data);
                    }
                    request.onsuccess = function () { return resolve(); };
                    request.onerror = function () { return _this.errorHandler(request.error, "set", reject); };
                });
            };
            IDBWrapper.prototype.deleteAsync = function (storeName, id) {
                var _this = this;
                return new Promise(function (resolve, reject) {
                    var store = _this.getObjectStore(storeName, "readwrite");
                    var request = store.delete(id);
                    request.onsuccess = function () { return resolve(); };
                    request.onerror = function () { return _this.errorHandler(request.error, "delete", reject); };
                });
            };
            IDBWrapper.prototype.deleteAllAsync = function (storeName) {
                var _this = this;
                return new Promise(function (resolve, reject) {
                    var store = _this.getObjectStore(storeName, "readwrite");
                    var request = store.clear();
                    request.onsuccess = function () { return resolve(); };
                    request.onerror = function () { return _this.errorHandler(request.error, "deleteAll", reject); };
                });
            };
            return IDBWrapper;
        }());
        BrowserUtils.IDBWrapper = IDBWrapper;
        var IndexedDbTranslationDb = /** @class */ (function () {
            function IndexedDbTranslationDb(db) {
                this.db = db;
                this.mem = new MemTranslationDb();
            }
            IndexedDbTranslationDb.dbName = function () {
                return "__pxt_translations_" + (pxt.appTarget.id || "");
            };
            IndexedDbTranslationDb.createAsync = function () {
                function openAsync() {
                    var idbWrapper = new IDBWrapper(IndexedDbTranslationDb.dbName(), 2, function (ev, r) {
                        var db = r.result;
                        db.createObjectStore(IndexedDbTranslationDb.TABLE, { keyPath: IndexedDbTranslationDb.KEYPATH });
                    }, function () {
                        // quota exceeeded, delete db
                        clearTranslationDbAsync().catch(function (e) { });
                    });
                    return idbWrapper.openAsync()
                        .then(function () { return new IndexedDbTranslationDb(idbWrapper); });
                }
                return openAsync()
                    .catch(function (e) {
                    console.log("db: failed to open database, try delete entire store...");
                    return IDBWrapper.deleteDatabaseAsync(IndexedDbTranslationDb.dbName())
                        .then(function () { return openAsync(); });
                });
            };
            IndexedDbTranslationDb.prototype.getAsync = function (lang, filename, branch) {
                var _this = this;
                lang = (lang || "en-US").toLowerCase(); // normalize locale
                var id = this.mem.key(lang, filename, branch);
                var r = this.mem.get(lang, filename, branch);
                if (r)
                    return Promise.resolve(r);
                return this.db.getAsync(IndexedDbTranslationDb.TABLE, id)
                    .then(function (res) {
                    if (res) {
                        // store in-memory so that we don't try to download again
                        _this.mem.set(lang, filename, branch, res.etag, res.time, res.strings);
                        return Promise.resolve(res);
                    }
                    return Promise.resolve(undefined);
                })
                    .catch(function (e) {
                    return Promise.resolve(undefined);
                });
            };
            IndexedDbTranslationDb.prototype.setAsync = function (lang, filename, branch, etag, strings, md) {
                var _this = this;
                lang = (lang || "en-US").toLowerCase(); // normalize locale
                var id = this.mem.key(lang, filename, branch);
                var time = pxt.Util.now();
                this.mem.set(lang, filename, branch, etag, time, strings, md);
                if (strings) {
                    Object.keys(strings).filter(function (k) { return !strings[k]; }).forEach(function (k) { return delete strings[k]; });
                }
                var entry = {
                    id: id,
                    etag: etag,
                    time: time,
                    strings: strings,
                    md: md
                };
                return this.db.setAsync(IndexedDbTranslationDb.TABLE, entry)
                    .finally(function () { return BrowserUtils.scheduleStorageCleanup(); }) // schedule a cleanpu
                    .catch(function (e) {
                    console.log("db: set failed (" + e.message + "), recycling...");
                    return _this.clearAsync();
                });
            };
            IndexedDbTranslationDb.prototype.clearAsync = function () {
                return this.db.deleteAllAsync(IndexedDbTranslationDb.TABLE)
                    .then(function () { return console.debug("db: all clean"); })
                    .catch(function (e) {
                    console.error('db: failed to delete all');
                });
            };
            IndexedDbTranslationDb.TABLE = "files";
            IndexedDbTranslationDb.KEYPATH = "id";
            return IndexedDbTranslationDb;
        }());
        // wired up in the app to store translations in pouchdb. MAY BE UNDEFINED!
        var _translationDbPromise;
        function translationDbAsync() {
            if (pxt.Util.isNodeJS)
                return Promise.resolve(new MemTranslationDb());
            // try indexed db
            if (!_translationDbPromise)
                _translationDbPromise = IndexedDbTranslationDb.createAsync()
                    .catch(function () { return new MemTranslationDb(); });
            return _translationDbPromise;
        }
        BrowserUtils.translationDbAsync = translationDbAsync;
        function clearTranslationDbAsync() {
            function deleteDbAsync() {
                var n = IndexedDbTranslationDb.dbName();
                return IDBWrapper.deleteDatabaseAsync(n)
                    .then(function () {
                    _translationDbPromise = undefined;
                })
                    .catch(function (e) {
                    pxt.log("db: failed to delete " + n);
                    _translationDbPromise = undefined;
                });
            }
            if (!_translationDbPromise)
                return deleteDbAsync();
            return _translationDbPromise
                .then(function (db) { return db.clearAsync(); })
                .catch(function (e) { return deleteDbAsync().done(); });
        }
        BrowserUtils.clearTranslationDbAsync = clearTranslationDbAsync;
        function getTutorialInfoHash(code) {
            // the code strings are parsed from markdown, so when the
            // markdown changes the blocks will also be invalidated
            var input = JSON.stringify(code) + pxt.appTarget.versions.pxt + "_" + pxt.appTarget.versions.target;
            return pxtc.U.sha256(input);
        }
        BrowserUtils.getTutorialInfoHash = getTutorialInfoHash;
        function getTutorialInfoKey(filename, branch) {
            return filename + "|" + (branch || "master");
        }
        var TutorialInfoIndexedDb = /** @class */ (function () {
            function TutorialInfoIndexedDb(db) {
                this.db = db;
            }
            TutorialInfoIndexedDb.dbName = function () {
                return "__pxt_tutorialinfo_" + (pxt.appTarget.id || "");
            };
            TutorialInfoIndexedDb.createAsync = function () {
                function openAsync() {
                    var idbWrapper = new pxt.BrowserUtils.IDBWrapper(TutorialInfoIndexedDb.dbName(), 2, function (ev, r) {
                        var db = r.result;
                        db.createObjectStore(TutorialInfoIndexedDb.TABLE, { keyPath: TutorialInfoIndexedDb.KEYPATH });
                    }, function () {
                        // quota exceeeded, clear db
                        pxt.BrowserUtils.IDBWrapper.deleteDatabaseAsync(TutorialInfoIndexedDb.dbName());
                    });
                    return idbWrapper.openAsync()
                        .then(function () { return new TutorialInfoIndexedDb(idbWrapper); });
                }
                return openAsync()
                    .catch(function (e) {
                    console.log("db: failed to open tutorial info database, try delete entire store...");
                    return pxt.BrowserUtils.IDBWrapper.deleteDatabaseAsync(TutorialInfoIndexedDb.dbName())
                        .then(function () { return openAsync(); });
                });
            };
            TutorialInfoIndexedDb.prototype.getAsync = function (filename, code, branch) {
                var _this = this;
                var key = getTutorialInfoKey(filename, branch);
                var hash = getTutorialInfoHash(code);
                return this.db.getAsync(TutorialInfoIndexedDb.TABLE, key)
                    .then(function (res) {
                    /* tslint:disable:possible-timing-attack (this is not a security-sensitive codepath) */
                    if (res && res.hash == hash) {
                        return res;
                    }
                    /* tslint:enable:possible-timing-attack */
                    // delete stale db entry
                    _this.db.deleteAsync(TutorialInfoIndexedDb.TABLE, key);
                    return undefined;
                });
            };
            TutorialInfoIndexedDb.prototype.setAsync = function (filename, blocks, code, branch) {
                pxt.perf.measureStart("tutorial info db setAsync");
                var key = getTutorialInfoKey(filename, branch);
                var hash = getTutorialInfoHash(code);
                return this.setWithHashAsync(filename, blocks, hash);
            };
            TutorialInfoIndexedDb.prototype.setWithHashAsync = function (filename, blocks, hash, branch) {
                pxt.perf.measureStart("tutorial info db setAsync");
                var key = getTutorialInfoKey(filename, branch);
                var entry = {
                    id: key,
                    hash: hash,
                    blocks: blocks
                };
                return this.db.setAsync(TutorialInfoIndexedDb.TABLE, entry)
                    .then(function () {
                    pxt.perf.measureEnd("tutorial info db setAsync");
                });
            };
            TutorialInfoIndexedDb.prototype.clearAsync = function () {
                return this.db.deleteAllAsync(TutorialInfoIndexedDb.TABLE)
                    .then(function () { return console.debug("db: all clean"); })
                    .catch(function (e) {
                    console.error('db: failed to delete all');
                });
            };
            TutorialInfoIndexedDb.TABLE = "info";
            TutorialInfoIndexedDb.KEYPATH = "id";
            return TutorialInfoIndexedDb;
        }());
        var _tutorialInfoDbPromise;
        function tutorialInfoDbAsync() {
            if (!_tutorialInfoDbPromise)
                _tutorialInfoDbPromise = TutorialInfoIndexedDb.createAsync();
            return _tutorialInfoDbPromise;
        }
        BrowserUtils.tutorialInfoDbAsync = tutorialInfoDbAsync;
        function clearTutorialInfoDbAsync() {
            function deleteDbAsync() {
                var n = TutorialInfoIndexedDb.dbName();
                return IDBWrapper.deleteDatabaseAsync(n)
                    .then(function () {
                    _tutorialInfoDbPromise = undefined;
                })
                    .catch(function (e) {
                    pxt.log("db: failed to delete " + n);
                    _tutorialInfoDbPromise = undefined;
                });
            }
            if (!_tutorialInfoDbPromise)
                return deleteDbAsync();
            return _tutorialInfoDbPromise
                .then(function (db) { return db.clearAsync(); })
                .catch(function (e) { return deleteDbAsync().done(); });
        }
        BrowserUtils.clearTutorialInfoDbAsync = clearTutorialInfoDbAsync;
        BrowserUtils.pointerEvents = (function () {
            if (hasPointerEvents()) {
                return {
                    up: "pointerup",
                    down: ["pointerdown"],
                    move: "pointermove",
                    enter: "pointerenter",
                    leave: "pointerleave"
                };
            }
            else if (isTouchEnabled()) {
                return {
                    up: "mouseup",
                    down: ["mousedown", "touchstart"],
                    move: "touchmove",
                    enter: "touchenter",
                    leave: "touchend"
                };
            }
            else {
                return {
                    up: "mouseup",
                    down: ["mousedown"],
                    move: "mousemove",
                    enter: "mouseenter",
                    leave: "mouseleave"
                };
            }
        })();
        function getPageX(event) {
            if ("pageX" in event) {
                return event.pageX;
            }
            else {
                return event.changedTouches[0].pageX;
            }
        }
        BrowserUtils.getPageX = getPageX;
        function getPageY(event) {
            if ("pageY" in event) {
                return event.pageY;
            }
            else {
                return event.changedTouches[0].pageY;
            }
        }
        BrowserUtils.getPageY = getPageY;
        function getClientX(event) {
            if ("clientX" in event) {
                return event.clientX;
            }
            else {
                return event.changedTouches[0].clientX;
            }
        }
        BrowserUtils.getClientX = getClientX;
        function getClientY(event) {
            if ("clientY" in event) {
                return event.clientY;
            }
            else {
                return event.changedTouches[0].clientY;
            }
        }
        BrowserUtils.getClientY = getClientY;
        function popupWindow(url, title, popUpWidth, popUpHeight) {
            try {
                var winLeft = window.screenLeft ? window.screenLeft : window.screenX;
                var winTop = window.screenTop ? window.screenTop : window.screenY;
                var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                var left = ((width / 2) - (popUpWidth / 2)) + winLeft;
                var top_1 = ((height / 2) - (popUpHeight / 2)) + winTop;
                var popupWindow_1 = window.open(url, title, "width=" + popUpWidth + ", height=" + popUpHeight + ", top=" + top_1 + ", left=" + left);
                if (popupWindow_1.focus) {
                    popupWindow_1.focus();
                }
                return popupWindow_1;
            }
            catch (e) {
                // Error opening popup
                pxt.tickEvent('pxt.popupError', { url: url, msg: e.message });
                return null;
            }
        }
        BrowserUtils.popupWindow = popupWindow;
        // Keep these helpers unified with pxtsim/runtime.ts
        function containsClass(el, classes) {
            return splitClasses(classes).every(function (cls) { return containsSingleClass(el, cls); });
            function containsSingleClass(el, cls) {
                if (el.classList) {
                    return el.classList.contains(cls);
                }
                else {
                    var classes_1 = (el.className + "").split(/\s+/);
                    return !(classes_1.indexOf(cls) < 0);
                }
            }
        }
        BrowserUtils.containsClass = containsClass;
        function addClass(el, classes) {
            splitClasses(classes).forEach(function (cls) { return addSingleClass(el, cls); });
            function addSingleClass(el, cls) {
                if (el.classList) {
                    el.classList.add(cls);
                }
                else {
                    var classes_2 = (el.className + "").split(/\s+/);
                    if (classes_2.indexOf(cls) < 0) {
                        el.className.baseVal += " " + cls;
                    }
                }
            }
        }
        BrowserUtils.addClass = addClass;
        function removeClass(el, classes) {
            splitClasses(classes).forEach(function (cls) { return removeSingleClass(el, cls); });
            function removeSingleClass(el, cls) {
                if (el.classList) {
                    el.classList.remove(cls);
                }
                else {
                    el.className.baseVal = (el.className + "")
                        .split(/\s+/)
                        .filter(function (c) { return c != cls; })
                        .join(" ");
                }
            }
        }
        BrowserUtils.removeClass = removeClass;
        function splitClasses(classes) {
            return classes.split(/\s+/).filter(function (s) { return !!s; });
        }
        function getCookieLang() {
            var cookiePropRegex = new RegExp(pxt.Util.escapeForRegex(pxt.Util.pxtLangCookieId) + "=(.*?)(?:;|$)");
            var cookieValue = cookiePropRegex.exec(document.cookie);
            return cookieValue && cookieValue[1] || null;
        }
        BrowserUtils.getCookieLang = getCookieLang;
        function setCookieLang(langId, docs) {
            if (docs === void 0) { docs = false; }
            if (!pxt.Util.allLanguages[langId]) {
                return;
            }
            if (langId !== getCookieLang()) {
                pxt.tickEvent("menu.lang.setcookielang", { lang: langId, docs: "" + docs });
                var expiration = new Date();
                expiration.setTime(expiration.getTime() + (pxt.Util.langCookieExpirationDays * 24 * 60 * 60 * 1000));
                document.cookie = pxt.Util.pxtLangCookieId + "=" + langId + "; expires=" + expiration.toUTCString() + "; path=/";
            }
        }
        BrowserUtils.setCookieLang = setCookieLang;
        function cacheBustingUrl(url) {
            if (!url)
                return url;
            if (/[?&]rnd=/.test(url))
                return url; // already busted
            return "" + url + (url.indexOf('?') > 0 ? "&" : "?") + "rnd=" + Math.random();
        }
        BrowserUtils.cacheBustingUrl = cacheBustingUrl;
    })(BrowserUtils = pxt.BrowserUtils || (pxt.BrowserUtils = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var commands;
    (function (commands) {
        commands.deployCoreAsync = undefined;
        commands.deployFallbackAsync = undefined;
        commands.hasDeployFn = function () { return commands.deployCoreAsync || commands.deployFallbackAsync; };
        commands.deployAsync = function (r, d) {
            return (commands.deployCoreAsync || commands.deployFallbackAsync)(r, d);
        };
        commands.patchCompileResultAsync = undefined;
        commands.browserDownloadAsync = undefined;
        commands.saveOnlyAsync = undefined;
        commands.renderBrowserDownloadInstructions = undefined;
        commands.renderUsbPairDialog = undefined;
        commands.showUploadInstructionsAsync = undefined;
        commands.saveProjectAsync = undefined;
        commands.electronDeployAsync = undefined; // A pointer to the Electron deploy function, so that targets can access it in their extension.ts
        commands.webUsbPairDialogAsync = undefined;
        commands.onTutorialCompleted = undefined;
    })(commands = pxt.commands || (pxt.commands = {}));
})(pxt || (pxt = {}));
/// <reference path="../localtypings/pxtarget.d.ts"/>
var pxt;
(function (pxt) {
    var lzmaPromise;
    function getLzmaAsync() {
        var lzmaPromise;
        if (!lzmaPromise) {
            if (pxt.U.isNodeJS)
                lzmaPromise = Promise.resolve(require("lzma"));
            else
                lzmaPromise = Promise.resolve(window.LZMA);
            lzmaPromise.then(function (res) {
                if (!res)
                    pxt.reportError('lzma', 'failed to load');
                return res;
            });
        }
        return lzmaPromise;
    }
    function lzmaDecompressAsync(buf) {
        return getLzmaAsync()
            .then(function (lzma) { return new Promise(function (resolve, reject) {
            try {
                lzma.decompress(buf, function (res, error) {
                    if (error)
                        pxt.debug("lzma decompression failed");
                    resolve(error ? undefined : res);
                });
            }
            catch (e) {
                if (e)
                    pxt.debug("lzma decompression failed");
                resolve(undefined);
            }
        }); });
    }
    pxt.lzmaDecompressAsync = lzmaDecompressAsync;
    function lzmaCompressAsync(text) {
        return getLzmaAsync()
            .then(function (lzma) { return new Promise(function (resolve, reject) {
            try {
                lzma.compress(text, 7, function (res, error) {
                    if (error)
                        pxt.reportException(error);
                    resolve(error ? undefined : new Uint8Array(res));
                });
            }
            catch (e) {
                pxt.reportException(e);
                resolve(undefined);
            }
        }); });
    }
    pxt.lzmaCompressAsync = lzmaCompressAsync;
})(pxt || (pxt = {}));
// preprocess C++ file to find functions exposed to pxt
(function (pxt) {
    var cpp;
    (function (cpp) {
        var U = pxtc.Util;
        var lf = U.lf;
        function parseExpr(e) {
            e = e.trim();
            e = e.replace(/^\(/, "");
            e = e.replace(/\)$/, "");
            e = e.trim();
            if (/^-/.test(e) && parseExpr(e.slice(1)) != null)
                return -parseExpr(e.slice(1));
            if (/^0x[0-9a-f]+$/i.exec(e))
                return parseInt(e.slice(2), 16);
            if (/^0b[01]+$/i.exec(e))
                return parseInt(e.slice(2), 2);
            if (/^0\d+$/i.exec(e))
                return parseInt(e, 8);
            if (/^\d+$/i.exec(e))
                return parseInt(e, 10);
            return null;
        }
        var vmKeepFunctions = {
            "pxt::mkAction": 1,
            "pxt::dumpPerfCounters": 1,
            "pxt::deepSleep": 1,
            "pxt::getConfig": 1,
            "pxtrt::mkMap": 1,
            "pxtrt::mapSet": 1,
            "pxtrt::stclo": 1,
            "pxtrt::mklocRef": 1,
            "pxtrt::stlocRef": 1,
            "pxtrt::ldlocRef": 1,
            "pxtrt::panic": 1,
        };
        function nsWriter(nskw) {
            if (nskw === void 0) { nskw = "namespace"; }
            var text = "";
            var currNs = "";
            var setNs = function (ns, over) {
                if (over === void 0) { over = ""; }
                if (currNs == ns)
                    return;
                if (currNs)
                    text += "}\n";
                if (ns)
                    text += over || (nskw + " " + ns + " {\n");
                currNs = ns;
            };
            var indent = "    ";
            return {
                setNs: setNs,
                clear: function () {
                    text = "";
                    currNs = "";
                },
                write: function (s) {
                    if (!s.trim())
                        text += "\n";
                    else {
                        s = s.trim()
                            .replace(/^\s*/mg, indent)
                            .replace(/^(\s*)\*/mg, function (f, s) { return s + " *"; });
                        text += s + "\n";
                    }
                },
                incrIndent: function () {
                    indent += "    ";
                },
                decrIndent: function () {
                    indent = indent.slice(4);
                },
                finish: function () {
                    setNs("");
                    return text;
                }
            };
        }
        cpp.nsWriter = nsWriter;
        function parseCppInt(v) {
            if (!v)
                return null;
            v = v.trim();
            var mm = /^\((.*)\)/.exec(v);
            if (mm)
                v = mm[1];
            if (/^-?(\d+|0[xX][0-9a-fA-F]+)$/.test(v))
                return parseInt(v);
            return null;
        }
        cpp.parseCppInt = parseCppInt;
        var prevExtInfos = {};
        var PkgConflictError = /** @class */ (function (_super) {
            __extends(PkgConflictError, _super);
            function PkgConflictError(msg) {
                var _this = _super.call(this, msg) || this;
                _this.isUserError = true;
                _this.message = msg;
                return _this;
            }
            return PkgConflictError;
        }(Error));
        cpp.PkgConflictError = PkgConflictError;
        function getExtensionInfo(mainPkg) {
            var pkgSnapshot = {
                "__appVariant": pxt.appTargetVariant || ""
            };
            var constsName = "dal.d.ts";
            var sourcePath = "/source/";
            var disabledDeps = "";
            var mainDeps = [];
            // order shouldn't matter for c++ compilation,
            // so use a stable order to prevent order changes from fetching a new hex file
            var mainPkgDeps = mainPkg.sortedDeps(true)
                .sort(function (a, b) {
                if (a.id == "this")
                    return 1;
                else if (b.id == "this")
                    return -1;
                else
                    return U.strcmp(a.id, b.id);
            });
            for (var _i = 0, mainPkgDeps_1 = mainPkgDeps; _i < mainPkgDeps_1.length; _i++) {
                var pkg = mainPkgDeps_1[_i];
                if (pkg.disablesVariant(pxt.appTargetVariant) ||
                    pkg.resolvedDependencies().some(function (d) { return d.disablesVariant(pxt.appTargetVariant); })) {
                    if (disabledDeps)
                        disabledDeps += ", ";
                    disabledDeps += pkg.id;
                    pxt.debug("disable variant " + pxt.appTargetVariant + " due to " + pkg.id);
                    continue;
                }
                mainDeps.push(pkg);
                pkg.addSnapshot(pkgSnapshot, [constsName, ".h", ".cpp"]);
            }
            var key = JSON.stringify(pkgSnapshot);
            var prevInfo = prevExtInfos[key];
            if (prevInfo) {
                pxt.debug("Using cached extinfo");
                var r = U.flatClone(prevInfo);
                r.disabledDeps = disabledDeps;
                return r;
            }
            pxt.debug("Generating new extinfo");
            var res = pxtc.emptyExtInfo();
            res.disabledDeps = disabledDeps;
            var compileService = pxt.appTarget.compileService;
            if (!compileService)
                compileService = {
                    gittag: "none",
                    serviceId: "nocompile"
                };
            compileService = U.clone(compileService);
            var compile = mainPkg.getTargetOptions();
            if (!compile)
                compile = {
                    isNative: false,
                    hasHex: false,
                    switches: {}
                };
            var isPlatformio = !!compileService.platformioIni;
            var isCodal = compileService.buildEngine == "codal" || compileService.buildEngine == "dockercodal";
            var isDockerMake = compileService.buildEngine == "dockermake" || compileService.buildEngine == "dockercross";
            var isYotta = !isPlatformio && !isCodal && !isDockerMake;
            var isVM = compile.nativeType == pxtc.NATIVE_TYPE_VM;
            if (isPlatformio)
                sourcePath = "/src/";
            else if (isCodal || isDockerMake)
                sourcePath = "/pxtapp/";
            var pxtConfig = "// Configuration defines\n";
            var pointersInc = "\nPXT_SHIMS_BEGIN\n";
            var pointerIncPre = "";
            var abiInc = "";
            var includesInc = "#include \"pxt.h\"\n";
            var thisErrors = "";
            var dTsNamespace = "";
            var err = function (s) { return thisErrors += "   " + fileName + "(" + lineNo + "): " + s + "\n"; };
            var lineNo = 0;
            var fileName = "";
            var protos = nsWriter("namespace");
            var shimsDTS = nsWriter("declare namespace");
            var enumsDTS = nsWriter("declare namespace");
            var allErrors = "";
            var knownEnums = {};
            var vmVisitedFunctions = {};
            var enumVals = {
                "true": "1",
                "false": "0",
                "null": "0",
                "NULL": "0",
            };
            // we sometimes append _ to C++ names to avoid name clashes
            function toJs(name) {
                return name.trim().replace(/[\_\*]$/, "");
            }
            var makefile = "";
            for (var _a = 0, mainDeps_1 = mainDeps; _a < mainDeps_1.length; _a++) {
                var pkg = mainDeps_1[_a];
                if (pkg.getFiles().indexOf(constsName) >= 0) {
                    var src = pkg.host().readFile(pkg, constsName);
                    pxt.Util.assert(!!src, constsName + " not found in " + pkg.id);
                    src.split(/\r?\n/).forEach(function (ln) {
                        var m = /^\s*(\w+) = (.*),/.exec(ln);
                        if (m) {
                            enumVals[m[1]] = m[2];
                        }
                    });
                }
                if (!makefile && pkg.getFiles().indexOf("Makefile") >= 0) {
                    makefile = pkg.host().readFile(pkg, "Makefile");
                }
            }
            var hash_if_options = ["0", "false", "PXT_UTF8"];
            var cpp_options = {};
            if (compile.switches.boxDebug)
                cpp_options["PXT_BOX_DEBUG"] = 1;
            if (compile.utf8)
                cpp_options["PXT_UTF8"] = 1;
            if (compile.switches.profile)
                cpp_options["PXT_PROFILE"] = 1;
            if (compile.switches.gcDebug)
                cpp_options["PXT_GC_DEBUG"] = 1;
            if (compile.switches.numFloat)
                cpp_options["PXT_USE_FLOAT"] = 1;
            if (compile.nativeType == pxtc.NATIVE_TYPE_VM)
                cpp_options["PXT_VM"] = 1;
            function stripComments(ln) {
                return ln.replace(/\/\/.*/, "").replace(/\/\*/, "");
            }
            var enumVal = 0;
            var inEnum = false;
            var currNs = "";
            var currDocComment = "";
            var currAttrs = "";
            var inDocComment = false;
            function handleComments(ln) {
                if (inEnum)
                    return true;
                if (/^\s*\/\*\*/.test(ln)) {
                    inDocComment = true;
                    currDocComment = ln + "\n";
                    if (/\*\//.test(ln))
                        inDocComment = false;
                    return true;
                }
                if (inDocComment) {
                    currDocComment += ln + "\n";
                    if (/\*\//.test(ln)) {
                        inDocComment = false;
                    }
                    return true;
                }
                if (/^\s*\/\/%/.test(ln)) {
                    currAttrs += ln + "\n";
                    return true;
                }
                return false;
            }
            function enterEnum(cpname, brace) {
                inEnum = true;
                enumVal = -1;
                enumsDTS.write("");
                enumsDTS.write("");
                if (currAttrs || currDocComment) {
                    enumsDTS.write(currDocComment);
                    enumsDTS.write(currAttrs);
                    currAttrs = "";
                    currDocComment = "";
                }
                enumsDTS.write("declare const enum " + toJs(cpname) + " " + brace);
                knownEnums[cpname] = true;
            }
            function processEnumLine(ln) {
                var lnNC = stripComments(ln);
                if (inEnum && lnNC.indexOf("}") >= 0) {
                    inEnum = false;
                    enumsDTS.write("}");
                }
                if (!inEnum)
                    return;
                // parse the enum case, with lots of optional stuff (?)
                var mm = /^\s*(\w+)\s*(=\s*(.*?))?,?\s*$/.exec(lnNC);
                if (mm) {
                    var nm = mm[1];
                    var v = mm[3];
                    var opt = "";
                    if (v) {
                        // user-supplied value
                        v = v.trim();
                        var curr = U.lookup(enumVals, v);
                        if (curr != null) {
                            opt = "  // " + v;
                            v = curr;
                        }
                        enumVal = parseCppInt(v);
                        if (enumVal == null)
                            err("cannot determine value of " + lnNC);
                    }
                    else {
                        // no user-supplied value
                        enumVal++;
                        v = enumVal + "";
                    }
                    enumsDTS.write("    " + toJs(nm) + " = " + v + "," + opt);
                }
                else {
                    enumsDTS.write(ln);
                }
            }
            function finishNamespace() {
                shimsDTS.setNs("");
                shimsDTS.write("");
                shimsDTS.write("");
                if (currAttrs || currDocComment) {
                    shimsDTS.write(currDocComment);
                    shimsDTS.write(currAttrs);
                    currAttrs = "";
                    currDocComment = "";
                }
            }
            function parseArg(parsedAttrs, s) {
                s = s.trim();
                var m = /(.*)=\s*(-?\w+)$/.exec(s);
                var defl = "";
                var qm = "";
                if (m) {
                    defl = m[2];
                    qm = "?";
                    s = m[1].trim();
                }
                m = /^(.*?)(\w+)$/.exec(s);
                if (!m) {
                    err("invalid argument: " + s);
                    return {
                        name: "???",
                        type: "int"
                    };
                }
                var argName = m[2];
                if (parsedAttrs.paramDefl[argName]) {
                    defl = parsedAttrs.paramDefl[argName];
                    qm = "?";
                }
                var numVal = defl ? U.lookup(enumVals, defl) : null;
                if (numVal != null)
                    defl = numVal;
                if (defl) {
                    if (parseCppInt(defl) == null)
                        err("Invalid default value (non-integer): " + defl);
                    currAttrs += " " + argName + ".defl=" + defl;
                }
                return {
                    name: argName + qm,
                    type: m[1]
                };
            }
            function parseCpp(src, isHeader) {
                currNs = "";
                currDocComment = "";
                currAttrs = "";
                inDocComment = false;
                var indexedInstanceAttrs;
                var indexedInstanceIdx = -1;
                // replace #if 0 .... #endif with newlines
                src = src.replace(/^(\s*#\s*if\s+(\w+)\s*$)([^]*?)(^\s*#\s*(elif|else|endif)\s*$)/mg, function (f, _if, arg, middle, _endif) {
                    return hash_if_options.indexOf(arg) >= 0 && !cpp_options[arg] ?
                        _if + middle.replace(/[^\n]/g, "") + _endif : f;
                });
                // special handling of C++ namespace that ends with Methods (e.g. FooMethods)
                // such a namespace will be converted into a TypeScript interface
                // this enables simple objects with methods to be defined. See, for example:
                // https://github.com/microsoft/pxt-microbit/blob/master/libs/core/buffer.cpp
                // within that namespace, the first parameter of each function should have
                // the type Foo
                function interfaceName() {
                    var n = currNs.replace(/Methods$/, "");
                    if (n == currNs)
                        return null;
                    return n;
                }
                lineNo = 0;
                // the C++ types we can map to TypeScript
                function mapType(tp) {
                    switch (tp.replace(/\s+/g, "")) {
                        case "void": return "void";
                        // TODO: need int16_t
                        case "int32_t":
                        case "int":
                            return "int32";
                        case "uint32_t":
                        case "unsigned":
                            return "uint32";
                        case "TNumber":
                        case "float":
                        case "double":
                            return "number";
                        case "uint16_t": return "uint16";
                        case "int16_t":
                        case "short": return "int16";
                        case "uint8_t":
                        case "byte": return "uint8";
                        case "int8_t":
                        case "sbyte": return "int8";
                        case "bool":
                            if (compile.shortPointers)
                                err("use 'boolean' not 'bool' on 8 bit targets");
                            return "boolean";
                        case "StringData*": return "string";
                        case "String": return "string";
                        case "ImageLiteral_": return "string";
                        case "ImageLiteral": return "string";
                        case "Action": return "() => void";
                        case "TValue": return "any";
                        default:
                            return toJs(tp);
                        //err("Don't know how to map type: " + tp)
                        //return "any"
                    }
                }
                function mapRunTimeType(tp) {
                    tp = tp.replace(/\s+/g, "");
                    switch (tp) {
                        case "int32_t":
                        case "uint32_t":
                        case "unsigned":
                        case "uint16_t":
                        case "int16_t":
                        case "short":
                        case "uint8_t":
                        case "byte":
                        case "int8_t":
                        case "sbyte":
                        case "int":
                        case "ramint_t":
                            return "I";
                        case "void": return "V";
                        case "float": return "F";
                        case "TNumber": return "N";
                        case "TValue": return "T";
                        case "bool": return "B";
                        case "double": return "D";
                        case "ImageLiteral_":
                            return "T";
                        case "String":
                            return "S";
                        default:
                            if (U.lookup(knownEnums, tp))
                                return "I";
                            return "_" + tp.replace(/[\*_]+$/, "");
                    }
                }
                function generateVMWrapper(fi, argTypes) {
                    if (argTypes[0] == "FiberContext*")
                        return "::" + fi.name; // no wrapper
                    var wrap = "_wrp_" + fi.name.replace(/:/g, "_");
                    if (vmVisitedFunctions[fi.name])
                        return wrap;
                    vmVisitedFunctions[fi.name] = true;
                    /*
                    void call_getConfig(FiberContext *ctx) {
                        int a0 = toInt(ctx->sp[0]);
                        int a1 = toInt(ctx->r0); // last argument in r0
                        int r = getConfig(a0, a1);
                        ctx->r0 = fromInt(r);
                        ctx->sp += 1;
                    }
                    */
                    pointerIncPre += "\nvoid " + wrap + "(FiberContext *ctx) {\n";
                    var numArgs = argTypes.length;
                    var refs = [];
                    var needsStackSave = false;
                    var allConvs = "";
                    for (var i = 0; i < numArgs; ++i) {
                        var ind = fi.argsFmt[i + 1];
                        var tp = argTypes[i];
                        var conv = ind == "I" ? "toInt" :
                            ind == "B" ? "numops::toBool" :
                                "";
                        var inp = i == numArgs - 1 ? "ctx->r0" : "ctx->sp[" + (numArgs - i - 2) + "]";
                        var argPref = "";
                        switch (tp) {
                            case "TValue":
                            case "TNumber":
                                break;
                            case "Action":
                                conv = "asRefAction";
                                break;
                            case "String":
                                conv = "convertToString";
                                argPref = "ctx, ";
                                needsStackSave = true;
                                break;
                            default:
                                if (!conv)
                                    conv = "as" + tp.replace(/\*/g, "");
                                break;
                        }
                        allConvs += "  " + tp + " a" + i + " = (" + tp + ") " + conv + "(" + argPref + inp + ");\n";
                        refs.push("a" + i);
                    }
                    if (needsStackSave)
                        pointerIncPre += "  auto prevSP = ctx->sp;\n";
                    pointerIncPre += allConvs;
                    if (needsStackSave)
                        pointerIncPre += "  if (panicCode) { ctx->sp = prevSP; return; }\n";
                    var call = "::" + fi.name + "(" + refs.join(", ") + ")";
                    if (fi.argsFmt[0] == "V") {
                        pointerIncPre += "  " + call + ";\n";
                        pointerIncPre += "  ctx->r0 = NULL;\n";
                    }
                    else if (fi.argsFmt[0] == "I") {
                        pointerIncPre += "  ctx->r0 = fromInt(" + call + ");\n";
                    }
                    else if (fi.argsFmt[0] == "B") {
                        pointerIncPre += "  ctx->r0 = fromBool(" + call + ");\n";
                    }
                    else {
                        pointerIncPre += "  ctx->r0 = (TValue)" + call + ";\n";
                    }
                    if (needsStackSave)
                        pointerIncPre += "  ctx->sp = prevSP;\n";
                    if (numArgs > 1)
                        pointerIncPre += "  ctx->sp += " + (numArgs - 1) + ";\n";
                    pointerIncPre += "}\n";
                    return wrap;
                }
                inEnum = false;
                enumVal = 0;
                enumsDTS.setNs("");
                shimsDTS.setNs("");
                src.split(/\r?\n/).forEach(function (ln) {
                    ++lineNo;
                    // remove comments (NC = no comments)
                    var lnNC = stripComments(ln);
                    processEnumLine(ln);
                    // "enum class" and "enum struct" is C++ syntax to force scoping of
                    // enum members
                    var enM = /^\s*enum\s+(|class\s+|struct\s+)(\w+)\s*({|$)/.exec(lnNC);
                    if (enM) {
                        enterEnum(enM[2], enM[3]);
                        if (!isHeader) {
                            protos.setNs(currNs);
                            protos.write("enum " + enM[2] + " : int;");
                        }
                    }
                    if (handleComments(ln))
                        return;
                    if (/^typedef.*;\s*$/.test(ln)) {
                        protos.setNs(currNs);
                        protos.write(ln);
                    }
                    var m = /^\s*namespace\s+(\w+)/.exec(ln);
                    if (m) {
                        //if (currNs) err("more than one namespace declaration not supported")
                        currNs = m[1];
                        if (interfaceName()) {
                            finishNamespace();
                            var tpName = interfaceName();
                            shimsDTS.setNs(currNs, "declare interface " + tpName + " {");
                        }
                        else if (currAttrs || currDocComment) {
                            finishNamespace();
                            shimsDTS.setNs(toJs(currNs));
                            enumsDTS.setNs(toJs(currNs));
                        }
                        return;
                    }
                    m = /^PXT_ABI\((\w+)\)/.exec(ln);
                    if (m && !isVM) {
                        pointersInc += "PXT_FNPTR(::" + m[1] + "),\n";
                        abiInc += "extern \"C\" void " + m[1] + "();\n";
                        res.functions.push({
                            name: m[1],
                            argsFmt: [],
                            value: 0
                        });
                    }
                    m = /^#define\s+PXT_COMM_BASE\s+([0-9a-fx]+)/.exec(ln);
                    if (m)
                        res.commBase = parseInt(m[1]);
                    // function definition
                    m = /^\s*(\w+)([\*\&]*\s+[\*\&]*)(\w+)\s*\(([^\(\)]*)\)\s*(;\s*$|\{|$)/.exec(ln);
                    if (currAttrs && m) {
                        indexedInstanceAttrs = null;
                        var parsedAttrs_1 = pxtc.parseCommentString(currAttrs);
                        // top-level functions (outside of a namespace) are not permitted
                        if (!currNs)
                            err("missing namespace declaration");
                        var retTp = (m[1] + m[2]).replace(/\s+/g, "");
                        var funName = m[3];
                        var origArgs = m[4];
                        currAttrs = currAttrs.trim().replace(/ \w+\.defl=\w+/g, "");
                        var argsFmt_1 = [mapRunTimeType(retTp)];
                        var argTypes_1 = [];
                        var args = origArgs.split(/,/).filter(function (s) { return !!s; }).map(function (s) {
                            var r = parseArg(parsedAttrs_1, s);
                            argsFmt_1.push(mapRunTimeType(r.type));
                            argTypes_1.push(r.type.replace(/ /g, ""));
                            return r.name + ": " + mapType(r.type);
                        });
                        var fi = {
                            name: currNs + "::" + funName,
                            argsFmt: argsFmt_1,
                            value: null
                        };
                        //console.log(`${ln.trim()} : ${argsFmt}`)
                        if (currDocComment) {
                            shimsDTS.setNs(toJs(currNs));
                            shimsDTS.write("");
                            shimsDTS.write(currDocComment);
                            if (/ImageLiteral/.test(m[4]) && !/imageLiteral=/.test(currAttrs))
                                currAttrs += " imageLiteral=1";
                            currAttrs += " shim=" + fi.name;
                            shimsDTS.write(currAttrs);
                            funName = toJs(funName);
                            if (interfaceName()) {
                                var tp0 = (args[0] || "").replace(/^.*:\s*/, "").trim();
                                if (tp0.toLowerCase() != interfaceName().toLowerCase()) {
                                    err(lf("Invalid first argument; should be of type '{0}', but is '{1}'", interfaceName(), tp0));
                                }
                                args.shift();
                                if (args.length == 0 && /\bproperty\b/.test(currAttrs))
                                    shimsDTS.write(funName + ": " + mapType(retTp) + ";");
                                else
                                    shimsDTS.write(funName + "(" + args.join(", ") + "): " + mapType(retTp) + ";");
                            }
                            else {
                                shimsDTS.write("function " + funName + "(" + args.join(", ") + "): " + mapType(retTp) + ";");
                            }
                        }
                        currDocComment = "";
                        currAttrs = "";
                        if (!isHeader) {
                            protos.setNs(currNs);
                            protos.write(retTp + " " + funName + "(" + origArgs + ");");
                        }
                        res.functions.push(fi);
                        if (isYotta)
                            pointersInc += "(uint32_t)(void*)::" + fi.name + ",\n";
                        else if (isVM) {
                            if (U.startsWith(fi.name, "pxt::op_") ||
                                vmKeepFunctions[fi.name] ||
                                parsedAttrs_1.expose ||
                                (!U.startsWith(fi.name, "pxt::") && !U.startsWith(fi.name, "pxtrt::"))) {
                                var wrap = generateVMWrapper(fi, argTypes_1);
                                var nargs = fi.argsFmt.length - 1;
                                pointersInc += "{ \"" + fi.name + "\", (OpFun)" + wrap + ", " + nargs + " },\n";
                            }
                        }
                        else
                            pointersInc += "PXT_FNPTR(::" + fi.name + "),\n";
                        return;
                    }
                    m = /^\s*extern const (\w+) (\w+);/.exec(ln);
                    if (currAttrs && m) {
                        var fi = {
                            name: currNs + "::" + m[2],
                            argsFmt: [],
                            value: null
                        };
                        res.functions.push(fi);
                        if (!isVM)
                            pointersInc += "PXT_FNPTR(&::" + fi.name + "),\n";
                        currAttrs = "";
                        return;
                    }
                    m = /^\s*(\w+)\s+(\w+)\s*;/.exec(ln);
                    if (currAttrs && m) {
                        var parsedAttrs = pxtc.parseCommentString(currAttrs);
                        if (parsedAttrs.indexedInstanceNS) {
                            indexedInstanceAttrs = parsedAttrs;
                            shimsDTS.setNs(parsedAttrs.indexedInstanceNS);
                            indexedInstanceIdx = 0;
                        }
                        var tp = m[1];
                        var nm = m[2];
                        if (indexedInstanceAttrs) {
                            currAttrs = currAttrs.trim();
                            currAttrs += " fixedInstance shim=" + indexedInstanceAttrs.indexedInstanceShim + "(" + indexedInstanceIdx++ + ")";
                            shimsDTS.write("");
                            shimsDTS.write(currDocComment);
                            shimsDTS.write(currAttrs);
                            shimsDTS.write("const " + nm + ": " + mapType(tp) + ";");
                            currDocComment = "";
                            currAttrs = "";
                            return;
                        }
                    }
                    if (currAttrs && ln.trim()) {
                        err("declaration not understood: " + ln);
                        currAttrs = "";
                        currDocComment = "";
                        return;
                    }
                });
            }
            var currSettings = U.clone(compileService.yottaConfig || {});
            var optSettings = {};
            var settingSrc = {};
            var codalLibraries = {};
            function parseJson(pkg) {
                var j0 = pkg.config.platformio;
                if (j0 && j0.dependencies) {
                    U.jsonCopyFrom(res.platformio.dependencies, j0.dependencies);
                }
                if (res.npmDependencies && pkg.config.npmDependencies)
                    U.jsonCopyFrom(res.npmDependencies, pkg.config.npmDependencies);
                var codal = pkg.config.codal;
                if (isCodal && codal) {
                    for (var _i = 0, _a = codal.libraries || []; _i < _a.length; _i++) {
                        var lib = _a[_i];
                        var repo = pxt.github.parseRepoId(lib);
                        if (!repo)
                            U.userError(lf("codal library {0} doesn't look like github repo", lib));
                        var canonical = pxt.github.stringifyRepo(repo);
                        var existing = U.lookup(codalLibraries, repo.project);
                        if (existing) {
                            if (pxt.github.stringifyRepo(existing) != canonical)
                                U.userError(lf("conflict between codal libraries: {0} and {1}", pxt.github.stringifyRepo(existing), canonical));
                        }
                        else {
                            codalLibraries[repo.project] = repo;
                        }
                    }
                }
                var json = pkg.config.yotta;
                if (!json)
                    return;
                // TODO check for conflicts
                if (json.dependencies) {
                    U.jsonCopyFrom(res.yotta.dependencies, json.dependencies);
                }
                if (json.config) {
                    var cfg = U.jsonFlatten(json.config);
                    for (var _b = 0, _c = Object.keys(cfg); _b < _c.length; _b++) {
                        var settingName = _c[_b];
                        var prev = U.lookup(settingSrc, settingName);
                        var settingValue = cfg[settingName];
                        if (!prev || prev.config.yotta.configIsJustDefaults) {
                            settingSrc[settingName] = pkg;
                            currSettings[settingName] = settingValue;
                        }
                        else if (currSettings[settingName] === settingValue) {
                            // OK
                        }
                        else if (!pkg.parent.config.yotta || !pkg.parent.config.yotta.ignoreConflicts) {
                            var err_1 = new PkgConflictError(lf("conflict on yotta setting {0} between extensions {1} and {2}", settingName, pkg.id, prev.id));
                            err_1.pkg0 = prev;
                            err_1.pkg1 = pkg;
                            err_1.settingName = settingName;
                            throw err_1;
                        }
                    }
                }
                if (json.optionalConfig) {
                    var cfg = U.jsonFlatten(json.optionalConfig);
                    for (var _d = 0, _e = Object.keys(cfg); _d < _e.length; _d++) {
                        var settingName = _e[_d];
                        var settingValue = cfg[settingName];
                        // last one wins
                        optSettings[settingName] = settingValue;
                    }
                }
            }
            // This is overridden on the build server, but we need it for command line build
            if (isYotta && compile.hasHex) {
                var cs = compileService;
                U.assert(!!cs.yottaCorePackage);
                U.assert(!!cs.githubCorePackage);
                U.assert(!!cs.gittag);
                var tagged = cs.githubCorePackage + "#" + compileService.gittag;
                res.yotta.dependencies[cs.yottaCorePackage] = tagged;
            }
            if (mainPkg) {
                var seenMain = false;
                var _loop_1 = function (pkg) {
                    thisErrors = "";
                    parseJson(pkg);
                    if (pkg == mainPkg) {
                        seenMain = true;
                        // we only want the main package in generated .d.ts
                        shimsDTS.clear();
                        enumsDTS.clear();
                    }
                    else {
                        U.assert(!seenMain);
                    }
                    // Generally, headers need to be processed before sources, as they contain definitions
                    // (in particular of enums, which are needed to decide if we're doing conversions for
                    // function arguments). This can still fail if one header uses another and they are
                    // listed in invalid order...
                    var isHeaderFn = function (fn) { return U.endsWith(fn, ".h"); };
                    var ext = ".cpp";
                    var files = pkg.getFiles().filter(isHeaderFn)
                        .concat(pkg.getFiles().filter(function (s) { return !isHeaderFn(s); }));
                    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                        var fn = files_1[_i];
                        var isHeader = isHeaderFn(fn);
                        if (isHeader || U.endsWith(fn, ext)) {
                            var fullName = pkg.config.name + "/" + fn;
                            if ((pkg.config.name == "base" || /^core($|---)/.test(pkg.config.name)) && isHeader)
                                fullName = fn;
                            if (isHeader)
                                includesInc += "#include \"" + (isYotta ? sourcePath.slice(1) : "") + fullName + "\"\n";
                            var src = pkg.readFile(fn);
                            if (src == null)
                                U.userError(lf("C++ file {0} is missing in extension {1}.", fn, pkg.config.name));
                            fileName = fullName;
                            parseCpp(src, isHeader);
                            // src = src.replace(/^[ \t]*/mg, "") // HACK: shrink the files
                            res.extensionFiles[sourcePath + fullName] = src;
                            if (pkg.level == 0)
                                res.onlyPublic = false;
                            if (pkg.verProtocol() && pkg.verProtocol() != "pub" && pkg.verProtocol() != "embed")
                                res.onlyPublic = false;
                        }
                        if (U.endsWith(fn, ".c") || U.endsWith(fn, ".S") || U.endsWith(fn, ".s")) {
                            var src = pkg.readFile(fn);
                            res.extensionFiles[sourcePath + pkg.config.name + "/" + fn.replace(/\.S$/, ".s")] = src;
                        }
                    }
                    if (thisErrors) {
                        allErrors += lf("Extension {0}:\n", pkg.id) + thisErrors;
                    }
                };
                for (var _b = 0, mainDeps_2 = mainDeps; _b < mainDeps_2.length; _b++) {
                    var pkg = mainDeps_2[_b];
                    _loop_1(pkg);
                }
                if (!seenMain) {
                    // this can happen if the main package is disabled in current variant
                    shimsDTS.clear();
                    enumsDTS.clear();
                }
            }
            if (allErrors)
                U.userError(allErrors);
            // merge optional settings
            U.jsonCopyFrom(optSettings, currSettings);
            U.iterMap(optSettings, function (k, v) {
                if (v === null) {
                    delete optSettings[k];
                }
            });
            // fix keys - ==> _
            Object.keys(optSettings)
                .filter(function (k) { return /-/.test(k); }).forEach(function (k) {
                var v = optSettings[k];
                delete optSettings[k];
                optSettings[k.replace(/-/g, '_')] = v;
            });
            if (!isYotta && compileService.yottaConfigCompatibility) { // yotta automatically adds YOTTA_CFG_
                Object.keys(optSettings)
                    .forEach(function (k) { return optSettings["YOTTA_CFG_" + k] = optSettings[k]; });
            }
            optSettings["PXT_TARGET"] = JSON.stringify(pxt.appTarget.id);
            var configJson = U.jsonUnFlatten(optSettings);
            if (isDockerMake) {
                var packageJson = {
                    name: "pxt-app",
                    private: true,
                    dependencies: res.npmDependencies,
                };
                res.generatedFiles["/package.json"] = JSON.stringify(packageJson, null, 4) + "\n";
            }
            else if (isCodal) {
                var cs = compileService;
                var cfg_1 = U.clone(cs.codalDefinitions) || {};
                var trg = cs.codalTarget;
                if (typeof trg == "string")
                    trg = trg + ".json";
                var codalJson = {
                    "target": trg,
                    "definitions": cfg_1,
                    "config": cfg_1,
                    "application": "pxtapp",
                    "output_folder": "build",
                    // include these, because we use hash of this file to see if anything changed
                    "pxt_gitrepo": cs.githubCorePackage,
                    "pxt_gittag": cs.gittag,
                    "libraries": U.values(codalLibraries).map(function (r) { return ({
                        "name": r.project,
                        "url": "https://github.com/" + r.fullName,
                        "branch": r.tag || "master",
                        "type": "git"
                    }); })
                };
                if (codalJson.libraries.length == 0)
                    delete codalJson.libraries;
                U.iterMap(U.jsonFlatten(configJson), function (k, v) {
                    k = k.replace(/^codal\./, "device.").toUpperCase().replace(/\./g, "_");
                    cfg_1[k] = v;
                });
                res.generatedFiles["/codal.json"] = JSON.stringify(codalJson, null, 4) + "\n";
                pxt.debug("codal.json: " + res.generatedFiles["/codal.json"]);
            }
            else if (isPlatformio) {
                var iniLines_1 = compileService.platformioIni.slice();
                // TODO merge configjson
                iniLines_1.push("lib_deps =");
                U.iterMap(res.platformio.dependencies, function (pkg, ver) {
                    var pkgSpec = /[@#\/]/.test(ver) ? ver : pkg + "@" + ver;
                    iniLines_1.push("  " + pkgSpec);
                });
                res.generatedFiles["/platformio.ini"] = iniLines_1.join("\n") + "\n";
            }
            else {
                res.yotta.config = configJson;
                var name_1 = "pxt-app";
                if (compileService.yottaBinary)
                    name_1 = compileService.yottaBinary.replace(/-combined/, "").replace(/\.hex$/, "");
                var moduleJson = {
                    "name": name_1,
                    "version": "0.0.0",
                    "description": "Auto-generated. Do not edit.",
                    "license": "n/a",
                    "dependencies": res.yotta.dependencies,
                    "targetDependencies": {},
                    "bin": "./source"
                };
                res.generatedFiles["/module.json"] = JSON.stringify(moduleJson, null, 4) + "\n";
                pxt.debug("module.json: " + res.generatedFiles["/module.json"]);
            }
            for (var _c = 0, _d = Object.keys(cpp_options); _c < _d.length; _c++) {
                var k = _d[_c];
                pxtConfig += "#define " + k + " " + cpp_options[k] + "\n";
            }
            if (compile.uf2Family)
                pxtConfig += "#define PXT_UF2_FAMILY " + compile.uf2Family + "\n";
            res.generatedFiles[sourcePath + "pointers.cpp"] = includesInc + protos.finish() + abiInc +
                pointerIncPre + pointersInc + "\nPXT_SHIMS_END\n";
            res.generatedFiles[sourcePath + "pxtconfig.h"] = pxtConfig;
            pxt.debug("pxtconfig.h: " + res.generatedFiles[sourcePath + "pxtconfig.h"]);
            if (isYotta) {
                res.generatedFiles["/config.json"] = JSON.stringify(configJson, null, 4) + "\n";
                pxt.debug("yotta config.json: " + res.generatedFiles["/config.json"]);
            }
            res.generatedFiles[sourcePath + "main.cpp"] = "\n#include \"pxt.h\"\n#ifdef PXT_MAIN\nPXT_MAIN\n#else\nint main() {\n    uBit.init();\n    pxt::start();\n    release_fiber();\n    return 0;   // your program will never reach this line.\n}\n#endif\n";
            if (makefile) {
                var allfiles_1 = Object.keys(res.extensionFiles).concat(Object.keys(res.generatedFiles));
                var inc_1 = "";
                var objs = [];
                var add = function (name, ext) {
                    var files = allfiles_1.filter(function (f) { return U.endsWith(f, ext); }).map(function (s) { return s.slice(1); });
                    inc_1 += name + " = " + files.join(" ") + "\n";
                };
                add("PXT_C", ".c");
                add("PXT_CPP", ".cpp");
                add("PXT_S", ".s");
                add("PXT_HEADERS", ".h");
                inc_1 += "PXT_SOURCES := $(PXT_C) $(PXT_S) $(PXT_CPP)\n";
                inc_1 += "PXT_OBJS := $(addprefix bld/, $(PXT_C:.c=.o) $(PXT_S:.s=.o) $(PXT_CPP:.cpp=.o))\n";
                res.generatedFiles["/Makefile"] = makefile;
                res.generatedFiles["/Makefile.inc"] = inc_1;
            }
            res.generatedFiles["/functions.json"] = JSON.stringify(res.functions, null, 1);
            var tmp = res.extensionFiles;
            U.jsonCopyFrom(tmp, res.generatedFiles);
            var creq = {
                config: compileService.serviceId,
                tag: compileService.gittag,
                replaceFiles: tmp,
                dependencies: (isYotta ? res.yotta.dependencies : null)
            };
            var data = JSON.stringify(creq);
            res.sha = U.sha256(data);
            res.skipCloudBuild = !!compileService.skipCloudBuild;
            res.compileData = ts.pxtc.encodeBase64(U.toUTF8(data));
            res.shimsDTS = shimsDTS.finish();
            res.enumsDTS = enumsDTS.finish();
            if (Object.keys(prevExtInfos).length > 10)
                prevExtInfos = {};
            prevExtInfos[key] = res;
            return res;
        }
        cpp.getExtensionInfo = getExtensionInfo;
        function fromUTF8Bytes(binstr) {
            if (!binstr)
                return "";
            // escape function is deprecated
            var escaped = "";
            for (var i = 0; i < binstr.length; ++i) {
                var k = binstr[i] & 0xff;
                if (k == 37 || k > 0x7f) {
                    escaped += "%" + k.toString(16);
                }
                else {
                    escaped += String.fromCharCode(k);
                }
            }
            // decodeURIComponent does the actual UTF8 decoding
            return decodeURIComponent(escaped);
        }
        function swapBytes(str) {
            var r = "";
            var i = 0;
            for (; i < str.length; i += 2)
                r = str[i] + str[i + 1] + r;
            pxt.Util.assert(i == str.length);
            return r;
        }
        function extractSourceFromBin(bin) {
            var magic = [0x41, 0x14, 0x0E, 0x2F, 0xB8, 0x2F, 0xA2, 0xBB];
            outer: for (var p = 0; p < bin.length; p += 16) {
                if (bin[p] != magic[0])
                    continue;
                for (var i = 0; i < magic.length; ++i)
                    if (bin[p + i] != magic[i])
                        continue outer;
                var metaLen = bin[p + 8] | (bin[p + 9] << 8);
                var textLen = bin[p + 10] | (bin[p + 11] << 8) | (bin[p + 12] << 16) | (bin[p + 13] << 24);
                // TODO test in iOS Safari
                p += 16;
                var end = p + metaLen + textLen;
                if (end > bin.length)
                    continue;
                var bufmeta = bin.slice(p, p + metaLen);
                var buftext = bin.slice(p + metaLen, end);
                return {
                    meta: fromUTF8Bytes(bufmeta),
                    text: buftext
                };
            }
            return null;
        }
        function extractSource(hexfile) {
            if (!hexfile)
                return undefined;
            var metaLen = 0;
            var textLen = 0;
            var toGo = 0;
            var buf;
            var ptr = 0;
            hexfile.split(/\r?\n/).forEach(function (ln) {
                var m = /^:10....0[0E]41140E2FB82FA2BB(....)(....)(....)(....)(..)/.exec(ln);
                if (m) {
                    metaLen = parseInt(swapBytes(m[1]), 16);
                    textLen = parseInt(swapBytes(m[2]), 16);
                    toGo = metaLen + textLen;
                    buf = new Uint8Array(toGo);
                }
                else if (toGo > 0) {
                    m = /^:10....0[0E](.*)(..)$/.exec(ln);
                    if (!m)
                        return;
                    var k = m[1];
                    while (toGo > 0 && k.length > 0) {
                        buf[ptr++] = parseInt(k[0] + k[1], 16);
                        k = k.slice(2);
                        toGo--;
                    }
                }
            });
            if (!buf || !(toGo == 0 && ptr == buf.length)) {
                return undefined;
            }
            var bufmeta = new Uint8Array(metaLen);
            var buftext = new Uint8Array(textLen);
            for (var i = 0; i < metaLen; ++i)
                bufmeta[i] = buf[i];
            for (var i = 0; i < textLen; ++i)
                buftext[i] = buf[metaLen + i];
            // iOS Safari doesn't seem to have slice() on Uint8Array
            return {
                meta: fromUTF8Bytes(bufmeta),
                text: buftext
            };
        }
        function unpackSourceFromHexFileAsync(file) {
            if (!file)
                return undefined;
            return pxt.Util.fileReadAsBufferAsync(file).then(function (data) {
                var a = new Uint8Array(data);
                return unpackSourceFromHexAsync(a);
            });
        }
        cpp.unpackSourceFromHexFileAsync = unpackSourceFromHexFileAsync;
        function unpackSourceFromHexAsync(dat) {
            function error(e) {
                pxt.debug(e);
                return Promise.reject(new Error(e));
            }
            var rawEmbed;
            // UF2?
            if (pxt.HF2.read32(dat, 0) == ts.pxtc.UF2.UF2_MAGIC_START0) {
                var bin = ts.pxtc.UF2.toBin(dat);
                if (bin)
                    rawEmbed = extractSourceFromBin(bin.buf);
            }
            // ELF?
            if (pxt.HF2.read32(dat, 0) == 0x464c457f) {
                rawEmbed = extractSourceFromBin(dat);
            }
            // HEX? (check for colon)
            if (dat[0] == 0x3a) {
                var str = fromUTF8Bytes(dat);
                rawEmbed = extractSource(str || "");
            }
            if (!rawEmbed || !rawEmbed.meta || !rawEmbed.text) {
                return error("This .hex file doesn't contain source.");
            }
            var hd = JSON.parse(rawEmbed.meta);
            if (!hd) {
                return error("This .hex file is not valid.");
            }
            else if (hd.compression == "LZMA") {
                return pxt.lzmaDecompressAsync(rawEmbed.text)
                    .then(function (res) {
                    if (!res)
                        return null;
                    var meta = res.slice(0, hd.headerSize || hd.metaSize || 0);
                    var text = res.slice(meta.length);
                    if (meta)
                        pxt.Util.jsonCopyFrom(hd, JSON.parse(meta));
                    return { meta: hd, source: text };
                });
            }
            else if (hd.compression) {
                return error("Compression type " + hd.compression + " not supported.");
            }
            else {
                return Promise.resolve({ source: fromUTF8Bytes(rawEmbed.text) });
            }
        }
        cpp.unpackSourceFromHexAsync = unpackSourceFromHexAsync;
    })(cpp = pxt.cpp || (pxt.cpp = {}));
})(pxt || (pxt = {}));
(function (pxt) {
    var hexloader;
    (function (hexloader) {
        var downloadCache = {};
        var cdnUrlPromise;
        var hexInfoMemCache = {};
        hexloader.showLoading = function (msg) { };
        hexloader.hideLoading = function () { };
        function downloadHexInfoAsync(extInfo) {
            if (!downloadCache.hasOwnProperty(extInfo.sha))
                downloadCache[extInfo.sha] = downloadHexInfoCoreAsync(extInfo);
            return downloadCache[extInfo.sha];
        }
        function getCdnUrlAsync() {
            if (cdnUrlPromise)
                return cdnUrlPromise;
            else {
                var curr = pxt.getOnlineCdnUrl();
                if (curr)
                    return (cdnUrlPromise = Promise.resolve(curr));
                var forceLive = pxt.webConfig && pxt.webConfig.isStatic;
                return (cdnUrlPromise = pxt.Cloud.privateGetAsync("clientconfig", forceLive)
                    .then(function (r) { return r.primaryCdnUrl; }));
            }
        }
        function downloadHexInfoCoreAsync(extInfo) {
            var hexurl = "";
            hexloader.showLoading(pxt.U.lf("Compiling (this may take a minute)..."));
            pxt.tickEvent("cppcompile.start");
            return downloadHexInfoLocalAsync(extInfo)
                .then(function (hex) {
                if (hex) {
                    // Found the hex image in the local server cache, use that
                    pxt.tickEvent("cppcompile.cachehit");
                    return hex;
                }
                return getCdnUrlAsync()
                    .then(function (url) {
                    hexurl = url + "/compile/" + extInfo.sha;
                    return pxt.U.httpGetTextAsync(hexurl + ".hex");
                })
                    .then(function (r) { return r; }, function (e) {
                    return pxt.Cloud.privatePostAsync("compile/extension", { data: extInfo.compileData })
                        .then(function (ret) { return new Promise(function (resolve, reject) {
                        var retry = 0;
                        var delay = 8000; // ms
                        var maxWait = 120000; // ms
                        var startTry = pxt.U.now();
                        var tryGet = function () {
                            retry++;
                            if (pxt.U.now() - startTry > maxWait) {
                                pxt.log("abandoning C++ build");
                                pxt.tickEvent("cppcompile.cancel", { retry: retry });
                                resolve(null);
                                return null;
                            }
                            var url = ret.hex.replace(/\.hex/, ".json");
                            pxt.log("polling C++ build " + url + " (attempt #" + retry + ")");
                            pxt.tickEvent("cppcompile.poll", { retry: retry });
                            return pxt.Util.httpGetJsonAsync(url)
                                .then(function (json) {
                                var _a;
                                pxt.log("build log " + url.replace(/\.json$/, ".log"));
                                pxt.tickEvent("cppcompile.done", {
                                    success: ((_a = json) === null || _a === void 0 ? void 0 : _a.success) ? 1 : 0,
                                    retry: retry,
                                    duration: pxt.U.now() - startTry
                                });
                                if (!json.success) {
                                    pxt.log("build failed");
                                    if (json.mbedresponse && json.mbedresponse.result && json.mbedresponse.result.exception)
                                        pxt.log(json.mbedresponse.result.exception);
                                    resolve(null);
                                }
                                else {
                                    pxt.log("fetching " + hexurl + ".hex");
                                    resolve(pxt.U.httpGetTextAsync(hexurl + ".hex"));
                                }
                            }, function (e) {
                                pxt.log("waiting " + ((delay / 1000) | 0) + "s for C++ build...");
                                setTimeout(tryGet, delay);
                                return null;
                            });
                        };
                        tryGet();
                    }); });
                })
                    .then(function (text) {
                    hexloader.hideLoading();
                    return {
                        hex: text && text.split(/\r?\n/)
                    };
                });
            }).finally(function () {
                hexloader.hideLoading();
            });
        }
        function downloadHexInfoLocalAsync(extInfo) {
            if (extInfo.skipCloudBuild)
                return Promise.resolve({ hex: ["SKIP"] });
            if (pxt.webConfig && pxt.webConfig.isStatic) {
                return pxt.Util.requestAsync({
                    url: pxt.webConfig.cdnUrl + "hexcache/" + extInfo.sha + ".hex"
                })
                    .then(function (resp) {
                    if (resp.text) {
                        var result = {
                            enums: [],
                            functions: [],
                            hex: resp.text.split(/\r?\n/)
                        };
                        return Promise.resolve(result);
                    }
                    pxt.log("Hex info not found in bundled hex cache");
                    return Promise.resolve();
                })
                    .catch(function (e) {
                    pxt.log("Error fetching hex info from bundled hex cache");
                    return Promise.resolve();
                });
            }
            if (!pxt.Cloud.localToken || !window || !pxt.BrowserUtils.isLocalHost()) {
                return Promise.resolve(undefined);
            }
            return apiAsync("compile/" + extInfo.sha)
                .then(function (json) {
                if (!json || json.notInOfflineCache || !json.hex) {
                    return Promise.resolve(undefined);
                }
                json.hex = json.hex.split(/\r?\n/);
                return json;
            })
                .catch(function (e) {
                return Promise.resolve(undefined);
            });
        }
        function apiAsync(path, data) {
            return pxt.Cloud.localRequestAsync(path, data).then(function (r) { return r.json; });
        }
        function storeWithLimitAsync(host, idxkey, newkey, newval, maxLen) {
            if (maxLen === void 0) { maxLen = 10; }
            return host.cacheStoreAsync(newkey, newval)
                .then(function () { return host.cacheGetAsync(idxkey); })
                .then(function (res) {
                var keys;
                try {
                    keys = JSON.parse(res || "[]");
                }
                catch (e) {
                    // cache entry is corrupted, clear cache so that it gets rebuilt
                    console.error('invalid cache entry, clearing entry');
                    keys = [];
                }
                keys = keys.filter(function (k) { return k != newkey; });
                keys.unshift(newkey);
                var todel = keys.slice(maxLen);
                keys = keys.slice(0, maxLen);
                return Promise.map(todel, function (e) { return host.cacheStoreAsync(e, null); })
                    .then(function () { return host.cacheStoreAsync(idxkey, JSON.stringify(keys)); });
            });
        }
        hexloader.storeWithLimitAsync = storeWithLimitAsync;
        function recordGetAsync(host, idxkey, newkey) {
            return host.cacheGetAsync(idxkey)
                .then(function (res) {
                var keys;
                try {
                    keys = JSON.parse(res || "[]");
                }
                catch (e) {
                    // cache entry is corrupted, clear cache so that it gets rebuilt
                    console.error('invalid cache entry, clearing entry');
                    return host.cacheStoreAsync(idxkey, "[]");
                }
                if (keys[0] != newkey) {
                    keys = keys.filter(function (k) { return k != newkey; });
                    keys.unshift(newkey);
                    return host.cacheStoreAsync(idxkey, JSON.stringify(keys));
                }
                else {
                    return null;
                }
            });
        }
        hexloader.recordGetAsync = recordGetAsync;
        function getHexInfoAsync(host, extInfo, cloudModule) {
            if (!extInfo.sha)
                return Promise.resolve(null);
            var cached = hexInfoMemCache[extInfo.sha];
            if (cached)
                return Promise.resolve(cached);
            pxt.debug("get hex info: " + extInfo.sha);
            var key = "hex-" + extInfo.sha;
            return host.cacheGetAsync(key)
                .then(function (res) {
                var cachedMeta;
                try {
                    cachedMeta = res ? JSON.parse(res) : null;
                }
                catch (e) {
                    // cache entry is corrupted, clear cache so that it gets rebuilt
                    console.log('invalid cache entry, clearing entry');
                    cachedMeta = null;
                }
                if (cachedMeta && cachedMeta.hex) {
                    pxt.debug("cache hit, size=" + res.length);
                    cachedMeta.hex = decompressHex(cachedMeta.hex);
                    return recordGetAsync(host, "hex-keys", key)
                        .then(function () { return cachedMeta; });
                }
                else {
                    return downloadHexInfoAsync(extInfo)
                        .then(function (meta) {
                        var origHex = meta.hex;
                        meta.hex = compressHex(meta.hex);
                        var store = JSON.stringify(meta);
                        meta.hex = origHex;
                        return storeWithLimitAsync(host, "hex-keys", key, store)
                            .then(function () { return meta; });
                    }).catch(function (e) {
                        pxt.reportException(e, { sha: extInfo.sha });
                        return Promise.resolve(null);
                    });
                }
            })
                .then(function (res) {
                if (res) {
                    if (Object.keys(hexInfoMemCache).length > 20)
                        hexInfoMemCache = {};
                    hexInfoMemCache[extInfo.sha] = res;
                }
                return res;
            });
        }
        hexloader.getHexInfoAsync = getHexInfoAsync;
        function decompressHex(hex) {
            var outp = [];
            for (var i = 0; i < hex.length; i++) {
                var m = /^([@!])(....)$/.exec(hex[i]);
                if (!m) {
                    outp.push(hex[i]);
                    continue;
                }
                var addr = parseInt(m[2], 16);
                var nxt = hex[++i];
                var buf = "";
                if (m[1] == "@") {
                    buf = "";
                    var cnt = parseInt(nxt, 16);
                    while (cnt-- > 0) {
                        /* tslint:disable:no-octal-literal */
                        buf += "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0";
                        /* tslint:enable:no-octal-literal */
                    }
                }
                else {
                    buf = ts.pxtc.decodeBase64(nxt);
                }
                pxt.Util.assert(buf.length > 0);
                pxt.Util.assert(buf.length % 16 == 0);
                for (var j = 0; j < buf.length;) {
                    var bytes = [0x10, (addr >> 8) & 0xff, addr & 0xff, 0];
                    addr += 16;
                    for (var k = 0; k < 16; ++k) {
                        bytes.push(buf.charCodeAt(j++));
                    }
                    var chk = 0;
                    for (var k = 0; k < bytes.length; ++k)
                        chk += bytes[k];
                    bytes.push((-chk) & 0xff);
                    var r = ":";
                    for (var k = 0; k < bytes.length; ++k) {
                        var b = bytes[k] & 0xff;
                        if (b <= 0xf)
                            r += "0";
                        r += b.toString(16);
                    }
                    outp.push(r.toUpperCase());
                }
            }
            return outp;
        }
        function compressHex(hex) {
            var outp = [];
            var j = 0;
            for (var i = 0; i < hex.length; i += j) {
                var addr = -1;
                var outln = "";
                j = 0;
                var zeroMode = false;
                while (j < 500) {
                    var m = /^:10(....)00(.{32})(..)$/.exec(hex[i + j]);
                    if (!m)
                        break;
                    var h = m[2];
                    var isZero = /^0+$/.test(h);
                    var newaddr = parseInt(m[1], 16);
                    if (addr == -1) {
                        zeroMode = isZero;
                        outp.push((zeroMode ? "@" : "!") + m[1]);
                        addr = newaddr - 16;
                    }
                    else {
                        if (isZero != zeroMode)
                            break;
                        if (addr + 16 != newaddr)
                            break;
                    }
                    if (!zeroMode)
                        outln += h;
                    addr = newaddr;
                    j++;
                }
                if (j == 0) {
                    outp.push(hex[i]);
                    j = 1;
                }
                else {
                    if (zeroMode) {
                        outp.push(j.toString(16));
                    }
                    else {
                        var bin = "";
                        for (var k = 0; k < outln.length; k += 2)
                            bin += String.fromCharCode(parseInt(outln.slice(k, k + 2), 16));
                        outp.push(ts.pxtc.encodeBase64(bin));
                    }
                }
            }
            return outp;
        }
    })(hexloader = pxt.hexloader || (pxt.hexloader = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var crowdin;
    (function (crowdin) {
        crowdin.KEY_VARIABLE = "CROWDIN_KEY";
        crowdin.testMode = false;
        crowdin.TEST_KEY = "!!!testmode!!!";
        function setTestMode() {
            pxt.crowdin.testMode = true;
            pxt.log("CROWDIN TEST MODE - files will NOT be uploaded");
        }
        crowdin.setTestMode = setTestMode;
        function multipartPostAsync(key, uri, data, filename, filecontents) {
            if (data === void 0) { data = {}; }
            if (filename === void 0) { filename = null; }
            if (filecontents === void 0) { filecontents = null; }
            if (crowdin.testMode || key == crowdin.TEST_KEY) {
                var resp = {
                    success: true
                };
                return Promise.resolve({ statusCode: 200, headers: {}, text: JSON.stringify(resp), json: resp });
            }
            return pxt.Util.multipartPostAsync(uri, data, filename, filecontents);
        }
        function apiUri(branch, prj, key, cmd, args) {
            pxt.Util.assert(!!prj && !!key && !!cmd);
            var apiRoot = "https://api.crowdin.com/api/project/" + prj + "/";
            args = args || {};
            if (crowdin.testMode)
                delete args["key"]; // ensure no key is passed in test mode
            else
                args["key"] = key;
            if (branch)
                args["branch"] = branch;
            return apiRoot + cmd + "?" + Object.keys(args).map(function (k) { return k + "=" + encodeURIComponent(args[k]); }).join("&");
        }
        function downloadTranslationsAsync(branch, prj, key, filename, options) {
            if (options === void 0) { options = {}; }
            var q = { json: "true" };
            var infoUri = apiUri(branch, prj, key, "info", q);
            var r = {};
            filename = normalizeFileName(filename);
            return pxt.Util.httpGetTextAsync(infoUri).then(function (respText) {
                var info = JSON.parse(respText);
                if (!info)
                    throw new Error("info failed");
                var todo = info.languages.filter(function (l) { return l.code != "en"; });
                if (pxt.appTarget && pxt.appTarget.appTheme && pxt.appTarget.appTheme.availableLocales)
                    todo = todo.filter(function (l) { return pxt.appTarget.appTheme.availableLocales.indexOf(l.code) > -1; });
                pxt.log('languages: ' + todo.map(function (l) { return l.code; }).join(', '));
                var nextFile = function () {
                    var item = todo.pop();
                    if (!item)
                        return Promise.resolve();
                    var exportFileUri = apiUri(branch, prj, key, "export-file", {
                        file: filename,
                        language: item.code,
                        export_translated_only: options.translatedOnly ? "1" : "0",
                        export_approved_only: options.validatedOnly ? "1" : "0"
                    });
                    pxt.log("downloading " + item.name + " - " + item.code + " (" + todo.length + " more)");
                    return pxt.Util.httpGetTextAsync(exportFileUri).then(function (transationsText) {
                        try {
                            var translations = JSON.parse(transationsText);
                            if (translations)
                                r[item.code] = translations;
                        }
                        catch (e) {
                            pxt.log(exportFileUri + ' ' + e);
                        }
                        return nextFile();
                    }).delay(1000); // throttling otherwise crowdin fails
                };
                return nextFile();
            }).then(function () { return r; });
        }
        crowdin.downloadTranslationsAsync = downloadTranslationsAsync;
        function mkIncr(filename) {
            var cnt = 0;
            return function incr() {
                if (cnt++ > 10) {
                    throw new Error("Too many API calls for " + filename);
                }
            };
        }
        function createDirectoryAsync(branch, prj, key, name, incr) {
            name = normalizeFileName(name);
            pxt.debug("create directory " + (branch || "") + "/" + name);
            if (!incr)
                incr = mkIncr(name);
            return multipartPostAsync(key, apiUri(branch, prj, key, "add-directory"), { json: "true", name: name })
                .then(function (resp) {
                pxt.debug("crowdin resp: " + resp.statusCode);
                // 400 returned by folder already exists
                if (resp.statusCode == 200 || resp.statusCode == 400)
                    return Promise.resolve();
                if (resp.statusCode == 500 && resp.text) {
                    var json = JSON.parse(resp.text);
                    if (json.error.code === 50) {
                        pxt.log('directory already exists');
                        return Promise.resolve();
                    }
                }
                var data = resp.json || JSON.parse(resp.text) || { error: {} };
                if (resp.statusCode == 404 && data.error.code == 17) {
                    pxt.log("parent directory missing for " + name);
                    var par = name.replace(/\/[^\/]+$/, "");
                    if (par != name) {
                        return createDirectoryAsync(branch, prj, key, par, incr)
                            .then(function () { return createDirectoryAsync(branch, prj, key, name, incr); }); // retry
                    }
                }
                throw new Error("cannot create directory " + (branch || "") + "/" + name + ": " + resp.statusCode + " " + JSON.stringify(data));
            });
        }
        crowdin.createDirectoryAsync = createDirectoryAsync;
        function normalizeFileName(filename) {
            return filename.replace(/\\/g, '/');
        }
        function uploadTranslationAsync(branch, prj, key, filename, data) {
            pxt.Util.assert(!!prj);
            pxt.Util.assert(!!key);
            filename = normalizeFileName(filename);
            var incr = mkIncr(filename);
            function startAsync() {
                return uploadAsync("update-file", { update_option: "update_as_unapproved" });
            }
            function uploadAsync(op, opts) {
                opts["type"] = "auto";
                opts["json"] = "";
                opts["escape_quotes"] = "0";
                incr();
                return multipartPostAsync(key, apiUri(branch, prj, key, op), opts, filename, data)
                    .then(function (resp) { return handleResponseAsync(resp); });
            }
            function handleResponseAsync(resp) {
                var code = resp.statusCode;
                var errorData = pxt.Util.jsonTryParse(resp.text) || {};
                pxt.debug("upload result: " + code);
                if (code == 404 && errorData.error && errorData.error.code == 8) {
                    pxt.log("create new translation file: " + filename);
                    return uploadAsync("add-file", {});
                }
                else if (code == 404 && errorData.error && errorData.error.code == 17) {
                    return createDirectoryAsync(branch, prj, key, filename.replace(/\/[^\/]+$/, ""), incr)
                        .then(function () { return startAsync(); });
                }
                else if (!errorData.success && errorData.error && errorData.error.code == 53) {
                    // file is being updated
                    pxt.log(filename + " being updated, waiting 5s and retry...");
                    return Promise.delay(5000) // wait 5s and try again
                        .then(function () { return uploadTranslationAsync(branch, prj, key, filename, data); });
                }
                else if (code == 200 || errorData.success) {
                    // something crowdin reports 500 with success=true
                    return Promise.resolve();
                }
                else {
                    throw new Error("Error, upload translation: " + filename + ", " + code + ", " + resp.text);
                }
            }
            return startAsync();
        }
        crowdin.uploadTranslationAsync = uploadTranslationAsync;
        function flatten(allFiles, node, parentDir, branch) {
            var n = node.name;
            var d = parentDir ? parentDir + "/" + n : n;
            node.fullName = d;
            node.branch = branch || "";
            switch (node.node_type) {
                case "file":
                    allFiles.push(node);
                    break;
                case "directory":
                    (node.files || []).forEach(function (f) { return flatten(allFiles, f, d, branch); });
                    break;
                case "branch":
                    (node.files || []).forEach(function (f) { return flatten(allFiles, f, parentDir, node.name); });
                    break;
            }
        }
        function filterAndFlattenFiles(files, crowdinPath) {
            var pxtCrowdinBranch = pxt.appTarget.versions.pxtCrowdinBranch || "";
            var targetCrowdinBranch = pxt.appTarget.versions.targetCrowdinBranch || "";
            var allFiles = [];
            // flatten the files
            files.forEach(function (f) { return flatten(allFiles, f, ""); });
            // top level files are for PXT, subolder are targets
            allFiles = allFiles.filter(function (f) {
                if (f.fullName.indexOf('/') < 0)
                    return f.branch == pxtCrowdinBranch; // pxt file
                else
                    return f.branch == targetCrowdinBranch;
            });
            // folder filter
            if (crowdinPath) {
                // filter out crowdin folder
                allFiles = allFiles.filter(function (f) { return f.fullName.indexOf(crowdinPath) == 0; });
            }
            // filter out non-target files
            if (pxt.appTarget.id != "core") {
                var id_1 = pxt.appTarget.id + '/';
                allFiles = allFiles.filter(function (f) {
                    return f.fullName.indexOf('/') < 0 // top level file
                        || f.fullName.substr(0, id_1.length) == id_1 // from the target folder
                        || f.fullName.indexOf('common-docs') >= 0; // common docs
                });
            }
            return allFiles;
        }
        function projectInfoAsync(prj, key) {
            var q = { json: "true" };
            var infoUri = apiUri("", prj, key, "info", q);
            return pxt.Util.httpGetTextAsync(infoUri).then(function (respText) {
                var info = JSON.parse(respText);
                return info;
            });
        }
        crowdin.projectInfoAsync = projectInfoAsync;
        /**
         * Scans files in crowdin and report files that are not on disk anymore
         */
        function listFilesAsync(prj, key, crowdinPath) {
            pxt.log("crowdin: listing files under " + crowdinPath);
            return projectInfoAsync(prj, key)
                .then(function (info) {
                if (!info)
                    throw new Error("info failed");
                var allFiles = filterAndFlattenFiles(info.files, crowdinPath);
                pxt.debug("crowdin: found " + allFiles.length + " under " + crowdinPath);
                return allFiles.map(function (f) {
                    return {
                        fullName: f.fullName,
                        branch: f.branch || ""
                    };
                });
            });
        }
        crowdin.listFilesAsync = listFilesAsync;
        function languageStatsAsync(prj, key, lang) {
            var uri = apiUri("", prj, key, "language-status", { language: lang, json: "true" });
            return pxt.Util.httpGetJsonAsync(uri)
                .then(function (info) {
                var allFiles = filterAndFlattenFiles(info.files);
                return allFiles;
            });
        }
        crowdin.languageStatsAsync = languageStatsAsync;
        function inContextLoadAsync(text) {
            var node = document.createElement("input");
            node.type = "text";
            node.setAttribute("class", "hidden");
            node.value = text;
            var p = new Promise(function (resolve, reject) {
                var observer = new MutationObserver(function () {
                    if (text == node.value)
                        return;
                    var r = pxt.Util.rlf(node.value); // get rid of {id}...
                    node.remove();
                    observer.disconnect();
                    resolve(r);
                });
                observer.observe(node, { attributes: true });
            });
            document.body.appendChild(node);
            return p;
        }
        crowdin.inContextLoadAsync = inContextLoadAsync;
    })(crowdin = pxt.crowdin || (pxt.crowdin = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var diff;
    (function (diff_1) {
        /*
        Constant MAX ∈ [0,M+N]
        Var V: Array [− MAX .. MAX] of Integer
        V[1]←0
        For D←0 to MAX Do
            For k ← −D to D in steps of 2 Do
                If k=−D or k≠D and V[k−1]<V[k+1] Then
                    x ← V[k+1]
                Else
                    x ← V[k−1]+1
                y←x−k
                While x<N and y<M and a[x+1] =b[y+1] Do
                    (x,y)←(x+1,y+1)
                V[k]←x
                If x≥N and y≥M Then
                    Length of an SES is D
                    Stop
        */
        function toLines(file) {
            return file ? file.split(/\r?\n/) : [];
        }
        diff_1.toLines = toLines;
        // based on An O(ND) Difference Algorithm and Its Variations by EUGENE W. MYERS
        function compute(fileA, fileB, options) {
            if (options === void 0) { options = {}; }
            if (options.ignoreWhitespace) {
                fileA = fileA.replace(/[\r\n]+$/, "");
                fileB = fileB.replace(/[\r\n]+$/, "");
            }
            var a = toLines(fileA);
            var b = toLines(fileB);
            var MAX = Math.min(options.maxDiffSize || 1024, a.length + b.length);
            if (MAX == 0) // nothing to diff
                return [];
            var ctor = a.length > 0xfff0 ? Uint32Array : Uint16Array;
            var idxmap = {};
            var curridx = 0;
            var aidx = mkidx(a), bidx = mkidx(b);
            function mkidx(strings) {
                var idxarr = new ctor(strings.length);
                var i = 0;
                for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
                    var e = strings_1[_i];
                    if (options.ignoreWhitespace)
                        e = e.replace(/\s+$/g, "").replace(/^\s+/g, ''); // only ignore start/end of lines
                    if (idxmap.hasOwnProperty(e))
                        idxarr[i] = idxmap[e];
                    else {
                        ++curridx;
                        idxarr[i] = curridx;
                        idxmap[e] = curridx;
                    }
                    i++;
                }
                return idxarr;
            }
            var V = new ctor(2 * MAX + 1);
            var diffLen = -1;
            for (var D = 0; D <= MAX; D++) {
                if (computeFor(D, V) != null) {
                    diffLen = D;
                }
            }
            if (diffLen == -1)
                return null; // diffLen > MAX
            var trace = [];
            var endpoint = null;
            for (var D = 0; D <= diffLen; D++) {
                var V_1 = trace.length ? trace[trace.length - 1].slice(0) : new ctor(2 * diffLen + 1);
                trace.push(V_1);
                endpoint = computeFor(D, V_1);
                if (endpoint != null)
                    break;
            }
            var diff = [];
            var k = endpoint;
            for (var D = trace.length - 1; D >= 0; D--) {
                var V_2 = trace[D];
                var x = 0;
                var nextK = 0;
                if (k == -D || (k != D && V_2[MAX + k - 1] < V_2[MAX + k + 1])) {
                    nextK = k + 1;
                    x = V_2[MAX + nextK];
                }
                else {
                    nextK = k - 1;
                    x = V_2[MAX + nextK] + 1;
                }
                var y = x - k;
                var snakeLen = V_2[MAX + k] - x;
                for (var i = snakeLen - 1; i >= 0; --i)
                    diff.push("  " + b[y + i]);
                if (nextK == k - 1) {
                    diff.push("- " + a[x - 1]);
                }
                else {
                    if (y > 0)
                        diff.push("+ " + b[y - 1]);
                }
                k = nextK;
            }
            diff.reverse();
            if (options.context == Infinity || options.full)
                return diff;
            var aline = 1, bline = 1, idx = 0;
            var shortDiff = [];
            var context = options.context || 3;
            while (idx < diff.length) {
                var nextIdx = idx;
                while (nextIdx < diff.length && diff[nextIdx][0] == " ")
                    nextIdx++;
                if (nextIdx == diff.length)
                    break;
                var startIdx = nextIdx - context;
                var skip = startIdx - idx;
                if (skip > 0) {
                    aline += skip;
                    bline += skip;
                    idx = startIdx;
                }
                var hdPos = shortDiff.length;
                var aline0 = aline, bline0 = bline;
                shortDiff.push("@@"); // patched below
                var endIdx = idx;
                var numCtx = 0;
                while (endIdx < diff.length) {
                    if (diff[endIdx][0] == " ") {
                        numCtx++;
                        if (numCtx > context * 2 + 2) {
                            endIdx -= context + 2;
                            break;
                        }
                    }
                    else {
                        numCtx = 0;
                    }
                    endIdx++;
                }
                while (idx < endIdx) {
                    shortDiff.push(diff[idx]);
                    var c = diff[idx][0];
                    switch (c) {
                        case "-":
                            aline++;
                            break;
                        case "+":
                            bline++;
                            break;
                        case " ":
                            aline++;
                            bline++;
                            break;
                    }
                    idx++;
                }
                shortDiff[hdPos] = "@@ -" + aline0 + "," + (aline - aline0) + " +" + bline0 + "," + (bline - bline0) + " @@";
            }
            return shortDiff;
            function computeFor(D, V) {
                for (var k_1 = -D; k_1 <= D; k_1 += 2) {
                    var x = 0;
                    if (k_1 == -D || (k_1 != D && V[MAX + k_1 - 1] < V[MAX + k_1 + 1]))
                        x = V[MAX + k_1 + 1];
                    else
                        x = V[MAX + k_1 - 1] + 1;
                    var y = x - k_1;
                    while (x < aidx.length && y < bidx.length && aidx[x] == bidx[y]) {
                        x++;
                        y++;
                    }
                    V[MAX + k_1] = x;
                    if (x >= aidx.length && y >= bidx.length) {
                        return k_1;
                    }
                }
                return null;
            }
        }
        diff_1.compute = compute;
        // based on "A Formal Investigation of Diff3" by Sanjeev Khanna, Keshav Kunal, and Benjamin C. Pierce
        function diff3(fileA, fileO, fileB, lblA, lblB) {
            var ma = computeMatch(fileA);
            var mb = computeMatch(fileB);
            if (!ma || !mb) // diff failed, can't merge
                return undefined;
            var fa = toLines(fileA);
            var fb = toLines(fileB);
            var numConflicts = 0;
            var r = [];
            var la = 0, lb = 0;
            for (var i = 0; i < ma.length - 1;) {
                if (ma[i] == la && mb[i] == lb) {
                    r.push(fa[la]);
                    la++;
                    lb++;
                    i++;
                }
                else {
                    var aSame = true;
                    var bSame = true;
                    var j = i;
                    while (j < ma.length) {
                        if (ma[j] != la + j - i)
                            aSame = false;
                        if (mb[j] != lb + j - i)
                            bSame = false;
                        if (ma[j] != null && mb[j] != null)
                            break;
                        j++;
                    }
                    pxt.U.assert(j < ma.length);
                    if (aSame) {
                        while (lb < mb[j])
                            r.push(fb[lb++]);
                    }
                    else if (bSame) {
                        while (la < ma[j])
                            r.push(fa[la++]);
                    }
                    else if (fa.slice(la, ma[j]).join("\n") == fb.slice(lb, mb[j]).join("\n")) {
                        // false conflict - both are the same
                        while (la < ma[j])
                            r.push(fa[la++]);
                    }
                    else {
                        numConflicts++;
                        r.push("<<<<<<< " + lblA);
                        while (la < ma[j])
                            r.push(fa[la++]);
                        r.push("=======");
                        while (lb < mb[j])
                            r.push(fb[lb++]);
                        r.push(">>>>>>> " + lblB);
                    }
                    i = j;
                    la = ma[j];
                    lb = mb[j];
                }
            }
            return { merged: r.join("\n"), numConflicts: numConflicts };
            function computeMatch(fileA) {
                var da = compute(fileO, fileA, { context: Infinity });
                if (!da)
                    return undefined;
                var ma = [];
                var aidx = 0;
                var oidx = 0;
                // console.log(da)
                for (var _i = 0, da_1 = da; _i < da_1.length; _i++) {
                    var l = da_1[_i];
                    if (l[0] == "+") {
                        aidx++;
                    }
                    else if (l[0] == "-") {
                        ma[oidx] = null;
                        oidx++;
                    }
                    else if (l[0] == " ") {
                        ma[oidx] = aidx;
                        aidx++;
                        oidx++;
                    }
                    else {
                        pxt.U.oops();
                    }
                }
                ma.push(aidx + 1); // terminator
                return ma;
            }
        }
        diff_1.diff3 = diff3;
        function removeTrailingSemiColumns(src) {
            return toLines(src).map(function (line) { return line.replace(/;\s*$/, ''); }).join('\n');
        }
        diff_1.removeTrailingSemiColumns = removeTrailingSemiColumns;
        function split(dualSrc, options) {
            var src = dualSrc.split(/-{10,}/, 2);
            if (src.length < 2)
                return { fileA: dualSrc, fileB: undefined };
            var fileA = src[0].replace(/\n$/, ''); // intial new line introduced by html
            var fileB = src[1].replace(/^\n/, ''); // last new line introduct by html
            if (options && options.removeTrailingSemiColumns) {
                fileA = removeTrailingSemiColumns(fileA);
                fileB = removeTrailingSemiColumns(fileB);
            }
            return { fileA: fileA, fileB: fileB };
        }
        diff_1.split = split;
        function parseDiffMarker(ln) {
            var m = /^@@ -(\d+),(\d+) \+(\d+),(\d+)/.exec(ln);
            return m && {
                oldStart: parseInt(m[1]) - 1,
                oldLength: parseInt(m[2]),
                newStart: parseInt(m[3]) - 1,
                newLength: parseInt(m[4])
            };
        }
        diff_1.parseDiffMarker = parseDiffMarker;
        function render(fileA, fileB, options) {
            if (options === void 0) { options = {}; }
            var diffLines = compute(fileA, fileB, options);
            if (!diffLines) {
                return pxt.dom.el("div", null, pxtc.Util.lf("Too many differences to render diff."));
            }
            var diffClasses = {
                "@": "diff-marker",
                " ": "diff-unchanged",
                "+": "diff-added",
                "-": "diff-removed",
            };
            var lnA = 0, lnB = 0;
            var lastMark = "";
            var tbody = pxt.dom.el("tbody");
            var diffEl = pxt.dom.el("table", {
                "class": "diffview " + (options.update ? 'update' : '')
            }, tbody);
            var savedDiffEl = null;
            diffLines.forEach(function (ln, idx) {
                var m = parseDiffMarker(ln);
                if (m) {
                    lnA = m.oldStart;
                    lnB = m.newStart;
                }
                else {
                    if (ln[0] != "+")
                        lnA++;
                    if (ln[0] != "-")
                        lnB++;
                }
                var nextMark = diffLines[idx + 1] ? diffLines[idx + 1][0] : "";
                var next2Mark = diffLines[idx + 2] ? diffLines[idx + 2][0] : "";
                var lnSrc = ln.slice(2);
                var currDiff = pxt.dom.el("code", null, lnSrc);
                if (savedDiffEl) {
                    currDiff = savedDiffEl;
                    savedDiffEl = null;
                }
                else if (ln[0] == "-" && (lastMark == " " || lastMark == "@") && nextMark == "+"
                    && (next2Mark == " " || next2Mark == "@" || next2Mark == "")) {
                    var r = lineDiff(ln.slice(2), diffLines[idx + 1].slice(2));
                    currDiff = r.a;
                    savedDiffEl = r.b;
                }
                lastMark = ln[0];
                // check if line is skipped
                if ((options.hideMarkerLine && lastMark == "@")
                    || (options.hideRemoved && lastMark == "-"))
                    return;
                // add diff
                var isMarkerLine = lastMark == "@";
                var className = "" + diffClasses[lastMark];
                tbody.appendChild(pxt.dom.el("tr", { "class": className }, [
                    !options.hideLineNumbers && pxt.dom.el("td", { class: "line-a", "data-content": lnA }),
                    !options.hideLineNumbers && pxt.dom.el("td", { class: "line-b", "data-content": lnB }),
                    isMarkerLine && pxt.dom.el("td", { "colspan": 2, class: "change" }, pxt.dom.el("code", null, ln)),
                    !options.hideMarker && !isMarkerLine && pxt.dom.el("td", { class: "marker", "data-content": lastMark }),
                    !isMarkerLine && pxt.dom.el("td", { class: "change" }, currDiff)
                ]));
            });
            return diffEl;
        }
        diff_1.render = render;
        function lineDiff(lineA, lineB) {
            var df = compute(lineA.split("").join("\n"), lineB.split("").join("\n"), {
                context: Infinity
            });
            if (!df) // diff failed
                return {
                    a: pxt.dom.el("div", { "class": "inline-diff" }, pxt.dom.el("code", null, lineA)),
                    b: pxt.dom.el("div", { "class": "inline-diff" }, pxt.dom.el("code", null, lineB))
                };
            var ja = [];
            var jb = [];
            for (var i = 0; i < df.length;) {
                var j = i;
                var mark = df[i][0];
                while (df[j] && df[j][0] == mark)
                    j++;
                var chunk = df.slice(i, j).map(function (s) { return s.slice(2); }).join("");
                if (mark == " ") {
                    ja.push(pxt.dom.el("code", { "class": "ch-common" }, chunk));
                    jb.push(pxt.dom.el("code", { "class": "ch-common" }, chunk));
                }
                else if (mark == "-") {
                    ja.push(pxt.dom.el("code", { "class": "ch-removed" }, chunk));
                }
                else if (mark == "+") {
                    jb.push(pxt.dom.el("code", { "class": "ch-added" }, chunk));
                }
                else {
                    pxt.Util.oops();
                }
                i = j;
            }
            return {
                a: pxt.dom.el("div", { "class": "inline-diff" }, ja),
                b: pxt.dom.el("div", { "class": "inline-diff" }, jb)
            };
        }
        function resolveMergeConflictMarker(content, startMarkerLine, local, remote) {
            var lines = pxt.diff.toLines(content);
            var startLine = startMarkerLine;
            while (startLine < lines.length) {
                if (/^<<<<<<<[^<]/.test(lines[startLine])) {
                    break;
                }
                startLine++;
            }
            var middleLine = startLine + 1;
            while (middleLine < lines.length) {
                if (/^=======$/.test(lines[middleLine]))
                    break;
                middleLine++;
            }
            var endLine = middleLine + 1;
            while (endLine < lines.length) {
                if (/^>>>>>>>[^>]/.test(lines[endLine])) {
                    break;
                }
                endLine++;
            }
            if (endLine >= lines.length) {
                // no match?
                pxt.debug("diff marker mistmatch: " + lines.length + " -> " + startLine + " " + middleLine + " " + endLine);
                return content;
            }
            // remove locals
            lines[startLine] = undefined;
            lines[middleLine] = undefined;
            lines[endLine] = undefined;
            if (!local)
                for (var i = startLine; i <= middleLine; ++i)
                    lines[i] = undefined;
            if (!remote)
                for (var i = middleLine; i <= endLine; ++i)
                    lines[i] = undefined;
            return lines.filter(function (line) { return line !== undefined; }).join("\n");
        }
        diff_1.resolveMergeConflictMarker = resolveMergeConflictMarker;
        /**
         * A naive 3way merge for pxt.json files. It can mostly handle conflicts when adding/removing files concurrently.
         * - highest version number if kept
         * - current preferred editor is kept
         * - conjection of public flag
         * - files list is merged so that added files are kept and deleted files are removed
         * @param configA
         * @param configO
         * @param configB
         */
        function mergeDiff3Config(configA, configO, configB) {
            var jsonA = pxt.Util.jsonTryParse(configA); //  as pxt.PackageConfig
            var jsonO = pxt.Util.jsonTryParse(configO);
            var jsonB = pxt.Util.jsonTryParse(configB);
            // A is good, B destroyed
            if (jsonA && !jsonB)
                return configA; // keep A
            // A destroyed, B good, use B or O
            if (!jsonA)
                return configB || configO;
            // O is destroyed, B isnt, use B as O
            if (!jsonO && jsonB)
                jsonO = jsonB;
            // final check
            if (!jsonA || !jsonO || !jsonB)
                return undefined;
            delete jsonA.installedVersion;
            delete jsonO.installedVersion;
            delete jsonB.installedVersion;
            var r = {};
            var keys = pxt.U.unique(Object.keys(jsonO).concat(Object.keys(jsonA)).concat(Object.keys(jsonB)), function (l) { return l; });
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                var vA = jsonA[key];
                var vO = jsonO[key];
                var vB = jsonB[key];
                var svA = JSON.stringify(vA);
                var svB = JSON.stringify(vB);
                if (svA == svB) { // same serialized keys
                    if (vA !== undefined)
                        r[key] = vA;
                }
                else {
                    switch (key) {
                        case "name":
                            r[key] = mergeName(vA, vO, vB);
                            break;
                        case "version": // pick highest version
                            r[key] = pxt.semver.strcmp(vA, vB) > 0 ? vA : vB;
                            break;
                        case "languageRestriction":
                        case "preferredEditor":
                        case "targetVersion":
                            r[key] = vA; // keep current one
                            break;
                        case "public":
                            r[key] = vA && vB;
                            break;
                        case "files":
                        case "testFiles": { // merge file arrays
                            var m = mergeFiles(vA || [], vO || [], vB || []);
                            if (!m)
                                return undefined;
                            r[key] = m.length ? m : undefined;
                            break;
                        }
                        case "dependencies":
                        case "testDependencies": {
                            var m = mergeDependencies(vA || {}, vO || {}, vB || {});
                            if (Object.keys(m).length)
                                return undefined;
                            r[key] = m;
                            break;
                        }
                        case "description":
                            if (vA && !vB)
                                r[key] = vA; // new description
                            else if (!vA && vB)
                                r[key] = vB;
                            else
                                return undefined;
                            break;
                        default:
                            return undefined;
                    }
                }
            }
            return pxt.Package.stringifyConfig(r);
            function mergeName(fA, fO, fB) {
                if (fA == fO)
                    return fB;
                if (fB == fO)
                    return fA;
                if (fA == lf("Untitled"))
                    return fB;
                return fA;
            }
            function mergeFiles(fA, fO, fB) {
                var r = [];
                var fkeys = pxt.U.unique(fO.concat(fA).concat(fB), function (l) { return l; });
                for (var _i = 0, fkeys_1 = fkeys; _i < fkeys_1.length; _i++) {
                    var fkey = fkeys_1[_i];
                    var mA = fA.indexOf(fkey) > -1;
                    var mB = fB.indexOf(fkey) > -1;
                    var mO = fO.indexOf(fkey) > -1;
                    if (mA == mB) { // both have or have nots
                        if (mA) // key is in set
                            r.push(fkey);
                    }
                    else { // conflict
                        if (mB == mO) { // mB not changed, false conflict
                            if (mA) // item added
                                r.push(fkey);
                        }
                        else { // mA == mO, conflict
                            if (mB) // not deleted by A
                                r.push(fkey);
                        }
                    }
                }
                return r;
            }
            function mergeDependencies(fA, fO, fB) {
                var r = {};
                var fkeys = pxt.U.unique(Object.keys(fO).concat(Object.keys(fA)).concat(Object.keys(fB)), function (l) { return l; });
                for (var _i = 0, fkeys_2 = fkeys; _i < fkeys_2.length; _i++) {
                    var fkey = fkeys_2[_i];
                    var mA = fA[fkey];
                    var mB = fB[fkey];
                    var mO = fO[fkey];
                    if (mA == mB) { // both have or have nots
                        if (mA) // key is in set
                            r[fkey] = mA;
                    }
                    else { // conflict
                        // check if it is a version change in github reference
                        var ghA = pxt.github.parseRepoId(mA);
                        var ghB = pxt.github.parseRepoId(mB);
                        if (ghA && ghB
                            && pxt.semver.tryParse(ghA.tag)
                            && pxt.semver.tryParse(ghB.tag)
                            && ghA.owner && ghA.project
                            && ghA.owner == ghB.owner
                            && ghA.project == ghB.project) {
                            var newtag = pxt.semver.strcmp(ghA.tag, ghB.tag) > 0
                                ? ghA.tag : ghB.tag;
                            r[fkey] = "github:" + ghA.owner + "/" + ghA.project + "#" + newtag;
                        }
                        else if (mB == mO) { // mB not changed, false conflict
                            if (mA) // item added
                                r[fkey] = mA;
                        }
                        else { // mA == mO, conflict
                            if (mB) // not deleted by A
                                r[fkey] = mB;
                        }
                    }
                }
                return r;
            }
        }
        diff_1.mergeDiff3Config = mergeDiff3Config;
        function hasMergeConflictMarker(content) {
            return content && /^(<<<<<<<[^<]|>>>>>>>[^>])/m.test(content);
        }
        diff_1.hasMergeConflictMarker = hasMergeConflictMarker;
        function reconstructConfig(files, commit, tp) {
            var dependencies = {};
            // grab files from commit
            var commitFiles = commit.tree.tree.map(function (f) { return f.path; })
                .filter(function (f) { return /\.(ts|blocks|md|jres|asm|json)$/.test(f); })
                .filter(function (f) { return f != pxt.CONFIG_NAME; });
            // if no available files, include the files from the template
            if (!commitFiles.find(function (f) { return /\.ts$/.test(f); })) {
                tp.config.files.filter(function (f) { return commitFiles.indexOf(f) < 0; })
                    .forEach(function (f) {
                    commitFiles.push(f);
                    files[f] = tp.files[f];
                });
                pxt.Util.jsonCopyFrom(dependencies, tp.config.dependencies);
            }
            // include corepkg if no dependencies
            if (!Object.keys(dependencies).length)
                dependencies[pxt.appTarget.corepkg] = "*";
            // yay, we have a new cfg
            var cfg = {
                name: "",
                files: commitFiles,
                dependencies: dependencies,
                preferredEditor: commitFiles.find(function (f) { return /.blocks$/.test(f); }) ? pxt.BLOCKS_PROJECT_NAME : pxt.JAVASCRIPT_PROJECT_NAME
            };
            return cfg;
        }
        diff_1.reconstructConfig = reconstructConfig;
    })(diff = pxt.diff || (pxt.diff = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var discourse;
    (function (discourse) {
        function extractSharedIdFromPostUrl(url) {
            // https://docs.discourse.org/#tag/Posts%2Fpaths%2F~1posts~1%7Bid%7D.json%2Fget
            return pxt.Util.httpGetJsonAsync(url + ".json")
                .then(function (json) {
                // extract from post_stream
                var projectId = json.post_stream
                    && json.post_stream.posts
                    && json.post_stream.posts[0]
                    && json.post_stream.posts[0].link_counts
                        .map(function (link) { return pxt.Cloud.parseScriptId(link.url); })
                        .filter(function (id) { return !!id; })[0];
                return projectId;
            });
        }
        discourse.extractSharedIdFromPostUrl = extractSharedIdFromPostUrl;
        function topicsByTag(apiUrl, tag) {
            apiUrl = apiUrl.replace(/\/$/, '');
            var q = apiUrl + "/tags/" + tag + ".json";
            return pxt.Util.httpGetJsonAsync(q)
                .then(function (json) {
                var users = pxt.Util.toDictionary(json.users, function (u) { return u.id.toString(); });
                return json.topic_list.topics.map(function (t) {
                    return {
                        id: t.id,
                        title: t.title,
                        url: apiUrl + "/t/" + t.slug + "/" + t.id,
                        imageUrl: t.image_url,
                        author: users[t.posters[0].user_id].username,
                        cardType: "forumUrl"
                    };
                });
            });
        }
        discourse.topicsByTag = topicsByTag;
    })(discourse = pxt.discourse || (pxt.discourse = {}));
})(pxt || (pxt = {}));
/// <reference path='../localtypings/pxtarget.d.ts' />
/// <reference path='../localtypings/dompurify.d.ts' />
/// <reference path="commonutil.ts"/>
var pxt;
(function (pxt) {
    var docs;
    (function (docs) {
        var U = pxtc.Util;
        var markedInstance;
        var stdboxes = {};
        var stdmacros = {};
        var stdSetting = "<!-- @CMD@ @ARGS@ -->";
        var stdsettings = {
            "parent": stdSetting,
            "short": stdSetting,
            "description": "<!-- desc -->",
            "activities": "<!-- activities -->",
            "explicitHints": "<!-- hints -->",
            "flyoutOnly": "<!-- flyout -->",
            "hideIteration": "<!-- iter -->",
            "codeStart": "<!-- start -->",
            "codeStop": "<!-- stop -->",
            "autoOpen": "<!-- autoOpen -->"
        };
        function replaceAll(replIn, x, y) {
            return replIn.split(x).join(y);
        }
        function htmlQuote(s) {
            s = replaceAll(s, "&", "&amp;");
            s = replaceAll(s, "<", "&lt;");
            s = replaceAll(s, ">", "&gt;");
            s = replaceAll(s, "\"", "&quot;");
            s = replaceAll(s, "\'", "&#39;");
            return s;
        }
        docs.htmlQuote = htmlQuote;
        // the input already should be HTML-quoted but we want to make sure, and also quote quotes
        function html2Quote(s) {
            if (!s)
                return s;
            return htmlQuote(s.replace(/\&([#a-z0-9A-Z]+);/g, function (f, ent) {
                switch (ent) {
                    case "amp": return "&";
                    case "lt": return "<";
                    case "gt": return ">";
                    case "quot": return "\"";
                    default:
                        if (ent[0] == "#")
                            return String.fromCharCode(parseInt(ent.slice(1)));
                        else
                            return f;
                }
            }));
        }
        docs.html2Quote = html2Quote;
        //The extra YouTube macros are in case there is a timestamp on the YouTube URL.
        //TODO: Add equivalent support for youtu.be links
        var links = [
            {
                rx: /^vimeo\.com\/(\d+)/i,
                cmd: "### @vimeo $1"
            },
            {
                rx: /^(www\.youtube\.com\/watch\?v=|youtu\.be\/)([\w\-]+(\#t=([0-9]+m[0-9]+s|[0-9]+m|[0-9]+s))?)/i,
                cmd: "### @youtube $2"
            }
        ];
        docs.requireMarked = function () {
            if (typeof marked !== "undefined")
                return marked;
            if (typeof require === "undefined")
                return undefined;
            return require("marked");
        };
        docs.requireDOMSanitizer = function () {
            if (typeof DOMPurify !== "undefined")
                return DOMPurify.sanitize;
            if (typeof require === "undefined")
                return undefined;
            return require("DOMPurify").sanitize;
        };
        function parseHtmlAttrs(s) {
            var attrs = {};
            while (s.trim()) {
                var m = /\s*([^=\s]+)=("([^"]*)"|'([^']*)'|(\S*))/.exec(s);
                if (m) {
                    var v = m[3] || m[4] || m[5] || "";
                    attrs[m[1].toLowerCase()] = v;
                }
                else {
                    m = /^\s*(\S+)/.exec(s);
                    attrs[m[1]] = "true";
                }
                s = s.slice(m[0].length);
            }
            return attrs;
        }
        var error = function (s) {
            return "<div class='ui negative message'>" + htmlQuote(s) + "</div>";
        };
        function prepTemplate(d) {
            var boxes = U.clone(stdboxes);
            var macros = U.clone(stdmacros);
            var settings = U.clone(stdsettings);
            var menus = {};
            var toc = {};
            var params = d.params;
            var theme = d.theme;
            d.boxes = boxes;
            d.macros = macros;
            d.settings = settings;
            d.html = d.html.replace(/<aside\s+([^<>]+)>([^]*?)<\/aside>/g, function (full, attrsStr, body) {
                var attrs = parseHtmlAttrs(attrsStr);
                var name = attrs["data-name"] || attrs["id"];
                if (!name)
                    return error("id or data-name missing on macro");
                if (/box/.test(attrs["class"])) {
                    boxes[name] = body;
                }
                else if (/aside/.test(attrs["class"])) {
                    boxes[name] = "<!-- BEGIN-ASIDE " + name + " -->" + body + "<!-- END-ASIDE -->";
                }
                else if (/setting/.test(attrs["class"])) {
                    settings[name] = body;
                }
                else if (/menu/.test(attrs["class"])) {
                    menus[name] = body;
                }
                else if (/toc/.test(attrs["class"])) {
                    toc[name] = body;
                }
                else {
                    macros[name] = body;
                }
                return "<!-- macro " + name + " -->";
            });
            var recMenu = function (m, lev) {
                var templ = menus["item"];
                var mparams = {
                    NAME: m.name,
                };
                if (m.subitems) {
                    if (!!menus["toc-dropdown"]) {
                        templ = menus["toc-dropdown"];
                    }
                    else {
                        /** TODO: when all targets bumped to include https://github.com/microsoft/pxt/pull/6058,
                         * swap templ assignments below with the commented out version, and remove
                         * top-dropdown, top-dropdown-noheading, inner-dropdown, and nested-dropdown from
                         * docfiles/macros.html **/
                        if (lev == 0)
                            templ = menus["top-dropdown"];
                        else
                            templ = menus["inner-dropdown"];
                    }
                    mparams["ITEMS"] = m.subitems.map(function (e) { return recMenu(e, lev + 1); }).join("\n");
                }
                else {
                    if (/^-+$/.test(m.name)) {
                        templ = menus["divider"];
                    }
                    if (m.path && !/^(https?:|\/)/.test(m.path))
                        return error("Invalid link: " + m.path);
                    mparams["LINK"] = m.path;
                }
                return injectHtml(templ, mparams, ["ITEMS"]);
            };
            var breadcrumb = [{
                    name: lf("Docs"),
                    href: "/docs"
                }];
            var TOC = d.TOC || theme.TOC || [];
            var tocPath = [];
            var isCurrentTOC = function (m) {
                for (var _i = 0, _a = m.subitems || []; _i < _a.length; _i++) {
                    var c = _a[_i];
                    if (isCurrentTOC(c)) {
                        tocPath.push(m);
                        return true;
                    }
                }
                if (d.filepath && !!m.path && d.filepath.indexOf(m.path) == 0) {
                    tocPath.push(m);
                    return true;
                }
                return false;
            };
            TOC.forEach(isCurrentTOC);
            var recTOC = function (m, lev) {
                var templ = toc["item"];
                var mparams = {
                    NAME: m.name,
                };
                if (m.path && !/^(https?:|\/)/.test(m.path))
                    return error("Invalid link: " + m.path);
                if (/^\//.test(m.path) && d.versionPath)
                    m.path = "/" + d.versionPath + m.path;
                mparams["LINK"] = m.path;
                if (tocPath.indexOf(m) >= 0) {
                    mparams["ACTIVE"] = 'active';
                    mparams["EXPANDED"] = 'true';
                    breadcrumb.push({
                        name: m.name,
                        href: m.path
                    });
                }
                else {
                    mparams["EXPANDED"] = 'false';
                }
                if (m.subitems && m.subitems.length > 0) {
                    if (!!toc["toc-dropdown"]) {
                        // if macros support "toc-*", use them
                        if (m.name !== "") {
                            templ = toc["toc-dropdown"];
                        }
                        else {
                            templ = toc["toc-dropdown-noLink"];
                        }
                    }
                    else {
                        // if macros don't support "toc-*"
                        /** TODO: when all targets bumped to include https://github.com/microsoft/pxt/pull/6058,
                         * delete this else branch, and remove
                         * top-dropdown, top-dropdown-noheading, inner-dropdown, and nested-dropdown from
                         * docfiles/macros.html **/
                        if (lev == 0) {
                            if (m.name !== "") {
                                templ = toc["top-dropdown"];
                            }
                            else {
                                templ = toc["top-dropdown-noHeading"];
                            }
                        }
                        else if (lev == 1)
                            templ = toc["inner-dropdown"];
                        else
                            templ = toc["nested-dropdown"];
                    }
                    mparams["ITEMS"] = m.subitems.map(function (e) { return recTOC(e, lev + 1); }).join("\n");
                }
                else {
                    if (/^-+$/.test(m.name)) {
                        templ = toc["divider"];
                    }
                }
                return injectHtml(templ, mparams, ["ITEMS"]);
            };
            params["menu"] = (theme.docMenu || []).map(function (e) { return recMenu(e, 0); }).join("\n");
            params["TOC"] = TOC.map(function (e) { return recTOC(e, 0); }).join("\n");
            if (theme.appStoreID)
                params["appstoremeta"] = "<meta name=\"apple-itunes-app\" content=\"app-id=" + U.htmlEscape(theme.appStoreID) + "\"/>";
            var breadcrumbHtml = '';
            if (breadcrumb.length > 1) {
                breadcrumbHtml = "\n            <nav class=\"ui breadcrumb\" aria-label=\"" + lf("Breadcrumb") + "\">\n                " + breadcrumb.map(function (b, i) {
                    return "<a class=\"" + (i == breadcrumb.length - 1 ? "active" : "") + " section\"\n                        href=\"" + html2Quote(b.href) + "\" aria-current=\"" + (i == breadcrumb.length - 1 ? "page" : "") + "\">" + html2Quote(b.name) + "</a>";
                })
                    .join('<i class="right chevron icon divider"></i>') + "\n            </nav>";
            }
            params["breadcrumb"] = breadcrumbHtml;
            if (theme.boardName)
                params["boardname"] = html2Quote(theme.boardName);
            if (theme.boardNickname)
                params["boardnickname"] = html2Quote(theme.boardNickname);
            if (theme.driveDisplayName)
                params["drivename"] = html2Quote(theme.driveDisplayName);
            if (theme.homeUrl)
                params["homeurl"] = html2Quote(theme.homeUrl);
            params["targetid"] = theme.id || "???";
            params["targetname"] = theme.name || "Microsoft MakeCode";
            params["docsheader"] = theme.docsHeader || "Documentation";
            params["targetlogo"] = theme.docsLogo ? "<img aria-hidden=\"true\" role=\"presentation\" class=\"ui " + (theme.logoWide ? "small" : "mini") + " image\" src=\"" + theme.docsLogo + "\" />" : "";
            var ghURLs = d.ghEditURLs || [];
            if (ghURLs.length) {
                var ghText = "<p style=\"margin-top:1em\">\n";
                var linkLabel = lf("Edit this page on GitHub");
                for (var _i = 0, ghURLs_1 = ghURLs; _i < ghURLs_1.length; _i++) {
                    var u = ghURLs_1[_i];
                    ghText += "<a href=\"" + u + "\"><i class=\"write icon\"></i>" + linkLabel + "</a><br>\n";
                    linkLabel = lf("Edit template of this page on GitHub");
                }
                ghText += "</p>\n";
                params["github"] = ghText;
            }
            else {
                params["github"] = "";
            }
            // Add accessiblity menu
            var accMenuHtml = "\n            <a href=\"#maincontent\" class=\"ui item link\" tabindex=\"0\" role=\"menuitem\">" + lf("Skip to main content") + "</a>\n        ";
            params['accMenu'] = accMenuHtml;
            var printButtonTitleText = lf("Print this page");
            // Add print button
            var printBtnHtml = "\n            <button id=\"printbtn\" class=\"circular ui icon right floated button hideprint\" title=\"" + printButtonTitleText + "\" aria-label=\"" + printButtonTitleText + "\">\n                <i class=\"icon print\"></i>\n            </button>\n        ";
            params['printBtn'] = printBtnHtml;
            // Add sidebar toggle
            var sidebarToggleHtml = "\n            <a id=\"togglesidebar\" class=\"launch icon item\" tabindex=\"0\" title=\"Side menu\" aria-label=\"" + lf("Side menu") + "\" role=\"menuitem\" aria-expanded=\"false\">\n                <i class=\"content icon\"></i>\n            </a>\n        ";
            params['sidebarToggle'] = sidebarToggleHtml;
            // Add search bars
            var searchBarIds = ['tocsearch1', 'tocsearch2'];
            var searchBarsHtml = searchBarIds.map(function (searchBarId) {
                return "\n                <input type=\"search\" name=\"q\" placeholder=\"" + lf("Search...") + "\" aria-label=\"" + lf("Search Documentation") + "\">\n                <i onclick=\"document.getElementById('" + searchBarId + "').submit();\" tabindex=\"0\" class=\"search link icon\" aria-label=\"" + lf("Search") + "\" role=\"button\"></i>\n            ";
            });
            params["searchBar1"] = searchBarsHtml[0];
            params["searchBar2"] = searchBarsHtml[1];
            var style = '';
            if (theme.accentColor)
                style += "\n.ui.accent { color: " + theme.accentColor + "; }\n.ui.inverted.accent { background: " + theme.accentColor + "; }\n";
            params["targetstyle"] = style;
            params["tocclass"] = theme.lightToc ? "lighttoc" : "inverted";
            for (var _a = 0, _b = Object.keys(theme); _a < _b.length; _a++) {
                var k = _b[_a];
                var v = theme[k];
                if (params[k] === undefined && typeof v == "string")
                    params[k] = v;
            }
            d.finish = function () { return injectHtml(d.html, params, [
                "body",
                "menu",
                "accMenu",
                "TOC",
                "prev",
                "next",
                "printBtn",
                "breadcrumb",
                "targetlogo",
                "github",
                "JSON",
                "appstoremeta",
                "sidebarToggle",
                "searchBar1",
                "searchBar2"
            ]); };
            // Normalize any path URL with any version path in the current URL
            function normalizeUrl(href) {
                if (!href)
                    return href;
                var relative = href.indexOf('/') == 0;
                if (relative && d.versionPath)
                    href = "/" + d.versionPath + href;
                return href;
            }
        }
        docs.prepTemplate = prepTemplate;
        function setupRenderer(renderer) {
            renderer.image = function (href, title, text) {
                var out = '<img class="ui image" src="' + href + '" alt="' + text + '"';
                if (title) {
                    out += ' title="' + title + '"';
                }
                out += ' loading="lazy"';
                out += this.options.xhtml ? '/>' : '>';
                return out;
            };
            renderer.listitem = function (text) {
                var m = /^\s*\[( |x)\]/i.exec(text);
                if (m)
                    return "<li class=\"" + (m[1] == ' ' ? 'unchecked' : 'checked') + "\">" + text.slice(m[0].length) + '</li>\n';
                return '<li>' + text + '</li>\n';
            };
            renderer.heading = function (text, level, raw) {
                var m = /(.*)#([\w\-]+)\s*$/.exec(text);
                var id = "";
                if (m) {
                    text = m[1];
                    id = m[2];
                }
                else {
                    id = raw.toLowerCase().replace(/[^\w]+/g, '-');
                }
                // remove tutorial macros
                if (text)
                    text = text.replace(/@(fullscreen|unplugged|showdialog|showhint)/gi, '');
                return "<h" + level + " id=\"" + this.options.headerPrefix + id + "\">" + text + "</h" + level + ">";
            };
        }
        docs.setupRenderer = setupRenderer;
        function renderConditionalMacros(template, pubinfo) {
            return template
                .replace(/<!--\s*@(ifn?def)\s+(\w+)\s*-->([^]*?)<!--\s*@endif\s*-->/g, function (full, cond, sym, inner) {
                if ((cond == "ifdef" && pubinfo[sym]) || (cond == "ifndef" && !pubinfo[sym]))
                    return "<!-- " + cond + " " + sym + " -->" + inner + "<!-- endif -->";
                else
                    return "<!-- " + cond + " " + sym + " endif -->";
            });
        }
        docs.renderConditionalMacros = renderConditionalMacros;
        function renderMarkdown(opts) {
            var hasPubInfo = true;
            if (!opts.pubinfo) {
                hasPubInfo = false;
                opts.pubinfo = {};
            }
            var pubinfo = opts.pubinfo;
            if (!opts.theme)
                opts.theme = {};
            delete opts.pubinfo["private"]; // just in case
            if (pubinfo["time"]) {
                var tm = parseInt(pubinfo["time"]);
                if (!pubinfo["timems"])
                    pubinfo["timems"] = 1000 * tm + "";
                if (!pubinfo["humantime"])
                    pubinfo["humantime"] = U.isoTime(tm);
            }
            if (pubinfo["name"]) {
                pubinfo["dirname"] = pubinfo["name"].replace(/[^A-Za-z0-9_]/g, "-");
                pubinfo["title"] = pubinfo["name"];
            }
            if (hasPubInfo) {
                pubinfo["JSON"] = JSON.stringify(pubinfo, null, 4).replace(/</g, "\\u003c");
            }
            var template = opts.template;
            template = template
                .replace(/<!--\s*@include\s+(\S+)\s*-->/g, function (full, fn) {
                var cont = (opts.theme.htmlDocIncludes || {})[fn] || "";
                return "<!-- include " + fn + " -->\n" + cont + "\n<!-- end include -->\n";
            });
            template = renderConditionalMacros(template, pubinfo);
            if (opts.locale)
                template = translate(template, opts.locale).text;
            var d = {
                html: template,
                theme: opts.theme,
                filepath: opts.filepath,
                versionPath: opts.versionPath,
                ghEditURLs: opts.ghEditURLs,
                params: pubinfo,
                TOC: opts.TOC
            };
            prepTemplate(d);
            if (!markedInstance) {
                markedInstance = docs.requireMarked();
            }
            // We have to re-create the renderer every time to avoid the link() function's closure capturing the opts
            var renderer = new markedInstance.Renderer();
            setupRenderer(renderer);
            var linkRenderer = renderer.link;
            renderer.link = function (href, title, text) {
                var relative = new RegExp('^[/#]').test(href);
                var target = !relative ? '_blank' : '';
                if (relative && d.versionPath)
                    href = "/" + d.versionPath + href;
                var html = linkRenderer.call(renderer, href, title, text);
                return html.replace(/^<a /, "<a " + (target ? "target=\"" + target + "\"" : '') + " rel=\"nofollow noopener\" ");
            };
            var sanitizer = docs.requireDOMSanitizer();
            markedInstance.setOptions({
                renderer: renderer,
                gfm: true,
                tables: true,
                breaks: false,
                pedantic: false,
                sanitize: true,
                sanitizer: sanitizer,
                smartLists: true,
                smartypants: true
            });
            var markdown = opts.markdown;
            // append repo info if any
            if (opts.repo)
                markdown += "\n```package\n" + opts.repo.name.replace(/^pxt-/, '') + "=github:" + opts.repo.fullName + "#" + (opts.repo.tag || "master") + "\n```\n";
            //Uses the CmdLink definitions to replace links to YouTube and Vimeo (limited at the moment)
            markdown = markdown.replace(/^\s*https?:\/\/(\S+)\s*$/mg, function (f, lnk) {
                var _loop_2 = function (ent) {
                    var m = ent.rx.exec(lnk);
                    if (m) {
                        return { value: ent.cmd.replace(/\$(\d+)/g, function (f, k) {
                                return m[parseInt(k)] || "";
                            }) + "\n" };
                    }
                };
                for (var _i = 0, links_1 = links; _i < links_1.length; _i++) {
                    var ent = links_1[_i];
                    var state_1 = _loop_2(ent);
                    if (typeof state_1 === "object")
                        return state_1.value;
                }
                return f;
            });
            // replace pre-template in markdown
            markdown = markdown.replace(/@([a-z]+)@/ig, function (m, param) {
                var macro = pubinfo[param];
                if (!macro && opts.throwOnError)
                    U.userError("unknown macro " + param);
                return macro || 'unknown macro';
            });
            var html = markedInstance(markdown);
            // support for breaks which somehow don't work out of the box
            html = html.replace(/&lt;br\s*\/&gt;/ig, "<br/>");
            // github will render images if referenced as ![](/docs/static/foo.png)
            // we require /static/foo.png
            html = html.replace(/(<img [^>]* src=")\/docs\/static\/([^">]+)"/g, function (f, pref, addr) { return pref + '/static/' + addr + '"'; });
            var endBox = "";
            var boxSize = 0;
            function appendEndBox(size, box, html) {
                var r = html;
                if (size <= boxSize) {
                    r = endBox + r;
                    endBox = "";
                    boxSize = 0;
                }
                return r;
            }
            html = html.replace(/<h(\d)[^>]+>\s*([~@])?\s*(.*?)<\/h\d>/g, function (f, lvl, tp, body) {
                var m = /^(\w+)\s+(.*)/.exec(body);
                var cmd = m ? m[1] : body;
                var args = m ? m[2] : "";
                var rawArgs = args;
                args = html2Quote(args);
                cmd = html2Quote(cmd);
                lvl = parseInt(lvl);
                if (!tp) {
                    return appendEndBox(lvl, endBox, f);
                }
                else if (tp == "@") {
                    var expansion = U.lookup(d.settings, cmd);
                    if (expansion != null) {
                        pubinfo[cmd] = args;
                    }
                    else {
                        expansion = U.lookup(d.macros, cmd);
                        if (expansion == null) {
                            if (opts.throwOnError)
                                U.userError("Unknown command: @" + cmd);
                            return error("Unknown command: @" + cmd);
                        }
                    }
                    var ivars = {
                        ARGS: args,
                        CMD: cmd
                    };
                    return appendEndBox(lvl, endBox, injectHtml(expansion, ivars, ["ARGS", "CMD"]));
                }
                else {
                    if (!cmd) {
                        var r = endBox;
                        endBox = "";
                        return r;
                    }
                    var box = U.lookup(d.boxes, cmd);
                    if (box) {
                        var parts = box.split("@BODY@");
                        var r = appendEndBox(lvl, endBox, parts[0].replace("@ARGS@", args));
                        endBox = parts[1];
                        var attrs = box.match(/data-[^>\s]+/ig);
                        if (attrs && attrs.indexOf('data-inferred') >= 0) {
                            boxSize = lvl;
                        }
                        return r;
                    }
                    else {
                        if (opts.throwOnError)
                            U.userError("Unknown box: ~ " + cmd);
                        return error("Unknown box: ~ " + cmd);
                    }
                }
            });
            if (endBox)
                html = html + endBox;
            if (!pubinfo["title"]) {
                var titleM = /<h1[^<>]*>([^<>]+)<\/h1>/.exec(html);
                if (titleM)
                    pubinfo["title"] = html2Quote(titleM[1]);
            }
            if (!pubinfo["description"]) {
                var descM = /<p>([^]+?)<\/p>/.exec(html);
                if (descM)
                    pubinfo["description"] = html2Quote(descM[1]);
            }
            // try getting a better custom image for twitter
            var imgM = /<div class="ui embed mdvid"[^<>]+?data-placeholder="([^"]+)"[^>]*\/?>/i.exec(html)
                || /<img class="ui [^"]*image" src="([^"]+)"[^>]*\/?>/i.exec(html);
            if (imgM)
                pubinfo["cardLogo"] = html2Quote(imgM[1]);
            pubinfo["twitter"] = html2Quote(opts.theme.twitter || "@msmakecode");
            var registers = {};
            registers["main"] = ""; // first
            html = html.replace(/<!-- BEGIN-ASIDE (\S+) -->([^]*?)<!-- END-ASIDE -->/g, function (f, nam, cont) {
                var s = U.lookup(registers, nam);
                registers[nam] = (s || "") + cont;
                return "<!-- aside -->";
            });
            // fix up spourious newlines at the end of code blocks
            html = html.replace(/\n<\/code>/g, "</code>");
            registers["main"] = html;
            var injectBody = function (tmpl, body) {
                return injectHtml(d.boxes[tmpl] || "@BODY@", { BODY: body }, ["BODY"]);
            };
            html = "";
            for (var _i = 0, _a = Object.keys(registers); _i < _a.length; _i++) {
                var k = _a[_i];
                html += injectBody(k + "-container", registers[k]);
            }
            pubinfo["body"] = html;
            // don't mangle target name in title, it is already in the sitename
            pubinfo["name"] = pubinfo["title"] || "";
            for (var _b = 0, _c = Object.keys(opts.theme); _b < _c.length; _b++) {
                var k = _c[_b];
                var v = opts.theme[k];
                if (typeof v == "string")
                    pubinfo["theme_" + k] = v;
            }
            return d.finish();
        }
        docs.renderMarkdown = renderMarkdown;
        function injectHtml(template, vars, quoted) {
            if (quoted === void 0) { quoted = []; }
            if (!template)
                return '';
            return template.replace(/@(\w+)@/g, function (f, key) {
                var res = U.lookup(vars, key) || "";
                res += ""; // make sure it's a string
                if (quoted.indexOf(key) < 0) {
                    res = html2Quote(res);
                }
                return res;
            });
        }
        function embedUrl(rootUrl, tag, id, height) {
            var url = rootUrl + "#" + tag + ":" + id;
            var padding = '70%';
            return "<div style=\"position:relative;height:0;padding-bottom:" + padding + ";overflow:hidden;\"><iframe style=\"position:absolute;top:0;left:0;width:100%;height:100%;\" src=\"" + url + "\" frameborder=\"0\" sandbox=\"allow-popups allow-forms allow-scripts allow-same-origin\"></iframe></div>";
        }
        docs.embedUrl = embedUrl;
        function runUrl(url, padding, id) {
            var embed = "<div style=\"position:relative;height:0;padding-bottom:" + padding + ";overflow:hidden;\"><iframe style=\"position:absolute;top:0;left:0;width:100%;height:100%;\" src=\"" + url + "?id=" + encodeURIComponent(id) + "\" allowfullscreen=\"allowfullscreen\" sandbox=\"allow-popups allow-forms allow-scripts allow-same-origin\" frameborder=\"0\"></iframe></div>";
            return embed;
        }
        docs.runUrl = runUrl;
        function codeEmbedUrl(rootUrl, id, height) {
            var docurl = rootUrl + "---codeembed#pub:" + id;
            height = Math.ceil(height || 300);
            return "<div style=\"position:relative;height:calc(" + height + "px + 5em);width:100%;overflow:hidden;\"><iframe style=\"position:absolute;top:0;left:0;width:100%;height:100%;\" src=\"" + docurl + "\" allowfullscreen=\"allowfullscreen\" frameborder=\"0\" sandbox=\"allow-scripts allow-same-origin\"></iframe></div>";
        }
        docs.codeEmbedUrl = codeEmbedUrl;
        var inlineTags = {
            b: 1,
            strong: 1,
            em: 1,
        };
        function translate(html, locale) {
            var missing = {};
            function translateOne(toTranslate) {
                var spm = /^(\s*)([^]*?)(\s*)$/.exec(toTranslate);
                var text = spm[2].replace(/\s+/g, " ");
                if (text == "" || /^((IE=edge,.*|width=device-width.*|(https?:\/\/|\/)[\w@\/\.]+|@[\-\w]+@|\{[^\{\}]+\}|[^a-zA-Z]*|(&nbsp;)+)\s*)+$/.test(text))
                    return null;
                var v = U.lookup(locale, text);
                if (v)
                    text = v;
                else
                    missing[text] = "";
                return spm[1] + text + spm[3];
            }
            html = html.replace(/<([\/\w]+)([^<>]*)>/g, function (full, tagname, args) {
                var key = tagname.replace(/^\//, "").toLowerCase();
                if (inlineTags[key] === 1)
                    return "&llt;" + tagname + args + "&ggt;";
                return full;
            });
            function ungt(s) {
                return s.replace(/&llt;/g, "<").replace(/&ggt;/g, ">");
            }
            html = "<start>" + html;
            html = html.replace(/(<([\/\w]+)([^<>]*)>)([^<>]+)/g, function (full, fullTag, tagname, args, str) {
                if (tagname == "script" || tagname == "style")
                    return ungt(full);
                var tr = translateOne(ungt(str));
                if (tr == null)
                    return ungt(full);
                return fullTag + tr;
            });
            html = html.replace(/(<[^<>]*)(content|placeholder|alt|title)="([^"]+)"/g, function (full, pref, attr, text) {
                var tr = translateOne(text);
                if (tr == null)
                    return full;
                return pref + attr + '="' + text.replace(/"/g, "''") + '"';
            });
            html = html.replace(/^<start>/g, "");
            return {
                text: html,
                missing: missing
            };
        }
        docs.translate = translate;
        function lookupSection(template, id) {
            if (template.id == id)
                return template;
            for (var _i = 0, _a = template.children; _i < _a.length; _i++) {
                var ch = _a[_i];
                var r = lookupSection(ch, id);
                if (r)
                    return r;
            }
            return null;
        }
        function splitMdSections(md, template) {
            var lineNo = 0;
            var openSections = [{
                    level: 0,
                    id: "",
                    title: "",
                    start: lineNo,
                    text: "",
                    children: []
                }];
            md = md.replace(/\r/g, "");
            var lines = md.split(/\n/);
            var skipThese = {};
            var _loop_3 = function (l) {
                var m = /^\s*(#+)\s*(.*?)(#(\S+)\s*)?$/.exec(l);
                var templSect = null;
                if (template && m) {
                    if (!m[4])
                        m = null;
                    else if (skipThese[m[4]])
                        m = null;
                    else {
                        templSect = lookupSection(template, m[4]);
                        var skip_1 = function (s) {
                            if (s.id)
                                skipThese[s.id] = true;
                            s.children.forEach(skip_1);
                        };
                        if (templSect)
                            skip_1(templSect);
                    }
                }
                if (m) {
                    var level = template ? 1 : m[1].length;
                    var s = {
                        level: level,
                        title: m[2].trim(),
                        id: m[4] || "",
                        start: lineNo,
                        text: "",
                        children: []
                    };
                    if (templSect) {
                        l = "";
                        for (var i = 0; i < templSect.level; ++i)
                            l += "#";
                        l += " ";
                        l += s.title || templSect.title;
                        l += " #" + s.id;
                    }
                    while (openSections[openSections.length - 1].level >= s.level)
                        openSections.pop();
                    var parent_1 = openSections[openSections.length - 1];
                    parent_1.children.push(s);
                    openSections.push(s);
                }
                openSections[openSections.length - 1].text += l + "\n";
                lineNo++;
            };
            for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
                var l = lines_1[_i];
                _loop_3(l);
            }
            return openSections[0];
        }
        function buildTOC(summaryMD) {
            if (!summaryMD)
                return null;
            var markedInstance = pxt.docs.requireMarked();
            var sanitizer = docs.requireDOMSanitizer();
            var options = {
                renderer: new markedInstance.Renderer(),
                gfm: true,
                tables: false,
                breaks: false,
                pedantic: false,
                sanitize: true,
                sanitizer: sanitizer,
                smartLists: false,
                smartypants: false
            };
            var dummy = { name: 'dummy', subitems: [] };
            var currentStack = [];
            currentStack.push(dummy);
            var tokens = markedInstance.lexer(summaryMD, options);
            var wasListStart = false;
            tokens.forEach(function (token) {
                switch (token.type) {
                    case "heading":
                        if (token.depth == 3) {
                            // heading
                        }
                        break;
                    case "list_start":
                        break;
                    case "list_item_start":
                    case "loose_item_start":
                        wasListStart = true;
                        var newItem = {
                            name: '',
                            path: '',
                            subitems: []
                        };
                        currentStack.push(newItem);
                        return;
                    case "text":
                        var lastTocEntry_1 = currentStack[currentStack.length - 1];
                        if (token.text.indexOf("[") >= 0) {
                            token.text.replace(/\[(.*?)\]\((.*?)\)/i, function (full, name, path) {
                                lastTocEntry_1.name = name;
                                lastTocEntry_1.path = path.replace('.md', '');
                            });
                        }
                        else if (wasListStart) {
                            lastTocEntry_1.name = token.text;
                        }
                        break;
                    case "list_item_end":
                    case "loose_item_end":
                        var docEntry = currentStack.pop();
                        currentStack[currentStack.length - 1].subitems.push(docEntry);
                        break;
                    case "list_end":
                        break;
                    default:
                }
                wasListStart = false;
            });
            var TOC = dummy.subitems;
            if (!TOC || TOC.length == 0)
                return null;
            return TOC;
        }
        docs.buildTOC = buildTOC;
        function visitTOC(toc, fn) {
            function visitEntry(entry) {
                fn(entry);
                if (entry.subitems)
                    entry.subitems.forEach(fn);
            }
            toc.forEach(visitEntry);
        }
        docs.visitTOC = visitTOC;
        var testedAugment = false;
        function augmentDocs(baseMd, childMd) {
            if (!testedAugment)
                testAugment();
            if (!childMd)
                return baseMd;
            var templ = splitMdSections(baseMd, null);
            var repl = splitMdSections(childMd, templ);
            var lookup = {};
            var used = {};
            for (var _i = 0, _a = repl.children; _i < _a.length; _i++) {
                var ch = _a[_i];
                U.assert(ch.children.length == 0);
                U.assert(!!ch.id);
                lookup[ch.id] = ch.text;
            }
            var replaceInTree = function (s) {
                if (s.id && lookup[s.id] !== undefined) {
                    used[s.id] = true;
                    s.text = lookup[s.id];
                    s.children = [];
                }
                s.children.forEach(replaceInTree);
            };
            replaceInTree(templ);
            var resMd = "";
            var flatten = function (s) {
                resMd += s.text;
                s.children.forEach(flatten);
            };
            flatten(templ);
            var leftover = "";
            var hd = repl.text
                .replace(/^\s*#+\s*@extends.*/mg, "")
                .replace(/^\s*\n/mg, "");
            if (hd.trim())
                leftover += hd.trim() + "\n";
            for (var _b = 0, _c = repl.children; _b < _c.length; _b++) {
                var s = _c[_b];
                if (!used[s.id])
                    leftover += s.text;
            }
            if (leftover) {
                resMd += "## Couldn't apply replacement logic to:\n" + leftover;
            }
            return resMd;
        }
        docs.augmentDocs = augmentDocs;
        function testAugment() {
            function test(a, b, c) {
                var r = augmentDocs(a, b).trim();
                c = c.trim();
                if (r != c) {
                    console.log("*** Template:\n" + a + "\n*** Input:\n" + b + "\n*** Expected:\n" + c + "\n*** Output:\n" + r);
                    throw new Error("augment docs test fail");
                }
            }
            testedAugment = true;
            var templ0 = "\n# T0\n## Examples #ex\n### Example 1\nTEx1\n### Example 2 #ex2\nTEx2\n### Example 3\nTEx3\n\n## See also #also\nTAlso\n";
            var inp0 = "\n# @extends\n# #ex2\nMy example\n## See Also These! #also\nMy links\n";
            var outp0 = "\n# T0\n## Examples #ex\n### Example 1\nTEx1\n### Example 2 #ex2\nMy example\n### Example 3\nTEx3\n\n## See Also These! #also\nMy links\n";
            var inp1 = "\n# @extends\n### #ex\nFoo\n#### Example 1\nEx1\n#### Example 2x #ex2\nEx2\n## See Also These! #also\nMy links\n";
            var outp1 = "\n# T0\n## Examples #ex\nFoo\n#### Example 1\nEx1\n#### Example 2x #ex2\nEx2\n## See Also These! #also\nMy links\n";
            test(templ0, "", templ0);
            test(templ0, " ", templ0);
            test(templ0, inp0, outp0);
            test(templ0, inp1, outp1);
        }
    })(docs = pxt.docs || (pxt.docs = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var dom;
    (function (dom) {
        function el(name, attributes, children) {
            var el = document.createElement(name);
            if (attributes)
                Object.keys(attributes).forEach(function (k) { return el.setAttribute(k, attributes[k] + ""); });
            appendChild(children);
            return el;
            function appendChild(c) {
                if (Array.isArray(c))
                    c.forEach(function (cc) { return appendChild(cc); });
                else if (typeof c === "string")
                    el.appendChild(document.createTextNode(c));
                else if (c instanceof HTMLElement)
                    el.appendChild(c);
            }
        }
        dom.el = el;
    })(dom = pxt.dom || (pxt.dom = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var gallery;
    (function (gallery_1) {
        function parsePackagesFromMarkdown(md) {
            var pm = /```package\s+((.|\s)+?)\s*```/i.exec(md);
            var dependencies = undefined;
            if (pm) {
                dependencies = {};
                pm[1].split('\n').map(function (s) { return s.replace(/\s*/g, ''); }).filter(function (s) { return !!s; })
                    .map(function (l) { return l.split('='); })
                    .forEach(function (kv) { return dependencies[kv[0]] = kv[1] || "*"; });
            }
            return dependencies;
        }
        gallery_1.parsePackagesFromMarkdown = parsePackagesFromMarkdown;
        function parseFeaturesFromMarkdown(md) {
            var pm = /```config\s+((.|\s)+?)\s*```/i.exec(md);
            var features = [];
            if (pm) {
                pm[1].split('\n').map(function (s) { return s.replace(/\s*/g, ''); }).filter(function (s) { return !!s; })
                    .map(function (l) { return l.split('='); })
                    .filter(function (kv) { return kv[0] == "feature" && !!kv[1]; })
                    .forEach(function (kv) { return features.push(kv[1]); });
            }
            return features.length ? features : undefined;
        }
        gallery_1.parseFeaturesFromMarkdown = parseFeaturesFromMarkdown;
        function parseJResFromMarkdown(md) {
            var pm = /```jres\s+((.|\s)+?)\s*```/i.exec(md);
            if (pm) {
                var jres = pm[1];
                var parsed = JSON.parse(jres);
                return {
                    jres: jres,
                    ts: pxt.emitTilemapsFromJRes(parsed)
                };
            }
            return undefined;
        }
        gallery_1.parseJResFromMarkdown = parseJResFromMarkdown;
        function parseExampleMarkdown(name, md) {
            var _a;
            if (!md)
                return undefined;
            var m = /```(blocks?|typescript|python|spy|sim)\s+((.|\s)+?)\s*```/i.exec(md);
            if (!m)
                return undefined;
            var dependencies = parsePackagesFromMarkdown(md);
            var snippetType = m[1];
            var source = m[2];
            var features = parseFeaturesFromMarkdown(md);
            var jres = parseJResFromMarkdown(md);
            var prj = {
                name: name,
                filesOverride: (_a = {
                        "main.blocks": "<xml xmlns=\"http://www.w3.org/1999/xhtml\"></xml>"
                    },
                    _a[m[1] === "python" ? "main.py" : "main.ts"] = source,
                    _a),
                dependencies: dependencies,
                features: features,
                snippetType: snippetType,
                source: source
            };
            if (jres) {
                prj.filesOverride[pxt.TILEMAP_JRES] = jres.jres;
                prj.filesOverride[pxt.TILEMAP_CODE] = jres.ts;
            }
            return prj;
        }
        gallery_1.parseExampleMarkdown = parseExampleMarkdown;
        function parseCodeCards(md) {
            var _a, _b;
            // try to parse code cards as JSON
            var cards = pxt.Util.jsonTryParse(md);
            if (cards && !Array.isArray(cards))
                cards = [cards];
            if ((_a = cards) === null || _a === void 0 ? void 0 : _a.length)
                return cards;
            // not json, try parsing as sequence of key,value pairs, with line splits
            cards = md.split(/^---$/gm)
                .filter(function (cmd) { return !!cmd; })
                .map(function (cmd) {
                var cc = {};
                cmd.replace(/^\s*(?:-|\*)\s+(\w+)\s*:\s*(.*)$/gm, function (m, n, v) {
                    if (n == "flags")
                        cc[n] = v.split(',');
                    else if (n === "otherAction") {
                        var parts = v.split(',').map(function (p) { var _a; return (_a = p) === null || _a === void 0 ? void 0 : _a.trim(); });
                        var oas = (cc["otherActions"] || (cc["otherActions"] = []));
                        oas.push({
                            url: parts[0],
                            editor: parts[1],
                            cardType: parts[2]
                        });
                    }
                    else
                        cc[n] = v;
                    return '';
                });
                return !!Object.keys(cc).length && cc;
            })
                .filter(function (cc) { return !!cc; });
            if ((_b = cards) === null || _b === void 0 ? void 0 : _b.length)
                return cards;
            return undefined;
        }
        gallery_1.parseCodeCards = parseCodeCards;
        function parseCodeCardsHtml(el) {
            var _a;
            var cards = [];
            if (el.tagName === "CODE") {
                // legacy JSON format
                cards = pxt.Util.jsonTryParse(el.textContent);
            }
            else {
                var card_1;
                Array.from(el.children)
                    .forEach(function (child) {
                    if (child.tagName === "UL" || child.tagName === "OL") {
                        if (!card_1)
                            card_1 = {};
                        // read fields into card
                        Array.from(child.querySelectorAll("li"))
                            .forEach(function (field) {
                            var text = field.innerText;
                            var m = /^\s*(\w+)\s*:\s*(.*)$/.exec(text);
                            if (m) {
                                var k = m[1];
                                card_1[k] = m[2].trim();
                                if (k === "flags")
                                    card_1[k] = card_1[k].split(/,\s*/);
                            }
                        });
                    }
                    else if (child.tagName == "HR") {
                        // flush current card
                        if (card_1)
                            cards.push(card_1);
                        card_1 = undefined;
                    }
                });
                // flush last card
                if (card_1)
                    cards.push(card_1);
            }
            return !!((_a = cards) === null || _a === void 0 ? void 0 : _a.length) && cards;
        }
        gallery_1.parseCodeCardsHtml = parseCodeCardsHtml;
        function parseGalleryMardown(md) {
            if (!md)
                return [];
            // second level titles are categories
            // ## foo bar
            // fenced code ```cards are sections of cards
            var galleries = [];
            var incard = false;
            var name = undefined;
            var cardsSource = "";
            md.split(/\r?\n/).forEach(function (line) {
                var _a;
                // new category
                if (/^## /.test(line)) {
                    name = line.substr(2).trim();
                }
                else if (/^(### ~ |```)codecard$/.test(line)) {
                    incard = true;
                }
                else if (/^(### ~|```)$/.test(line)) {
                    incard = false;
                    if (name && cardsSource) {
                        var cards = parseCodeCards(cardsSource);
                        if ((_a = cards) === null || _a === void 0 ? void 0 : _a.length)
                            galleries.push({ name: name, cards: cards });
                        else
                            pxt.log("invalid gallery format");
                    }
                    cardsSource = "";
                    name = undefined;
                }
                else if (incard)
                    cardsSource += line + '\n';
            });
            // apply transformations
            galleries.forEach(function (gallery) { return gallery.cards.forEach(function (card) {
                if (card.otherActions && !card.otherActions.length
                    && (card.cardType == "tutorial" || card.cardType == "example")) {
                    var editors = ["js"];
                    if (pxt.appTarget.appTheme.python)
                        editors.unshift("py");
                    card.otherActions = editors.map(function (editor) { return ({
                        url: card.url,
                        cardType: card.cardType,
                        editor: editor
                    }); });
                }
            }); });
            return galleries;
        }
        gallery_1.parseGalleryMardown = parseGalleryMardown;
        function loadGalleryAsync(name) {
            return pxt.Cloud.markdownAsync(name)
                .then(function (md) { return parseGalleryMardown(md); });
        }
        gallery_1.loadGalleryAsync = loadGalleryAsync;
        function codeCardsToMarkdown(cards) {
            var md = "### ~ codecard\n\n" + (cards || []).map(function (card) { return Object.keys(card)
                .filter(function (k) { return !!card[k]; })
                .map(function (k) { return k === "otherActions"
                ? otherActionsToMd(card[k])
                : "* " + k + ": " + card[k]; }).join('\n'); })
                .join("\n\n---\n\n") + "\n\n### ~\n";
            return md;
            function otherActionsToMd(oas) {
                return oas.map(function (oa) { return "* otherAction: " + oa.url + " " + (oa.editor || "ts") + " " + (oa.cardType || ""); })
                    .join('\n');
            }
        }
        gallery_1.codeCardsToMarkdown = codeCardsToMarkdown;
    })(gallery = pxt.gallery || (pxt.gallery = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    function hex2(n) {
        return ("0" + n.toString(16)).slice(-2);
    }
    function hex2str(h) {
        return pxt.U.uint8ArrayToString(pxt.U.fromHex(h));
    }
    function str2hex(h) {
        return pxt.U.toHex(pxt.U.stringToUint8Array(h));
    }
    var GDBServer = /** @class */ (function () {
        function GDBServer(io) {
            var _this = this;
            this.io = io;
            this.q = new pxt.U.PromiseQueue();
            this.dataBuf = "";
            this.numSent = 0;
            this.pktSize = 400;
            this.trace = false;
            this.bmpMode = true;
            this.targetInfo = "";
            this.onEvent = function (s) { };
            this.io.onData = function (b) { return _this.onData(b); };
        }
        GDBServer.prototype.onData = function (buf) {
            this.dataBuf += pxt.U.uint8ArrayToString(buf);
            while (this.dataBuf.length > 0) {
                var ch = this.dataBuf[0];
                if (ch == '+')
                    this.dataBuf = this.dataBuf.slice(1);
                else if (ch == '$' || ch == '%') {
                    var resp = this.decodeResp(this.dataBuf.slice(1));
                    if (resp != null) {
                        if (ch == '$') {
                            this.io.sendPacketAsync(this.buildCmd("+")).done();
                            if (this.onResponse)
                                this.onResponse(resp);
                            else {
                                // ignore unexpected responses right after connection
                                // they are likely left-over from a previous session
                                if (this.numSent > 0)
                                    this.io.error("unexpected response: " + resp);
                            }
                        }
                        else {
                            this.onEvent(resp);
                        }
                    }
                    else {
                        break;
                    }
                }
                else {
                    this.io.error("invalid character: " + ch);
                }
            }
        };
        GDBServer.prototype.buildCmd = function (cmd) {
            if (cmd == "+")
                return pxt.U.stringToUint8Array(cmd);
            var r = "";
            for (var i = 0; i < cmd.length; ++i) {
                var ch_1 = cmd.charAt(i);
                if (ch_1 == '}' || ch_1 == '#' || ch_1 == '$') {
                    r += '}';
                    r += String.fromCharCode(ch_1.charCodeAt(0) ^ 0x20);
                }
                else {
                    r += ch_1;
                }
            }
            var ch = 0;
            cmd = r;
            for (var i = 0; i < cmd.length; ++i) {
                ch = (ch + cmd.charCodeAt(i)) & 0xff;
            }
            r = "$" + cmd + "#" + hex2(ch);
            return pxt.U.stringToUint8Array(r);
        };
        GDBServer.prototype.decodeResp = function (resp) {
            var r = "";
            for (var i = 0; i < resp.length; ++i) {
                var ch = resp[i];
                if (ch == '}') {
                    ++i;
                    r += String.fromCharCode(resp.charCodeAt(i) ^ 0x20);
                }
                else if (ch == '*') {
                    ++i;
                    var rep = resp.charCodeAt(i) - 29;
                    var ch_2 = r.charAt(r.length - 1);
                    while (rep-- > 0)
                        r += ch_2;
                }
                else if (ch == '#') {
                    var checksum = resp.slice(i + 1, i + 3);
                    if (checksum.length == 2) {
                        // TODO validate checksum?
                        this.dataBuf = resp.slice(i + 3);
                        return r;
                    }
                    else {
                        // incomplete
                        return null;
                    }
                }
                else {
                    r += ch;
                }
            }
            return null;
        };
        GDBServer.prototype.sendCmdOKAsync = function (cmd) {
            return this.sendCmdAsync(cmd, function (r) { return r == "OK"; });
        };
        GDBServer.prototype.error = function (msg) {
            this.io.error(msg);
            this.io.disconnectAsync().done();
        };
        GDBServer.prototype.sendCmdAsync = function (cmd, respTest) {
            var _this = this;
            this.numSent++;
            var cmd2 = this.buildCmd(cmd);
            return this.q.enqueue("one", function () {
                return respTest === null ? _this.io.sendPacketAsync(cmd2).then(function () { return null; }) :
                    new Promise(function (resolve) {
                        _this.onResponse = function (v) {
                            _this.onResponse = null;
                            if (_this.trace)
                                pxt.log("GDB: '" + cmd + "' -> '" + v + "'");
                            if (respTest !== undefined && !respTest(v))
                                _this.error("Invalid GDB command response: '" + cmd + "' -> '" + v + "'");
                            resolve(v);
                        };
                        _this.io.sendPacketAsync(cmd2).done();
                    });
            });
        };
        GDBServer.prototype.sendRCmdAsync = function (cmd) {
            return this.sendMCmdAsync("qRcmd," + str2hex(cmd));
        };
        GDBServer.prototype.sendMCmdAsync = function (cmd) {
            var _this = this;
            this.numSent++;
            var cmd2 = this.buildCmd(cmd);
            var r = "";
            return this.q.enqueue("one", function () {
                return new Promise(function (resolve) {
                    _this.onResponse = function (v) {
                        if (v != "OK" && v[0] == "O")
                            r += hex2str(v.slice(1));
                        else {
                            if (v != "OK")
                                r += " - " + v;
                            _this.onResponse = null;
                            if (_this.trace)
                                pxt.log("Final GDB: '" + cmd + "' -> '" + r + "'");
                            resolve(r);
                        }
                    };
                    _this.io.sendPacketAsync(cmd2).done();
                });
            });
        };
        GDBServer.prototype.write32Async = function (addr, data) {
            var b = new Uint8Array(4);
            pxt.HF2.write32(b, 0, data);
            return this.writeMemAsync(addr, b);
        };
        GDBServer.prototype.writeMemAsync = function (addr, data) {
            var maxBytes = this.pktSize / 2 - 10;
            pxt.U.assert(data.length < maxBytes);
            return this.sendCmdOKAsync("M" + addr.toString(16) + "," +
                data.length.toString(16) + ":" + pxt.U.toHex(data))
                .then(function (r) {
                console.log(r);
            });
        };
        GDBServer.prototype.readMemAsync = function (addr, bytes) {
            var _this = this;
            var maxBytes = this.pktSize / 2 - 6;
            if (bytes > maxBytes) {
                var result_1 = new Uint8Array(bytes);
                var loop_1 = function (ptr) {
                    var len = Math.min(bytes - ptr, maxBytes);
                    if (len == 0)
                        return Promise.resolve(result_1);
                    return _this.readMemAsync(addr + ptr, len)
                        .then(function (part) {
                        pxt.U.memcpy(result_1, ptr, part);
                        return loop_1(ptr + len);
                    });
                };
                return loop_1(0);
            }
            return this.sendCmdAsync("m" + addr.toString(16) + "," + bytes.toString(16))
                .then(function (res) { return pxt.U.fromHex(res); });
        };
        GDBServer.prototype.initBMPAsync = function () {
            var _this = this;
            return Promise.resolve()
                .then(function () { return _this.sendRCmdAsync("swdp_scan"); })
                .then(function (r) {
                _this.targetInfo = r;
                return _this.sendCmdAsync("vAttach;1", function (r) { return r[0] == "T"; });
            })
                .then(function () { });
        };
        GDBServer.prototype.initAsync = function () {
            var _this = this;
            return Promise.delay(1000)
                .then(function () { return _this.sendCmdAsync("!"); }) // extended mode
                .then(function () { return _this.sendCmdAsync("qSupported"); })
                .then(function (res) {
                var features = {};
                res = ";" + res + ";";
                res = res
                    .replace(/;([^;]+)[=:]([^:;]+)/g, function (f, k, v) {
                    features[k] = v;
                    return ";";
                });
                _this.pktSize = parseInt(features["PacketSize"]) || 1024;
                pxt.log("GDB-server caps: " + JSON.stringify(features)
                    + " " + res.replace(/;+/g, ";"));
                if (_this.bmpMode)
                    return _this.initBMPAsync();
                else {
                    // continue
                    return _this.sendCmdAsync("c")
                        .then(function () { });
                }
                // return this.sendCmdAsync("?") // reason for stop
            });
        };
        return GDBServer;
    }());
    pxt.GDBServer = GDBServer;
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var github;
    (function (github) {
        github.token = null;
        github.forceProxy = false;
        function hasProxy() {
            var _a, _b, _c;
            if (github.forceProxy)
                return true;
            if (pxt.U.isNodeJS)
                return false; // bypass proxy for CLI
            if ((_c = (_b = (_a = pxt) === null || _a === void 0 ? void 0 : _a.appTarget) === null || _b === void 0 ? void 0 : _b.cloud) === null || _c === void 0 ? void 0 : _c.noGithubProxy)
                return false; // target requests no proxy
            return true;
        }
        function shouldUseProxy(force) {
            if (github.forceProxy)
                return true;
            if (github.token && !force)
                return false;
            return hasProxy();
        }
        var isPrivateRepoCache = {};
        function ghRequestAsync(options) {
            var _a;
            options.method = (_a = options.method, (_a !== null && _a !== void 0 ? _a : "GET"));
            // call github request with existing token
            // if the request fails and the token is clear, try again with the token
            return workAsync(!!github.token);
            function workAsync(canRetry) {
                var _a;
                var opts = pxt.U.clone(options);
                if (github.token) {
                    if (!opts.headers)
                        opts.headers = {};
                    if (opts.url == GRAPHQL_URL)
                        opts.headers['Authorization'] = "bearer " + github.token;
                    else {
                        // defeat browser cache when signed in
                        opts.url = pxt.BrowserUtils.cacheBustingUrl(opts.url);
                        opts.headers['Authorization'] = "token " + github.token;
                    }
                }
                opts.allowHttpErrors = (_a = opts.allowHttpErrors, (_a !== null && _a !== void 0 ? _a : false));
                return pxt.U.requestAsync(opts)
                    .catch(function (e) {
                    pxt.tickEvent("github.error", { statusCode: e.statusCode });
                    if (github.handleGithubNetworkError) {
                        var retry = github.handleGithubNetworkError(opts, e);
                        // retry if it may fix the issue
                        if (retry)
                            return workAsync(false);
                    }
                    throw e;
                });
            }
        }
        function ghGetJsonAsync(url) {
            return ghRequestAsync({ url: url, method: "GET" }).then(function (resp) { return resp.json; });
        }
        function ghProxyWithCdnJsonAsync(path) {
            return pxt.Cloud.apiRequestWithCdnAsync({
                url: "gh/" + path,
                forceLiveEndpoint: true
            }).then(function (r) { return r.json; });
        }
        function ghProxyHandleException(e) {
            pxt.log("github proxy error: " + e.message);
            pxt.debug(e);
        }
        function isOrgAsync(owner) {
            return ghGetJsonAsync("https://api.github.com/orgs/" + owner)
                .then(function (resp) { return resp.statusCode == 200; });
        }
        github.isOrgAsync = isOrgAsync;
        var MemoryGithubDb = /** @class */ (function () {
            function MemoryGithubDb() {
                this.configs = {};
                this.packages = {};
            }
            MemoryGithubDb.prototype.proxyWithCdnLoadPackageAsync = function (repopath, tag) {
                var _this = this;
                // cache lookup
                var key = repopath + "/" + tag;
                var res = this.packages[key];
                if (res) {
                    pxt.debug("github cache " + repopath + "/" + tag + "/text");
                    return Promise.resolve(res);
                }
                // load and cache
                return ghProxyWithCdnJsonAsync(repopath + "/" + tag + "/text")
                    .then(function (v) { return _this.packages[key] = { files: v }; });
            };
            MemoryGithubDb.prototype.cacheConfig = function (key, v) {
                var cfg = pxt.Package.parseAndValidConfig(v);
                this.configs[key] = cfg;
                return pxt.U.clone(cfg);
            };
            MemoryGithubDb.prototype.loadConfigAsync = function (repopath, tag) {
                return __awaiter(this, void 0, void 0, function () {
                    var key, res, gpkg, e_1, cfg;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!tag)
                                    tag = "master";
                                key = repopath + "/" + tag;
                                res = this.configs[key];
                                if (res) {
                                    pxt.debug("github cache " + repopath + "/" + tag + "/config");
                                    return [2 /*return*/, pxt.U.clone(res)];
                                }
                                if (!hasProxy()) return [3 /*break*/, 4];
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, this.proxyWithCdnLoadPackageAsync(repopath, tag)];
                            case 2:
                                gpkg = _a.sent();
                                return [2 /*return*/, this.cacheConfig(key, gpkg.files[pxt.CONFIG_NAME])];
                            case 3:
                                e_1 = _a.sent();
                                ghProxyHandleException(e_1);
                                return [3 /*break*/, 4];
                            case 4: return [4 /*yield*/, downloadTextAsync(repopath, tag, pxt.CONFIG_NAME)];
                            case 5:
                                cfg = _a.sent();
                                return [2 /*return*/, this.cacheConfig(key, cfg)];
                        }
                    });
                });
            };
            MemoryGithubDb.prototype.loadPackageAsync = function (repopath, tag) {
                return __awaiter(this, void 0, void 0, function () {
                    var e_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!tag)
                                    tag = "master";
                                if (!hasProxy()) return [3 /*break*/, 4];
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, this.proxyWithCdnLoadPackageAsync(repopath, tag).then(function (v) { return pxt.U.clone(v); })];
                            case 2: return [2 /*return*/, _a.sent()];
                            case 3:
                                e_2 = _a.sent();
                                ghProxyHandleException(e_2);
                                return [3 /*break*/, 4];
                            case 4: return [4 /*yield*/, this.githubLoadPackageAsync(repopath, tag)];
                            case 5: 
                            // try using github apis
                            return [2 /*return*/, _a.sent()];
                        }
                    });
                });
            };
            MemoryGithubDb.prototype.githubLoadPackageAsync = function (repopath, tag) {
                var _this = this;
                return tagToShaAsync(repopath, tag)
                    .then(function (sha) {
                    // cache lookup
                    var key = repopath + "/" + sha;
                    var res = _this.packages[key];
                    if (res) {
                        pxt.debug("github cache " + repopath + "/" + tag + "/text");
                        return Promise.resolve(pxt.U.clone(res));
                    }
                    // load and cache
                    pxt.log("Downloading " + repopath + "/" + tag + " -> " + sha);
                    return downloadTextAsync(repopath, sha, pxt.CONFIG_NAME)
                        .then(function (pkg) {
                        var current = {
                            files: {}
                        };
                        current.files[pxt.CONFIG_NAME] = pkg;
                        var cfg = JSON.parse(pkg);
                        return Promise.map(pxt.allPkgFiles(cfg).slice(1), function (fn) { return downloadTextAsync(repopath, sha, fn)
                            .then(function (text) {
                            current.files[fn] = text;
                        }); })
                            .then(function () {
                            // cache!
                            _this.packages[key] = current;
                            return pxt.U.clone(current);
                        });
                    });
                });
            };
            return MemoryGithubDb;
        }());
        github.MemoryGithubDb = MemoryGithubDb;
        function fallbackDownloadTextAsync(repopath, commitid, filepath) {
            return ghRequestAsync({
                url: "https://api.github.com/repos/" + repopath + "/contents/" + filepath + "?ref=" + commitid,
                method: "GET"
            }).then(function (resp) {
                var f = resp.json;
                isPrivateRepoCache[repopath] = true;
                // if they give us content, just return it
                if (f && f.encoding == "base64" && f.content != null)
                    return atob(f.content);
                // otherwise, go to download URL
                return pxt.U.httpGetTextAsync(f.download_url);
            });
        }
        function downloadTextAsync(repopath, commitid, filepath) {
            // raw.githubusercontent.com doesn't accept ?access_token=... and has wrong CORS settings
            // for Authorization: header; so try anonymous access first, and otherwise fetch using API
            if (isPrivateRepoCache[repopath])
                return fallbackDownloadTextAsync(repopath, commitid, filepath);
            return pxt.U.requestAsync({
                url: "https://raw.githubusercontent.com/" + repopath + "/" + commitid + "/" + filepath,
                allowHttpErrors: true
            }).then(function (resp) {
                if (resp.statusCode == 200)
                    return resp.text;
                return fallbackDownloadTextAsync(repopath, commitid, filepath);
            });
        }
        github.downloadTextAsync = downloadTextAsync;
        // overriden by client
        github.db = new MemoryGithubDb();
        function authenticatedUserAsync() {
            if (!github.token)
                return Promise.resolve(undefined); // no token, bail out
            return ghGetJsonAsync("https://api.github.com/user");
        }
        github.authenticatedUserAsync = authenticatedUserAsync;
        function getCommitsAsync(repopath, sha) {
            return ghGetJsonAsync("https://api.github.com/repos/" + repopath + "/commits?sha=" + sha)
                .then(function (objs) { return objs.map(function (obj) {
                var c = obj.commit;
                c.url = obj.url;
                c.sha = obj.sha;
                return c;
            }); });
        }
        github.getCommitsAsync = getCommitsAsync;
        function getCommitAsync(repopath, sha) {
            return ghGetJsonAsync("https://api.github.com/repos/" + repopath + "/git/commits/" + sha)
                .then(function (commit) { return ghGetJsonAsync(commit.tree.url + "?recursive=1")
                .then(function (tree) {
                commit.tree = tree;
                return commit;
            }); });
        }
        github.getCommitAsync = getCommitAsync;
        function ghPostAsync(path, data, headers, method) {
            // need to handle 204
            return ghRequestAsync({
                url: /^https:/.test(path) ? path : "https://api.github.com/repos/" + path,
                headers: headers,
                method: method || "POST",
                data: data,
                successCodes: [200, 201, 202, 204]
            }).then(function (resp) { return resp.json; });
        }
        function createObjectAsync(repopath, type, data) {
            return ghPostAsync(repopath + "/git/" + type + "s", data)
                .then(function (resp) { return resp.sha; });
        }
        github.createObjectAsync = createObjectAsync;
        function postCommitComment(repopath, commitSha, body, path, position) {
            return ghPostAsync(repopath + "/commits/" + commitSha + "/comments", {
                body: body, path: path, position: position
            })
                .then(function (resp) { return resp.id; });
        }
        github.postCommitComment = postCommitComment;
        function fastForwardAsync(repopath, branch, commitid) {
            return __awaiter(this, void 0, void 0, function () {
                var resp;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ghRequestAsync({
                                url: "https://api.github.com/repos/" + repopath + "/git/refs/heads/" + branch,
                                method: "PATCH",
                                allowHttpErrors: true,
                                data: {
                                    sha: commitid,
                                    force: false
                                }
                            })];
                        case 1:
                            resp = _a.sent();
                            return [2 /*return*/, (resp.statusCode == 200)];
                    }
                });
            });
        }
        github.fastForwardAsync = fastForwardAsync;
        function putFileAsync(repopath, path, content) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ghRequestAsync({
                                url: "https://api.github.com/repos/" + repopath + "/contents/" + path,
                                method: "PUT",
                                allowHttpErrors: true,
                                data: {
                                    message: lf("Initialize empty repo"),
                                    content: btoa(pxt.U.toUTF8(content)),
                                    branch: "master"
                                },
                                successCodes: [201]
                            })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        }
        github.putFileAsync = putFileAsync;
        function createTagAsync(repopath, tag, commitid) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ghPostAsync(repopath + "/git/refs", {
                                ref: "refs/tags/" + tag,
                                sha: commitid
                            })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        }
        github.createTagAsync = createTagAsync;
        function createReleaseAsync(repopath, tag, commitid) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ghPostAsync(repopath + "/releases", {
                                tag_name: tag,
                                target_commitish: commitid,
                                name: tag,
                                draft: false,
                                prerelease: false
                            })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        }
        github.createReleaseAsync = createReleaseAsync;
        function createPRFromBranchAsync(repopath, baseBranch, headBranch, title, msg) {
            var _a;
            return __awaiter(this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, ghPostAsync(repopath + "/pulls", {
                                title: title,
                                body: msg || lf("Automatically created from MakeCode."),
                                head: headBranch,
                                base: baseBranch,
                                maintainer_can_modify: true
                            })];
                        case 1:
                            res = _b.sent();
                            return [2 /*return*/, (_a = res) === null || _a === void 0 ? void 0 : _a.html_url];
                    }
                });
            });
        }
        github.createPRFromBranchAsync = createPRFromBranchAsync;
        function mergeAsync(repopath, base, head, message) {
            return ghRequestAsync({
                url: "https://api.github.com/repos/" + repopath + "/merges",
                method: "POST",
                successCodes: [201, 204, 409],
                data: {
                    base: base,
                    head: head,
                    commit_message: message
                }
            }).then(function (resp) {
                if (resp.statusCode == 201 || resp.statusCode == 204)
                    return resp.json.sha;
                if (resp.statusCode == 409) {
                    // conflict
                    return null;
                }
                throw pxt.U.userError(lf("Cannot merge in github.com/{1}; code: {2}", repopath, resp.statusCode));
            });
        }
        github.mergeAsync = mergeAsync;
        function getRefAsync(repopath, branch) {
            branch = branch || "master";
            return ghGetJsonAsync("https://api.github.com/repos/" + repopath + "/git/refs/heads/" + branch)
                .then(resolveRefAsync)
                .catch(function (err) {
                if (err.statusCode == 404)
                    return undefined;
                else
                    Promise.reject(err);
            });
        }
        github.getRefAsync = getRefAsync;
        function generateNextRefName(res, pref) {
            var n = 1;
            while (res.refs[pref + n])
                n++;
            return pref + n;
        }
        function getNewBranchNameAsync(repopath, pref) {
            if (pref === void 0) { pref = "patch-"; }
            return __awaiter(this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, listRefsExtAsync(repopath, "heads")];
                        case 1:
                            res = _a.sent();
                            return [2 /*return*/, generateNextRefName(res, pref)];
                    }
                });
            });
        }
        github.getNewBranchNameAsync = getNewBranchNameAsync;
        function createNewBranchAsync(repopath, branchName, commitid) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ghPostAsync(repopath + "/git/refs", {
                                ref: "refs/heads/" + branchName,
                                sha: commitid
                            })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, branchName];
                    }
                });
            });
        }
        github.createNewBranchAsync = createNewBranchAsync;
        function forkRepoAsync(repopath, commitid, pref) {
            if (pref === void 0) { pref = "pr-"; }
            return __awaiter(this, void 0, void 0, function () {
                var res, repoInfo, endTm, refs, err_2, branchName;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ghPostAsync(repopath + "/forks", {})];
                        case 1:
                            res = _a.sent();
                            repoInfo = mkRepo(res, null);
                            endTm = Date.now() + 5 * 60 * 1000;
                            refs = null;
                            _a.label = 2;
                        case 2:
                            if (!(!refs && Date.now() < endTm)) return [3 /*break*/, 8];
                            return [4 /*yield*/, Promise.delay(1000)];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4:
                            _a.trys.push([4, 6, , 7]);
                            return [4 /*yield*/, listRefsExtAsync(repoInfo.fullName, "heads")];
                        case 5:
                            refs = _a.sent();
                            return [3 /*break*/, 7];
                        case 6:
                            err_2 = _a.sent();
                            return [3 /*break*/, 7];
                        case 7: return [3 /*break*/, 2];
                        case 8:
                            if (!refs)
                                throw new Error(lf("Timeout waiting for fork"));
                            branchName = generateNextRefName(refs, pref);
                            return [4 /*yield*/, createNewBranchAsync(repoInfo.fullName, branchName, commitid)];
                        case 9:
                            _a.sent();
                            return [2 /*return*/, repoInfo.fullName + "#" + branchName];
                    }
                });
            });
        }
        github.forkRepoAsync = forkRepoAsync;
        function listRefsAsync(repopath, namespace, useProxy, noCache) {
            if (namespace === void 0) { namespace = "tags"; }
            return listRefsExtAsync(repopath, namespace, useProxy, noCache)
                .then(function (res) { return Object.keys(res.refs); });
        }
        github.listRefsAsync = listRefsAsync;
        function listRefsExtAsync(repopath, namespace, useProxy, noCache) {
            if (namespace === void 0) { namespace = "tags"; }
            var proxy = shouldUseProxy(useProxy);
            var head = null;
            var fetch = !proxy ?
                ghGetJsonAsync("https://api.github.com/repos/" + repopath + "/git/refs/" + namespace + "/?per_page=100") :
                // no CDN caching here, bust browser cace
                pxt.U.httpGetJsonAsync(pxt.BrowserUtils.cacheBustingUrl(pxt.Cloud.apiRoot + "gh/" + repopath + "/refs" + (noCache ? "?nocache=1" : "")))
                    .then(function (r) {
                    var res = Object.keys(r.refs)
                        .filter(function (k) { return pxt.U.startsWith(k, "refs/" + namespace + "/"); })
                        .map(function (k) { return ({ ref: k, object: { sha: r.refs[k] } }); });
                    head = r.refs["HEAD"];
                    return res;
                });
            var clean = function (x) { return x.replace(/^refs\/[^\/]+\//, ""); };
            return fetch.then(function (resp) {
                resp.sort(function (a, b) { return pxt.semver.strcmp(clean(a.ref), clean(b.ref)); });
                var r = {};
                for (var _i = 0, resp_1 = resp; _i < resp_1.length; _i++) {
                    var obj = resp_1[_i];
                    r[clean(obj.ref)] = obj.object.sha;
                }
                return { refs: r, head: head };
            }, function (err) {
                if (err.statusCode == 404)
                    return { refs: {} };
                else
                    return Promise.reject(err);
            });
        }
        github.listRefsExtAsync = listRefsExtAsync;
        function resolveRefAsync(r) {
            if (r.object.type == "commit")
                return Promise.resolve(r.object.sha);
            else if (r.object.type == "tag")
                return ghGetJsonAsync(r.object.url)
                    .then(function (r) {
                    return r.object.type == "commit" ? r.object.sha :
                        Promise.reject(new Error("Bad type (2nd order) " + r.object.type));
                });
            else
                return Promise.reject(new Error("Bad type " + r.object.type));
        }
        function tagToShaAsync(repopath, tag) {
            // TODO  support fetching a tag
            if (/^[a-f0-9]{40}$/.test(tag))
                return Promise.resolve(tag);
            return ghGetJsonAsync("https://api.github.com/repos/" + repopath + "/git/refs/tags/" + tag)
                .then(resolveRefAsync, function (e) {
                return ghGetJsonAsync("https://api.github.com/repos/" + repopath + "/git/refs/heads/" + tag)
                    .then(resolveRefAsync);
            });
        }
        function pkgConfigAsync(repopath, tag) {
            if (tag === void 0) { tag = "master"; }
            return github.db.loadConfigAsync(repopath, tag);
        }
        github.pkgConfigAsync = pkgConfigAsync;
        function downloadPackageAsync(repoWithTag, config) {
            var p = parseRepoId(repoWithTag);
            if (!p) {
                pxt.log('Unknown GitHub syntax');
                return Promise.resolve(undefined);
            }
            if (isRepoBanned(p, config)) {
                pxt.tickEvent("github.download.banned");
                pxt.log('Github repo is banned');
                return Promise.resolve(undefined);
            }
            return github.db.loadPackageAsync(p.fullName, p.tag)
                .then(function (cached) {
                var dv = upgradedDisablesVariants(config, repoWithTag);
                if (dv) {
                    var cfg = pxt.Package.parseAndValidConfig(cached.files[pxt.CONFIG_NAME]);
                    if (cfg) {
                        pxt.log("auto-disable " + dv.join(",") + " due to targetconfig entry for " + repoWithTag);
                        cfg.disablesVariants = dv;
                        cached.files[pxt.CONFIG_NAME] = pxt.Package.stringifyConfig(cfg);
                    }
                }
                return cached;
            });
        }
        github.downloadPackageAsync = downloadPackageAsync;
        function cacheProjectDependenciesAsync(cfg) {
            var _a;
            return __awaiter(this, void 0, void 0, function () {
                var ghExtensions, pkgConfig_1;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            ghExtensions = (_a = Object.keys(cfg.dependencies)) === null || _a === void 0 ? void 0 : _a.filter(function (dep) { return isGithubId(cfg.dependencies[dep]); });
                            if (!ghExtensions.length) return [3 /*break*/, 3];
                            return [4 /*yield*/, pxt.packagesConfigAsync()];
                        case 1:
                            pkgConfig_1 = _b.sent();
                            // Make sure external packages load before installing header.
                            return [4 /*yield*/, Promise.all(ghExtensions.map(function (ext) { return __awaiter(_this, void 0, void 0, function () {
                                    var extSrc, ghPkg;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                extSrc = cfg.dependencies[ext];
                                                return [4 /*yield*/, downloadPackageAsync(extSrc, pkgConfig_1)];
                                            case 1:
                                                ghPkg = _a.sent();
                                                if (!ghPkg) {
                                                    throw new Error(lf("Cannot load extension {0} from {1}", ext, extSrc));
                                                }
                                                return [2 /*return*/];
                                        }
                                    });
                                }); }))];
                        case 2:
                            // Make sure external packages load before installing header.
                            _b.sent();
                            _b.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
        github.cacheProjectDependenciesAsync = cacheProjectDependenciesAsync;
        var GitRepoStatus;
        (function (GitRepoStatus) {
            GitRepoStatus[GitRepoStatus["Unknown"] = 0] = "Unknown";
            GitRepoStatus[GitRepoStatus["Approved"] = 1] = "Approved";
            GitRepoStatus[GitRepoStatus["Banned"] = 2] = "Banned";
        })(GitRepoStatus = github.GitRepoStatus || (github.GitRepoStatus = {}));
        function listUserReposAsync() {
            var q = "{\n  viewer {\n    repositories(first: 100, affiliations: [OWNER, COLLABORATOR], orderBy: {field: PUSHED_AT, direction: DESC}) {\n      nodes {\n        name\n        description\n        full_name: nameWithOwner\n        private: isPrivate\n        fork: isFork\n        updated_at: updatedAt\n        owner {\n          login\n        }\n        defaultBranchRef {\n          name\n        }\n        pxtjson: object(expression: \"master:pxt.json\") {\n          ... on Blob {\n            text\n          }\n        }\n        readme: object(expression: \"master:README.md\") {\n          ... on Blob {\n            text\n          }\n        }\n      }\n    }\n  }\n}";
            return ghGraphQLQueryAsync(q)
                .then(function (res) { return res.data.viewer.repositories.nodes
                .filter(function (node) { return node.pxtjson; }) // needs a pxt.json file
                .filter(function (node) {
                node.default_branch = node.defaultBranchRef.name;
                var pxtJson = pxt.Package.parseAndValidConfig(node.pxtjson && node.pxtjson.text);
                var readme = node.readme && node.readme.text;
                // needs to have a valid pxt.json file
                if (!pxtJson)
                    return false;
                // new style of supported annontation
                if (pxtJson.supportedTargets)
                    return pxtJson.supportedTargets.indexOf(pxt.appTarget.id) > -1;
                // legacy readme.md annotations
                return readme && readme.indexOf("PXT/" + pxt.appTarget.id) > -1;
            })
                .map(function (node) { return mkRepo(node, null); }); });
        }
        github.listUserReposAsync = listUserReposAsync;
        function createRepoAsync(name, description, priv) {
            return ghPostAsync("https://api.github.com/user/repos", {
                name: name,
                description: description,
                private: !!priv,
                has_issues: true,
                has_projects: false,
                has_wiki: false,
                allow_rebase_merge: false,
                allow_merge_commit: true,
                delete_branch_on_merge: false // keep branches for naming purposes
            }).then(function (v) { return mkRepo(v, null); });
        }
        github.createRepoAsync = createRepoAsync;
        function enablePagesAsync(repo) {
            return __awaiter(this, void 0, void 0, function () {
                var url, status_1, e_3, r, e_4, rep, e_5;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = undefined;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, ghGetJsonAsync("https://api.github.com/repos/" + repo + "/pages")]; // try to get the pages
                        case 2:
                            status_1 = _a.sent() // try to get the pages
                            ;
                            if (status_1)
                                url = status_1.html_url;
                            return [3 /*break*/, 4];
                        case 3:
                            e_3 = _a.sent();
                            return [3 /*break*/, 4];
                        case 4:
                            if (!!url) return [3 /*break*/, 8];
                            _a.label = 5;
                        case 5:
                            _a.trys.push([5, 7, , 8]);
                            return [4 /*yield*/, ghPostAsync("https://api.github.com/repos/" + repo + "/pages", {
                                    source: {
                                        branch: "master",
                                        path: "/"
                                    }
                                }, {
                                    "Accept": "application/vnd.github.switcheroo-preview+json"
                                })];
                        case 6:
                            r = _a.sent();
                            url = r.html_url;
                            return [3 /*break*/, 8];
                        case 7:
                            e_4 = _a.sent();
                            pxt.tickEvent("github.pages.error");
                            pxt.reportException(e_4);
                            return [3 /*break*/, 8];
                        case 8:
                            if (!url) return [3 /*break*/, 13];
                            return [4 /*yield*/, ghGetJsonAsync("https://api.github.com/repos/" + repo)];
                        case 9:
                            rep = _a.sent();
                            if (!(rep && !rep.homepage)) return [3 /*break*/, 13];
                            _a.label = 10;
                        case 10:
                            _a.trys.push([10, 12, , 13]);
                            return [4 /*yield*/, ghPostAsync("https://api.github.com/repos/" + repo, { "homepage": url }, undefined, "PATCH")];
                        case 11:
                            _a.sent();
                            return [3 /*break*/, 13];
                        case 12:
                            e_5 = _a.sent();
                            // just ignore if fail to update the homepage
                            pxt.tickEvent("github.homepage.error");
                            return [3 /*break*/, 13];
                        case 13: return [2 /*return*/];
                    }
                });
            });
        }
        github.enablePagesAsync = enablePagesAsync;
        function repoIconUrl(repo) {
            if (repo.status != GitRepoStatus.Approved)
                return undefined;
            return mkRepoIconUrl(repo);
        }
        github.repoIconUrl = repoIconUrl;
        function mkRepoIconUrl(repo) {
            return pxt.Cloud.cdnApiUrl("gh/" + repo.fullName + "/icon");
        }
        github.mkRepoIconUrl = mkRepoIconUrl;
        function mkRepo(r, config, tag) {
            if (!r)
                return undefined;
            var rr = {
                owner: r.owner.login.toLowerCase(),
                fullName: r.full_name.toLowerCase(),
                name: r.name,
                description: r.description,
                defaultBranch: r.default_branch,
                tag: tag,
                updatedAt: Math.round(new Date(r.updated_at).getTime() / 1000),
                fork: r.fork,
                private: r.private,
            };
            rr.status = repoStatus(rr, config);
            return rr;
        }
        function repoStatus(rr, config) {
            return isRepoBanned(rr, config) ? GitRepoStatus.Banned
                : isRepoApproved(rr, config) ? GitRepoStatus.Approved
                    : GitRepoStatus.Unknown;
        }
        github.repoStatus = repoStatus;
        function isOrgBanned(repo, config) {
            if (!config)
                return false; // don't know
            if (!repo || !repo.owner)
                return true;
            if (config.bannedOrgs
                && config.bannedOrgs.some(function (org) { return org.toLowerCase() == repo.owner.toLowerCase(); }))
                return true;
            return false;
        }
        function isRepoBanned(repo, config) {
            if (isOrgBanned(repo, config))
                return true;
            if (!config)
                return false; // don't know
            if (!repo || !repo.fullName)
                return true;
            if (config.bannedRepos
                && config.bannedRepos.some(function (fn) { return fn.toLowerCase() == repo.fullName.toLowerCase(); }))
                return true;
            return false;
        }
        function isOrgApproved(repo, config) {
            if (!repo || !config)
                return false;
            if (repo.owner
                && config.approvedOrgs
                && config.approvedOrgs.some(function (org) { return org.toLowerCase() == repo.owner.toLowerCase(); }))
                return true;
            return false;
        }
        function isRepoApproved(repo, config) {
            if (isOrgApproved(repo, config))
                return true;
            if (!repo || !config)
                return false;
            if (repo.fullName
                && config.approvedRepos
                && config.approvedRepos.some(function (fn) { return fn.toLowerCase() == repo.fullName.toLowerCase(); }))
                return true;
            return false;
        }
        function repoAsync(id, config) {
            return __awaiter(this, void 0, void 0, function () {
                var rid, status, e_6, r;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            rid = parseRepoId(id);
                            if (!rid)
                                return [2 /*return*/, undefined];
                            status = repoStatus(rid, config);
                            if (status == GitRepoStatus.Banned)
                                return [2 /*return*/, undefined];
                            if (!hasProxy()) return [3 /*break*/, 4];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, proxyRepoAsync(rid, status)];
                        case 2: return [2 /*return*/, _a.sent()];
                        case 3:
                            e_6 = _a.sent();
                            ghProxyHandleException(e_6);
                            return [3 /*break*/, 4];
                        case 4: return [4 /*yield*/, ghGetJsonAsync("https://api.github.com/repos/" + rid.fullName)];
                        case 5:
                            r = _a.sent();
                            return [2 /*return*/, mkRepo(r, config, rid.tag)];
                    }
                });
            });
        }
        github.repoAsync = repoAsync;
        function proxyRepoAsync(rid, status) {
            // always use proxy
            return ghProxyWithCdnJsonAsync("" + rid.fullName)
                .then(function (meta) {
                if (!meta)
                    return undefined;
                return {
                    github: true,
                    owner: rid.owner,
                    fullName: rid.fullName,
                    name: meta.name,
                    description: meta.description,
                    defaultBranch: "master",
                    tag: rid.tag,
                    status: status
                };
            }).catch(function (err) {
                pxt.reportException(err);
                return undefined;
            });
        }
        function searchAsync(query, config) {
            if (!config)
                return Promise.resolve([]);
            var repos = query.split('|').map(parseRepoUrl).filter(function (repo) { return !!repo; });
            if (repos.length > 0)
                return Promise.all(repos.map(function (id) { return repoAsync(id.path, config); }))
                    .then(function (rs) { return rs.filter(function (r) { return r && r.status != GitRepoStatus.Banned; }); }); // allow deep links to github repos
            var fetch = function () { return pxt.U.httpGetJsonAsync(pxt.Cloud.apiRoot + "ghsearch/" + pxt.appTarget.id + "/" + (pxt.appTarget.platformid || pxt.appTarget.id) + "?q=" + encodeURIComponent(query)); };
            return fetch()
                .then(function (rs) {
                return rs.items.map(function (item) { return mkRepo(item, config); })
                    .filter(function (r) { return r.status == GitRepoStatus.Approved || (config.allowUnapproved && r.status == GitRepoStatus.Unknown); })
                    // don't return the target itself!
                    .filter(function (r) { return !pxt.appTarget.appTheme.githubUrl || "https://github.com/" + r.fullName != pxt.appTarget.appTheme.githubUrl.toLowerCase(); });
            })
                .catch(function (err) { return []; }); // offline
        }
        github.searchAsync = searchAsync;
        function parseRepoUrl(url) {
            if (!url)
                return undefined;
            url = url.trim();
            // match github.com urls
            var m = /^((https:\/\/)?github.com\/)?([^/]+\/[^/#]+)\/?(#(\w+))?$/i.exec(url);
            if (m) {
                var r = {
                    repo: m ? m[3].toLowerCase() : null,
                    tag: m ? m[5] : null
                };
                r.path = r.repo + (r.tag ? '#' + r.tag : '');
                return r;
            }
            return undefined;
        }
        // parse https://github.com/[company]/[project](/filepath)(#tag)
        function parseRepoId(repo) {
            if (!repo)
                return undefined;
            // clean out whitespaces
            repo = repo.trim();
            // trim trailing /
            repo = repo.replace(/\/$/, '');
            // convert github pages into github repo
            var mgh = /^https:\/\/([^./#]+)\.github\.io\/([^/#]+)\/?$/i.exec(repo);
            if (mgh)
                repo = "github:" + mgh[1] + "/" + mgh[2];
            repo = repo.replace(/^github:/i, "");
            repo = repo.replace(/^https:\/\/github\.com\//i, "");
            repo = repo.replace(/\.git\b/i, "");
            var m = /^([^#\/:]+)\/([^#\/:]+)(\/([^#]+))?(#([^\/:]*))?$/.exec(repo);
            if (!m)
                return undefined;
            var owner = m[1];
            var project = m[2];
            var fileName = m[4];
            var tag = m[6];
            return {
                owner: owner,
                project: project,
                fullName: owner + "/" + project,
                tag: tag,
                fileName: fileName
            };
        }
        github.parseRepoId = parseRepoId;
        function toGithubDependencyPath(id) {
            var r = "github:" + id.fullName;
            if (id.tag)
                r += "#" + id.tag;
            return r;
        }
        github.toGithubDependencyPath = toGithubDependencyPath;
        function isGithubId(id) {
            if (!id)
                return false;
            return id.slice(0, 7) == "github:";
        }
        github.isGithubId = isGithubId;
        function stringifyRepo(p) {
            return p ? "github:" + p.fullName.toLowerCase() + "#" + (p.tag || "master") : undefined;
        }
        github.stringifyRepo = stringifyRepo;
        function normalizeRepoId(id) {
            var gid = parseRepoId(id);
            if (!gid)
                return undefined;
            gid.tag = gid.tag || "master";
            return stringifyRepo(gid);
        }
        github.normalizeRepoId = normalizeRepoId;
        function upgradeRule(cfg, id) {
            if (!cfg || !cfg.upgrades)
                return null;
            var parsed = parseRepoId(id);
            if (!parsed)
                return null;
            return pxt.U.lookup(cfg.upgrades, parsed.fullName.toLowerCase());
        }
        function upgradedDisablesVariants(cfg, id) {
            var upgr = upgradeRule(cfg, id);
            var m = /^dv:(.*)/.exec(upgr);
            if (m) {
                var disabled = m[1].split(/,/);
                if (disabled.some(function (d) { return !/^\w+$/.test(d); }))
                    return null;
                return disabled;
            }
            return null;
        }
        function upgradedPackageReference(cfg, id) {
            var upgr = upgradeRule(cfg, id);
            if (!upgr)
                return null;
            var m = /^min:(.*)/.exec(upgr);
            var minV = m && pxt.semver.tryParse(m[1]);
            if (minV) {
                var parsed = parseRepoId(id);
                var currV = pxt.semver.tryParse(parsed.tag);
                if (currV && pxt.semver.cmp(currV, minV) < 0) {
                    parsed.tag = m[1];
                    pxt.debug("upgrading " + id + " to " + m[1]);
                    return stringifyRepo(parsed);
                }
                else {
                    if (!currV)
                        pxt.log("not upgrading " + id + " - cannot parse version");
                    return null;
                }
            }
            else {
                // check if the rule looks valid at all
                if (!upgradedDisablesVariants(cfg, id))
                    pxt.log("invalid upgrade rule: " + id + " -> " + upgr);
            }
            return id;
        }
        github.upgradedPackageReference = upgradedPackageReference;
        function upgradedPackageId(cfg, id) {
            var dv = upgradedDisablesVariants(cfg, id);
            if (dv)
                return id + "?dv=" + dv.join(",");
            return id;
        }
        github.upgradedPackageId = upgradedPackageId;
        function latestVersionAsync(path, config, useProxy, noCache) {
            var parsed = parseRepoId(path);
            if (!parsed)
                return Promise.resolve(null);
            return repoAsync(parsed.fullName, config)
                .then(function (scr) {
                if (!scr)
                    return undefined;
                return listRefsExtAsync(scr.fullName, "tags", useProxy, noCache)
                    .then(function (refsRes) {
                    var tags = Object.keys(refsRes.refs);
                    // only look for semver tags
                    tags = pxt.semver.sortLatestTags(tags);
                    // check if the version has been frozen for this release
                    var targetVersion = pxt.appTarget.versions && pxt.semver.tryParse(pxt.appTarget.versions.target);
                    if (targetVersion && config.releases && config.releases["v" + targetVersion.major]) {
                        var release_1 = config.releases["v" + targetVersion.major]
                            .map(function (repo) { return pxt.github.parseRepoId(repo); })
                            .filter(function (repo) { return repo && repo.fullName.toLowerCase() == parsed.fullName.toLowerCase(); })[0];
                        if (release_1) {
                            // this repo is frozen to a particular tag for this target
                            if (tags.some(function (t) { return t == release_1.tag; })) { // tag still exists!!!
                                pxt.debug("approved release " + release_1.fullName + "#" + release_1.tag + " for v" + targetVersion.major);
                                return Promise.resolve(release_1.tag);
                            }
                            else {
                                // so the package was snapped to a particular tag but the tag does not exist anymore
                                pxt.reportError("packages", "approved release " + release_1.fullName + "#" + release_1.tag + " for v" + targetVersion.major + " not found anymore", { repo: scr.fullName });
                                // in this case, we keep going, we might be lucky and the current version of the package might still load
                            }
                        }
                    }
                    if (tags[0])
                        return Promise.resolve(tags[0]);
                    else
                        return refsRes.head || tagToShaAsync(scr.fullName, scr.defaultBranch);
                });
            });
        }
        github.latestVersionAsync = latestVersionAsync;
        github.GIT_JSON = ".git.json";
        var GRAPHQL_URL = "https://api.github.com/graphql";
        function lookupFile(commit, path) {
            if (!commit)
                return null;
            return commit.tree.tree.find(function (e) { return e.path == path; });
        }
        github.lookupFile = lookupFile;
        /**
         * Executes a GraphQL query against GitHub v4 api
         * @param query
         */
        function ghGraphQLQueryAsync(query) {
            var payload = JSON.stringify({
                query: query
            });
            return ghPostAsync(GRAPHQL_URL, payload);
        }
        github.ghGraphQLQueryAsync = ghGraphQLQueryAsync;
        /**
         * Finds the first PR associated with a branch
         * @param reponame
         * @param headName
         */
        function findPRNumberforBranchAsync(reponame, headName) {
            var repoId = parseRepoId(reponame);
            var query = "\n{\n    repository(owner: " + JSON.stringify(repoId.owner) + ", name: " + JSON.stringify(repoId.project) + ") {\n        pullRequests(last: 1, states: [OPEN, MERGED], headRefName: " + JSON.stringify(headName) + ") {\n            edges {\n                node {\n                    number\n                    state\n                    mergeable\n                    baseRefName\n                    url\n                    isDraft\n                }\n            }\n        }\n    }\n}\n";
            /*
            {
              "data": {
                "repository": {
                  "pullRequests": {
                    "edges": [
                      {
                        "node": {
                          "title": "use close icon instead of cancel",
                          "number": 6324
                        }
                      }
                    ]
                  }
                }
              }
            }*/
            return ghGraphQLQueryAsync(query)
                .then(function (resp) {
                var edge = resp.data.repository.pullRequests.edges[0];
                if (edge && edge.node) {
                    var node = edge.node;
                    return {
                        number: node.number,
                        mergeable: node.mergeable,
                        state: node.state,
                        title: node.title,
                        url: node.url,
                        base: node.baseRefName
                    };
                }
                return {
                    number: -1
                };
            });
        }
        github.findPRNumberforBranchAsync = findPRNumberforBranchAsync;
        function getPagesStatusAsync(repoPath) {
            return ghGetJsonAsync("https://api.github.com/repos/" + repoPath + "/pages")
                .catch(function (e) { return ({
                status: null
            }); });
        }
        github.getPagesStatusAsync = getPagesStatusAsync;
    })(github = pxt.github || (pxt.github = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    // keep all of these in sync with pxtbase.h
    pxt.REFCNT_FLASH = "0xfffe";
    pxt.VTABLE_MAGIC = 0xF9;
    pxt.ValTypeObject = 4;
    var BuiltInType;
    (function (BuiltInType) {
        BuiltInType[BuiltInType["BoxedString"] = 1] = "BoxedString";
        BuiltInType[BuiltInType["BoxedNumber"] = 2] = "BoxedNumber";
        BuiltInType[BuiltInType["BoxedBuffer"] = 3] = "BoxedBuffer";
        BuiltInType[BuiltInType["RefAction"] = 4] = "RefAction";
        BuiltInType[BuiltInType["RefImage"] = 5] = "RefImage";
        BuiltInType[BuiltInType["RefCollection"] = 6] = "RefCollection";
        BuiltInType[BuiltInType["RefRefLocal"] = 7] = "RefRefLocal";
        BuiltInType[BuiltInType["RefMap"] = 8] = "RefMap";
        BuiltInType[BuiltInType["RefMImage"] = 9] = "RefMImage";
        BuiltInType[BuiltInType["MMap"] = 10] = "MMap";
        BuiltInType[BuiltInType["User0"] = 16] = "User0";
    })(BuiltInType = pxt.BuiltInType || (pxt.BuiltInType = {}));
})(pxt || (pxt = {}));
(function (pxt) {
    var HF2;
    (function (HF2) {
        // see https://github.com/microsoft/uf2/blob/master/hf2.md for full spec
        HF2.HF2_CMD_BININFO = 0x0001; // no arguments
        HF2.HF2_MODE_BOOTLOADER = 0x01;
        HF2.HF2_MODE_USERSPACE = 0x02;
        /*
        struct HF2_BININFO_Result {
            uint32_t mode;
            uint32_t flash_page_size;
            uint32_t flash_num_pages;
            uint32_t max_message_size;
        };
        */
        HF2.HF2_CMD_INFO = 0x0002;
        // no arguments
        // results is utf8 character array
        HF2.HF2_CMD_RESET_INTO_APP = 0x0003; // no arguments, no result
        HF2.HF2_CMD_RESET_INTO_BOOTLOADER = 0x0004; // no arguments, no result
        HF2.HF2_CMD_START_FLASH = 0x0005; // no arguments, no result
        HF2.HF2_CMD_WRITE_FLASH_PAGE = 0x0006;
        /*
        struct HF2_WRITE_FLASH_PAGE_Command {
            uint32_t target_addr;
            uint32_t data[flash_page_size];
        };
        */
        // no result
        HF2.HF2_CMD_CHKSUM_PAGES = 0x0007;
        /*
        struct HF2_CHKSUM_PAGES_Command {
            uint32_t target_addr;
            uint32_t num_pages;
        };
        struct HF2_CHKSUM_PAGES_Result {
            uint16_t chksums[num_pages];
        };
        */
        HF2.HF2_CMD_READ_WORDS = 0x0008;
        /*
        struct HF2_READ_WORDS_Command {
            uint32_t target_addr;
            uint32_t num_words;
        };
        struct HF2_READ_WORDS_Result {
            uint32_t words[num_words];
        };
        */
        HF2.HF2_CMD_WRITE_WORDS = 0x0009;
        /*
        struct HF2_WRITE_WORDS_Command {
            uint32_t target_addr;
            uint32_t num_words;
            uint32_t words[num_words];
        };
        */
        // no result
        HF2.HF2_CMD_DMESG = 0x0010;
        // no arguments
        // results is utf8 character array
        HF2.HF2_FLAG_SERIAL_OUT = 0x80;
        HF2.HF2_FLAG_SERIAL_ERR = 0xC0;
        HF2.HF2_FLAG_CMDPKT_LAST = 0x40;
        HF2.HF2_FLAG_CMDPKT_BODY = 0x00;
        HF2.HF2_FLAG_MASK = 0xC0;
        HF2.HF2_SIZE_MASK = 63;
        HF2.HF2_STATUS_OK = 0x00;
        HF2.HF2_STATUS_INVALID_CMD = 0x01;
        HF2.HF2_STATUS_EXEC_ERR = 0x02;
        HF2.HF2_STATUS_EVENT = 0x80;
        // the eventId is overlayed on the tag+status; the mask corresponds
        // to the HF2_STATUS_EVENT above
        HF2.HF2_EV_MASK = 0x800000;
        function write32(buf, pos, v) {
            buf[pos + 0] = (v >> 0) & 0xff;
            buf[pos + 1] = (v >> 8) & 0xff;
            buf[pos + 2] = (v >> 16) & 0xff;
            buf[pos + 3] = (v >> 24) & 0xff;
        }
        HF2.write32 = write32;
        function write16(buf, pos, v) {
            buf[pos + 0] = (v >> 0) & 0xff;
            buf[pos + 1] = (v >> 8) & 0xff;
        }
        HF2.write16 = write16;
        function read32(buf, pos) {
            return (buf[pos] | (buf[pos + 1] << 8) | (buf[pos + 2] << 16) | (buf[pos + 3] << 24)) >>> 0;
        }
        HF2.read32 = read32;
        function read16(buf, pos) {
            return buf[pos] | (buf[pos + 1] << 8);
        }
        HF2.read16 = read16;
        function encodeU32LE(words) {
            var r = new Uint8Array(words.length * 4);
            for (var i = 0; i < words.length; ++i)
                write32(r, i * 4, words[i]);
            return r;
        }
        HF2.encodeU32LE = encodeU32LE;
        function decodeU32LE(buf) {
            var res = [];
            for (var i = 0; i < buf.length; i += 4)
                res.push(read32(buf, i));
            return res;
        }
        HF2.decodeU32LE = decodeU32LE;
        var logEnabled = false;
        function enableLog() {
            logEnabled = true;
        }
        HF2.enableLog = enableLog;
        function log(msg) {
            if (logEnabled)
                pxt.log("HF2: " + msg);
            else
                pxt.debug("HF2: " + msg);
        }
        var Wrapper = /** @class */ (function () {
            function Wrapper(io) {
                var _this = this;
                this.io = io;
                this.cmdSeq = pxt.U.randomUint32();
                this.lock = new pxt.U.PromiseQueue();
                this.flashing = false;
                this.rawMode = false;
                this.maxMsgSize = 63; // when running in forwarding mode, we do not really know
                this.bootloaderMode = false;
                this.reconnectTries = 0;
                this.autoReconnect = false;
                this.icon = "usb";
                this.msgs = new pxt.U.PromiseBuffer();
                this.eventHandlers = {};
                this.onSerial = function (buf, isStderr) { };
                var frames = [];
                io.onDeviceConnectionChanged = function (connect) {
                    return _this.disconnectAsync()
                        .then(function () { return connect && _this.reconnectAsync(); });
                };
                io.onSerial = function (b, e) { return _this.onSerial(b, e); };
                io.onData = function (buf) {
                    var tp = buf[0] & HF2.HF2_FLAG_MASK;
                    var len = buf[0] & 63;
                    //console.log(`msg tp=${tp} len=${len}`)
                    var frame = new Uint8Array(len);
                    pxt.U.memcpy(frame, 0, buf, 1, len);
                    if (tp & HF2.HF2_FLAG_SERIAL_OUT) {
                        _this.onSerial(frame, tp == HF2.HF2_FLAG_SERIAL_ERR);
                        return;
                    }
                    frames.push(frame);
                    if (tp == HF2.HF2_FLAG_CMDPKT_BODY) {
                        return;
                    }
                    else {
                        pxt.U.assert(tp == HF2.HF2_FLAG_CMDPKT_LAST);
                        var total = 0;
                        for (var _i = 0, frames_1 = frames; _i < frames_1.length; _i++) {
                            var f = frames_1[_i];
                            total += f.length;
                        }
                        var r = new Uint8Array(total);
                        var ptr = 0;
                        for (var _a = 0, frames_2 = frames; _a < frames_2.length; _a++) {
                            var f = frames_2[_a];
                            pxt.U.memcpy(r, ptr, f);
                            ptr += f.length;
                        }
                        frames = [];
                        if (r[2] & HF2.HF2_STATUS_EVENT) {
                            // asynchronous event
                            io.onEvent(r);
                        }
                        else {
                            _this.msgs.push(r);
                        }
                    }
                };
                io.onEvent = function (buf) {
                    var evid = read32(buf, 0);
                    var f = pxt.U.lookup(_this.eventHandlers, evid + "");
                    if (f) {
                        f(buf.slice(4));
                    }
                    else {
                        log("unhandled event: " + evid.toString(16));
                    }
                };
                io.onError = function (err) {
                    log("recv error: " + err.message);
                    if (_this.autoReconnect) {
                        _this.autoReconnect = false;
                        _this.reconnectAsync()
                            .then(function () {
                            _this.autoReconnect = true;
                        }, function (err) {
                            log("reconnect error: " + err.message);
                        });
                    }
                    //this.msgs.pushError(err)
                };
            }
            Wrapper.prototype.resetState = function () {
                this.lock = new pxt.U.PromiseQueue();
                this.info = null;
                this.infoRaw = null;
                this.pageSize = null;
                this.flashSize = null;
                this.maxMsgSize = 63;
                this.bootloaderMode = false;
                this.msgs.drain();
            };
            Wrapper.prototype.onEvent = function (id, f) {
                pxt.U.assert(!!(id & HF2.HF2_EV_MASK));
                this.eventHandlers[id + ""] = f;
            };
            Wrapper.prototype.reconnectAsync = function () {
                var _this = this;
                this.resetState();
                log("reconnect raw=" + this.rawMode);
                return this.io.reconnectAsync()
                    .then(function () { return _this.initAsync(); })
                    .catch(function (e) {
                    if (_this.reconnectTries < 5) {
                        _this.reconnectTries++;
                        log("error " + e.message + "; reconnecting attempt #" + _this.reconnectTries);
                        return Promise.delay(500)
                            .then(function () { return _this.reconnectAsync(); });
                    }
                    else {
                        throw e;
                    }
                });
            };
            Wrapper.prototype.disconnectAsync = function () {
                log("disconnect");
                return this.io.disconnectAsync();
            };
            Wrapper.prototype.error = function (m) {
                return this.io.error(m);
            };
            Wrapper.prototype.talkAsync = function (cmd, data) {
                var _this = this;
                if (this.io.talksAsync)
                    return this.io.talksAsync([{ cmd: cmd, data: data }])
                        .then(function (v) { return v[0]; });
                var len = 8;
                if (data)
                    len += data.length;
                var pkt = new Uint8Array(len);
                var seq = ++this.cmdSeq & 0xffff;
                write32(pkt, 0, cmd);
                write16(pkt, 4, seq);
                write16(pkt, 6, 0);
                if (data)
                    pxt.U.memcpy(pkt, 8, data, 0, data.length);
                var numSkipped = 0;
                var handleReturnAsync = function () {
                    return _this.msgs.shiftAsync(1000) // we wait up to a second
                        .then(function (res) {
                        if (read16(res, 0) != seq) {
                            if (numSkipped < 3) {
                                numSkipped++;
                                log("message out of sync, (" + seq + " vs " + read16(res, 0) + "); will re-try");
                                return handleReturnAsync();
                            }
                            _this.error("out of sync");
                        }
                        var info = "";
                        if (res[3])
                            info = "; info=" + res[3];
                        switch (res[2]) {
                            case HF2.HF2_STATUS_OK:
                                return res.slice(4);
                            case HF2.HF2_STATUS_INVALID_CMD:
                                _this.error("invalid command" + info);
                                break;
                            case HF2.HF2_STATUS_EXEC_ERR:
                                _this.error("execution error" + info);
                                break;
                            default:
                                _this.error("error " + res[2] + info);
                                break;
                        }
                        return null;
                    });
                };
                return this.sendMsgAsync(pkt)
                    .then(handleReturnAsync);
            };
            Wrapper.prototype.sendMsgAsync = function (buf) {
                return this.sendMsgCoreAsync(buf);
            };
            Wrapper.prototype.sendSerialAsync = function (buf, useStdErr) {
                if (useStdErr === void 0) { useStdErr = false; }
                if (this.io.sendSerialAsync)
                    return this.io.sendSerialAsync(buf, useStdErr);
                return this.sendMsgCoreAsync(buf, useStdErr ? 2 : 1);
            };
            Wrapper.prototype.sendMsgCoreAsync = function (buf, serial) {
                var _this = this;
                if (serial === void 0) { serial = 0; }
                // Util.assert(buf.length <= this.maxMsgSize)
                var frame = new Uint8Array(64);
                var loop = function (pos) {
                    var len = buf.length - pos;
                    if (len <= 0)
                        return Promise.resolve();
                    if (len > 63) {
                        len = 63;
                        frame[0] = HF2.HF2_FLAG_CMDPKT_BODY;
                    }
                    else {
                        frame[0] = HF2.HF2_FLAG_CMDPKT_LAST;
                    }
                    if (serial)
                        frame[0] = serial == 1 ? HF2.HF2_FLAG_SERIAL_OUT : HF2.HF2_FLAG_SERIAL_ERR;
                    frame[0] |= len;
                    for (var i = 0; i < len; ++i)
                        frame[i + 1] = buf[pos + i];
                    return _this.io.sendPacketAsync(frame)
                        .then(function () { return loop(pos + len); });
                };
                return this.lock.enqueue("out", function () { return loop(0); });
            };
            Wrapper.prototype.switchToBootloaderAsync = function () {
                var _this = this;
                if (this.bootloaderMode)
                    return Promise.resolve();
                log("Switching into bootloader mode");
                if (this.io.isSwitchingToBootloader) {
                    this.io.isSwitchingToBootloader();
                }
                return this.maybeReconnectAsync()
                    .then(function () { return _this.talkAsync(HF2.HF2_CMD_START_FLASH)
                    .then(function () { }, function (err) {
                    return _this.talkAsync(HF2.HF2_CMD_RESET_INTO_BOOTLOADER)
                        .then(function () { }, function (err) { })
                        .then(function () {
                        return _this.reconnectAsync()
                            .catch(function (err) {
                            if (err.type === "devicenotfound")
                                err.type = "repairbootloader";
                            throw err;
                        });
                    });
                }); })
                    .then(function () { return _this.initAsync(); })
                    .then(function () {
                    if (!_this.bootloaderMode)
                        _this.error("cannot switch into bootloader mode");
                });
            };
            Wrapper.prototype.isFlashing = function () {
                return !!this.flashing;
            };
            Wrapper.prototype.reflashAsync = function (resp) {
                var _this = this;
                log("reflash");
                pxt.U.assert(pxt.appTarget.compile.useUF2);
                var f = resp.outfiles[pxtc.BINARY_UF2];
                var blocks = pxtc.UF2.parseFile(pxt.Util.stringToUint8Array(atob(f)));
                this.flashing = true;
                return this.io.reconnectAsync()
                    .then(function () { return _this.flashAsync(blocks); })
                    .then(function () { return Promise.delay(100); })
                    .finally(function () { return _this.flashing = false; })
                    .then(function () { return _this.reconnectAsync(); });
            };
            Wrapper.prototype.writeWordsAsync = function (addr, words) {
                pxt.U.assert(words.length <= 64); // just sanity check
                return this.talkAsync(HF2.HF2_CMD_WRITE_WORDS, encodeU32LE([addr, words.length].concat(words)))
                    .then(function () { });
            };
            Wrapper.prototype.readWordsAsync = function (addr, numwords) {
                var args = new Uint8Array(8);
                write32(args, 0, addr);
                write32(args, 4, numwords);
                pxt.U.assert(numwords <= 64); // just sanity check
                return this.talkAsync(HF2.HF2_CMD_READ_WORDS, args);
            };
            Wrapper.prototype.pingAsync = function () {
                if (this.rawMode)
                    return Promise.resolve();
                return this.talkAsync(HF2.HF2_CMD_BININFO)
                    .then(function (buf) { });
            };
            Wrapper.prototype.maybeReconnectAsync = function () {
                var _this = this;
                return this.pingAsync()
                    .catch(function (e) {
                    return _this.reconnectAsync()
                        .then(function () { return _this.pingAsync(); });
                });
            };
            Wrapper.prototype.flashAsync = function (blocks) {
                var _this = this;
                var start = Date.now();
                var fstart = 0;
                var loopAsync = function (pos) {
                    if (pos >= blocks.length)
                        return Promise.resolve();
                    var b = blocks[pos];
                    //U.assert(b.payloadSize == this.pageSize)
                    var buf = new Uint8Array(4 + b.payloadSize);
                    write32(buf, 0, b.targetAddr);
                    pxt.U.memcpy(buf, 4, b.data, 0, b.payloadSize);
                    return _this.talkAsync(HF2.HF2_CMD_WRITE_FLASH_PAGE, buf)
                        .then(function () { return loopAsync(pos + 1); });
                };
                return this.switchToBootloaderAsync()
                    .then(function () {
                    var size = blocks.length * 256;
                    log("Starting flash (" + Math.round(size / 1024) + "kB).");
                    fstart = Date.now();
                    // only try partial flash when page size is small
                    if (_this.pageSize > 16 * 1024)
                        return blocks;
                    return onlyChangedBlocksAsync(blocks, function (a, l) { return _this.readWordsAsync(a, l); });
                })
                    .then(function (res) {
                    if (res.length != blocks.length) {
                        blocks = res;
                        var size = blocks.length * 256;
                        log("Performing partial flash (" + Math.round(size / 1024) + "kB).");
                    }
                })
                    .then(function () { return loopAsync(0); })
                    .then(function () {
                    var n = Date.now();
                    var t0 = n - start;
                    var t1 = n - fstart;
                    log("Flashing done at " + Math.round(blocks.length * 256 / t1 * 1000 / 1024) + " kB/s in " + t0 + "ms (reset " + (t0 - t1) + "ms). Resetting.");
                })
                    .then(function () {
                    return _this.talkAsync(HF2.HF2_CMD_RESET_INTO_APP)
                        .catch(function (e) {
                        // error expected here - device is resetting
                    });
                })
                    .then(function () { });
            };
            Wrapper.prototype.initAsync = function () {
                var _this = this;
                if (this.rawMode)
                    return Promise.resolve();
                return Promise.resolve()
                    .then(function () { return _this.talkAsync(HF2.HF2_CMD_BININFO); })
                    .then(function (binfo) {
                    _this.bootloaderMode = binfo[0] == HF2.HF2_MODE_BOOTLOADER;
                    _this.pageSize = read32(binfo, 4);
                    _this.flashSize = read32(binfo, 8) * _this.pageSize;
                    _this.maxMsgSize = read32(binfo, 12);
                    _this.familyID = read32(binfo, 16);
                    log("Connected; msgSize " + _this.maxMsgSize + "B; flash " + _this.flashSize / 1024 + "kB; " + (_this.bootloaderMode ? "bootloader" : "application") + " mode; family=0x" + _this.familyID.toString(16));
                    return _this.talkAsync(HF2.HF2_CMD_INFO);
                })
                    .then(function (buf) {
                    _this.infoRaw = pxt.U.fromUTF8(pxt.U.uint8ArrayToString(buf));
                    pxt.debug("Info: " + _this.infoRaw);
                    var info = {};
                    ("Header: " + _this.infoRaw).replace(/^([\w\-]+):\s*([^\n\r]*)/mg, function (f, n, v) {
                        info[n.replace(/-/g, "")] = v;
                        return "";
                    });
                    _this.info = info;
                    var m = /v(\d\S+)(\s+(\S+))?/.exec(_this.info.Header);
                    if (m)
                        _this.info.Parsed = {
                            Version: m[1],
                            Features: m[3] || "",
                        };
                    else
                        _this.info.Parsed = {
                            Version: "?",
                            Features: "",
                        };
                    log("Board-ID: " + _this.info.BoardID + " v" + _this.info.Parsed.Version + " f" + _this.info.Parsed.Features);
                })
                    .then(function () {
                    _this.reconnectTries = 0;
                });
            };
            return Wrapper;
        }());
        HF2.Wrapper = Wrapper;
        function mkHF2PacketIOWrapper(io) {
            pxt.debug("packetio: wrapper hf2");
            return new Wrapper(io);
        }
        HF2.mkHF2PacketIOWrapper = mkHF2PacketIOWrapper;
        function readChecksumBlockAsync(readWordsAsync) {
            if (!pxt.appTarget.compile.flashChecksumAddr)
                return Promise.resolve(null);
            return readWordsAsync(pxt.appTarget.compile.flashChecksumAddr, 12)
                .then(function (buf) {
                var blk = pxtc.parseChecksumBlock(buf);
                if (!blk)
                    return null;
                return readWordsAsync(blk.endMarkerPos, 1)
                    .then(function (w) {
                    if (read32(w, 0) != blk.endMarker) {
                        pxt.log("end-marker mismatch");
                        return null;
                    }
                    return blk;
                });
            });
        }
        function onlyChangedBlocksAsync(blocks, readWordsAsync) {
            if (!pxt.appTarget.compile.flashChecksumAddr)
                return Promise.resolve(blocks);
            var blBuf = pxtc.UF2.readBytes(blocks, pxt.appTarget.compile.flashChecksumAddr, 12 * 4);
            var blChk = pxtc.parseChecksumBlock(blBuf);
            if (!blChk)
                return Promise.resolve(blocks);
            return readChecksumBlockAsync(readWordsAsync)
                .then(function (devChk) {
                if (!devChk)
                    return blocks;
                var regionsOk = devChk.regions.filter(function (r) {
                    var hasMatching = blChk.regions.some(function (r2) {
                        return r.checksum == r2.checksum &&
                            r.length == r2.length &&
                            r.start == r2.start;
                    });
                    return hasMatching;
                });
                if (regionsOk.length == 0)
                    return blocks;
                log("skipping flash at: " +
                    regionsOk.map(function (r) {
                        return pxtc.assembler.tohex(r.start) + " (" + r.length / 1024 + "kB)";
                    })
                        .join(", "));
                var unchangedAddr = function (a) {
                    return regionsOk.some(function (r) { return r.start <= a && a < r.start + r.length; });
                };
                return blocks.filter(function (b) {
                    return !(unchangedAddr(b.targetAddr) &&
                        unchangedAddr(b.targetAddr + b.payloadSize - 1));
                });
            });
        }
        HF2.onlyChangedBlocksAsync = onlyChangedBlocksAsync;
    })(HF2 = pxt.HF2 || (pxt.HF2 = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var HWDBG;
    (function (HWDBG) {
        var U = pxt.Util;
        var H = pxt.HF2;
        var HF2_DBG_GET_GLOBAL_STATE = 0x53fc66e0;
        var HF2_DBG_RESUME = 0x27a55931;
        var HF2_DBG_RESTART = 0x1120bd93;
        var HF2_DBG_GET_STACK = 0x70901510;
        var HF2_EV_DBG_PAUSED = 0x3692f9fd;
        var r32 = H.read32;
        var isHalted = false;
        var lastCompileResult;
        var onHalted;
        var haltHandler;
        var cachedStaticState;
        var currBreakpoint;
        var callInfos;
        var lastFlash;
        var hid;
        function taggedSpecialValue(n) { return (n << 2) | 2; }
        HWDBG.taggedUndefined = 0;
        HWDBG.taggedNull = taggedSpecialValue(1);
        HWDBG.taggedFalse = taggedSpecialValue(2);
        HWDBG.taggedTrue = taggedSpecialValue(16);
        HWDBG.postMessage = function (msg) { return console.log(msg); };
        function clearAsync() {
            isHalted = false;
            lastCompileResult = null;
            cachedStaticState = null;
            return Promise.resolve();
        }
        function decodeValue(n) {
            if (n & 1)
                return n >> 1;
            if (n == 0)
                return undefined;
            if (n & 2) {
                if (n == HWDBG.taggedNull)
                    return null;
                if (n == HWDBG.taggedFalse)
                    return false;
                if (n == HWDBG.taggedTrue)
                    return true;
                return { tagged: n >> 2 };
            }
            return { ptr: n };
        }
        HWDBG.decodeValue = decodeValue;
        function readMemAsync(addr, numbytes) {
            U.assert(!(addr & 3));
            U.assert(addr >= 0);
            if (addr < 2 * 1024 * 1024) {
                // assume these sit in flash
                var res = new Uint8Array(numbytes);
                addr -= lastFlash.start;
                U.memcpy(res, 0, lastFlash.buf, addr, numbytes);
                return Promise.resolve(res);
            }
            var maxBytes = hid.maxMsgSize - 32;
            if (numbytes > maxBytes) {
                var promises = [];
                while (numbytes > 0) {
                    var n = Math.min(maxBytes, numbytes);
                    promises.push(readMemAsync(addr, n));
                    numbytes -= n;
                    addr += n;
                }
                return Promise.all(promises)
                    .then(U.uint8ArrayConcat);
            }
            else {
                return hid.readWordsAsync(addr, Math.ceil(numbytes / 4))
                    .then(function (rr) {
                    if (rr.length > numbytes)
                        return rr.slice(0, numbytes);
                    else
                        return rr;
                });
            }
        }
        function heapExpandAsync(v) {
            if (typeof v != "object" || !v)
                return Promise.resolve(v);
            if (typeof v.ptr == "number") {
                // there should be no unaligned pointers
                if (v.ptr & 3)
                    return Promise.resolve({ unalignedPtr: v.ptr });
                var tag_1 = 0;
                // 56 bytes of data fit in one HID packet (with 5 bytes of header and 3 bytes of padding)
                return readMemAsync(v.ptr, 56)
                    .then(function (buf) {
                    // TODO this is wrong, with the new vtable format
                    tag_1 = H.read16(buf, 2);
                    var neededLength = buf.length;
                    if (tag_1 == pxt.BuiltInType.BoxedString || tag_1 == pxt.BuiltInType.BoxedBuffer) {
                        neededLength = H.read16(buf, 4) + 6;
                    }
                    else if (tag_1 == pxt.BuiltInType.BoxedNumber) {
                        neededLength = 8 + 4;
                    }
                    else {
                        // TODO
                    }
                    if (neededLength > buf.length) {
                        return readMemAsync(v.ptr + buf.length, neededLength - buf.length)
                            .then(function (secondary) { return U.uint8ArrayConcat([buf, secondary]); });
                    }
                    else if (neededLength < buf.length) {
                        return buf.slice(0, neededLength);
                    }
                    else {
                        return buf;
                    }
                })
                    .then(function (buf) {
                    if (tag_1 == pxt.BuiltInType.BoxedString)
                        return U.uint8ArrayToString(buf.slice(6));
                    else if (tag_1 == pxt.BuiltInType.BoxedBuffer)
                        return { type: "buffer", data: buf.slice(6) };
                    else if (tag_1 == pxt.BuiltInType.BoxedNumber)
                        return new Float64Array(buf.buffer.slice(4))[0];
                    else
                        return {
                            type: "unknown",
                            tag: tag_1,
                            refcnt: H.read16(buf, 0),
                            data: buf.slice(4)
                        };
                });
            }
            else {
                return Promise.resolve(v);
            }
        }
        HWDBG.heapExpandAsync = heapExpandAsync;
        function heapExpandMapAsync(vars) {
            var promises = [];
            var _loop_4 = function (k) {
                promises.push(heapExpandAsync(vars[k])
                    .then(function (r) {
                    vars[k] = r;
                    //console.log("set", k, "to", r, "prev", vars[k], "NOW", vars)
                }));
            };
            for (var _i = 0, _a = Object.keys(vars); _i < _a.length; _i++) {
                var k = _a[_i];
                _loop_4(k);
            }
            return Promise.all(promises)
                .then(function () {
                //console.log("FIN", vars)
            });
        }
        HWDBG.heapExpandMapAsync = heapExpandMapAsync;
        function buildFrames(stack, msg) {
            var currAddr = currBreakpoint.binAddr;
            var sp = 0;
            var pi = lastCompileResult.procDebugInfo.filter(function (p) {
                return p.codeStartLoc <= currAddr && currAddr <= p.codeEndLoc;
            })[0];
            while (true) {
                if (!pi)
                    break; // ???
                if (pi == lastCompileResult.procDebugInfo[0])
                    break; // main
                var bp = findPrevBrkp(currAddr);
                var info = U.clone(bp);
                info.functionName = pi.name;
                info.argumentNames = pi.args && pi.args.map(function (a) { return a.name; });
                msg.stackframes.push({
                    locals: {},
                    funcInfo: info,
                    breakpointId: bp.id,
                });
                var frame = msg.stackframes[msg.stackframes.length - 1];
                var idx = 0;
                for (var _i = 0, _a = pi.locals; _i < _a.length; _i++) {
                    var l = _a[_i];
                    U.assert(l.index == idx++);
                    frame.locals[l.name] = decodeValue(stack[sp++]);
                }
                currAddr = stack[sp++] & 0x7ffffffe;
                var ci = callInfos[currAddr + ""];
                for (var _b = 0, _c = pi.args; _b < _c.length; _b++) {
                    var l = _c[_b];
                    frame.locals[l.name] = decodeValue(stack[sp + (pi.args.length - 1 - l.index)]);
                }
                if (!ci)
                    break;
                pi = ci.from;
                sp += ci.stack - pi.localsMark;
            }
        }
        function findPrevBrkp(addr) {
            var bb = lastCompileResult.breakpoints;
            var brkMatch = bb[0];
            var bestDelta = Infinity;
            for (var _i = 0, bb_1 = bb; _i < bb_1.length; _i++) {
                var b = bb_1[_i];
                var delta = addr - b.binAddr;
                // console.log(`${b.line+1}: addr=${b.binAddr} d=${delta}`)
                if (delta >= 0 && delta < bestDelta) {
                    bestDelta = delta;
                    brkMatch = b;
                }
            }
            return brkMatch;
        }
        function corePaused(buf) {
            if (isHalted)
                return Promise.resolve();
            isHalted = true;
            var msg;
            return getHwStateAsync()
                .then(function (st) {
                var w = H.decodeU32LE(buf);
                var pc = w[0];
                var globals = {};
                var _loop_5 = function (l) {
                    var gbuf = st.globals;
                    var readV = function () {
                        switch (l.type) {
                            case "uint32": return H.read32(gbuf, l.index);
                            case "int32": return H.read32(gbuf, l.index) | 0;
                            case "uint16": return H.read16(gbuf, l.index);
                            case "int16": return (H.read16(gbuf, l.index) << 16) >> 16;
                            case "uint8": return gbuf[l.index];
                            case "int8": return (gbuf[l.index] << 24) >> 24;
                            default: return null;
                        }
                    };
                    var v = readV();
                    if (v === null) {
                        U.assert((l.index & 3) == 0);
                        v = decodeValue(H.read32(gbuf, l.index));
                    }
                    globals[l.name] = v;
                };
                for (var _i = 0, _a = lastCompileResult.procDebugInfo[0].locals; _i < _a.length; _i++) {
                    var l = _a[_i];
                    _loop_5(l);
                }
                currBreakpoint = findPrevBrkp(pc);
                msg = {
                    type: 'debugger',
                    subtype: 'breakpoint',
                    breakpointId: currBreakpoint.id,
                    globals: globals,
                    stackframes: []
                };
                haltHandler();
                return hid.talkAsync(HF2_DBG_GET_STACK);
            })
                .then(function (stack) {
                buildFrames(H.decodeU32LE(stack), msg);
                var maps = [msg.globals].concat(msg.stackframes.map(function (s) { return s.locals; }));
                return Promise.map(maps, heapExpandMapAsync);
            })
                .then(function () { return HWDBG.postMessage(msg); });
        }
        function clearHalted() {
            isHalted = false;
            onHalted = new Promise(function (resolve, reject) {
                haltHandler = resolve;
            });
        }
        function startDebugAsync(compileRes, hidWr) {
            hid = hidWr;
            hid.onEvent(HF2_EV_DBG_PAUSED, corePaused);
            return clearAsync()
                .then(function () {
                lastCompileResult = compileRes;
                callInfos = {};
                var procLookup = [];
                for (var _i = 0, _a = compileRes.procDebugInfo; _i < _a.length; _i++) {
                    var pdi = _a[_i];
                    procLookup[pdi.idx] = pdi;
                }
                for (var _b = 0, _c = compileRes.procDebugInfo; _b < _c.length; _b++) {
                    var pdi = _c[_b];
                    //console.log(pdi)
                    for (var _d = 0, _e = pdi.calls; _d < _e.length; _d++) {
                        var ci = _e[_d];
                        callInfos[ci.addr + ""] = {
                            from: pdi,
                            to: procLookup[ci.procIndex],
                            stack: ci.stack
                        };
                    }
                }
            })
                .then(function () {
                var f = lastCompileResult.outfiles[pxtc.BINARY_UF2];
                var blockBuf = U.stringToUint8Array(atob(f));
                lastFlash = pxtc.UF2.toBin(blockBuf);
                return hid.reflashAsync(lastCompileResult)
                    .then(function () { return hid.reconnectAsync(); }); // this will reset into app at the end
            })
                .then(function () { return hid.talkAsync(HF2_DBG_RESTART).catch(function (e) { }); })
                .then(function () { return Promise.delay(200); })
                .then(function () { return hid.reconnectAsync(); })
                .then(clearHalted)
                .then(waitForHaltAsync);
        }
        HWDBG.startDebugAsync = startDebugAsync;
        function handleMessage(msg) {
            console.log("HWDBGMSG", msg);
            if (msg.type != "debugger")
                return;
            var stepInto = false;
            switch (msg.subtype) {
                case 'stepinto':
                    stepInto = true;
                case 'stepover':
                    resumeAsync(stepInto);
                    break;
            }
        }
        HWDBG.handleMessage = handleMessage;
        function resumeAsync(into) {
            if (into === void 0) { into = false; }
            return Promise.resolve()
                .then(function () { return hid.talkAsync(HF2_DBG_RESUME, H.encodeU32LE([into ? 1 : 3])); })
                .then(clearHalted);
        }
        HWDBG.resumeAsync = resumeAsync;
        function waitForHaltAsync() {
            if (!onHalted)
                onHalted = Promise.resolve();
            return onHalted;
        }
        HWDBG.waitForHaltAsync = waitForHaltAsync;
        function getStaticStateAsync() {
            if (cachedStaticState)
                return Promise.resolve(cachedStaticState);
            return hid.talkAsync(HF2_DBG_GET_GLOBAL_STATE)
                .then(function (buf) { return (cachedStaticState = {
                numGlobals: r32(buf, 0),
                globalsPtr: r32(buf, 4)
            }); });
        }
        function getHwStateAsync() {
            return getStaticStateAsync()
                .then(function (st) { return hid.readWordsAsync(st.globalsPtr, st.numGlobals); })
                .then(function (buf) {
                var res = {
                    staticState: cachedStaticState,
                    globals: buf
                };
                return res;
            });
        }
        HWDBG.getHwStateAsync = getHwStateAsync;
    })(HWDBG = pxt.HWDBG || (pxt.HWDBG = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    // Converts encoded JRES images into PNG data uris
    // this keeps a bit of state for perf reasons
    var ImageConverter = /** @class */ (function () {
        function ImageConverter() {
        }
        ImageConverter.prototype.logTime = function () {
            if (this.start) {
                var d = Date.now() - this.start;
                pxt.debug("Icon creation: " + d + "ms");
            }
        };
        ImageConverter.prototype.convert = function (jresURL) {
            if (!this.start)
                this.start = Date.now();
            var data = atob(jresURL.slice(jresURL.indexOf(",") + 1));
            var magic = data.charCodeAt(0);
            var w = data.charCodeAt(1);
            var h = data.charCodeAt(2);
            if (magic === 0x87) {
                magic = 0xe0 | data.charCodeAt(1);
                w = data.charCodeAt(2) | (data.charCodeAt(3) << 8);
                h = data.charCodeAt(4) | (data.charCodeAt(5) << 8);
                data = data.slice(4);
            }
            if (magic != 0xe1 && magic != 0xe4)
                return null;
            function htmlColorToBytes(hexColor) {
                var v = parseInt(hexColor.replace(/#/, ""), 16);
                return [(v >> 0) & 0xff, (v >> 8) & 0xff, (v >> 16) & 0xff, 0xff];
            }
            if (!this.palette) {
                var arrs = pxt.appTarget.runtime.palette.map(htmlColorToBytes);
                // Set the alpha for transparency at index 0
                arrs[0][3] = 0;
                this.palette = new Uint8Array(arrs.length * 4);
                for (var i = 0; i < arrs.length; ++i) {
                    this.palette[i * 4 + 0] = arrs[i][0];
                    this.palette[i * 4 + 1] = arrs[i][1];
                    this.palette[i * 4 + 2] = arrs[i][2];
                    this.palette[i * 4 + 3] = arrs[i][3];
                }
            }
            if (magic == 0xe1) {
                return this.genMonochrome(data, w, h);
            }
            var scaleFactor = ((pxt.BrowserUtils.isEdge() || pxt.BrowserUtils.isIE()) && w < 100 && h < 100) ? 3 : 1;
            return this.genColor(data, w, h, scaleFactor);
        };
        ImageConverter.prototype.genMonochrome = function (data, w, h) {
            var outByteW = (w + 3) & ~3;
            var bmpHeaderSize = 14 + 40 + this.palette.length;
            var bmpSize = bmpHeaderSize + outByteW * h;
            var bmp = new Uint8Array(bmpSize);
            bmp[0] = 66;
            bmp[1] = 77;
            pxt.HF2.write32(bmp, 2, bmpSize);
            pxt.HF2.write32(bmp, 10, bmpHeaderSize);
            pxt.HF2.write32(bmp, 14, 40); // size of this header
            pxt.HF2.write32(bmp, 18, w);
            pxt.HF2.write32(bmp, 22, -h); // not upside down
            pxt.HF2.write16(bmp, 26, 1); // 1 color plane
            pxt.HF2.write16(bmp, 28, 8); // 8bpp
            pxt.HF2.write32(bmp, 38, 2835); // 72dpi
            pxt.HF2.write32(bmp, 42, 2835);
            pxt.HF2.write32(bmp, 46, this.palette.length >> 2);
            bmp.set(this.palette, 54);
            var inP = 4;
            var outP = bmpHeaderSize;
            var mask = 0x01;
            var v = data.charCodeAt(inP++);
            for (var x = 0; x < w; ++x) {
                outP = bmpHeaderSize + x;
                for (var y = 0; y < h; ++y) {
                    bmp[outP] = (v & mask) ? 1 : 0;
                    outP += outByteW;
                    mask <<= 1;
                    if (mask == 0x100) {
                        mask = 0x01;
                        v = data.charCodeAt(inP++);
                    }
                }
            }
            return "data:image/bmp;base64," + btoa(pxt.U.uint8ArrayToString(bmp));
        };
        ImageConverter.prototype.genColor = function (data, width, height, intScale) {
            intScale = Math.max(1, intScale | 0);
            var w = width * intScale;
            var h = height * intScale;
            var outByteW = w << 2;
            var bmpHeaderSize = 138;
            var bmpSize = bmpHeaderSize + outByteW * h;
            var bmp = new Uint8Array(bmpSize);
            bmp[0] = 66;
            bmp[1] = 77;
            pxt.HF2.write32(bmp, 2, bmpSize);
            pxt.HF2.write32(bmp, 10, bmpHeaderSize);
            pxt.HF2.write32(bmp, 14, 124); // size of this header
            pxt.HF2.write32(bmp, 18, w);
            pxt.HF2.write32(bmp, 22, -h); // not upside down
            pxt.HF2.write16(bmp, 26, 1); // 1 color plane
            pxt.HF2.write16(bmp, 28, 32); // 32bpp
            pxt.HF2.write16(bmp, 30, 3); // magic?
            pxt.HF2.write32(bmp, 38, 2835); // 72dpi
            pxt.HF2.write32(bmp, 42, 2835);
            pxt.HF2.write32(bmp, 54, 0xff0000); // Red bitmask
            pxt.HF2.write32(bmp, 58, 0xff00); // Green bitmask
            pxt.HF2.write32(bmp, 62, 0xff); // Blue bitmask
            pxt.HF2.write32(bmp, 66, 0xff000000); // Alpha bitmask
            // Color space (sRGB)
            bmp[70] = 0x42; // B
            bmp[71] = 0x47; // G
            bmp[72] = 0x52; // R
            bmp[73] = 0x73; // s
            var inP = 4;
            var outP = bmpHeaderSize;
            var isTransparent = true;
            for (var x = 0; x < w; x++) {
                var high = false;
                outP = bmpHeaderSize + (x << 2);
                var columnStart = inP;
                var v = data.charCodeAt(inP++);
                var colorStart = high ? (((v >> 4) & 0xf) << 2) : ((v & 0xf) << 2);
                for (var y = 0; y < h; y++) {
                    if (v)
                        isTransparent = false;
                    bmp[outP] = this.palette[colorStart];
                    bmp[outP + 1] = this.palette[colorStart + 1];
                    bmp[outP + 2] = this.palette[colorStart + 2];
                    bmp[outP + 3] = this.palette[colorStart + 3];
                    outP += outByteW;
                    if (y % intScale === intScale - 1) {
                        if (high) {
                            v = data.charCodeAt(inP++);
                        }
                        high = !high;
                        colorStart = high ? (((v >> 4) & 0xf) << 2) : ((v & 0xf) << 2);
                    }
                }
                if (isTransparent) {
                    // If all pixels are completely transparent, browsers won't render the image properly;
                    // set one pixel to be slightly opaque to fix that
                    bmp[bmpHeaderSize + 3] = 1;
                }
                if (x % intScale === intScale - 1) {
                    if (!(height % 2))
                        --inP;
                    while (inP & 3)
                        inP++;
                }
                else {
                    inP = columnStart;
                }
            }
            return "data:image/bmp;base64," + btoa(pxt.U.uint8ArrayToString(bmp));
        };
        return ImageConverter;
    }());
    pxt.ImageConverter = ImageConverter;
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var template;
    (function (template) {
        template.TS_CONFIG = "{\n    \"compilerOptions\": {\n        \"target\": \"es5\",\n        \"noImplicitAny\": true,\n        \"outDir\": \"built\",\n        \"rootDir\": \".\"\n    },\n    \"exclude\": [\"pxt_modules/**/*test.ts\"]\n}\n";
        function defaultFiles() {
            var files = {
                "tsconfig.json": template.TS_CONFIG,
                "test.ts": "// " + lf("tests go here; this will not be compiled when this package is used as an extension.") + "\n",
                "_config.yml": "makecode:\n  target: @TARGET@\n  platform: @PLATFORM@\n  home_url: @HOMEURL@\ntheme: jekyll-theme-slate\ninclude:\n  - assets\n  - README.md\n",
                "Makefile": "all: deploy\n\nbuild:\n\tpxt build\n\ndeploy:\n\tpxt deploy\n\ntest:\n\tpxt test\n",
                "Gemfile": "source 'https://rubygems.org'\ngem 'github-pages', group: :jekyll_plugins",
                "README.md": "\n> " + lf("Open this page at {0}", "[https://@REPOOWNER@.github.io/@REPONAME@/](https://@REPOOWNER@.github.io/@REPONAME@/)") + "\n\n## " + lf("Use as Extension") + "\n\n" + lf("This repository can be added as an **extension** in MakeCode.") + "\n\n* " + lf("open [@HOMEURL@](@HOMEURL@)") + "\n* " + lf("click on **New Project**") + "\n* " + lf("click on **Extensions** under the gearwheel menu") + "\n* " + lf("search for **https://github.com/@REPO@** and import") + "\n\n## " + lf("Edit this project") + " ![" + lf("Build status badge") + "](https://github.com/@REPO@/workflows/MakeCode/badge.svg)\n\n" + lf("To edit this repository in MakeCode.") + "\n\n* " + lf("open [@HOMEURL@](@HOMEURL@)") + "\n* " + lf("click on **Import** then click on **Import URL**") + "\n* " + lf("paste **https://github.com/@REPO@** and click import") + "\n\n## " + lf("Blocks preview") + "\n\n" + lf("This image shows the blocks code from the last commit in master.") + "\n" + lf("This image may take a few minutes to refresh.") + "\n\n![" + lf("A rendered view of the blocks") + "](https://github.com/@REPO@/raw/master/.github/makecode/blocks.png)\n\n#### " + lf("Metadata (used for search, rendering)") + "\n\n* for PXT/@TARGET@\n<script src=\"https://makecode.com/gh-pages-embed.js\"></script><script>makeCodeRender(\"{{ site.makecode.home_url }}\", \"{{ site.github.owner_name }}/{{ site.github.repository_name }}\");</script>\n",
                ".gitignore": "# MakeCode\nbuilt\nnode_modules\nyotta_modules\nyotta_targets\npxt_modules\n_site\n*.db\n*.tgz\n.header.json\n.simstate.json\n",
                ".vscode/settings.json": "{\n    \"editor.formatOnType\": true,\n    \"files.autoSave\": \"afterDelay\",\n    \"files.watcherExclude\": {\n        \"**/.git/objects/**\": true,\n        \"**/built/**\": true,\n        \"**/node_modules/**\": true,\n        \"**/yotta_modules/**\": true,\n        \"**/yotta_targets\": true,\n        \"**/pxt_modules/**\": true\n    },\n    \"files.associations\": {\n        \"*.blocks\": \"html\",\n        \"*.jres\": \"json\"\n    },\n    \"search.exclude\": {\n        \"**/built\": true,\n        \"**/node_modules\": true,\n        \"**/yotta_modules\": true,\n        \"**/yotta_targets\": true,\n        \"**/pxt_modules\": true\n    }\n}",
                ".github/workflows/makecode.yml": "name: MakeCode\n\non: [push]\n\njobs:\n  build:\n\n    runs-on: ubuntu-latest\n\n    strategy:\n      matrix:\n        node-version: [8.x]\n\n    steps:\n      - uses: actions/checkout@v1\n      - name: Use Node.js ${{ matrix.node-version }}\n        uses: actions/setup-node@v1\n        with:\n          node-version: ${{ matrix.node-version }}\n      - name: npm install\n        run: |\n          npm install -g pxt\n          pxt target @TARGET@\n      - name: build\n        run: |\n          pxt install\n          pxt build --cloud\n        env:\n          CI: true\n",
                ".github/workflows/cfg-check.yml": "name: Check pxt.json\n\non:\n  push\n\njobs:\n  check-cfg:\n    runs-on: ubuntu-latest\n    strategy:\n      matrix:\n        node-version: [8.x]\n    steps:\n      - uses: actions/checkout@v2\n      - name: Use Node.js ${{ matrix.node-version }}\n        uses: actions/setup-node@v1\n        with:\n          node-version: ${{ matrix.node-version }}\n      - name: npm install\n        run: npm install -g pxt\n      - name: Checkout current state\n        run: |\n          git checkout -- .\n          git clean -fd\n      - name: Fix files listed in config if necessary\n        run: pxt checkpkgcfg\n      - name: Create Pull Request\n        uses: peter-evans/create-pull-request@v3\n        with:\n          title: 'Removing missing files from pxt.json'\n          commit-message: 'Removing missing files from pxt.json'\n          delete-branch: true\n",
                ".vscode/tasks.json": "\n// A task runner that calls the MakeCode (PXT) compiler\n{\n    \"version\": \"2.0.0\",\n    \"tasks\": [{\n        \"label\": \"pxt deploy\",\n        \"type\": \"shell\",\n        \"command\": \"pxt deploy --local\",\n        \"group\": \"build\",\n        \"problemMatcher\": [ \"$tsc\" ]\n    }, {\n        \"label\": \"pxt build\",\n        \"type\": \"shell\",\n        \"command\": \"pxt build --local\",\n        \"group\": \"build\",\n        \"problemMatcher\": [ \"$tsc\" ]\n    }, {\n        \"label\": \"pxt install\",\n        \"type\": \"shell\",\n        \"command\": \"pxt install\",\n        \"group\": \"build\",\n        \"problemMatcher\": [ \"$tsc\" ]\n    }, {\n        \"label\": \"pxt clean\",\n        \"type\": \"shell\",\n        \"command\": \"pxt clean\",\n        \"group\": \"test\",\n        \"problemMatcher\": [ \"$tsc\" ]\n    }]\n}\n"
            };
            // override files from target
            var overrides = targetTemplateFiles();
            if (overrides) {
                Object.keys(overrides)
                    .forEach(function (k) { return files[k] = overrides[k]; });
            }
            return files;
        }
        template.defaultFiles = defaultFiles;
        function targetTemplateFiles() {
            var overrides = pxt.appTarget.bundledpkgs[pxt.template.TEMPLATE_PRJ];
            if (overrides) {
                var r = pxt.Util.clone(overrides);
                delete r[pxt.CONFIG_NAME];
                return r;
            }
            return undefined;
        }
        template.targetTemplateFiles = targetTemplateFiles;
        template.TEMPLATE_PRJ = "template";
        function packageFiles(name) {
            var prj = pxt.appTarget.blocksprj || pxt.appTarget.tsprj;
            var config = pxt.U.clone(prj.config);
            // clean up
            delete config.installedVersion;
            delete config.additionalFilePath;
            delete config.additionalFilePaths;
            // (keep blocks files)
            config.preferredEditor = config.files.find(function (f) { return /\.blocks$/.test(f); })
                ? pxt.BLOCKS_PROJECT_NAME : pxt.JAVASCRIPT_PROJECT_NAME;
            config.name = name;
            config.public = true;
            if (!config.version)
                config.version = "0.0.0";
            var files = {};
            var defFiles = defaultFiles();
            for (var f in defFiles)
                files[f] = defFiles[f];
            for (var f in prj.files)
                if (f != "README.md") // this one we need to keep
                    files[f] = prj.files[f];
            var pkgFiles = Object.keys(files).filter(function (s) {
                return /\.(blocks|md|ts|asm|cpp|h|py)$/.test(s);
            });
            config.files = pkgFiles.filter(function (s) { return !/test/.test(s); });
            config.testFiles = pkgFiles.filter(function (s) { return /test/.test(s); });
            config.supportedTargets = [pxt.appTarget.id];
            files[pxt.CONFIG_NAME] = pxt.Package.stringifyConfig(config);
            return files;
        }
        template.packageFiles = packageFiles;
        function packageFilesFixup(files, options) {
            var configMap = JSON.parse(files[pxt.CONFIG_NAME]);
            if (options)
                pxt.Util.jsonMergeFrom(configMap, options);
            if (pxt.webConfig) { // CLI
                Object.keys(pxt.webConfig).forEach(function (k) { return configMap[k.toLowerCase()] = pxt.webConfig[k]; });
                configMap["platform"] = pxt.appTarget.platformid || pxt.appTarget.id;
                configMap["target"] = pxt.appTarget.id;
                configMap["docs"] = pxt.appTarget.appTheme.homeUrl || "./";
                configMap["homeurl"] = pxt.appTarget.appTheme.homeUrl || "???";
            }
            pxt.U.iterMap(files, function (k, v) {
                v = v.replace(/@([A-Z]+)@/g, function (f, n) { return configMap[n.toLowerCase()] || ""; });
                files[k] = v;
            });
        }
        template.packageFilesFixup = packageFilesFixup;
    })(template = pxt.template || (pxt.template = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var blocks;
    (function (blocks) {
        var NT;
        (function (NT) {
            NT[NT["Prefix"] = 0] = "Prefix";
            NT[NT["Postfix"] = 1] = "Postfix";
            NT[NT["Infix"] = 2] = "Infix";
            NT[NT["Block"] = 3] = "Block";
            NT[NT["NewLine"] = 4] = "NewLine";
        })(NT = blocks.NT || (blocks.NT = {}));
        var GlueMode;
        (function (GlueMode) {
            GlueMode[GlueMode["None"] = 0] = "None";
            GlueMode[GlueMode["WithSpace"] = 1] = "WithSpace";
            GlueMode[GlueMode["NoSpace"] = 2] = "NoSpace";
        })(GlueMode = blocks.GlueMode || (blocks.GlueMode = {}));
        var reservedWords = ["break", "case", "catch", "class", "const", "continue", "debugger",
            "default", "delete", "do", "else", "enum", "export", "extends", "false", "finally",
            "for", "function", "if", "import", "in", "instanceof", "new", "null", "return",
            "super", "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while",
            "with"];
        var placeholders = {};
        function backtickLit(s) {
            return "`" + s.replace(/[\\`${}]/g, function (f) { return "\\" + f; }) + "`";
        }
        blocks.backtickLit = backtickLit;
        function stringLit(s) {
            if (s.length > 20 && /\n/.test(s))
                return backtickLit(s);
            else
                return JSON.stringify(s);
        }
        blocks.stringLit = stringLit;
        function mkNode(tp, pref, children) {
            return {
                type: tp,
                op: pref,
                children: children
            };
        }
        blocks.mkNode = mkNode;
        function mkNewLine() {
            return mkNode(NT.NewLine, "", []);
        }
        blocks.mkNewLine = mkNewLine;
        function mkPrefix(pref, children) {
            return mkNode(NT.Prefix, pref, children);
        }
        blocks.mkPrefix = mkPrefix;
        function mkPostfix(children, post) {
            return mkNode(NT.Postfix, post, children);
        }
        blocks.mkPostfix = mkPostfix;
        function mkInfix(child0, op, child1) {
            return mkNode(NT.Infix, op, child0 == null ? [child1] : [child0, child1]);
        }
        blocks.mkInfix = mkInfix;
        function mkText(s) {
            return mkPrefix(s, []);
        }
        blocks.mkText = mkText;
        function mkBlock(nodes) {
            return mkNode(NT.Block, "", nodes);
        }
        blocks.mkBlock = mkBlock;
        function mkGroup(nodes) {
            return mkPrefix("", nodes);
        }
        blocks.mkGroup = mkGroup;
        function mkStmt() {
            var nodes = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                nodes[_i] = arguments[_i];
            }
            var last = nodes[nodes.length - 1];
            if (last && last.type == NT.Block) {
                // OK - no newline needed
            }
            else {
                nodes.push(mkNewLine());
            }
            return mkGroup(nodes);
        }
        blocks.mkStmt = mkStmt;
        function mkCommaSep(nodes, withNewlines) {
            if (withNewlines === void 0) { withNewlines = false; }
            var r = [];
            for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
                var n = nodes_1[_i];
                if (withNewlines) {
                    if (r.length > 0)
                        r.push(mkText(","));
                    r.push(mkNewLine());
                }
                else if (r.length > 0) {
                    r.push(mkText(", "));
                }
                r.push(n);
            }
            if (withNewlines)
                r.push(mkNewLine());
            return mkGroup(r);
        }
        blocks.mkCommaSep = mkCommaSep;
        // A series of utility functions for constructing various J* AST nodes.
        var Helpers;
        (function (Helpers) {
            function mkArrayLiteral(args, withNewlines) {
                return mkGroup([
                    mkText("["),
                    mkCommaSep(args, withNewlines),
                    mkText("]")
                ]);
            }
            Helpers.mkArrayLiteral = mkArrayLiteral;
            function mkNumberLiteral(x) {
                return mkText(x.toString());
            }
            Helpers.mkNumberLiteral = mkNumberLiteral;
            function mkBooleanLiteral(x) {
                return mkText(x ? "true" : "false");
            }
            Helpers.mkBooleanLiteral = mkBooleanLiteral;
            function mkStringLiteral(x) {
                return mkText(stringLit(x));
            }
            Helpers.mkStringLiteral = mkStringLiteral;
            function mkPropertyAccess(name, thisArg) {
                return mkGroup([
                    mkInfix(thisArg, ".", mkText(name)),
                ]);
            }
            Helpers.mkPropertyAccess = mkPropertyAccess;
            function mkCall(name, args, externalInputs, method) {
                if (externalInputs === void 0) { externalInputs = false; }
                if (method === void 0) { method = false; }
                if (method)
                    return mkGroup([
                        mkInfix(args[0], ".", mkText(name)),
                        mkText("("),
                        mkCommaSep(args.slice(1), externalInputs),
                        mkText(")")
                    ]);
                else
                    return mkGroup([
                        mkText(name),
                        mkText("("),
                        mkCommaSep(args, externalInputs),
                        mkText(")")
                    ]);
            }
            Helpers.mkCall = mkCall;
            // Call function [name] from the standard device library with arguments
            // [args].
            function stdCall(name, args, externalInputs) {
                return mkCall(name, args, externalInputs);
            }
            Helpers.stdCall = stdCall;
            // Call extension method [name] on the first argument
            function extensionCall(name, args, externalInputs) {
                return mkCall(name, args, externalInputs, true);
            }
            Helpers.extensionCall = extensionCall;
            // Call function [name] from the specified [namespace] in the micro:bit
            // library.
            function namespaceCall(namespace, name, args, externalInputs) {
                return mkCall(namespace + "." + name, args, externalInputs);
            }
            Helpers.namespaceCall = namespaceCall;
            function mathCall(name, args) {
                return namespaceCall("Math", name, args, false);
            }
            Helpers.mathCall = mathCall;
            function mkGlobalRef(name) {
                return mkText(name);
            }
            Helpers.mkGlobalRef = mkGlobalRef;
            function mkSimpleCall(p, args) {
                pxt.U.assert(args.length == 2);
                return mkInfix(args[0], p, args[1]);
            }
            Helpers.mkSimpleCall = mkSimpleCall;
            function mkWhile(condition, body) {
                return mkGroup([
                    mkText("while ("),
                    condition,
                    mkText(")"),
                    mkBlock(body)
                ]);
            }
            Helpers.mkWhile = mkWhile;
            function mkComment(text) {
                return mkText("// " + text);
            }
            Helpers.mkComment = mkComment;
            function mkMultiComment(text) {
                var group = [
                    mkText("/**"),
                    mkNewLine()
                ];
                text.split("\n").forEach(function (c, i, arr) {
                    if (c) {
                        group.push(mkText(" * " + c));
                        group.push(mkNewLine());
                        // Add an extra line so we can convert it back to new lines
                        if (i < arr.length - 1) {
                            group.push(mkText(" * "));
                            group.push(mkNewLine());
                        }
                    }
                });
                return mkGroup(group.concat([
                    mkText(" */"),
                    mkNewLine()
                ]));
            }
            Helpers.mkMultiComment = mkMultiComment;
            function mkAssign(x, e) {
                return mkSimpleCall("=", [x, e]);
            }
            Helpers.mkAssign = mkAssign;
            function mkParenthesizedExpression(expression) {
                return isParenthesized(flattenNode([expression]).output) ? expression : mkGroup([mkText("("), expression, mkText(")")]);
            }
            Helpers.mkParenthesizedExpression = mkParenthesizedExpression;
        })(Helpers = blocks.Helpers || (blocks.Helpers = {}));
        blocks.H = Helpers;
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
        var infixPriTable = {
            // 0 = comma/sequence
            // 1 = spread (...)
            // 2 = yield, yield*
            // 3 = assignment
            "=": 3,
            "+=": 3,
            "-=": 3,
            "?": 4,
            ":": 4,
            "||": 5,
            "&&": 6,
            "|": 7,
            "^": 8,
            "&": 9,
            // 10 = equality
            "==": 10,
            "!=": 10,
            "===": 10,
            "!==": 10,
            // 11 = comparison (excludes in, instanceof)
            "<": 11,
            ">": 11,
            "<=": 11,
            ">=": 11,
            // 12 = bitwise shift
            ">>": 12,
            ">>>": 12,
            "<<": 12,
            "+": 13,
            "-": 13,
            "*": 14,
            "/": 14,
            "%": 14,
            "**": 15,
            "!": 16,
            "~": 16,
            "P-": 16,
            "P+": 16,
            "++": 16,
            "--": 16,
            ".": 18,
        };
        function flattenNode(app) {
            var sourceMap = [];
            var sourceMapById = {};
            var output = "";
            var indent = "";
            var variables = [{}];
            var currentLine = 0;
            function append(s) {
                // At runtime sometimes `s` is a number.
                if (typeof (s) === 'string') {
                    currentLine += (s.match(/\n/g) || []).length;
                }
                output += s;
            }
            function flatten(e0) {
                function rec(e, outPrio) {
                    if (e.type != NT.Infix) {
                        for (var _i = 0, _a = e.children; _i < _a.length; _i++) {
                            var c = _a[_i];
                            rec(c, -1);
                        }
                        return;
                    }
                    var r = [];
                    function pushOp(c) {
                        if (c[0] == "P")
                            c = c.slice(1);
                        r.push(mkText(c));
                    }
                    var infixPri = pxt.U.lookup(infixPriTable, e.op);
                    if (infixPri == null)
                        pxt.U.oops("bad infix op: " + e.op);
                    if (infixPri < outPrio)
                        pushOp("(");
                    if (e.children.length == 1) {
                        pushOp(e.op);
                        rec(e.children[0], infixPri);
                        r.push(e.children[0]);
                    }
                    else {
                        var bindLeft = infixPri != 3 && e.op != "**";
                        var letType = undefined;
                        rec(e.children[0], bindLeft ? infixPri : infixPri + 0.1);
                        r.push(e.children[0]);
                        if (letType && letType != "number") {
                            pushOp(": ");
                            pushOp(letType);
                        }
                        if (e.op == ".")
                            pushOp(".");
                        else
                            pushOp(" " + e.op + " ");
                        rec(e.children[1], !bindLeft ? infixPri : infixPri + 0.1);
                        r.push(e.children[1]);
                    }
                    if (infixPri < outPrio)
                        pushOp(")");
                    e.type = NT.Prefix;
                    e.op = "";
                    e.children = r;
                }
                rec(e0, -1);
            }
            var root = mkGroup(app);
            flatten(root);
            emit(root);
            // never return empty string - TS compiler service thinks it's an error
            if (!output)
                append("\n");
            return { output: output, sourceMap: sourceMap };
            function emit(n) {
                if (n.glueToBlock) {
                    removeLastIndent();
                    if (n.glueToBlock == GlueMode.WithSpace) {
                        append(" ");
                    }
                }
                var startLine = currentLine;
                var startPos = output.length;
                switch (n.type) {
                    case NT.Infix:
                        pxt.U.oops("no infix should be left");
                        break;
                    case NT.NewLine:
                        append("\n" + indent);
                        break;
                    case NT.Block:
                        block(n);
                        break;
                    case NT.Prefix:
                        if (n.canIndentInside)
                            append(n.op.replace(/\n/g, "\n" + indent + "    "));
                        else
                            append(n.op);
                        n.children.forEach(emit);
                        break;
                    case NT.Postfix:
                        n.children.forEach(emit);
                        if (n.canIndentInside)
                            append(n.op.replace(/\n/g, "\n" + indent + "    "));
                        else
                            append(n.op);
                        break;
                    default:
                        break;
                }
                var endLine = currentLine;
                // end position is non-inclusive
                var endPos = Math.max(output.length, 1);
                if (n.id) {
                    if (sourceMapById[n.id]) {
                        var node = sourceMapById[n.id];
                        node.startLine = Math.min(node.startLine, startLine);
                        node.endLine = Math.max(node.endLine, endLine);
                        node.startPos = Math.min(node.startPos, startPos);
                        node.endPos = Math.max(node.endPos, endPos);
                    }
                    else {
                        var interval = {
                            id: n.id,
                            startLine: startLine, startPos: startPos, endLine: endLine, endPos: endPos
                        };
                        sourceMapById[n.id] = interval;
                        sourceMap.push(interval);
                    }
                }
            }
            function write(s) {
                append(s.replace(/\n/g, "\n" + indent));
            }
            function removeLastIndent() {
                // Note: performance of this regular expression degrades with program size, and could therefore become a perf issue.
                output = output.replace(/\n *$/, function () {
                    currentLine--;
                    return "";
                });
            }
            function block(n) {
                var finalNl = n.noFinalNewline ? "" : "\n";
                if (n.children.length == 0) {
                    write(" {\n\t\n}" + finalNl);
                    return;
                }
                var vars = pxt.U.clone(variables[variables.length - 1] || {});
                variables.push(vars);
                indent += "    ";
                if (output[output.length - 1] != " ")
                    write(" ");
                write("{\n");
                for (var _i = 0, _a = n.children; _i < _a.length; _i++) {
                    var nn = _a[_i];
                    emit(nn);
                }
                indent = indent.slice(4);
                removeLastIndent();
                write("\n}" + finalNl);
                variables.pop();
            }
        }
        blocks.flattenNode = flattenNode;
        function isReservedWord(str) {
            return reservedWords.indexOf(str) !== -1;
        }
        blocks.isReservedWord = isReservedWord;
        function isParenthesized(fnOutput) {
            if (fnOutput[0] !== "(" || fnOutput[fnOutput.length - 1] !== ")") {
                return false;
            }
            var unclosedParentheses = 1;
            for (var i = 1; i < fnOutput.length; i++) {
                var c = fnOutput[i];
                if (c === "(") {
                    unclosedParentheses++;
                }
                else if (c === ")") {
                    unclosedParentheses--;
                    if (unclosedParentheses === 0) {
                        return i === fnOutput.length - 1;
                    }
                }
            }
            return false;
        }
        blocks.isParenthesized = isParenthesized;
    })(blocks = pxt.blocks || (pxt.blocks = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var sprite;
    (function (sprite_1) {
        // These are the characters used to output literals (but we support aliases for some of these)
        var hexChars = [".", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        sprite_1.BLOCKLY_TILESET_TYPE = "BLOCKLY_TILESET_TYPE";
        sprite_1.TILE_PREFIX = "tile";
        sprite_1.TILE_NAMESPACE = "myTiles";
        sprite_1.IMAGES_NAMESPACE = "myImages";
        sprite_1.IMAGE_PREFIX = "image";
        sprite_1.ANIMATION_NAMESPACE = "myAnimations";
        sprite_1.ANIMATION_PREFIX = "anim";
        /**
         * 16-color sprite
         */
        var Bitmap = /** @class */ (function () {
            function Bitmap(width, height, x0, y0, buf) {
                if (x0 === void 0) { x0 = 0; }
                if (y0 === void 0) { y0 = 0; }
                this.width = width;
                this.height = height;
                this.x0 = x0;
                this.y0 = y0;
                this.buf = buf || new Uint8ClampedArray(this.dataLength());
            }
            Bitmap.fromData = function (data) {
                return new Bitmap(data.width, data.height, data.x0, data.y0, data.data);
            };
            Bitmap.prototype.set = function (col, row, value) {
                if (col < this.width && row < this.height && col >= 0 && row >= 0) {
                    var index = this.coordToIndex(col, row);
                    this.setCore(index, value);
                }
            };
            Bitmap.prototype.get = function (col, row) {
                if (col < this.width && row < this.height && col >= 0 && row >= 0) {
                    var index = this.coordToIndex(col, row);
                    return this.getCore(index);
                }
                return 0;
            };
            Bitmap.prototype.copy = function (col, row, width, height) {
                if (col === void 0) { col = 0; }
                if (row === void 0) { row = 0; }
                if (width === void 0) { width = this.width; }
                if (height === void 0) { height = this.height; }
                var sub = new Bitmap(width, height);
                sub.x0 = col;
                sub.y0 = row;
                for (var c = 0; c < width; c++) {
                    for (var r = 0; r < height; r++) {
                        sub.set(c, r, this.get(col + c, row + r));
                    }
                }
                return sub;
            };
            Bitmap.prototype.apply = function (change, transparent) {
                if (transparent === void 0) { transparent = false; }
                var current;
                for (var c = 0; c < change.width; c++) {
                    for (var r = 0; r < change.height; r++) {
                        current = change.get(c, r);
                        if (!current && transparent)
                            continue;
                        this.set(change.x0 + c, change.y0 + r, current);
                    }
                }
            };
            Bitmap.prototype.equals = function (other) {
                if (this.width === other.width && this.height === other.height && this.x0 === other.x0 && this.y0 === other.y0 && this.buf.length === other.buf.length) {
                    for (var i = 0; i < this.buf.length; i++) {
                        if (this.buf[i] !== other.buf[i])
                            return false;
                    }
                    return true;
                }
                return false;
            };
            Bitmap.prototype.data = function () {
                return {
                    width: this.width,
                    height: this.height,
                    x0: this.x0,
                    y0: this.y0,
                    data: this.buf
                };
            };
            Bitmap.prototype.resize = function (width, height) {
                return resizeBitmap(this, width, height);
            };
            Bitmap.prototype.coordToIndex = function (col, row) {
                return col + row * this.width;
            };
            Bitmap.prototype.getCore = function (index) {
                var cell = Math.floor(index / 2);
                if (index % 2 === 0) {
                    return this.buf[cell] & 0xf;
                }
                else {
                    return (this.buf[cell] & 0xf0) >> 4;
                }
            };
            Bitmap.prototype.setCore = function (index, value) {
                var cell = Math.floor(index / 2);
                if (index % 2 === 0) {
                    this.buf[cell] = (this.buf[cell] & 0xf0) | (value & 0xf);
                }
                else {
                    this.buf[cell] = (this.buf[cell] & 0x0f) | ((value & 0xf) << 4);
                }
            };
            Bitmap.prototype.dataLength = function () {
                return Math.ceil(this.width * this.height / 2);
            };
            return Bitmap;
        }());
        sprite_1.Bitmap = Bitmap;
        var Tilemap = /** @class */ (function (_super) {
            __extends(Tilemap, _super);
            function Tilemap() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Tilemap.fromData = function (data) {
                return new Tilemap(data.width, data.height, data.x0, data.y0, data.data);
            };
            Tilemap.prototype.copy = function (col, row, width, height) {
                if (col === void 0) { col = 0; }
                if (row === void 0) { row = 0; }
                if (width === void 0) { width = this.width; }
                if (height === void 0) { height = this.height; }
                var sub = new Tilemap(width, height);
                sub.x0 = col;
                sub.y0 = row;
                for (var c = 0; c < width; c++) {
                    for (var r = 0; r < height; r++) {
                        sub.set(c, r, this.get(col + c, row + r));
                    }
                }
                return sub;
            };
            Tilemap.prototype.resize = function (width, height) {
                return resizeTilemap(this, width, height);
            };
            Tilemap.prototype.getCore = function (index) {
                return this.buf[index];
            };
            Tilemap.prototype.setCore = function (index, value) {
                this.buf[index] = value;
            };
            Tilemap.prototype.dataLength = function () {
                return this.width * this.height;
            };
            return Tilemap;
        }(Bitmap));
        sprite_1.Tilemap = Tilemap;
        var TilemapData = /** @class */ (function () {
            function TilemapData(tilemap, tileset, layers) {
                this.tilemap = tilemap;
                this.tileset = tileset;
                this.layers = layers;
                this.nextId = 0;
            }
            TilemapData.prototype.cloneData = function () {
                var tm = this.tilemap.copy();
                var tileset = {
                    tileWidth: this.tileset.tileWidth,
                    tiles: this.tileset.tiles.map(function (t) { return (__assign(__assign({}, t), { bitmap: Bitmap.fromData(t.bitmap).copy().data() })); })
                };
                var layers = Bitmap.fromData(this.layers).copy().data();
                return new TilemapData(tm, tileset, layers);
            };
            TilemapData.prototype.equals = function (other) {
                if (!(this.tilemap.equals(other.tilemap)
                    && this.tileset.tileWidth == other.tileset.tileWidth
                    && this.tileset.tiles.length == other.tileset.tiles.length
                    && bitmapEquals(this.layers, other.layers))) {
                    return false;
                }
                for (var i = 0; i < this.tileset.tiles.length; i++) {
                    if (!pxt.assetEquals(this.tileset.tiles[i], other.tileset.tiles[i]))
                        return false;
                }
                return true;
            };
            return TilemapData;
        }());
        sprite_1.TilemapData = TilemapData;
        var Bitmask = /** @class */ (function () {
            function Bitmask(width, height) {
                this.width = width;
                this.height = height;
                this.mask = new Uint8Array(Math.ceil(width * height / 8));
            }
            Bitmask.prototype.set = function (col, row) {
                var cellIndex = col + this.width * row;
                var index = cellIndex >> 3;
                var offset = cellIndex & 7;
                this.mask[index] |= (1 << offset);
            };
            Bitmask.prototype.get = function (col, row) {
                var cellIndex = col + this.width * row;
                var index = cellIndex >> 3;
                var offset = cellIndex & 7;
                return (this.mask[index] >> offset) & 1;
            };
            return Bitmask;
        }());
        sprite_1.Bitmask = Bitmask;
        function encodeTilemap(t, fileType) {
            if (!t)
                return "null";
            return "tiles.createTilemap(" + tilemapToTilemapLiteral(t.tilemap) + ", " + bitmapToImageLiteral(Bitmap.fromData(t.layers), fileType) + ", [" + t.tileset.tiles.map(function (tile) { return encodeTile(tile, fileType); }) + "], " + tileWidthToTileScale(t.tileset.tileWidth) + ")";
        }
        sprite_1.encodeTilemap = encodeTilemap;
        function decodeTilemap(literal, fileType, proj) {
            literal = pxt.Util.htmlUnescape(literal).trim();
            if (!literal.trim()) {
                return null;
            }
            literal = literal.substr(literal.indexOf("(") + 1);
            literal = literal.substr(0, literal.lastIndexOf(")"));
            var tm = literal.substr(0, literal.indexOf(","));
            literal = literal.substr(tm.length + 1);
            var layer = literal.substr(0, literal.indexOf(","));
            literal = literal.substr(layer.length + 1);
            var tileset = literal.substr(0, literal.lastIndexOf("]") + 1);
            literal = literal.substr(tileset.length + 1);
            var tilescale = literal;
            var result = new TilemapData(tilemapLiteralToTilemap(tm), {
                tiles: decodeTileset(tileset, proj),
                tileWidth: tileScaleToTileWidth(tilescale)
            }, imageLiteralToBitmap(layer).data());
            return result;
        }
        sprite_1.decodeTilemap = decodeTilemap;
        function trimTilemapTileset(t) {
            var oldTileset = t.tileset.tiles.slice();
            var tilemap = t.tilemap;
            var used = {};
            // Always keep transparency
            used[oldTileset[0].id] = true;
            for (var x = 0; x < tilemap.width; x++) {
                for (var y = 0; y < tilemap.height; y++) {
                    used[oldTileset[tilemap.get(x, y)].id] = true;
                }
            }
            var edited = t.editedTiles || [];
            // Tiles with names that start with * are new and haven't been recorded in the tilemap
            var newTileset = oldTileset.filter(function (tile) {
                return used[tile.id] ||
                    tile.id.charAt(0) === "*" ||
                    edited.indexOf(tile.id) !== -1;
            });
            if (newTileset.length === oldTileset.length) {
                return;
            }
            var mapping = [];
            for (var i = 0; i < oldTileset.length; i++) {
                mapping.push(newTileset.indexOf(oldTileset[i]));
            }
            for (var x = 0; x < tilemap.width; x++) {
                for (var y = 0; y < tilemap.height; y++) {
                    tilemap.set(x, y, mapping[tilemap.get(x, y)]);
                }
            }
            t.tileset.tiles = newTileset;
            return;
        }
        sprite_1.trimTilemapTileset = trimTilemapTileset;
        function computeAverageColor(bitmap, colors) {
            var parsedColors = colors.map(colorStringToRGB);
            var averageColor = [0, 0, 0];
            var numPixels = 0;
            for (var x = 0; x < bitmap.width; x++) {
                for (var y = 0; y < bitmap.height; y++) {
                    var color = bitmap.get(x, y);
                    if (color) {
                        ++numPixels;
                        var parsedColor = parsedColors[color];
                        averageColor[0] += parsedColor[0];
                        averageColor[1] += parsedColor[1];
                        averageColor[2] += parsedColor[2];
                    }
                }
            }
            return !!numPixels ? "#" + toHex(averageColor.map(function (c) { return Math.floor(c / numPixels); })) : "#00000000";
        }
        sprite_1.computeAverageColor = computeAverageColor;
        function getBitmap(blocksInfo, qName) {
            var sym = blocksInfo.apis.byQName[qName];
            if (!sym)
                return null;
            return getBitmapFromJResURL(sym.attributes.jresURL);
        }
        sprite_1.getBitmap = getBitmap;
        function getBitmapFromJResURL(jresURL) {
            return hexToBitmap(atob(jresURL.slice(jresURL.indexOf(",") + 1)));
        }
        sprite_1.getBitmapFromJResURL = getBitmapFromJResURL;
        function hexToBitmap(data) {
            var magic = data.charCodeAt(0);
            var w = data.charCodeAt(1);
            var h = data.charCodeAt(2);
            if (magic === 0x87) {
                magic = 0xe0 | data.charCodeAt(1);
                w = data.charCodeAt(2) | (data.charCodeAt(3) << 8);
                h = data.charCodeAt(4) | (data.charCodeAt(5) << 8);
                data = data.slice(4);
            }
            var out = new pxt.sprite.Bitmap(w, h);
            var index = 4;
            if (magic === 0xe1) {
                // Monochrome
                var mask = 0x01;
                var v = data.charCodeAt(index++);
                for (var x = 0; x < w; ++x) {
                    for (var y = 0; y < h; ++y) {
                        out.set(x, y, (v & mask) ? 1 : 0);
                        mask <<= 1;
                        if (mask == 0x100) {
                            mask = 0x01;
                            v = data.charCodeAt(index++);
                        }
                    }
                }
            }
            else {
                // Color
                for (var x = 0; x < w; x++) {
                    for (var y = 0; y < h; y += 2) {
                        var v = data.charCodeAt(index++);
                        out.set(x, y, v & 0xf);
                        if (y != h - 1) {
                            out.set(x, y + 1, (v >> 4) & 0xf);
                        }
                    }
                    while (index & 3)
                        index++;
                }
            }
            return out;
        }
        sprite_1.hexToBitmap = hexToBitmap;
        function filterItems(target, tags) {
            tags = tags
                .filter(function (el) { return !!el; })
                .map(function (el) { return el.toLowerCase(); });
            var includeTags = tags
                .filter(function (tag) { return tag.indexOf("!") !== 0; });
            var excludeTags = tags
                .filter(function (tag) { return tag.indexOf("!") === 0 && tag.length > 1; })
                .map(function (tag) { return tag.substring(1); });
            return target.filter(function (el) { return checkInclude(el) && checkExclude(el); });
            function checkInclude(item) {
                return includeTags.every(function (filterTag) {
                    var optFilterTag = "?" + filterTag;
                    return item.tags.some(function (tag) {
                        return tag === filterTag || tag === optFilterTag;
                    });
                });
            }
            function checkExclude(item) {
                return excludeTags.every(function (filterTag) {
                    return !item.tags.some(function (tag) { return tag === filterTag; });
                });
            }
        }
        sprite_1.filterItems = filterItems;
        function getGalleryItems(blocksInfo, qName) {
            var syms = getFixedInstanceDropdownValues(blocksInfo.apis, qName);
            syms = syms.filter(function (s) { return s.namespace != sprite_1.TILE_NAMESPACE; });
            generateIcons(syms);
            return syms.map(function (sym) {
                var splitTags = (sym.attributes.tags || "")
                    .split(" ")
                    .filter(function (el) { return !!el; })
                    .map(function (tag) { return pxt.Util.startsWith(tag, "category-") ? tag : tag.toLowerCase(); });
                return {
                    qName: sym.qName,
                    src: sym.attributes.iconURL,
                    alt: sym.qName,
                    tags: splitTags
                };
            });
        }
        sprite_1.getGalleryItems = getGalleryItems;
        function base64EncodeBitmap(data) {
            var bitmap = Bitmap.fromData(data);
            var hex = pxtc.f4EncodeImg(data.width, data.height, 4, function (x, y) { return bitmap.get(x, y); });
            return btoa(pxt.U.uint8ArrayToString(hexToUint8Array(hex)));
        }
        sprite_1.base64EncodeBitmap = base64EncodeBitmap;
        function getFixedInstanceDropdownValues(apis, qName) {
            return pxt.Util.values(apis.byQName).filter(function (sym) { return sym.kind === 4 /* Variable */
                && sym.attributes.fixedInstance
                && isSubtype(apis, sym.retType, qName); });
        }
        function isSubtype(apis, specific, general) {
            if (specific == general)
                return true;
            var inf = apis.byQName[specific];
            if (inf && inf.extendsTypes)
                return inf.extendsTypes.indexOf(general) >= 0;
            return false;
        }
        function generateIcons(instanceSymbols) {
            var imgConv = new pxt.ImageConverter();
            instanceSymbols.forEach(function (v) {
                if (v.attributes.jresURL && !v.attributes.iconURL && v.attributes.jresURL.indexOf("data:image/x-mkcd-f") == 0) {
                    v.attributes.iconURL = imgConv.convert(v.attributes.jresURL);
                }
            });
        }
        function tilemapLiteralToTilemap(text, defaultPattern) {
            // Strip the tagged template string business and the whitespace. We don't have to exhaustively
            // replace encoded characters because the compiler will catch any disallowed characters and throw
            // an error before the decompilation happens. 96 is backtick and 9 is tab
            text = text.replace(/[ `]|(?:&#96;)|(?:&#9;)|(?:hex)/g, "").trim();
            text = text.replace(/^["`\(\)]*/, '').replace(/["`\(\)]*$/, '');
            text = text.replace(/&#10;/g, "\n");
            if (!text && defaultPattern)
                text = defaultPattern;
            var width = parseInt(text.substr(0, 2), 16) | (parseInt(text.substr(2, 2), 16) << 8);
            var height = parseInt(text.substr(4, 2), 16) | (parseInt(text.substr(6, 2), 16) << 8);
            var data = hexToUint8Array(text.substring(8));
            return Tilemap.fromData({
                width: width,
                height: height,
                x0: 0,
                y0: 0,
                data: data
            });
        }
        sprite_1.tilemapLiteralToTilemap = tilemapLiteralToTilemap;
        function tilemapToTilemapLiteral(t) {
            if (!t)
                return "hex``";
            return "hex`" + hexEncodeTilemap(t) + "`";
        }
        function hexEncodeTilemap(t) {
            return "" + formatByte(t.width, 2) + formatByte(t.height, 2) + uint8ArrayToHex(t.data().data);
        }
        sprite_1.hexEncodeTilemap = hexEncodeTilemap;
        function decodeTileset(tileset, proj) {
            tileset = tileset.replace(/[\[\]]/g, "");
            return tileset ? tileset.split(",").filter(function (t) { return !!t.trim(); }).map(function (t) { return decodeTile(t, proj); }) : [];
        }
        function encodeTile(tile, fileType) {
            return tile.id;
        }
        function decodeTile(literal, proj) {
            literal = literal.trim();
            if (literal.indexOf("img") === 0) {
                var bitmap = imageLiteralToBitmap(literal);
                return proj.createNewTile(bitmap.data());
            }
            return proj.resolveTile(literal);
        }
        function formatByte(value, bytes) {
            var result = value.toString(16);
            var digits = bytes << 1;
            if (result.length & 1) {
                result = "0" + result;
            }
            while (result.length < digits) {
                result += "0";
            }
            return result;
        }
        sprite_1.formatByte = formatByte;
        function resizeBitmap(img, width, height) {
            var result = new Bitmap(width, height);
            result.apply(img);
            return result;
        }
        sprite_1.resizeBitmap = resizeBitmap;
        function resizeTilemap(img, width, height) {
            var result = new Tilemap(width, height);
            result.apply(img);
            return result;
        }
        sprite_1.resizeTilemap = resizeTilemap;
        function imageLiteralToBitmap(text, defaultPattern) {
            // Strip the tagged template string business and the whitespace. We don't have to exhaustively
            // replace encoded characters because the compiler will catch any disallowed characters and throw
            // an error before the decompilation happens. 96 is backtick and 9 is tab
            text = text.replace(/[ `]|(?:&#96;)|(?:&#9;)|(?:img)/g, "").trim();
            text = text.replace(/^["`\(\)]*/, '').replace(/["`\(\)]*$/, '');
            text = text.replace(/&#10;/g, "\n");
            if (!text && defaultPattern)
                text = defaultPattern;
            var rows = text.split("\n");
            // We support "ragged" sprites so not all rows will be the same length
            var sprite = [];
            var spriteWidth = 0;
            for (var r = 0; r < rows.length; r++) {
                var row = rows[r];
                var rowValues = [];
                for (var c = 0; c < row.length; c++) {
                    // This list comes from libs/screen/targetOverrides.ts in pxt-arcade
                    // Technically, this could change per target.
                    switch (row[c]) {
                        case "0":
                        case ".":
                            rowValues.push(0);
                            break;
                        case "1":
                        case "#":
                            rowValues.push(1);
                            break;
                        case "2":
                        case "T":
                            rowValues.push(2);
                            break;
                        case "3":
                        case "t":
                            rowValues.push(3);
                            break;
                        case "4":
                        case "N":
                            rowValues.push(4);
                            break;
                        case "5":
                        case "n":
                            rowValues.push(5);
                            break;
                        case "6":
                        case "G":
                            rowValues.push(6);
                            break;
                        case "7":
                        case "g":
                            rowValues.push(7);
                            break;
                        case "8":
                            rowValues.push(8);
                            break;
                        case "9":
                            rowValues.push(9);
                            break;
                        case "a":
                        case "A":
                        case "R":
                            rowValues.push(10);
                            break;
                        case "b":
                        case "B":
                        case "P":
                            rowValues.push(11);
                            break;
                        case "c":
                        case "C":
                        case "p":
                            rowValues.push(12);
                            break;
                        case "d":
                        case "D":
                        case "O":
                            rowValues.push(13);
                            break;
                        case "e":
                        case "E":
                        case "Y":
                            rowValues.push(14);
                            break;
                        case "f":
                        case "F":
                        case "W":
                            rowValues.push(15);
                            break;
                    }
                }
                if (rowValues.length) {
                    sprite.push(rowValues);
                    spriteWidth = Math.max(spriteWidth, rowValues.length);
                }
            }
            var spriteHeight = sprite.length;
            var result = new Bitmap(spriteWidth, spriteHeight);
            for (var r = 0; r < spriteHeight; r++) {
                var row = sprite[r];
                for (var c = 0; c < spriteWidth; c++) {
                    if (c < row.length) {
                        result.set(c, r, row[c]);
                    }
                    else {
                        result.set(c, r, 0);
                    }
                }
            }
            return result;
        }
        sprite_1.imageLiteralToBitmap = imageLiteralToBitmap;
        function imageLiteralPrologue(fileType) {
            var res = '';
            switch (fileType) {
                case "python":
                    res = "img(\"\"\"";
                    break;
                default:
                    res = "img`";
                    break;
            }
            return res;
        }
        function imageLiteralEpilogue(fileType) {
            var res = '';
            switch (fileType) {
                case "python":
                    res += "\"\"\")";
                    break;
                default:
                    res += "`";
                    break;
            }
            return res;
        }
        function imageLiteralFromDimensions(width, height, color, fileType) {
            var res = imageLiteralPrologue(fileType);
            var paddingBetweenPixels = (width * height > 300) ? "" : " ";
            for (var r = 0; r < height; r++) {
                res += "\n";
                for (var c = 0; c < width; c++) {
                    res += hexChars[color] + paddingBetweenPixels;
                }
            }
            res += "\n";
            res += imageLiteralEpilogue(fileType);
            return res;
        }
        sprite_1.imageLiteralFromDimensions = imageLiteralFromDimensions;
        function bitmapToImageLiteral(bitmap, fileType) {
            var res = imageLiteralPrologue(fileType);
            if (bitmap) {
                var paddingBetweenPixels = (bitmap.width * bitmap.height > 300) ? "" : " ";
                for (var r = 0; r < bitmap.height; r++) {
                    res += "\n";
                    for (var c = 0; c < bitmap.width; c++) {
                        res += hexChars[bitmap.get(c, r)] + paddingBetweenPixels;
                    }
                }
            }
            res += "\n";
            res += imageLiteralEpilogue(fileType);
            return res;
        }
        sprite_1.bitmapToImageLiteral = bitmapToImageLiteral;
        function bitmapEquals(a, b) {
            return pxt.sprite.Bitmap.fromData(a).equals(pxt.sprite.Bitmap.fromData(b));
        }
        sprite_1.bitmapEquals = bitmapEquals;
        function tileWidthToTileScale(tileWidth) {
            switch (tileWidth) {
                case 8: return "TileScale.Eight";
                case 16: return "TileScale.Sixteen";
                case 32: return "TileScale.ThirtyTwo";
                default: return Math.floor(Math.log2(tileWidth)).toString();
            }
        }
        sprite_1.tileWidthToTileScale = tileWidthToTileScale;
        function tileScaleToTileWidth(tileScale) {
            tileScale = tileScale.replace(/\s/g, "");
            switch (tileScale) {
                case "TileScale.Eight": return 8;
                case "TileScale.Sixteen": return 16;
                case "TileScale.ThirtyTwo": return 32;
                default: return Math.pow(2, parseInt(tileScale));
            }
        }
        sprite_1.tileScaleToTileWidth = tileScaleToTileWidth;
        function hexToUint8Array(hex) {
            var r = new Uint8ClampedArray(hex.length >> 1);
            for (var i = 0; i < hex.length; i += 2)
                r[i >> 1] = parseInt(hex.slice(i, i + 2), 16);
            return r;
        }
        sprite_1.hexToUint8Array = hexToUint8Array;
        function uint8ArrayToHex(data) {
            var hex = "0123456789abcdef";
            var res = "";
            for (var i = 0; i < data.length; ++i) {
                res += hex[data[i] >> 4];
                res += hex[data[i] & 0xf];
            }
            return res;
        }
        sprite_1.uint8ArrayToHex = uint8ArrayToHex;
        function colorStringToRGB(color) {
            var parsed = parseColorString(color);
            return [_r(parsed), _g(parsed), _b(parsed)];
        }
        function parseColorString(color) {
            if (color) {
                if (color.length === 6) {
                    return parseInt("0x" + color);
                }
                else if (color.length === 7) {
                    return parseInt("0x" + color.substr(1));
                }
            }
            return 0;
        }
        function _r(color) { return (color >> 16) & 0xff; }
        function _g(color) { return (color >> 8) & 0xff; }
        function _b(color) { return color & 0xff; }
        function toHex(bytes) {
            var r = "";
            for (var i = 0; i < bytes.length; ++i)
                r += ("0" + bytes[i].toString(16)).slice(-2);
            return r;
        }
    })(sprite = pxt.sprite || (pxt.sprite = {}));
})(pxt || (pxt = {}));
/// <reference path="./spriteutils.ts" />
var pxt;
(function (pxt) {
    var sprite;
    (function (sprite) {
        var legacy;
        (function (legacy) {
            var tileReferenceRegex = new RegExp("^\\s*" + sprite.TILE_NAMESPACE + "\\s*\\.\\s*" + sprite.TILE_PREFIX + "(\\d+)\\s*$");
            var LegacyTilemapData = /** @class */ (function () {
                function LegacyTilemapData(tilemap, tileset, layers) {
                    this.tilemap = tilemap;
                    this.tileset = tileset;
                    this.layers = layers;
                    this.nextId = 0;
                }
                return LegacyTilemapData;
            }());
            legacy.LegacyTilemapData = LegacyTilemapData;
            function decodeTilemap(literal, fileType) {
                literal = pxt.Util.htmlUnescape(literal).trim();
                if (!literal.trim()) {
                    return new LegacyTilemapData(new sprite.Tilemap(16, 16), { tileWidth: 16, tiles: [] }, new sprite.Bitmap(16, 16).data());
                }
                literal = literal.substr(literal.indexOf("(") + 1);
                literal = literal.substr(0, literal.lastIndexOf(")"));
                var tm = literal.substr(0, literal.indexOf(","));
                literal = literal.substr(tm.length + 1);
                var layer = literal.substr(0, literal.indexOf(","));
                literal = literal.substr(layer.length + 1);
                var tileset = literal.substr(0, literal.lastIndexOf("]") + 1);
                literal = literal.substr(tileset.length + 1);
                var tilescale = literal;
                var result = new LegacyTilemapData(sprite.tilemapLiteralToTilemap(tm), {
                    tiles: decodeTileset(tileset),
                    tileWidth: sprite.tileScaleToTileWidth(tilescale)
                }, sprite.imageLiteralToBitmap(layer).data());
                return result;
            }
            legacy.decodeTilemap = decodeTilemap;
            function decodeTileset(tileset) {
                tileset = tileset.replace(/[\[\]]/g, "");
                return tileset ? tileset.split(",").filter(function (t) { return !!t.trim(); }).map(function (t) { return decodeTile(t); }) : [];
            }
            function decodeTile(literal) {
                literal = literal.trim();
                if (literal.indexOf("img") === 0) {
                    var bitmap = sprite.imageLiteralToBitmap(literal);
                    return {
                        data: bitmap.data()
                    };
                }
                var match = tileReferenceRegex.exec(literal);
                if (match) {
                    return {
                        data: null,
                        projectId: Number(match[1])
                    };
                }
                return {
                    data: null,
                    qualifiedName: literal
                };
            }
            function tileToBlocklyVariable(info) {
                return info.projectId + ";" + info.data.width + ";" + info.data.height + ";" + pxtc.Util.toHex(info.data.data);
            }
            legacy.tileToBlocklyVariable = tileToBlocklyVariable;
            function blocklyVariableToTile(name) {
                var parts = name.split(";");
                if (parts.length !== 4) {
                    return null;
                }
                return {
                    projectId: parseInt(parts[0]),
                    data: {
                        width: parseInt(parts[1]),
                        height: parseInt(parts[2]),
                        data: new Uint8ClampedArray(pxtc.Util.fromHex(parts[3])),
                        x0: 0,
                        y0: 0
                    }
                };
            }
            legacy.blocklyVariableToTile = blocklyVariableToTile;
        })(legacy = sprite.legacy || (sprite.legacy = {}));
    })(sprite = pxt.sprite || (pxt.sprite = {}));
})(pxt || (pxt = {}));
/// <reference path="../localtypings/pxtpackage.d.ts"/>
/// <reference path="../localtypings/pxtparts.d.ts"/>
/// <reference path="../localtypings/pxtarget.d.ts"/>
/// <reference path="util.ts"/>
var pxt;
(function (pxt) {
    var CONFIG_FIELDS_ORDER = [
        "name",
        "version",
        "description",
        "license",
        "dependencies",
        "files",
        "testFiles",
        "testDependencies",
        "fileDependencies",
        "public",
        "targetVersions",
        "supportedTargets",
        "preferredEditor",
        "languageRestriction",
        "additionalFilePath",
        "additionalFilePaths"
    ];
    var Package = /** @class */ (function () {
        function Package(id, _verspec, parent, addedBy) {
            this.id = id;
            this._verspec = _verspec;
            this.parent = parent;
            this.level = -1; // main package = 0, first children = 1, etc
            this.isLoaded = false;
            this.ignoreTests = false;
            this.cppOnly = false;
            if (addedBy) {
                this.level = addedBy.level + 1;
            }
            this.addedBy = [addedBy];
        }
        Package.stringifyConfig = function (config) {
            // reorg fields
            var configMap = config;
            var newCfg = {};
            for (var _i = 0, CONFIG_FIELDS_ORDER_1 = CONFIG_FIELDS_ORDER; _i < CONFIG_FIELDS_ORDER_1.length; _i++) {
                var f = CONFIG_FIELDS_ORDER_1[_i];
                if (configMap.hasOwnProperty(f))
                    newCfg[f] = configMap[f];
            }
            for (var _a = 0, _b = Object.keys(configMap); _a < _b.length; _a++) {
                var f = _b[_a];
                if (!newCfg.hasOwnProperty(f))
                    newCfg[f] = configMap[f];
            }
            // github adds a newline when web editing
            return JSON.stringify(newCfg, null, 4) + "\n";
        };
        Package.parseAndValidConfig = function (configStr) {
            var json = pxt.Util.jsonTryParse(configStr);
            return json
                && json.name !== undefined && typeof json.name === "string"
                // && json.version && typeof json.version === "string", default to 0.0.0
                && json.files && Array.isArray(json.files) && json.files.every(function (f) { return typeof f === "string"; })
                && json.dependencies && Object.keys(json.dependencies).every(function (k) { return typeof json.dependencies[k] === "string"; })
                && json;
        };
        Package.getConfigAsync = function (pkgTargetVersion, id, fullVers) {
            return Promise.resolve().then(function () {
                if (pxt.github.isGithubId(fullVers)) {
                    var repoInfo_1 = pxt.github.parseRepoId(fullVers);
                    return pxt.packagesConfigAsync()
                        .then(function (config) { return pxt.github.repoAsync(repoInfo_1.fullName, config); }) // Make sure repo exists and is whitelisted
                        .then(function (gitRepo) { return gitRepo ? pxt.github.pkgConfigAsync(repoInfo_1.fullName, repoInfo_1.tag) : null; });
                }
                else {
                    // If it's not from GH, assume it's a bundled package
                    // TODO: Add logic for shared packages if we enable that
                    var updatedRef = pxt.patching.upgradePackageReference(pkgTargetVersion, id, fullVers);
                    var bundledPkg = pxt.appTarget.bundledpkgs[updatedRef];
                    return JSON.parse(bundledPkg[pxt.CONFIG_NAME]);
                }
            });
        };
        Package.corePackages = function () {
            var pkgs = pxt.appTarget.bundledpkgs;
            return Object.keys(pkgs).map(function (id) { return JSON.parse(pkgs[id][pxt.CONFIG_NAME]); })
                .filter(function (cfg) { return !!cfg; });
        };
        Package.prototype.disablesVariant = function (v) {
            return this.config && this.config.disablesVariants && this.config.disablesVariants.indexOf(v) >= 0;
        };
        Package.prototype.invalid = function () {
            return /^invalid:/.test(this.version());
        };
        Package.prototype.version = function () {
            return this.resolvedVersion || this._verspec;
        };
        Package.prototype.verProtocol = function () {
            var spl = this.version().split(':');
            if (spl.length > 1)
                return spl[0];
            else
                return "";
        };
        Package.prototype.verArgument = function () {
            var p = this.verProtocol();
            if (p)
                return this.version().slice(p.length + 1);
            return this.version();
        };
        Package.prototype.targetVersion = function () {
            return (this.parent && this.parent != this)
                ? this.parent.targetVersion()
                : this.config.targetVersions
                    ? this.config.targetVersions.target
                    : undefined;
        };
        Package.prototype.commonDownloadAsync = function () {
            var _this = this;
            var proto = this.verProtocol();
            if (proto == "pub") {
                return pxt.Cloud.downloadScriptFilesAsync(this.verArgument());
            }
            else if (proto == "github") {
                return pxt.packagesConfigAsync()
                    .then(function (config) { return pxt.github.downloadPackageAsync(_this.verArgument(), config); })
                    .then(function (resp) { return resp.files; });
            }
            else if (proto == "embed") {
                var resp = pxt.getEmbeddedScript(this.verArgument());
                return Promise.resolve(resp);
            }
            else if (proto == "pkg") {
                // the package source is serialized in a file in the package itself
                var pkgFilesSrc = this.readFile(this.verArgument());
                var pkgFilesJson = ts.pxtc.Util.jsonTryParse(pkgFilesSrc);
                if (!pkgFilesJson)
                    pxt.log("unable to find " + this.verArgument());
                return Promise.resolve(pkgFilesJson);
            }
            else
                return Promise.resolve(null);
        };
        Package.prototype.host = function () { return this.parent._host; };
        Package.prototype.readFile = function (fn) {
            return this.host().readFile(this, fn);
        };
        Package.prototype.readGitJson = function () {
            var gitJsonText = this.readFile(pxt.github.GIT_JSON);
            return pxt.Util.jsonTryParse(gitJsonText);
        };
        Package.prototype.resolveDep = function (id) {
            if (this.parent.deps.hasOwnProperty(id))
                return this.parent.deps[id];
            return null;
        };
        Package.prototype.saveConfig = function () {
            var cfg = pxt.U.clone(this.config);
            delete cfg.additionalFilePaths;
            var text = pxt.Package.stringifyConfig(cfg);
            this.host().writeFile(this, pxt.CONFIG_NAME, text);
        };
        Package.prototype.setPreferredEditor = function (editor) {
            if (this.config.preferredEditor != editor) {
                this.config.preferredEditor = editor;
                this.saveConfig();
            }
        };
        Package.prototype.getPreferredEditor = function () {
            var editor = this.config.preferredEditor;
            if (!editor) {
                // older editors do not have this field set so we need to apply our
                // language resolution logic here
                // note that the preferredEditor field will be set automatically on the first save
                // 1. no main.blocks in project, open javascript
                var hasMainBlocks = this.getFiles().indexOf("main.blocks") >= 0;
                if (!hasMainBlocks)
                    return pxt.JAVASCRIPT_PROJECT_NAME;
                // 2. if main.blocks is empty and main.ts is non-empty
                //    open typescript
                // https://github.com/microsoft/pxt/blob/master/webapp/src/app.tsx#L1032
                var mainBlocks = this.readFile("main.blocks");
                var mainTs = this.readFile("main.ts");
                if (!mainBlocks && mainTs)
                    return pxt.JAVASCRIPT_PROJECT_NAME;
                // 3. default ot blocks
                return pxt.BLOCKS_PROJECT_NAME;
            }
            return editor;
        };
        Package.prototype.parseJRes = function (allres) {
            if (allres === void 0) { allres = {}; }
            for (var _i = 0, _a = this.getFiles(); _i < _a.length; _i++) {
                var f = _a[_i];
                if (pxt.U.endsWith(f, ".jres")) {
                    inflateJRes(JSON.parse(this.readFile(f)), allres);
                }
            }
            return allres;
        };
        Package.prototype.resolveVersionAsync = function () {
            var v = this._verspec;
            if (pxt.getEmbeddedScript(this.id)) {
                this.resolvedVersion = v = "embed:" + this.id;
            }
            else if (!v || v == "*") {
                // don't hard crash, instead ignore dependency
                // U.userError(lf("version not specified for {0}", this.id))
                this.configureAsInvalidPackage(lf("version not specified for {0}", this.id));
                v = this._verspec;
            }
            return Promise.resolve(v);
        };
        Package.prototype.downloadAsync = function () {
            var _this = this;
            return this.resolveVersionAsync()
                .then(function (verNo) {
                if (_this.invalid()) {
                    pxt.debug("skip download of invalid package " + _this.id);
                    return undefined;
                }
                if (!/^embed:/.test(verNo) && _this.installedVersion == verNo)
                    return undefined;
                pxt.debug('downloading ' + verNo);
                return _this.host().downloadPackageAsync(_this)
                    .then(function () {
                    _this.loadConfig();
                    pxt.debug("installed " + _this.id + " /" + verNo);
                });
            });
        };
        Package.prototype.loadConfig = function () {
            if (this.level != 0 && this.invalid())
                return; // don't try load invalid dependency
            var confStr = this.readFile(pxt.CONFIG_NAME);
            if (!confStr)
                pxt.U.userError("extension " + this.id + " is missing " + pxt.CONFIG_NAME);
            this.parseConfig(confStr);
            if (this.level != 0)
                this.installedVersion = this.version();
            this.saveConfig();
        };
        Package.prototype.validateConfig = function () {
            if (!this.config.dependencies)
                pxt.U.userError("Missing dependencies in config of: " + this.id);
            if (!Array.isArray(this.config.files))
                pxt.U.userError("Missing files in config of: " + this.id);
            if (typeof this.config.name != "string" || !this.config.name)
                this.config.name = lf("Untitled");
            // don't be so uptight about project names,
            // handle invalid names downstream
            if (this.config.targetVersions
                && this.config.targetVersions.target
                && pxt.appTarget.versions
                && pxt.semver.majorCmp(this.config.targetVersions.target, pxt.appTarget.versions.target) > 0)
                pxt.U.userError(lf("{0} requires target version {1} (you are running {2})", this.config.name, this.config.targetVersions.target, pxt.appTarget.versions.target));
        };
        Package.prototype.isPackageInUse = function (pkgId, ts) {
            if (ts === void 0) { ts = this.readFile("main.ts"); }
            // Build the RegExp that will determine whether the dependency is in use. Try to use upgrade rules,
            // otherwise fallback to the package's name
            var regex = null;
            var upgrades = pxt.patching.computePatches(this.targetVersion(), "missingPackage");
            if (upgrades) {
                upgrades.forEach(function (rule) {
                    Object.keys(rule.map).forEach(function (match) {
                        if (rule.map[match] === pkgId) {
                            regex = new RegExp(match, "g");
                        }
                    });
                });
            }
            if (!regex) {
                regex = new RegExp(pkgId + "\\.", "g");
            }
            return regex.test(ts);
        };
        Package.prototype.upgradePackagesAsync = function () {
            var _this = this;
            if (!this.config)
                this.loadConfig();
            return pxt.packagesConfigAsync()
                .then(function (packagesConfig) {
                var numfixes = 0;
                var fixes = {};
                pxt.U.iterMap(_this.config.dependencies, function (pkg, ver) {
                    if (pxt.github.isGithubId(ver)) {
                        var upgraded = pxt.github.upgradedPackageReference(packagesConfig, ver);
                        if (upgraded && upgraded != ver) {
                            pxt.log("upgrading dep " + pkg + ": " + ver + " -> " + upgraded);
                            fixes[ver] = upgraded;
                            _this.config.dependencies[pkg] = upgraded;
                            numfixes++;
                        }
                    }
                });
                if (numfixes)
                    _this.saveConfig();
                return numfixes && fixes;
            });
        };
        Package.prototype.getMissingPackages = function (config, ts) {
            var upgrades = pxt.patching.computePatches(this.targetVersion(), "missingPackage");
            var missing = {};
            if (ts && upgrades)
                upgrades.forEach(function (rule) {
                    Object.keys(rule.map).forEach(function (match) {
                        var regex = new RegExp(match, 'g');
                        var pkg = rule.map[match];
                        ts.replace(regex, function (m) {
                            if (!config.dependencies[pkg]) {
                                missing[pkg] = "*";
                            }
                            return "";
                        });
                    });
                });
            return missing;
        };
        /**
         * For the given package config or ID, looks through all the currently installed packages to find conflicts in
         * Yotta settings and version spec
         */
        Package.prototype.findConflictsAsync = function (pkgOrId, version) {
            var _this = this;
            var conflicts = [];
            var pkgCfg;
            return Promise.resolve()
                .then(function () {
                // Get the package config if it's not already provided
                if (typeof pkgOrId === "string") {
                    return Package.getConfigAsync(_this.targetVersion(), pkgOrId, version);
                }
                else {
                    return Promise.resolve(pkgOrId);
                }
            })
                .then(function (cfg) {
                pkgCfg = cfg;
                // Iterate through all installed packages and check for conflicting settings
                if (pkgCfg) {
                    var yottaCfg_1 = pkgCfg.yotta ? pxt.U.jsonFlatten(pkgCfg.yotta.config) : null;
                    _this.parent.sortedDeps().forEach(function (depPkg) {
                        if (pkgCfg.core && depPkg.config.core &&
                            pkgCfg.name != depPkg.config.name) {
                            var conflict = new pxt.cpp.PkgConflictError(lf("conflict between core extensions {0} and {1}", pkgCfg.name, depPkg.id));
                            conflict.pkg0 = depPkg;
                            conflicts.push(conflict);
                            return;
                        }
                        var foundYottaConflict = false;
                        if (yottaCfg_1) {
                            var depConfig = depPkg.config || JSON.parse(depPkg.readFile(pxt.CONFIG_NAME));
                            var hasYottaSettings = !!depConfig && !!depConfig.yotta && !!depPkg.config.yotta.config;
                            if (hasYottaSettings) {
                                var depYottaCfg = pxt.U.jsonFlatten(depConfig.yotta.config);
                                for (var _i = 0, _a = Object.keys(yottaCfg_1); _i < _a.length; _i++) {
                                    var settingName = _a[_i];
                                    var depSetting = depYottaCfg[settingName];
                                    var isJustDefaults = pkgCfg.yotta.configIsJustDefaults || depConfig.yotta.configIsJustDefaults;
                                    if (depYottaCfg.hasOwnProperty(settingName) && depSetting !== yottaCfg_1[settingName] && !isJustDefaults && (!depPkg.parent.config.yotta || !depPkg.parent.config.yotta.ignoreConflicts)) {
                                        var conflict = new pxt.cpp.PkgConflictError(lf("conflict on yotta setting {0} between extensions {1} and {2}", settingName, pkgCfg.name, depPkg.id));
                                        conflict.pkg0 = depPkg;
                                        conflict.settingName = settingName;
                                        conflicts.push(conflict);
                                        foundYottaConflict = true;
                                    }
                                }
                            }
                        }
                        if (!foundYottaConflict && pkgCfg.name === depPkg.id && depPkg._verspec != version && !/^file:/.test(depPkg._verspec) && !/^file:/.test(version)) {
                            var conflict = new pxt.cpp.PkgConflictError(lf("version mismatch for extension {0} (installed: {1}, installing: {2})", depPkg, depPkg._verspec, version));
                            conflict.pkg0 = depPkg;
                            conflict.isVersionConflict = true;
                            conflicts.push(conflict);
                        }
                    });
                }
                // Also check for conflicts for all the specified package's dependencies (recursively)
                return Object.keys(pkgCfg.dependencies).reduce(function (soFar, pkgDep) {
                    return soFar
                        .then(function () { return _this.findConflictsAsync(pkgDep, pkgCfg.dependencies[pkgDep]); })
                        .then(function (childConflicts) { return conflicts.push.apply(conflicts, childConflicts); });
                }, Promise.resolve());
            })
                .then(function () {
                // For each conflicting package, we need to include their ancestor tree in the list of conflicts
                // For example, if package A depends on package B, and package B is in conflict with package C,
                // then package A is also technically in conflict with C
                var allAncestors = function (p) {
                    var ancestors = [];
                    p.addedBy.forEach(function (a) {
                        if (a.id !== _this.id) {
                            ancestors.push.apply(allAncestors(a));
                            ancestors.push(a);
                        }
                    });
                    return ancestors;
                };
                var additionalConflicts = [];
                conflicts.forEach(function (c) {
                    additionalConflicts.push.apply(additionalConflicts, allAncestors(c.pkg0).map(function (anc) {
                        var confl = new pxt.cpp.PkgConflictError(c.isVersionConflict ?
                            lf("a dependency of {0} has a version mismatch with extension {1} (installed: {1}, installing: {2})", anc.id, pkgCfg.name, c.pkg0._verspec, version) :
                            lf("conflict on yotta setting {0} between extensions {1} and {2}", c.settingName, pkgCfg.name, c.pkg0.id));
                        confl.pkg0 = anc;
                        return confl;
                    }));
                });
                conflicts.push.apply(conflicts, additionalConflicts);
                // Remove duplicate conflicts (happens if more than one package had the same ancestor)
                conflicts = conflicts.filter(function (c, index) {
                    for (var i = 0; i < index; ++i) {
                        if (c.pkg0.id === conflicts[i].pkg0.id) {
                            return false;
                        }
                    }
                    return true;
                });
                return conflicts;
            });
        };
        Package.prototype.configureAsInvalidPackage = function (reason) {
            pxt.log("invalid package " + this.id + ": " + reason);
            this._verspec = "invalid:" + this.id;
            this.config = {
                name: this.id,
                description: reason,
                dependencies: {},
                files: []
            };
        };
        Package.prototype.parseConfig = function (cfgSrc, targetVersion) {
            try {
                var cfg = JSON.parse(cfgSrc);
                this.config = cfg;
            }
            catch (e) {
                this.configureAsInvalidPackage(lf("Syntax error in pxt.json"));
            }
            var currentConfig = JSON.stringify(this.config);
            for (var dep in this.config.dependencies) {
                var value = pxt.patching.upgradePackageReference(this.targetVersion(), dep, this.config.dependencies[dep]);
                if (value != dep) {
                    delete this.config.dependencies[dep];
                    if (value) {
                        this.config.dependencies[value] = "*";
                    }
                }
            }
            if (targetVersion) {
                this.config.targetVersions = {
                    target: targetVersion
                };
            }
            if (JSON.stringify(this.config) != currentConfig) {
                this.saveConfig();
            }
            this.validateConfig();
        };
        Package.prototype.patchCorePackage = function () {
            var _this = this;
            pxt.Util.assert(pxt.appTarget.simulator && pxt.appTarget.simulator.dynamicBoardDefinition);
            pxt.Util.assert(this.level == 0);
            // find all core packages in target
            var corePackages = Object.keys(this.config.dependencies)
                .filter(function (dep) { return !!dep && (dep == pxt.BLOCKS_PROJECT_NAME || dep == pxt.JAVASCRIPT_PROJECT_NAME ||
                JSON.parse((pxt.appTarget.bundledpkgs[dep] || {})[pxt.CONFIG_NAME] || "{}").core); });
            // no core package? add the first one
            if (corePackages.length == 0) {
                var allCorePkgs = pxt.Package.corePackages();
                /* tslint:disable:no-unused-expression TODO(tslint): */
                if (allCorePkgs.length)
                    this.config.dependencies[allCorePkgs[0].name];
                /* tslint:enable:no-unused-expression */
            }
            else if (corePackages.length > 1) {
                // keep last package
                corePackages.pop();
                corePackages.forEach(function (dep) {
                    pxt.log("removing core package " + dep);
                    delete _this.config.dependencies[dep];
                });
            }
        };
        Package.prototype.resolvedDependencies = function () {
            var _this = this;
            return Object.keys(this.dependencies()).map(function (n) { return _this.resolveDep(n); });
        };
        Package.prototype.dependencies = function (includeCpp) {
            if (includeCpp === void 0) { includeCpp = false; }
            if (!this.config)
                return {};
            var dependencies = pxt.Util.clone(this.config.dependencies || {});
            // add test dependencies if nedeed
            if (this.level == 0 && this.config.testDependencies) {
                // only add testDepdencies that can be resolved
                pxt.Util.iterMap(this.config.testDependencies, function (k, v) {
                    if (v != "*" || pxt.appTarget.bundledpkgs[k])
                        dependencies[k] = v;
                });
            }
            if (includeCpp && this.config.cppDependencies) {
                pxt.Util.jsonMergeFrom(dependencies, this.config.cppDependencies);
            }
            return dependencies;
        };
        Package.prototype.loadAsync = function (isInstall, targetVersion) {
            var _this = this;
            if (isInstall === void 0) { isInstall = false; }
            if (this.isLoaded)
                return Promise.resolve();
            var initPromise = Promise.resolve();
            if (this.level == 0 && !pxt.appTarget.multiVariants)
                pxt.setAppTargetVariant(null);
            this.isLoaded = true;
            var str = this.readFile(pxt.CONFIG_NAME);
            if (str == null) {
                if (!isInstall)
                    pxt.U.userError("Package not installed: " + this.id + ", did you forget to run `pxt install`?");
            }
            else {
                initPromise = initPromise.then(function () { return _this.parseConfig(str); });
            }
            // if we are installing this script, we haven't yet downloaded the config
            // do upgrade later
            if (this.level == 0 && !isInstall) {
                initPromise = initPromise.then(function () { return _this.upgradePackagesAsync().then(function () { }); });
            }
            if (isInstall)
                initPromise = initPromise.then(function () { return _this.downloadAsync(); });
            // we are installing the script, and we've download the original version and we haven't upgraded it yet
            // do upgrade and reload as needed
            if (this.level == 0 && isInstall) {
                initPromise = initPromise.then(function () { return _this.upgradePackagesAsync(); })
                    .then(function (fixes) {
                    if (fixes) {
                        // worst case scenario with double load
                        Object.keys(fixes).forEach(function (key) { return pxt.tickEvent("package.doubleload", { "extension": key }); });
                        pxt.log("upgraded, downloading again");
                        pxt.debug(fixes);
                        return _this.downloadAsync();
                    }
                    // nothing to do here
                    else
                        return Promise.resolve();
                });
            }
            if (pxt.appTarget.simulator && pxt.appTarget.simulator.dynamicBoardDefinition) {
                if (this.level == 0)
                    initPromise = initPromise.then(function () { return _this.patchCorePackage(); });
                initPromise = initPromise.then(function () {
                    if (_this.config.compileServiceVariant)
                        pxt.setAppTargetVariant(_this.config.compileServiceVariant);
                    if (_this.config.files.indexOf("board.json") < 0)
                        return;
                    var def = pxt.appTarget.simulator.boardDefinition = JSON.parse(_this.readFile("board.json"));
                    def.id = _this.config.name;
                    pxt.appTarget.appTheme.boardName = def.boardName || lf("board");
                    pxt.appTarget.appTheme.driveDisplayName = def.driveDisplayName || lf("DRIVE");
                    var expandPkg = function (v) {
                        var m = /^pkg:\/\/(.*)/.exec(v);
                        if (m) {
                            var fn = m[1];
                            var content = _this.readFile(fn);
                            return pxt.U.toDataUri(content, pxt.U.getMime(fn));
                        }
                        else {
                            return v;
                        }
                    };
                    var bd = pxt.appTarget.simulator.boardDefinition;
                    if (typeof bd.visual == "object") {
                        var vis = bd.visual;
                        vis.image = expandPkg(vis.image);
                        vis.outlineImage = expandPkg(vis.outlineImage);
                    }
                });
            }
            var loadDepsRecursive = function (deps, from, isCpp) {
                if (isCpp === void 0) { isCpp = false; }
                return __awaiter(_this, void 0, void 0, function () {
                    var _i, _a, id, ver, mod, mod_1;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (!deps)
                                    deps = from.dependencies(isCpp);
                                _i = 0, _a = Object.keys(deps);
                                _b.label = 1;
                            case 1:
                                if (!(_i < _a.length)) return [3 /*break*/, 5];
                                id = _a[_i];
                                ver = deps[id] || "*";
                                if (id == "hw" && pxt.hwVariant)
                                    id = "hw---" + pxt.hwVariant;
                                mod = from.resolveDep(id);
                                if (!mod) return [3 /*break*/, 2];
                                if (mod.invalid()) {
                                    // failed to resolve dependency, ignore
                                    mod.level = Math.min(mod.level, from.level + 1);
                                    mod.addedBy.push(from);
                                    return [3 /*break*/, 4];
                                }
                                if (mod._verspec != ver && !/^file:/.test(mod._verspec) && !/^file:/.test(ver))
                                    pxt.U.userError("Version spec mismatch on " + id);
                                if (!isCpp) {
                                    mod.level = Math.min(mod.level, from.level + 1);
                                    mod.addedBy.push(from);
                                }
                                return [3 /*break*/, 4];
                            case 2:
                                mod_1 = new Package(id, ver, from.parent, from);
                                if (isCpp)
                                    mod_1.cppOnly = true;
                                from.parent.deps[id] = mod_1;
                                // we can have "core---nrf52" to be used instead of "core" in other packages
                                from.parent.deps[id.replace(/---.*/, "")] = mod_1;
                                return [4 /*yield*/, mod_1.loadAsync(isInstall)];
                            case 3:
                                _b.sent();
                                _b.label = 4;
                            case 4:
                                _i++;
                                return [3 /*break*/, 1];
                            case 5: return [2 /*return*/];
                        }
                    });
                });
            };
            return initPromise
                .then(function () { return loadDepsRecursive(null, _this); })
                .then(function () {
                // get paletter config loading deps, so the more higher level packages take precedence
                if (_this.config.palette && pxt.appTarget.runtime) {
                    pxt.appTarget.runtime.palette = pxt.U.clone(_this.config.palette);
                    if (_this.config.paletteNames)
                        pxt.appTarget.runtime.paletteNames = _this.config.paletteNames;
                }
                // get screen size loading deps, so the more higher level packages take precedence
                if (_this.config.screenSize && pxt.appTarget.runtime)
                    pxt.appTarget.runtime.screenSize = pxt.U.clone(_this.config.screenSize);
                if (_this.level === 0) {
                    // Check for missing packages. We need to add them 1 by 1 in case they conflict with eachother.
                    var mainTs = _this.readFile("main.ts");
                    if (!mainTs)
                        return Promise.resolve(null);
                    var missingPackages_1 = _this.getMissingPackages(_this.config, mainTs);
                    var didAddPackages_1 = false;
                    return Object.keys(missingPackages_1).reduce(function (addPackagesPromise, missing) {
                        return addPackagesPromise
                            .then(function () { return _this.findConflictsAsync(missing, missingPackages_1[missing]); })
                            .then(function (conflicts) {
                            if (conflicts.length) {
                                var conflictNames = conflicts.map(function (c) { return c.pkg0.id; }).join(", ");
                                var settingNames = conflicts.map(function (c) { return c.settingName; }).filter(function (s) { return !!s; }).join(", ");
                                pxt.log("skipping missing package " + missing + " because it conflicts with the following packages: " + conflictNames + " (conflicting settings: " + settingNames + ")");
                                return Promise.resolve(null);
                            }
                            else {
                                pxt.log("adding missing package " + missing);
                                didAddPackages_1 = true;
                                _this.config.dependencies[missing] = "*";
                                var addDependency = {};
                                addDependency[missing] = missingPackages_1[missing];
                                return loadDepsRecursive(addDependency, _this);
                            }
                        });
                    }, Promise.resolve(null))
                        .then(function () {
                        if (didAddPackages_1) {
                            _this.saveConfig();
                            _this.validateConfig();
                        }
                        return Promise.resolve(null);
                    });
                }
                return Promise.resolve(null);
            })
                .then(function () {
                if (_this.level != 0)
                    return Promise.resolve();
                return Promise.all(pxt.U.values(_this.parent.deps).map(function (pkg) {
                    return loadDepsRecursive(null, pkg, true);
                }));
            })
                .then(function () {
                pxt.debug("  installed " + _this.id);
            });
        };
        Package.prototype.getFiles = function () {
            var _this = this;
            var res;
            if (this.level == 0 && !this.ignoreTests)
                res = this.config.files.concat(this.config.testFiles || []);
            else
                res = this.config.files.slice(0);
            var fd = this.config.fileDependencies;
            if (this.config.fileDependencies)
                res = res.filter(function (fn) {
                    var evalCond = function (cond) {
                        cond = cond.trim();
                        if (cond[0] == '!')
                            return !evalCond(cond.slice(1));
                        if (/^[\w-]+$/.test(cond)) {
                            var dep = _this.parent.resolveDep(cond);
                            if (dep && !dep.cppOnly)
                                return true;
                            return false;
                        }
                        var m = /^target:(\w+)$/.exec(cond);
                        if (m)
                            return m[1] == pxt.appTarget.id || m[1] == pxt.appTarget.platformid;
                        if (!Package.depWarnings[cond]) {
                            Package.depWarnings[cond] = true;
                            pxt.log("invalid dependency expression: " + cond + " in " + _this.id + "/" + fn);
                        }
                        return false;
                    };
                    var cond = pxt.U.lookup(fd, fn);
                    if (!cond || !cond.trim())
                        return true;
                    return cond.split('||').some(function (c) { return c.split('&&').every(evalCond); });
                });
            return res;
        };
        Package.prototype.addSnapshot = function (files, exts) {
            if (exts === void 0) { exts = [""]; }
            var _loop_6 = function (fn) {
                if (exts.some(function (e) { return pxt.U.endsWith(fn, e); })) {
                    files[this_1.id + "/" + fn] = this_1.readFile(fn);
                }
            };
            var this_1 = this;
            for (var _i = 0, _a = this.getFiles(); _i < _a.length; _i++) {
                var fn = _a[_i];
                _loop_6(fn);
            }
            files[this.id + "/" + pxt.CONFIG_NAME] = this.readFile(pxt.CONFIG_NAME);
        };
        /**
         * Returns localized strings qName -> translation
         */
        Package.prototype.packageLocalizationStringsAsync = function (lang) {
            var _this = this;
            var targetId = pxt.appTarget.id;
            var filenames = [this.config.name + "-jsdoc", this.config.name];
            var r = {};
            var theme = pxt.appTarget.appTheme || {};
            if (this.config.skipLocalization)
                return Promise.resolve(r);
            // live loc of bundled packages
            if (pxt.Util.localizeLive && this.id != "this" && pxt.appTarget.bundledpkgs[this.id]) {
                pxt.debug("loading live translations for " + this.id);
                return Promise.all(filenames.map(function (fn) { return pxt.Util.downloadLiveTranslationsAsync(lang, targetId + "/" + fn + "-strings.json", theme.crowdinBranch)
                    .then(function (tr) {
                    if (tr && Object.keys(tr).length) {
                        pxt.Util.jsonMergeFrom(r, tr);
                    }
                    else {
                        pxt.tickEvent("translations.livetranslationsfailed", { "filename": fn });
                        pxt.Util.jsonMergeFrom(r, _this.bundledStringsForFile(lang, fn));
                    }
                })
                    .catch(function (e) {
                    pxt.tickEvent("translations.livetranslationsfailed", { "filename": fn });
                    pxt.log("error while downloading " + targetId + "/" + fn + "-strings.json");
                    pxt.Util.jsonMergeFrom(r, _this.bundledStringsForFile(lang, fn));
                }); })).then(function () { return r; });
            }
            else {
                filenames.map(function (name) {
                    return _this.bundledStringsForFile(lang, name);
                }).filter(function (d) { return !!d; }).forEach(function (d) { return pxt.Util.jsonMergeFrom(r, d); });
                return Promise.resolve(r);
            }
        };
        Package.prototype.bundledStringsForFile = function (lang, filename) {
            var r = {};
            var _a = pxt.Util.normalizeLanguageCode(lang), initialLang = _a[0], baseLang = _a[1], initialLangLowerCase = _a[2];
            var files = this.config.files;
            var fn = "_locales/" + initialLang + "/" + filename + "-strings.json";
            if (files.indexOf(fn) > -1) {
                r = JSON.parse(this.readFile(fn));
            }
            else if (initialLangLowerCase) {
                fn = "_locales/" + initialLangLowerCase + "/" + filename + "-strings.json";
                if (files.indexOf(fn) > -1)
                    r = JSON.parse(this.readFile(fn));
                else if (baseLang) {
                    fn = "_locales/" + baseLang + "/" + filename + "-strings.json";
                    if (files.indexOf(fn) > -1) {
                        r = JSON.parse(this.readFile(fn));
                    }
                }
            }
            return r;
        };
        Package.depWarnings = {};
        return Package;
    }());
    pxt.Package = Package;
    var MainPackage = /** @class */ (function (_super) {
        __extends(MainPackage, _super);
        function MainPackage(_host) {
            var _this = _super.call(this, "this", "file:.", null, null) || this;
            _this._host = _host;
            _this.deps = {};
            _this.parent = _this;
            _this.addedBy = [_this];
            _this.level = 0;
            _this.deps[_this.id] = _this;
            return _this;
        }
        MainPackage.prototype.installAllAsync = function (targetVersion) {
            return this.loadAsync(true, targetVersion);
        };
        MainPackage.prototype.sortedDeps = function (includeCpp) {
            var _this = this;
            if (includeCpp === void 0) { includeCpp = false; }
            var visited = {};
            var ids = [];
            var weight = function (p) {
                return p.config ? Object.keys(p.config.cppDependencies || {}).length : 0;
            };
            var rec = function (p) {
                if (!p || pxt.U.lookup(visited, p.id))
                    return;
                visited[p.id] = true;
                var depNames = Object.keys(p.dependencies(includeCpp));
                var deps = depNames.map(function (id) { return _this.resolveDep(id); });
                // packages with more cppDependencies (core---* most likely) come first
                deps.sort(function (a, b) { return weight(b) - weight(a) || pxt.U.strcmp(a.id, b.id); });
                deps.forEach(rec);
                ids.push(p.id);
            };
            rec(this);
            return ids.map(function (id) { return _this.resolveDep(id); });
        };
        MainPackage.prototype.localizationStringsAsync = function (lang) {
            var loc = {};
            return Promise.all(pxt.Util.values(this.deps).map(function (dep) {
                return dep.packageLocalizationStringsAsync(lang)
                    .then(function (depLoc) {
                    if (depLoc) // merge data
                        Object.keys(depLoc).forEach(function (k) {
                            if (!loc[k])
                                loc[k] = depLoc[k];
                        });
                });
            }))
                .then(function () {
                // Subcategories and groups are translated in their respective package, but are not really APIs so
                // there's no way for the translation to be saved with a block. To work around this, we copy the
                // translations to the editor translations.
                var strings = pxt.U.getLocalizedStrings();
                Object.keys(loc).forEach(function (l) {
                    if (pxt.U.startsWith(l, "{id:subcategory}") || pxt.U.startsWith(l, "{id:group}")) {
                        if (!strings[l]) {
                            strings[l] = loc[l];
                        }
                    }
                });
                pxt.U.setLocalizedStrings(strings);
                return Promise.resolve(loc);
            });
        };
        MainPackage.prototype.getTargetOptions = function () {
            var res = pxt.U.clone(pxt.appTarget.compile);
            pxt.U.assert(!!res);
            if (!res.utf8) {
                this.sortedDeps(true).forEach(function (p) {
                    if (p.config && p.config.utf8) {
                        pxt.debug("forcing utf8 mode: pkg=" + p.id);
                        res.utf8 = true;
                    }
                });
            }
            return res;
        };
        MainPackage.prototype.getJRes = function () {
            if (!this._jres) {
                this._jres = {};
                for (var _i = 0, _a = this.sortedDeps(); _i < _a.length; _i++) {
                    var pkg = _a[_i];
                    pkg.parseJRes(this._jres);
                }
                var palBuf = (pxt.appTarget.runtime && pxt.appTarget.runtime.palette ? pxt.appTarget.runtime.palette : ["#000000", "#ffffff"])
                    .map(function (s) { return ("000000" + parseInt(s.replace(/#/, ""), 16).toString(16)).slice(-6); })
                    .join("");
                this._jres["__palette"] = {
                    id: "__palette",
                    data: palBuf,
                    dataEncoding: "hex",
                    mimeType: "application/x-palette"
                };
            }
            return this._jres;
        };
        MainPackage.prototype.updateJRes = function () {
            if (this._jres) {
                this.parseJRes(this._jres);
            }
        };
        MainPackage.prototype.resolveBannedCategories = function () {
            var _this = this;
            if (this._resolvedBannedCategories !== undefined)
                return this._resolvedBannedCategories; // cache hit
            var bannedCategories = [];
            if (pxt.appTarget && pxt.appTarget.runtime
                && pxt.appTarget.runtime.bannedCategories
                && pxt.appTarget.runtime.bannedCategories.length) {
                bannedCategories = pxt.appTarget.runtime.bannedCategories.slice();
                // scan for unbanned categories
                Object.keys(this.deps)
                    .map(function (dep) { return _this.deps[dep]; })
                    .filter(function (dep) { return !!dep; })
                    .map(function (pk) { return pxt.Util.jsonTryParse(pk.readFile(pxt.CONFIG_NAME)); })
                    .filter(function (config) { return config && config.requiredCategories; })
                    .forEach(function (config) { return config.requiredCategories.forEach(function (rc) {
                    var i = bannedCategories.indexOf(rc);
                    if (i > -1)
                        bannedCategories.splice(i, 1);
                }); });
                this._resolvedBannedCategories = bannedCategories;
            }
            this._resolvedBannedCategories = bannedCategories;
            if (!this._resolvedBannedCategories.length)
                this._resolvedBannedCategories = null;
            return this._resolvedBannedCategories;
        };
        MainPackage.prototype.getCompileOptionsAsync = function (target) {
            if (target === void 0) { target = this.getTargetOptions(); }
            return __awaiter(this, void 0, void 0, function () {
                var opts, generateFile, shimsGenerated, fillExtInfoAsync, variants, ext, _i, variants_1, v, etarget, einfo, noFileEmbed, files, headerString, programText, buf, _a, _b, pkg, _c, _d, f, sn, functionOpts;
                var _this = this;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            opts = {
                                sourceFiles: [],
                                fileSystem: {},
                                target: target,
                                name: this.config ? this.config.name : ""
                            };
                            generateFile = function (fn, cont) {
                                if (_this.config.files.indexOf(fn) < 0)
                                    pxt.U.userError(lf("please add '{0}' to \"files\" in {1}", fn, pxt.CONFIG_NAME));
                                cont = "// Auto-generated. Do not edit.\n" + cont + "\n// Auto-generated. Do not edit. Really.\n";
                                if (_this.host().readFile(_this, fn, true) !== cont) {
                                    pxt.debug("updating " + fn + " (size=" + cont.length + ")...");
                                    _this.host().writeFile(_this, fn, cont, true);
                                }
                            };
                            shimsGenerated = false;
                            fillExtInfoAsync = function (variant) { return __awaiter(_this, void 0, void 0, function () {
                                var res, prevVariant, einfo, inf, _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            res = {
                                                extinfo: null,
                                                target: null
                                            };
                                            prevVariant = pxt.appTargetVariant;
                                            if (variant)
                                                pxt.setAppTargetVariant(variant, { temporary: true });
                                            _b.label = 1;
                                        case 1:
                                            _b.trys.push([1, , 5, 6]);
                                            einfo = pxt.cpp.getExtensionInfo(this);
                                            if (!shimsGenerated) {
                                                shimsGenerated = true;
                                                if (einfo.shimsDTS)
                                                    generateFile("shims.d.ts", einfo.shimsDTS);
                                                if (einfo.enumsDTS)
                                                    generateFile("enums.d.ts", einfo.enumsDTS);
                                            }
                                            if (!target.isNative) return [3 /*break*/, 3];
                                            return [4 /*yield*/, this.host().getHexInfoAsync(einfo)];
                                        case 2:
                                            _a = _b.sent();
                                            return [3 /*break*/, 4];
                                        case 3:
                                            _a = null;
                                            _b.label = 4;
                                        case 4:
                                            inf = _a;
                                            einfo = pxt.U.flatClone(einfo);
                                            if (!target.keepCppFiles) {
                                                delete einfo.compileData;
                                                delete einfo.generatedFiles;
                                                delete einfo.extensionFiles;
                                            }
                                            einfo.hexinfo = inf;
                                            res.extinfo = einfo;
                                            res.target = pxt.appTarget.compile;
                                            return [3 /*break*/, 6];
                                        case 5:
                                            if (variant)
                                                pxt.setAppTargetVariant(prevVariant, { temporary: true });
                                            return [7 /*endfinally*/];
                                        case 6: return [2 /*return*/, res];
                                    }
                                });
                            }); };
                            return [4 /*yield*/, this.loadAsync()];
                        case 1:
                            _e.sent();
                            opts.bannedCategories = this.resolveBannedCategories();
                            opts.target.preferredEditor = this.getPreferredEditor();
                            pxt.debug("building: " + this.sortedDeps().map(function (p) { return p.config.name; }).join(", "));
                            if (pxt.appTarget.multiVariants) {
                                // multiVariant available
                                if (pxt.appTargetVariant) {
                                    // set explicitly by the user
                                    variants = [pxt.appTargetVariant];
                                }
                                else if (pxt.appTarget.alwaysMultiVariant || pxt.appTarget.compile.switches.multiVariant) {
                                    // multivariants enabled
                                    variants = pxt.appTarget.multiVariants;
                                }
                                else {
                                    // not enbaled - default to first variant
                                    variants = [pxt.appTarget.multiVariants[0]];
                                }
                            }
                            else {
                                // no multi-variants, use empty variant name,
                                // so we don't mess with pxt.setAppTargetVariant() in fillExtInfoAsync()
                                variants = [null];
                            }
                            ext = null;
                            _i = 0, variants_1 = variants;
                            _e.label = 2;
                        case 2:
                            if (!(_i < variants_1.length)) return [3 /*break*/, 5];
                            v = variants_1[_i];
                            if (ext)
                                pxt.debug("building for " + v);
                            return [4 /*yield*/, fillExtInfoAsync(v)];
                        case 3:
                            etarget = _e.sent();
                            einfo = etarget.extinfo;
                            einfo.appVariant = v;
                            einfo.outputPrefix = variants.length == 1 || !v ? "" : v + "-";
                            if (ext) {
                                opts.otherMultiVariants.push(etarget);
                            }
                            else {
                                ext = einfo;
                                opts.otherMultiVariants = [];
                            }
                            _e.label = 4;
                        case 4:
                            _i++;
                            return [3 /*break*/, 2];
                        case 5:
                            opts.extinfo = ext;
                            noFileEmbed = pxt.appTarget.compile.shortPointers ||
                                pxt.appTarget.compile.nativeType == "vm" ||
                                this.config.binaryonly ||
                                !opts.target.isNative;
                            if (!!noFileEmbed) return [3 /*break*/, 8];
                            return [4 /*yield*/, this.filesToBePublishedAsync(true)];
                        case 6:
                            files = _e.sent();
                            headerString = JSON.stringify({
                                name: this.config.name,
                                comment: this.config.description,
                                status: "unpublished",
                                scriptId: this.installedVersion,
                                cloudId: pxt.CLOUD_ID + pxt.appTarget.id,
                                editor: this.getPreferredEditor(),
                                targetVersions: pxt.appTarget.versions
                            });
                            programText = JSON.stringify(files);
                            return [4 /*yield*/, pxt.lzmaCompressAsync(headerString + programText)];
                        case 7:
                            buf = _e.sent();
                            if (buf) {
                                opts.embedMeta = JSON.stringify({
                                    compression: "LZMA",
                                    headerSize: headerString.length,
                                    textSize: programText.length,
                                    name: this.config.name,
                                    eURL: pxt.appTarget.appTheme.embedUrl,
                                    eVER: pxt.appTarget.versions ? pxt.appTarget.versions.target : "",
                                    pxtTarget: pxt.appTarget.id,
                                });
                                opts.embedBlob = ts.pxtc.encodeBase64(pxt.U.uint8ArrayToString(buf));
                            }
                            _e.label = 8;
                        case 8:
                            for (_a = 0, _b = this.sortedDeps(); _a < _b.length; _a++) {
                                pkg = _b[_a];
                                for (_c = 0, _d = pkg.getFiles(); _c < _d.length; _c++) {
                                    f = _d[_c];
                                    if (/\.(ts|asm|py)$/.test(f)) {
                                        sn = f;
                                        if (pkg.level > 0)
                                            sn = "pxt_modules/" + pkg.id + "/" + f;
                                        opts.sourceFiles.push(sn);
                                        opts.fileSystem[sn] = pkg.readFile(f);
                                    }
                                }
                            }
                            opts.jres = this.getJRes();
                            functionOpts = pxt.appTarget.runtime && pxt.appTarget.runtime.functionsOptions;
                            opts.allowedArgumentTypes = functionOpts && functionOpts.extraFunctionEditorTypes && functionOpts.extraFunctionEditorTypes.map(function (info) { return info.typeName; }).concat("number", "boolean", "string");
                            return [2 /*return*/, opts];
                    }
                });
            });
        };
        MainPackage.prototype.prepareConfigToBePublished = function () {
            var _this = this;
            var cfg = pxt.U.clone(this.config);
            delete cfg.installedVersion; // cleanup old pxt.json files
            delete cfg.additionalFilePath;
            delete cfg.additionalFilePaths;
            if (!cfg.targetVersions)
                cfg.targetVersions = pxt.Util.clone(pxt.appTarget.versions);
            pxt.U.iterMap(cfg.dependencies, function (k, v) {
                if (!v || /^(file|workspace):/.test(v)) {
                    v = "*";
                    try {
                        var d = _this.resolveDep(k);
                        var gitjson = d.readGitJson();
                        if (gitjson && gitjson.repo) {
                            var parsed = pxt.github.parseRepoId(gitjson.repo);
                            parsed.tag = gitjson.commit.tag || gitjson.commit.sha;
                            v = pxt.github.stringifyRepo(parsed);
                        }
                    }
                    catch (e) { }
                    cfg.dependencies[k] = v;
                }
            });
            return cfg;
        };
        MainPackage.prototype.filesToBePublishedAsync = function (allowPrivate) {
            var _this = this;
            if (allowPrivate === void 0) { allowPrivate = false; }
            var files = {};
            return this.loadAsync()
                .then(function () {
                if (!allowPrivate && !_this.config.public)
                    pxt.U.userError('Only packages with "public":true can be published');
                var cfg = _this.prepareConfigToBePublished();
                files[pxt.CONFIG_NAME] = pxt.Package.stringifyConfig(cfg);
                for (var _i = 0, _a = _this.getFiles(); _i < _a.length; _i++) {
                    var f = _a[_i];
                    // already stored
                    if (f == pxt.CONFIG_NAME)
                        continue;
                    var str = _this.readFile(f);
                    if (str == null)
                        pxt.U.userError("referenced file missing: " + f);
                    files[f] = str;
                }
                return pxt.U.sortObjectFields(files);
            });
        };
        MainPackage.prototype.saveToJsonAsync = function () {
            var _this = this;
            return this.filesToBePublishedAsync(true)
                .then(function (files) {
                var project = {
                    meta: {
                        cloudId: pxt.CLOUD_ID + pxt.appTarget.id,
                        targetVersions: pxt.appTarget.versions,
                        editor: _this.getPreferredEditor(),
                        name: _this.config.name
                    },
                    source: JSON.stringify(files, null, 2)
                };
                return project;
            });
        };
        MainPackage.prototype.compressToFileAsync = function () {
            return this.saveToJsonAsync()
                .then(function (project) { return pxt.lzmaCompressAsync(JSON.stringify(project, null, 2)); });
        };
        MainPackage.prototype.computePartDefinitions = function (parts) {
            if (!parts || !parts.length)
                return {};
            var res = {};
            this.sortedDeps().forEach(function (d) {
                var pjson = d.readFile("pxtparts.json");
                if (pjson) {
                    try {
                        var p_1 = JSON.parse(pjson);
                        Object.keys(p_1).forEach(function (k) {
                            if (parts.indexOf(k) >= 0) {
                                var part = res[k] = p_1[k];
                                if (typeof part.visual.image === "string" && /\.svg$/i.test(part.visual.image)) {
                                    var f = d.readFile(part.visual.image);
                                    if (!f)
                                        pxt.reportError("parts", "invalid part definition", { "error": "missing visual " + part.visual.image });
                                    part.visual.image = "data:image/svg+xml," + encodeURIComponent(f);
                                }
                            }
                        });
                    }
                    catch (e) {
                        pxt.reportError("parts", "invalid pxtparts.json file");
                    }
                }
            });
            return res;
        };
        return MainPackage;
    }(Package));
    pxt.MainPackage = MainPackage;
    function inflateJRes(js, allres) {
        if (allres === void 0) { allres = {}; }
        var base = js["*"] || {};
        for (var _i = 0, _a = Object.keys(js); _i < _a.length; _i++) {
            var k = _a[_i];
            if (k == "*")
                continue;
            var v = js[k];
            if (typeof v == "string") {
                // short form
                v = { data: v };
            }
            var ns = v.namespace || base.namespace || "";
            if (ns)
                ns += ".";
            var id = v.id || ns + k;
            var icon = v.icon;
            var mimeType = v.mimeType || base.mimeType;
            var dataEncoding = v.dataEncoding || base.dataEncoding || "base64";
            if (!icon && dataEncoding == "base64" && (mimeType == "image/png" || mimeType == "image/jpeg")) {
                icon = "data:" + mimeType + ";base64," + v.data;
            }
            allres[id] = {
                id: id,
                data: v.data,
                dataEncoding: dataEncoding,
                icon: icon,
                namespace: ns,
                mimeType: mimeType,
                tilemapTile: v.tilemapTile,
                displayName: v.displayName,
                tileset: v.tileset
            };
        }
        return allres;
    }
    pxt.inflateJRes = inflateJRes;
    function allPkgFiles(cfg) {
        return [pxt.CONFIG_NAME].concat(cfg.files || []).concat(cfg.testFiles || []);
    }
    pxt.allPkgFiles = allPkgFiles;
    function isPkgBeta(cfg) {
        return cfg && /\bbeta\b/.test(cfg.description);
    }
    pxt.isPkgBeta = isPkgBeta;
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var packetio;
    (function (packetio) {
        var wrapper;
        var initPromise;
        var onConnectionChangedHandler = function () { };
        var onSerialHandler;
        /**
         * A DAP wrapper is active
         */
        function isActive() {
            return !!wrapper;
        }
        packetio.isActive = isActive;
        /**
         * The DAP wrapper is active and the device is connected
         */
        function isConnected() {
            return !!wrapper && wrapper.io.isConnected();
        }
        packetio.isConnected = isConnected;
        function isConnecting() {
            return !!wrapper && wrapper.io.isConnecting();
        }
        packetio.isConnecting = isConnecting;
        function icon() {
            return !!wrapper && (wrapper.icon || "usb");
        }
        packetio.icon = icon;
        var disconnectPromise;
        function disconnectAsync() {
            if (disconnectPromise)
                return disconnectPromise;
            var p = Promise.resolve();
            if (wrapper) {
                pxt.debug('packetio: disconnect');
                var w_1 = wrapper;
                p = p.then(function () { return w_1.disconnectAsync(); })
                    .then(function () { return w_1.io.disposeAsync(); })
                    .catch(function (e) {
                    // swallow execeptions
                    pxt.reportException(e);
                })
                    .finally(function () {
                    initPromise = undefined; // dubious
                    wrapper = undefined;
                    disconnectPromise = undefined;
                });
                if (onConnectionChangedHandler)
                    p = p.then(function () { return onConnectionChangedHandler(); });
                disconnectPromise = p;
            }
            return p;
        }
        packetio.disconnectAsync = disconnectAsync;
        function configureEvents(onConnectionChanged, onSerial) {
            onConnectionChangedHandler = onConnectionChanged;
            onSerialHandler = onSerial;
            if (wrapper) {
                wrapper.io.onConnectionChanged = onConnectionChangedHandler;
                wrapper.onSerial = onSerialHandler;
            }
        }
        packetio.configureEvents = configureEvents;
        function wrapperAsync() {
            if (wrapper)
                return Promise.resolve(wrapper);
            if (!packetio.mkPacketIOAsync) {
                pxt.debug("packetio: not defined, skipping");
                return Promise.resolve(undefined);
            }
            pxt.debug("packetio: new wrapper");
            return packetio.mkPacketIOAsync()
                .then(function (io) {
                io.onConnectionChanged = onConnectionChangedHandler;
                wrapper = packetio.mkPacketIOWrapper(io);
                if (onSerialHandler)
                    wrapper.onSerial = onSerialHandler;
                // trigger ui update
                if (onConnectionChangedHandler)
                    onConnectionChangedHandler();
                return wrapper;
            });
        }
        function initAsync(force) {
            if (force === void 0) { force = false; }
            pxt.debug("packetio: init " + (force ? "(force)" : ""));
            if (!initPromise) {
                var p = Promise.resolve();
                if (force)
                    p = p.then(function () { return disconnectAsync(); });
                initPromise = p.then(function () { return wrapperAsync(); })
                    .finally(function () { initPromise = undefined; });
            }
            return initPromise;
        }
        packetio.initAsync = initAsync;
    })(packetio = pxt.packetio || (pxt.packetio = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var patching;
    (function (patching) {
        function computePatches(version, kind) {
            var patches = pxt.appTarget.compile ? pxt.appTarget.compile.patches : undefined;
            if (!patches)
                return undefined;
            var v = pxt.semver.tryParse(version || "0.0.0") || pxt.semver.tryParse("0.0.0");
            var r = [];
            Object.keys(patches)
                .filter(function (rng) { return pxt.semver.inRange(rng, v); })
                .forEach(function (rng) { return r = r.concat(patches[rng]); });
            if (kind)
                r = r.filter(function (p) { return p.type == kind; });
            return r.length ? r : undefined;
        }
        patching.computePatches = computePatches;
        function upgradePackageReference(pkgTargetVersion, pkg, val) {
            if (val != "*")
                return pkg;
            var upgrades = pxt.patching.computePatches(pkgTargetVersion, "package");
            var newPackage = pkg;
            if (upgrades) {
                upgrades.forEach(function (rule) {
                    Object.keys(rule.map).forEach(function (match) {
                        if (newPackage == match) {
                            newPackage = rule.map[match];
                        }
                    });
                });
            }
            return newPackage;
        }
        patching.upgradePackageReference = upgradePackageReference;
        function patchJavaScript(pkgTargetVersion, fileContents) {
            var upgrades = pxt.patching.computePatches(pkgTargetVersion);
            var updatedContents = fileContents;
            if (upgrades) {
                upgrades.filter(function (u) { return u.type === "api"; }).forEach(function (rule) {
                    Object.keys(rule.map).forEach(function (match) {
                        var regex = new RegExp(match, 'g');
                        updatedContents = updatedContents.replace(regex, rule.map[match]);
                    });
                });
                upgrades.filter(function (u) { return u.type === "userenum"; }).forEach(function (rule) {
                    Object.keys(rule.map).forEach(function (enumName) {
                        var declRegex = new RegExp("enum\\s+" + enumName + "\\s*{", 'gm');
                        updatedContents = updatedContents.replace(declRegex, "enum " + rule.map[enumName] + " {");
                        var usageRegex = new RegExp("(^|[^_a-zA-Z0-9])" + enumName + "(\\s*\\.)", 'g');
                        updatedContents = updatedContents.replace(usageRegex, "$1" + rule.map[enumName] + "$2");
                    });
                });
            }
            return updatedContents;
        }
        patching.patchJavaScript = patchJavaScript;
    })(patching = pxt.patching || (pxt.patching = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var react;
    (function (react) {
    })(react = pxt.react || (pxt.react = {}));
})(pxt || (pxt = {}));
// see http://semver.org/
var pxt;
(function (pxt) {
    var semver;
    (function (semver) {
        function cmp(a, b) {
            if (!a)
                if (!b)
                    return 0;
                else
                    return 1;
            else if (!b)
                return -1;
            else {
                var d = a.major - b.major || a.minor - b.minor || a.patch - b.patch;
                if (d)
                    return d;
                if (a.pre.length == 0 && b.pre.length > 0)
                    return 1;
                if (a.pre.length > 0 && b.pre.length == 0)
                    return -1;
                for (var i = 0; i < a.pre.length + 1; ++i) {
                    var aa = a.pre[i];
                    var bb = b.pre[i];
                    if (!aa)
                        if (!bb)
                            return 0;
                        else
                            return -1;
                    else if (!bb)
                        return 1;
                    else if (/^\d+$/.test(aa))
                        if (/^\d+$/.test(bb)) {
                            d = parseInt(aa) - parseInt(bb);
                            if (d)
                                return d;
                        }
                        else
                            return -1;
                    else if (/^\d+$/.test(bb))
                        return 1;
                    else {
                        d = pxt.U.strcmp(aa, bb);
                        if (d)
                            return d;
                    }
                }
                return 0;
            }
        }
        semver.cmp = cmp;
        function parse(v, defaultVersion) {
            var r = tryParse(v) || tryParse(defaultVersion);
            if (!r)
                pxt.U.userError(pxt.U.lf("'{0}' doesn't look like a semantic version number", v));
            return r;
        }
        semver.parse = parse;
        function tryParse(v) {
            if (!v)
                return null;
            if ("*" === v) {
                return {
                    major: Number.MAX_SAFE_INTEGER,
                    minor: Number.MAX_SAFE_INTEGER,
                    patch: Number.MAX_SAFE_INTEGER,
                    pre: [],
                    build: []
                };
            }
            if (/^v\d/i.test(v))
                v = v.slice(1);
            var m = /^(\d+)\.(\d+)\.(\d+)(-([0-9a-zA-Z\-\.]+))?(\+([0-9a-zA-Z\-\.]+))?$/.exec(v);
            if (m)
                return {
                    major: parseInt(m[1]),
                    minor: parseInt(m[2]),
                    patch: parseInt(m[3]),
                    pre: m[5] ? m[5].split(".") : [],
                    build: m[7] ? m[7].split(".") : []
                };
            return null;
        }
        semver.tryParse = tryParse;
        function normalize(v) {
            return stringify(parse(v));
        }
        semver.normalize = normalize;
        function stringify(v) {
            var r = v.major + "." + v.minor + "." + v.patch;
            if (v.pre.length)
                r += "-" + v.pre.join(".");
            if (v.build.length)
                r += "+" + v.build.join(".");
            return r;
        }
        semver.stringify = stringify;
        function majorCmp(a, b) {
            var aa = tryParse(a);
            var bb = tryParse(b);
            return aa.major - bb.major;
        }
        semver.majorCmp = majorCmp;
        function strcmp(a, b) {
            var aa = tryParse(a);
            var bb = tryParse(b);
            if (!aa && !bb)
                return pxt.U.strcmp(a, b);
            else
                return cmp(aa, bb);
        }
        semver.strcmp = strcmp;
        function inRange(rng, v) {
            var rngs = rng.split(' - ');
            if (rngs.length != 2)
                return false;
            var minInclusive = tryParse(rngs[0]);
            var maxExclusive = tryParse(rngs[1]);
            if (!minInclusive || !maxExclusive)
                return false;
            if (!v)
                return true;
            var lwr = cmp(minInclusive, v);
            var hr = cmp(v, maxExclusive);
            return lwr <= 0 && hr < 0;
        }
        semver.inRange = inRange;
        /**
         * Filters and sort tags from latest to oldest (semver wize)
         * @param tags
         */
        function sortLatestTags(tags) {
            var v = tags.filter(function (tag) { return !!semver.tryParse(tag); });
            v.sort(strcmp);
            v.reverse();
            return v;
        }
        semver.sortLatestTags = sortLatestTags;
        function test() {
            console.log("Test semver");
            var d = [
                "0.9.0",
                "1.0.0-0.3.7",
                "1.0.0-alpha", "1.0.0-alpha.1",
                "1.0.0-alpha.beta", "1.0.0-beta",
                "1.0.0-beta.2", "1.0.0-beta.11",
                "1.0.0-rc.1",
                "1.0.0-x.7.z.92",
                "1.0.0",
                "1.0.1",
                "1.9.0", "1.10.0", "1.11.0"
            ];
            for (var i = 0; i < d.length; ++i) {
                var p = parse(d[i]);
                console.log(d[i], p);
                pxt.U.assert(stringify(p) == d[i]);
                for (var j = 0; j < d.length; ++j) {
                    var x = cmp(p, parse(d[j]));
                    console.log(d[i], d[j], x);
                    if (i < j)
                        pxt.U.assert(x < 0);
                    else if (i > j)
                        pxt.U.assert(x > 0);
                    else
                        pxt.U.assert(x == 0);
                }
            }
            var v = tryParse("1.2.3");
            pxt.U.assert(inRange("0.1.2 - 2.2.3", v));
            pxt.U.assert(inRange("1.2.3 - 2.2.3", v));
            pxt.U.assert(!inRange("0.0.0 - 1.2.3", v));
            pxt.U.assert(!inRange("1.2.4 - 4.2.3", v));
            pxt.U.assert(!inRange("0.0.0 - 0.0.1", v));
        }
        semver.test = test;
    })(semver = pxt.semver || (pxt.semver = {}));
})(pxt || (pxt = {}));
/// <reference path="../localtypings/pxtarget.d.ts"/>
/// <reference path="../localtypings/pxtpackage.d.ts"/>
var ts;
(function (ts) {
    var pxtc;
    (function (pxtc) {
        pxtc.assert = pxtc.Util.assert;
        pxtc.oops = pxtc.Util.oops;
        pxtc.U = pxtc.Util;
        pxtc.ON_START_TYPE = "pxt-on-start";
        pxtc.ON_START_COMMENT = "on start"; // TODO: Localize? (adding lf doesn't work because this is run before translations are downloaded)
        pxtc.HANDLER_COMMENT = "code goes here"; // TODO: Localize? (adding lf doesn't work because this is run before translations are downloaded)
        pxtc.TS_STATEMENT_TYPE = "typescript_statement";
        pxtc.TS_DEBUGGER_TYPE = "debugger_keyword";
        pxtc.TS_BREAK_TYPE = "break_keyword";
        pxtc.TS_CONTINUE_TYPE = "continue_keyword";
        pxtc.TS_OUTPUT_TYPE = "typescript_expression";
        pxtc.TS_RETURN_STATEMENT_TYPE = "function_return";
        pxtc.PAUSE_UNTIL_TYPE = "pxt_pause_until";
        pxtc.COLLAPSED_BLOCK = "pxt_collapsed_block";
        pxtc.FUNCTION_DEFINITION_TYPE = "function_definition";
        pxtc.BINARY_JS = "binary.js";
        pxtc.BINARY_ASM = "binary.asm";
        pxtc.BINARY_HEX = "binary.hex";
        pxtc.BINARY_UF2 = "binary.uf2";
        pxtc.BINARY_ELF = "binary.elf";
        pxtc.BINARY_PXT64 = "binary.pxt64";
        pxtc.NATIVE_TYPE_THUMB = "thumb";
        pxtc.NATIVE_TYPE_VM = "vm";
        function BuildSourceMapHelpers(sourceMap, tsFile, pyFile) {
            // Notes:
            //  lines are 0-indexed (Monaco they are 1-indexed)
            //  columns are 0-indexed (0th is first character)
            //  positions are 0-indexed, as if getting the index of a character in a file as a giant string (incl. new lines)
            //  line summation is the length of that line plus its newline plus all the lines before it; aka the position of the next line's first character
            //  end positions are zero-index but not inclusive, same behavior as substring
            var makeLineColPosConverters = function (file) {
                var lines = file.split("\n");
                var lineLengths = lines
                    .map(function (l) { return l.length; });
                var lineLenSums = lineLengths
                    .reduce(function (_a, n) {
                    var lens = _a.lens, sum = _a.sum;
                    return ({ lens: __spreadArrays(lens, [sum + n + 1]), sum: sum + n + 1 });
                }, { lens: [], sum: 0 })
                    .lens;
                var lineColToPos = function (line, col) {
                    var pos = (lineLenSums[line - 1] || 0) + col;
                    return pos;
                };
                var posToLineCol = function (pos) {
                    var line = lineLenSums
                        .reduce(function (curr, nextLen, i) { return pos < nextLen ? curr : i + 1; }, 0);
                    var col = lineLengths[line] - (lineLenSums[line] - pos) + 1;
                    return [line, col];
                };
                return { posToLineCol: posToLineCol, lineColToPos: lineColToPos };
            };
            var lcp = {
                ts: makeLineColPosConverters(tsFile),
                py: makeLineColPosConverters(pyFile)
            };
            var intLen = function (i) { return i.endPos - i.startPos; };
            var allOverlaps = function (i, lang) {
                var startPos = i.startPos, endPos = i.endPos;
                return sourceMap
                    .filter(function (i) {
                    // O(n), can we and should we do better?
                    return i[lang].startPos <= startPos && endPos <= i[lang].endPos;
                });
            };
            var smallestOverlap = function (i, lang) {
                var overlaps = allOverlaps(i, lang);
                return overlaps.reduce(function (p, n) { return intLen(n[lang]) < intLen(p[lang]) ? n : p; }, overlaps[0]);
            };
            var os = {
                ts: {
                    allOverlaps: function (i) { return allOverlaps(i, "ts"); },
                    smallestOverlap: function (i) { return smallestOverlap(i, "ts"); },
                },
                py: {
                    allOverlaps: function (i) { return allOverlaps(i, "py"); },
                    smallestOverlap: function (i) { return smallestOverlap(i, "py"); },
                }
            };
            var makeLocToLoc = function (inLang, outLang) {
                var inLocToPosAndLen = function (inLoc) { return [lcp[inLang].lineColToPos(inLoc.line, inLoc.column), inLoc.length]; };
                var locToLoc = function (inLoc) {
                    var _a = inLocToPosAndLen(inLoc), inStartPos = _a[0], inLen = _a[1];
                    var inEndPos = inStartPos + inLen;
                    var bestOverlap = smallestOverlap({ startPos: inStartPos, endPos: inEndPos }, inLang);
                    if (!bestOverlap)
                        return undefined;
                    var _b = lcp[outLang].posToLineCol(bestOverlap[outLang].startPos), outStartLine = _b[0], outStartCol = _b[1];
                    var outLoc = {
                        fileName: "main." + outLang,
                        start: bestOverlap[outLang].startPos,
                        length: intLen(bestOverlap[outLang]),
                        line: outStartLine,
                        column: outStartCol
                    };
                    return outLoc;
                };
                return locToLoc;
            };
            var tsLocToPyLoc = makeLocToLoc("ts", "py");
            var pyLocToTsLoc = makeLocToLoc("py", "ts");
            var tsGetText = function (i) { return tsFile.substring(i.startPos, i.endPos); };
            var pyGetText = function (i) { return pyFile.substring(i.startPos, i.endPos); };
            return {
                ts: __assign(__assign(__assign({}, lcp.ts), os.ts), { locToLoc: tsLocToPyLoc, getText: tsGetText }),
                py: __assign(__assign(__assign({}, lcp.py), os.py), { locToLoc: pyLocToTsLoc, getText: pyGetText }),
            };
        }
        pxtc.BuildSourceMapHelpers = BuildSourceMapHelpers;
        function computeUsedParts(resp, filter) {
            if (!resp.usedSymbols || !pxt.appTarget.simulator || !pxt.appTarget.simulator.parts)
                return [];
            var parts = [];
            Object.keys(resp.usedSymbols).forEach(function (symbol) {
                var info = resp.usedSymbols[symbol];
                if (info && info.attributes.parts) {
                    var partsRaw = info.attributes.parts;
                    if (partsRaw) {
                        var partsSplit = partsRaw.split(/[ ,]+/);
                        partsSplit.forEach(function (p) {
                            if (0 < p.length && parts.indexOf(p) < 0) {
                                parts.push(p);
                            }
                        });
                    }
                }
            });
            if (filter) {
                var builtinParts_1 = pxt.appTarget.simulator.boardDefinition.onboardComponents;
                if (builtinParts_1) {
                    if (filter === "ignorebuiltin") {
                        parts = parts.filter(function (p) { return builtinParts_1.indexOf(p) === -1; });
                    }
                    else if (filter === "onlybuiltin") {
                        parts = parts.filter(function (p) { return builtinParts_1.indexOf(p) >= 0; });
                    }
                }
            }
            //sort parts (so breadboarding layout is stable w.r.t. code ordering)
            parts.sort();
            parts = parts.reverse(); //not strictly necessary, but it's a little
            // nicer for demos to have "ledmatrix"
            // before "buttonpair"
            return parts;
        }
        pxtc.computeUsedParts = computeUsedParts;
        /**
         * Unlocalized category name for a symbol
         */
        function blocksCategory(si) {
            var n = !si ? undefined : (si.attributes.blockNamespace || si.namespace);
            return n ? pxtc.Util.capitalize(n.split('.')[0]) : undefined;
        }
        pxtc.blocksCategory = blocksCategory;
        function getBlocksInfo(info, categoryFilters) {
            var blocks = [];
            var combinedSet = {};
            var combinedGet = {};
            var combinedChange = {};
            var enumsByName = {};
            var kindsByName = {};
            function addCombined(rtp, s) {
                var isGet = rtp == "get";
                var isSet = rtp == "set";
                var isNumberType = s.retType == "number";
                var m = isGet ? combinedGet : (isSet ? combinedSet : combinedChange);
                var mkey = s.namespace + "." + s.retType;
                var ex = pxtc.U.lookup(m, mkey);
                if (!ex) {
                    var tp = "@" + rtp + "@";
                    var paramNameShadow = void 0, paramValueShadow = void 0;
                    if (s.attributes.blockCombineShadow) {
                        // allowable %blockCombineShadow strings:-
                        //   '{name shadow},' or '{value shadow}' or ',{value shadow}' or '{name shadow},{value shadow}'
                        var attribute = s.attributes.blockCombineShadow;
                        var match = attribute.match(/^([^,.]*),?([^,.]*)$/);
                        if (match && match.length == 3) {
                            paramNameShadow = match[1].trim();
                            paramValueShadow = match[2].trim();
                            if (paramValueShadow.length == 0 && !pxtc.Util.endsWith(attribute, ",")) {
                                paramValueShadow = paramNameShadow;
                                paramNameShadow = "";
                            }
                        }
                    }
                    var varName = s.attributes.blockSetVariable || s.namespace.toLocaleLowerCase();
                    var paramName = varName + "=" + (paramNameShadow || "");
                    var paramValue = "value=" + (paramValueShadow || "");
                    ex = m[mkey] = {
                        attributes: {
                            blockId: (isNumberType ? s.namespace : mkey) + "_blockCombine_" + rtp,
                            callingConvention: 0 /* Plain */,
                            group: s.attributes.group,
                            paramDefl: {},
                            jsDoc: isGet
                                ? pxtc.U.lf("Read value of a property on an object")
                                : pxtc.U.lf("Update value of property on an object")
                        },
                        name: tp,
                        namespace: s.namespace,
                        fileName: s.fileName,
                        qName: mkey + "." + tp,
                        pkg: s.pkg,
                        kind: 2 /* Property */,
                        parameters: [
                            {
                                name: "property",
                                description: isGet ?
                                    pxtc.U.lf("the name of the property to read") :
                                    pxtc.U.lf("the name of the property to change"),
                                isEnum: true,
                                type: "@combined@"
                            },
                            {
                                name: "value",
                                description: isSet ?
                                    pxtc.U.lf("the new value of the property") :
                                    pxtc.U.lf("the amount by which to change the property"),
                                type: s.retType,
                            }
                        ].slice(0, isGet ? 1 : 2),
                        retType: isGet ? s.retType : "void",
                        combinedProperties: []
                    };
                    ex.attributes.block =
                        isGet ? pxtc.U.lf("%{0} %property", paramName) :
                            isSet ? pxtc.U.lf("set %{0} %property to %{1}", paramName, paramValue) :
                                pxtc.U.lf("change %{0} %property by %{1}", paramName, paramValue);
                    updateBlockDef(ex.attributes);
                    blocks.push(ex);
                }
                ex.combinedProperties.push(s.qName);
            }
            for (var _i = 0, _a = pxtc.Util.values(info.byQName); _i < _a.length; _i++) {
                var s = _a[_i];
                if (s.attributes.shim === "ENUM_GET" && s.attributes.enumName && s.attributes.blockId) {
                    var didFail = false;
                    if (enumsByName[s.attributes.enumName]) {
                        console.warn("Enum block " + s.attributes.blockId + " trying to overwrite enum " + s.attributes.enumName);
                        didFail = true;
                    }
                    if (!s.attributes.enumMemberName) {
                        console.warn("Enum block " + s.attributes.blockId + " should specify enumMemberName");
                        didFail = true;
                    }
                    if (!s.attributes.enumPromptHint) {
                        console.warn("Enum block " + s.attributes.blockId + " should specify enumPromptHint");
                        didFail = true;
                    }
                    if (!s.attributes.enumInitialMembers || !s.attributes.enumInitialMembers.length) {
                        console.warn("Enum block " + s.attributes.blockId + " should specify enumInitialMembers");
                        didFail = true;
                    }
                    if (didFail) {
                        continue;
                    }
                    var firstValue = parseInt(s.attributes.enumStartValue);
                    enumsByName[s.attributes.enumName] = {
                        blockId: s.attributes.blockId,
                        name: s.attributes.enumName,
                        memberName: s.attributes.enumMemberName,
                        firstValue: isNaN(firstValue) ? undefined : firstValue,
                        isBitMask: s.attributes.enumIsBitMask,
                        isHash: s.attributes.enumIsHash,
                        initialMembers: s.attributes.enumInitialMembers,
                        promptHint: s.attributes.enumPromptHint
                    };
                }
                if (s.attributes.shim === "KIND_GET" && s.attributes.blockId) {
                    var kindNamespace = s.attributes.kindNamespace || s.attributes.blockNamespace || s.namespace;
                    if (kindsByName[kindNamespace]) {
                        console.warn("More than one block defined for kind " + kindNamespace);
                        continue;
                    }
                    var initialMembers = [];
                    if (info.byQName[kindNamespace]) {
                        for (var _b = 0, _c = pxtc.Util.values(info.byQName); _b < _c.length; _b++) {
                            var api = _c[_b];
                            if (api.namespace === kindNamespace && api.attributes.isKind) {
                                initialMembers.push(api.name);
                            }
                        }
                    }
                    kindsByName[kindNamespace] = {
                        blockId: s.attributes.blockId,
                        name: kindNamespace,
                        memberName: s.attributes.kindMemberName || kindNamespace,
                        initialMembers: initialMembers,
                        promptHint: s.attributes.enumPromptHint || pxtc.Util.lf("Create a new kind..."),
                        createFunctionName: s.attributes.kindCreateFunction || "create"
                    };
                }
                if (s.attributes.blockCombine) {
                    if (!/@set/.test(s.name)) {
                        addCombined("get", s);
                    }
                    if (!s.isReadOnly) {
                        if (s.retType == 'number') {
                            addCombined("change", s);
                        }
                        addCombined("set", s);
                    }
                }
                else if (!!s.attributes.block
                    && !s.attributes.fixedInstance
                    && s.kind != 7 /* EnumMember */
                    && s.kind != 5 /* Module */
                    && s.kind != 9 /* Interface */
                    && s.kind != 8 /* Class */) {
                    if (!s.attributes.blockId)
                        s.attributes.blockId = s.qName.replace(/\./g, "_");
                    if (s.attributes.block == "true") {
                        var b = pxtc.U.uncapitalize(s.name);
                        if (s.kind == 1 /* Method */ || s.kind == 2 /* Property */) {
                            b += " %" + s.namespace.toLowerCase();
                        }
                        for (var _d = 0, _e = s.parameters || []; _d < _e.length; _d++) {
                            var p = _e[_d];
                            b += " %" + p.name;
                        }
                        s.attributes.block = b;
                        updateBlockDef(s.attributes);
                    }
                    blocks.push(s);
                }
            }
            // derive common block properties from namespace
            for (var _f = 0, blocks_1 = blocks; _f < blocks_1.length; _f++) {
                var b = blocks_1[_f];
                var parent_2 = pxtc.U.lookup(info.byQName, b.namespace);
                if (!parent_2)
                    continue;
                var pattr = parent_2.attributes;
                var battr = b.attributes;
                for (var _g = 0, _h = ["blockNamespace", "color", "blockGap"]; _g < _h.length; _g++) {
                    var n = _h[_g];
                    if (battr[n] === undefined && pattr[n])
                        battr[n] = pattr[n];
                }
            }
            if (categoryFilters)
                filterCategories(categoryFilters);
            return {
                apis: info,
                blocks: blocks,
                blocksById: pxt.Util.toDictionary(blocks, function (b) { return b.attributes.blockId; }),
                enumsByName: enumsByName,
                kindsByName: kindsByName
            };
            function filterCategories(banned) {
                if (banned.length) {
                    blocks = blocks.filter(function (b) {
                        var ns = (b.attributes.blockNamespace || b.namespace).split('.')[0];
                        return banned.indexOf(ns) === -1;
                    });
                }
            }
        }
        pxtc.getBlocksInfo = getBlocksInfo;
        pxtc.apiLocalizationStrings = {};
        function localizeApisAsync(apis, mainPkg) {
            var lang = pxtc.Util.userLanguage();
            if (lang == "en")
                return Promise.resolve(cleanLocalizations(apis));
            var langLower = lang.toLowerCase();
            var attrJsLocsKey = langLower + "|jsdoc";
            var attrBlockLocsKey = langLower + "|block";
            return mainPkg.localizationStringsAsync(lang)
                .then(function (loc) { return Promise.all(pxtc.Util.values(apis.byQName).map(function (fn) {
                if (pxtc.apiLocalizationStrings)
                    pxtc.Util.jsonMergeFrom(loc, pxtc.apiLocalizationStrings);
                var attrLocs = fn.attributes.locs || {};
                var locJsDoc = loc[fn.qName] || attrLocs[attrJsLocsKey];
                if (locJsDoc) {
                    fn.attributes._untranslatedJsDoc = fn.attributes.jsDoc;
                    fn.attributes.jsDoc = locJsDoc;
                    if (fn.parameters)
                        fn.parameters.forEach(function (pi) { return pi.description = loc[fn.qName + "|param|" + pi.name] || attrLocs[langLower + "|param|" + pi.name] || pi.description; });
                }
                var nsDoc = loc['{id:category}' + pxtc.Util.capitalize(fn.qName)];
                var locBlock = loc[fn.qName + "|block"] || attrLocs[attrBlockLocsKey];
                if (!locBlock && fn.attributes.useLoc) {
                    var otherFn = apis.byQName[fn.attributes.useLoc];
                    if (otherFn) {
                        var otherTranslation = loc[otherFn.qName + "|block"];
                        var isSameBlockDef = fn.attributes.block === (otherFn.attributes._untranslatedBlock || otherFn.attributes.block);
                        if (isSameBlockDef && !!otherTranslation) {
                            locBlock = otherTranslation;
                        }
                    }
                }
                var p = Promise.resolve();
                if (locBlock && pxt.Util.isTranslationMode()) {
                    // in translation mode, crowdin sends translation identifiers which break the block parsing
                    // push identifier in DOM so that crowdin sends back the actual translation
                    fn.attributes.translationId = locBlock;
                    p = p.then(function () { return pxt.crowdin.inContextLoadAsync(locBlock); })
                        .then(function (r) { locBlock = r; });
                }
                return p.then(function () {
                    if (nsDoc) {
                        // Check for "friendly namespace"
                        if (fn.attributes.block) {
                            fn.attributes.block = locBlock || fn.attributes.block;
                        }
                        else {
                            fn.attributes.block = nsDoc;
                        }
                        updateBlockDef(fn.attributes);
                    }
                    else if (fn.attributes.block && locBlock) {
                        var ps = pxt.blocks.compileInfo(fn);
                        var oldBlock = fn.attributes.block;
                        fn.attributes.block = pxt.blocks.normalizeBlock(locBlock, function (err) {
                            pxt.tickEvent("loc.normalized", {
                                block: fn.attributes.block,
                                lang: lang,
                                error: err,
                            });
                        });
                        fn.attributes._untranslatedBlock = oldBlock;
                        if (oldBlock != fn.attributes.block) {
                            updateBlockDef(fn.attributes);
                            var locps = pxt.blocks.compileInfo(fn);
                            if (!hasEquivalentParameters(ps, locps)) {
                                pxt.log("block has non matching arguments: " + oldBlock + " vs " + fn.attributes.block);
                                pxt.reportError("loc.errors", "invalid translations", {
                                    block: fn.attributes.blockId,
                                    lang: lang,
                                });
                                fn.attributes.block = oldBlock;
                                updateBlockDef(fn.attributes);
                            }
                        }
                    }
                    else {
                        updateBlockDef(fn.attributes);
                    }
                });
            })); })
                .then(function () { return cleanLocalizations(apis); });
        }
        pxtc.localizeApisAsync = localizeApisAsync;
        function cleanLocalizations(apis) {
            pxtc.Util.values(apis.byQName)
                .filter(function (fb) { return fb.attributes.block && /^{[^:]+:[^}]+}/.test(fb.attributes.block); })
                .forEach(function (fn) { fn.attributes.block = fn.attributes.block.replace(/^{[^:]+:[^}]+}/, ''); });
            return apis;
        }
        function hasEquivalentParameters(a, b) {
            if (a.parameters.length != b.parameters.length) {
                pxt.debug("Localized block has extra or missing parameters");
                return false;
            }
            for (var _i = 0, _a = a.parameters; _i < _a.length; _i++) {
                var aParam = _a[_i];
                var bParam = b.actualNameToParam[aParam.actualName];
                if (!bParam
                    || aParam.type != bParam.type
                    || aParam.shadowBlockId != bParam.shadowBlockId) {
                    pxt.debug("Parameter " + aParam.actualName + " type or shadow block does not match after localization");
                    return false;
                }
            }
            return true;
        }
        function emptyExtInfo() {
            var cs = pxt.appTarget.compileService;
            if (!cs)
                cs = {};
            var pio = !!cs.platformioIni;
            var docker = cs.buildEngine == "dockermake" || cs.buildEngine == "dockercross";
            var r = {
                functions: [],
                generatedFiles: {},
                extensionFiles: {},
                sha: "",
                compileData: "",
                shimsDTS: "",
                enumsDTS: "",
                onlyPublic: true
            };
            if (pio)
                r.platformio = { dependencies: {} };
            else if (docker)
                r.npmDependencies = {};
            else
                r.yotta = { config: {}, dependencies: {} };
            return r;
        }
        pxtc.emptyExtInfo = emptyExtInfo;
        var numberAttributes = ["weight", "imageLiteral", "topblockWeight"];
        var booleanAttributes = [
            "advanced",
            "handlerStatement",
            "afterOnStart",
            "optionalVariableArgs",
            "blockHidden",
            "constantShim",
            "blockCombine",
            "enumIsBitMask",
            "enumIsHash",
            "decompileIndirectFixedInstances",
            "topblock",
            "callInDebugger",
            "duplicateShadowOnDrag",
            "argsNullable"
        ];
        function parseCommentString(cmt) {
            var res = {
                paramDefl: {},
                callingConvention: 0 /* Plain */,
                _source: cmt
            };
            var didSomething = true;
            while (didSomething) {
                didSomething = false;
                cmt = cmt.replace(/\/\/%[ \t]*([\w\.]+)(=(("[^"\n]*")|'([^'\n]*)'|([^\s]*)))?/, function (f, n, d0, d1, v0, v1, v2) {
                    var v = v0 ? JSON.parse(v0) : (d0 ? (v0 || v1 || v2) : "true");
                    if (!v)
                        v = "";
                    if (pxtc.U.startsWith(n, "block.loc.")) {
                        if (!res.locs)
                            res.locs = {};
                        res.locs[n.slice("block.loc.".length).toLowerCase() + "|block"] = v;
                    }
                    else if (pxtc.U.startsWith(n, "jsdoc.loc.")) {
                        if (!res.locs)
                            res.locs = {};
                        res.locs[n.slice("jsdoc.loc.".length).toLowerCase() + "|jsdoc"] = v;
                    }
                    else if (pxtc.U.contains(n, ".loc.")) {
                        if (!res.locs)
                            res.locs = {};
                        var p = n.slice(0, n.indexOf('.loc.'));
                        var l = n.slice(n.indexOf('.loc.') + '.loc.'.length);
                        res.locs[l + "|param|" + p] = v;
                    }
                    else if (pxtc.U.endsWith(n, ".defl")) {
                        if (v.indexOf(" ") > -1) {
                            res.paramDefl[n.slice(0, n.length - 5)] = "\"" + v + "\"";
                        }
                        else {
                            res.paramDefl[n.slice(0, n.length - 5)] = v;
                        }
                        if (!res.explicitDefaults)
                            res.explicitDefaults = [];
                        res.explicitDefaults.push(n.slice(0, n.length - 5));
                    }
                    else if (pxtc.U.endsWith(n, ".shadow")) {
                        if (!res._shadowOverrides)
                            res._shadowOverrides = {};
                        res._shadowOverrides[n.slice(0, n.length - 7)] = v;
                    }
                    else if (pxtc.U.endsWith(n, ".fieldEditor")) {
                        if (!res.paramFieldEditor)
                            res.paramFieldEditor = {};
                        res.paramFieldEditor[n.slice(0, n.length - 12)] = v;
                    }
                    else if (pxtc.U.contains(n, ".fieldOptions.")) {
                        if (!res.paramFieldEditorOptions)
                            res.paramFieldEditorOptions = {};
                        var field = n.slice(0, n.indexOf('.fieldOptions.'));
                        var key = n.slice(n.indexOf('.fieldOptions.') + 14, n.length);
                        if (!res.paramFieldEditorOptions[field])
                            res.paramFieldEditorOptions[field] = {};
                        res.paramFieldEditorOptions[field][key] = v;
                    }
                    else if (pxtc.U.contains(n, ".shadowOptions.")) {
                        if (!res.paramShadowOptions)
                            res.paramShadowOptions = {};
                        var field = n.slice(0, n.indexOf('.shadowOptions.'));
                        var key = n.slice(n.indexOf('.shadowOptions.') + 15, n.length);
                        if (!res.paramShadowOptions[field])
                            res.paramShadowOptions[field] = {};
                        res.paramShadowOptions[field][key] = v;
                    }
                    else if (pxtc.U.endsWith(n, ".min")) {
                        if (!res.paramMin)
                            res.paramMin = {};
                        res.paramMin[n.slice(0, n.length - 4)] = v;
                    }
                    else if (pxtc.U.endsWith(n, ".max")) {
                        if (!res.paramMax)
                            res.paramMax = {};
                        res.paramMax[n.slice(0, n.length - 4)] = v;
                    }
                    else {
                        res[n] = v;
                    }
                    didSomething = true;
                    return "//% ";
                });
            }
            for (var _i = 0, numberAttributes_1 = numberAttributes; _i < numberAttributes_1.length; _i++) {
                var n = numberAttributes_1[_i];
                if (typeof res[n] == "string")
                    res[n] = parseInt(res[n]);
            }
            for (var _a = 0, booleanAttributes_1 = booleanAttributes; _a < booleanAttributes_1.length; _a++) {
                var n = booleanAttributes_1[_a];
                if (typeof res[n] == "string")
                    res[n] = res[n] == 'true' || res[n] == '1' ? true : false;
            }
            if (res.trackArgs) {
                res.trackArgs = res.trackArgs.split(/[ ,]+/).map(function (s) { return parseInt(s) || 0; });
            }
            if (res.enumInitialMembers) {
                res.enumInitialMembers = res.enumInitialMembers.split(/[ ,]+/);
            }
            if (res.blockExternalInputs && !res.inlineInputMode) {
                res.inlineInputMode = "external";
            }
            res.paramHelp = {};
            res.jsDoc = "";
            cmt = cmt.replace(/\/\*\*([^]*?)\*\//g, function (full, doccmt) {
                doccmt = doccmt.replace(/\n\s*(\*\s*)?/g, "\n");
                doccmt = doccmt.replace(/^\s*@param\s+(\w+)\s+(.*)$/mg, function (full, name, desc) {
                    res.paramHelp[name] = desc;
                    if (!res.paramDefl[name]) {
                        // these don't add to res.explicitDefaults
                        var m = /\beg\.?:\s*(.+)/.exec(desc);
                        if (m && m[1]) {
                            var defaultValue = /(?:"([^"]*)")|(?:'([^']*)')|(?:([^\s,]+))/g.exec(m[1]);
                            if (defaultValue) {
                                var val = defaultValue[1] || defaultValue[2] || defaultValue[3];
                                if (!val)
                                    val = "";
                                // If there are spaces in the value, it means the value was surrounded with quotes, so add them back
                                if (val.indexOf(" ") > -1) {
                                    res.paramDefl[name] = "\"" + val + "\"";
                                }
                                else {
                                    res.paramDefl[name] = val;
                                }
                            }
                        }
                    }
                    return "";
                });
                res.jsDoc += doccmt;
                return "";
            });
            res.jsDoc = res.jsDoc.trim();
            if (res.async)
                res.callingConvention = 1 /* Async */;
            if (res.promise)
                res.callingConvention = 2 /* Promise */;
            if (res.jres)
                res.whenUsed = true;
            if (res.subcategories) {
                try {
                    res.subcategories = JSON.parse(res.subcategories);
                }
                catch (e) {
                    res.subcategories = undefined;
                }
            }
            if (res.groups) {
                try {
                    res.groups = JSON.parse(res.groups);
                }
                catch (e) {
                    res.groups = undefined;
                }
            }
            if (res.groupIcons) {
                try {
                    res.groupIcons = JSON.parse(res.groupIcons);
                }
                catch (e) {
                    res.groupIcons = undefined;
                }
            }
            if (res.groupHelp) {
                try {
                    res.groupHelp = JSON.parse(res.groupHelp);
                }
                catch (e) {
                    res.groupHelp = undefined;
                }
            }
            updateBlockDef(res);
            return res;
        }
        pxtc.parseCommentString = parseCommentString;
        function updateBlockDef(attrs) {
            if (attrs.block) {
                var parts = attrs.block.split("||");
                attrs._def = applyOverrides(parseBlockDefinition(parts[0]));
                if (!attrs._def)
                    pxt.debug("Unable to parse block def for id: " + attrs.blockId);
                if (parts[1])
                    attrs._expandedDef = applyOverrides(parseBlockDefinition(parts[1]));
                if (parts[1] && !attrs._expandedDef)
                    pxt.debug("Unable to parse expanded block def for id: " + attrs.blockId);
            }
            function applyOverrides(def) {
                if (attrs._shadowOverrides) {
                    def.parameters.forEach(function (p) {
                        var shadow = attrs._shadowOverrides[p.name];
                        if (shadow === "unset")
                            delete p.shadowBlockId;
                        else if (shadow != null)
                            p.shadowBlockId = shadow;
                    });
                }
                return def;
            }
        }
        pxtc.updateBlockDef = updateBlockDef;
        function parseBlockDefinition(def) {
            var tokens = [];
            var currentWord;
            var strIndex = 0;
            var _loop_7 = function () {
                var char = def[strIndex];
                var restoreIndex = strIndex;
                var newToken = void 0;
                switch (char) {
                    case "*":
                    case "_":
                        var tk = eatToken(function (c) { return c == char; });
                        var offset = char === "_" ? 2 : 0;
                        if (tk.length === 1)
                            newToken = { kind: 1 /* SingleAsterisk */ << offset, content: tk };
                        else if (tk.length === 2)
                            newToken = { kind: 2 /* DoubleAsterisk */ << offset, content: tk };
                        else if (tk.length === 3)
                            newToken = { kind: 3 /* TripleAsterisk */ << offset, content: tk };
                        else
                            strIndex = restoreIndex; // error: no more than three style marks
                        break;
                    case "`":
                        var image = eatEnclosure("`");
                        if (image === undefined) {
                            strIndex = restoreIndex; // error: not terminated
                            break;
                        }
                        newToken = { kind: 256 /* Image */, content: image };
                        break;
                    case "|":
                        newToken = { kind: 32 /* Pipe */ };
                        break;
                    case "\\":
                        if (strIndex < (def.length - 1))
                            newToken = { kind: 16 /* Escape */, content: def[1 + (strIndex++)] };
                        break;
                    case "[":
                        var contentText = eatEnclosure("]");
                        if (contentText !== undefined && def[strIndex++ + 1] === "(") {
                            var contentClass = eatEnclosure(")");
                            if (contentClass !== undefined) {
                                newToken = { kind: 512 /* TaggedText */, content: contentText, type: contentClass };
                                break;
                            }
                        }
                        strIndex = restoreIndex; // error: format should be [text](class)
                        break;
                    case "$":
                    case "%":
                        var param = eatToken(function (c) { return /[a-zA-Z0-9_=]/.test(c); }, true).split("=");
                        if (param.length > 2) {
                            strIndex = restoreIndex; // error: too many equals signs
                            break;
                        }
                        var varName = void 0;
                        if (def[strIndex + 1] === "(") {
                            var oldIndex = strIndex;
                            ++strIndex;
                            varName = eatEnclosure(")");
                            if (!varName)
                                strIndex = oldIndex;
                        }
                        newToken = { kind: (char === "$") ? 1024 /* ParamRef */ : 64 /* Parameter */, content: param[0], type: param[1], name: varName };
                        break;
                }
                if (newToken) {
                    if (currentWord)
                        tokens.push({ kind: 128 /* Word */, content: currentWord });
                    currentWord = undefined;
                    tokens.push(newToken);
                }
                else if (!currentWord) {
                    currentWord = char;
                }
                else {
                    currentWord += char;
                }
            };
            for (; strIndex < def.length; strIndex++) {
                _loop_7();
            }
            if (currentWord)
                tokens.push({ kind: 128 /* Word */, content: currentWord });
            var parts = [];
            var parameters = [];
            var stack = [];
            var open = 0;
            var currentLabel = "";
            var labelStack = [];
            for (var i = 0; i < tokens.length; i++) {
                var token = tokens[i].kind;
                var top_2 = stack[stack.length - 1];
                if (token & 15 /* StyleMarks */) {
                    pushCurrentLabel(tokens[i].content);
                    if (token & open) {
                        if (top_2 & token) {
                            stack.pop();
                            open ^= token;
                            // Handle triple tokens
                            var remainder = (top_2 & open) | (token & open);
                            if (remainder) {
                                stack.push(remainder);
                            }
                        }
                        else {
                            // We encountered a mismatched mark, so clear previous styles
                            collapseLabels();
                        }
                    }
                    else {
                        open |= token;
                        stack.push(token);
                    }
                }
                else if (token & 144 /* Text */) {
                    currentLabel += tokens[i].content;
                }
                else if (token & 1120 /* Unstylable */) {
                    pushLabels();
                }
                /* tslint:disable:possible-timing-attack  (tslint thinks all variables named token are passwords...) */
                if (token == 64 /* Parameter */) {
                    var param = { kind: "param", name: tokens[i].content, shadowBlockId: tokens[i].type, ref: false };
                    if (tokens[i].name)
                        param.varName = tokens[i].name;
                    parts.push(param);
                    parameters.push(param);
                }
                else if (token == 1024 /* ParamRef */) {
                    var param = { kind: "param", name: tokens[i].content, shadowBlockId: tokens[i].type, ref: true };
                    if (tokens[i].name)
                        param.varName = tokens[i].name;
                    parts.push(param);
                    parameters.push(param);
                }
                else if (token == 256 /* Image */) {
                    pushCurrentLabel();
                    labelStack.push({ kind: "image", uri: tokens[i].content });
                }
                else if (token == 512 /* TaggedText */) {
                    pushCurrentLabel();
                    labelStack.push({ kind: "label", text: tokens[i].content, cssClass: tokens[i].type });
                }
                else if (token == 32 /* Pipe */) {
                    parts.push({ kind: "break" });
                }
                /* tslint:enable:possible-timing-attack */
            }
            pushLabels();
            return { parts: parts, parameters: parameters };
            function eatToken(pred, skipCurrent) {
                if (skipCurrent === void 0) { skipCurrent = false; }
                var current = "";
                if (skipCurrent)
                    strIndex++;
                while (strIndex < def.length && pred(def[strIndex])) {
                    current += def[strIndex];
                    ++strIndex;
                }
                if (current)
                    strIndex--;
                return current;
            }
            function eatEnclosure(endMark) {
                var content = eatToken(function (c) { return c !== endMark; }, true);
                if (def[strIndex + 1] !== endMark)
                    return undefined;
                ++strIndex;
                return content;
            }
            function collapseLabels() {
                var combined = "";
                var newStack = [];
                for (var _i = 0, labelStack_1 = labelStack; _i < labelStack_1.length; _i++) {
                    var item = labelStack_1[_i];
                    if (isBlockPart(item)) {
                        newStack.push({
                            content: combined,
                            styles: 0
                        });
                        newStack.push(item);
                        combined = "";
                    }
                    else {
                        combined += item.content;
                        if (item.endingToken) {
                            combined += item.endingToken;
                        }
                    }
                }
                labelStack = newStack;
                if (combined) {
                    labelStack.push({
                        content: combined,
                        styles: 0
                    });
                }
                // Clear the style state as well
                stack = [];
                open = 0;
            }
            function pushLabels() {
                pushCurrentLabel();
                if (open) {
                    collapseLabels();
                }
                while (labelStack.length) {
                    var label = labelStack.shift();
                    if (isBlockPart(label)) {
                        parts.push(label);
                    }
                    else {
                        if (!label.content)
                            continue;
                        var styles = [];
                        if (label.styles & 10 /* Bold */)
                            styles.push("bold");
                        if (label.styles & 5 /* Italics */)
                            styles.push("italics");
                        parts.push({ kind: "label", text: label.content, style: styles });
                    }
                }
            }
            function pushCurrentLabel(endingToken) {
                labelStack.push({
                    content: currentLabel,
                    styles: open,
                    endingToken: endingToken
                });
                currentLabel = "";
            }
        }
        pxtc.parseBlockDefinition = parseBlockDefinition;
        function isBlockPart(p) {
            return !!(p.kind);
        }
        function parseChecksumBlock(buf, pos) {
            if (pos === void 0) { pos = 0; }
            var magic = pxt.HF2.read32(buf, pos);
            if ((magic & 0x7fffffff) != 0x07eeb07c) {
                pxt.log("no checksum block magic");
                return null;
            }
            var endMarkerPos = pxt.HF2.read32(buf, pos + 4);
            var endMarker = pxt.HF2.read32(buf, pos + 8);
            if (endMarkerPos & 3) {
                pxt.log("invalid end marker position");
                return null;
            }
            var pageSize = 1 << (endMarker & 0xff);
            if (pageSize != pxt.appTarget.compile.flashCodeAlign) {
                pxt.log("invalid page size: " + pageSize);
                return null;
            }
            var blk = {
                magic: magic,
                endMarkerPos: endMarkerPos,
                endMarker: endMarker,
                regions: []
            };
            for (var i = pos + 12; i < buf.length - 7; i += 8) {
                var r = {
                    start: pageSize * pxt.HF2.read16(buf, i),
                    length: pageSize * pxt.HF2.read16(buf, i + 2),
                    checksum: pxt.HF2.read32(buf, i + 4)
                };
                if (r.length && r.checksum) {
                    blk.regions.push(r);
                }
                else {
                    break;
                }
            }
            //console.log(hexDump(buf), blk)
            return blk;
        }
        pxtc.parseChecksumBlock = parseChecksumBlock;
        var UF2;
        (function (UF2) {
            UF2.UF2_MAGIC_START0 = 0x0A324655; // "UF2\n"
            UF2.UF2_MAGIC_START1 = 0x9E5D5157; // Randomly selected
            UF2.UF2_MAGIC_END = 0x0AB16F30; // Ditto
            UF2.UF2_FLAG_NONE = 0x00000000;
            UF2.UF2_FLAG_NOFLASH = 0x00000001;
            UF2.UF2_FLAG_FILE = 0x00001000;
            UF2.UF2_FLAG_FAMILY_ID_PRESENT = 0x00002000;
            function parseBlock(block) {
                var wordAt = function (k) {
                    return (block[k] + (block[k + 1] << 8) + (block[k + 2] << 16) + (block[k + 3] << 24)) >>> 0;
                };
                if (!block || block.length != 512 ||
                    wordAt(0) != UF2.UF2_MAGIC_START0 || wordAt(4) != UF2.UF2_MAGIC_START1 ||
                    wordAt(block.length - 4) != UF2.UF2_MAGIC_END)
                    return null;
                var flags = wordAt(8);
                var payloadSize = wordAt(16);
                if (payloadSize > 476)
                    payloadSize = 256;
                var filename = null;
                var familyId = 0;
                var fileSize = 0;
                if (flags & UF2.UF2_FLAG_FILE) {
                    var fnbuf = block.slice(32 + payloadSize);
                    var len = fnbuf.indexOf(0);
                    if (len >= 0) {
                        fnbuf = fnbuf.slice(0, len);
                    }
                    filename = pxtc.U.fromUTF8(pxtc.U.uint8ArrayToString(fnbuf));
                    fileSize = wordAt(28);
                }
                if (flags & UF2.UF2_FLAG_FAMILY_ID_PRESENT) {
                    familyId = wordAt(28);
                }
                return {
                    flags: flags,
                    targetAddr: wordAt(12),
                    payloadSize: payloadSize,
                    blockNo: wordAt(20),
                    numBlocks: wordAt(24),
                    fileSize: fileSize,
                    familyId: familyId,
                    data: block.slice(32, 32 + payloadSize),
                    filename: filename
                };
            }
            UF2.parseBlock = parseBlock;
            function parseFile(blocks) {
                var r = [];
                for (var i = 0; i < blocks.length; i += 512) {
                    var b = parseBlock(blocks.slice(i, i + 512));
                    if (b)
                        r.push(b);
                }
                return r;
            }
            UF2.parseFile = parseFile;
            function toBin(blocks, endAddr) {
                if (endAddr === void 0) { endAddr = undefined; }
                if (blocks.length < 512)
                    return null;
                var curraddr = -1;
                var appstartaddr = -1;
                var bufs = [];
                for (var i = 0; i < blocks.length; ++i) {
                    var ptr = i * 512;
                    var bl = parseBlock(blocks.slice(ptr, ptr + 512));
                    if (!bl)
                        continue;
                    if (endAddr && bl.targetAddr + 256 > endAddr)
                        break;
                    if (curraddr == -1) {
                        curraddr = bl.targetAddr;
                        appstartaddr = curraddr;
                    }
                    var padding = bl.targetAddr - curraddr;
                    if (padding < 0 || padding % 4 || padding > 1024 * 1024)
                        continue;
                    if (padding > 0)
                        bufs.push(new Uint8Array(padding));
                    bufs.push(blocks.slice(ptr + 32, ptr + 32 + bl.payloadSize));
                    curraddr = bl.targetAddr + bl.payloadSize;
                }
                var len = 0;
                for (var _i = 0, bufs_1 = bufs; _i < bufs_1.length; _i++) {
                    var b = bufs_1[_i];
                    len += b.length;
                }
                if (len == 0)
                    return null;
                var r = new Uint8Array(len);
                var dst = 0;
                for (var _a = 0, bufs_2 = bufs; _a < bufs_2.length; _a++) {
                    var b = bufs_2[_a];
                    for (var i = 0; i < b.length; ++i)
                        r[dst++] = b[i];
                }
                return {
                    buf: r,
                    start: appstartaddr,
                };
            }
            UF2.toBin = toBin;
            function hasAddr(b, a) {
                if (!b)
                    return false;
                return b.targetAddr <= a && a < b.targetAddr + b.payloadSize;
            }
            function readBytes(blocks, addr, length) {
                var res = new Uint8Array(length);
                var bl;
                for (var i = 0; i < length; ++i, ++addr) {
                    if (!hasAddr(bl, addr))
                        bl = blocks.filter(function (b) { return hasAddr(b, addr); })[0];
                    if (bl)
                        res[i] = bl.data[addr - bl.targetAddr];
                }
                return res;
            }
            UF2.readBytes = readBytes;
            function setWord(block, ptr, v) {
                block[ptr] = (v & 0xff);
                block[ptr + 1] = ((v >> 8) & 0xff);
                block[ptr + 2] = ((v >> 16) & 0xff);
                block[ptr + 3] = ((v >> 24) & 0xff);
            }
            function newBlockFile(familyId) {
                if (typeof familyId == "string")
                    familyId = parseInt(familyId);
                return {
                    currBlock: null,
                    currPtr: -1,
                    blocks: [],
                    ptrs: [],
                    filesize: 0,
                    familyId: familyId || 0
                };
            }
            UF2.newBlockFile = newBlockFile;
            function finalizeFile(f) {
                for (var i = 0; i < f.blocks.length; ++i) {
                    setWord(f.blocks[i], 20, i);
                    setWord(f.blocks[i], 24, f.blocks.length);
                    if (f.filename)
                        setWord(f.blocks[i], 28, f.filesize);
                }
            }
            UF2.finalizeFile = finalizeFile;
            function concatFiles(fs) {
                for (var _i = 0, fs_1 = fs; _i < fs_1.length; _i++) {
                    var f = fs_1[_i];
                    finalizeFile(f);
                    f.filename = null;
                }
                var r = newBlockFile();
                r.blocks = pxtc.U.concat(fs.map(function (f) { return f.blocks; }));
                for (var _a = 0, fs_2 = fs; _a < fs_2.length; _a++) {
                    var f = fs_2[_a];
                    f.blocks = [];
                }
                return r;
            }
            UF2.concatFiles = concatFiles;
            function serializeFile(f) {
                finalizeFile(f);
                var res = "";
                for (var _i = 0, _a = f.blocks; _i < _a.length; _i++) {
                    var b = _a[_i];
                    res += pxtc.Util.uint8ArrayToString(b);
                }
                return res;
            }
            UF2.serializeFile = serializeFile;
            function readBytesFromFile(f, addr, length) {
                //console.log(`read @${addr} len=${length}`)
                var needAddr = addr >> 8;
                var bl;
                if (needAddr == f.currPtr)
                    bl = f.currBlock;
                else {
                    for (var i = 0; i < f.ptrs.length; ++i) {
                        if (f.ptrs[i] == needAddr) {
                            bl = f.blocks[i];
                            break;
                        }
                    }
                    if (bl) {
                        f.currPtr = needAddr;
                        f.currBlock = bl;
                    }
                }
                if (!bl)
                    return null;
                var res = new Uint8Array(length);
                var toRead = Math.min(length, 256 - (addr & 0xff));
                pxtc.U.memcpy(res, 0, bl, (addr & 0xff) + 32, toRead);
                var leftOver = length - toRead;
                if (leftOver > 0) {
                    var le = readBytesFromFile(f, addr + toRead, leftOver);
                    pxtc.U.memcpy(res, toRead, le);
                }
                return res;
            }
            UF2.readBytesFromFile = readBytesFromFile;
            function writeBytes(f, addr, bytes, flags) {
                if (flags === void 0) { flags = 0; }
                var currBlock = f.currBlock;
                var needAddr = addr >> 8;
                // account for unaligned writes
                var thisChunk = 256 - (addr & 0xff);
                if (bytes.length > thisChunk) {
                    var b = new Uint8Array(bytes);
                    writeBytes(f, addr, b.slice(0, thisChunk));
                    while (thisChunk < bytes.length) {
                        var nextOff = Math.min(thisChunk + 256, bytes.length);
                        writeBytes(f, addr + thisChunk, b.slice(thisChunk, nextOff));
                        thisChunk = nextOff;
                    }
                    return;
                }
                if (needAddr != f.currPtr) {
                    var i = 0;
                    currBlock = null;
                    for (var i_1 = 0; i_1 < f.ptrs.length; ++i_1) {
                        if (f.ptrs[i_1] == needAddr) {
                            currBlock = f.blocks[i_1];
                            break;
                        }
                    }
                    if (!currBlock) {
                        currBlock = new Uint8Array(512);
                        if (f.filename)
                            flags |= UF2.UF2_FLAG_FILE;
                        else if (f.familyId)
                            flags |= UF2.UF2_FLAG_FAMILY_ID_PRESENT;
                        setWord(currBlock, 0, UF2.UF2_MAGIC_START0);
                        setWord(currBlock, 4, UF2.UF2_MAGIC_START1);
                        setWord(currBlock, 8, flags);
                        setWord(currBlock, 12, needAddr << 8);
                        setWord(currBlock, 16, 256);
                        setWord(currBlock, 20, f.blocks.length);
                        setWord(currBlock, 28, f.familyId);
                        setWord(currBlock, 512 - 4, UF2.UF2_MAGIC_END);
                        // if bytes are not written, leave them at erase value
                        for (var i_2 = 32; i_2 < 32 + 256; ++i_2)
                            currBlock[i_2] = 0xff;
                        if (f.filename) {
                            pxtc.U.memcpy(currBlock, 32 + 256, pxtc.U.stringToUint8Array(pxtc.U.toUTF8(f.filename)));
                        }
                        f.blocks.push(currBlock);
                        f.ptrs.push(needAddr);
                    }
                    f.currPtr = needAddr;
                    f.currBlock = currBlock;
                }
                var p = (addr & 0xff) + 32;
                for (var i = 0; i < bytes.length; ++i)
                    currBlock[p + i] = bytes[i];
                f.filesize = Math.max(f.filesize, bytes.length + addr);
            }
            UF2.writeBytes = writeBytes;
            function writeHex(f, hex) {
                var upperAddr = "0000";
                for (var i = 0; i < hex.length; ++i) {
                    var m = /:02000004(....)/.exec(hex[i]);
                    if (m) {
                        upperAddr = m[1];
                    }
                    m = /^:..(....)00(.*)[0-9A-F][0-9A-F]$/.exec(hex[i]);
                    if (m) {
                        var newAddr = parseInt(upperAddr + m[1], 16);
                        var hh = m[2];
                        var arr = [];
                        for (var j = 0; j < hh.length; j += 2) {
                            arr.push(parseInt(hh[j] + hh[j + 1], 16));
                        }
                        writeBytes(f, newAddr, arr);
                    }
                }
            }
            UF2.writeHex = writeHex;
        })(UF2 = pxtc.UF2 || (pxtc.UF2 = {}));
    })(pxtc = ts.pxtc || (ts.pxtc = {}));
})(ts || (ts = {}));
var pxt;
(function (pxt) {
    var skillmap;
    (function (skillmap) {
        var IndexedDBWorkspace = /** @class */ (function () {
            function IndexedDBWorkspace() {
                this.db = new pxt.BrowserUtils.IDBWrapper(IndexedDBWorkspace.databaseName, IndexedDBWorkspace.version, function (ev, result) {
                    var db = result.result;
                    db.createObjectStore(IndexedDBWorkspace.projectTable, { keyPath: IndexedDBWorkspace.projectKey });
                    db.createObjectStore(IndexedDBWorkspace.userTable, { keyPath: IndexedDBWorkspace.userKey });
                });
            }
            IndexedDBWorkspace.prototype.initAsync = function () {
                return this.db.openAsync();
            };
            IndexedDBWorkspace.prototype.getProjectAsync = function (headerId) {
                return this.db.getAsync(IndexedDBWorkspace.projectTable, headerId)
                    .then(function (entry) { return entry.project; });
            };
            IndexedDBWorkspace.prototype.saveProjectAsync = function (project) {
                return this.db.setAsync(IndexedDBWorkspace.projectTable, {
                    id: project.header.id,
                    project: project
                });
            };
            IndexedDBWorkspace.prototype.getUserStateAsync = function () {
                return this.db.getAsync(IndexedDBWorkspace.userTable, "local-user")
                    .then(function (entry) { var _a; return (_a = entry) === null || _a === void 0 ? void 0 : _a.user; });
            };
            IndexedDBWorkspace.prototype.saveUserStateAsync = function (user) {
                return this.db.setAsync(IndexedDBWorkspace.userTable, {
                    id: "local-user",
                    user: user
                });
            };
            IndexedDBWorkspace.version = 6;
            IndexedDBWorkspace.databaseName = "local-skill-map";
            IndexedDBWorkspace.projectTable = "projects";
            IndexedDBWorkspace.projectKey = "id";
            IndexedDBWorkspace.userTable = "users";
            IndexedDBWorkspace.userKey = "id";
            return IndexedDBWorkspace;
        }());
        skillmap.IndexedDBWorkspace = IndexedDBWorkspace;
    })(skillmap = pxt.skillmap || (pxt.skillmap = {}));
})(pxt || (pxt = {}));
// See https://github.com/microsoft/TouchDevelop-backend/blob/master/docs/streams.md
var pxt;
(function (pxt) {
    var streams;
    (function (streams) {
        function createStreamAsync(target, name) {
            return pxt.Cloud.privatePostAsync("streams", { target: target, name: name || 'data' }).then(function (j) { return j; });
        }
        streams.createStreamAsync = createStreamAsync;
        function postPayloadAsync(stream, data) {
            pxt.Util.assert(!!stream.privatekey);
            return pxt.Cloud.privatePostAsync(stream.id + "/data?privatekey=" + stream.privatekey, data);
        }
        streams.postPayloadAsync = postPayloadAsync;
    })(streams = pxt.streams || (pxt.streams = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var svgUtil;
    (function (svgUtil) {
        var PatternUnits;
        (function (PatternUnits) {
            PatternUnits[PatternUnits["userSpaceOnUse"] = 0] = "userSpaceOnUse";
            PatternUnits[PatternUnits["objectBoundingBox"] = 1] = "objectBoundingBox";
        })(PatternUnits = svgUtil.PatternUnits || (svgUtil.PatternUnits = {}));
        var LengthUnit;
        (function (LengthUnit) {
            LengthUnit[LengthUnit["em"] = 0] = "em";
            LengthUnit[LengthUnit["ex"] = 1] = "ex";
            LengthUnit[LengthUnit["px"] = 2] = "px";
            LengthUnit[LengthUnit["in"] = 3] = "in";
            LengthUnit[LengthUnit["cm"] = 4] = "cm";
            LengthUnit[LengthUnit["mm"] = 5] = "mm";
            LengthUnit[LengthUnit["pt"] = 6] = "pt";
            LengthUnit[LengthUnit["pc"] = 7] = "pc";
            LengthUnit[LengthUnit["percent"] = 8] = "percent";
        })(LengthUnit = svgUtil.LengthUnit || (svgUtil.LengthUnit = {}));
        var XLINK_NAMESPACE = "http://www.w3.org/1999/xlink";
        var BaseElement = /** @class */ (function () {
            function BaseElement(type) {
                this.el = elt(type);
            }
            BaseElement.prototype.attr = function (attributes) {
                var _this = this;
                Object.keys(attributes).forEach(function (at) {
                    _this.setAttribute(at, attributes[at]);
                });
                return this;
            };
            BaseElement.prototype.setAttribute = function (name, value) {
                this.el.setAttribute(name, value.toString());
                return this;
            };
            BaseElement.prototype.setAttributeNS = function (ns, name, value) {
                this.el.setAttributeNS(ns, name, value.toString());
                return this;
            };
            BaseElement.prototype.id = function (id) {
                return this.setAttribute("id", id);
            };
            BaseElement.prototype.setClass = function () {
                var classes = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    classes[_i] = arguments[_i];
                }
                return this.setAttribute("class", classes.join(" "));
            };
            BaseElement.prototype.appendClass = function (className) {
                pxt.BrowserUtils.addClass(this.el, className);
                return this;
            };
            BaseElement.prototype.removeClass = function (className) {
                pxt.BrowserUtils.removeClass(this.el, className);
            };
            BaseElement.prototype.title = function (text) {
                if (!this.titleElement) {
                    this.titleElement = elt("title");
                    // Title has to be the first child in the DOM
                    if (this.el.firstChild) {
                        this.el.insertBefore(this.titleElement, this.el.firstChild);
                    }
                    else {
                        this.el.appendChild(this.titleElement);
                    }
                }
                this.titleElement.textContent = text;
            };
            BaseElement.prototype.setVisible = function (visible) {
                return this.setAttribute("visibility", visible ? "visible" : "hidden");
            };
            return BaseElement;
        }());
        svgUtil.BaseElement = BaseElement;
        var DrawContext = /** @class */ (function (_super) {
            __extends(DrawContext, _super);
            function DrawContext() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DrawContext.prototype.draw = function (type) {
                var el = drawable(type /*FIXME?*/);
                this.el.appendChild(el.el);
                return el;
            };
            DrawContext.prototype.element = function (type, cb) {
                cb(this.draw(type /*FIXME?*/));
                return this;
            };
            DrawContext.prototype.group = function () {
                var g = new Group();
                this.el.appendChild(g.el);
                return g;
            };
            DrawContext.prototype.appendChild = function (child) {
                this.el.appendChild(child.el);
            };
            DrawContext.prototype.onDown = function (handler) {
                svgUtil.events.down(this.el, handler);
                return this;
            };
            DrawContext.prototype.onUp = function (handler) {
                svgUtil.events.up(this.el, handler);
                return this;
            };
            DrawContext.prototype.onMove = function (handler) {
                svgUtil.events.move(this.el, handler);
                return this;
            };
            DrawContext.prototype.onEnter = function (handler) {
                svgUtil.events.enter(this.el, handler);
                return this;
            };
            DrawContext.prototype.onLeave = function (handler) {
                svgUtil.events.leave(this.el, handler);
                return this;
            };
            DrawContext.prototype.onClick = function (handler) {
                svgUtil.events.click(this.el, handler);
                return this;
            };
            return DrawContext;
        }(BaseElement));
        svgUtil.DrawContext = DrawContext;
        var SVG = /** @class */ (function (_super) {
            __extends(SVG, _super);
            function SVG(parent) {
                var _this = _super.call(this, "svg") || this;
                if (parent) {
                    parent.appendChild(_this.el);
                }
                return _this;
            }
            SVG.prototype.define = function (cb) {
                if (!this.defs) {
                    this.defs = new DefsElement(this.el);
                }
                cb(this.defs);
                return this;
            };
            return SVG;
        }(DrawContext));
        svgUtil.SVG = SVG;
        var Group = /** @class */ (function (_super) {
            __extends(Group, _super);
            function Group(parent) {
                var _this = _super.call(this, "g") || this;
                if (parent) {
                    parent.appendChild(_this.el);
                }
                return _this;
            }
            Group.prototype.translate = function (x, y) {
                this.left = x;
                this.top = y;
                return this.updateTransform();
            };
            Group.prototype.scale = function (factor) {
                this.scaleFactor = factor;
                return this.updateTransform();
            };
            Group.prototype.def = function () {
                return new DefsElement(this.el);
            };
            Group.prototype.style = function () {
                return new StyleElement(this.el);
            };
            Group.prototype.updateTransform = function () {
                var transform = "";
                if (this.left != undefined) {
                    transform += "translate(" + this.left + " " + this.top + ")";
                }
                if (this.scaleFactor != undefined) {
                    transform += " scale(" + this.scaleFactor + ")";
                }
                this.setAttribute("transform", transform);
                return this;
            };
            return Group;
        }(DrawContext));
        svgUtil.Group = Group;
        var Pattern = /** @class */ (function (_super) {
            __extends(Pattern, _super);
            function Pattern() {
                return _super.call(this, "pattern") || this;
            }
            Pattern.prototype.units = function (kind) {
                return this.setAttribute("patternUnits", kind === PatternUnits.objectBoundingBox ? "objectBoundingBox" : "userSpaceOnUse");
            };
            Pattern.prototype.contentUnits = function (kind) {
                return this.setAttribute("patternContentUnits", kind === PatternUnits.objectBoundingBox ? "objectBoundingBox" : "userSpaceOnUse");
            };
            Pattern.prototype.size = function (width, height) {
                this.setAttribute("width", width);
                this.setAttribute("height", height);
                return this;
            };
            return Pattern;
        }(DrawContext));
        svgUtil.Pattern = Pattern;
        var DefsElement = /** @class */ (function (_super) {
            __extends(DefsElement, _super);
            function DefsElement(parent) {
                var _this = _super.call(this, "defs") || this;
                parent.appendChild(_this.el);
                return _this;
            }
            DefsElement.prototype.create = function (type, id) {
                var el;
                switch (type) {
                    case "path":
                        el = new Path();
                        break;
                    case "pattern":
                        el = new Pattern();
                        break;
                    case "radialGradient":
                        el = new RadialGradient();
                        break;
                    case "linearGradient":
                        el = new LinearGradient();
                        break;
                    case "clipPath":
                        el = new ClipPath();
                        break;
                    default: el = new BaseElement(type);
                }
                el.id(id);
                this.el.appendChild(el.el);
                return el;
            };
            return DefsElement;
        }(BaseElement));
        svgUtil.DefsElement = DefsElement;
        var StyleElement = /** @class */ (function (_super) {
            __extends(StyleElement, _super);
            function StyleElement(parent) {
                var _this = _super.call(this, "style") || this;
                parent.appendChild(_this.el);
                return _this;
            }
            StyleElement.prototype.content = function (css) {
                this.el.textContent = css;
            };
            return StyleElement;
        }(BaseElement));
        svgUtil.StyleElement = StyleElement;
        var Drawable = /** @class */ (function (_super) {
            __extends(Drawable, _super);
            function Drawable() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Drawable.prototype.at = function (x, y) {
                this.setAttribute("x", x);
                this.setAttribute("y", y);
                return this;
            };
            Drawable.prototype.moveTo = function (x, y) {
                return this.at(x, y);
            };
            Drawable.prototype.fill = function (color, opacity) {
                this.setAttribute("fill", color);
                if (opacity != undefined) {
                    this.opacity(opacity);
                }
                return this;
            };
            Drawable.prototype.opacity = function (opacity) {
                return this.setAttribute("fill-opacity", opacity);
            };
            Drawable.prototype.stroke = function (color, width) {
                this.setAttribute("stroke", color);
                if (width != undefined) {
                    this.strokeWidth(width);
                }
                return this;
            };
            Drawable.prototype.strokeWidth = function (width) {
                return this.setAttribute("stroke-width", width);
            };
            Drawable.prototype.strokeOpacity = function (opacity) {
                return this.setAttribute("stroke-opacity", opacity);
            };
            Drawable.prototype.clipPath = function (url) {
                return this.setAttribute("clip-path", url);
            };
            return Drawable;
        }(DrawContext));
        svgUtil.Drawable = Drawable;
        var Text = /** @class */ (function (_super) {
            __extends(Text, _super);
            function Text(text) {
                var _this = _super.call(this, "text") || this;
                if (text != undefined) {
                    _this.text(text);
                }
                return _this;
            }
            Text.prototype.text = function (text) {
                this.el.textContent = text;
                return this;
            };
            Text.prototype.fontFamily = function (family) {
                return this.setAttribute("font-family", family);
            };
            Text.prototype.fontSize = function (size, units) {
                return this.setAttribute("font-size", lengthWithUnits(size, units));
            };
            Text.prototype.offset = function (dx, dy, units) {
                if (dx !== 0) {
                    this.setAttribute("dx", lengthWithUnits(dx, units));
                }
                if (dy !== 0) {
                    this.setAttribute("dy", lengthWithUnits(dy, units));
                }
                return this;
            };
            Text.prototype.anchor = function (type) {
                return this.setAttribute("text-anchor", type);
            };
            return Text;
        }(Drawable));
        svgUtil.Text = Text;
        var Rect = /** @class */ (function (_super) {
            __extends(Rect, _super);
            function Rect() {
                return _super.call(this, "rect") || this;
            }
            ;
            Rect.prototype.width = function (width, unit) {
                if (unit === void 0) { unit = LengthUnit.px; }
                return this.setAttribute("width", lengthWithUnits(width, unit));
            };
            Rect.prototype.height = function (height, unit) {
                if (unit === void 0) { unit = LengthUnit.px; }
                return this.setAttribute("height", lengthWithUnits(height, unit));
            };
            Rect.prototype.corner = function (radius) {
                return this.corners(radius, radius);
            };
            Rect.prototype.corners = function (rx, ry) {
                this.setAttribute("rx", rx);
                this.setAttribute("ry", ry);
                return this;
            };
            Rect.prototype.size = function (width, height, unit) {
                if (unit === void 0) { unit = LengthUnit.px; }
                this.width(width, unit);
                this.height(height, unit);
                return this;
            };
            return Rect;
        }(Drawable));
        svgUtil.Rect = Rect;
        var Circle = /** @class */ (function (_super) {
            __extends(Circle, _super);
            function Circle() {
                return _super.call(this, "circle") || this;
            }
            Circle.prototype.at = function (cx, cy) {
                this.setAttribute("cx", cx);
                this.setAttribute("cy", cy);
                return this;
            };
            Circle.prototype.radius = function (r) {
                return this.setAttribute("r", r);
            };
            return Circle;
        }(Drawable));
        svgUtil.Circle = Circle;
        var Ellipse = /** @class */ (function (_super) {
            __extends(Ellipse, _super);
            function Ellipse() {
                return _super.call(this, "ellipse") || this;
            }
            Ellipse.prototype.at = function (cx, cy) {
                this.setAttribute("cx", cx);
                this.setAttribute("cy", cy);
                return this;
            };
            Ellipse.prototype.radius = function (rx, ry) {
                this.setAttribute("rx", rx);
                this.setAttribute("ry", ry);
                return this;
            };
            return Ellipse;
        }(Drawable));
        var Line = /** @class */ (function (_super) {
            __extends(Line, _super);
            function Line() {
                return _super.call(this, "line") || this;
            }
            Line.prototype.at = function (x1, y1, x2, y2) {
                this.from(x1, y1);
                if (x2 != undefined && y2 != undefined) {
                    this.to(x2, y2);
                }
                return this;
            };
            Line.prototype.from = function (x1, y1) {
                this.setAttribute("x1", x1);
                this.setAttribute("y1", y1);
                return this;
            };
            Line.prototype.to = function (x2, y2) {
                this.setAttribute("x2", x2);
                this.setAttribute("y2", y2);
                return this;
            };
            return Line;
        }(Drawable));
        svgUtil.Line = Line;
        var PolyElement = /** @class */ (function (_super) {
            __extends(PolyElement, _super);
            function PolyElement() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PolyElement.prototype.points = function (points) {
                return this.setAttribute("points", points);
            };
            PolyElement.prototype.with = function (points) {
                return this.points(points.map(function (_a) {
                    var x = _a.x, y = _a.y;
                    return x + " " + y;
                }).join(","));
            };
            return PolyElement;
        }(Drawable));
        svgUtil.PolyElement = PolyElement;
        var Polyline = /** @class */ (function (_super) {
            __extends(Polyline, _super);
            function Polyline() {
                return _super.call(this, "polyline") || this;
            }
            return Polyline;
        }(PolyElement));
        svgUtil.Polyline = Polyline;
        var Polygon = /** @class */ (function (_super) {
            __extends(Polygon, _super);
            function Polygon() {
                return _super.call(this, "polygon") || this;
            }
            return Polygon;
        }(PolyElement));
        svgUtil.Polygon = Polygon;
        var Path = /** @class */ (function (_super) {
            __extends(Path, _super);
            function Path() {
                var _this = _super.call(this, "path") || this;
                _this.d = new PathContext();
                return _this;
            }
            Path.prototype.update = function () {
                return this.setAttribute("d", this.d.toAttribute());
            };
            Path.prototype.path = function (cb) {
                cb(this.d);
                return this.update();
            };
            return Path;
        }(Drawable));
        svgUtil.Path = Path;
        var Image = /** @class */ (function (_super) {
            __extends(Image, _super);
            function Image() {
                return _super.call(this, "image") || this;
            }
            Image.prototype.src = function (url) {
                return this.setAttributeNS(XLINK_NAMESPACE, "href", url);
            };
            Image.prototype.width = function (width, unit) {
                if (unit === void 0) { unit = LengthUnit.px; }
                return this.setAttribute("width", lengthWithUnits(width, unit));
            };
            Image.prototype.height = function (height, unit) {
                if (unit === void 0) { unit = LengthUnit.px; }
                return this.setAttribute("height", lengthWithUnits(height, unit));
            };
            Image.prototype.size = function (width, height, unit) {
                if (unit === void 0) { unit = LengthUnit.px; }
                this.width(width, unit);
                this.height(height, unit);
                return this;
            };
            return Image;
        }(Drawable));
        svgUtil.Image = Image;
        var Gradient = /** @class */ (function (_super) {
            __extends(Gradient, _super);
            function Gradient() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Gradient.prototype.units = function (kind) {
                return this.setAttribute("gradientUnits", kind === PatternUnits.objectBoundingBox ? "objectBoundingBox" : "userSpaceOnUse");
            };
            Gradient.prototype.stop = function (offset, color, opacity) {
                var s = elt("stop");
                s.setAttribute("offset", offset + "%");
                if (color != undefined) {
                    s.setAttribute("stop-color", color);
                }
                if (opacity != undefined) {
                    s.setAttribute("stop-opacity", opacity);
                }
                this.el.appendChild(s);
                return this;
            };
            return Gradient;
        }(BaseElement));
        svgUtil.Gradient = Gradient;
        var LinearGradient = /** @class */ (function (_super) {
            __extends(LinearGradient, _super);
            function LinearGradient() {
                return _super.call(this, "linearGradient") || this;
            }
            LinearGradient.prototype.start = function (x1, y1) {
                this.setAttribute("x1", x1);
                this.setAttribute("y1", y1);
                return this;
            };
            LinearGradient.prototype.end = function (x2, y2) {
                this.setAttribute("x2", x2);
                this.setAttribute("y2", y2);
                return this;
            };
            return LinearGradient;
        }(Gradient));
        svgUtil.LinearGradient = LinearGradient;
        var RadialGradient = /** @class */ (function (_super) {
            __extends(RadialGradient, _super);
            function RadialGradient() {
                return _super.call(this, "radialGradient") || this;
            }
            RadialGradient.prototype.center = function (cx, cy) {
                this.setAttribute("cx", cx);
                this.setAttribute("cy", cy);
                return this;
            };
            RadialGradient.prototype.focus = function (fx, fy, fr) {
                this.setAttribute("fx", fx);
                this.setAttribute("fy", fy);
                this.setAttribute("fr", fr);
                return this;
            };
            RadialGradient.prototype.radius = function (r) {
                return this.setAttribute("r", r);
            };
            return RadialGradient;
        }(Gradient));
        svgUtil.RadialGradient = RadialGradient;
        var ClipPath = /** @class */ (function (_super) {
            __extends(ClipPath, _super);
            function ClipPath() {
                return _super.call(this, "clipPath") || this;
            }
            ClipPath.prototype.clipPathUnits = function (objectBoundingBox) {
                if (objectBoundingBox) {
                    return this.setAttribute("clipPathUnits", "objectBoundingBox");
                }
                else {
                    return this.setAttribute("clipPathUnits", "userSpaceOnUse");
                }
            };
            return ClipPath;
        }(DrawContext));
        svgUtil.ClipPath = ClipPath;
        function elt(type) {
            var el = document.createElementNS("http://www.w3.org/2000/svg", type);
            return el;
        }
        function drawable(type) {
            switch (type) {
                case "text": return new Text();
                case "circle": return new Circle();
                case "rect": return new Rect();
                case "line": return new Line();
                case "polygon": return new Polygon();
                case "polyline": return new Polyline();
                case "path": return new Path();
                default: return new Drawable(type);
            }
        }
        var PathContext = /** @class */ (function () {
            function PathContext() {
                this.ops = [];
            }
            PathContext.prototype.clear = function () {
                this.ops = [];
            };
            PathContext.prototype.moveTo = function (x, y) {
                return this.op("M", x, y);
            };
            PathContext.prototype.moveBy = function (dx, dy) {
                return this.op("m", dx, dy);
            };
            PathContext.prototype.lineTo = function (x, y) {
                return this.op("L", x, y);
            };
            PathContext.prototype.lineBy = function (dx, dy) {
                return this.op("l", dx, dy);
            };
            PathContext.prototype.cCurveTo = function (c1x, c1y, c2x, c2y, x, y) {
                return this.op("C", c1x, c1y, c2x, c2y, x, y);
            };
            PathContext.prototype.cCurveBy = function (dc1x, dc1y, dc2x, dc2y, dx, dy) {
                return this.op("c", dc1x, dc1y, dc2x, dc2y, dx, dy);
            };
            PathContext.prototype.qCurveTo = function (cx, cy, x, y) {
                return this.op("Q", cx, cy, x, y);
            };
            PathContext.prototype.qCurveBy = function (dcx, dcy, dx, dy) {
                return this.op("q", dcx, dcy, dx, dy);
            };
            PathContext.prototype.sCurveTo = function (cx, cy, x, y) {
                return this.op("S", cx, cy, x, y);
            };
            PathContext.prototype.sCurveBy = function (dcx, dcy, dx, dy) {
                return this.op("s", dcx, dcy, dx, dy);
            };
            PathContext.prototype.tCurveTo = function (x, y) {
                return this.op("T", x, y);
            };
            PathContext.prototype.tCurveBy = function (dx, dy) {
                return this.op("t", dx, dy);
            };
            PathContext.prototype.arcTo = function (rx, ry, xRotate, large, sweepClockwise, x, y) {
                return this.op("A", rx, ry, xRotate, large ? 1 : 0, sweepClockwise ? 1 : 0, x, y);
            };
            PathContext.prototype.arcBy = function (rx, ry, xRotate, large, sweepClockwise, x, y) {
                return this.op("a", rx, ry, xRotate, large ? 1 : 0, sweepClockwise ? 1 : 0, x, y);
            };
            PathContext.prototype.close = function () {
                return this.op("z");
            };
            PathContext.prototype.toAttribute = function () {
                return this.ops.map(function (op) { return op.op + " " + op.args.join(" "); }).join(" ");
            };
            PathContext.prototype.op = function (op) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                this.ops.push({
                    op: op,
                    args: args
                });
                return this;
            };
            return PathContext;
        }());
        svgUtil.PathContext = PathContext;
        function lengthWithUnits(value, unit) {
            switch (unit) {
                case LengthUnit.em: return value + "em";
                case LengthUnit.ex: return value + "ex";
                case LengthUnit.px: return value + "px";
                case LengthUnit.in: return value + "in";
                case LengthUnit.cm: return value + "cm";
                case LengthUnit.mm: return value + "mm";
                case LengthUnit.pt: return value + "pt";
                case LengthUnit.pc: return value + "pc";
                case LengthUnit.percent: return value + "%";
                default: return value.toString();
            }
        }
    })(svgUtil = pxt.svgUtil || (pxt.svgUtil = {}));
})(pxt || (pxt = {}));
(function (pxt) {
    var svgUtil;
    (function (svgUtil) {
        var events;
        (function (events) {
            function isTouchEnabled() {
                return typeof window !== "undefined" &&
                    ('ontouchstart' in window // works on most browsers
                        || (navigator && navigator.maxTouchPoints > 0)); // works on IE10/11 and Surface);
            }
            events.isTouchEnabled = isTouchEnabled;
            function hasPointerEvents() {
                return typeof window != "undefined" && !!window.PointerEvent;
            }
            events.hasPointerEvents = hasPointerEvents;
            function down(el, handler) {
                if (hasPointerEvents()) {
                    el.addEventListener("pointerdown", handler);
                }
                else if (isTouchEnabled()) {
                    el.addEventListener("mousedown", handler);
                    el.addEventListener("touchstart", handler);
                }
                else {
                    el.addEventListener("mousedown", handler);
                }
            }
            events.down = down;
            function up(el, handler) {
                if (hasPointerEvents()) {
                    el.addEventListener("pointerup", handler);
                }
                else if (isTouchEnabled()) {
                    el.addEventListener("mouseup", handler);
                }
                else {
                    el.addEventListener("mouseup", handler);
                }
            }
            events.up = up;
            function enter(el, handler) {
                if (hasPointerEvents()) {
                    el.addEventListener("pointerover", function (e) {
                        handler(!!(e.buttons & 1));
                    });
                }
                else if (isTouchEnabled()) {
                    el.addEventListener("touchstart", function (e) {
                        handler(true);
                    });
                }
                else {
                    el.addEventListener("mouseover", function (e) {
                        handler(!!(e.buttons & 1));
                    });
                }
            }
            events.enter = enter;
            function leave(el, handler) {
                if (hasPointerEvents()) {
                    el.addEventListener("pointerleave", handler);
                }
                else if (isTouchEnabled()) {
                    el.addEventListener("touchend", handler);
                }
                else {
                    el.addEventListener("mouseleave", handler);
                }
            }
            events.leave = leave;
            function move(el, handler) {
                if (hasPointerEvents()) {
                    el.addEventListener("pointermove", handler);
                }
                else if (isTouchEnabled()) {
                    el.addEventListener("touchmove", handler);
                }
                else {
                    el.addEventListener("mousemove", handler);
                }
            }
            events.move = move;
            function click(el, handler) {
                el.addEventListener("click", handler);
            }
            events.click = click;
        })(events = svgUtil.events || (svgUtil.events = {}));
    })(svgUtil = pxt.svgUtil || (pxt.svgUtil = {}));
})(pxt || (pxt = {}));
(function (pxt) {
    var svgUtil;
    (function (svgUtil) {
        var helpers;
        (function (helpers) {
            var CenteredText = /** @class */ (function (_super) {
                __extends(CenteredText, _super);
                function CenteredText() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                CenteredText.prototype.at = function (cx, cy) {
                    this.cx = cx;
                    this.cy = cy;
                    this.rePosition();
                    return this;
                };
                CenteredText.prototype.text = function (text, fontSizePixels) {
                    if (fontSizePixels === void 0) { fontSizePixels = 12; }
                    _super.prototype.text.call(this, text);
                    this.fontSizePixels = fontSizePixels;
                    this.setAttribute("font-size", fontSizePixels + "px");
                    this.rePosition();
                    return this;
                };
                CenteredText.prototype.rePosition = function () {
                    if (this.cx == undefined || this.cy == undefined || this.fontSizePixels == undefined) {
                        return;
                    }
                    this.setAttribute("x", this.cx);
                    this.setAttribute("y", this.cy);
                    this.setAttribute("text-anchor", "middle");
                    this.setAttribute("alignment-baseline", "middle");
                };
                return CenteredText;
            }(svgUtil.Text));
            helpers.CenteredText = CenteredText;
        })(helpers = svgUtil.helpers || (svgUtil.helpers = {}));
    })(svgUtil = pxt.svgUtil || (pxt.svgUtil = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var IMAGE_MIME_TYPE = "image/x-mkcd-f4";
    var TILEMAP_MIME_TYPE = "application/mkcd-tilemap";
    var ANIMATION_MIME_TYPE = "application/mkcd-animation";
    var AssetCollection = /** @class */ (function () {
        function AssetCollection() {
            this.assets = [];
            this.takenNames = {};
            this.listeners = [];
        }
        AssetCollection.prototype.add = function (asset) {
            if (this.takenNames[asset.id]) {
                return this.update(asset.id, asset);
            }
            else {
                var clone = cloneAsset(asset);
                this.takenNames[clone.id] = true;
                this.takenNames[getShortIDForAsset(clone)] = true;
                if (clone.meta.displayName && clone.meta.displayName !== clone.id) {
                    if (this.takenNames[clone.meta.displayName]) {
                        clone.meta.displayName = this.generateNewDisplayName(clone.meta.displayName);
                    }
                    this.takenNames[clone.meta.displayName] = true;
                }
                this.assets.push(clone);
                return cloneAsset(clone);
            }
        };
        AssetCollection.prototype.getSnapshot = function (filter) {
            if (filter) {
                return this.assets.filter(function (a) { return filter(a); }).map(cloneAsset);
            }
            return this.assets.map(cloneAsset);
        };
        AssetCollection.prototype.update = function (id, newValue) {
            var asset;
            if (this.takenNames[id]) {
                var existing = this.lookupByID(id);
                if (!assetEquals(existing, newValue)) {
                    this.removeByID(id);
                    asset = this.add(newValue);
                    this.notifyListener(newValue.internalID);
                }
            }
            else {
                asset = this.add(newValue);
            }
            return asset;
        };
        AssetCollection.prototype.removeByID = function (id) {
            var _a, _b;
            var existing = this.lookupByID(id);
            this.assets = this.assets.filter(function (a) { return a.id !== id; });
            delete this.takenNames[id];
            if (existing) {
                delete this.takenNames[getShortIDForAsset(existing)];
            }
            if ((_a = existing) === null || _a === void 0 ? void 0 : _a.meta.displayName) {
                delete this.takenNames[(_b = existing) === null || _b === void 0 ? void 0 : _b.meta.displayName];
            }
        };
        AssetCollection.prototype.getByID = function (id) {
            var asset = this.lookupByID(id);
            return asset && cloneAsset(asset);
        };
        AssetCollection.prototype.getByDisplayName = function (name) {
            if (this.takenNames[name]) {
                for (var _i = 0, _a = this.assets; _i < _a.length; _i++) {
                    var asset = _a[_i];
                    if (asset.meta.displayName === name || getShortIDForAsset(asset) === name) {
                        return cloneAsset(asset);
                    }
                }
            }
            return undefined;
        };
        AssetCollection.prototype.isIDTaken = function (id) {
            return !!this.takenNames[id];
        };
        AssetCollection.prototype.clone = function () {
            var cloned = new AssetCollection();
            cloned.assets = this.getSnapshot();
            cloned.takenNames = __assign({}, this.takenNames);
            return cloned;
        };
        AssetCollection.prototype.serializeToJRes = function (allJRes) {
            if (allJRes === void 0) { allJRes = {}; }
            for (var _i = 0, _a = this.assets; _i < _a.length; _i++) {
                var asset = _a[_i];
                addAssetToJRes(asset, allJRes);
            }
            return allJRes;
        };
        AssetCollection.prototype.addListener = function (internalID, listener) {
            this.listeners.push({ internalID: internalID, callback: listener });
        };
        AssetCollection.prototype.removeListener = function (listener) {
            this.listeners = this.listeners.filter(function (ref) { return ref.callback !== listener; });
        };
        AssetCollection.prototype.diff = function (past) {
            var diff = {
                before: [],
                after: []
            };
            var handled = {};
            for (var _i = 0, _a = past.assets; _i < _a.length; _i++) {
                var pastAsset = _a[_i];
                handled[pastAsset.internalID] = true;
                var futureAsset = this.lookupByInternalID(pastAsset.internalID);
                if (!futureAsset || !assetEquals(pastAsset, futureAsset)) {
                    diff.before.push(pastAsset);
                    diff.after.push(futureAsset);
                }
            }
            for (var _b = 0, _c = this.assets.filter(function (a) { return !handled[a.internalID]; }); _b < _c.length; _b++) {
                var futureAsset = _c[_b];
                diff.before.push(null);
                diff.after.push(futureAsset);
            }
            return diff;
        };
        AssetCollection.prototype.applyDiff = function (diff, backwards) {
            if (backwards === void 0) { backwards = false; }
            var before = backwards ? diff.after : diff.before;
            var after = backwards ? diff.before : diff.after;
            pxt.Util.assert(before.length === after.length);
            for (var i = 0; i < before.length; i++) {
                if (!before[i]) {
                    this.assets.push(after[i]);
                    this.notifyListener(after[i].internalID);
                    continue;
                }
                this.removeByInternalID(before[i].internalID);
                if (after[i]) {
                    this.assets.push(after[i]);
                }
                this.notifyListener(before[i].internalID);
            }
            this.takenNames = {};
            for (var _i = 0, _a = this.assets; _i < _a.length; _i++) {
                var asset = _a[_i];
                pxt.Util.assert(!this.takenNames[asset.id]);
                this.takenNames[asset.id] = true;
                this.takenNames[getShortIDForAsset(asset)] = true;
                if (asset.meta.displayName) {
                    if (asset.meta.displayName !== asset.id)
                        pxt.Util.assert(!this.takenNames[asset.meta.displayName]);
                    this.takenNames[asset.meta.displayName] = true;
                }
            }
        };
        AssetCollection.prototype.lookupByID = function (id) {
            for (var _i = 0, _a = this.assets; _i < _a.length; _i++) {
                var asset = _a[_i];
                if (asset.id === id) {
                    return asset;
                }
            }
            return null;
        };
        AssetCollection.prototype.lookupByInternalID = function (id) {
            for (var _i = 0, _a = this.assets; _i < _a.length; _i++) {
                var asset = _a[_i];
                if (asset.internalID === id) {
                    return asset;
                }
            }
            return null;
        };
        AssetCollection.prototype.removeByInternalID = function (id) {
            this.assets = this.assets.filter(function (a) { return a.internalID !== id; });
        };
        AssetCollection.prototype.notifyListener = function (internalID) {
            for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
                var listener = _a[_i];
                if (listener.internalID === internalID)
                    listener.callback();
            }
        };
        AssetCollection.prototype.generateNewDisplayName = function (prefix) {
            prefix = prefix.replace(/\d+$/, "");
            var index = 0;
            while (this.takenNames[prefix + index]) {
                ++index;
            }
            return prefix + index;
        };
        return AssetCollection;
    }());
    var TilemapProject = /** @class */ (function () {
        function TilemapProject() {
            this.needsRebuild = true;
            this.nextID = 0;
            this.nextInternalID = 0;
            this.committedState = {
                revision: 0,
                tilemaps: new AssetCollection(),
                tiles: new AssetCollection(),
                animations: new AssetCollection(),
                images: new AssetCollection()
            };
            this.state = {
                revision: this.nextID++,
                tilemaps: new AssetCollection(),
                tiles: new AssetCollection(),
                animations: new AssetCollection(),
                images: new AssetCollection()
            };
            this.gallery = {
                revision: 0,
                tilemaps: new AssetCollection(),
                tiles: new AssetCollection(),
                animations: new AssetCollection(),
                images: new AssetCollection()
            };
            this.undoStack = [];
            this.redoStack = [];
        }
        TilemapProject.prototype.getNewInternalId = function () {
            return this.nextInternalID++;
        };
        TilemapProject.prototype.createNewImage = function (width, height) {
            if (width === void 0) { width = 16; }
            if (height === void 0) { height = 16; }
            var id = this.generateNewID("image" /* Image */, pxt.sprite.IMAGE_PREFIX, pxt.sprite.IMAGES_NAMESPACE);
            var bitmap = new pxt.sprite.Bitmap(width, height).data();
            var newImage = {
                internalID: this.getNewInternalId(),
                id: id,
                type: "image" /* Image */,
                bitmap: bitmap,
                meta: {},
                jresData: pxt.sprite.base64EncodeBitmap(bitmap)
            };
            return this.state.images.add(newImage);
        };
        TilemapProject.prototype.createNewAnimation = function (width, height) {
            if (width === void 0) { width = 16; }
            if (height === void 0) { height = 16; }
            var id = this.generateNewID("animation" /* Animation */, pxt.sprite.ANIMATION_PREFIX, pxt.sprite.ANIMATION_NAMESPACE);
            var bitmap = new pxt.sprite.Bitmap(width, height).data();
            var newAnimation = {
                internalID: this.getNewInternalId(),
                id: id,
                type: "animation" /* Animation */,
                frames: [bitmap],
                interval: 500,
                meta: {},
            };
            return this.state.animations.add(newAnimation);
        };
        TilemapProject.prototype.createNewAnimationFromData = function (frames, interval, displayName) {
            if (interval === void 0) { interval = 500; }
            var id = this.generateNewID("animation" /* Animation */, pxt.sprite.ANIMATION_PREFIX, pxt.sprite.ANIMATION_NAMESPACE);
            var newAnimation = {
                internalID: this.getNewInternalId(),
                id: id,
                type: "animation" /* Animation */,
                frames: frames,
                interval: interval,
                meta: { displayName: displayName },
            };
            return this.state.animations.add(newAnimation);
        };
        TilemapProject.prototype.getGalleryTiles = function (tileWidth) {
            if (this.extensionTileSets) {
                return this.extensionTileSets.map(function (collection) { return collection.tileSets.find(function (tileSet) { return tileSet.tileWidth === tileWidth; }); }).filter(function (tileSet) { var _a; return (_a = tileSet) === null || _a === void 0 ? void 0 : _a.tiles.length; });
            }
            return null;
        };
        TilemapProject.prototype.getProjectImages = function () {
            return this.state.images.getSnapshot();
        };
        TilemapProject.prototype.getProjectTiles = function (tileWidth, createIfMissing) {
            var tiles = this.state.tiles.getSnapshot(function (tile) { return tile.bitmap.width === tileWidth; });
            if (tiles.length === 0) {
                if (createIfMissing) {
                    // This will create a new tileset with the correct width
                    this.createNewTile(new pxt.sprite.Bitmap(tileWidth, tileWidth).data());
                    return this.getProjectTiles(tileWidth, false);
                }
                return null;
            }
            return {
                tileWidth: tileWidth,
                tiles: tiles
            };
        };
        TilemapProject.prototype.createNewTile = function (data, id, displayName) {
            this.onChange();
            if (!id || this.state.tiles.isIDTaken(id)) {
                id = this.generateNewID("tile" /* Tile */, pxt.sprite.TILE_PREFIX, pxt.sprite.TILE_NAMESPACE);
            }
            var newTile = {
                internalID: this.getNewInternalId(),
                id: id,
                type: "tile" /* Tile */,
                jresData: pxt.sprite.base64EncodeBitmap(data),
                bitmap: data,
                meta: {
                    displayName: displayName
                },
                isProjectTile: true
            };
            return this.state.tiles.add(newTile);
        };
        TilemapProject.prototype.createNewProjectImage = function (data, displayName) {
            this.onChange();
            var newImage = {
                internalID: this.getNewInternalId(),
                id: this.generateNewID("image" /* Image */, pxt.sprite.IMAGE_PREFIX, pxt.sprite.IMAGES_NAMESPACE),
                type: "image" /* Image */,
                jresData: pxt.sprite.base64EncodeBitmap(data),
                meta: {
                    displayName: displayName
                },
                bitmap: data
            };
            return this.state.images.add(newImage);
        };
        TilemapProject.prototype.updateTile = function (tile) {
            this.onChange();
            var existing = this.resolveProjectTileByInternalID(tile.internalID);
            if (existing) {
                this.state.tiles.update(existing.id, tile);
                if (existing.id !== tile.id || !pxt.sprite.bitmapEquals(existing.bitmap, tile.bitmap)) {
                    for (var _i = 0, _a = this.getAssets("tilemap" /* Tilemap */); _i < _a.length; _i++) {
                        var tm = _a[_i];
                        if (tm.data.tileset.tiles.some(function (t) { return t.internalID === tile.internalID; })) {
                            tm.data.tileset.tiles = tm.data.tileset.tiles.map(function (t) { return t.internalID === tile.internalID ? tile : t; });
                            this.updateTilemap(tm.id, tm.data);
                        }
                    }
                }
                return tile;
            }
            return null;
        };
        TilemapProject.prototype.deleteTile = function (id) {
            this.onChange();
            this.state.tiles.removeByID(id);
        };
        TilemapProject.prototype.getProjectTilesetJRes = function () {
            var blob = {};
            this.state.tiles.serializeToJRes(blob);
            this.state.tilemaps.serializeToJRes(blob);
            blob["*"] = {
                "mimeType": "image/x-mkcd-f4",
                "dataEncoding": "base64",
                "namespace": pxt.sprite.TILE_NAMESPACE
            };
            return blob;
        };
        TilemapProject.prototype.getProjectAssetsJRes = function () {
            var blob = {};
            this.state.images.serializeToJRes(blob);
            this.state.animations.serializeToJRes(blob);
            blob["*"] = {
                "mimeType": "image/x-mkcd-f4",
                "dataEncoding": "base64",
                "namespace": pxt.sprite.IMAGES_NAMESPACE
            };
            return blob;
        };
        TilemapProject.prototype.getTilemap = function (id) {
            return this.state.tilemaps.getByID(id);
        };
        TilemapProject.prototype.updateTilemap = function (id, data) {
            var existing = this.state.tilemaps.getByID(id);
            if (existing) {
                this.onChange();
                var newValue = __assign(__assign({}, existing), { data: data });
                this.state.tilemaps.update(id, newValue);
                return newValue;
            }
            return null;
        };
        TilemapProject.prototype.createNewTilemap = function (name, tileWidth, width, height) {
            if (width === void 0) { width = 16; }
            if (height === void 0) { height = 16; }
            return this.createNewTilemapFromData(this.blankTilemap(tileWidth, width, height), name);
        };
        TilemapProject.prototype.blankTilemap = function (tileWidth, width, height) {
            if (width === void 0) { width = 16; }
            if (height === void 0) { height = 16; }
            var tilemap = new pxt.sprite.Tilemap(width, height);
            var layers = new pxt.sprite.Bitmap(width, height);
            var tileset = {
                tileWidth: tileWidth,
                tiles: [this.getTransparency(tileWidth)]
            };
            return new pxt.sprite.TilemapData(tilemap, tileset, layers.data());
        };
        TilemapProject.prototype.resolveTile = function (id) {
            return this.lookupAsset("tile" /* Tile */, id);
        };
        TilemapProject.prototype.resolveProjectTileByInternalID = function (id) {
            return this.state.tiles.getSnapshot(function (tile) { return tile.internalID === id; })[0];
        };
        TilemapProject.prototype.resolveTileByBitmap = function (data) {
            var dataString = pxt.sprite.base64EncodeBitmap(data);
            return this.state.tiles.getSnapshot(function (tile) { return tile.jresData === dataString; })[0];
        };
        TilemapProject.prototype.getTransparency = function (tileWidth) {
            var id = pxt.sprite.TILE_NAMESPACE + ".transparency" + tileWidth;
            var tile = this.state.tiles.getByID(id);
            if (!tile) {
                var bitmap = new pxt.sprite.Bitmap(tileWidth, tileWidth).data();
                tile = {
                    internalID: this.getNewInternalId(),
                    id: id,
                    type: "tile" /* Tile */,
                    bitmap: bitmap,
                    jresData: pxt.sprite.base64EncodeBitmap(bitmap),
                    meta: {},
                    isProjectTile: true
                };
                return this.state.tiles.add(tile);
            }
            return tile;
        };
        TilemapProject.prototype.createNewTilemapFromData = function (data, name) {
            this.onChange();
            var id = this.generateNewID("tilemap" /* Tilemap */, name || lf("level"));
            this.state.tilemaps.add({
                internalID: this.getNewInternalId(),
                id: id,
                type: "tilemap" /* Tilemap */,
                meta: {
                    displayName: id
                },
                data: data
            });
            return [id, data];
        };
        TilemapProject.prototype.cloneState = function () {
            return {
                revision: this.state.revision,
                images: this.state.images.clone(),
                tilemaps: this.state.tilemaps.clone(),
                animations: this.state.animations.clone(),
                tiles: this.state.tiles.clone(),
            };
        };
        TilemapProject.prototype.undo = function () {
            if (this.state.revision !== this.committedState.revision) {
                this.pushUndo();
            }
            if (this.undoStack.length) {
                var undo = this.undoStack.pop();
                this.state.tiles.applyDiff(undo.tiles, true);
                this.state.images.applyDiff(undo.images, true);
                this.state.tilemaps.applyDiff(undo.tilemaps, true);
                this.state.animations.applyDiff(undo.animations, true);
                this.state.revision = undo.beforeRevision;
                this.redoStack.push(undo);
                this.committedState = this.cloneState();
                this.needsRebuild = true;
            }
        };
        TilemapProject.prototype.redo = function () {
            if (this.redoStack.length) {
                var redo = this.redoStack.pop();
                this.state.tiles.applyDiff(redo.tiles);
                this.state.images.applyDiff(redo.images);
                this.state.tilemaps.applyDiff(redo.tilemaps);
                this.state.animations.applyDiff(redo.animations);
                this.state.revision = redo.afterRevision;
                this.undoStack.push(redo);
                this.committedState = this.cloneState();
                this.needsRebuild = true;
            }
        };
        TilemapProject.prototype.pushUndo = function () {
            if (this.undoStack.length && this.committedState.revision === this.state.revision)
                return;
            this.redoStack = [];
            this.undoStack.push({
                beforeRevision: this.committedState.revision,
                afterRevision: this.state.revision,
                tiles: this.state.tiles.diff(this.committedState.tiles),
                images: this.state.images.diff(this.committedState.images),
                tilemaps: this.state.tilemaps.diff(this.committedState.tilemaps),
                animations: this.state.animations.diff(this.committedState.animations)
            });
            this.committedState = this.cloneState();
            this.cleanupTemporaryAssets();
        };
        TilemapProject.prototype.revision = function () {
            return this.state.revision;
        };
        TilemapProject.prototype.encodeTilemap = function (tilemap, id) {
            var tm = tilemap.tilemap.data();
            var data = new Uint8ClampedArray(5 + tm.data.length + tilemap.layers.data.length);
            data[0] = tilemap.tileset.tileWidth;
            data[1] = tm.width & 0xff;
            data[2] = (tm.width >> 8) & 0xff;
            data[3] = tm.height & 0xff;
            data[4] = (tm.height >> 8) & 0xff;
            data.set(tm.data, 5);
            data.set(tilemap.layers.data, 5 + tm.data.length);
            return {
                id: id,
                mimeType: TILEMAP_MIME_TYPE,
                data: btoa(pxt.sprite.uint8ArrayToHex(data)),
                tileset: tilemap.tileset.tiles.map(function (t) { return t.id; })
            };
        };
        TilemapProject.prototype.forceUpdate = function () {
            this.onChange();
        };
        TilemapProject.prototype.isNameTaken = function (assetType, name) {
            switch (assetType) {
                case "image" /* Image */:
                    return this.state.images.isIDTaken(name) || this.gallery.images.isIDTaken(name);
                case "tile" /* Tile */:
                    return this.state.tiles.isIDTaken(name) || this.gallery.tiles.isIDTaken(name);
                case "tilemap" /* Tilemap */:
                    return this.state.tilemaps.isIDTaken(name) || this.gallery.tilemaps.isIDTaken(name);
                case "animation" /* Animation */:
                    return this.state.animations.isIDTaken(name) || this.gallery.animations.isIDTaken(name);
            }
        };
        /**
         * Checks if the asset is referenced anywhere in the user's code.
         * If an asset is referenced in any block we return true, as well
         * as if a tile is used in any tilemap.
         *
         * Ways to reference an asset in TS/Python:
         *
         * TILES:
         * myTiles.shortId
         * assets.tile`shortId`
         * assets.tile`displayName`
         *
         * IMAGES:
         * assets.image`shortId`
         * assets.image`displayName`
         *
         * ANIMATIONS:
         * assets.animation`shortId`
         * assets.animation`displayName`
         *
         * TILEMAPS:
         * tilemap`shortId`
         *
         * @param skipIDs string[] a list of string ids (block id, asset id, or file name) to ignore
         **/
        TilemapProject.prototype.isAssetUsed = function (asset, files, skipIDs) {
            var _a, _b, _c, _d, _e;
            var blockIds = ((_b = (_a = asset.meta) === null || _a === void 0 ? void 0 : _a.blockIDs) === null || _b === void 0 ? void 0 : _b.filter(function (id) { var _a; return !skipIDs || ((_a = skipIDs) === null || _a === void 0 ? void 0 : _a.indexOf(id)) < 0; })) || [];
            if (blockIds.length > 0)
                return true;
            if (asset.type == "tile" /* Tile */) {
                for (var _i = 0, _f = this.getAssets("tilemap" /* Tilemap */); _i < _f.length; _i++) {
                    var tm = _f[_i];
                    if (((_c = skipIDs) === null || _c === void 0 ? void 0 : _c.indexOf(tm.id)) >= 0) {
                        continue;
                    }
                    else if (tm.data.tileset.tiles.some(function (t) { return t.internalID === asset.internalID; })) {
                        return true;
                    }
                }
            }
            if (files) {
                var shortId = getShortIDForAsset(asset);
                var displayName = ((_d = asset.meta) === null || _d === void 0 ? void 0 : _d.displayName) || "";
                var assetTsRefs = void 0;
                switch (asset.type) {
                    case "tile" /* Tile */:
                        assetTsRefs = "myTiles." + shortId + "|assets.tile`" + shortId + "`";
                        if (displayName)
                            assetTsRefs += "|assets.tile`" + displayName + "`";
                        break;
                    case "tilemap" /* Tilemap */:
                        assetTsRefs = "tilemap`" + shortId + "`";
                        break;
                    case "animation" /* Animation */:
                        assetTsRefs = "assets.animation`" + shortId + "`";
                        if (displayName)
                            assetTsRefs += "|assets.animation`" + displayName + "`";
                        break;
                    default:
                        assetTsRefs = "assets.image`" + shortId + "`";
                        if (displayName)
                            assetTsRefs += "|assets.image`" + displayName + "`";
                        break;
                }
                var assetTsRegex = new RegExp(assetTsRefs, "gm");
                var assetPyRefs = void 0;
                switch (asset.type) {
                    case "tile" /* Tile */:
                        assetPyRefs = "myTiles." + shortId + "|assets.tile(\"\"\"" + shortId + "\"\"\")";
                        if (displayName)
                            assetPyRefs += "|assets.tile(\"\"\"" + displayName + "\"\"\")";
                        break;
                    case "tilemap" /* Tilemap */:
                        assetPyRefs = "assets.tilemap(\"\"\"" + shortId + "\"\"\")";
                        break;
                    case "animation" /* Animation */:
                        assetPyRefs = "assets.animation(\"\"\"" + shortId + "\"\"\")";
                        if (displayName)
                            assetPyRefs += "|assets.animation(\"\"\"" + displayName + "\"\"\")";
                        break;
                    default:
                        assetPyRefs = "assets.image(\"\"\"" + shortId + "\"\"\")";
                        if (displayName)
                            assetPyRefs += "|assets.image(\"\"\"" + displayName + "\"\"\")";
                        break;
                }
                var assetPyRegex = new RegExp(assetPyRefs, "gm");
                for (var _g = 0, _h = Object.keys(files); _g < _h.length; _g++) {
                    var filename = _h[_g];
                    if (((_e = skipIDs) === null || _e === void 0 ? void 0 : _e.indexOf(filename)) >= 0)
                        continue;
                    var f = files[filename];
                    // Match .ts files that are not generated (.g.ts)
                    if (filename.match(/((?!\.g).{2}|^.{0,1})\.ts$/i)) {
                        if (f.content.match(assetTsRegex))
                            return true;
                    }
                    else if (filename.endsWith(".py")) {
                        if (f.content.match(assetPyRegex))
                            return true;
                    }
                }
            }
            return false;
        };
        TilemapProject.prototype.lookupAsset = function (assetType, name) {
            switch (assetType) {
                case "image" /* Image */:
                    return this.state.images.getByID(name) || this.gallery.images.getByID(name);
                case "tile" /* Tile */:
                    return this.state.tiles.getByID(name) || this.gallery.tiles.getByID(name);
                case "tilemap" /* Tilemap */:
                    return this.state.tilemaps.getByID(name) || this.gallery.tilemaps.getByID(name);
                case "animation" /* Animation */:
                    return this.state.animations.getByID(name) || this.gallery.animations.getByID(name);
            }
        };
        TilemapProject.prototype.lookupAssetByName = function (assetType, name) {
            switch (assetType) {
                case "image" /* Image */:
                    return this.state.images.getByDisplayName(name);
                case "tile" /* Tile */:
                    return this.state.tiles.getByDisplayName(name);
                case "tilemap" /* Tilemap */:
                    return this.state.tilemaps.getByDisplayName(name);
                case "animation" /* Animation */:
                    return this.state.animations.getByDisplayName(name);
            }
        };
        TilemapProject.prototype.getAssets = function (type) {
            switch (type) {
                case "image" /* Image */: return this.state.images.getSnapshot();
                case "tile" /* Tile */: return this.state.tiles.getSnapshot();
                case "tilemap" /* Tilemap */: return this.state.tilemaps.getSnapshot();
                case "animation" /* Animation */: return this.state.animations.getSnapshot();
            }
        };
        TilemapProject.prototype.lookupBlockAsset = function (type, blockID) {
            var filter = function (a) { var _a, _b; return ((_b = (_a = a.meta) === null || _a === void 0 ? void 0 : _a.blockIDs) === null || _b === void 0 ? void 0 : _b.indexOf(blockID)) !== -1; };
            switch (type) {
                case "image" /* Image */: return this.state.images.getSnapshot(filter)[0];
                case "tile" /* Tile */: return this.state.tiles.getSnapshot(filter)[0];
                case "tilemap" /* Tilemap */: return this.state.tilemaps.getSnapshot(filter)[0];
                case "animation" /* Animation */: return this.state.animations.getSnapshot(filter)[0];
            }
        };
        TilemapProject.prototype.updateAsset = function (asset) {
            this.onChange();
            switch (asset.type) {
                case "image" /* Image */:
                    return this.state.images.update(asset.id, asset);
                case "tile" /* Tile */:
                    return this.updateTile(asset);
                case "tilemap" /* Tilemap */:
                    return this.state.tilemaps.update(asset.id, asset);
                case "animation" /* Animation */:
                    return this.state.animations.update(asset.id, asset);
            }
        };
        TilemapProject.prototype.duplicateAsset = function (asset) {
            var _a;
            this.onChange();
            var clone = cloneAsset(asset);
            var displayName = (_a = clone.meta) === null || _a === void 0 ? void 0 : _a.displayName;
            var newAsset;
            switch (asset.type) {
                case "image" /* Image */:
                    newAsset = this.createNewProjectImage(clone.bitmap, displayName);
                    break;
                case "tile" /* Tile */:
                    newAsset = this.createNewTile(clone.bitmap, null, displayName);
                    break;
                case "tilemap" /* Tilemap */:
                    var _b = this.createNewTilemapFromData(clone.data, displayName), id = _b[0], tilemap = _b[1];
                    newAsset = this.getTilemap(id);
                    break;
                case "animation" /* Animation */:
                    newAsset = this.createNewAnimationFromData(clone.frames, clone.interval, displayName);
            }
            return newAsset;
        };
        TilemapProject.prototype.removeAsset = function (asset) {
            this.onChange();
            switch (asset.type) {
                case "image" /* Image */:
                    return this.state.images.removeByID(asset.id);
                case "tile" /* Tile */:
                    return this.state.tiles.removeByID(asset.id);
                case "tilemap" /* Tilemap */:
                    return this.state.tilemaps.removeByID(asset.id);
                case "animation" /* Animation */:
                    return this.state.animations.removeByID(asset.id);
            }
        };
        TilemapProject.prototype.addChangeListener = function (asset, listener) {
            switch (asset.type) {
                case "image" /* Image */:
                    this.state.images.addListener(asset.internalID, listener);
                    break;
                case "tile" /* Tile */:
                    this.state.tiles.addListener(asset.internalID, listener);
                    break;
                case "tilemap" /* Tilemap */:
                    this.state.tilemaps.addListener(asset.internalID, listener);
                    break;
                case "animation" /* Animation */:
                    this.state.animations.addListener(asset.internalID, listener);
                    break;
            }
        };
        TilemapProject.prototype.removeChangeListener = function (type, listener) {
            switch (type) {
                case "image" /* Image */:
                    this.state.images.removeListener(listener);
                    break;
                case "tile" /* Tile */:
                    this.state.tiles.removeListener(listener);
                    break;
                case "tilemap" /* Tilemap */:
                    this.state.tilemaps.removeListener(listener);
                    break;
                case "animation" /* Animation */:
                    this.state.animations.removeListener(listener);
                    break;
            }
        };
        TilemapProject.prototype.loadPackage = function (pack) {
            var _this = this;
            var allPackages = pack.sortedDeps();
            this.extensionTileSets = [];
            for (var _i = 0, allPackages_1 = allPackages; _i < allPackages_1.length; _i++) {
                var dep = allPackages_1[_i];
                var isProject = dep.id === "this";
                var images = this.readImages(dep.parseJRes(), isProject);
                for (var _a = 0, images_1 = images; _a < images_1.length; _a++) {
                    var image = images_1[_a];
                    if (image.type === "tile" /* Tile */) {
                        if (isProject) {
                            this.state.tiles.add(image);
                        }
                        else {
                            this.gallery.tiles.add(image);
                        }
                    }
                    else if (image.type === "image" /* Image */) {
                        if (isProject) {
                            this.state.images.add(image);
                        }
                        else {
                            this.gallery.images.add(image);
                        }
                    }
                    else {
                        if (isProject) {
                            this.state.animations.add(image);
                        }
                        else {
                            this.gallery.animations.add(image);
                        }
                    }
                }
            }
            for (var _b = 0, _c = getTilemaps(pack.parseJRes()); _b < _c.length; _b++) {
                var tm = _c[_b];
                this.state.tilemaps.add({
                    internalID: this.getNewInternalId(),
                    type: "tilemap" /* Tilemap */,
                    id: tm.id,
                    meta: {
                        // For tilemaps, use the id as the display name for backwards compat
                        displayName: tm.displayName || tm.id
                    },
                    data: decodeTilemap(tm, function (id) { return _this.resolveTile(id); })
                });
            }
            this.committedState = this.cloneState();
            this.undoStack = [];
            this.redoStack = [];
        };
        TilemapProject.prototype.loadTilemapJRes = function (jres, skipDuplicates) {
            var _this = this;
            if (skipDuplicates === void 0) { skipDuplicates = false; }
            jres = pxt.inflateJRes(jres);
            var tiles = this.readImages(jres, true).filter(function (im) { return im.type === "tile" /* Tile */; });
            // If we are loading JRES into an existing project (i.e. in multipart tutorials)
            // we need to correct the tile ids because the user may have created new tiles
            // and taken some of the ids that were used by the tutorial author
            var tileMapping = {};
            for (var _i = 0, tiles_1 = tiles; _i < tiles_1.length; _i++) {
                var tile = tiles_1[_i];
                if (skipDuplicates) {
                    var existing = this.resolveTileByBitmap(tile.bitmap);
                    if (existing) {
                        tileMapping[tile.id] = existing.id;
                        continue;
                    }
                }
                var newTile = this.createNewTile(tile.bitmap, tile.id, tile.meta.displayName);
                if (newTile.id !== tile.id) {
                    tileMapping[tile.id] = newTile.id;
                }
            }
            for (var _a = 0, _b = getTilemaps(jres); _a < _b.length; _a++) {
                var tm = _b[_a];
                this.state.tilemaps.add({
                    internalID: this.getNewInternalId(),
                    type: "tilemap" /* Tilemap */,
                    id: tm.id,
                    meta: {
                        // For tilemaps, use the id as the display name for backwards compat
                        displayName: tm.displayName || tm.id
                    },
                    data: decodeTilemap(tm, function (id) {
                        if (tileMapping[id]) {
                            id = tileMapping[id];
                        }
                        return _this.resolveTile(id);
                    })
                });
            }
        };
        TilemapProject.prototype.loadAssetsJRes = function (jres) {
            for (var _i = 0, _a = Object.keys(jres); _i < _a.length; _i++) {
                var key = _a[_i];
                var entry = jres[key];
                if (entry.mimeType === IMAGE_MIME_TYPE) {
                    this.state.images.add({
                        internalID: this.getNewInternalId(),
                        type: "image" /* Image */,
                        id: entry.id,
                        meta: {
                            displayName: entry.displayName
                        },
                        jresData: entry.data,
                        bitmap: pxt.sprite.getBitmapFromJResURL("data:" + IMAGE_MIME_TYPE + ";base64," + entry.data).data()
                    });
                }
            }
        };
        TilemapProject.prototype.removeInactiveBlockAssets = function (activeBlockIDs) {
            cleanupCollection(this.state.images);
            cleanupCollection(this.state.tiles);
            cleanupCollection(this.state.tilemaps);
            cleanupCollection(this.state.animations);
            function cleanupCollection(collection) {
                var inactiveAssets = collection.getSnapshot(function (asset) { var _a; return !asset.meta.displayName && ((_a = asset.meta.blockIDs) === null || _a === void 0 ? void 0 : _a.some(function (id) { return activeBlockIDs.indexOf(id) === -1; })); });
                var toRemove = [];
                for (var _i = 0, inactiveAssets_1 = inactiveAssets; _i < inactiveAssets_1.length; _i++) {
                    var asset = inactiveAssets_1[_i];
                    if (asset.meta.blockIDs.length === 1)
                        toRemove.push(asset);
                    else {
                        asset.meta.blockIDs = asset.meta.blockIDs.filter(function (id) { return activeBlockIDs.indexOf(id) !== -1; });
                        if (asset.meta.blockIDs.length === 0)
                            toRemove.push(asset);
                    }
                }
                for (var _a = 0, toRemove_1 = toRemove; _a < toRemove_1.length; _a++) {
                    var asset = toRemove_1[_a];
                    collection.removeByID(asset.id);
                }
            }
        };
        TilemapProject.prototype.generateNewID = function (type, varPrefix, namespaceString) {
            varPrefix = varPrefix.replace(/\d+$/, "");
            var prefix = namespaceString ? namespaceString + "." + varPrefix : varPrefix;
            var index = 1;
            while (this.isNameTaken(type, prefix + index)) {
                ++index;
            }
            return prefix + index;
        };
        TilemapProject.prototype.onChange = function () {
            this.needsRebuild = true;
            this.state.revision = this.nextID++;
        };
        TilemapProject.prototype.readImages = function (allJRes, isProjectFile) {
            if (isProjectFile === void 0) { isProjectFile = false; }
            var assets = [];
            for (var _i = 0, _a = Object.keys(allJRes); _i < _a.length; _i++) {
                var key = _a[_i];
                var entry = allJRes[key];
                if (entry.tilemapTile) {
                    var tile = {
                        internalID: this.getNewInternalId(),
                        type: "tile" /* Tile */,
                        jresData: entry.data,
                        id: entry.id,
                        meta: {
                            displayName: entry.displayName
                        },
                        bitmap: pxt.sprite.getBitmapFromJResURL("data:" + IMAGE_MIME_TYPE + ";base64," + entry.data).data(),
                        isProjectTile: isProjectFile
                    };
                    assets.push(tile);
                }
                else if (entry.mimeType === IMAGE_MIME_TYPE) {
                    assets.push({
                        internalID: this.getNewInternalId(),
                        type: "image" /* Image */,
                        jresData: entry.data,
                        meta: {
                            displayName: entry.displayName
                        },
                        id: entry.id,
                        bitmap: pxt.sprite.getBitmapFromJResURL("data:" + IMAGE_MIME_TYPE + ";base64," + entry.data).data()
                    });
                }
                else if (entry.mimeType === ANIMATION_MIME_TYPE) {
                    assets.push(__assign(__assign({}, decodeAnimation(entry)), { internalID: this.getNewInternalId() }));
                }
            }
            return assets;
        };
        TilemapProject.prototype.cleanupTemporaryAssets = function () {
            var orphaned = this.state.images.getSnapshot(function (image) { var _a; return !image.meta.displayName && !((_a = image.meta.blockIDs) === null || _a === void 0 ? void 0 : _a.length); });
            for (var _i = 0, orphaned_1 = orphaned; _i < orphaned_1.length; _i++) {
                var image = orphaned_1[_i];
                this.state.images.removeByID(image.id);
            }
        };
        return TilemapProject;
    }());
    pxt.TilemapProject = TilemapProject;
    function getTilemaps(allJRes) {
        var res = [];
        for (var _i = 0, _a = Object.keys(allJRes); _i < _a.length; _i++) {
            var key = _a[_i];
            var entry = allJRes[key];
            if (entry.mimeType === TILEMAP_MIME_TYPE) {
                res.push(entry);
            }
        }
        return res;
    }
    function emitTilemapsFromJRes(jres) {
        var entries = Object.keys(jres);
        var indent = "    ";
        var out = "";
        var tilemapEntries = [];
        var tileEntries = [];
        for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
            var key = entries_1[_i];
            if (key === "*")
                continue;
            var entry = jres[key];
            if (entry.tilemapTile) {
                // FIXME: we should get the "image.ofBuffer" and blockIdentity from pxtarget probably
                out += indent + "//% fixedInstance jres blockIdentity=images._tile\n";
                out += indent + "export const " + key + " = image.ofBuffer(hex``);\n";
                tileEntries.push({ keys: [entry.displayName, getShortIDCore("tile" /* Tile */, key)], expression: key });
            }
            if (entry.mimeType === TILEMAP_MIME_TYPE) {
                var tm = decodeTilemap(entry);
                tilemapEntries.push({ keys: [entry.displayName, getShortIDCore("tilemap" /* Tilemap */, entry.id)], expression: pxt.sprite.encodeTilemap(tm, "typescript") });
            }
        }
        if (tilemapEntries.length) {
            out += emitFactoryHelper("tilemap", tilemapEntries);
        }
        if (tileEntries.length) {
            out += emitFactoryHelper("tile", tileEntries);
        }
        var warning = lf("Auto-generated code. Do not edit.");
        return "// " + warning + "\nnamespace " + pxt.sprite.TILE_NAMESPACE + " {\n" + out + "\n}\n// " + warning + "\n";
    }
    pxt.emitTilemapsFromJRes = emitTilemapsFromJRes;
    function emitProjectImages(jres) {
        var entries = Object.keys(jres);
        var out = "";
        var imageEntries = [];
        var animationEntries = [];
        for (var _i = 0, entries_2 = entries; _i < entries_2.length; _i++) {
            var key = entries_2[_i];
            if (key === "*")
                continue;
            var entry = jres[key];
            if (typeof entry === "string" || entry.mimeType === IMAGE_MIME_TYPE) {
                var expression = void 0;
                var factoryKeys = [getShortIDCore("image" /* Image */, key)];
                if (typeof entry === "string") {
                    expression = pxt.sprite.bitmapToImageLiteral(pxt.sprite.getBitmapFromJResURL(entry), "typescript");
                }
                else {
                    expression = pxt.sprite.bitmapToImageLiteral(pxt.sprite.getBitmapFromJResURL(entry.data), "typescript");
                    factoryKeys.push(entry.displayName);
                }
                imageEntries.push({
                    keys: factoryKeys,
                    expression: expression
                });
            }
            else if (entry.mimeType === ANIMATION_MIME_TYPE) {
                var animation = decodeAnimation(entry);
                animationEntries.push({
                    keys: [entry.displayName, getShortIDCore("animation" /* Animation */, key)],
                    expression: "[" + animation.frames.map(function (f) {
                        return pxt.sprite.bitmapToImageLiteral(pxt.sprite.Bitmap.fromData(f), "typescript");
                    }).join(", ") + "]"
                });
            }
        }
        var warning = lf("Auto-generated code. Do not edit.");
        out += emitFactoryHelper("image", imageEntries);
        out += emitFactoryHelper("animation", animationEntries);
        return "// " + warning + "\nnamespace " + pxt.sprite.IMAGES_NAMESPACE + " {\n" + out + "\n}\n// " + warning + "\n";
    }
    pxt.emitProjectImages = emitProjectImages;
    function emitFactoryHelper(factoryKind, expressions) {
        var indent = "    ";
        return "\n" +
            (indent + "helpers._registerFactory(\"" + factoryKind + "\", function(name: string) {\n") +
            ("" + indent + indent + "switch(helpers.stringTrim(name)) {\n") +
            expressions.map(function (t) {
                return t.keys.filter(function (k) { return !!k; }).map(function (key) { return "" + indent + indent + indent + "case \"" + key + "\":"; }).join("\n") +
                    ("return " + t.expression + ";");
            }).join("\n") + "\n" +
            ("" + indent + indent + "}\n") +
            ("" + indent + indent + "return null;\n") +
            (indent + "})\n");
    }
    function cloneBitmap(bitmap) {
        return pxt.sprite.Bitmap.fromData(bitmap).copy().data();
    }
    function decodeTilemap(jres, resolveTile) {
        var hex = atob(jres.data);
        var bytes = pxt.U.fromHex(hex);
        var tmWidth = bytes[1] | (bytes[2] << 8);
        var tmHeight = bytes[3] | (bytes[4] << 8);
        var tileset = {
            tileWidth: bytes[0],
            tiles: jres.tileset.map(function (id) { return (resolveTile && resolveTile(id)) || { id: id }; })
        };
        var tilemapStart = 5;
        var tmData = bytes.slice(tilemapStart, tilemapStart + tmWidth * tmHeight);
        var tilemap = new pxt.sprite.Tilemap(tmWidth, tmHeight, 0, 0, new Uint8ClampedArray(tmData));
        var bitmapData = bytes.slice(tilemapStart + tmData.length);
        var layers = new pxt.sprite.Bitmap(tmWidth, tmHeight, 0, 0, new Uint8ClampedArray(bitmapData)).data();
        return new pxt.sprite.TilemapData(tilemap, tileset, layers);
    }
    function cloneAsset(asset) {
        asset.meta = Object.assign({}, asset.meta);
        switch (asset.type) {
            case "tile" /* Tile */:
            case "image" /* Image */:
                return __assign(__assign({}, asset), { bitmap: cloneBitmap(asset.bitmap) });
            case "animation" /* Animation */:
                return __assign(__assign({}, asset), { frames: asset.frames.map(function (frame) { return cloneBitmap(frame); }) });
            case "tilemap" /* Tilemap */:
                return __assign(__assign({}, asset), { data: asset.data.cloneData() });
        }
    }
    function addAssetToJRes(asset, allJRes) {
        // Get the last part of the fully qualified name
        var id = asset.id.substr(asset.id.lastIndexOf(".") + 1);
        switch (asset.type) {
            case "image" /* Image */:
                allJRes[id] = asset.jresData;
                if (asset.meta.displayName) {
                    allJRes[id] = {
                        data: asset.jresData,
                        mimeType: IMAGE_MIME_TYPE,
                        displayName: asset.meta.displayName
                    };
                }
                break;
            case "tile" /* Tile */:
                allJRes[id] = {
                    data: asset.jresData,
                    mimeType: IMAGE_MIME_TYPE,
                    tilemapTile: true,
                    displayName: asset.meta.displayName
                };
                break;
            case "tilemap" /* Tilemap */:
                // we include the full ID for tilemaps
                var serialized = serializeTilemap(asset.data, asset.id, asset.meta.displayName);
                allJRes[serialized.id] = serialized;
                break;
            case "animation" /* Animation */:
                allJRes[id] = serializeAnimation(asset);
                break;
        }
    }
    function assetEquals(a, b) {
        if (a == b)
            return true;
        if (a.id !== b.id || a.type !== b.type ||
            !arrayEquals(a.meta.tags, b.meta.tags) ||
            !arrayEquals(a.meta.blockIDs, b.meta.blockIDs) ||
            a.meta.displayName !== b.meta.displayName)
            return false;
        switch (a.type) {
            case "image" /* Image */:
            case "tile" /* Tile */:
                return pxt.sprite.bitmapEquals(a.bitmap, b.bitmap);
            case "animation" /* Animation */:
                var bAnimation = b;
                return a.interval === bAnimation.interval && arrayEquals(a.frames, bAnimation.frames, pxt.sprite.bitmapEquals);
            case "tilemap" /* Tilemap */:
                return a.data.equals(b.data);
        }
    }
    pxt.assetEquals = assetEquals;
    function validateAssetName(name) {
        if (!name)
            return false;
        // Covers all punctuation/whitespace except for "-", "_", and " "
        var bannedRegex = /[\u0000-\u001f\u0021-\u002c\u002e\u002f\u003a-\u0040\u005b-\u005e\u0060\u007b-\u007f]/;
        return !bannedRegex.test(name);
    }
    pxt.validateAssetName = validateAssetName;
    function getShortIDForAsset(asset) {
        return getShortIDCore(asset.type, asset.id);
    }
    pxt.getShortIDForAsset = getShortIDForAsset;
    function getShortIDCore(assetType, id) {
        var prefix;
        switch (assetType) {
            case "image" /* Image */:
                prefix = pxt.sprite.IMAGES_NAMESPACE + ".";
                break;
            case "tile" /* Tile */:
                prefix = pxt.sprite.TILE_NAMESPACE + ".";
                break;
            case "tilemap" /* Tilemap */:
                prefix = "";
                break;
            case "animation" /* Animation */:
                prefix = pxt.sprite.ANIMATION_NAMESPACE + ".";
                break;
        }
        if (prefix && id.startsWith(prefix)) {
            var short = id.substr(prefix.length);
            if (short.indexOf(".") === -1)
                return short;
        }
        return id;
    }
    function arrayEquals(a, b, compare) {
        if (compare === void 0) { compare = function (c, d) { return c === d; }; }
        if (a == b)
            return true;
        if (!a && b || !b && a || a.length !== b.length)
            return false;
        for (var i = 0; i < a.length; i++) {
            if (!compare(a[i], b[i]))
                return false;
        }
        return true;
    }
    function serializeTilemap(tilemap, id, name) {
        var tm = tilemap.tilemap.data();
        var data = new Uint8ClampedArray(5 + tm.data.length + tilemap.layers.data.length);
        data[0] = tilemap.tileset.tileWidth;
        data[1] = tm.width & 0xff;
        data[2] = (tm.width >> 8) & 0xff;
        data[3] = tm.height & 0xff;
        data[4] = (tm.height >> 8) & 0xff;
        data.set(tm.data, 5);
        data.set(tilemap.layers.data, 5 + tm.data.length);
        return {
            id: id,
            mimeType: TILEMAP_MIME_TYPE,
            data: btoa(pxt.sprite.uint8ArrayToHex(data)),
            tileset: tilemap.tileset.tiles.map(function (t) { return t.id; }),
            displayName: name
        };
    }
    function serializeAnimation(asset) {
        var encodedFrames = asset.frames.map(function (frame) { return frame.data; });
        var data = new Uint8ClampedArray(8 + encodedFrames[0].length * encodedFrames.length);
        // interval, frame width, frame height, frame count
        set16Bit(data, 0, asset.interval);
        set16Bit(data, 2, asset.frames[0].width);
        set16Bit(data, 4, asset.frames[0].height);
        set16Bit(data, 6, asset.frames.length);
        var offset = 8;
        encodedFrames.forEach(function (buf) {
            data.set(buf, offset);
            offset += buf.length;
        });
        return {
            namespace: asset.id.substr(0, asset.id.lastIndexOf(".")),
            id: asset.id.substr(asset.id.lastIndexOf(".") + 1),
            mimeType: ANIMATION_MIME_TYPE,
            data: btoa(pxt.sprite.uint8ArrayToHex(data)),
            displayName: asset.meta.displayName
        };
    }
    function decodeAnimation(jres) {
        var hex = atob(jres.data);
        var bytes = new Uint8ClampedArray(pxt.U.fromHex(hex));
        var interval = read16Bit(bytes, 0);
        var frameWidth = read16Bit(bytes, 2);
        var frameHeight = read16Bit(bytes, 4);
        var frameCount = read16Bit(bytes, 6);
        var frameLength = (frameWidth * frameHeight) >> 1;
        var offset = 8;
        var decodedFrames = [];
        for (var i = 0; i < frameCount; i++) {
            var frameData = bytes.slice(offset, offset + frameLength);
            decodedFrames.push({
                x0: 0,
                y0: 0,
                width: frameWidth,
                height: frameHeight,
                data: frameData
            });
            offset += frameLength;
        }
        return {
            type: "animation" /* Animation */,
            internalID: 0,
            id: jres.id,
            interval: interval,
            frames: decodedFrames,
            meta: {
                displayName: jres.displayName
            }
        };
    }
    function set16Bit(buf, offset, value) {
        buf[offset] = value & 0xff;
        buf[offset + 1] = (value >> 8) & 0xff;
    }
    function read16Bit(buf, offset) {
        return buf[offset] | (buf[offset + 1] << 8);
    }
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var toolbox;
    (function (toolbox) {
        toolbox.blockColors = {
            loops: '#107c10',
            logic: '#006970',
            math: '#712672',
            variables: '#A80000',
            functions: '#005a9e',
            text: '#996600',
            arrays: '#A94400',
            advanced: '#3c3c3c',
            addpackage: '#717171',
            search: '#000',
            debug: '#e03030',
            default: '#dddddd',
            topblocks: '#aa8f00',
            recipes: '#717171'
        };
        toolbox.blockIcons = {
            loops: '\uf01e',
            logic: '\uf074',
            math: '\uf1ec',
            variables: '\uf039',
            functions: '\uf109',
            text: '\uf035',
            arrays: '\uf0cb',
            advancedcollapsed: '\uf078',
            advancedexpanded: '\uf077',
            more: '\uf141',
            addpackage: '\uf055',
            search: '\uf002',
            debug: '\uf111',
            default: '\uf12e',
            topblocks: '\uf005',
            recipes: '\uf0eb'
        };
        var toolboxStyleBuffer = '';
        function appendToolboxIconCss(className, i) {
            if (toolboxStyleBuffer.indexOf(className) > -1)
                return;
            if (i.length === 1) {
                var icon = pxt.Util.unicodeToChar(i);
                toolboxStyleBuffer += "\n                .blocklyTreeIcon." + className + "::before {\n                    content: \"" + icon + "\";\n                }\n            ";
            }
            else {
                toolboxStyleBuffer += "\n                .blocklyTreeIcon." + className + " {\n                    background-image: url(\"" + pxt.Util.pathJoin(pxt.webConfig.commitCdnUrl, encodeURI(i)) + "\")!important;\n                    width: 30px;\n                    height: 100%;\n                    background-size: 20px !important;\n                    background-repeat: no-repeat !important;\n                    background-position: 50% 50% !important;\n                }\n            ";
            }
        }
        toolbox.appendToolboxIconCss = appendToolboxIconCss;
        function getNamespaceColor(ns) {
            ns = ns.toLowerCase();
            if (pxt.appTarget.appTheme.blockColors && pxt.appTarget.appTheme.blockColors[ns])
                return pxt.appTarget.appTheme.blockColors[ns];
            if (pxt.toolbox.blockColors[ns])
                return pxt.toolbox.blockColors[ns];
            return "";
        }
        toolbox.getNamespaceColor = getNamespaceColor;
        function getNamespaceIcon(ns) {
            ns = ns.toLowerCase();
            if (pxt.appTarget.appTheme.blockIcons && pxt.appTarget.appTheme.blockIcons[ns]) {
                return pxt.appTarget.appTheme.blockIcons[ns];
            }
            if (pxt.toolbox.blockIcons[ns]) {
                return pxt.toolbox.blockIcons[ns];
            }
            return "";
        }
        toolbox.getNamespaceIcon = getNamespaceIcon;
        function advancedTitle() { return pxt.Util.lf("{id:category}Advanced"); }
        toolbox.advancedTitle = advancedTitle;
        function addPackageTitle() { return pxt.Util.lf("{id:category}Extensions"); }
        toolbox.addPackageTitle = addPackageTitle;
        function recipesTitle() { return pxt.Util.lf("{id:category}Tutorials"); }
        toolbox.recipesTitle = recipesTitle;
        /**
         * Convert blockly hue to rgb
         */
        function convertColor(colour) {
            colour = parseHex(colour); // convert from 0x hex encoding if necessary
            var hue = parseInt(colour);
            if (!isNaN(hue)) {
                return hueToRgb(hue);
            }
            return colour;
        }
        toolbox.convertColor = convertColor;
        function hueToRgb(hue) {
            var HSV_SATURATION = 0.45;
            var HSV_VALUE = 0.65 * 255;
            var rgbArray = hsvToRgb(hue, HSV_SATURATION, HSV_VALUE);
            return "#" + componentToHex(rgbArray[0]) + componentToHex(rgbArray[1]) + componentToHex(rgbArray[2]);
        }
        toolbox.hueToRgb = hueToRgb;
        /**
         * Converts an HSV triplet to an RGB array.  V is brightness because b is
         *   reserved for blue in RGB.
         * Closure's HSV to RGB function: https://github.com/google/closure-library/blob/master/closure/goog/color/color.js#L613
         */
        function hsvToRgb(h, s, brightness) {
            var red = 0;
            var green = 0;
            var blue = 0;
            if (s == 0) {
                red = brightness;
                green = brightness;
                blue = brightness;
            }
            else {
                var sextant = Math.floor(h / 60);
                var remainder = (h / 60) - sextant;
                var val1 = brightness * (1 - s);
                var val2 = brightness * (1 - (s * remainder));
                var val3 = brightness * (1 - (s * (1 - remainder)));
                switch (sextant) {
                    case 1:
                        red = val2;
                        green = brightness;
                        blue = val1;
                        break;
                    case 2:
                        red = val1;
                        green = brightness;
                        blue = val3;
                        break;
                    case 3:
                        red = val1;
                        green = val2;
                        blue = brightness;
                        break;
                    case 4:
                        red = val3;
                        green = val1;
                        blue = brightness;
                        break;
                    case 5:
                        red = brightness;
                        green = val1;
                        blue = val2;
                        break;
                    case 6:
                    case 0:
                        red = brightness;
                        green = val3;
                        blue = val1;
                        break;
                }
            }
            return [Math.floor(red), Math.floor(green), Math.floor(blue)];
        }
        function componentToHex(c) {
            var hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        }
        function parseHex(s) {
            if (!s)
                return "#000000";
            if (s.substring(0, 2) == "0x")
                return "#" + s.substring(2);
            return s;
        }
        function fadeColor(hex, luminosity, lighten) {
            // #ABC => ABC
            hex = hex.replace(/[^0-9a-f]/gi, '');
            // ABC => AABBCC
            if (hex.length < 6)
                hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
            // tweak
            var rgb = "#";
            for (var i = 0; i < 3; i++) {
                var c = parseInt(hex.substr(i * 2, 2), 16);
                c = Math.round(Math.min(Math.max(0, lighten ? c + (c * luminosity) : c - (c * luminosity)), 255));
                var cStr = c.toString(16);
                rgb += ("00" + cStr).substr(cStr.length);
            }
            return rgb;
        }
        toolbox.fadeColor = fadeColor;
    })(toolbox = pxt.toolbox || (pxt.toolbox = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var tutorial;
    (function (tutorial) {
        var _h2Regex = /^##[^#](.*)$([\s\S]*?)(?=^##[^#]|$(?![\r\n]))/gmi;
        var _h3Regex = /^###[^#](.*)$([\s\S]*?)(?=^###[^#]|$(?![\r\n]))/gmi;
        function parseTutorial(tutorialmd) {
            var _a = parseTutorialMetadata(tutorialmd), metadata = _a.metadata, body = _a.body;
            var _b = parseTutorialMarkdown(body, metadata), steps = _b.steps, activities = _b.activities;
            var title = parseTutorialTitle(body);
            if (!steps)
                return undefined; // error parsing steps
            // collect code and infer editor
            var _c = computeBodyMetadata(body), code = _c.code, templateCode = _c.templateCode, editor = _c.editor, language = _c.language, jres = _c.jres;
            // noDiffs legacy
            if (metadata.diffs === true // enabled in tutorial
                || (metadata.diffs !== false && metadata.noDiffs !== true // not disabled
                    && ((editor == pxt.BLOCKS_PROJECT_NAME && pxt.appTarget.appTheme.tutorialBlocksDiff) //blocks enabled always
                        || (editor != pxt.BLOCKS_PROJECT_NAME && pxt.appTarget.appTheme.tutorialTextDiff) // text enabled always
                    ))) {
                diffify(steps, activities);
            }
            // strip hidden snippets
            steps.forEach(function (step) {
                step.contentMd = stripHiddenSnippets(step.contentMd);
                step.headerContentMd = stripHiddenSnippets(step.headerContentMd);
                step.hintContentMd = stripHiddenSnippets(step.hintContentMd);
            });
            return {
                editor: editor,
                title: title,
                steps: steps,
                activities: activities,
                code: code,
                templateCode: templateCode,
                metadata: metadata,
                language: language,
                jres: jres
            };
        }
        tutorial.parseTutorial = parseTutorial;
        function computeBodyMetadata(body) {
            // collect code and infer editor
            var editor = undefined;
            var regex = /``` *(sim|block|blocks|filterblocks|spy|ghost|typescript|ts|js|javascript|template|python|jres)?\s*\n([\s\S]*?)\n```/gmi;
            var jres;
            var code = [];
            var templateCode;
            var language;
            var idx = 0;
            // Concatenate all blocks in separate code blocks and decompile so we can detect what blocks are used (for the toolbox)
            body
                .replace(/((?!.)\s)+/g, "\n")
                .replace(regex, function (m0, m1, m2) {
                switch (m1) {
                    case "block":
                    case "blocks":
                    case "filterblocks":
                        if (!checkTutorialEditor(pxt.BLOCKS_PROJECT_NAME))
                            return undefined;
                        break;
                    case "spy":
                    case "python":
                        if (!checkTutorialEditor(pxt.PYTHON_PROJECT_NAME))
                            return undefined;
                        if (m1 == "python")
                            language = m1;
                        break;
                    case "typescript":
                    case "ts":
                    case "javascript":
                    case "js":
                        if (!checkTutorialEditor(pxt.JAVASCRIPT_PROJECT_NAME))
                            return undefined;
                        break;
                    case "template":
                        templateCode = m2;
                        break;
                    case "jres":
                        jres = m2;
                        break;
                }
                code.push(m1 == "python" ? "\n" + m2 + "\n" : "{\n" + m2 + "\n}");
                idx++;
                return "";
            });
            // default to blocks
            editor = editor || pxt.BLOCKS_PROJECT_NAME;
            return { code: code, templateCode: templateCode, editor: editor, language: language, jres: jres };
            function checkTutorialEditor(expected) {
                if (editor && editor != expected) {
                    pxt.debug("tutorial ambiguous: contains snippets of different types");
                    return false;
                }
                else {
                    editor = expected;
                    return true;
                }
            }
        }
        function diffify(steps, activities) {
            // convert typescript snippets into diff snippets
            var lastSrc = undefined;
            steps.forEach(function (step, stepi) {
                // reset diff on each activity or when requested
                if (step.resetDiff
                    || (activities && activities.find(function (activity) { return activity.step == stepi; })))
                    lastSrc = undefined;
                // extract typescript snippet from hint or content
                if (step.hintContentMd) {
                    var s = convertSnippetToDiff(step.hintContentMd);
                    if (s && s != step.hintContentMd) {
                        step.hintContentMd = s;
                        return;
                    }
                }
                if (step.headerContentMd) {
                    var s = convertSnippetToDiff(step.headerContentMd);
                    if (s && s != step.headerContentMd) {
                        step.headerContentMd = s;
                        return;
                    }
                }
            });
            function convertSnippetToDiff(src) {
                var diffClasses = {
                    "typescript": "diff",
                    "spy": "diffspy",
                    "blocks": "diffblocks",
                    "python": "diff"
                };
                var highlightRx = /\s*(\/\/|#)\s*@highlight/gm;
                if (!src)
                    return src;
                return src
                    .replace(/```(typescript|spy|python|blocks|ghost|template)((?:.|[\r\n])+)```/, function (m, type, code) {
                    var fileA = lastSrc;
                    var hidden = /^(template|ghost)$/.test(type);
                    var hasHighlight = highlightRx.test(code);
                    code = code.replace(/^\n+/, '').replace(/\n+$/, ''); // always trim lines
                    if (hasHighlight)
                        code = code.replace(highlightRx, '');
                    lastSrc = code;
                    if (!fileA || hasHighlight || hidden)
                        return m; // leave unchanged or reuse highlight info
                    else
                        return "```" + diffClasses[type] + "\n" + fileA + "\n----------\n" + code + "\n```";
                });
            }
        }
        function parseTutorialTitle(tutorialmd) {
            var title = tutorialmd.match(/^#[^#](.*)$/mi);
            return title && title.length > 1 ? title[1] : null;
        }
        function parseTutorialMarkdown(tutorialmd, metadata) {
            if (metadata && metadata.activities) {
                // tutorial with "## ACTIVITY", "### STEP" syntax
                return parseTutorialActivities(tutorialmd, metadata);
            }
            else {
                // tutorial with "## STEP" syntax
                var steps = parseTutorialSteps(tutorialmd, null, metadata);
                // old: "### STEP" syntax (no activity header guaranteed)
                if (!steps || steps.length < 1)
                    steps = parseTutorialSteps(tutorialmd, _h3Regex, metadata);
                return { steps: steps, activities: null };
            }
        }
        function parseTutorialActivities(markdown, metadata) {
            var stepInfo = [];
            var activityInfo = [];
            markdown.replace(_h2Regex, function (match, name, activity) {
                var i = activityInfo.length;
                activityInfo.push({
                    name: name || lf("Activity {0}", i),
                    step: stepInfo.length
                });
                var steps = parseTutorialSteps(activity, _h3Regex, metadata);
                steps = steps.map(function (step) {
                    step.activity = i;
                    return step;
                });
                stepInfo = stepInfo.concat(steps);
                return "";
            });
            return { steps: stepInfo, activities: activityInfo };
        }
        function parseTutorialSteps(markdown, regex, metadata) {
            // use regex override if present
            var stepRegex = regex || _h2Regex;
            var stepInfo = [];
            markdown.replace(stepRegex, function (match, flags, step) {
                step = step.trim();
                var _a = parseTutorialHint(step, metadata && metadata.explicitHints), header = _a.header, hint = _a.hint;
                var info = {
                    contentMd: step,
                    headerContentMd: header
                };
                if (/@(fullscreen|unplugged|showdialog|showhint)/i.test(flags))
                    info.showHint = true;
                if (/@(unplugged|showdialog)/i.test(flags))
                    info.showDialog = true;
                if (/@tutorialCompleted/.test(flags))
                    info.tutorialCompleted = true;
                if (/@resetDiff/.test(flags))
                    info.resetDiff = true;
                if (hint)
                    info.hintContentMd = hint;
                stepInfo.push(info);
                return "";
            });
            if (markdown.indexOf("# Not found") == 0) {
                pxt.debug("tutorial not found");
                return undefined;
            }
            return stepInfo;
        }
        function parseTutorialHint(step, explicitHints) {
            // remove hidden code sections
            step = stripHiddenSnippets(step);
            var header = step, hint;
            if (explicitHints) {
                // hint is explicitly set with hint syntax "#### ~ tutorialhint" and terminates at the next heading
                var hintTextRegex = /#+ ~ tutorialhint([\s\S]*)/i;
                header = step.replace(hintTextRegex, function (f, m) {
                    hint = m;
                    return "";
                });
            }
            else {
                // everything after the first ``` section OR the first image is treated as a "hint"
                var hintTextRegex = /(^[\s\S]*?\S)\s*((```|\!\[[\s\S]+?\]\(\S+?\))[\s\S]*)/mi;
                var hintText = step.match(hintTextRegex);
                if (hintText && hintText.length > 2) {
                    header = hintText[1].trim();
                    hint = hintText[2].trim();
                }
            }
            return { header: header, hint: hint };
        }
        /* Remove hidden snippets from text */
        function stripHiddenSnippets(str) {
            if (!str)
                return str;
            var hiddenSnippetRegex = /```(filterblocks|package|ghost|config|template|jres)\s*\n([\s\S]*?)\n```/gmi;
            return str.replace(hiddenSnippetRegex, '').trim();
        }
        /*
            Parses metadata at the beginning of tutorial markown. Metadata is a key-value
            pair in the format: `### @KEY VALUE`
        */
        function parseTutorialMetadata(tutorialmd) {
            var metadataRegex = /### @(\S+) ([ \S]+)/gi;
            var m = {};
            var body = tutorialmd.replace(metadataRegex, function (f, k, v) {
                try {
                    m[k] = JSON.parse(v);
                }
                catch (_a) {
                    m[k] = v;
                }
                return "";
            });
            var metadata = m;
            if (metadata.explicitHints !== undefined
                && pxt.appTarget.appTheme
                && pxt.appTarget.appTheme.tutorialExplicitHints)
                metadata.explicitHints = true;
            return { metadata: metadata, body: body };
        }
        function highlight(pre) {
            var text = pre.textContent;
            // collapse image python/js literales
            text = text.replace(/img\s*\(\s*"{3}(.|\n)*"{3}\s*\)/g, "img(\"\"\" \"\"\")");
            text = text.replace(/img\s*\s*`(.|\n)*`\s*/g, "img` `");
            if (!/@highlight/.test(text)) { // shortcut, nothing to do
                pre.textContent = text;
                return;
            }
            // render lines
            pre.textContent = ""; // clear up and rebuild
            var lines = text.split('\n');
            for (var i = 0; i < lines.length; ++i) {
                if (i > 0 && i < lines.length)
                    pre.appendChild(document.createTextNode("\n"));
                var line = lines[i];
                if (/@highlight/.test(line)) {
                    // highlight next line
                    line = lines[++i];
                    if (line !== undefined) {
                        var span = document.createElement("span");
                        span.className = "highlight-line";
                        span.textContent = line;
                        pre.appendChild(span);
                    }
                }
                else {
                    pre.appendChild(document.createTextNode(line));
                }
            }
        }
        tutorial.highlight = highlight;
        function getTutorialOptions(md, tutorialId, filename, reportId, recipe) {
            var tutorialInfo = pxt.tutorial.parseTutorial(md);
            if (!tutorialInfo)
                throw new Error(lf("Invalid tutorial format"));
            var tutorialOptions = {
                tutorial: tutorialId,
                tutorialName: tutorialInfo.title || filename,
                tutorialReportId: reportId,
                tutorialStep: 0,
                tutorialReady: true,
                tutorialHintCounter: 0,
                tutorialStepInfo: tutorialInfo.steps,
                tutorialActivityInfo: tutorialInfo.activities,
                tutorialMd: md,
                tutorialCode: tutorialInfo.code,
                tutorialRecipe: !!recipe,
                templateCode: tutorialInfo.templateCode,
                autoexpandStep: true,
                metadata: tutorialInfo.metadata,
                language: tutorialInfo.language,
                jres: tutorialInfo.jres
            };
            return { options: tutorialOptions, editor: tutorialInfo.editor };
        }
        tutorial.getTutorialOptions = getTutorialOptions;
        function parseCachedTutorialInfo(json, id) {
            var cachedInfo = pxt.Util.jsonTryParse(json);
            if (!cachedInfo)
                return Promise.resolve();
            return pxt.BrowserUtils.tutorialInfoDbAsync()
                .then(function (db) {
                if (id && cachedInfo[id]) {
                    var info = cachedInfo[id];
                    if (info.usedBlocks && info.hash)
                        db.setWithHashAsync(id, info.usedBlocks, info.hash);
                }
                else {
                    for (var _i = 0, _a = Object.keys(cachedInfo); _i < _a.length; _i++) {
                        var key = _a[_i];
                        var info = cachedInfo[key];
                        if (info.usedBlocks && info.hash)
                            db.setWithHashAsync(key, info.usedBlocks, info.hash);
                    }
                }
            }).catch(function (err) { });
        }
        tutorial.parseCachedTutorialInfo = parseCachedTutorialInfo;
        function resolveLocalizedMarkdown(ghid, files, fileName) {
            // if non-default language, find localized file if any
            var mfn = (fileName || ghid.fileName || "README") + ".md";
            var md = undefined;
            var _a = pxt.Util.normalizeLanguageCode(pxt.Util.userLanguage()), initialLang = _a[0], baseLang = _a[1], initialLangLowerCase = _a[2];
            if (initialLang && baseLang && initialLangLowerCase) {
                //We need to first search base lang and then intial Lang
                //Example: normalizeLanguageCode en-IN  will return ["en-IN", "en", "en-in"] and nb will be returned as ["nb"]
                md = files["_locales/" + initialLang + "/" + mfn]
                    || files["_locales/" + initialLangLowerCase + "/" + mfn]
                    || files["_locales/" + baseLang + "/" + mfn];
            }
            else {
                md = files["_locales/" + initialLang + "/" + mfn];
            }
            md = md || files[mfn];
            return md;
        }
        tutorial.resolveLocalizedMarkdown = resolveLocalizedMarkdown;
    })(tutorial = pxt.tutorial || (pxt.tutorial = {}));
})(pxt || (pxt = {}));
/// <reference path='../pxtcompiler/ext-typescript/lib/typescriptServices.d.ts' />
var ts;
(function (ts) {
    var pxtc;
    (function (pxtc) {
        function flattenDiagnosticMessageText(messageText, newLine) {
            if (typeof messageText === "string") {
                return messageText;
            }
            else {
                var diagnosticChain = messageText;
                var result = "";
                var indent = 0;
                while (diagnosticChain) {
                    if (indent) {
                        result += newLine;
                        for (var i = 0; i < indent; i++) {
                            result += "  ";
                        }
                    }
                    result += diagnosticChain.messageText;
                    indent++;
                    diagnosticChain = diagnosticChain.next;
                }
                return result;
            }
        }
        pxtc.flattenDiagnosticMessageText = flattenDiagnosticMessageText;
        var ScriptTarget;
        (function (ScriptTarget) {
            ScriptTarget[ScriptTarget["ES3"] = 0] = "ES3";
            ScriptTarget[ScriptTarget["ES5"] = 1] = "ES5";
            ScriptTarget[ScriptTarget["ES6"] = 2] = "ES6";
            ScriptTarget[ScriptTarget["ES2015"] = 2] = "ES2015";
            ScriptTarget[ScriptTarget["Latest"] = 2] = "Latest";
        })(ScriptTarget = pxtc.ScriptTarget || (pxtc.ScriptTarget = {}));
        function isIdentifierStart(ch, languageVersion) {
            return ch >= 65 /* A */ && ch <= 90 /* Z */ || ch >= 97 /* a */ && ch <= 122 /* z */ ||
                ch === 36 /* $ */ || ch === 95 /* _ */ ||
                ch > 127 /* maxAsciiCharacter */ && isUnicodeIdentifierStart(ch, languageVersion);
        }
        pxtc.isIdentifierStart = isIdentifierStart;
        function isIdentifierPart(ch, languageVersion) {
            return ch >= 65 /* A */ && ch <= 90 /* Z */ || ch >= 97 /* a */ && ch <= 122 /* z */ ||
                ch >= 48 /* _0 */ && ch <= 57 /* _9 */ || ch === 36 /* $ */ || ch === 95 /* _ */ ||
                ch > 127 /* maxAsciiCharacter */ && isUnicodeIdentifierPart(ch, languageVersion);
        }
        pxtc.isIdentifierPart = isIdentifierPart;
        pxtc.reservedWords = ["abstract", "any", "as", "break",
            "case", "catch", "class", "continue", "const", "constructor", "debugger",
            "declare", "default", "delete", "do", "else", "enum", "export", "extends",
            "false", "finally", "for", "from", "function", "get", "if", "implements",
            "import", "in", "instanceof", "interface", "is", "let", "module", "namespace",
            "new", "null", "package", "private", "protected", "public",
            "require", "global", "return", "set", "static", "super", "switch",
            "symbol", "this", "throw", "true", "try", "type", "typeof", "var", "void",
            "while", "with", "yield", "async", "await", "of",
            // PXT Specific
            "Math"];
        pxtc.keywordTypes = ["boolean", "number", "string"];
        function escapeIdentifier(name) {
            if (!name)
                return '_';
            var n = name.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_$]/g, function (a) {
                return ts.pxtc.isIdentifierPart(a.charCodeAt(0), ts.pxtc.ScriptTarget.ES5) ? a : "";
            });
            if (!n || !ts.pxtc.isIdentifierStart(n.charCodeAt(0), ts.pxtc.ScriptTarget.ES5) || pxtc.reservedWords.indexOf(n) !== -1) {
                n = "_" + n;
            }
            return n;
        }
        pxtc.escapeIdentifier = escapeIdentifier;
        var unicodeES5IdentifierStart = [170, 170, 181, 181, 186, 186, 192, 214, 216, 246, 248, 705, 710, 721, 736, 740, 748, 748, 750, 750, 880, 884, 886, 887, 890, 893, 902, 902, 904, 906, 908, 908, 910, 929, 931, 1013, 1015, 1153, 1162, 1319, 1329, 1366, 1369, 1369, 1377, 1415, 1488, 1514, 1520, 1522, 1568, 1610, 1646, 1647, 1649, 1747, 1749, 1749, 1765, 1766, 1774, 1775, 1786, 1788, 1791, 1791, 1808, 1808, 1810, 1839, 1869, 1957, 1969, 1969, 1994, 2026, 2036, 2037, 2042, 2042, 2048, 2069, 2074, 2074, 2084, 2084, 2088, 2088, 2112, 2136, 2208, 2208, 2210, 2220, 2308, 2361, 2365, 2365, 2384, 2384, 2392, 2401, 2417, 2423, 2425, 2431, 2437, 2444, 2447, 2448, 2451, 2472, 2474, 2480, 2482, 2482, 2486, 2489, 2493, 2493, 2510, 2510, 2524, 2525, 2527, 2529, 2544, 2545, 2565, 2570, 2575, 2576, 2579, 2600, 2602, 2608, 2610, 2611, 2613, 2614, 2616, 2617, 2649, 2652, 2654, 2654, 2674, 2676, 2693, 2701, 2703, 2705, 2707, 2728, 2730, 2736, 2738, 2739, 2741, 2745, 2749, 2749, 2768, 2768, 2784, 2785, 2821, 2828, 2831, 2832, 2835, 2856, 2858, 2864, 2866, 2867, 2869, 2873, 2877, 2877, 2908, 2909, 2911, 2913, 2929, 2929, 2947, 2947, 2949, 2954, 2958, 2960, 2962, 2965, 2969, 2970, 2972, 2972, 2974, 2975, 2979, 2980, 2984, 2986, 2990, 3001, 3024, 3024, 3077, 3084, 3086, 3088, 3090, 3112, 3114, 3123, 3125, 3129, 3133, 3133, 3160, 3161, 3168, 3169, 3205, 3212, 3214, 3216, 3218, 3240, 3242, 3251, 3253, 3257, 3261, 3261, 3294, 3294, 3296, 3297, 3313, 3314, 3333, 3340, 3342, 3344, 3346, 3386, 3389, 3389, 3406, 3406, 3424, 3425, 3450, 3455, 3461, 3478, 3482, 3505, 3507, 3515, 3517, 3517, 3520, 3526, 3585, 3632, 3634, 3635, 3648, 3654, 3713, 3714, 3716, 3716, 3719, 3720, 3722, 3722, 3725, 3725, 3732, 3735, 3737, 3743, 3745, 3747, 3749, 3749, 3751, 3751, 3754, 3755, 3757, 3760, 3762, 3763, 3773, 3773, 3776, 3780, 3782, 3782, 3804, 3807, 3840, 3840, 3904, 3911, 3913, 3948, 3976, 3980, 4096, 4138, 4159, 4159, 4176, 4181, 4186, 4189, 4193, 4193, 4197, 4198, 4206, 4208, 4213, 4225, 4238, 4238, 4256, 4293, 4295, 4295, 4301, 4301, 4304, 4346, 4348, 4680, 4682, 4685, 4688, 4694, 4696, 4696, 4698, 4701, 4704, 4744, 4746, 4749, 4752, 4784, 4786, 4789, 4792, 4798, 4800, 4800, 4802, 4805, 4808, 4822, 4824, 4880, 4882, 4885, 4888, 4954, 4992, 5007, 5024, 5108, 5121, 5740, 5743, 5759, 5761, 5786, 5792, 5866, 5870, 5872, 5888, 5900, 5902, 5905, 5920, 5937, 5952, 5969, 5984, 5996, 5998, 6000, 6016, 6067, 6103, 6103, 6108, 6108, 6176, 6263, 6272, 6312, 6314, 6314, 6320, 6389, 6400, 6428, 6480, 6509, 6512, 6516, 6528, 6571, 6593, 6599, 6656, 6678, 6688, 6740, 6823, 6823, 6917, 6963, 6981, 6987, 7043, 7072, 7086, 7087, 7098, 7141, 7168, 7203, 7245, 7247, 7258, 7293, 7401, 7404, 7406, 7409, 7413, 7414, 7424, 7615, 7680, 7957, 7960, 7965, 7968, 8005, 8008, 8013, 8016, 8023, 8025, 8025, 8027, 8027, 8029, 8029, 8031, 8061, 8064, 8116, 8118, 8124, 8126, 8126, 8130, 8132, 8134, 8140, 8144, 8147, 8150, 8155, 8160, 8172, 8178, 8180, 8182, 8188, 8305, 8305, 8319, 8319, 8336, 8348, 8450, 8450, 8455, 8455, 8458, 8467, 8469, 8469, 8473, 8477, 8484, 8484, 8486, 8486, 8488, 8488, 8490, 8493, 8495, 8505, 8508, 8511, 8517, 8521, 8526, 8526, 8544, 8584, 11264, 11310, 11312, 11358, 11360, 11492, 11499, 11502, 11506, 11507, 11520, 11557, 11559, 11559, 11565, 11565, 11568, 11623, 11631, 11631, 11648, 11670, 11680, 11686, 11688, 11694, 11696, 11702, 11704, 11710, 11712, 11718, 11720, 11726, 11728, 11734, 11736, 11742, 11823, 11823, 12293, 12295, 12321, 12329, 12337, 12341, 12344, 12348, 12353, 12438, 12445, 12447, 12449, 12538, 12540, 12543, 12549, 12589, 12593, 12686, 12704, 12730, 12784, 12799, 13312, 19893, 19968, 40908, 40960, 42124, 42192, 42237, 42240, 42508, 42512, 42527, 42538, 42539, 42560, 42606, 42623, 42647, 42656, 42735, 42775, 42783, 42786, 42888, 42891, 42894, 42896, 42899, 42912, 42922, 43000, 43009, 43011, 43013, 43015, 43018, 43020, 43042, 43072, 43123, 43138, 43187, 43250, 43255, 43259, 43259, 43274, 43301, 43312, 43334, 43360, 43388, 43396, 43442, 43471, 43471, 43520, 43560, 43584, 43586, 43588, 43595, 43616, 43638, 43642, 43642, 43648, 43695, 43697, 43697, 43701, 43702, 43705, 43709, 43712, 43712, 43714, 43714, 43739, 43741, 43744, 43754, 43762, 43764, 43777, 43782, 43785, 43790, 43793, 43798, 43808, 43814, 43816, 43822, 43968, 44002, 44032, 55203, 55216, 55238, 55243, 55291, 63744, 64109, 64112, 64217, 64256, 64262, 64275, 64279, 64285, 64285, 64287, 64296, 64298, 64310, 64312, 64316, 64318, 64318, 64320, 64321, 64323, 64324, 64326, 64433, 64467, 64829, 64848, 64911, 64914, 64967, 65008, 65019, 65136, 65140, 65142, 65276, 65313, 65338, 65345, 65370, 65382, 65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500,];
        var unicodeES5IdentifierPart = [170, 170, 181, 181, 186, 186, 192, 214, 216, 246, 248, 705, 710, 721, 736, 740, 748, 748, 750, 750, 768, 884, 886, 887, 890, 893, 902, 902, 904, 906, 908, 908, 910, 929, 931, 1013, 1015, 1153, 1155, 1159, 1162, 1319, 1329, 1366, 1369, 1369, 1377, 1415, 1425, 1469, 1471, 1471, 1473, 1474, 1476, 1477, 1479, 1479, 1488, 1514, 1520, 1522, 1552, 1562, 1568, 1641, 1646, 1747, 1749, 1756, 1759, 1768, 1770, 1788, 1791, 1791, 1808, 1866, 1869, 1969, 1984, 2037, 2042, 2042, 2048, 2093, 2112, 2139, 2208, 2208, 2210, 2220, 2276, 2302, 2304, 2403, 2406, 2415, 2417, 2423, 2425, 2431, 2433, 2435, 2437, 2444, 2447, 2448, 2451, 2472, 2474, 2480, 2482, 2482, 2486, 2489, 2492, 2500, 2503, 2504, 2507, 2510, 2519, 2519, 2524, 2525, 2527, 2531, 2534, 2545, 2561, 2563, 2565, 2570, 2575, 2576, 2579, 2600, 2602, 2608, 2610, 2611, 2613, 2614, 2616, 2617, 2620, 2620, 2622, 2626, 2631, 2632, 2635, 2637, 2641, 2641, 2649, 2652, 2654, 2654, 2662, 2677, 2689, 2691, 2693, 2701, 2703, 2705, 2707, 2728, 2730, 2736, 2738, 2739, 2741, 2745, 2748, 2757, 2759, 2761, 2763, 2765, 2768, 2768, 2784, 2787, 2790, 2799, 2817, 2819, 2821, 2828, 2831, 2832, 2835, 2856, 2858, 2864, 2866, 2867, 2869, 2873, 2876, 2884, 2887, 2888, 2891, 2893, 2902, 2903, 2908, 2909, 2911, 2915, 2918, 2927, 2929, 2929, 2946, 2947, 2949, 2954, 2958, 2960, 2962, 2965, 2969, 2970, 2972, 2972, 2974, 2975, 2979, 2980, 2984, 2986, 2990, 3001, 3006, 3010, 3014, 3016, 3018, 3021, 3024, 3024, 3031, 3031, 3046, 3055, 3073, 3075, 3077, 3084, 3086, 3088, 3090, 3112, 3114, 3123, 3125, 3129, 3133, 3140, 3142, 3144, 3146, 3149, 3157, 3158, 3160, 3161, 3168, 3171, 3174, 3183, 3202, 3203, 3205, 3212, 3214, 3216, 3218, 3240, 3242, 3251, 3253, 3257, 3260, 3268, 3270, 3272, 3274, 3277, 3285, 3286, 3294, 3294, 3296, 3299, 3302, 3311, 3313, 3314, 3330, 3331, 3333, 3340, 3342, 3344, 3346, 3386, 3389, 3396, 3398, 3400, 3402, 3406, 3415, 3415, 3424, 3427, 3430, 3439, 3450, 3455, 3458, 3459, 3461, 3478, 3482, 3505, 3507, 3515, 3517, 3517, 3520, 3526, 3530, 3530, 3535, 3540, 3542, 3542, 3544, 3551, 3570, 3571, 3585, 3642, 3648, 3662, 3664, 3673, 3713, 3714, 3716, 3716, 3719, 3720, 3722, 3722, 3725, 3725, 3732, 3735, 3737, 3743, 3745, 3747, 3749, 3749, 3751, 3751, 3754, 3755, 3757, 3769, 3771, 3773, 3776, 3780, 3782, 3782, 3784, 3789, 3792, 3801, 3804, 3807, 3840, 3840, 3864, 3865, 3872, 3881, 3893, 3893, 3895, 3895, 3897, 3897, 3902, 3911, 3913, 3948, 3953, 3972, 3974, 3991, 3993, 4028, 4038, 4038, 4096, 4169, 4176, 4253, 4256, 4293, 4295, 4295, 4301, 4301, 4304, 4346, 4348, 4680, 4682, 4685, 4688, 4694, 4696, 4696, 4698, 4701, 4704, 4744, 4746, 4749, 4752, 4784, 4786, 4789, 4792, 4798, 4800, 4800, 4802, 4805, 4808, 4822, 4824, 4880, 4882, 4885, 4888, 4954, 4957, 4959, 4992, 5007, 5024, 5108, 5121, 5740, 5743, 5759, 5761, 5786, 5792, 5866, 5870, 5872, 5888, 5900, 5902, 5908, 5920, 5940, 5952, 5971, 5984, 5996, 5998, 6000, 6002, 6003, 6016, 6099, 6103, 6103, 6108, 6109, 6112, 6121, 6155, 6157, 6160, 6169, 6176, 6263, 6272, 6314, 6320, 6389, 6400, 6428, 6432, 6443, 6448, 6459, 6470, 6509, 6512, 6516, 6528, 6571, 6576, 6601, 6608, 6617, 6656, 6683, 6688, 6750, 6752, 6780, 6783, 6793, 6800, 6809, 6823, 6823, 6912, 6987, 6992, 7001, 7019, 7027, 7040, 7155, 7168, 7223, 7232, 7241, 7245, 7293, 7376, 7378, 7380, 7414, 7424, 7654, 7676, 7957, 7960, 7965, 7968, 8005, 8008, 8013, 8016, 8023, 8025, 8025, 8027, 8027, 8029, 8029, 8031, 8061, 8064, 8116, 8118, 8124, 8126, 8126, 8130, 8132, 8134, 8140, 8144, 8147, 8150, 8155, 8160, 8172, 8178, 8180, 8182, 8188, 8204, 8205, 8255, 8256, 8276, 8276, 8305, 8305, 8319, 8319, 8336, 8348, 8400, 8412, 8417, 8417, 8421, 8432, 8450, 8450, 8455, 8455, 8458, 8467, 8469, 8469, 8473, 8477, 8484, 8484, 8486, 8486, 8488, 8488, 8490, 8493, 8495, 8505, 8508, 8511, 8517, 8521, 8526, 8526, 8544, 8584, 11264, 11310, 11312, 11358, 11360, 11492, 11499, 11507, 11520, 11557, 11559, 11559, 11565, 11565, 11568, 11623, 11631, 11631, 11647, 11670, 11680, 11686, 11688, 11694, 11696, 11702, 11704, 11710, 11712, 11718, 11720, 11726, 11728, 11734, 11736, 11742, 11744, 11775, 11823, 11823, 12293, 12295, 12321, 12335, 12337, 12341, 12344, 12348, 12353, 12438, 12441, 12442, 12445, 12447, 12449, 12538, 12540, 12543, 12549, 12589, 12593, 12686, 12704, 12730, 12784, 12799, 13312, 19893, 19968, 40908, 40960, 42124, 42192, 42237, 42240, 42508, 42512, 42539, 42560, 42607, 42612, 42621, 42623, 42647, 42655, 42737, 42775, 42783, 42786, 42888, 42891, 42894, 42896, 42899, 42912, 42922, 43000, 43047, 43072, 43123, 43136, 43204, 43216, 43225, 43232, 43255, 43259, 43259, 43264, 43309, 43312, 43347, 43360, 43388, 43392, 43456, 43471, 43481, 43520, 43574, 43584, 43597, 43600, 43609, 43616, 43638, 43642, 43643, 43648, 43714, 43739, 43741, 43744, 43759, 43762, 43766, 43777, 43782, 43785, 43790, 43793, 43798, 43808, 43814, 43816, 43822, 43968, 44010, 44012, 44013, 44016, 44025, 44032, 55203, 55216, 55238, 55243, 55291, 63744, 64109, 64112, 64217, 64256, 64262, 64275, 64279, 64285, 64296, 64298, 64310, 64312, 64316, 64318, 64318, 64320, 64321, 64323, 64324, 64326, 64433, 64467, 64829, 64848, 64911, 64914, 64967, 65008, 65019, 65024, 65039, 65056, 65062, 65075, 65076, 65101, 65103, 65136, 65140, 65142, 65276, 65296, 65305, 65313, 65338, 65343, 65343, 65345, 65370, 65382, 65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500,];
        var unicodeES3IdentifierStart = [170, 170, 181, 181, 186, 186, 192, 214, 216, 246, 248, 543, 546, 563, 592, 685, 688, 696, 699, 705, 720, 721, 736, 740, 750, 750, 890, 890, 902, 902, 904, 906, 908, 908, 910, 929, 931, 974, 976, 983, 986, 1011, 1024, 1153, 1164, 1220, 1223, 1224, 1227, 1228, 1232, 1269, 1272, 1273, 1329, 1366, 1369, 1369, 1377, 1415, 1488, 1514, 1520, 1522, 1569, 1594, 1600, 1610, 1649, 1747, 1749, 1749, 1765, 1766, 1786, 1788, 1808, 1808, 1810, 1836, 1920, 1957, 2309, 2361, 2365, 2365, 2384, 2384, 2392, 2401, 2437, 2444, 2447, 2448, 2451, 2472, 2474, 2480, 2482, 2482, 2486, 2489, 2524, 2525, 2527, 2529, 2544, 2545, 2565, 2570, 2575, 2576, 2579, 2600, 2602, 2608, 2610, 2611, 2613, 2614, 2616, 2617, 2649, 2652, 2654, 2654, 2674, 2676, 2693, 2699, 2701, 2701, 2703, 2705, 2707, 2728, 2730, 2736, 2738, 2739, 2741, 2745, 2749, 2749, 2768, 2768, 2784, 2784, 2821, 2828, 2831, 2832, 2835, 2856, 2858, 2864, 2866, 2867, 2870, 2873, 2877, 2877, 2908, 2909, 2911, 2913, 2949, 2954, 2958, 2960, 2962, 2965, 2969, 2970, 2972, 2972, 2974, 2975, 2979, 2980, 2984, 2986, 2990, 2997, 2999, 3001, 3077, 3084, 3086, 3088, 3090, 3112, 3114, 3123, 3125, 3129, 3168, 3169, 3205, 3212, 3214, 3216, 3218, 3240, 3242, 3251, 3253, 3257, 3294, 3294, 3296, 3297, 3333, 3340, 3342, 3344, 3346, 3368, 3370, 3385, 3424, 3425, 3461, 3478, 3482, 3505, 3507, 3515, 3517, 3517, 3520, 3526, 3585, 3632, 3634, 3635, 3648, 3654, 3713, 3714, 3716, 3716, 3719, 3720, 3722, 3722, 3725, 3725, 3732, 3735, 3737, 3743, 3745, 3747, 3749, 3749, 3751, 3751, 3754, 3755, 3757, 3760, 3762, 3763, 3773, 3773, 3776, 3780, 3782, 3782, 3804, 3805, 3840, 3840, 3904, 3911, 3913, 3946, 3976, 3979, 4096, 4129, 4131, 4135, 4137, 4138, 4176, 4181, 4256, 4293, 4304, 4342, 4352, 4441, 4447, 4514, 4520, 4601, 4608, 4614, 4616, 4678, 4680, 4680, 4682, 4685, 4688, 4694, 4696, 4696, 4698, 4701, 4704, 4742, 4744, 4744, 4746, 4749, 4752, 4782, 4784, 4784, 4786, 4789, 4792, 4798, 4800, 4800, 4802, 4805, 4808, 4814, 4816, 4822, 4824, 4846, 4848, 4878, 4880, 4880, 4882, 4885, 4888, 4894, 4896, 4934, 4936, 4954, 5024, 5108, 5121, 5740, 5743, 5750, 5761, 5786, 5792, 5866, 6016, 6067, 6176, 6263, 6272, 6312, 7680, 7835, 7840, 7929, 7936, 7957, 7960, 7965, 7968, 8005, 8008, 8013, 8016, 8023, 8025, 8025, 8027, 8027, 8029, 8029, 8031, 8061, 8064, 8116, 8118, 8124, 8126, 8126, 8130, 8132, 8134, 8140, 8144, 8147, 8150, 8155, 8160, 8172, 8178, 8180, 8182, 8188, 8319, 8319, 8450, 8450, 8455, 8455, 8458, 8467, 8469, 8469, 8473, 8477, 8484, 8484, 8486, 8486, 8488, 8488, 8490, 8493, 8495, 8497, 8499, 8505, 8544, 8579, 12293, 12295, 12321, 12329, 12337, 12341, 12344, 12346, 12353, 12436, 12445, 12446, 12449, 12538, 12540, 12542, 12549, 12588, 12593, 12686, 12704, 12727, 13312, 19893, 19968, 40869, 40960, 42124, 44032, 55203, 63744, 64045, 64256, 64262, 64275, 64279, 64285, 64285, 64287, 64296, 64298, 64310, 64312, 64316, 64318, 64318, 64320, 64321, 64323, 64324, 64326, 64433, 64467, 64829, 64848, 64911, 64914, 64967, 65008, 65019, 65136, 65138, 65140, 65140, 65142, 65276, 65313, 65338, 65345, 65370, 65382, 65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500,];
        var unicodeES3IdentifierPart = [170, 170, 181, 181, 186, 186, 192, 214, 216, 246, 248, 543, 546, 563, 592, 685, 688, 696, 699, 705, 720, 721, 736, 740, 750, 750, 768, 846, 864, 866, 890, 890, 902, 902, 904, 906, 908, 908, 910, 929, 931, 974, 976, 983, 986, 1011, 1024, 1153, 1155, 1158, 1164, 1220, 1223, 1224, 1227, 1228, 1232, 1269, 1272, 1273, 1329, 1366, 1369, 1369, 1377, 1415, 1425, 1441, 1443, 1465, 1467, 1469, 1471, 1471, 1473, 1474, 1476, 1476, 1488, 1514, 1520, 1522, 1569, 1594, 1600, 1621, 1632, 1641, 1648, 1747, 1749, 1756, 1759, 1768, 1770, 1773, 1776, 1788, 1808, 1836, 1840, 1866, 1920, 1968, 2305, 2307, 2309, 2361, 2364, 2381, 2384, 2388, 2392, 2403, 2406, 2415, 2433, 2435, 2437, 2444, 2447, 2448, 2451, 2472, 2474, 2480, 2482, 2482, 2486, 2489, 2492, 2492, 2494, 2500, 2503, 2504, 2507, 2509, 2519, 2519, 2524, 2525, 2527, 2531, 2534, 2545, 2562, 2562, 2565, 2570, 2575, 2576, 2579, 2600, 2602, 2608, 2610, 2611, 2613, 2614, 2616, 2617, 2620, 2620, 2622, 2626, 2631, 2632, 2635, 2637, 2649, 2652, 2654, 2654, 2662, 2676, 2689, 2691, 2693, 2699, 2701, 2701, 2703, 2705, 2707, 2728, 2730, 2736, 2738, 2739, 2741, 2745, 2748, 2757, 2759, 2761, 2763, 2765, 2768, 2768, 2784, 2784, 2790, 2799, 2817, 2819, 2821, 2828, 2831, 2832, 2835, 2856, 2858, 2864, 2866, 2867, 2870, 2873, 2876, 2883, 2887, 2888, 2891, 2893, 2902, 2903, 2908, 2909, 2911, 2913, 2918, 2927, 2946, 2947, 2949, 2954, 2958, 2960, 2962, 2965, 2969, 2970, 2972, 2972, 2974, 2975, 2979, 2980, 2984, 2986, 2990, 2997, 2999, 3001, 3006, 3010, 3014, 3016, 3018, 3021, 3031, 3031, 3047, 3055, 3073, 3075, 3077, 3084, 3086, 3088, 3090, 3112, 3114, 3123, 3125, 3129, 3134, 3140, 3142, 3144, 3146, 3149, 3157, 3158, 3168, 3169, 3174, 3183, 3202, 3203, 3205, 3212, 3214, 3216, 3218, 3240, 3242, 3251, 3253, 3257, 3262, 3268, 3270, 3272, 3274, 3277, 3285, 3286, 3294, 3294, 3296, 3297, 3302, 3311, 3330, 3331, 3333, 3340, 3342, 3344, 3346, 3368, 3370, 3385, 3390, 3395, 3398, 3400, 3402, 3405, 3415, 3415, 3424, 3425, 3430, 3439, 3458, 3459, 3461, 3478, 3482, 3505, 3507, 3515, 3517, 3517, 3520, 3526, 3530, 3530, 3535, 3540, 3542, 3542, 3544, 3551, 3570, 3571, 3585, 3642, 3648, 3662, 3664, 3673, 3713, 3714, 3716, 3716, 3719, 3720, 3722, 3722, 3725, 3725, 3732, 3735, 3737, 3743, 3745, 3747, 3749, 3749, 3751, 3751, 3754, 3755, 3757, 3769, 3771, 3773, 3776, 3780, 3782, 3782, 3784, 3789, 3792, 3801, 3804, 3805, 3840, 3840, 3864, 3865, 3872, 3881, 3893, 3893, 3895, 3895, 3897, 3897, 3902, 3911, 3913, 3946, 3953, 3972, 3974, 3979, 3984, 3991, 3993, 4028, 4038, 4038, 4096, 4129, 4131, 4135, 4137, 4138, 4140, 4146, 4150, 4153, 4160, 4169, 4176, 4185, 4256, 4293, 4304, 4342, 4352, 4441, 4447, 4514, 4520, 4601, 4608, 4614, 4616, 4678, 4680, 4680, 4682, 4685, 4688, 4694, 4696, 4696, 4698, 4701, 4704, 4742, 4744, 4744, 4746, 4749, 4752, 4782, 4784, 4784, 4786, 4789, 4792, 4798, 4800, 4800, 4802, 4805, 4808, 4814, 4816, 4822, 4824, 4846, 4848, 4878, 4880, 4880, 4882, 4885, 4888, 4894, 4896, 4934, 4936, 4954, 4969, 4977, 5024, 5108, 5121, 5740, 5743, 5750, 5761, 5786, 5792, 5866, 6016, 6099, 6112, 6121, 6160, 6169, 6176, 6263, 6272, 6313, 7680, 7835, 7840, 7929, 7936, 7957, 7960, 7965, 7968, 8005, 8008, 8013, 8016, 8023, 8025, 8025, 8027, 8027, 8029, 8029, 8031, 8061, 8064, 8116, 8118, 8124, 8126, 8126, 8130, 8132, 8134, 8140, 8144, 8147, 8150, 8155, 8160, 8172, 8178, 8180, 8182, 8188, 8255, 8256, 8319, 8319, 8400, 8412, 8417, 8417, 8450, 8450, 8455, 8455, 8458, 8467, 8469, 8469, 8473, 8477, 8484, 8484, 8486, 8486, 8488, 8488, 8490, 8493, 8495, 8497, 8499, 8505, 8544, 8579, 12293, 12295, 12321, 12335, 12337, 12341, 12344, 12346, 12353, 12436, 12441, 12442, 12445, 12446, 12449, 12542, 12549, 12588, 12593, 12686, 12704, 12727, 13312, 19893, 19968, 40869, 40960, 42124, 44032, 55203, 63744, 64045, 64256, 64262, 64275, 64279, 64285, 64296, 64298, 64310, 64312, 64316, 64318, 64318, 64320, 64321, 64323, 64324, 64326, 64433, 64467, 64829, 64848, 64911, 64914, 64967, 65008, 65019, 65056, 65059, 65075, 65076, 65101, 65103, 65136, 65138, 65140, 65140, 65142, 65276, 65296, 65305, 65313, 65338, 65343, 65343, 65345, 65370, 65381, 65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500,];
        function isUnicodeIdentifierStart(code, languageVersion) {
            return languageVersion >= ScriptTarget.ES5 ?
                lookupInUnicodeMap(code, unicodeES5IdentifierStart) :
                lookupInUnicodeMap(code, unicodeES3IdentifierStart);
        }
        pxtc.isUnicodeIdentifierStart = isUnicodeIdentifierStart;
        function isUnicodeIdentifierPart(code, languageVersion) {
            return languageVersion >= ScriptTarget.ES5 ?
                lookupInUnicodeMap(code, unicodeES5IdentifierPart) :
                lookupInUnicodeMap(code, unicodeES3IdentifierPart);
        }
        function lookupInUnicodeMap(code, map) {
            // Bail out quickly if it couldn't possibly be in the map.
            if (code < map[0]) {
                return false;
            }
            // Perform binary search in one of the Unicode range maps
            var lo = 0;
            var hi = map.length;
            var mid;
            while (lo + 1 < hi) {
                mid = lo + (hi - lo) / 2;
                // mid has to be even to catch a range's beginning
                mid -= mid % 2;
                if (map[mid] <= code && code <= map[mid + 1]) {
                    return true;
                }
                if (code < map[mid]) {
                    hi = mid;
                }
                else {
                    lo = mid + 2;
                }
            }
            return false;
        }
        var DiagnosticCategory;
        (function (DiagnosticCategory) {
            DiagnosticCategory[DiagnosticCategory["Warning"] = 0] = "Warning";
            DiagnosticCategory[DiagnosticCategory["Error"] = 1] = "Error";
            DiagnosticCategory[DiagnosticCategory["Message"] = 2] = "Message";
        })(DiagnosticCategory = pxtc.DiagnosticCategory || (pxtc.DiagnosticCategory = {}));
    })(pxtc = ts.pxtc || (ts.pxtc = {}));
})(ts || (ts = {}));
var pxt;
(function (pxt) {
    var webBluetooth;
    (function (webBluetooth) {
        function isAvailable() {
            return hasConsole() || hasPartialFlash();
        }
        webBluetooth.isAvailable = isAvailable;
        function hasConsole() {
            return !!navigator && !!navigator.bluetooth
                && ('TextDecoder' in window) // needed for reading data
                && pxt.appTarget.appTheme.bluetoothUartConsole
                && pxt.appTarget.appTheme.bluetoothUartFilters
                && pxt.appTarget.appTheme.bluetoothUartFilters.length > 0;
        }
        webBluetooth.hasConsole = hasConsole;
        function hasPartialFlash() {
            return !!navigator && !!navigator.bluetooth
                && !!pxt.appTarget.appTheme.bluetoothPartialFlashing;
        }
        webBluetooth.hasPartialFlash = hasPartialFlash;
        function isValidUUID(id) {
            // https://webbluetoothcg.github.io/web-bluetooth/#uuids
            return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(id);
        }
        webBluetooth.isValidUUID = isValidUUID;
        var BLERemote = /** @class */ (function () {
            function BLERemote(id, aliveToken) {
                this.connectionTimeout = 20000; // 20 second default timeout
                this.connectPromise = undefined;
                this.id = id;
                this.aliveToken = aliveToken;
            }
            BLERemote.prototype.debug = function (msg) {
                pxt.debug(this.id + ": " + msg);
            };
            BLERemote.prototype.alivePromise = function (p) {
                var _this = this;
                return new Promise(function (resolve, reject) {
                    if (_this.aliveToken.isCancelled())
                        reject(new Error());
                    p.then(function (r) { return resolve(r); }, function (e) { return reject(e); });
                });
            };
            BLERemote.prototype.cancelConnect = function () {
                this.connectPromise = undefined;
            };
            BLERemote.prototype.createConnectPromise = function () {
                return Promise.resolve();
            };
            BLERemote.prototype.connectAsync = function () {
                var _this = this;
                if (!this.connectPromise)
                    this.connectPromise = this.alivePromise(this.createConnectPromise());
                return this.connectPromise
                    .timeout(this.connectionTimeout, "connection timeout")
                    .then(function () { return _this.aliveToken.throwIfCancelled(); })
                    .catch(function (e) {
                    // connection failed, clear promise to try again
                    _this.connectPromise = undefined;
                    throw e;
                });
            };
            BLERemote.prototype.disconnect = function () {
                this.cancelConnect();
            };
            BLERemote.prototype.kill = function () {
                this.disconnect();
                this.aliveToken.cancel();
            };
            return BLERemote;
        }());
        webBluetooth.BLERemote = BLERemote;
        var BLEService = /** @class */ (function (_super) {
            __extends(BLEService, _super);
            function BLEService(id, device, autoReconnect) {
                var _this = _super.call(this, id, device.aliveToken) || this;
                _this.device = device;
                _this.autoReconnect = autoReconnect;
                _this.autoReconnectDelay = 1000;
                _this.disconnectOnAutoReconnect = false;
                _this.reconnectPromise = undefined;
                _this.failedConnectionServicesVersion = -1;
                _this.handleDisconnected = _this.handleDisconnected.bind(_this);
                _this.device.device.addEventListener('gattserverdisconnected', _this.handleDisconnected);
                return _this;
            }
            BLEService.prototype.handleDisconnected = function (event) {
                var _this = this;
                if (this.aliveToken.isCancelled())
                    return;
                this.disconnect();
                // give a 1sec for device to reboot
                if (this.autoReconnect && !this.reconnectPromise)
                    this.reconnectPromise =
                        Promise.delay(this.autoReconnectDelay)
                            .then(function () { return _this.exponentialBackoffConnectAsync(8, 500); })
                            .finally(function () { return _this.reconnectPromise = undefined; });
            };
            /* Utils */
            // This function keeps calling "toTry" until promise resolves or has
            // retried "max" number of times. First retry has a delay of "delay" seconds.
            // "success" is called upon success.
            BLEService.prototype.exponentialBackoffConnectAsync = function (max, delay) {
                var _this = this;
                this.debug("retry connect");
                this.aliveToken.throwIfCancelled();
                return this.connectAsync()
                    .then(function () {
                    _this.aliveToken.throwIfCancelled();
                    _this.debug("reconnect success");
                    _this.reconnectPromise = undefined;
                })
                    .catch(function (e) {
                    _this.debug("reconnect error " + e.message);
                    _this.aliveToken.throwIfCancelled();
                    if (!_this.device.isPaired) {
                        _this.debug("give up, device unpaired");
                        _this.reconnectPromise = undefined;
                        return undefined;
                    }
                    if (!_this.autoReconnect) {
                        _this.debug("autoreconnect disabled");
                        _this.reconnectPromise = undefined;
                        return undefined;
                    }
                    if (max == 0) {
                        _this.debug("give up, max tries");
                        _this.reconnectPromise = undefined;
                        return undefined; // give up
                    }
                    // did we already try to reconnect with the current state of services?
                    if (_this.failedConnectionServicesVersion == _this.device.servicesVersion) {
                        _this.debug("services haven't changed, giving up");
                        _this.reconnectPromise = undefined;
                        return undefined;
                    }
                    _this.debug("retry connect " + delay + "ms... (" + max + " tries left)");
                    // record service version if connected
                    if (_this.device.connected)
                        _this.failedConnectionServicesVersion = _this.device.servicesVersion;
                    if (_this.disconnectOnAutoReconnect)
                        _this.device.disconnect();
                    return Promise.delay(delay)
                        .then(function () { return _this.exponentialBackoffConnectAsync(--max, delay * 1.8); });
                });
            };
            return BLEService;
        }(BLERemote));
        webBluetooth.BLEService = BLEService;
        var BLETXService = /** @class */ (function (_super) {
            __extends(BLETXService, _super);
            function BLETXService(id, device, serviceUUID, txCharacteristicUUID) {
                var _this = _super.call(this, id, device, true) || this;
                _this.device = device;
                _this.serviceUUID = serviceUUID;
                _this.txCharacteristicUUID = txCharacteristicUUID;
                _this.handleValueChanged = _this.handleValueChanged.bind(_this);
                return _this;
            }
            BLETXService.prototype.createConnectPromise = function () {
                var _this = this;
                this.debug("connecting");
                return this.device.connectAsync()
                    .then(function () { return _this.alivePromise(_this.device.gatt.getPrimaryService(_this.serviceUUID)); })
                    .then(function (service) {
                    _this.debug("service connected");
                    _this.service = service;
                    return _this.alivePromise(_this.service.getCharacteristic(_this.txCharacteristicUUID));
                }).then(function (txCharacteristic) {
                    _this.debug("tx characteristic connected");
                    _this.txCharacteristic = txCharacteristic;
                    _this.txCharacteristic.addEventListener('characteristicvaluechanged', _this.handleValueChanged);
                    return _this.txCharacteristic.startNotifications();
                }).then(function () {
                    pxt.tickEvent("webble.connected", { id: _this.id });
                });
            };
            BLETXService.prototype.handlePacket = function (data) {
            };
            BLETXService.prototype.handleValueChanged = function (event) {
                var dataView = event.target.value;
                this.handlePacket(dataView);
            };
            BLETXService.prototype.disconnect = function () {
                _super.prototype.disconnect.call(this);
                if (this.txCharacteristic && this.device && this.device.connected) {
                    try {
                        this.txCharacteristic.stopNotifications();
                        this.txCharacteristic.removeEventListener('characteristicvaluechanged', this.handleValueChanged);
                    }
                    catch (e) {
                        pxt.log(this.id + ": error " + e.message);
                    }
                }
                this.service = undefined;
                this.txCharacteristic = undefined;
            };
            return BLETXService;
        }(BLEService));
        webBluetooth.BLETXService = BLETXService;
        var HF2Service = /** @class */ (function (_super) {
            __extends(HF2Service, _super);
            function HF2Service(device) {
                var _this = _super.call(this, "hf2", device, HF2Service.SERVICE_UUID, HF2Service.CHARACTERISTIC_TX_UUID) || this;
                _this.device = device;
                return _this;
            }
            HF2Service.prototype.handlePacket = function (data) {
                var cmd = data.getUint8(0);
                switch (cmd & 0xc0) {
                    case HF2Service.BLEHF2_FLAG_SERIAL_OUT:
                    case HF2Service.BLEHF2_FLAG_SERIAL_ERR:
                        var n = Math.min(data.byteLength - 1, cmd & ~0xc0); // length in bytes
                        var text = "";
                        for (var i = 0; i < n; ++i)
                            text += String.fromCharCode(data.getUint8(i + 1));
                        if (text) {
                            window.postMessage({
                                type: "serial",
                                id: this.device.name || "hf2",
                                data: text
                            }, "*");
                        }
                        break;
                }
            };
            HF2Service.SERVICE_UUID = 'b112f5e6-2679-30da-a26e-0273b6043849';
            HF2Service.CHARACTERISTIC_TX_UUID = 'b112f5e6-2679-30da-a26e-0273b604384a';
            HF2Service.BLEHF2_FLAG_SERIAL_OUT = 0x80;
            HF2Service.BLEHF2_FLAG_SERIAL_ERR = 0xC0;
            return HF2Service;
        }(BLETXService));
        webBluetooth.HF2Service = HF2Service;
        var UARTService = /** @class */ (function (_super) {
            __extends(UARTService, _super);
            function UARTService(device) {
                var _this = _super.call(this, "uart", device, UARTService.SERVICE_UUID, UARTService.CHARACTERISTIC_TX_UUID) || this;
                _this.device = device;
                return _this;
            }
            UARTService.prototype.handlePacket = function (data) {
                var decoder = new window.TextDecoder();
                var text = decoder.decode(data);
                if (text) {
                    window.postMessage({
                        type: "serial",
                        id: this.device.name || "uart",
                        data: text
                    }, "*");
                }
            };
            // Nordic UART BLE service
            UARTService.SERVICE_UUID = '6e400001-b5a3-f393-e0a9-e50e24dcca9e'; // must be lower case!
            UARTService.CHARACTERISTIC_TX_UUID = '6e400002-b5a3-f393-e0a9-e50e24dcca9e';
            return UARTService;
        }(BLETXService));
        webBluetooth.UARTService = UARTService;
        var PartialFlashingState;
        (function (PartialFlashingState) {
            PartialFlashingState[PartialFlashingState["Idle"] = 1] = "Idle";
            PartialFlashingState[PartialFlashingState["StatusRequested"] = 2] = "StatusRequested";
            PartialFlashingState[PartialFlashingState["PairingModeRequested"] = 4] = "PairingModeRequested";
            PartialFlashingState[PartialFlashingState["RegionDALRequested"] = 8] = "RegionDALRequested";
            PartialFlashingState[PartialFlashingState["RegionMakeCodeRequested"] = 16] = "RegionMakeCodeRequested";
            PartialFlashingState[PartialFlashingState["Flash"] = 32] = "Flash";
            PartialFlashingState[PartialFlashingState["EndOfTransmision"] = 64] = "EndOfTransmision";
            PartialFlashingState[PartialFlashingState["USBFlashRequired"] = 128] = "USBFlashRequired";
        })(PartialFlashingState || (PartialFlashingState = {}));
        // https://github.com/microbit-sam/microbit-docs/blob/master/docs/ble/partial-flashing-service.md
        var PartialFlashingService = /** @class */ (function (_super) {
            __extends(PartialFlashingService, _super);
            function PartialFlashingService(device) {
                var _this = _super.call(this, "partial flashing", device, false) || this;
                _this.device = device;
                _this.state = PartialFlashingState.Idle;
                _this.disconnectOnAutoReconnect = true;
                _this.handleCharacteristic = _this.handleCharacteristic.bind(_this);
                return _this;
            }
            PartialFlashingService.prototype.clearFlashData = function () {
                this.version = 0;
                this.mode = 0;
                this.regions = [];
                this.chunkDelay = PartialFlashingService.CHUNK_MIN_DELAY;
                this.hex = undefined;
                this.bin = undefined;
                this.magicOffset = undefined;
                this.dalHash = undefined;
                this.makeCodeHash = undefined;
                this.flashReject = undefined;
                this.flashResolve = undefined;
                this.flashOffset = undefined;
            };
            PartialFlashingService.prototype.createConnectPromise = function () {
                var _this = this;
                this.debug("connecting to partial flash service");
                return this.device.connectAsync()
                    .then(function () { return _this.alivePromise(_this.device.gatt.getPrimaryService(PartialFlashingService.SERVICE_UUID)); })
                    .then(function (service) {
                    _this.debug("connecting to characteristic");
                    return _this.alivePromise(service.getCharacteristic(PartialFlashingService.CHARACTERISTIC_UUID));
                }).then(function (characteristic) {
                    _this.debug("starting notifications");
                    _this.pfCharacteristic = characteristic;
                    _this.pfCharacteristic.startNotifications();
                    _this.pfCharacteristic.addEventListener('characteristicvaluechanged', _this.handleCharacteristic);
                    // looks like we asked the device to reconnect in pairing mode, 
                    // let's see if that worked out
                    if (_this.state == PartialFlashingState.PairingModeRequested) {
                        _this.debug("checking pairing mode");
                        _this.autoReconnect = false;
                        return _this.pfCharacteristic.writeValue(new Uint8Array([PartialFlashingService.STATUS]));
                    }
                    return Promise.resolve();
                });
            };
            PartialFlashingService.prototype.disconnect = function () {
                _super.prototype.disconnect.call(this);
                if (this.flashPacketToken)
                    this.flashPacketToken.cancel();
                if (this.pfCharacteristic && this.device.connected) {
                    try {
                        this.pfCharacteristic.stopNotifications();
                        this.pfCharacteristic.removeEventListener('characteristicvaluechanged', this.handleCharacteristic);
                    }
                    catch (e) {
                        pxt.log("ble: partial flash disconnect error " + e.message);
                    }
                }
                this.pfCharacteristic = undefined;
            };
            // finds block starting with MAGIC_BLOCK
            PartialFlashingService.prototype.findMarker = function (offset, marker) {
                if (!this.bin)
                    return -1;
                for (; offset + marker.length < this.bin.length; offset += 16) {
                    var match = true;
                    for (var j = 0; j < marker.length; ++j) {
                        if (marker[j] != this.bin[offset + j]) {
                            match = false;
                            break;
                        }
                    }
                    if (match)
                        return offset;
                }
                return -1;
            };
            PartialFlashingService.prototype.flashAsync = function (hex) {
                var _this = this;
                if (this.hex) {
                    this.debug("flashing already in progress");
                    return Promise.resolve();
                }
                this.device.pauseLog();
                return this.createFlashPromise(hex)
                    .finally(function () { return _this.device.resumeLogOnDisconnection(); });
            };
            PartialFlashingService.prototype.createFlashPromise = function (hex) {
                var _this = this;
                if (this.hex) {
                    this.debug("flashing already in progress");
                    return Promise.resolve();
                }
                this.clearFlashData();
                this.hex = hex;
                var uf2 = ts.pxtc.UF2.newBlockFile();
                ts.pxtc.UF2.writeHex(uf2, this.hex.split(/\r?\n/));
                var flashUsableEnd = pxt.appTarget.compile.flashUsableEnd;
                this.bin = ts.pxtc.UF2.toBin(pxt.U.stringToUint8Array(ts.pxtc.UF2.serializeFile(uf2)), flashUsableEnd).buf;
                this.debug("bin bytes " + this.bin.length);
                this.magicOffset = this.findMarker(0, PartialFlashingService.MAGIC_MARKER);
                this.debug("magic block " + this.magicOffset.toString(16));
                if (this.magicOffset < 0) {
                    this.debug("magic block not found, not a valid HEX file");
                    pxt.U.userError(lf("Invalid file"));
                }
                this.debug("bytes to flash " + (this.bin.length - this.magicOffset));
                // magic + 16bytes = hash
                var hashOffset = this.magicOffset + PartialFlashingService.MAGIC_MARKER.length;
                this.dalHash = pxt.Util.toHex(this.bin.slice(hashOffset, hashOffset + 8));
                this.makeCodeHash = pxt.Util.toHex(this.bin.slice(hashOffset + 8, hashOffset + 16));
                this.debug("DAL hash " + this.dalHash);
                this.debug("MakeCode hash " + this.makeCodeHash);
                return this.connectAsync()
                    .then(function () { return new Promise(function (resolve, reject) {
                    _this.flashResolve = resolve;
                    _this.flashReject = reject;
                    _this.debug("check service version");
                    _this.state = PartialFlashingState.StatusRequested;
                    return _this.pfCharacteristic.writeValue(new Uint8Array([PartialFlashingService.STATUS]));
                }); }).then(function () { }, function (e) {
                    pxt.log("pf: error " + e.message);
                    _this.clearFlashData();
                });
            };
            PartialFlashingService.prototype.checkStateTransition = function (cmd, acceptedStates) {
                if (!(this.state & acceptedStates)) {
                    this.debug("flash cmd " + cmd + " in state " + this.state.toString(16) + " ");
                    this.flashReject(new Error());
                    this.clearFlashData();
                    return false;
                }
                return true;
            };
            PartialFlashingService.prototype.handleCharacteristic = function (ev) {
                var _this = this;
                // check service is still alive
                if (this.aliveToken.isCancelled()) {
                    this.flashReject(new Error());
                    this.clearFlashData();
                }
                var dataView = event.target.value;
                var packet = new Uint8Array(dataView.buffer);
                var cmd = packet[0];
                //this.debug(`flash state ${this.state} - cmd ${cmd}`);
                if (this.state == PartialFlashingState.Idle) // rogue response
                    return;
                switch (cmd) {
                    case PartialFlashingService.STATUS:
                        if (!this.checkStateTransition(cmd, PartialFlashingState.StatusRequested | PartialFlashingState.PairingModeRequested))
                            return;
                        this.version = packet[1];
                        this.mode = packet[2];
                        this.debug("flash service version " + this.version + " mode " + this.mode);
                        this.debug("reading DAL region");
                        this.state = PartialFlashingState.RegionDALRequested;
                        this.pfCharacteristic.writeValue(new Uint8Array([PartialFlashingService.REGION_INFO, PartialFlashingService.REGION_DAL]))
                            .then(function () { });
                        break;
                    case PartialFlashingService.REGION_INFO:
                        if (!this.checkStateTransition(cmd, PartialFlashingState.RegionDALRequested | PartialFlashingState.RegionMakeCodeRequested))
                            return;
                        var region = this.regions[packet[1]] = {
                            start: (packet[2] << 24) | (packet[3] << 16) | (packet[4] << 8) | packet[5],
                            end: (packet[6] << 24) | (packet[7] << 16) | (packet[8] << 8) | packet[9],
                            hash: pxt.Util.toHex(packet.slice(10))
                        };
                        this.debug("read region " + packet[1] + " start " + region.start.toString(16) + " end " + region.end.toString(16) + " hash " + region.hash);
                        if (packet[1] == PartialFlashingService.REGION_DAL) {
                            if (region.hash != this.dalHash) {
                                pxt.tickEvent("webble.flash.DALrequired");
                                this.debug("DAL hash does not match, partial flashing not possible");
                                this.state = PartialFlashingState.USBFlashRequired;
                                this.flashReject(new Error("USB flashing required"));
                                this.clearFlashData();
                                return;
                            }
                            this.debug("DAL hash match, reading makecode region");
                            this.state = PartialFlashingState.RegionMakeCodeRequested;
                            this.pfCharacteristic.writeValue(new Uint8Array([PartialFlashingService.REGION_INFO, PartialFlashingService.REGION_MAKECODE]))
                                .then(function () { });
                        }
                        else if (packet[1] == PartialFlashingService.REGION_MAKECODE) {
                            if (region.start != this.magicOffset) {
                                this.debug("magic offset and MakeCode region.start not matching");
                                pxt.U.userError(lf("Invalid file"));
                            }
                            if (region.hash == this.makeCodeHash) {
                                pxt.tickEvent("webble.flash.noop");
                                this.debug("MakeCode hash matches, same code!");
                                // always restart even to match USB drag and drop behavior
                                this.debug("restart application mode");
                                this.pfCharacteristic.writeValue(new Uint8Array([PartialFlashingService.RESET, PartialFlashingService.MODE_APPLICATION]))
                                    .then(function () {
                                    _this.state = PartialFlashingState.Idle;
                                    _this.flashResolve();
                                    _this.clearFlashData();
                                });
                            }
                            else {
                                // must be in pairing mode
                                if (this.mode != PartialFlashingService.MODE_PAIRING) {
                                    this.debug("application mode, reset into pairing mode");
                                    this.state = PartialFlashingState.PairingModeRequested;
                                    this.autoReconnect = true;
                                    this.pfCharacteristic.writeValue(new Uint8Array([PartialFlashingService.RESET, PartialFlashingService.MODE_PAIRING]))
                                        .then(function () { });
                                    return;
                                }
                                // ready to flash the data in 4 chunks
                                this.flashOffset = region.start;
                                this.flashPacketNumber = 0;
                                this.debug("starting to flash from address " + this.flashOffset.toString(16));
                                this.flashNextPacket();
                            }
                        }
                        break;
                    case PartialFlashingService.FLASH_DATA:
                        if (!this.checkStateTransition(cmd, PartialFlashingState.Flash))
                            return;
                        switch (packet[1]) {
                            case PartialFlashingService.PACKET_OUT_OF_ORDER:
                                this.debug("packet out of order");
                                this.flashPacketToken.cancel(); // cancel pending writes
                                this.flashPacketNumber += 4;
                                this.chunkDelay = Math.min(this.chunkDelay + 10, PartialFlashingService.CHUNK_MAX_DELAY);
                                this.flashNextPacket();
                                break;
                            case PartialFlashingService.PACKET_WRITTEN:
                                this.chunkDelay = Math.max(this.chunkDelay - 1, PartialFlashingService.CHUNK_MIN_DELAY);
                                // move cursor
                                this.flashOffset += 64;
                                this.flashPacketNumber += 4;
                                if (this.flashOffset >= this.bin.length) {
                                    this.debug('end transmission');
                                    this.state = PartialFlashingState.EndOfTransmision;
                                    this.pfCharacteristic.writeValue(new Uint8Array([PartialFlashingService.END_OF_TRANSMISSION]))
                                        .finally(function () {
                                        // we are done!
                                        if (_this.flashResolve)
                                            _this.flashResolve();
                                        _this.clearFlashData();
                                    });
                                }
                                else { // keep flashing
                                    this.flashNextPacket();
                                }
                                break;
                        }
                        break;
                    default:
                        this.debug("unknown message " + pxt.Util.toHex(packet));
                        this.disconnect();
                        break;
                }
            };
            // send 64bytes in 4 BLE packets
            PartialFlashingService.prototype.flashNextPacket = function () {
                var _this = this;
                this.state = PartialFlashingState.Flash;
                this.flashPacketToken = new pxt.Util.CancellationToken();
                this.flashPacketToken.startOperation();
                var hex = this.bin.slice(this.flashOffset, this.flashOffset + 64);
                this.debug("flashing " + this.flashOffset.toString(16) + " / " + this.bin.length.toString(16) + " " + (((this.flashOffset - this.magicOffset) / (this.bin.length - this.magicOffset) * 100) >> 0) + "%");
                // add delays or chrome crashes
                var chunk = new Uint8Array(20);
                Promise.delay(this.chunkDelay)
                    .then(function () {
                    _this.flashPacketToken.throwIfCancelled();
                    chunk[0] = PartialFlashingService.FLASH_DATA;
                    chunk[1] = (_this.flashOffset >> 8) & 0xff;
                    chunk[2] = (_this.flashOffset >> 0) & 0xff;
                    chunk[3] = _this.flashPacketNumber; // packet number
                    for (var i = 0; i < 16; i++)
                        chunk[4 + i] = hex[i];
                    //this.debug(`chunk 0 ${Util.toHex(chunk)}`)
                    return _this.pfCharacteristic.writeValue(chunk);
                }).delay(this.chunkDelay).then(function () {
                    _this.flashPacketToken.throwIfCancelled();
                    chunk[0] = PartialFlashingService.FLASH_DATA;
                    chunk[1] = (_this.flashOffset >> 24) & 0xff;
                    chunk[2] = (_this.flashOffset >> 16) & 0xff;
                    chunk[3] = _this.flashPacketNumber + 1; // packet number
                    for (var i = 0; i < 16; i++)
                        chunk[4 + i] = hex[16 + i] || 0;
                    //this.debug(`chunk 1 ${Util.toHex(chunk)}`)
                    return _this.pfCharacteristic.writeValue(chunk);
                }).delay(this.chunkDelay).then(function () {
                    _this.flashPacketToken.throwIfCancelled();
                    chunk[0] = PartialFlashingService.FLASH_DATA;
                    chunk[1] = 0;
                    chunk[2] = 0;
                    chunk[3] = _this.flashPacketNumber + 2; // packet number
                    for (var i = 0; i < 16; i++)
                        chunk[4 + i] = hex[32 + i] || 0;
                    //this.debug(`chunk 2 ${Util.toHex(chunk)}`)
                    return _this.pfCharacteristic.writeValue(chunk);
                }).delay(this.chunkDelay).then(function () {
                    _this.flashPacketToken.throwIfCancelled();
                    chunk[0] = PartialFlashingService.FLASH_DATA;
                    chunk[1] = 0;
                    chunk[2] = 0;
                    chunk[3] = _this.flashPacketNumber + 3; // packet number
                    for (var i = 0; i < 16; i++)
                        chunk[4 + i] = hex[48 + i] || 0;
                    //this.debug(`chunk 3 ${Util.toHex(chunk)}`)
                    return _this.pfCharacteristic.writeValue(chunk);
                }).then(function () {
                    // give 500ms (A LOT) to process packet or consider the protocol stuck
                    // and send a bogus package to trigger an out of order situations
                    var currentFlashOffset = _this.flashOffset;
                    var transferDaemonAsync = function () {
                        return Promise.delay(500)
                            .then(function () {
                            // are we stuck?
                            if (currentFlashOffset != _this.flashOffset // transfer ok
                                || _this.flashPacketToken.isCancelled() // transfer cancelled
                                || _this.aliveToken.isCancelled() // service is closed
                                || _this.state != PartialFlashingState.Flash // flash state changed
                            )
                                return Promise.resolve();
                            // we are definitely stuck
                            _this.debug("packet transfer deadlock, force restart");
                            chunk[0] = PartialFlashingService.FLASH_DATA;
                            chunk[1] = 0;
                            chunk[2] = 0;
                            chunk[3] = ~0; // bobus packet number
                            for (var i = 0; i < 16; i++)
                                chunk[4 + i] = 0;
                            return _this.pfCharacteristic.writeValue(chunk)
                                .then(function () { return transferDaemonAsync(); });
                        });
                    };
                    transferDaemonAsync()
                        .catch(function (e) {
                        // something went clearly wrong
                        if (_this.flashReject) {
                            _this.flashReject(new Error("failed packet transfer"));
                            _this.clearFlashData();
                        }
                    });
                }).catch(function () {
                    _this.flashPacketToken.resolveCancel();
                });
            };
            PartialFlashingService.SERVICE_UUID = 'e97dd91d-251d-470a-a062-fa1922dfa9a8';
            PartialFlashingService.CHARACTERISTIC_UUID = 'e97d3b10-251d-470a-a062-fa1922dfa9a8';
            PartialFlashingService.REGION_INFO = 0x00;
            PartialFlashingService.FLASH_DATA = 0x01;
            PartialFlashingService.PACKET_OUT_OF_ORDER = 0xAA;
            PartialFlashingService.PACKET_WRITTEN = 0xFF;
            PartialFlashingService.END_OF_TRANSMISSION = 0x02;
            PartialFlashingService.STATUS = 0xEE;
            PartialFlashingService.RESET = 0xFF;
            PartialFlashingService.MODE_PAIRING = 0;
            PartialFlashingService.MODE_APPLICATION = 0x01;
            PartialFlashingService.REGION_SOFTDEVICE = 0x00;
            PartialFlashingService.REGION_DAL = 0x01;
            PartialFlashingService.REGION_MAKECODE = 0x02;
            PartialFlashingService.MAGIC_MARKER = pxt.Util.fromHex('708E3B92C615A841C49866C975EE5197');
            PartialFlashingService.CHUNK_MIN_DELAY = 0;
            PartialFlashingService.CHUNK_MAX_DELAY = 75;
            return PartialFlashingService;
        }(BLEService));
        webBluetooth.PartialFlashingService = PartialFlashingService;
        var BLEDevice = /** @class */ (function (_super) {
            __extends(BLEDevice, _super);
            function BLEDevice(device) {
                var _this = _super.call(this, "ble", new pxt.Util.CancellationToken()) || this;
                _this.device = undefined;
                _this.services = [];
                _this.pendingResumeLogOnDisconnection = false;
                _this.servicesVersion = 0;
                _this.device = device;
                _this.handleDisconnected = _this.handleDisconnected.bind(_this);
                _this.handleServiceAdded = _this.handleServiceAdded.bind(_this);
                _this.handleServiceChanged = _this.handleServiceChanged.bind(_this);
                _this.handleServiceRemoved = _this.handleServiceRemoved.bind(_this);
                _this.device.addEventListener('gattserverdisconnected', _this.handleDisconnected);
                _this.device.addEventListener('serviceadded', _this.handleServiceAdded);
                _this.device.addEventListener('servicechanged', _this.handleServiceChanged);
                _this.device.addEventListener('serviceremoved', _this.handleServiceRemoved);
                if (hasConsole()) {
                    _this.services.push(_this.uartService = new UARTService(_this));
                    _this.services.push(_this.hf2Service = new HF2Service(_this));
                }
                if (hasPartialFlash())
                    _this.services.push(_this.partialFlashingService = new PartialFlashingService(_this));
                _this.aliveToken.startOperation();
                return _this;
            }
            BLEDevice.prototype.startServices = function () {
                this.services.filter(function (service) { return service.autoReconnect; })
                    .forEach(function (service) { return service.connectAsync().catch(function () { }); });
            };
            BLEDevice.prototype.pauseLog = function () {
                if (this.uartService) {
                    this.uartService.autoReconnect = false;
                    this.uartService.disconnect();
                }
                if (this.hf2Service) {
                    this.hf2Service.autoReconnect = false;
                    this.hf2Service.disconnect();
                }
            };
            BLEDevice.prototype.resumeLogOnDisconnection = function () {
                this.pendingResumeLogOnDisconnection = true;
            };
            BLEDevice.prototype.resumeLog = function () {
                if (this.uartService) {
                    this.uartService.autoReconnect = true;
                    this.uartService.connectAsync().catch(function () { });
                }
                if (this.hf2Service) {
                    this.hf2Service.autoReconnect = true;
                    this.hf2Service.connectAsync().catch(function () { });
                }
            };
            Object.defineProperty(BLEDevice.prototype, "isPaired", {
                get: function () {
                    return this === webBluetooth.bleDevice;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BLEDevice.prototype, "name", {
                get: function () {
                    return this.device.name || "?";
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BLEDevice.prototype, "connected", {
                get: function () {
                    return this.device && this.device.gatt && this.device.gatt.connected;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BLEDevice.prototype, "gatt", {
                get: function () {
                    return this.device.gatt;
                },
                enumerable: true,
                configurable: true
            });
            BLEDevice.prototype.createConnectPromise = function () {
                var _this = this;
                this.debug("connecting gatt server");
                return this.alivePromise(this.device.gatt.connect()
                    .then(function () { return _this.debug("gatt server connected"); }));
            };
            BLEDevice.prototype.handleServiceAdded = function (event) {
                this.debug("service added");
                this.servicesVersion++;
            };
            BLEDevice.prototype.handleServiceRemoved = function (event) {
                this.debug("service removed");
                this.servicesVersion++;
            };
            BLEDevice.prototype.handleServiceChanged = function (event) {
                this.debug("service changed");
                this.servicesVersion++;
            };
            BLEDevice.prototype.handleDisconnected = function (event) {
                var _this = this;
                this.debug("disconnected");
                this.disconnect();
                if (this.pendingResumeLogOnDisconnection) {
                    this.pendingResumeLogOnDisconnection = false;
                    Promise.delay(500).then(function () { return _this.resumeLog(); });
                }
            };
            BLEDevice.prototype.disconnect = function () {
                _super.prototype.disconnect.call(this);
                this.services.forEach(function (service) { return service.disconnect(); });
                if (!this.connected)
                    return;
                this.debug("disconnect");
                try {
                    if (this.device.gatt && this.device.gatt.connected)
                        this.device.gatt.disconnect();
                }
                catch (e) {
                    this.debug("gatt disconnect error " + e.message);
                }
            };
            return BLEDevice;
        }(BLERemote));
        webBluetooth.BLEDevice = BLEDevice;
        webBluetooth.bleDevice = undefined;
        function connectAsync() {
            if (webBluetooth.bleDevice)
                return Promise.resolve();
            pxt.log("ble: requesting device");
            var optionalServices = [];
            if (hasConsole()) {
                optionalServices.push(UARTService.SERVICE_UUID);
                optionalServices.push(HF2Service.SERVICE_UUID);
            }
            if (hasPartialFlash())
                optionalServices.push(PartialFlashingService.SERVICE_UUID);
            return navigator.bluetooth.requestDevice({
                filters: pxt.appTarget.appTheme.bluetoothUartFilters,
                optionalServices: optionalServices
            }).then(function (device) {
                pxt.log("ble: received device " + device.name);
                webBluetooth.bleDevice = new BLEDevice(device);
                webBluetooth.bleDevice.startServices(); // some services have rety logic even if the first GATT connect fails
                return webBluetooth.bleDevice.connectAsync();
            });
        }
        function isPaired() {
            return !!webBluetooth.bleDevice;
        }
        webBluetooth.isPaired = isPaired;
        function pairAsync() {
            if (webBluetooth.bleDevice) {
                webBluetooth.bleDevice.kill();
                webBluetooth.bleDevice = undefined;
            }
            return connectAsync()
                .catch(function (e) {
                if (webBluetooth.bleDevice && webBluetooth.bleDevice.aliveToken)
                    webBluetooth.bleDevice.aliveToken.resolveCancel();
                pxt.log("ble: error " + e.message);
            });
        }
        webBluetooth.pairAsync = pairAsync;
        function flashAsync(resp, d) {
            pxt.tickEvent("webble.flash");
            var hex = resp.outfiles[ts.pxtc.BINARY_HEX];
            return connectAsync()
                .then(function () { return webBluetooth.bleDevice.partialFlashingService.flashAsync(hex); })
                .then(function () { return pxt.tickEvent("webble.flash.success"); })
                .catch(function (e) {
                pxt.tickEvent("webble.fail.fail", { "message": e.message });
                throw e;
            });
        }
        webBluetooth.flashAsync = flashAsync;
    })(webBluetooth = pxt.webBluetooth || (pxt.webBluetooth = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var usb;
    (function (usb) {
        var USBError = /** @class */ (function (_super) {
            __extends(USBError, _super);
            function USBError(msg) {
                var _this = _super.call(this, msg) || this;
                _this.message = msg;
                return _this;
            }
            return USBError;
        }(Error));
        usb.USBError = USBError;
        var controlTransferGetReport = 0x01;
        var controlTransferSetReport = 0x09;
        var controlTransferOutReport = 0x200;
        var controlTransferInReport = 0x100;
        // this is for HF2
        usb.filters = [{
                classCode: 255,
                subclassCode: 42,
            }
        ];
        var isHF2 = true;
        function setFilters(f) {
            isHF2 = false;
            usb.filters = f;
        }
        usb.setFilters = setFilters;
        ;
        ;
        ;
        var WebUSBHID = /** @class */ (function () {
            function WebUSBHID() {
                this.ready = false;
                this.connecting = false;
                this.readLoopStarted = false;
                this.onDeviceConnectionChanged = function (connect) { };
                this.onConnectionChanged = function () { };
                this.onData = function (v) { };
                this.onError = function (e) { };
                this.onEvent = function (v) { };
                this.enabled = false;
                this.handleUSBConnected = this.handleUSBConnected.bind(this);
                this.handleUSBDisconnected = this.handleUSBDisconnected.bind(this);
            }
            WebUSBHID.prototype.enable = function () {
                if (this.enabled)
                    return;
                this.enabled = true;
                this.log("registering webusb events");
                navigator.usb.addEventListener('disconnect', this.handleUSBDisconnected, false);
                navigator.usb.addEventListener('connect', this.handleUSBConnected, false);
            };
            WebUSBHID.prototype.disable = function () {
                if (!this.enabled)
                    return;
                this.enabled = false;
                this.log("unregistering webusb events");
                navigator.usb.removeEventListener('disconnect', this.handleUSBDisconnected);
                navigator.usb.removeEventListener('connect', this.handleUSBConnected);
            };
            WebUSBHID.prototype.disposeAsync = function () {
                this.disable();
                return Promise.resolve();
            };
            WebUSBHID.prototype.handleUSBDisconnected = function (event) {
                this.log("device disconnected");
                if (event.device == this.dev) {
                    this.log("clear device");
                    this.clearDev();
                    if (this.onDeviceConnectionChanged)
                        this.onDeviceConnectionChanged(false);
                }
            };
            WebUSBHID.prototype.handleUSBConnected = function (event) {
                var newdev = event.device;
                this.log("device connected " + newdev.serialNumber);
                if (!this.dev && !this.connecting) {
                    this.log("attach device");
                    if (this.onDeviceConnectionChanged)
                        this.onDeviceConnectionChanged(true);
                }
            };
            WebUSBHID.prototype.clearDev = function () {
                if (this.dev) {
                    this.dev = null;
                    this.epIn = null;
                    this.epOut = null;
                    if (this.onConnectionChanged)
                        this.onConnectionChanged();
                }
            };
            WebUSBHID.prototype.error = function (msg) {
                throw new USBError(pxt.U.lf("USB error on device {0} ({1})", this.dev.productName, msg));
            };
            WebUSBHID.prototype.log = function (msg) {
                pxt.debug("webusb: " + msg);
            };
            WebUSBHID.prototype.disconnectAsync = function () {
                var _this = this;
                this.ready = false;
                if (!this.dev)
                    return Promise.resolve();
                this.log("close device");
                return this.dev.close()
                    .catch(function (e) {
                    // just ignore errors closing, most likely device just disconnected
                })
                    .then(function () {
                    _this.clearDev();
                    return Promise.delay(500);
                });
            };
            WebUSBHID.prototype.reconnectAsync = function () {
                var _this = this;
                this.log("reconnect");
                this.setConnecting(true);
                return this.disconnectAsync()
                    .then(tryGetDevicesAsync)
                    .then(function (devs) { return _this.connectAsync(devs); })
                    .finally(function () { return _this.setConnecting(false); });
            };
            WebUSBHID.prototype.setConnecting = function (v) {
                if (v != this.connecting) {
                    this.connecting = v;
                    if (this.onConnectionChanged)
                        this.onConnectionChanged();
                }
            };
            WebUSBHID.prototype.isConnecting = function () {
                return this.connecting;
            };
            WebUSBHID.prototype.isConnected = function () {
                return !!this.dev && this.ready;
            };
            WebUSBHID.prototype.connectAsync = function (devs) {
                return __awaiter(this, void 0, void 0, function () {
                    var e, lastDev, i, dev, e_7, e;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.log("trying to connect (" + devs.length + " devices)");
                                // no devices...
                                if (devs.length == 0) {
                                    e = new Error("Device not found.");
                                    e.type = "devicenotfound";
                                    throw e;
                                }
                                this.setConnecting(true);
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, , 11, 12]);
                                if (!this.lastKnownDeviceSerialNumber) return [3 /*break*/, 4];
                                lastDev = devs.find(function (d) { return d.serialNumber === _this.lastKnownDeviceSerialNumber; });
                                if (!lastDev) return [3 /*break*/, 2];
                                this.log("last known device spotted");
                                devs.splice(devs.indexOf(lastDev), 1);
                                devs.unshift(lastDev);
                                return [3 /*break*/, 4];
                            case 2:
                                // give another frame a chance to grab the device
                                this.log("delay for last known device");
                                return [4 /*yield*/, Promise.delay(2000)];
                            case 3:
                                _a.sent();
                                _a.label = 4;
                            case 4:
                                i = 0;
                                _a.label = 5;
                            case 5:
                                if (!(i < devs.length)) return [3 /*break*/, 10];
                                dev = devs[i];
                                this.dev = dev;
                                this.log("connect device: " + dev.manufacturerName + " " + dev.productName);
                                this.log("serial number: " + dev.serialNumber + " " + (this.lastKnownDeviceSerialNumber === dev.serialNumber ? "(last known device)" : "") + " ");
                                _a.label = 6;
                            case 6:
                                _a.trys.push([6, 8, , 9]);
                                return [4 /*yield*/, this.initAsync()];
                            case 7:
                                _a.sent();
                                // success, stop trying
                                return [2 /*return*/];
                            case 8:
                                e_7 = _a.sent();
                                this.dev = undefined; // clean state
                                this.log("connection failed, " + e_7.message);
                                return [3 /*break*/, 9];
                            case 9:
                                ++i;
                                return [3 /*break*/, 5];
                            case 10:
                                e = new Error(pxt.U.lf("Device in use or not found."));
                                e.type = "devicelocked";
                                throw e;
                            case 11:
                                this.setConnecting(false);
                                return [7 /*endfinally*/];
                            case 12: return [2 /*return*/];
                        }
                    });
                });
            };
            WebUSBHID.prototype.sendPacketAsync = function (pkt) {
                var _this = this;
                if (!this.dev)
                    return Promise.reject(new Error("Disconnected"));
                pxt.Util.assert(pkt.length <= 64);
                if (!this.epOut) {
                    return this.dev.controlTransferOut({
                        requestType: "class",
                        recipient: "interface",
                        request: controlTransferSetReport,
                        value: controlTransferOutReport,
                        index: this.iface.interfaceNumber
                    }, pkt).then(function (res) {
                        if (res.status != "ok")
                            _this.error("USB CTRL OUT transfer failed");
                    });
                }
                return this.dev.transferOut(this.epOut.endpointNumber, pkt)
                    .then(function (res) {
                    if (res.status != "ok")
                        _this.error("USB OUT transfer failed");
                });
            };
            WebUSBHID.prototype.readLoop = function () {
                var _this = this;
                if (this.readLoopStarted)
                    return;
                this.readLoopStarted = true;
                this.log("start read loop");
                var loop = function () {
                    if (!_this.ready)
                        Promise.delay(300).then(loop);
                    else
                        _this.recvPacketAsync()
                            .then(function (buf) {
                            if (buf[0]) {
                                // we've got data; retry reading immedietly after processing it
                                _this.onData(buf);
                                loop();
                            }
                            else {
                                // throttle down if no data coming
                                Promise.delay(500).then(loop);
                            }
                        }, function (err) {
                            if (_this.dev)
                                _this.onError(err);
                            Promise.delay(300).then(loop);
                        });
                };
                loop();
            };
            WebUSBHID.prototype.recvPacketAsync = function () {
                var _this = this;
                var final = function (res) {
                    if (res.status != "ok")
                        _this.error("USB IN transfer failed");
                    var arr = new Uint8Array(res.data.buffer);
                    if (arr.length == 0)
                        return _this.recvPacketAsync();
                    return arr;
                };
                if (!this.dev)
                    return Promise.reject(new Error("Disconnected"));
                if (!this.epIn) {
                    return this.dev.controlTransferIn({
                        requestType: "class",
                        recipient: "interface",
                        request: controlTransferGetReport,
                        value: controlTransferInReport,
                        index: this.iface.interfaceNumber
                    }, 64).then(final);
                }
                return this.dev.transferIn(this.epIn.endpointNumber, 64)
                    .then(final);
            };
            WebUSBHID.prototype.initAsync = function () {
                var _this = this;
                if (!this.dev)
                    return Promise.reject(new Error("Disconnected"));
                var dev = this.dev;
                this.log("open device");
                return dev.open()
                    // assume one configuration; no one really does more
                    .then(function () {
                    _this.log("select configuration");
                    return dev.selectConfiguration(1);
                })
                    .then(function () {
                    var matchesFilters = function (iface) {
                        var a0 = iface.alternates[0];
                        for (var _i = 0, filters_1 = usb.filters; _i < filters_1.length; _i++) {
                            var f = filters_1[_i];
                            if (f.classCode == null || a0.interfaceClass === f.classCode) {
                                if (f.subclassCode == null || a0.interfaceSubclass === f.subclassCode) {
                                    if (f.protocolCode == null || a0.interfaceProtocol === f.protocolCode) {
                                        if (a0.endpoints.length == 0)
                                            return true;
                                        if (a0.endpoints.length == 2 &&
                                            a0.endpoints.every(function (e) { return e.packetSize == 64; }))
                                            return true;
                                    }
                                }
                            }
                        }
                        return false;
                    };
                    _this.log("got " + dev.configurations[0].interfaces.length + " interfaces");
                    var matching = dev.configurations[0].interfaces.filter(matchesFilters);
                    var iface = matching[matching.length - 1];
                    _this.log(matching.length + " matching interfaces; picking " + (iface ? "#" + iface.interfaceNumber : "n/a"));
                    if (!iface)
                        _this.error("cannot find supported USB interface");
                    _this.altIface = iface.alternates[0];
                    _this.iface = iface;
                    if (_this.altIface.endpoints.length) {
                        _this.log("using dedicated endpoints");
                        _this.epIn = _this.altIface.endpoints.filter(function (e) { return e.direction == "in"; })[0];
                        _this.epOut = _this.altIface.endpoints.filter(function (e) { return e.direction == "out"; })[0];
                        pxt.Util.assert(_this.epIn.packetSize == 64);
                        pxt.Util.assert(_this.epOut.packetSize == 64);
                    }
                    else {
                        _this.log("using ctrl pipe");
                    }
                    _this.log("claim interface");
                    return dev.claimInterface(iface.interfaceNumber);
                })
                    .then(function () {
                    _this.log("device ready");
                    _this.lastKnownDeviceSerialNumber = _this.dev.serialNumber;
                    _this.ready = true;
                    if (isHF2)
                        _this.readLoop();
                    if (_this.onConnectionChanged)
                        _this.onConnectionChanged();
                });
            };
            return WebUSBHID;
        }());
        function pairAsync() {
            return navigator.usb.requestDevice({
                filters: usb.filters
            })
                .then(function (dev) { return !!dev; })
                .catch(function (e) {
                // user cancelled
                if (e.name == "NotFoundError")
                    return undefined;
                throw e;
            });
        }
        usb.pairAsync = pairAsync;
        function tryGetDevicesAsync() {
            return __awaiter(this, void 0, void 0, function () {
                var devs, e_8;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            pxt.log("webusb: get devices");
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, navigator.usb.getDevices()];
                        case 2:
                            devs = _a.sent();
                            return [2 /*return*/, devs || []];
                        case 3:
                            e_8 = _a.sent();
                            pxt.reportException(e_8);
                            return [2 /*return*/, []];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        var _hid;
        function mkWebUSBHIDPacketIOAsync() {
            pxt.debug("packetio: mk webusb io");
            if (!_hid)
                _hid = new WebUSBHID();
            _hid.enable();
            return Promise.resolve(_hid);
        }
        usb.mkWebUSBHIDPacketIOAsync = mkWebUSBHIDPacketIOAsync;
        usb.isEnabled = false;
        function setEnabled(v) {
            if (!isAvailable())
                v = false;
            usb.isEnabled = v;
        }
        usb.setEnabled = setEnabled;
        var _available = undefined;
        function checkAvailableAsync() {
            var _a, _b;
            return __awaiter(this, void 0, void 0, function () {
                var _usb, m, e_9;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (_available !== undefined)
                                return [2 /*return*/];
                            pxt.debug("webusb: checking availability");
                            // not supported by editor, cut short
                            if (!((_b = (_a = pxt.appTarget) === null || _a === void 0 ? void 0 : _a.compile) === null || _b === void 0 ? void 0 : _b.webUSB)) {
                                _available = false;
                                return [2 /*return*/];
                            }
                            if (pxt.BrowserUtils.isElectron() || pxt.BrowserUtils.isWinRT()) {
                                pxt.debug("webusb: off, electron or winrt");
                                pxt.tickEvent('webusb.off', { 'reason': 'electronwinrt' });
                                _available = false;
                                return [2 /*return*/];
                            }
                            _usb = navigator.usb;
                            if (!_usb) {
                                pxt.debug("webusb: off, not impl");
                                pxt.tickEvent('webusb.off', { 'reason': 'notimpl' });
                                _available = false;
                                return [2 /*return*/];
                            }
                            m = /Windows NT (\d+\.\d+)/.exec(navigator.userAgent);
                            if (m && parseFloat(m[1]) < 6.3) {
                                pxt.debug("webusb: off, older windows version");
                                pxt.tickEvent('webusb.off', { 'reason': 'oldwindows' });
                                _available = false;
                                return [2 /*return*/];
                            }
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 3, , 4]);
                            // iframes must specify allow="usb" in order to support WebUSB
                            return [4 /*yield*/, _usb.getDevices()];
                        case 2:
                            // iframes must specify allow="usb" in order to support WebUSB
                            _c.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            e_9 = _c.sent();
                            pxt.debug("webusb: off, security exception");
                            pxt.tickEvent('webusb.off', { 'reason': 'security' });
                            _available = false;
                            return [2 /*return*/];
                        case 4:
                            // yay!
                            _available = true;
                            return [2 /*return*/];
                    }
                });
            });
        }
        usb.checkAvailableAsync = checkAvailableAsync;
        function isAvailable() {
            if (_available === undefined) {
                console.error("checkAvailableAsync not called");
                checkAvailableAsync();
            }
            return !!_available;
        }
        usb.isAvailable = isAvailable;
    })(usb = pxt.usb || (pxt.usb = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var worker;
    (function (worker_1) {
        var U = pxt.Util;
        var workers = {};
        // Gets a cached worker for the given file
        function getWorker(workerFile) {
            var w = workers[workerFile];
            if (!w) {
                w = workers[workerFile] = makeWebWorker(workerFile);
            }
            return w;
        }
        worker_1.getWorker = getWorker;
        function wrap(send) {
            var pendingMsgs = {};
            var msgId = 0;
            var q = new U.PromiseQueue();
            var initPromise = new Promise(function (resolve, reject) {
                pendingMsgs["ready"] = resolve;
            });
            q.enqueue("main", function () { return initPromise; });
            var recvHandler = function (data) {
                if (pendingMsgs.hasOwnProperty(data.id)) {
                    var cb = pendingMsgs[data.id];
                    delete pendingMsgs[data.id];
                    cb(data.result);
                }
            };
            function opAsync(op, arg) {
                return q.enqueue("main", function () { return new Promise(function (resolve, reject) {
                    var id = "" + msgId++;
                    pendingMsgs[id] = function (v) {
                        if (!v) {
                            //pxt.reportError("worker", "no response")
                            reject(new Error("no response"));
                        }
                        else if (v.errorMessage) {
                            //pxt.reportError("worker", v.errorMessage)
                            reject(new Error(v.errorMessage));
                        }
                        else {
                            resolve(v);
                        }
                    };
                    send({ id: id, op: op, arg: arg });
                }); });
            }
            return { opAsync: opAsync, recvHandler: recvHandler };
        }
        worker_1.wrap = wrap;
        function makeWebWorker(workerFile) {
            var worker = new Worker(workerFile);
            var iface = wrap(function (v) { return worker.postMessage(v); });
            worker.onmessage = function (ev) {
                pxt.perf.measureStart("webworker recvHandler");
                iface.recvHandler(ev.data);
                pxt.perf.measureEnd("webworker recvHandler");
            };
            return iface;
        }
        worker_1.makeWebWorker = makeWebWorker;
        function makeWebSocket(url, onOOB) {
            if (onOOB === void 0) { onOOB = null; }
            var ws = new WebSocket(url);
            var sendq = [];
            var iface = wrap(function (v) {
                var s = JSON.stringify(v);
                if (sendq)
                    sendq.push(s);
                else
                    ws.send(s);
            });
            ws.onmessage = function (ev) {
                var js = JSON.parse(ev.data);
                if (onOOB && js.id == null) {
                    onOOB(js);
                }
                else {
                    iface.recvHandler(js);
                }
            };
            ws.onopen = function (ev) {
                pxt.debug('socket opened');
                for (var _i = 0, sendq_1 = sendq; _i < sendq_1.length; _i++) {
                    var m = sendq_1[_i];
                    ws.send(m);
                }
                sendq = null;
            };
            ws.onclose = function (ev) {
                pxt.debug('socket closed');
            };
            ws.onerror = function (ev) {
                pxt.debug('socket errored');
            };
            return iface;
        }
        worker_1.makeWebSocket = makeWebSocket;
    })(worker = pxt.worker || (pxt.worker = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var youtube;
    (function (youtube) {
        youtube.apiKey = undefined;
        function checkKey() {
            if (!youtube.apiKey)
                pxt.U.userError("YouTube API key missing");
        }
        function resolveThumbnail(thumbnails) {
            var _a;
            if (!thumbnails)
                return "";
            var thumbnail = (thumbnails.medium || thumbnails.high || thumbnails.standard || thumbnails.default);
            return ((_a = thumbnail) === null || _a === void 0 ? void 0 : _a.url) || "";
        }
        function resolveDescription(d) {
            // grab first paragraph.
            return d.split(/\n\s+/, 1)[0].trim();
        }
        function playlistItemToCodeCard(video) {
            return {
                "name": video.snippet.title.replace(/[^-]*-/, '').trim(),
                "description": resolveDescription(video.snippet.description),
                "youTubeId": video.snippet.resourceId.videoId,
                "youTubePlaylistId": video.snippet.playlistId,
                "imageUrl": resolveThumbnail(video.snippet.thumbnails)
            };
        }
        youtube.playlistItemToCodeCard = playlistItemToCodeCard;
        function playlistInfoAsync(playlistId) {
            checkKey();
            var url = "https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=" + playlistId + "&key=" + youtube.apiKey;
            return pxt.Util.httpGetJsonAsync(url)
                .then(function (res) { return res.items[0]; });
        }
        youtube.playlistInfoAsync = playlistInfoAsync;
        function listPlaylistVideosAsync(playlistId) {
            return __awaiter(this, void 0, void 0, function () {
                var items, pageToken, url, videos;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            checkKey();
                            items = [];
                            pageToken = undefined;
                            _a.label = 1;
                        case 1:
                            url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=" + playlistId + "&key=" + youtube.apiKey;
                            if (pageToken)
                                url += "&pageToken=" + pageToken;
                            return [4 /*yield*/, pxt.Util.httpGetJsonAsync(url)];
                        case 2:
                            videos = _a.sent();
                            items = items.concat(videos.items);
                            pageToken = videos.nextPageToken;
                            _a.label = 3;
                        case 3:
                            if (pageToken) return [3 /*break*/, 1];
                            _a.label = 4;
                        case 4:
                            if (pxt.options.debug)
                                pxt.debug(JSON.stringify(items, null, 2));
                            return [2 /*return*/, items];
                    }
                });
            });
        }
        youtube.listPlaylistVideosAsync = listPlaylistVideosAsync;
        function watchUrl(videoId, playlistId) {
            var url = undefined;
            if (videoId) {
                url = "https://www.youtube.com/watch?v=" + videoId;
                if (playlistId)
                    url += "&list=" + playlistId;
            }
            else if (playlistId) {
                url = "https://www.youtube.com/playlist?list=" + playlistId;
            }
            return url;
        }
        youtube.watchUrl = watchUrl;
    })(youtube = pxt.youtube || (pxt.youtube = {}));
})(pxt || (pxt = {}));
/* tslint:disable:no-conditional-assignment */
// TODO: add a macro facility to make 8-bit assembly easier?
var ts;
(function (ts) {
    var pxtc;
    (function (pxtc) {
        var assembler;
        (function (assembler) {
            assembler.debug = false;
            function lf(fmt) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return fmt.replace(/{(\d+)}/g, function (match, index) { return args[+index]; });
            }
            assembler.lf = lf;
            var badNameError = emitErr("opcode name doesn't match", "<name>");
            // An Instruction represents an instruction class with meta-variables
            // that should be substituted given an actually line (Line) of assembly
            // Thus, the Instruction helps us parse a sequence of tokens in a Line
            // as well as extract the relevant values to substitute for the meta-variables.
            // The Instruction also knows how to convert the particular instance into
            // machine code (EmitResult)
            var Instruction = /** @class */ (function () {
                function Instruction(ei, format, opcode, mask, is32bit) {
                    var _this = this;
                    this.opcode = opcode;
                    this.mask = mask;
                    this.is32bit = is32bit;
                    this.canBeShared = false;
                    pxtc.assert((opcode & mask) == opcode);
                    this.ei = ei;
                    this.code = format.replace(/\s+/g, " ");
                    this.friendlyFmt = format.replace(/\$\w+/g, function (m) {
                        if (_this.ei.encoders[m])
                            return _this.ei.encoders[m].pretty;
                        return m;
                    });
                    var words = tokenize(format);
                    this.name = words[0];
                    this.args = words.slice(1);
                }
                Instruction.prototype.emit = function (ln) {
                    var tokens = ln.words;
                    if (tokens[0] != this.name)
                        return badNameError;
                    var r = this.opcode;
                    var j = 1;
                    var stack = 0;
                    var numArgs = [];
                    var labelName = null;
                    var bit32_value = null;
                    var bit32_actual = null;
                    for (var i = 0; i < this.args.length; ++i) {
                        var formal = this.args[i];
                        var actual = tokens[j++];
                        if (formal[0] == "$") {
                            var enc = this.ei.encoders[formal];
                            var v = null;
                            if (enc.isRegister) {
                                v = this.ei.registerNo(actual);
                                if (v == null)
                                    return emitErr("expecting register name", actual);
                                if (this.ei.isPush(this.opcode)) // push
                                    stack++;
                                else if (this.ei.isPop(this.opcode)) // pop
                                    stack--;
                            }
                            else if (enc.isImmediate) {
                                actual = actual.replace(/^#/, "");
                                v = ln.bin.parseOneInt(actual);
                                if (v == null) {
                                    return emitErr("expecting number", actual);
                                }
                                else {
                                    // explicit manipulation of stack pointer (SP)
                                    // ARM only
                                    if (this.ei.isAddSP(this.opcode))
                                        stack = -(v / this.ei.wordSize());
                                    else if (this.ei.isSubSP(this.opcode))
                                        stack = (v / this.ei.wordSize());
                                }
                            }
                            else if (enc.isRegList) {
                                // register lists are ARM-specific - this code not used in AVR 
                                if (actual != "{")
                                    return emitErr("expecting {", actual);
                                v = 0;
                                while (tokens[j] != "}") {
                                    actual = tokens[j++];
                                    if (!actual)
                                        return emitErr("expecting }", tokens[j - 2]);
                                    var no = this.ei.registerNo(actual);
                                    if (no == null)
                                        return emitErr("expecting register name", actual);
                                    if (v & (1 << no))
                                        return emitErr("duplicate register name", actual);
                                    v |= (1 << no);
                                    if (this.ei.isPush(this.opcode)) // push
                                        stack++;
                                    else if (this.ei.isPop(this.opcode)) // pop
                                        stack--;
                                    if (tokens[j] == ",")
                                        j++;
                                }
                                actual = tokens[j++]; // skip close brace
                            }
                            else if (enc.isLabel) {
                                actual = actual.replace(/^#/, "");
                                if (/^[+-]?\d+$/.test(actual)) {
                                    v = parseInt(actual, 10);
                                    labelName = "rel" + v;
                                }
                                else if (/^0x[0-9a-fA-F]+$/.test(actual)) {
                                    v = parseInt(actual, 16);
                                    labelName = "abs" + v;
                                }
                                else {
                                    labelName = actual;
                                    v = this.ei.getAddressFromLabel(ln.bin, this, actual, enc.isWordAligned);
                                    if (v == null) {
                                        if (ln.bin.finalEmit)
                                            return emitErr("unknown label", actual);
                                        else
                                            // just need some value when we are 
                                            // doing some pass other than finalEmit
                                            v = 8; // needs to be divisible by 4 etc
                                    }
                                }
                                if (this.ei.is32bit(this)) {
                                    // console.log(actual + " " + v.toString())
                                    bit32_value = v;
                                    bit32_actual = actual;
                                    continue;
                                }
                            }
                            else {
                                pxtc.oops();
                            }
                            if (v == null)
                                return emitErr("didn't understand it", actual); // shouldn't happen
                            numArgs.push(v);
                            v = enc.encode(v);
                            // console.log("enc(v) = ",v)
                            if (v == null)
                                return emitErr("argument out of range or mis-aligned", actual);
                            pxtc.assert((r & v) == 0);
                            r |= v;
                        }
                        else if (formal == actual) {
                            // skip
                        }
                        else {
                            return emitErr("expecting " + formal, actual);
                        }
                    }
                    if (tokens[j])
                        return emitErr("trailing tokens", tokens[j]);
                    if (this.ei.is32bit(this)) {
                        return this.ei.emit32(r, bit32_value, ln.bin.normalizeExternalLabel(bit32_actual));
                    }
                    return {
                        stack: stack,
                        opcode: r,
                        numArgs: numArgs,
                        labelName: ln.bin.normalizeExternalLabel(labelName)
                    };
                };
                Instruction.prototype.toString = function () {
                    return this.friendlyFmt;
                };
                return Instruction;
            }());
            assembler.Instruction = Instruction;
            // represents a line of assembly from a file
            var Line = /** @class */ (function () {
                function Line(bin, text) {
                    this.bin = bin;
                    this.text = text;
                }
                Line.prototype.getOpExt = function () {
                    return this.instruction ? this.instruction.code : "";
                };
                Line.prototype.getOp = function () {
                    return this.instruction ? this.instruction.name : "";
                };
                Line.prototype.update = function (s) {
                    this.bin.peepOps++;
                    s = s.replace(/^\s*/, "");
                    if (!s)
                        this.bin.peepDel++;
                    if (s)
                        s += "      ";
                    s = "    " + s;
                    this.text = s + "; WAS: " + this.text.trim();
                    this.instruction = null;
                    this.numArgs = null;
                    this.words = tokenize(s) || [];
                    if (this.words.length == 0)
                        this.type = "empty";
                    else if (this.words[0][0] == "@")
                        this.type = "directive";
                };
                return Line;
            }());
            assembler.Line = Line;
            // File is the center of the action: parsing a file into a sequence of Lines
            // and also emitting the binary (buf)
            var File = /** @class */ (function () {
                function File(ei) {
                    this.baseOffset = 0;
                    this.checkStack = true;
                    this.inlineMode = false;
                    this.normalizeExternalLabel = function (n) { return n; };
                    this.currLineNo = 0;
                    this.scope = "";
                    this.scopeId = 0;
                    this.errors = [];
                    this.labels = {};
                    this.equs = {};
                    this.stackpointers = {};
                    this.stack = 0;
                    this.commPtr = 0;
                    this.peepOps = 0;
                    this.peepDel = 0;
                    this.peepCounts = {};
                    this.stats = "";
                    this.throwOnError = false;
                    this.disablePeepHole = false;
                    this.stackAtLabel = {};
                    this.currLine = new Line(this, "<start>");
                    this.currLine.lineNo = 0;
                    this.ei = ei;
                    this.ei.file = this;
                }
                File.prototype.emitShort = function (op) {
                    pxtc.assert(0 <= op && op <= 0xffff);
                    this.buf.push(op);
                };
                File.prototype.emitOpCode = function (op) {
                    this.emitShort(op);
                };
                File.prototype.location = function () {
                    // store one short (2 bytes) per buf location
                    return this.buf.length * 2;
                };
                File.prototype.pc = function () {
                    return this.location() + this.baseOffset;
                };
                // parsing of an "integer", well actually much more than 
                // just that
                File.prototype.parseOneInt = function (s) {
                    if (!s)
                        return null;
                    // fast path
                    if (/^\d+$/.test(s))
                        return parseInt(s, 10);
                    var minP = s.indexOf("-");
                    if (minP > 0)
                        return this.parseOneInt(s.slice(0, minP)) - this.parseOneInt(s.slice(minP + 1));
                    var mul = 1;
                    // recursive-descent parsing of multiplication
                    if (s.indexOf("*") >= 0) {
                        var m = null;
                        while (m = /^([^\*]*)\*(.*)$/.exec(s)) {
                            var tmp = this.parseOneInt(m[1]);
                            if (tmp == null)
                                return null;
                            mul *= tmp;
                            s = m[2];
                        }
                    }
                    if (s[0] == "-") {
                        mul *= -1;
                        s = s.slice(1);
                    }
                    else if (s[0] == "+") {
                        s = s.slice(1);
                    }
                    // decimal encoding; fast-ish path
                    if (/^\d+$/.test(s))
                        return mul * parseInt(s, 10);
                    // allow or'ing of 1 to least-signficant bit
                    if (pxtc.U.endsWith(s, "|1")) {
                        return this.parseOneInt(s.slice(0, s.length - 2)) | 1;
                    }
                    // allow subtracting 1 too
                    if (pxtc.U.endsWith(s, "-1")) {
                        return this.parseOneInt(s.slice(0, s.length - 2)) - 1;
                    }
                    // allow adding 1 too
                    if (pxtc.U.endsWith(s, "+1")) {
                        return this.parseOneInt(s.slice(0, s.length - 2)) + 1;
                    }
                    var shm = /(.*)>>(\d+)$/.exec(s);
                    if (shm) {
                        var left = this.parseOneInt(shm[1]);
                        var mask = this.baseOffset & ~0xffffff;
                        left &= ~mask;
                        return left >> parseInt(shm[2]);
                    }
                    var v = null;
                    // handle hexadecimal and binary encodings
                    if (s[0] == "0") {
                        if (s[1] == "x" || s[1] == "X") {
                            var m = /^0x([a-f0-9]+)$/i.exec(s);
                            if (m)
                                v = parseInt(m[1], 16);
                        }
                        else if (s[1] == "b" || s[1] == "B") {
                            var m = /^0b([01]+)$/i.exec(s);
                            if (m)
                                v = parseInt(m[1], 2);
                        }
                    }
                    // stack-specific processing
                    // more special characters to handle
                    if (s.indexOf("@") >= 0) {
                        var m = /^(\w+)@(-?\d+)$/.exec(s);
                        if (m) {
                            if (mul != 1)
                                this.directiveError(lf("multiplication not supported with saved stacks"));
                            if (this.stackpointers.hasOwnProperty(m[1])) {
                                // console.log(m[1] + ": " + this.stack + " " + this.stackpointers[m[1]] + " " + m[2])
                                v = this.ei.wordSize() * this.ei.computeStackOffset(m[1], this.stack - this.stackpointers[m[1]] + parseInt(m[2]));
                                // console.log(v)
                            }
                            else
                                this.directiveError(lf("saved stack not found"));
                        }
                        m = /^(.*)@(hi|lo|fn)$/.exec(s);
                        if (m && this.looksLikeLabel(m[1])) {
                            v = this.lookupLabel(m[1], true);
                            if (v != null) {
                                if (m[2] == "fn") {
                                    v = this.ei.toFnPtr(v, this.baseOffset, m[1]);
                                }
                                else {
                                    v >>= 1;
                                    if (0 <= v && v <= 0xffff) {
                                        if (m[2] == "hi")
                                            v = (v >> 8) & 0xff;
                                        else if (m[2] == "lo")
                                            v = v & 0xff;
                                        else
                                            pxtc.oops();
                                    }
                                    else {
                                        this.directiveError(lf("@hi/lo out of range"));
                                        v = null;
                                    }
                                }
                            }
                        }
                    }
                    if (v == null && this.looksLikeLabel(s)) {
                        v = this.lookupLabel(s, true);
                        if (v != null) {
                            if (this.ei.postProcessRelAddress(this, 1) == 1)
                                v += this.baseOffset;
                        }
                    }
                    if (v == null || isNaN(v))
                        return null;
                    return v * mul;
                };
                File.prototype.looksLikeLabel = function (name) {
                    if (/^(r\d|pc|sp|lr)$/i.test(name))
                        return false;
                    return /^[\.a-zA-Z_][\.:\w+]*$/.test(name);
                };
                File.prototype.scopedName = function (name) {
                    if (name[0] == "." && this.scope)
                        return this.scope + "$" + name;
                    else
                        return name;
                };
                File.prototype.lookupLabel = function (name, direct) {
                    if (direct === void 0) { direct = false; }
                    var v = null;
                    var scoped = this.scopedName(name);
                    if (this.labels.hasOwnProperty(scoped)) {
                        v = this.labels[scoped];
                        v = this.ei.postProcessRelAddress(this, v);
                    }
                    else if (this.lookupExternalLabel) {
                        v = this.lookupExternalLabel(name);
                        if (v != null) {
                            v = this.ei.postProcessAbsAddress(this, v);
                        }
                    }
                    if (v == null && this.equs.hasOwnProperty(scoped)) {
                        v = this.equs[scoped];
                        // no post-processing
                    }
                    if (v == null && direct) {
                        if (this.finalEmit) {
                            this.directiveError(lf("unknown label: {0}", name));
                        }
                        else
                            // use a number over 1 byte
                            v = 11111;
                    }
                    return v;
                };
                File.prototype.align = function (n) {
                    pxtc.assert(n == 2 || n == 4 || n == 8 || n == 16);
                    while (this.location() % n != 0)
                        this.emitOpCode(0);
                };
                File.prototype.pushError = function (msg, hints) {
                    if (hints === void 0) { hints = ""; }
                    var err = {
                        scope: this.scope,
                        message: lf("  -> Line {2} ('{1}'), error: {0}\n{3}", msg, this.currLine.text, this.currLine.lineNo, hints),
                        lineNo: this.currLine.lineNo,
                        line: this.currLine.text,
                        coremsg: msg,
                        hints: hints
                    };
                    this.errors.push(err);
                    if (this.throwOnError)
                        throw new Error(err.message);
                };
                File.prototype.directiveError = function (msg) {
                    this.pushError(msg);
                    // this.pushError(lf("directive error: {0}", msg))
                };
                File.prototype.emitString = function (l, utf16) {
                    if (utf16 === void 0) { utf16 = false; }
                    function byteAt(s, i) { return (s.charCodeAt(i) || 0) & 0xff; }
                    var m = /^\s*([\w\.]+\s*:\s*)?.\w+\s+(".*")\s*$/.exec(l);
                    var s;
                    if (!m || null == (s = parseString(m[2]))) {
                        this.directiveError(lf("expecting string"));
                    }
                    else {
                        this.align(2);
                        if (utf16) {
                            for (var i = 0; i < s.length; i++) {
                                this.emitShort(s.charCodeAt(i));
                            }
                        }
                        else {
                            // s.length + 1 to NUL terminate
                            for (var i = 0; i < s.length + 1; i += 2) {
                                this.emitShort((byteAt(s, i + 1) << 8) | byteAt(s, i));
                            }
                        }
                    }
                };
                File.prototype.parseNumber = function (words) {
                    var v = this.parseOneInt(words.shift());
                    if (v == null)
                        return null;
                    return v;
                };
                File.prototype.parseNumbers = function (words) {
                    words = words.slice(1);
                    var nums = [];
                    while (true) {
                        var n = this.parseNumber(words);
                        if (n == null) {
                            this.directiveError(lf("cannot parse number at '{0}'", words[0]));
                            break;
                        }
                        else
                            nums.push(n);
                        if (words[0] == ",") {
                            words.shift();
                            if (words[0] == null)
                                break;
                        }
                        else if (words[0] == null) {
                            break;
                        }
                        else {
                            this.directiveError(lf("expecting number, got '{0}'", words[0]));
                            break;
                        }
                    }
                    return nums;
                };
                File.prototype.emitSpace = function (words) {
                    var nums = this.parseNumbers(words);
                    if (nums.length == 1)
                        nums.push(0);
                    if (nums.length != 2)
                        this.directiveError(lf("expecting one or two numbers"));
                    else if (nums[0] % 2 != 0)
                        this.directiveError(lf("only even space supported"));
                    else {
                        var f = nums[1] & 0xff;
                        f = f | (f << 8);
                        for (var i = 0; i < nums[0]; i += 2)
                            this.emitShort(f);
                    }
                };
                File.prototype.emitBytes = function (words) {
                    var nums = this.parseNumbers(words);
                    if (nums.length % 2 != 0) {
                        this.directiveError(".bytes needs an even number of arguments");
                        nums.push(0);
                    }
                    for (var i = 0; i < nums.length; i += 2) {
                        var n0 = nums[i];
                        var n1 = nums[i + 1];
                        if (0 <= n0 && n1 <= 0xff &&
                            0 <= n1 && n0 <= 0xff)
                            this.emitShort((n0 & 0xff) | ((n1 & 0xff) << 8));
                        else
                            this.directiveError(lf("expecting uint8"));
                    }
                };
                File.prototype.emitHex = function (words) {
                    var _this = this;
                    words.slice(1).forEach(function (w) {
                        if (w == ",")
                            return;
                        // TODO: why 4 and not 2?
                        if (w.length % 4 != 0)
                            _this.directiveError(".hex needs an even number of bytes");
                        else if (!/^[a-f0-9]+$/i.test(w))
                            _this.directiveError(".hex needs a hex number");
                        else
                            for (var i = 0; i < w.length; i += 4) {
                                var n = parseInt(w.slice(i, i + 4), 16);
                                n = ((n & 0xff) << 8) | ((n >> 8) & 0xff);
                                _this.emitShort(n);
                            }
                    });
                };
                File.prototype.handleDirective = function (l) {
                    var _this = this;
                    var words = l.words;
                    var expectOne = function () {
                        if (words.length != 2)
                            _this.directiveError(lf("expecting one argument"));
                    };
                    var num0;
                    switch (words[0]) {
                        case ".ascii":
                        case ".asciz":
                        case ".string":
                            this.emitString(l.text);
                            break;
                        case ".utf16":
                            this.emitString(l.text, true);
                            break;
                        case ".align":
                            expectOne();
                            num0 = this.parseOneInt(words[1]);
                            if (num0 != null) {
                                if (num0 == 0)
                                    return;
                                if (num0 <= 4) {
                                    this.align(1 << num0);
                                }
                                else {
                                    this.directiveError(lf("expecting 1, 2, 3 or 4 (for 2, 4, 8, or 16 byte alignment)"));
                                }
                            }
                            else
                                this.directiveError(lf("expecting number"));
                            break;
                        case ".balign":
                            expectOne();
                            num0 = this.parseOneInt(words[1]);
                            if (num0 != null) {
                                if (num0 == 1)
                                    return;
                                if (num0 == 2 || num0 == 4 || num0 == 8 || num0 == 16) {
                                    this.align(num0);
                                }
                                else {
                                    this.directiveError(lf("expecting 2, 4, 8, or 16"));
                                }
                            }
                            else
                                this.directiveError(lf("expecting number"));
                            break;
                        case ".p2align":
                            expectOne();
                            num0 = this.parseOneInt(words[1]);
                            if (num0 != null) {
                                this.align(1 << num0);
                            }
                            else
                                this.directiveError(lf("expecting number"));
                            break;
                        case ".byte":
                            this.emitBytes(words);
                            break;
                        case ".hex":
                            this.emitHex(words);
                            break;
                        case ".hword":
                        case ".short":
                        case ".2bytes":
                            this.parseNumbers(words).forEach(function (n) {
                                // we allow negative numbers
                                if (-0x8000 <= n && n <= 0xffff)
                                    _this.emitShort(n & 0xffff);
                                else
                                    _this.directiveError(lf("expecting int16"));
                            });
                            break;
                        case ".word":
                        case ".4bytes":
                        case ".long":
                            // TODO: a word is machine-dependent (16-bit for AVR, 32-bit for ARM)
                            this.parseNumbers(words).forEach(function (n) {
                                // we allow negative numbers
                                if (-0x80000000 <= n && n <= 0xffffffff) {
                                    _this.emitShort(n & 0xffff);
                                    _this.emitShort((n >> 16) & 0xffff);
                                }
                                else {
                                    _this.directiveError(lf("expecting int32"));
                                }
                            });
                            break;
                        case ".skip":
                        case ".space":
                            this.emitSpace(words);
                            break;
                        case ".set":
                        case ".equ":
                            if (!/^\w+$/.test(words[1]))
                                this.directiveError(lf("expecting name"));
                            var nums = this.parseNumbers(words.slice(words[2] == "," || words[2] == "="
                                ? 2 : 1));
                            if (nums.length != 1)
                                this.directiveError(lf("expecting one value"));
                            if (this.equs[words[1]] !== undefined &&
                                this.equs[words[1]] != nums[0])
                                this.directiveError(lf("redefinition of {0}", words[1]));
                            this.equs[words[1]] = nums[0];
                            break;
                        case ".startaddr":
                            if (this.location())
                                this.directiveError(lf(".startaddr can be only be specified at the beginning of the file"));
                            expectOne();
                            this.baseOffset = this.parseOneInt(words[1]);
                            break;
                        // The usage for this is as follows:
                        // push {...}
                        // @stackmark locals   ; locals := sp
                        // ... some push/pops ...
                        // ldr r0, [sp, locals@3] ; load local number 3
                        // ... some push/pops ...
                        // @stackempty locals ; expect an empty stack here
                        case "@stackmark":
                            expectOne();
                            this.stackpointers[words[1]] = this.stack;
                            break;
                        case "@stackempty":
                            if (this.checkStack) {
                                if (this.stackpointers[words[1]] == null)
                                    this.directiveError(lf("no such saved stack"));
                                else if (this.stackpointers[words[1]] != this.stack)
                                    this.directiveError(lf("stack mismatch"));
                            }
                            break;
                        case "@scope":
                            this.scope = words[1] || "";
                            this.currLineNo = this.scope ? 0 : this.realCurrLineNo;
                            break;
                        case ".syntax":
                        case "@nostackcheck":
                            this.checkStack = false;
                            break;
                        case "@dummystack":
                            expectOne();
                            this.stack += this.parseOneInt(words[1]);
                            break;
                        case ".section":
                        case ".global":
                            this.stackpointers = {};
                            this.stack = 0;
                            this.scope = "$S" + this.scopeId++;
                            break;
                        case ".comm": {
                            words = words.filter(function (x) { return x != ","; });
                            words.shift();
                            var sz = this.parseOneInt(words[1]);
                            var align = 0;
                            if (words[2])
                                align = this.parseOneInt(words[2]);
                            else
                                align = 4; // not quite what AS does...
                            var val = this.lookupLabel(words[0]);
                            if (val == null) {
                                if (!this.commPtr) {
                                    this.commPtr = this.lookupExternalLabel("_pxt_comm_base") || 0;
                                    if (!this.commPtr)
                                        this.directiveError(lf("PXT_COMM_BASE not defined"));
                                }
                                while (this.commPtr & (align - 1))
                                    this.commPtr++;
                                this.labels[this.scopedName(words[0])] = this.commPtr - this.baseOffset;
                                this.commPtr += sz;
                            }
                            break;
                        }
                        case ".file":
                        case ".text":
                        case ".cpu":
                        case ".fpu":
                        case ".eabi_attribute":
                        case ".code":
                        case ".thumb_func":
                        case ".type":
                        case ".fnstart":
                        case ".save":
                        case ".size":
                        case ".fnend":
                        case ".pad":
                        case ".globl": // TODO might need this one
                        case ".local":
                            break;
                        case "@":
                            // @ sp needed
                            break;
                        default:
                            if (/^\.cfi_/.test(words[0])) {
                                // ignore
                            }
                            else {
                                this.directiveError(lf("unknown directive"));
                            }
                            break;
                    }
                };
                File.prototype.handleOneInstruction = function (ln, instr) {
                    var op = instr.emit(ln);
                    if (!op.error) {
                        this.stack += op.stack;
                        if (this.checkStack && this.stack < 0)
                            this.pushError(lf("stack underflow"));
                        ln.location = this.location();
                        ln.opcode = op.opcode;
                        ln.stack = op.stack;
                        this.emitOpCode(op.opcode);
                        if (op.opcode2 != null)
                            this.emitOpCode(op.opcode2);
                        if (op.opcode3 != null)
                            this.emitOpCode(op.opcode3);
                        ln.instruction = instr;
                        ln.numArgs = op.numArgs;
                        return true;
                    }
                    return false;
                };
                File.prototype.handleInstruction = function (ln) {
                    var _this = this;
                    if (ln.instruction) {
                        if (this.handleOneInstruction(ln, ln.instruction))
                            return;
                    }
                    var getIns = function (n) { return _this.ei.instructions.hasOwnProperty(n) ? _this.ei.instructions[n] : []; };
                    if (!ln.instruction) {
                        var ins = getIns(ln.words[0]);
                        for (var i = 0; i < ins.length; ++i) {
                            if (this.handleOneInstruction(ln, ins[i]))
                                return;
                        }
                    }
                    var w0 = ln.words[0].toLowerCase().replace(/s$/, "").replace(/[^a-z]/g, "");
                    var hints = "";
                    var possibilities = getIns(w0).concat(getIns(w0 + "s"));
                    if (possibilities.length > 0) {
                        possibilities.forEach(function (i) {
                            var err = i.emit(ln);
                            hints += lf("   Maybe: {0} ({1} at '{2}')\n", i.toString(), err.error, err.errorAt);
                        });
                    }
                    this.pushError(lf("assembly error"), hints);
                };
                File.prototype.buildLine = function (tx, lst) {
                    var _this = this;
                    var mkLine = function (tx) {
                        var l = new Line(_this, tx);
                        l.scope = _this.scope;
                        l.lineNo = _this.currLineNo;
                        lst.push(l);
                        return l;
                    };
                    var l = mkLine(tx);
                    var words = tokenize(l.text) || [];
                    l.words = words;
                    var w0 = words[0] || "";
                    if (w0.charAt(w0.length - 1) == ":") {
                        var m = /^([\.\w]+):$/.exec(words[0]);
                        if (m) {
                            l.type = "label";
                            l.text = m[1] + ":";
                            l.words = [m[1]];
                            if (words.length > 1) {
                                words.shift();
                                l = mkLine(tx.replace(/^[^:]*:/, ""));
                                l.words = words;
                                w0 = words[0] || "";
                            }
                            else {
                                return;
                            }
                        }
                    }
                    var c0 = w0.charAt(0);
                    if (c0 == "." || c0 == "@") {
                        l.type = "directive";
                        if (l.words[0] == "@scope")
                            this.handleDirective(l);
                    }
                    else {
                        if (l.words.length == 0)
                            l.type = "empty";
                        else
                            l.type = "instruction";
                    }
                };
                File.prototype.prepLines = function (text) {
                    var _this = this;
                    this.currLineNo = 0;
                    this.realCurrLineNo = 0;
                    this.lines = [];
                    text.split(/\r?\n/).forEach(function (tx) {
                        if (_this.errors.length > 10)
                            return;
                        _this.currLineNo++;
                        _this.realCurrLineNo++;
                        _this.buildLine(tx, _this.lines);
                    });
                };
                File.prototype.iterLines = function () {
                    var _this = this;
                    this.stack = 0;
                    this.buf = [];
                    this.scopeId = 0;
                    this.lines.forEach(function (l) {
                        if (_this.errors.length > 10)
                            return;
                        _this.currLine = l;
                        if (l.words.length == 0)
                            return;
                        if (l.type == "label") {
                            var lblname = _this.scopedName(l.words[0]);
                            _this.prevLabel = lblname;
                            if (_this.finalEmit) {
                                if (_this.equs[lblname] != null)
                                    _this.directiveError(lf(".equ redefined as label"));
                                var curr = _this.labels[lblname];
                                if (curr == null)
                                    pxtc.oops();
                                if (_this.errors.length == 0 && curr != _this.location()) {
                                    pxtc.oops("invalid location: " + _this.location() + " != " + curr + " at " + lblname);
                                }
                                pxtc.assert(_this.errors.length > 0 || curr == _this.location());
                                if (_this.reallyFinalEmit) {
                                    _this.stackAtLabel[lblname] = _this.stack;
                                }
                            }
                            else {
                                if (_this.labels.hasOwnProperty(lblname))
                                    _this.directiveError(lf("label redefinition"));
                                else if (_this.inlineMode && /^_/.test(lblname))
                                    _this.directiveError(lf("labels starting with '_' are reserved for the compiler"));
                                else {
                                    _this.labels[lblname] = _this.location();
                                }
                            }
                            l.location = _this.location();
                        }
                        else if (l.type == "directive") {
                            _this.handleDirective(l);
                        }
                        else if (l.type == "instruction") {
                            _this.handleInstruction(l);
                        }
                        else if (l.type == "empty") {
                            // nothing
                        }
                        else {
                            pxtc.oops();
                        }
                    });
                };
                File.prototype.getSource = function (clean, numStmts, flashSize) {
                    var _this = this;
                    if (numStmts === void 0) { numStmts = 1; }
                    if (flashSize === void 0) { flashSize = 0; }
                    var lenPrev = 0;
                    var size = function (lbl) {
                        var curr = _this.labels[lbl] || lenPrev;
                        var sz = curr - lenPrev;
                        lenPrev = curr;
                        return sz;
                    };
                    var lenTotal = this.buf ? this.location() : 0;
                    var lenCode = size("_code_end");
                    var lenHelpers = size("_helpers_end");
                    var lenVtables = size("_vtables_end");
                    var lenLiterals = size("_literals_end");
                    var lenAllCode = lenPrev;
                    var totalSize = (lenTotal + this.baseOffset) & 0xffffff;
                    if (flashSize && totalSize > flashSize)
                        pxtc.U.userError(lf("program too big by {0} bytes!", totalSize - flashSize));
                    flashSize = flashSize || 128 * 1024;
                    var totalInfo = lf("; total bytes: {0} ({1}% of {2}k flash with {3} free)", totalSize, (100 * totalSize / flashSize).toFixed(1), (flashSize / 1024).toFixed(1), flashSize - totalSize);
                    var res = 
                    // ARM-specific
                    lf("; generated code sizes (bytes): {0} (incl. {1} user, {2} helpers, {3} vtables, {4} lits); src size {5}\n", lenAllCode, lenCode, lenHelpers, lenVtables, lenLiterals, lenTotal - lenAllCode) +
                        lf("; assembly: {0} lines; density: {1} bytes/stmt; ({2} stmts)\n", this.lines.length, Math.round(100 * lenCode / numStmts) / 100, numStmts) +
                        totalInfo + "\n" +
                        this.stats + "\n\n";
                    var skipOne = false;
                    this.lines.forEach(function (ln, i) {
                        if (ln.words[0] == "_stored_program") {
                            res += "_stored_program: .string \"...\"\n";
                            skipOne = true;
                            return;
                        }
                        if (skipOne) {
                            skipOne = false;
                            return;
                        }
                        var text = ln.text;
                        if (clean) {
                            if (ln.words[0] == "@stackempty" &&
                                _this.lines[i - 1].text == ln.text)
                                return;
                            text = text.replace(/; WAS: .*/, "");
                            if (!text.trim())
                                return;
                        }
                        if (assembler.debug)
                            if (ln.type == "label" || ln.type == "instruction")
                                text += " \t; 0x" + (ln.location + _this.baseOffset).toString(16);
                        res += text + "\n";
                    });
                    return res;
                };
                File.prototype.peepHole = function () {
                    // TODO add: str X; ldr X -> str X ?
                    var mylines = this.lines.filter(function (l) { return l.type != "empty"; });
                    for (var i = 0; i < mylines.length; ++i) {
                        var ln = mylines[i];
                        if (/^user/.test(ln.scope)) // skip opt for user-supplied assembly
                            continue;
                        var lnNext = mylines[i + 1];
                        if (!lnNext)
                            continue;
                        var lnNext2 = mylines[i + 2];
                        if (ln.type == "instruction") {
                            this.ei.peephole(ln, lnNext, lnNext2);
                        }
                    }
                };
                File.prototype.clearLabels = function () {
                    this.labels = {};
                    this.commPtr = 0;
                };
                File.prototype.peepPass = function (reallyFinal) {
                    if (this.disablePeepHole)
                        return;
                    this.peepOps = 0;
                    this.peepDel = 0;
                    this.peepCounts = {};
                    this.peepHole();
                    this.throwOnError = true;
                    this.finalEmit = false;
                    this.clearLabels();
                    this.iterLines();
                    pxtc.assert(!this.checkStack || this.stack == 0);
                    this.finalEmit = true;
                    this.reallyFinalEmit = reallyFinal || this.peepOps == 0;
                    this.iterLines();
                    this.stats += lf("; peep hole pass: {0} instructions removed and {1} updated\n", this.peepDel, this.peepOps - this.peepDel);
                };
                File.prototype.getLabels = function () {
                    var _this = this;
                    if (!this.userLabelsCache)
                        this.userLabelsCache = pxtc.U.mapMap(this.labels, function (k, v) { return v + _this.baseOffset; });
                    return this.userLabelsCache;
                };
                File.prototype.emit = function (text) {
                    pxtc.assert(this.buf == null);
                    this.prepLines(text);
                    if (this.errors.length > 0)
                        return;
                    this.clearLabels();
                    this.iterLines();
                    if (this.checkStack && this.stack != 0)
                        this.directiveError(lf("stack misaligned at the end of the file"));
                    if (this.errors.length > 0)
                        return;
                    this.ei.expandLdlit(this);
                    this.clearLabels();
                    this.iterLines();
                    this.finalEmit = true;
                    this.reallyFinalEmit = this.disablePeepHole;
                    this.iterLines();
                    if (this.errors.length > 0)
                        return;
                    var maxPasses = 5;
                    for (var i = 0; i < maxPasses; ++i) {
                        pxt.debug("Peephole OPT, pass " + i);
                        this.peepPass(i == maxPasses);
                        if (this.peepOps == 0)
                            break;
                    }
                    pxt.debug("emit done");
                };
                return File;
            }());
            assembler.File = File;
            var VMFile = /** @class */ (function (_super) {
                __extends(VMFile, _super);
                function VMFile(ei) {
                    return _super.call(this, ei) || this;
                }
                return VMFile;
            }(File));
            assembler.VMFile = VMFile;
            // an assembler provider must inherit from this
            // class and provide Encoders and Instructions
            var AbstractProcessor = /** @class */ (function () {
                function AbstractProcessor() {
                    var _this = this;
                    this.file = null;
                    this.addEnc = function (n, p, e) {
                        var ee = {
                            name: n,
                            pretty: p,
                            encode: e,
                            isRegister: /^\$r\d/.test(n),
                            isImmediate: /^\$i\d/.test(n),
                            isRegList: /^\$rl\d/.test(n),
                            isLabel: /^\$l[a-z]/.test(n),
                        };
                        _this.encoders[n] = ee;
                        return ee;
                    };
                    this.inrange = function (max, v, e) {
                        if (Math.floor(v) != v)
                            return null;
                        if (v < 0)
                            return null;
                        if (v > max)
                            return null;
                        return e;
                    };
                    this.inminmax = function (min, max, v, e) {
                        if (Math.floor(v) != v)
                            return null;
                        if (v < min)
                            return null;
                        if (v > max)
                            return null;
                        return e;
                    };
                    this.inseq = function (seq, v) {
                        var ind = seq.indexOf(v);
                        if (ind < 0)
                            return null;
                        return ind;
                    };
                    this.inrangeSigned = function (max, v, e) {
                        if (Math.floor(v) != v)
                            return null;
                        if (v < -(max + 1))
                            return null;
                        if (v > max)
                            return null;
                        var mask = (max << 1) | 1;
                        return e & mask;
                    };
                    this.addInst = function (name, code, mask, is32Bit) {
                        var ins = new Instruction(_this, name, code, mask, is32Bit);
                        if (!_this.instructions.hasOwnProperty(ins.name))
                            _this.instructions[ins.name] = [];
                        _this.instructions[ins.name].push(ins);
                        return ins;
                    };
                    this.encoders = {};
                    this.instructions = {};
                }
                AbstractProcessor.prototype.toFnPtr = function (v, baseOff, lbl) {
                    return v;
                };
                AbstractProcessor.prototype.wordSize = function () {
                    return -1;
                };
                AbstractProcessor.prototype.computeStackOffset = function (kind, offset) {
                    return offset;
                };
                AbstractProcessor.prototype.is32bit = function (i) {
                    return false;
                };
                AbstractProcessor.prototype.emit32 = function (v1, v2, actual) {
                    return null;
                };
                AbstractProcessor.prototype.postProcessRelAddress = function (f, v) {
                    return v;
                };
                AbstractProcessor.prototype.postProcessAbsAddress = function (f, v) {
                    return v;
                };
                AbstractProcessor.prototype.peephole = function (ln, lnNext, lnNext2) {
                    return;
                };
                AbstractProcessor.prototype.registerNo = function (actual) {
                    return null;
                };
                AbstractProcessor.prototype.getAddressFromLabel = function (f, i, s, wordAligned) {
                    if (wordAligned === void 0) { wordAligned = false; }
                    return null;
                };
                AbstractProcessor.prototype.isPop = function (opcode) {
                    return false;
                };
                AbstractProcessor.prototype.isPush = function (opcode) {
                    return false;
                };
                AbstractProcessor.prototype.isAddSP = function (opcode) {
                    return false;
                };
                AbstractProcessor.prototype.isSubSP = function (opcode) {
                    return false;
                };
                AbstractProcessor.prototype.testAssembler = function () {
                    pxtc.assert(false);
                };
                AbstractProcessor.prototype.expandLdlit = function (f) {
                };
                return AbstractProcessor;
            }());
            assembler.AbstractProcessor = AbstractProcessor;
            // utility functions
            function tokenize(line) {
                var words = [];
                var w = "";
                loop: for (var i = 0; i < line.length; ++i) {
                    switch (line[i]) {
                        case "[":
                        case "]":
                        case "!":
                        case "{":
                        case "}":
                        case ",":
                            if (w) {
                                words.push(w);
                                w = "";
                            }
                            words.push(line[i]);
                            break;
                        case " ":
                        case "\t":
                        case "\r":
                        case "\n":
                            if (w) {
                                words.push(w);
                                w = "";
                            }
                            break;
                        case ";":
                            // drop the trailing comment
                            break loop;
                        default:
                            w += line[i];
                            break;
                    }
                }
                if (w) {
                    words.push(w);
                    w = "";
                }
                if (!words[0])
                    return null;
                return words;
            }
            function parseString(s) {
                s = s.replace(/\\\\/g, "\\B") // don't get confused by double backslash
                    .replace(/\\(['\?])/g, function (f, q) { return q; }) // these are not valid in JSON yet valid in C
                    .replace(/\\[z0]/g, "\u0000") // \0 is valid in C 
                    .replace(/\\x([0-9a-f][0-9a-f])/gi, function (f, h) { return "\\u00" + h; })
                    .replace(/\\B/g, "\\\\"); // undo anti-confusion above
                try {
                    return JSON.parse(s);
                }
                catch (e) {
                    return null;
                }
            }
            function emitErr(msg, tok) {
                return {
                    stack: null,
                    opcode: null,
                    error: msg,
                    errorAt: tok
                };
            }
            assembler.emitErr = emitErr;
            function testOne(ei, op, code) {
                var b = new File(ei);
                b.checkStack = false;
                b.emit(op);
                pxtc.assert(b.buf[0] == code);
            }
            function expectError(ei, asm) {
                var b = new File(ei);
                b.emit(asm);
                if (b.errors.length == 0) {
                    pxtc.oops("ASMTEST: expecting error for: " + asm);
                }
                // console.log(b.errors[0].message)
            }
            assembler.expectError = expectError;
            function tohex(n) {
                if (n < 0 || n > 0xffff)
                    return ("0x" + n.toString(16)).toLowerCase();
                else
                    return ("0x" + ("000" + n.toString(16)).slice(-4)).toLowerCase();
            }
            assembler.tohex = tohex;
            function expect(ei, disasm) {
                var exp = [];
                var asm = disasm.replace(/^([0-9a-fA-F]{4,8})\s/gm, function (w, n) {
                    exp.push(parseInt(n.slice(0, 4), 16));
                    if (n.length == 8)
                        exp.push(parseInt(n.slice(4, 8), 16));
                    return "";
                });
                var b = new File(ei);
                b.throwOnError = true;
                b.disablePeepHole = true;
                b.emit(asm);
                if (b.errors.length > 0) {
                    console.debug(b.errors[0].message);
                    pxtc.oops("ASMTEST: not expecting errors");
                }
                if (b.buf.length != exp.length)
                    pxtc.oops("ASMTEST: wrong buf len");
                for (var i = 0; i < exp.length; ++i) {
                    if (b.buf[i] != exp[i])
                        pxtc.oops("ASMTEST: wrong buf content at " + i + " , exp:" + tohex(exp[i]) + ", got: " + tohex(b.buf[i]));
                }
            }
            assembler.expect = expect;
        })(assembler = pxtc.assembler || (pxtc.assembler = {}));
    })(pxtc = ts.pxtc || (ts.pxtc = {}));
})(ts || (ts = {}));
/// <reference path="../../localtypings/projectheader.d.ts"/>
var pxt;
(function (pxt) {
    var Cloud;
    (function (Cloud) {
        var Util = pxtc.Util;
        Cloud.apiRoot = (pxt.BrowserUtils.isLocalHost() || Util.isNodeJS) ? "https://www.makecode.com/api/" : "/api/";
        Cloud.accessToken = "";
        Cloud.localToken = "";
        var _isOnline = true;
        Cloud.onOffline = function () { };
        function offlineError(url) {
            var e = new Error(Util.lf("Cannot access {0} while offline", url));
            e.isOffline = true;
            return Promise.delay(1000).then(function () { return Promise.reject(e); });
        }
        function hasAccessToken() {
            return !!Cloud.accessToken;
        }
        Cloud.hasAccessToken = hasAccessToken;
        function localRequestAsync(path, data) {
            return pxt.U.requestAsync({
                url: "/api/" + path,
                headers: { "Authorization": Cloud.localToken },
                method: data ? "POST" : "GET",
                data: data || undefined,
                allowHttpErrors: true
            });
        }
        Cloud.localRequestAsync = localRequestAsync;
        function useCdnApi() {
            return pxt.webConfig && !pxt.webConfig.isStatic
                && !pxt.BrowserUtils.isLocalHost() && !!pxt.webConfig.cdnUrl;
        }
        Cloud.useCdnApi = useCdnApi;
        function cdnApiUrl(url) {
            url = url.replace(/^\//, '');
            if (!useCdnApi())
                return Cloud.apiRoot + url;
            var d = new Date();
            var timestamp = d.getUTCFullYear() + ("0" + (d.getUTCMonth() + 1)).slice(-2) + ("0" + d.getUTCDate()).slice(-2);
            if (url.indexOf("?") < 0)
                url += "?";
            else
                url += "&";
            url += "cdn=" + timestamp;
            // url = url.replace("?", "$")
            return pxt.webConfig.cdnUrl + "/api/" + url;
        }
        Cloud.cdnApiUrl = cdnApiUrl;
        function apiRequestWithCdnAsync(options) {
            if (!useCdnApi())
                return privateRequestAsync(options);
            options.url = cdnApiUrl(options.url);
            return Util.requestAsync(options)
                .catch(function (e) { return handleNetworkError(options, e); });
        }
        Cloud.apiRequestWithCdnAsync = apiRequestWithCdnAsync;
        function handleNetworkError(options, e) {
            if (e.statusCode == 0) {
                if (_isOnline) {
                    _isOnline = false;
                    Cloud.onOffline();
                }
                return offlineError(options.url);
            }
            else {
                return Promise.reject(e);
            }
        }
        function privateRequestAsync(options) {
            var _a;
            options.url = ((_a = pxt.webConfig) === null || _a === void 0 ? void 0 : _a.isStatic) && !options.forceLiveEndpoint ? pxt.webConfig.relprefix + options.url : Cloud.apiRoot + options.url;
            options.allowGzipPost = true;
            if (!Cloud.isOnline() && !pxt.BrowserUtils.isPxtElectron()) {
                return offlineError(options.url);
            }
            if (!options.headers)
                options.headers = {};
            if (pxt.BrowserUtils.isLocalHost()) {
                if (Cloud.localToken)
                    options.headers["Authorization"] = Cloud.localToken;
            }
            else if (Cloud.accessToken) {
                options.headers["x-td-access-token"] = Cloud.accessToken;
            }
            return Util.requestAsync(options)
                .catch(function (e) { return handleNetworkError(options, e); });
        }
        Cloud.privateRequestAsync = privateRequestAsync;
        function privateGetTextAsync(path, headers) {
            return privateRequestAsync({ url: path, headers: headers }).then(function (resp) { return resp.text; });
        }
        Cloud.privateGetTextAsync = privateGetTextAsync;
        function privateGetAsync(path, forceLiveEndpoint) {
            if (forceLiveEndpoint === void 0) { forceLiveEndpoint = false; }
            return privateRequestAsync({ url: path, forceLiveEndpoint: forceLiveEndpoint }).then(function (resp) { return resp.json; });
        }
        Cloud.privateGetAsync = privateGetAsync;
        function downloadTargetConfigAsync() {
            if (!Cloud.isOnline()) // offline
                return Promise.resolve(undefined);
            var targetVersion = pxt.appTarget.versions && pxt.appTarget.versions.target;
            var url = pxt.webConfig && pxt.webConfig.isStatic ? "targetconfig.json" : "config/" + pxt.appTarget.id + "/targetconfig" + (targetVersion ? "/v" + targetVersion : '');
            if (pxt.BrowserUtils.isLocalHost())
                return localRequestAsync(url).then(function (r) { return r ? r.json : undefined; });
            else
                return apiRequestWithCdnAsync({ url: url }).then(function (r) { return r.json; });
        }
        Cloud.downloadTargetConfigAsync = downloadTargetConfigAsync;
        function downloadScriptFilesAsync(id) {
            return privateRequestAsync({ url: id + "/text", forceLiveEndpoint: true }).then(function (resp) {
                return JSON.parse(resp.text);
            });
        }
        Cloud.downloadScriptFilesAsync = downloadScriptFilesAsync;
        // 1h check on markdown content if not on development server
        var MARKDOWN_EXPIRATION = pxt.BrowserUtils.isLocalHostDev() ? 0 : 1 * 60 * 60 * 1000;
        // 1w check don't use cached version and wait for new content
        var FORCE_MARKDOWN_UPDATE = MARKDOWN_EXPIRATION * 24 * 7;
        function markdownAsync(docid, locale) {
            return __awaiter(this, void 0, void 0, function () {
                var live, branch, db, entry, downloadAndSetMarkdownAsync, timeDiff, shouldFetchInBackground, shouldWaitForNewContent;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            locale = locale || pxt.Util.userLanguage();
                            live = pxt.Util.localizeLive;
                            branch = "";
                            return [4 /*yield*/, pxt.BrowserUtils.translationDbAsync()];
                        case 1:
                            db = _a.sent();
                            return [4 /*yield*/, db.getAsync(locale, docid, branch)];
                        case 2:
                            entry = _a.sent();
                            downloadAndSetMarkdownAsync = function () { return __awaiter(_this, void 0, void 0, function () {
                                var r, _a;
                                var _b, _c;
                                return __generator(this, function (_d) {
                                    switch (_d.label) {
                                        case 0:
                                            _d.trys.push([0, 3, , 4]);
                                            return [4 /*yield*/, downloadMarkdownAsync(docid, locale, live, (_b = entry) === null || _b === void 0 ? void 0 : _b.etag)];
                                        case 1:
                                            r = _d.sent();
                                            return [4 /*yield*/, db.setAsync(locale, docid, branch, r.etag, undefined, r.md || ((_c = entry) === null || _c === void 0 ? void 0 : _c.md))];
                                        case 2:
                                            _d.sent();
                                            return [2 /*return*/, r.md];
                                        case 3:
                                            _a = _d.sent();
                                            return [2 /*return*/, ""]; // no translation
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); };
                            if (entry) {
                                timeDiff = Date.now() - entry.time;
                                shouldFetchInBackground = timeDiff > MARKDOWN_EXPIRATION;
                                shouldWaitForNewContent = timeDiff > FORCE_MARKDOWN_UPDATE;
                                if (!shouldWaitForNewContent) {
                                    if (shouldFetchInBackground) {
                                        pxt.tickEvent("markdown.update.background");
                                        // background update, do not wait
                                        downloadAndSetMarkdownAsync();
                                    }
                                    // return cached entry
                                    if (entry.md) {
                                        return [2 /*return*/, entry.md];
                                    }
                                }
                                else {
                                    pxt.tickEvent("markdown.update.wait");
                                }
                            }
                            // download and cache
                            return [2 /*return*/, downloadAndSetMarkdownAsync()];
                    }
                });
            });
        }
        Cloud.markdownAsync = markdownAsync;
        function downloadMarkdownAsync(docid, locale, live, etag) {
            var _a;
            var packaged = (_a = pxt.webConfig) === null || _a === void 0 ? void 0 : _a.isStatic;
            var targetVersion = pxt.appTarget.versions && pxt.appTarget.versions.target || '?';
            var url;
            if (packaged) {
                url = docid;
                var isUnderDocs = /\/?docs\//.test(url);
                var hasExt = /\.\w+$/.test(url);
                if (!isUnderDocs) {
                    var hasLeadingSlash = url[0] === "/";
                    url = "docs" + (hasLeadingSlash ? "" : "/") + url;
                }
                if (!hasExt) {
                    url = url + ".md";
                }
            }
            else {
                url = "md/" + pxt.appTarget.id + "/" + docid.replace(/^\//, "") + "?targetVersion=" + encodeURIComponent(targetVersion);
            }
            if (!packaged && locale != "en") {
                url += "&lang=" + encodeURIComponent(locale);
                if (live)
                    url += "&live=1";
            }
            if (pxt.BrowserUtils.isLocalHost() && !live)
                return localRequestAsync(url).then(function (resp) {
                    if (resp.statusCode == 404)
                        return privateRequestAsync({ url: url, method: "GET" })
                            .then(function (resp) { return { md: resp.text, etag: resp.headers["etag"] }; });
                    else
                        return { md: resp.text, etag: undefined };
                });
            else {
                var headers = etag && !useCdnApi() ? { "If-None-Match": etag } : undefined;
                return apiRequestWithCdnAsync({ url: url, method: "GET", headers: headers })
                    .then(function (resp) { return { md: resp.text, etag: resp.headers["etag"] }; });
            }
        }
        function privateDeleteAsync(path) {
            return privateRequestAsync({ url: path, method: "DELETE" }).then(function (resp) { return resp.json; });
        }
        Cloud.privateDeleteAsync = privateDeleteAsync;
        function privatePostAsync(path, data, forceLiveEndpoint) {
            if (forceLiveEndpoint === void 0) { forceLiveEndpoint = false; }
            return privateRequestAsync({ url: path, data: data || {}, forceLiveEndpoint: forceLiveEndpoint }).then(function (resp) { return resp.json; });
        }
        Cloud.privatePostAsync = privatePostAsync;
        function isLoggedIn() { return !!Cloud.accessToken; }
        Cloud.isLoggedIn = isLoggedIn;
        function isNavigatorOnline() {
            return navigator && navigator.onLine;
        }
        Cloud.isNavigatorOnline = isNavigatorOnline;
        function isOnline() {
            if (typeof navigator !== "undefined" && isNavigatorOnline()) {
                _isOnline = true;
            }
            return _isOnline;
        }
        Cloud.isOnline = isOnline;
        function getServiceUrl() {
            return Cloud.apiRoot.replace(/\/api\/$/, "");
        }
        Cloud.getServiceUrl = getServiceUrl;
        function getUserId() {
            var m = /^0(\w+)\./.exec(Cloud.accessToken);
            if (m)
                return m[1];
            return null;
        }
        Cloud.getUserId = getUserId;
        function parseScriptId(uri) {
            var target = pxt.appTarget;
            if (!uri || !target.appTheme || !target.cloud || !target.cloud.sharing)
                return undefined;
            var domains = ["makecode.com"];
            if (target.appTheme.embedUrl)
                domains.push(target.appTheme.embedUrl);
            if (target.appTheme.shareUrl)
                domains.push(target.appTheme.shareUrl);
            domains = Util.unique(domains, function (d) { return d; }).map(function (d) { return Util.escapeForRegex(Util.stripUrlProtocol(d).replace(/\/$/, '')).toLowerCase(); });
            var rx = "^((https://)?(?:" + domains.join('|') + ")/)?(?:v[0-9]+/)?(api/oembed?url=.*%2F([^&]*)&.*?|([a-z0-9-_]+))$";
            var m = new RegExp(rx, 'i').exec(uri.trim());
            var scriptid = m && (!m[1] || domains.indexOf(Util.escapeForRegex(m[1].replace(/https:\/\//, '').replace(/\/$/, '')).toLowerCase()) >= 0) && (m[3] || m[4]) ? (m[3] ? m[3] : m[4]) : null;
            if (!scriptid)
                return undefined;
            if (scriptid[0] == "_" && scriptid.length == 13)
                return scriptid;
            if (scriptid.length == 23 && /^[0-9\-]+$/.test(scriptid))
                return scriptid;
            return undefined;
        }
        Cloud.parseScriptId = parseScriptId;
    })(Cloud = pxt.Cloud || (pxt.Cloud = {}));
})(pxt || (pxt = {}));
var ts;
(function (ts) {
    var pxtc;
    (function (pxtc) {
        function f4EncodeImg(w, h, bpp, getPix) {
            var header = [
                0x87, bpp,
                w & 0xff, w >> 8,
                h & 0xff, h >> 8,
                0, 0
            ];
            var r = header.map(hex2).join("");
            var ptr = 4;
            var curr = 0;
            var shift = 0;
            var pushBits = function (n) {
                curr |= n << shift;
                if (shift == 8 - bpp) {
                    r += hex2(curr);
                    ptr++;
                    curr = 0;
                    shift = 0;
                }
                else {
                    shift += bpp;
                }
            };
            for (var i = 0; i < w; ++i) {
                for (var j = 0; j < h; ++j)
                    pushBits(getPix(i, j));
                while (shift != 0)
                    pushBits(0);
                if (bpp > 1) {
                    while (ptr & 3)
                        pushBits(0);
                }
            }
            return r;
            function hex2(n) {
                return ("0" + n.toString(16)).slice(-2);
            }
        }
        pxtc.f4EncodeImg = f4EncodeImg;
    })(pxtc = ts.pxtc || (ts.pxtc = {}));
})(ts || (ts = {}));
var pxtmelody;
(function (pxtmelody) {
    var MelodyArray = /** @class */ (function () {
        // constructor
        function MelodyArray(tempo) {
            this.numCols = 8;
            this.numRows = 8;
            // Whether or now the melody can contain more than one note at a single beat
            this.polyphonic = false;
            if (tempo)
                this.tempo = tempo;
            // set all elements to false
            this.resetMelody();
        }
        MelodyArray.prototype.setTempo = function (tempo) {
            this.tempo = tempo;
        };
        MelodyArray.prototype.getArray = function () {
            return this.melody;
        };
        MelodyArray.prototype.setArray = function (array) {
            this.melody = array;
        };
        MelodyArray.prototype.getColor = function (row) {
            // TODO
            return 0;
        };
        MelodyArray.prototype.getValue = function (row, col) {
            return this.melody[row][col];
        };
        MelodyArray.prototype.getWidth = function () {
            return this.numCols;
        };
        MelodyArray.prototype.getHeight = function () {
            return this.numRows;
        };
        MelodyArray.prototype.updateMelody = function (row, col) {
            var newValue = !this.melody[row][col];
            if (newValue && !this.polyphonic) {
                for (var r = 0; r < this.numRows; r++) {
                    this.melody[r][col] = false;
                }
            }
            this.melody[row][col] = newValue;
        };
        // function to turn into string
        MelodyArray.prototype.getStringRepresentation = function () {
            var stringMelody = "";
            var queues = new Array(this.numCols);
            var numMelodies = 0;
            // create queues of notes
            for (var i = 0; i < this.numRows; i++) {
                var noteCount = 0;
                queues[i] = [];
                for (var j = 0; j < this.numCols; j++) {
                    if (this.melody[j][i]) {
                        queues[i].push(rowToNote(j));
                        noteCount++;
                    }
                }
                if (noteCount > numMelodies) {
                    numMelodies = noteCount;
                }
            }
            // create strings of melodies
            if (numMelodies == 0)
                return "- - - - - - - - ";
            for (var j = 0; j < numMelodies; j++) {
                for (var i = 0; i < this.numCols; i++) {
                    if (queues[i] && queues[i].length > 0) { // if there is an element
                        stringMelody += queues[i].shift() + " ";
                    }
                    else {
                        stringMelody += "- "; // add rest if there is no selection for the note
                    }
                }
                //stringMelody += "."; // this will be used to split each melody
            }
            return stringMelody;
        };
        // turn string into boolean array
        MelodyArray.prototype.parseNotes = function (stringNotes) {
            // A melody is represented as a string of notes separated by spaces, with dashes representing rests
            // ex: a scale is represented as "C5 B A G F E D C"
            stringNotes = stringNotes.trim();
            var notes = stringNotes.split(" ");
            for (var i = 0; i < notes.length; i++) {
                for (var j = 0; j < this.numRows; j++) {
                    // reset everything to false
                    this.melody[j][i] = false;
                }
                if (notes[i] != "-") {
                    this.melody[noteToRow(notes[i])][i] = true;
                }
            }
        };
        MelodyArray.prototype.setPolyphonic = function (isPolyphonic) {
            this.polyphonic = isPolyphonic;
        };
        MelodyArray.prototype.isPolyphonic = function () {
            return this.polyphonic;
        };
        MelodyArray.prototype.resetMelody = function () {
            this.melody = new Array(this.numCols);
            for (var i = 0; i < this.numCols; i++) {
                this.melody[i] = new Array(this.numRows).fill(false);
            }
        };
        return MelodyArray;
    }());
    pxtmelody.MelodyArray = MelodyArray;
    function rowToNote(rowNum) {
        var note = "";
        switch (rowNum) {
            case 0:
                note = "C5";
                break;
            case 1:
                note = "B";
                break;
            case 2:
                note = "A";
                break;
            case 3:
                note = "G";
                break;
            case 4:
                note = "F";
                break;
            case 5:
                note = "E";
                break;
            case 6:
                note = "D";
                break;
            case 7:
                note = "C";
                break;
        }
        return note;
    }
    pxtmelody.rowToNote = rowToNote;
    function noteToRow(note) {
        var rowNum = -1;
        switch (note) {
            case "C5":
                rowNum = 0;
                break;
            case "B":
                rowNum = 1;
                break;
            case "A":
                rowNum = 2;
                break;
            case "G":
                rowNum = 3;
                break;
            case "F":
                rowNum = 4;
                break;
            case "E":
                rowNum = 5;
                break;
            case "D":
                rowNum = 6;
                break;
            case "C":
                rowNum = 7;
                break;
        }
        return rowNum;
    }
    pxtmelody.noteToRow = noteToRow;
    function getColorClass(row) {
        var colorClass = "melody-default";
        switch (row) {
            case 0:
                colorClass = "melody-red";
                break; // Middle C
            case 1:
                colorClass = "melody-orange";
                break; // Middle D
            case 2:
                colorClass = "melody-yellow";
                break; // Middle E
            case 3:
                colorClass = "melody-green";
                break; // Middle F
            case 4:
                colorClass = "melody-teal";
                break; // Middle G
            case 5:
                colorClass = "melody-blue";
                break; // Middle A
            case 6:
                colorClass = "melody-purple";
                break; // Middle B
            case 7:
                colorClass = "melody-violet";
                break; // Tenor C
        }
        return colorClass;
    }
    pxtmelody.getColorClass = getColorClass;
})(pxtmelody || (pxtmelody = {}));
var pxtmelody;
(function (pxtmelody) {
    var MelodyGallery = /** @class */ (function () {
        function MelodyGallery() {
            var _this = this;
            this.value = null;
            this.visible = false;
            this.timeouts = []; // keep track of timeout
            this.numSamples = pxtmelody.SampleMelodies.length;
            this.containerDiv = document.createElement("div");
            this.containerDiv.setAttribute("id", "melody-editor-gallery-outer");
            this.contentDiv = document.createElement("div");
            this.contentDiv.setAttribute("id", "melody-editor-gallery");
            this.itemBackgroundColor = "#DCDCDC";
            this.itemBorderColor = "white";
            this.initStyles();
            this.containerDiv.appendChild(this.contentDiv);
            this.containerDiv.style.display = "none";
            this.contentDiv.addEventListener("animationend", function () {
                if (!_this.visible) {
                    _this.containerDiv.style.display = "none";
                }
            });
            this.contentDiv.addEventListener('wheel', function (e) {
                e.stopPropagation();
            }, true);
        }
        MelodyGallery.prototype.getElement = function () {
            return this.containerDiv;
        };
        MelodyGallery.prototype.getValue = function () {
            return this.value;
        };
        MelodyGallery.prototype.show = function (notes) {
            this.pending = notes;
            this.containerDiv.style.display = "block";
            this.buildDom();
            this.visible = true;
            pxt.BrowserUtils.removeClass(this.contentDiv, "hidden-above");
            pxt.BrowserUtils.addClass(this.contentDiv, "shown");
        };
        MelodyGallery.prototype.hide = function () {
            this.visible = false;
            pxt.BrowserUtils.removeClass(this.contentDiv, "shown");
            pxt.BrowserUtils.addClass(this.contentDiv, "hidden-above");
            this.value = null;
            this.stopMelody();
        };
        MelodyGallery.prototype.clearDomReferences = function () {
            this.contentDiv = null;
            this.containerDiv = null;
        };
        MelodyGallery.prototype.layout = function (left, top, height) {
            this.containerDiv.style.left = left + "px";
            this.containerDiv.style.top = top + "px";
            this.containerDiv.style.height = height + "px";
        };
        MelodyGallery.prototype.buildDom = function () {
            while (this.contentDiv.firstChild)
                this.contentDiv.removeChild(this.contentDiv.firstChild);
            var buttonWidth = "255px";
            var buttonHeight = "45px";
            var samples = pxtmelody.SampleMelodies;
            this.buttons = [];
            for (var i = 0; i < samples.length; i++) {
                this.mkButton(samples[i], i, buttonWidth, buttonHeight);
            }
        };
        MelodyGallery.prototype.initStyles = function () {
            // Style injected directly because animations are mangled by the less compiler
            var style = document.createElement("style");
            style.textContent = "\n            #melody-editor-gallery {\n                margin-top: -100%;\n            }\n\n            #melody-editor-gallery.hidden-above {\n                margin-top: -100%;\n                animation: slide-up 0.2s 0s ease;\n            }\n\n            #melody-editor-gallery.shown {\n                margin-top: 0px;\n                animation: slide-down 0.2s 0s ease;\n            }\n\n            @keyframes slide-down {\n                0% {\n                    margin-top: -100%;\n                }\n                100% {\n                    margin-top: 0px;\n                }\n            }\n\n            @keyframes slide-up {\n                0% {\n                    margin-top: 0px;\n                }\n                100% {\n                    margin-top: -100%;\n                }\n            }\n            ";
            this.containerDiv.appendChild(style);
        };
        MelodyGallery.prototype.mkButton = function (sample, i, width, height) {
            var _this = this;
            var outer = mkElement("div", {
                className: "melody-gallery-button melody-editor-card",
                role: "menuitem",
                id: ":" + i
            });
            var icon = mkElement("i", {
                className: "music icon melody-icon"
            });
            var label = mkElement("div", {
                className: "melody-editor-text"
            });
            label.innerText = sample.name;
            var preview = this.createColorBlock(sample);
            var leftButton = mkElement("div", {
                className: "melody-editor-button left-button",
                role: "button",
                title: sample.name
            }, function () { return _this.handleSelection(sample); });
            leftButton.appendChild(icon);
            leftButton.appendChild(label);
            leftButton.appendChild(preview);
            outer.appendChild(leftButton);
            var rightButton = mkElement("div", {
                className: "melody-editor-button right-button",
                role: "button",
                title: lf("Preview {0}", sample.name)
            }, function () { return _this.togglePlay(sample, i); });
            var playIcon = mkElement("i", {
                className: "play icon"
            });
            this.buttons[i] = playIcon;
            rightButton.appendChild(playIcon);
            outer.appendChild(rightButton);
            this.contentDiv.appendChild(outer);
        };
        MelodyGallery.prototype.handleSelection = function (sample) {
            if (this.pending) {
                var notes = this.pending;
                this.pending = undefined;
                notes(sample.notes);
            }
        };
        MelodyGallery.prototype.playNote = function (note, colNumber, tempo) {
            var tone = 0;
            switch (note) {
                case "C5":
                    tone = 523;
                    break; // Tenor C
                case "B":
                    tone = 494;
                    break; // Middle B
                case "A":
                    tone = 440;
                    break; // Middle A
                case "G":
                    tone = 392;
                    break; // Middle G
                case "F":
                    tone = 349;
                    break; // Middle F
                case "E":
                    tone = 330;
                    break; // Middle E
                case "D":
                    tone = 294;
                    break; // Middle D
                case "C":
                    tone = 262;
                    break; // Middle C
            }
            // start note
            this.timeouts.push(setTimeout(function () {
                pxt.AudioContextManager.tone(tone);
            }, colNumber * this.getDuration(tempo)));
            // stop note
            this.timeouts.push(setTimeout(function () {
                pxt.AudioContextManager.stop();
            }, (colNumber + 1) * this.getDuration(tempo)));
        };
        // ms to hold note
        MelodyGallery.prototype.getDuration = function (tempo) {
            return 60000 / tempo;
        };
        MelodyGallery.prototype.previewMelody = function (sample) {
            // stop playing any other melody
            this.stopMelody();
            var notes = sample.notes.split(" ");
            for (var i = 0; i < notes.length; i++) {
                this.playNote(notes[i], i, sample.tempo);
            }
        };
        MelodyGallery.prototype.togglePlay = function (sample, i) {
            var button = this.buttons[i];
            if (pxt.BrowserUtils.containsClass(button, "play icon")) {
                // check for other stop icons and toggle back to play
                this.resetPlayIcons();
                pxt.BrowserUtils.removeClass(button, "play icon");
                pxt.BrowserUtils.addClass(button, "stop icon");
                this.previewMelody(sample);
                // make icon toggle back to play when the melody finishes
                this.timeouts.push(setTimeout(function () {
                    pxt.BrowserUtils.removeClass(button, "stop icon");
                    pxt.BrowserUtils.addClass(button, "play icon");
                }, (sample.notes.split(" ").length) * this.getDuration(sample.tempo)));
            }
            else {
                pxt.BrowserUtils.removeClass(button, "stop icon");
                pxt.BrowserUtils.addClass(button, "play icon");
                this.stopMelody();
            }
        };
        MelodyGallery.prototype.stopMelody = function () {
            while (this.timeouts.length)
                clearTimeout(this.timeouts.shift());
            pxt.AudioContextManager.stop();
        };
        MelodyGallery.prototype.resetPlayIcons = function () {
            for (var i = 0; i < this.numSamples; i++) {
                var button = this.buttons[i];
                if (pxt.BrowserUtils.containsClass(button, "stop icon")) {
                    pxt.BrowserUtils.removeClass(button, "stop icon");
                    pxt.BrowserUtils.addClass(button, "play icon");
                    break;
                }
            }
        };
        // create color representation of melody
        MelodyGallery.prototype.createColorBlock = function (sample) {
            var colorBlock = document.createElement("div");
            pxt.BrowserUtils.addClass(colorBlock, "melody-color-block");
            var notes = sample.notes.split(" ");
            for (var i = 0; i < notes.length; i++) {
                var className = pxtmelody.getColorClass(pxtmelody.noteToRow(notes[i]));
                var colorDiv = document.createElement("div");
                // create rounded effect on edge divs and fill in color
                if (i == 0) {
                    pxt.BrowserUtils.addClass(colorDiv, "left-edge sliver " + className);
                }
                else if (i == notes.length - 1) {
                    pxt.BrowserUtils.addClass(colorDiv, "right-edge sliver " + className);
                }
                else {
                    pxt.BrowserUtils.addClass(colorDiv, "sliver " + className);
                }
                colorBlock.appendChild(colorDiv);
            }
            return colorBlock;
        };
        return MelodyGallery;
    }());
    pxtmelody.MelodyGallery = MelodyGallery;
    function mkElement(tag, props, onClick) {
        var el = document.createElement(tag);
        return initElement(el, props, onClick);
    }
    function initElement(el, props, onClick) {
        if (props) {
            for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
                var key = _a[_i];
                if (key === "className")
                    el.setAttribute("class", props[key] + "");
                else
                    el.setAttribute(key, props[key] + "");
            }
        }
        if (onClick) {
            el.addEventListener("click", onClick);
        }
        return el;
    }
})(pxtmelody || (pxtmelody = {}));
var pxtmelody;
(function (pxtmelody) {
    var MelodyInfo = /** @class */ (function () {
        function MelodyInfo(name, notes, tempo) {
            this.name = name;
            this.notes = notes;
            this.tempo = tempo;
        }
        return MelodyInfo;
    }());
    pxtmelody.MelodyInfo = MelodyInfo;
    pxtmelody.SampleMelodies = [
        new MelodyInfo(lf("Scale"), "C5 B A G F E D C", 120),
        new MelodyInfo(lf("Reverse"), "C D E F G A B C5", 120),
        new MelodyInfo(lf("Mystery"), "E B C5 A B G A F", 120),
        new MelodyInfo(lf("Gilroy"), "A F E F D G E F", 120),
        new MelodyInfo(lf("Falling"), "C5 A B G A F G E", 120),
        new MelodyInfo(lf("Hopeful"), "G B A G C5 B A B", 120),
        new MelodyInfo(lf("Tokyo"), "B A G A G F A C5", 120),
        new MelodyInfo(lf("Paris"), "G F G A - F E D", 120),
        new MelodyInfo(lf("Rising"), "E D G F B A C5 B", 120),
        new MelodyInfo(lf("Sitka"), "C5 G B A F A C5 B", 120)
    ];
})(pxtmelody || (pxtmelody = {}));

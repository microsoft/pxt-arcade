export function loadAppInsights(includeCookie: any) {
    var appInsights = (window as any).appInsights || function(config: any) {
        // @ts-ignore
        function i(config){t[config]=function(){var i=arguments;t.queue.push(function(){t[config].apply(t,i)})}}var t={config:config},u=document,e=window,o="script",s="AuthenticatedUserContext",h="start",c="stop",l="Track",a=l+"Event",v=l+"Page",y=u.createElement(o),r,f;y.src=config.url||"https://az416426.vo.msecnd.net/scripts/a/ai.0.js";u.getElementsByTagName(o)[0].parentNode.appendChild(y);try{t.cookie=u.cookie}catch(p){}for(t.queue=[],t.version="1.0",r=["Event","Exception","Metric","PageView","Trace","Dependency"];r.length;)i("track"+r.pop());return i("set"+s),i("clear"+s),i(h+a),i(c+a),i(h+v),i(c+v),i("flush"),config.disableExceptionTracking||(r="onerror",i("_"+r),f=e[r],e[r]=function(config,i,u,e,o){var s=f&&f(config,i,u,e,o);return s!==!0&&t["_"+r](config,i,u,e,o),s}),t
    }({
        instrumentationKey:"9801ed01-c40f-46ec-aa40-2a1742a9e71c",
        disableAjaxTracking: true,
        overridePageViewDuration: false,
        disableExceptionTracking: true,
        isCookieUseDisabled: !includeCookie,
        isStorageUseDisabled: !includeCookie,
        url: "https://cdn.makecode.com/blob/dd22520c096be24e7432f5b46e8aad59711f31f0/ai.0.js" // Hardcode docs CDN url for experiment
    });
    (window as any).appInsights = appInsights;
    
    if (!isLocalHost()) {
        appInsights.queue.push(function () {
            appInsights.context.addTelemetryInitializer(function (envelope: any) {
                var telemetryItem = envelope.data.baseData;
                telemetryItem.properties = telemetryItem.properties || {};
                telemetryItem.properties["target"] = "arcade";
                telemetryItem.properties["cookie"] = includeCookie;
            });
        });
        appInsights.trackPageView(null, scrubUrl(window.location.toString()), {urlReferrer: scrubUrl(document.referrer.toString())});
    }

    // Scrub the key (if any) from the URL.
    function scrubUrl(url: any) {
        var scriptIdRegex = /(?:\d{5}-\d{5}-\d{5}-\d{5})|(?:_[0-9a-zA-Z]{12})/g;
        return url.replace(scriptIdRegex, "xxxxx-xxxxx-xxxxx-xxxxx");
    }
}

export function tickEvent(id: string, data?: any, measures?: any) {
    // Don't log events for localhost
    if (!isLocalHost()) (window as any).appInsights.trackEvent(id, data, measures);
}

function isLocalHost(): boolean {
    try {
        return typeof window !== "undefined"
            && /^http:\/\/(localhost|127\.0\.0\.1):\d+\//.test(window.location.href)
            && !/nolocalhost=1/.test(window.location.href);
    } catch (e) { return false; }
}
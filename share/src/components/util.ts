import { Bitmap } from "../sprite-editor/bitmap";

export interface HttpRequestOptions {
    url: string;
    method?: string; // default to GET
    data?: any;
    headers?: {[index: string]: string};
    allowHttpErrors?: boolean; // don't treat non-200 responses as errors
    allowGzipPost?: boolean;
    responseArrayBuffer?: boolean;
    forceLiveEndpoint?: boolean;
}

export interface HttpResponse {
    statusCode: number;
    headers: {[index: string]: string | string[]};
    buffer?: any;
    text?: string;
    json?: any;
}

export interface UserProject {
    binJs: string;
    mainTs: string;
    mainBlocks: string;
    screenshot: string;
}

export function requestAsync(options: HttpRequestOptions): Promise<HttpResponse> {
    return httpRequestCoreAsync(options)
        .then(resp => {
            if ((resp.statusCode != 200 && resp.statusCode != 304) && !options.allowHttpErrors) {
                let msg = `Bad HTTP status code: ${resp.statusCode} at ${options.url}; message: ${(resp.text || "").slice(0, 500)}`;
                let err: any = new Error(msg)
                err.statusCode = resp.statusCode
                return Promise.reject(err)
            }
            if (resp.text && /application\/json/.test(resp.headers["content-type"] as string))
                resp.json = JSON.parse(resp.text)
            return resp
        })
}

export function httpGetTextAsync(url: string) {
    return requestAsync({ url: url }).then(resp => resp.text)
}

export function httpGetJsonAsync(url: string) {
    return requestAsync({ url: url }).then(resp => resp.json)
}

export function httpPostJsonAsync(url: string, data: any) {
    return requestAsync({ url: url, data: data || {} }).then(resp => resp.json)
}

function httpRequestCoreAsync(options: HttpRequestOptions) {
    return new Promise<HttpResponse>((resolve, reject) => {
        let client: XMLHttpRequest;
        let resolved = false

        let headers = { ...options.headers }

        client = new XMLHttpRequest();
        if (options.responseArrayBuffer)
            client.responseType = "arraybuffer";
        client.onreadystatechange = () => {
            if (resolved) return // Safari/iOS likes to call this thing more than once

            if (client.readyState == 4) {
                resolved = true
                let res: HttpResponse = {
                    statusCode: client.status,
                    headers: {},
                    buffer: (client as any).responseBody || client.response,
                    text: options.responseArrayBuffer ? undefined : client.responseText,
                }
                const allHeaders = client.getAllResponseHeaders();
                allHeaders.split(/\r?\n/).forEach(l => {
                    let m = /^\s*([^:]+): (.*)/.exec(l)
                    if (m) res.headers[m[1].toLowerCase()] = m[2]
                })
                resolve(res)
            }
        }

        let data = options.data
        let method = options.method || (data == null ? "GET" : "POST");

        let buf: any;

        if (data == null) {
            buf = null
        } else if (data instanceof Uint8Array) {
            buf = data
        } else if (typeof data == "object") {
            buf = JSON.stringify(data)
            headers["content-type"] = "application/json; charset=utf8"
        } else if (typeof data == "string") {
            buf = data
        } else {
            throw new Error("bad data");
        }

        client.open(method, options.url);

        Object.keys(headers).forEach(k => {
            client.setRequestHeader(k, headers[k])
        })

        if (buf == null)
            client.send();
        else
            client.send(buf);
    })
}

export function shareScriptAsync(screenshotUri: string, mainTS: string, mainBlocks: string) {
    let thumbnailBuffer: string;
    let thumbnailMimeType: string;

    if (screenshotUri) {
        const m = /^data:(image\/(png|gif));base64,([a-zA-Z0-9+/]+=*)$/.exec(screenshotUri);
        if (m) {
            thumbnailBuffer = m[3];
            thumbnailMimeType = m[1];
        }
    }

    const text = {
        ...scriptText
    }

    text["main.ts"] = mainTS;
    text["main.blocks"] = mainBlocks;

    const scrReq = {
        name: "Arcade Game",
        target: "arcade",
        targetVersion: "0.12.17",
        description: "Made with ❤️ in Microsoft MakeCode Arcade.",
        editor: "blocksprj",
        text,
        meta: {
            // versions: pxt.appTarget.versions,
            // blocksHeight: meta.blocksHeight,
            // blocksWidth: meta.blocksWidth
        },
        thumbnailBuffer,
        thumbnailMimeType
    };

    const opts: HttpRequestOptions = {
        headers: {},
        url: "https://arcade.makecode.com/api/scripts",
        data: scrReq,
        allowGzipPost: true
    }

    return requestAsync(opts);
}

const scriptText = {
    "README.md": "",
    "main.blocks": "",
    "main.ts": "",
    "pxt.json": "{\n    \"name\": \"My First Game\",\n    \"dependencies\": {\n        \"device\": \"*\",\n \"animation\": \"*\"\n   },\n    \"description\": \"\",\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\"\n    ],\n    \"preferredEditor\": \"tsprj\",\n    \"targetVersions\": {\n        \"branch\": \"v0.12.17\",\n        \"tag\": \"v0.12.17\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/bbca8732cef11a27ce09394ba07a49d406ab792c\",\n        \"target\": \"0.12.17\",\n        \"pxt\": \"5.17.29\"\n    }\n}"
}
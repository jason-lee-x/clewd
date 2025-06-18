/*
* https://gitgud.io/ahsk/clewd
* https://github.com/h-a-s-k/clewd
*/
'use strict';

const {randomInt: r, randomBytes: Y, randomUUID: H} = require('node:crypto'), {version: C} = require('../package.json'), Z = (new TextDecoder, 
new TextEncoder), X = 'clewd v' + C, ee = {
    end: Buffer.from([ 104, 116, 116, 112, 115, 58, 47, 47, 99, 108, 97, 117, 100, 101, 46, 97, 105 ]).toString(),
    mdl: JSON.parse(Buffer.from([ 91, 34, 99, 108, 97, 117, 100, 101, 45, 111, 112, 117, 115, 45, 52, 45, 50, 48, 50, 53, 48, 53, 49, 52, 34, 44, 34, 99, 108, 97, 117, 100, 101, 45, 111, 112, 117, 115, 45, 52, 45, 50, 48, 50, 53, 48, 53, 49, 52, 45, 99, 108, 97, 117, 100, 101, 45, 97, 105, 45, 112, 114, 111, 34, 44, 34, 99, 108, 97, 117, 100, 101, 45, 115, 111, 110, 110, 101, 116, 45, 52, 45, 50, 48, 50, 53, 48, 53, 49, 52, 45, 99, 108, 97, 117, 100, 101, 45, 97, 105, 34, 44, 34, 99, 108, 97, 117, 100, 101, 45, 115, 111, 110, 110, 101, 116, 45, 52, 45, 50, 48, 50, 53, 48, 53, 49, 52, 34, 44, 34, 99, 108, 97, 117, 100, 101, 45, 51, 45, 55, 45, 115, 111, 110, 110, 101, 116, 45, 50, 48, 50, 53, 48, 50, 49, 57, 34, 44, 34, 99, 108, 97, 117, 100, 101, 45, 51, 45, 53, 45, 104, 97, 105, 107, 117, 45, 50, 48, 50, 52, 49, 48, 50, 50, 34, 44, 34, 99, 108, 97, 117, 100, 101, 45, 51, 45, 53, 45, 115, 111, 110, 110, 101, 116, 45, 50, 48, 50, 52, 48, 54, 50, 48, 34, 44, 34, 99, 108, 97, 117, 100, 101, 45, 51, 45, 53, 45, 115, 111, 110, 110, 101, 116, 45, 50, 48, 50, 52, 49, 48, 50, 50, 34, 44, 34, 99, 108, 97, 117, 100, 101, 45, 51, 45, 111, 112, 117, 115, 45, 50, 48, 50, 52, 48, 50, 50, 57, 34, 44, 34, 99, 108, 97, 117, 100, 101, 45, 51, 45, 115, 111, 110, 110, 101, 116, 45, 50, 48, 50, 52, 48, 50, 50, 57, 34, 44, 34, 99, 108, 97, 117, 100, 101, 45, 51, 45, 104, 97, 105, 107, 117, 45, 50, 48, 50, 52, 48, 51, 48, 55, 34, 44, 34, 99, 108, 97, 117, 100, 101, 45, 50, 46, 49, 34, 44, 34, 99, 108, 97, 117, 100, 101, 45, 50, 46, 48, 34, 44, 34, 99, 108, 97, 117, 100, 101, 45, 105, 110, 115, 116, 97, 110, 116, 45, 49, 46, 50, 34, 93 ]).toString()).sort(),
    zone: () => Buffer.from([ 65, 109, 101, 114, 105, 99, 97, 47, 78, 101, 119, 95, 89, 111, 114, 107 ]).toString(),
    agent: () => Buffer.from([ 77, 111, 122, 105, 108, 108, 97, 47, 53, 46, 48, 32, 40, 77, 97, 99, 105, 110, 116, 111, 115, 104, 59, 32, 73, 110, 116, 101, 108, 32, 77, 97, 99, 32, 79, 83, 32, 88, 32, 49, 48, 95, 49, 53, 95, 55, 41, 32, 65, 112, 112, 108, 101, 87, 101, 98, 75, 105, 116, 47, 54, 48, 53, 46, 49, 46, 49, 53, 32, 40, 75, 72, 84, 77, 76, 44, 32, 108, 105, 107, 101, 32, 71, 101, 99, 107, 111, 41, 32, 86, 101, 114, 115, 105, 111, 110, 47, 49, 56, 46, 52, 32, 83, 97, 102, 97, 114, 105, 47, 54, 48, 53, 46, 49, 46, 49, 53 ]).toString(),
    hdr: e => ({
        'Content-Type': 'application/json',
        'anthropic-client-platform': 'web_claude_ai',
        'anthropic-client-sha': 'unknown',
        'anthropic-client-version': 'unknown',
        Referer: `${ee.end}/${e ? 'chat/' + e : ''}`,
        Origin: '' + ee.end
    })
}, te = (e, t = false) => {
    let s = -1;
    const n = e.match(/(?:(?:\\n)|\n){2}((?:Human|H)[:꞉˸᠄﹕]+ ?)/gm);
    n?.length > 0 && (s = t ? e.lastIndexOf(n[n.length - 1]) : e.indexOf(n[0]));
    return s;
}, se = (e, t = false) => {
    let s = -1;
    const n = e.match(/(?:(?:\\n)|\n){2}((?:Assistant|A)[:꞉˸᠄﹕]+ ?)/gm);
    n?.length > 0 && (s = t ? e.lastIndexOf(n[n.length - 1]) : e.indexOf(n[0]));
    return s;
}, ne = /^data:image\/\w+;base64,/;

module.exports = {
    Main: X,
    AI: ee,
    encodeDataJSON: e => Z.encode(`event: completion\ndata: ${JSON.stringify(e)}\n\n`),
    isBase64String: e => ne.test(e),
    genericFixes: e => e.replace(/(\r\n|\r|\\n)/gm, '\n'),
    checkResErr: async (e, t = true) => {
        let s, n, r;
        'string' == typeof e && (n = (e = JSON.parse(e)).error);
        if (e.status && (e.status < 200 || e.status >= 300)) {
            n || (n = (await e.json()).error);
            r = e.status;
            s = Error((e.statusText ? e.statusText + ', u' : 'U') + 'nexpected response code');
        }
        if (n) {
            s.status = n?.status || r;
            s.planned = true;
            n.message && n.message.startsWith('{') && n.message.endsWith('}') && (n.message = JSON.parse(n.message));
            if (n.message) {
                'string' != typeof n.message ? n.message.type && (s.type = n.message.type) : s.message += ' - ' + n.message;
                !s.type && n.type && (s.type = n.type);
            }
            s.message = `${s.status}! ${s.message} (${s.type})`;
            if (429 === e.status) {
                let e;
                n.resets_at ? e = new Date(1e3 * n.resets_at) : n.message.resetsAt && (e = new Date(1e3 * n.message.resetsAt));
                if (e) {
                    const t = ((e.getTime() - Date.now()) / 1e3 / 60 / 60).toFixed(1);
                    s.message += `, expires in ${t} hours`;
                }
            }
        }
        if (s) {
            s.code || (s.code = s.status || r);
            if (t) {
                throw s;
            }
        }
        return s;
    },
    bytesToSize: (e = 0, t = 2) => {
        if (0 === e) {
            return '0 B';
        }
        const s = t < 0 ? 0 : t, n = Math.round(Math.log(e) / Math.log(1024));
        return `${(e / Math.pow(1024, n)).toFixed(s)} ${[ 'B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB' ][n]}`;
    },
    indexOfAny: (e, t = false) => {
        let s = -1;
        const n = [ te(e, t), se(e, t) ].filter((e => e > -1)).sort();
        s = t ? n.reverse()[0] : n[0];
        return isNaN(s) ? -1 : s;
    },
    parseEvent: e => {
        let t, s;
        if (e.startsWith('{') && e.endsWith('}')) {
            t = 'raw';
            s = e;
        } else {
            const [n, r] = e.split('\n');
            t = n.split(/:(.+)/)[1].trim();
            s = r.split(/:(.+)/)[1].trim();
        }
        return {
            eventType: t,
            eventData: s
        };
    },
    rgxBase64: ne,
    fileName: () => {
        const e = r(5, 15);
        let t = Y(e).toString('hex');
        for (let e = 0; e < t.length; e++) {
            const s = t.charAt(e);
            isNaN(s) && r(1, 5) % 2 == 0 && ' ' !== t.charAt(e - 1) && (t = t.slice(0, e) + ' ' + t.slice(e));
        }
        return t + '.txt';
    },
    indexOfA: se,
    indexOfH: te,
    setTitle: e => {
        e = `${X} - ${e}`;
        process.title !== e && (process.title = e);
    }
};
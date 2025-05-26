import * as rt from 'runtypes'
import { PROJECT } from '../generated/version';

const repository = PROJECT
const prToCacheUrl = '/api/to-cache';

type SwDoc = {
    _id: string;
    toCache: string[];
}

export const ToCacheRes = rt.Array(rt.String);

export const TO_LOAD = fetch(prToCacheUrl,
    {
        body: JSON.stringify(repository),
        method: 'POST'
    }
).then(res => res.json()).then(json => ToCacheRes.guard(json) ? json : []).catch(reason => { console.error(reason); return [] })


//
// Diese Datei muss immer identisch sein mit serviceWorker-for-pr-push-newsletter3/src/messages.ts bzw. pr-newsletter/app/_lib/client/serviceWorkerMessages.ts
// insbesondere die Konstante VERSION darin.

import * as rt from "runtypes"

export const VERSION = 7

export const GetVersionReq = rt.Record({
    type: rt.Literal('getVersion'),
})
export type TGetVersionReq = rt.Static<typeof GetVersionReq>

export const GetVersionRes = rt.Record({
    type: rt.Literal('success'),
    version: rt.Number,
})
export type TGetVersionRes = rt.Static<typeof GetVersionRes>

export const SkipWaiting = rt.Record({
    type: rt.Literal('skipWaiting'),
})
export type TSkipWaiting = rt.Static<typeof SkipWaiting>


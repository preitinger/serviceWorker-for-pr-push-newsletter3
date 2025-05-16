import * as rt  from "runtypes"

export const PushData = rt.Object({
  title: rt.String,
  body: rt.String,
  url: rt.String,
  icon: rt.Optional(rt.String.or(rt.Undefined)),
})
export type PushData = rt.Static<typeof PushData>

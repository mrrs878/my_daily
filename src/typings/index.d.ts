type EventParams<T> = { target?: { dataset?: T } }
type ObjectKeyValue<T> = { [propName: string]: T }
type ModuleRes = { code: number; msg: string }

interface workBoxI {
  core: {};
  precaching: {};
  routing: {};
}
declare let workbox: workBoxI

declare function onNavBarClickLeft (): void
declare function loginToast (): void

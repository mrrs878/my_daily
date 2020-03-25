type ObjectKeyValue<T> = { [propName: string]: T }
type ModuleRes = { code: number; msg: string }

interface workBoxI {
  core: {};
  precaching: {};
  routing: {};
}
declare var workbox: workBoxI

declare function onNavBarClickLeft (): void
declare function loginToast (): void

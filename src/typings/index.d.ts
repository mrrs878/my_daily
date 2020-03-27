type ObjectKeyValue<T> = { [propName: string]: T }
type ModuleRes = { code: number; msg: string }

interface workBoxI {
  core: {
    setCacheNameDetails: Function
  };
  precaching: {
    precacheAndRoute: Function
  };
  routing: {
    registerRoute: Function
  };
  strategies: {
    NetworkFirst: Function
  }
}
declare var workbox: workBoxI

declare function onNavBarClickLeft (): void
declare function loginToast (): void

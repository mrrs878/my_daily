import Vue from 'vue'
import App from './App.vue'
import router, { ROUTES_MAP } from './router'
import store from './store'
import './registerServiceWorker'

import VConsole from 'vconsole'
import { Button, Cell, Checkbox, Icon, NavBar, Field, Popup, Dialog, CellGroup, Skeleton, PullRefresh, Picker } from 'vant'
import { longPress } from './plugins/directive'

Vue.config.productionTip = false
Vue.use(Button).use(Cell).use(Checkbox).use(Icon).use(NavBar).use(Field).use(Popup).use(Dialog)
  .use(CellGroup).use(Skeleton).use(PullRefresh).use(Picker)
Vue.directive('longPress', longPress)

if (!(navigator.platform.includes('Win') || navigator.platform.includes('Mac'))) {
  Vue.prototype.$vConsole = new VConsole()
}

Vue.prototype.onNavBarClickLeft = () => router.back()
window.loginToast = function (): void {
  Dialog.confirm({
    title: '提示',
    message: '未登录，前往登录?',
    confirmButtonText: '去登录'
  }).then(() => {
    router.push(ROUTES_MAP.login).catch(err => console.log(err))
  })
}

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import VConsole from 'vconsole'
import { Button, Cell, Checkbox, Icon, NavBar, Field, Popup, Dialog, CellGroup, Skeleton, PullRefresh } from 'vant'
import { longPress } from './plugins/directive'

Vue.config.productionTip = false
Vue.use(Button).use(Cell).use(Checkbox).use(Icon).use(NavBar).use(Field).use(Popup).use(Dialog)
  .use(CellGroup).use(Skeleton).use(PullRefresh)
Vue.directive('longPress', longPress)

Vue.prototype.onNavBarClickLeft = () => router.back()
if (process.env.NODE_ENV !== 'production' && !(navigator.platform.includes('Win') || navigator.platform.includes('Mac'))) {
  Vue.prototype.$vConsole = new VConsole()
}

localStorage.setItem('access_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTM1OTA2NDAsInVzZXJfaWQiOjEsIm5hbWUiOiJhZG1pbiJ9.PSD4PVQOcPr1s1MDDdNqu1fwjFJ-QpGC04ydBeZaQcY')

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

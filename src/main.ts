import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import VConsole from 'vconsole'
import { Button, Cell, Checkbox, Icon, NavBar, Field, Popup } from 'vant'
import { longPress } from './plugins/directive'

Vue.config.productionTip = false
Vue.use(Button).use(Cell).use(Checkbox).use(Icon).use(NavBar).use(Field).use(Popup)
Vue.directive('longPress', longPress)

Vue.prototype.onNavBarClickLeft = () => router.back()
if (process.env.NODE_ENV !== 'production' && !(navigator.platform.includes('Win') || navigator.platform.includes('Mac'))) {
  Vue.prototype.$vConsole = new VConsole()
}

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

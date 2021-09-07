import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'
import { defineCustomElements as defineIonPhaser } from '@ion-phaser/core/loader'

Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.prototype.$log = console.log.bind(console)
Vue.config.productionTip = false;
Vue.config.ignoredElements = [/ion-\w*/];

// Bind the IonPhaser custom element to the window object
defineIonPhaser(window);

new Vue({
  el: '#app',
  router,
  store,
  icons,
  template: '<App/>',
  components: {
    App
  }
})

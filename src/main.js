import Vue from 'vue'
import App from './App.vue'
import {FakePlugin} from 'sleepwalker-fakezz'

Vue.use(FakePlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

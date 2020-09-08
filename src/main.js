import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

// eslint-disable-next-line no-unused-vars
import VueSmoothScroll from 'vue2-smooth-scroll'
Vue.use(VueSmoothScroll);

Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init();
  },
  render: h => h(App),
}).$mount('#app')

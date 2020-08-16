import Vue from 'vue';
import Dev from './serve.vue';

Vue.config.productionTip = false;

export default new Vue({
  render: (h) => h(Dev)
}).$mount('#app')
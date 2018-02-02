// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';

import 'vue-awesome/icons/search';
import 'vue-awesome/icons/arrow-circle-o-left';
import 'vue-awesome/icons/close';
import 'vue-awesome/icons/long-arrow-left';
import 'vue-awesome/icons/arrow-left';
import Icon from 'vue-awesome/components/Icon';

Vue.config.productionTip = false
Vue.component('icon', Icon);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

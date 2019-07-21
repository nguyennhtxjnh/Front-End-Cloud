// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify';
import Notificaton from 'vue-notification';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
import CKEditor from '@ckeditor/ckeditor5-vue';

Vue.config.productionTip = false
Vue.use(Vuetify, {
  iconfont: 'mdi'
});
Vue.use(CKEditor);
Vue.use(Notificaton);
/* eslint-disable */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

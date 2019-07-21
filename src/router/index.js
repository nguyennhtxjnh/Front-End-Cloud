/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from "@/components/Login";
import ManageImage from "@/components/ManageImage";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/manage',
      name: 'ManageImage',
      component: ManageImage
    }
  ]
})
/* eslint-disable */

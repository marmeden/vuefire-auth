// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBNIx_WhvjoG9Zmo8o1kwm1m0NO3tkaa3w',
  authDomain: 'vueauth-d5b6d.firebaseapp.com',
  databaseURL: 'https://vueauth-d5b6d.firebaseio.co',
  projectId: 'vueauth-d5b6d',
  storageBucket: 'vueauth-d5b6d.appspot.com',
  messagingSenderId: '821559502943'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

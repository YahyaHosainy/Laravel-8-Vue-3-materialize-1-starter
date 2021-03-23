
import { createApp } from 'vue';

import App from './App.vue'

import router from './router/router'

import reactive from './store/reactive'

import static_ from './store/static'

window.store = {
  reactive,
  static: static_
}

import 'materialize-css'

import './registerServiceWorker'

createApp(App).use(router).mount("#app")

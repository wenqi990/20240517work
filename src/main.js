import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap' // 套用整個專案
const app = createApp(App)

app.use(router)

app.mount('#app')

// import './assets/main.css'
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import {lazyPlugin} from '@/directives/index'
// import { getCategory } from './apis/testApi'
// getCategory().then(res=>{
//   console.log('111',res)
// })
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)

app.mount('#app')



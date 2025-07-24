// import './assets/main.css'
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//引入懒加载指令插件并注册
import {lazyPlugin} from '@/directives/index'
//引入全局组件插件并注册
import { componentPlugin } from './components'
// import { getCategory } from './apis/testApi'
// getCategory().then(res=>{
//   console.log('111',res)
// })
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)

app.mount('#app')



import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/style/index.scss'

const app = createApp(App)
//添加组件
// app.component('Icon', Icon)
// 使用配置的路由
app.use(router)
app.mount('#app')

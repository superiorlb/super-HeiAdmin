import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import 'element-plus/theme-chalk/dark/css-vars.css'
import './utils/nprogress';
import './mock/mock'
import router from './router/index'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from 'pinia'
const pinia = createPinia()
const app = createApp(App).use(router).use(pinia).use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app')
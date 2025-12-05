import { createApp } from 'vue'
// import './style.css' // Nếu có
import App from './App.vue'
import router from './router' // Import router

const app = createApp(App)
app.use(router) // Sử dụng router
app.mount('#app')
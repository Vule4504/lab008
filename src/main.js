import { createApp } from "vue";

// Bootstrap CSS + JS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";

// import './style.css' // Nếu có
import App from "./App.vue";
import router from "./router"; // Import router

const app = createApp(App);
app.use(router); // Sử dụng router
app.mount("#app");

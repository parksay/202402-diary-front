import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import ArgonDashboard from "./argon-dashboard";
import axios from "axios";
import globalFunctions from "./assets/js/globalFunctions.js";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(globalFunctions);
app.config.globalProperties.axios = axios;
app.use(ArgonDashboard);
app.mount("#app");

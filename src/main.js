import { createApp } from "vue"
import { createPinia } from "pinia"
import "element-plus/es/components/message/style/css"
import { ElMessage } from "element-plus"

import App from "./App.vue"
import router from "./router"

// import "./assets/main.css";
import "./styles/normalize.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElMessage)

app.mount("#app")

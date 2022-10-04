/*  eslint-disable vue/multi-word-component-names */
import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import router from "./router";
import { createPinia } from "pinia";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
import Avatar from "primevue/avatar";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Button from "primevue/button";
import Checkbox from "primevue/checkbox";
import InputNumber from "primevue/inputnumber";
import Calendar from "primevue/calendar";
import Textarea from "primevue/textarea";
import FileUpload from "primevue/fileupload";

const pinia = createPinia();
const app = createApp(App);

app.component("FileUpload", FileUpload);
app.component("Textarea", Textarea);
app.component("Calendar", Calendar);
app.component("InputNumber", InputNumber);
app.component("Checkbox", Checkbox);
app.component("Button", Button);
app.component("InputText", InputText);
app.component("Password", Password);
app.component("Avatar", Avatar);
app.use(PrimeVue);
app.use(router);
app.use(pinia);
app.mount("#app");

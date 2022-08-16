import { createApp } from 'vue'
import App from './App.vue'
import vue from "@vue/cli-plugin-eslint/eslintOptions";

vue.config.productionTip=false,
createApp(App).mount('#app')


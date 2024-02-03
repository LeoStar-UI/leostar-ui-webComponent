import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import OnuUI from 'onu-ui'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'onu-ui/dist/style.css'
import 'uno.css'
import { applyPolyfills, defineCustomElements } from 'leostar-ui/loader';

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements();
});
const app = createApp(App)
const pinia = createPinia()
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
pinia.use(piniaPluginPersistedstate)
app.use(router)
app.use(pinia)
app.use(OnuUI)
app.mount('#app')

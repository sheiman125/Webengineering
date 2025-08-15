import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import router from './router'

import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import Menubar from 'primevue/menubar'
import Button from 'primevue/button'
import Card from 'primevue/card'

const app = createApp(App)

app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

app.component('Menubar', Menubar)
app.component('Button', Button)
app.component('Card', Card)

app.mount('#app')

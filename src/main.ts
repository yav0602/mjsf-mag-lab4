import '@/assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import directivesPlugin from '@/plugins/directives'
import i18n from '@/plugins/i18n'
import App from './App.vue'
// import DemoI18n from '@/DemoI18n.vue'
import router from './router'
import serviceProvider from './plugins/serviceProvider'
import directiveTooltip from './plugins/tooltip'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(directivesPlugin)
app.use(serviceProvider)
app.use(directiveTooltip)
app.use(i18n, {
  greetings: {
    hi: 'Привіт!'
  }
})

app.mount('#app')

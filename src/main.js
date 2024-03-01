import 'primeicons/primeicons.css'
import 'primevue/resources/themes/aura-dark-green/theme.css'
import 'primeflex/primeflex.css'
import '@/assets/app.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import FloatLabel from 'primevue/floatlabel'
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import Ripple from 'primevue/ripple';
import Tooltip from 'primevue/tooltip';
import MeterGroup from 'primevue/metergroup';
import App from './App.vue'
import router from './router'
import i18n from './plugins/i18n'



const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(PrimeVue);
app.use(ToastService)
app.directive('ripple', Ripple);
app.directive('tooltip', Tooltip);
app.component('FloatLabel', FloatLabel)
app.component('MeterGroup', MeterGroup)
// eslint-disable-next-line vue/multi-word-component-names
app.component('Toast', Toast)
app.mount('#app')

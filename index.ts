import { defineAsyncComponent } from 'vue'

export const MainForm = defineAsyncComponent(() => import('./components/MainForm.vue'))

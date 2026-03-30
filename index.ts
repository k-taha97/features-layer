import { defineAsyncComponent } from 'vue'

export const GetDetails = defineAsyncComponent(() => import('./components/api-actions/GetDetails.vue'))
export const ListData = defineAsyncComponent(() => import('./components/api-actions/ListData.vue'))

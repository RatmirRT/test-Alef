import { createRouter, createWebHistory } from 'vue-router'
import formPage from '@/views/FormPage.vue'
import previewPage from '@/views/PreviewPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'formPage',
      component: formPage
    },
    {
      path: '/preview',
      name: 'previewPage',
      component: previewPage
    }
  ]
})

export default router

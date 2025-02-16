import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuestionsView from '../views/QuestionsView.vue'
import ResultView from '../views/ResultView.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/questions',
      name: 'Questions',
      component: QuestionsView,
    },
    {
      path: '/result',
      name: 'Result',
      component: ResultView,
    },
  ],
})

export default router

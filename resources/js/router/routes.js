import root from '../pages/root.vue'
import about from '../pages/about.vue'
import NotFound from '../pages/404.vue'

export default [
  {
    path: '/',
    component: root,
    name: 'root'
  },
  {
    path: '/about',
    component: about,
    name: 'about'
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    name: 'NotFound'
  }
]
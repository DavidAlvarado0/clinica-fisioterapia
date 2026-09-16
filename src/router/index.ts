import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FisioterapiaView from '../views/FisioterapiaView.vue'
import PatologiasView from '../views/PatologiasView.vue'
import EstresAnsiedadView from '../views/EstresAnsiedadView.vue'
import OrtopediaView from '../views/OrtopediaView.vue'
import OthersView from '../views/OthersView.vue'
import TreatmentDetailView from '../views/TreatmentDetailView.vue'
import QuienesSomosView from '../views/QuienesSomosView.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/fisioterapia', name: 'Fisioterapia', component: FisioterapiaView },
  { path: '/patologias', name: 'Patologias', component: PatologiasView },
  { path: '/estres-ansiedad', name: 'EstresAnsiedad', component: EstresAnsiedadView },
  { path: '/ortopedia', name: 'Ortopedia', component: OrtopediaView },
  { path: '/otros', name: 'Others', component: OthersView },
  { path: '/servicio/:slug', name: 'TreatmentDetail', component: TreatmentDetailView },
  { path: '/quienes-somos', name: 'QuienesSomos', component: QuienesSomosView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PatientsView from '../views/PatientsView.vue'
import Login from '../components/Login.vue'
import EvaluateView from '../views/EvaluateView.vue'
import SettingsView from '../views/SettingsView.vue'
import PatientDetailView from '../views/PatientDetailView.vue'

const routes = [
    { path: '/dashboard', name: 'home', component: HomeView },
    { path: '/', name: 'login', component: Login },
    { path: '/patients/:id', component: PatientDetailView },
    { path: '/patients', name: 'Patients', component: PatientsView },
    { path: '/evaluate', name: 'Evaluate', component: EvaluateView },
    { path: '/settings', name: 'Settings', component: SettingsView },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

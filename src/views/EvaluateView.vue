<template>
  <div class="dashboard-container">
    <!-- Sidebar -->
    <aside class="sidebar">
      <h2 class="sidebar-title">{{ currentTitle }}</h2>
      <p class="sidebar-user">Dr. {{ doctorName }}</p>
      <nav class="sidebar-menu">
        <router-link to="/dashboard" class="menu-item">Dashboard</router-link>
        <router-link to="/patients" class="menu-item">Patients</router-link>
        <router-link to="/evaluate" class="menu-item">Evaluate</router-link>
        <router-link to="/settings" class="menu-item">Settings</router-link>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="dashboard-main">

    </main>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

const patients = ref([
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Mary Jane' }
])

// Simulate logged-in user from session (replace with real auth later)
const doctorName = ref(localStorage.getItem('username') || 'Unknown')

window.addEventListener('storage', () => {
  doctorName.value = localStorage.getItem('username') || 'Unknown'
})


// Title updates based on route
const route = useRoute()
const routeTitles = {
  '/dashboard': 'Dashboard',
  '/patients': 'Patients',
  '/evaluate': 'Evaluate',
  '/settings': 'Settings',
}

const currentTitle = computed(() => routeTitles[route.path] || 'Dashboard')

function addPatient() {
  const name = prompt("Enter patient name:")
  if (name) {
    patients.value.push({ id: Date.now(), name })
  }
}
</script>


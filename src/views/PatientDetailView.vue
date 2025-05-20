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
    <main class="settings-main">
      <div class="patient-detail-layout">
        <!-- Left Side -->
        <div class="left-section glass-box">
          <h3>👤 Patient Information</h3>

          <label>Name:</label>
          <input v-model="editable.name" />

          <label>Age:</label>
          <input v-model="editable.age" type="number" />

          <label>Gender:</label>
          <input v-model="editable.gender" />

          <label>Last Visit:</label>
          <input v-model="editable.lastVisit" type="date" />

          <label>Diagnosis:</label>
          <input v-model="editable.diagnosis" />

          <label>Notes:</label>
          <textarea v-model="editable.notes" rows="4" />

          <button @click="save">💾 Save</button>
        </div>

        <!-- Right Side -->
        <div class="right-section">
          <div class="glass-box media-box">
            <h3>📷 Walking Images</h3>
            <div class="media-grid">
              <img v-for="(img, index) in patient.images" :key="index" :src="img" alt="Patient Walk Image" />
            </div>
          </div>

          <div class="glass-box media-box">
            <h3>🎥 Walking Video</h3>
            <video controls class="walk-video">
              <source :src="patient.video" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

    </main>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import {computed, reactive, ref} from 'vue'

const route = useRoute()
const patientId = Number(route.params.id)

const patients = [
  {
    id: 1,
    name: 'John Doe',
    age: 52,
    gender: 'Male',
    lastVisit: '2024-12-12',
    diagnosis: 'Gait Irregularity',
    notes: 'Shows signs of spasticity during left-foot swing phase.',
    images: [
      '/images/walk1.jpg',
      '/images/walk2.jpg'
    ],
    video: '/videos/john_doe_walk.mp4'
  },
  {
    id: 2,
    name: 'Mary Jane',
    age: 34,
    gender: 'Female',
    lastVisit: '2025-01-05',
    diagnosis: 'Normal',
    notes: 'No irregularities observed. Recommended for routine annual checkup.',
    images: [],
    video: '/videos/mary_jane_walk.mp4'
  }
  // You can define more mock patients here...
]

const patient = computed(() => patients.find(p => p.id === patientId))
const editable = reactive({ ...patient.value })

function save() {
  alert('Changes saved! (Just mock for now)')
  // In a real app, you'd call an API to persist changes
}

// Simulate logged-in user from session (replace with real auth later)
const doctorName = ref(localStorage.getItem('username') || 'Unknown')

window.addEventListener('storage', () => {
  doctorName.value = localStorage.getItem('username') || 'Unknown'
})

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


<style scoped>
.patient-detail-layout {
  display: flex;
  height: calc(100vh - 40px); /* Account for top/bottom padding */
  gap: 100px;
  padding: 20px;
}

.left-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.right-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
}

.glass-box {
  padding: 20px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #eee;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

input, textarea {
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  padding: 8px 12px;
  color: white;
  margin-bottom: 8px;
  width: 100%;
}

button {
  margin-top: auto;
  padding: 10px 16px;
  background-color: #00BD7E33;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #00a86b;
}

.media-box {
  height: 48%;
  overflow: hidden;
  padding: 20px;
}

.media-grid {
  display: flex;
  gap: 12px;
  margin-top: 10px;
}

.media-grid img {
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
}

.walk-video {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: #000;
  //margin: 10px;
}
</style>

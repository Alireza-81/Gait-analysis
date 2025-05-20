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
      <div class="glass-box patients-list-box">
        <h3>👥 All Patients</h3>

        <table class="patient-table">
          <thead>
          <tr>
            <th>Name</th>
            <th>Last Visit</th>
            <th>Diagnosis</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="patient in patients" :key="patient.id">
            <td>
              <router-link :to="`/patients/${patient.id}`" class="table-link">
                {{ patient.name }}
              </router-link>
            </td>
            <td>{{ patient.lastVisit }}</td>
            <td>{{ patient.diagnosis }}</td>
          </tr>
          </tbody>
        </table>
      </div>

    </main>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

const patients = ref([
  {
    id: 1,
    name: 'John Doe',
    lastVisit: '2024-12-12',
    diagnosis: 'Gait Irregularity'
  },
  {
    id: 2,
    name: 'Mary Jane',
    lastVisit: '2025-01-05',
    diagnosis: 'Normal'
  },
  {
    id: 3,
    name: 'Ali Nasiri',
    lastVisit: '2025-04-18',
    diagnosis: 'Asymmetry Detected'
  },
  {
    id: 4,
    name: 'Sara Ahmadi',
    lastVisit: '2025-05-01',
    diagnosis: 'Under Evaluation'
  },
  {
    id: 5,
    name: 'Reza Mokhtari',
    lastVisit: '2025-03-21',
    diagnosis: 'Staggering Gait'
  },
  {
    id: 6,
    name: 'Niloofar Rad',
    lastVisit: '2025-02-10',
    diagnosis: 'Normal'
  },
  {
    id: 7,
    name: 'Kaveh Zare',
    lastVisit: '2025-05-12',
    diagnosis: 'Drop Foot'
  },
  {
    id: 8,
    name: 'Fatemeh Khani',
    lastVisit: '2025-04-30',
    diagnosis: 'Abnormal Coordination'
  },
  {
    id: 9,
    name: 'Hamid Rezaei',
    lastVisit: '2025-01-22',
    diagnosis: 'Under Evaluation'
  },
  {
    id: 10,
    name: 'Elham Saberi',
    lastVisit: '2025-03-08',
    diagnosis: 'Ataxic Gait'
  }
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

<style scoped>

.patients-list-box {
  width: 100%;
}

.patient-card {
  background-color: rgba(255, 255, 255, 0.05);
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  transition: background-color 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.patient-card:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.card-link {
  text-decoration: none;
  color: #f1f1f1;
  display: block;
}

.card-link h4 {
  margin: 0 0 6px;
  font-size: 18px;
  font-weight: bold;
  color: #00bd7e;
}

.card-link p {
  margin: 2px 0;
  font-size: 14px;
  color: #ddd;
}


.patient-table {
width: 100%;
border-collapse: collapse;
margin-top: 16px;
font-size: 15px;
color: #eee;
}

.patient-table th,
.patient-table td {
padding: 12px 16px;
text-align: left;
border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.patient-table th {
color: #ccc;
font-weight: 600;
text-transform: uppercase;
font-size: 13px;
background-color: rgba(255, 255, 255, 0.05);
}

.patient-table tr:hover {
background-color: rgba(255, 255, 255, 0.07);
}

.table-link {
color: #00bd7e;
text-decoration: none;
font-weight: bold;
}

.table-link:hover {
color: #ffffff;
}
</style>

<template>
  <div class="container">
    <div class="box">
      <h2>Login</h2>
      <input v-model="username" type="text" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const username = ref('')
const password = ref('')

function login() {
  if (username.value === 'admin' && password.value === '1234') {
    localStorage.setItem('username', username.value)  // Save username
    router.push('/dashboard')
  } else {
    alert('Wrong login!')
  }
}

</script>
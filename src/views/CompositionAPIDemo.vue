<script setup>
import { ref } from 'vue'
import { getCurrentInstance } from 'vue'

const { appContext } = getCurrentInstance()
const serviceProvider = appContext.config.globalProperties.$serviceProvider

const users = ref([])

const fetchUsers = () => {
  users.value = serviceProvider.getUserService().getAllUsers()
}
</script>

<template>
  <div>
    <h2>Composition API Example</h2>
    <button @click="fetchUsers">Отримати користувачів</button>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>


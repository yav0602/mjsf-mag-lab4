<script setup lang="ts">
import { onMounted, ref, getCurrentInstance } from 'vue'
import type { Category } from '@/types/index'
import CategoryWrapper from '@/components/category/CategoryWrapper.vue'

const { appContext } = getCurrentInstance()
const serviceProvider = appContext.config.globalProperties.$serviceProvider; 

const categories = ref<Category[]>([])
const loading = ref<boolean>(false)
const fetchCategories = async () => {
  try {
    loading.value = true
    categories.value = await serviceProvider.getCategoriesService().get({ limit: 8, offset: 0 })
  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
}
onMounted(() => {
  fetchCategories()
})
</script>

<template>
  <main class="container mx-auto">
    <h1 class="text-center font-semibold p-8">My Shop Products Categories</h1>
    <CategoryWrapper :items="categories" :loading="loading" />
  </main>
</template>

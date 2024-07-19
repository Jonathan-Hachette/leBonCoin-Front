<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <Header />
  <RouterView />
</template>

<style scoped>
.container {
  width: 1050px;
  margin: 0 auto;
  justify-content: center;
}
</style>

<script setup>
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style scoped>
.container {
  width: 1050px;
  margin: 0 auto;
  justify-content: center;
}
</style>

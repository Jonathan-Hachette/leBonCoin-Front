<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'

let isSelected = ref(false)

let handleSelection = () => {
  isSelected.value = !isSelected.value
}
</script>

<template>
  <div>
    <ul>
      <font-awesome-icon :icon="['fas', 'chevron-left']" />
      <p @click="handleSelection" :class="isSelected ? 'selected' : ''">1</p>
      <p @click="handleSelection" :class="isSelected ? 'selected' : ''">2</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
      <font-awesome-icon :icon="['fas', 'chevron-right']" />
    </ul>
  </div>
</template>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 40px;
}

ul {
  display: flex;
  align-items: center;
  gap: 20px;
}

p {
  padding: 5px;
  color: black;
  cursor: pointer;
}

.selected {
  color: white;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: var(--black);
  border-radius: 3px;
}
</style>

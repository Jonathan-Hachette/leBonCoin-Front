<script setup>
import { computed } from 'vue'

const props = defineProps({
  offerInfos: Object
})

const formatedDate = computed(() => {
  return props.offerInfos.attributes?.publishedAt.split('T')[0].split('-').reverse().join('/')
})
</script>

<template>
  <div>
    <p>{{ formatedDate }}</p>
  </div>
</template>

<style scoped>
p {
  font-size: 12px;
  color: var(--grey);
}
</style>

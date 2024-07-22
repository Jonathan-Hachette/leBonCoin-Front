<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>

<template>
  <footer>
    <p>
      Made by <a href="https://jonathan-hachette.netlify.app/"> Jonathan </a> with
      <a href="https://vuejs.org/"> Vue.js</a>
    </p>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--footer-height);
  background-color: var(--grey-light);
}

a {
  font-weight: bold;
}
</style>

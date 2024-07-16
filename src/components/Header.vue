<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <div class="container">
      <div class="topBloc">
        <RouterLink :to="{ name: 'home' }" class="logoLbc"
          ><img src="../assets/imgs/logo.svg" alt=""
        /></RouterLink>
        <div class="middlePart">
          <button>+ Déposer une annonce</button>
          <label><input type="text" placeholder="Rechercher sur leboncoin" /></label>
        </div>
        <a href="">Se connecter</a>
      </div>

      <div class="bottomBloc">
        <a href="">Immobilier</a><a href="">Véhicules</a><a href="">Locations de vacances</a
        ><a href="">Emploi</a><a href="">Mode</a><a href="">Maison @ Jardin</a><a href="">Famille</a
        ><a href="">Electronique</a><a href="">Loisirs</a><a href="">Autres</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  border: 1px solid var(--grey);
}

.container {
  padding: 10px 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.topBloc {
  /* border: 1px red solid; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.middlePart {
  display: flex;
  gap: 20px;
}

.bottomBloc {
  /* border: 1px blue solid; */
  display: flex;
  justify-content: space-between;
}
</style>

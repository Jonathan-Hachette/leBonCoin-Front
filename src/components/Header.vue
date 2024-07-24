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
          <div class="middlePartButton">
            <a>
              <font-awesome-icon :icon="['far', 'plus-square']" />
              Déposer une annonce
            </a>
          </div>
          <div class="middlePartInput">
            <form>
              <input type="text" placeholder="Rechercher sur leboncoin" />
              <button><font-awesome-icon :icon="['fas', 'search']" /></button>
            </form>
          </div>
        </div>
        <div class="rightPart">
          <RouterLink :to="{ name: 'signup' }">
            <font-awesome-icon :icon="['far', 'user']" />
            Se connecter
          </RouterLink>
        </div>
      </div>

      <div class="bottomBloc">
        <a href="">Immobilier</a>
        <font-awesome-icon :icon="['fas', 'circle']" />
        <a href="">Véhicules</a>
        <font-awesome-icon :icon="['fas', 'circle']" />

        <a href="">Locations de vacances</a>
        <font-awesome-icon :icon="['fas', 'circle']" />

        <a href="">Emploi</a>
        <font-awesome-icon :icon="['fas', 'circle']" />

        <a href="">Mode</a>
        <font-awesome-icon :icon="['fas', 'circle']" />

        <a href="">Maison & Jardin</a>
        <font-awesome-icon :icon="['fas', 'circle']" />

        <a href="">Famille</a>
        <font-awesome-icon :icon="['fas', 'circle']" />

        <a href="">Electronique</a>
        <font-awesome-icon :icon="['fas', 'circle']" />

        <a href="">Loisirs</a>
        <font-awesome-icon :icon="['fas', 'circle']" />

        <a href="">Autres</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* GENERAL */

header {
  border: 1px solid var(--grey);
  height: var(--header-height);
  position: sticky;
  top: 0;
  background-color: white;
}

.container {
  padding: 10px 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* TOP BLOC */

.topBloc {
  /* border: 1px red solid; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logoLbc img {
  /* border: 1px solid red; */
  height: 30px;
}

/* MIDDLE PART */

.middlePart {
  display: flex;
  align-items: center;
  gap: 20px;
}

.middlePart a {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: var(--orange);
  color: white;
  font-weight: bold;
  border-radius: 10px;
  border: none;
}

.middlePartButton a {
  font-size: 16px;
  padding: 11px;
}

.middlePart a svg {
  border-radius: 10px;
}

.middlePart label {
  border: 1px solid red;
  text-align: left;
}

.middlePartInput form {
  display: flex;
  background-color: var(--grey-light);
  padding: 7px;
  border-radius: 10px;
  width: 300px;
}

.middlePart input {
  /* border: 1px solid red; */
  background-color: inherit;
  border: none;
  flex: 1;
  outline: none;
  font-size: 16px;
}

.middlePartInput button {
  display: flex;
  align-items: center;
  border: none;
  background-color: var(--orange);
  padding: 9px;
  border-radius: 7px;
}

.middlePartInput svg {
  color: black;
}

/* RIGHT PART */
.rightPart a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 12px;
}

.rightPart svg {
  font-size: 15px;
}

/* BOTTOM BLOC */

.bottomBloc {
  /* border: 1px blue solid; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bottomBloc svg {
  font-size: 2px;
}
</style>

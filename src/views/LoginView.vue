<!-- eslint-disable no-unused-vars -->
<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

const signupInfos = ref({})
</script>

<template>
  <main>
    <div class="container">
      <div class="blocSignUp">
        <div>
          <h2>Bonjour !</h2>
          <p>Inscrivez-vous pour découvrir toutes nos fonctionnalités.</p>
        </div>

        <form>
          <div>
            <label for="nom">Nom *</label>
            <input type="nom" name="nom" id="nom" />
          </div>
          <div>
            <label for="email">E-mail *</label>
            <input type="text" name="email" id="email" />
          </div>

          <div>
            <label for="password">Mot de passe *</label>
            <input type="text" name="password" id="password" />
          </div>

          <button>
            S'inscire
            <font-awesome-icon :icon="['fas', 'arrow-right']" />
          </button>
        </form>

        <p>Vous avez déjà un compte ? <a href="">Connectez-vous </a></p>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  min-height: calc(100vh - var(--header-height) - var(--footer-height));
  /* margin-top: var(--header-height); */
}

.container {
  height: calc(100vh - var(--header-height) - var(--footer-height));
  background-image: url(/assets/login-illustration-DHh6q7RM.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  display: flex;
  align-items: safe center;
  justify-content: center;
}

/*  SIGNUP BLOC */

.blocSignUp {
  /* border: 1px solid black; */
  box-shadow: 0 0 7px 1px var(--grey-med);
  background-color: #fff;
  border-radius: 15px;
  padding: 30px;
  height: 490px;
  width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.blocSignUp div {
  display: flex;
  flex-direction: column;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
}

/* FORM */

form {
  flex: 1;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

form div {
  display: flex;
  flex-direction: column;
}

form input {
  border: 1px solid var(--grey);
  border-radius: 10px;
  height: 45px;
  padding-left: 10px;
}

form label {
  margin-bottom: 7px;
}

form + p {
  text-align: center;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border: none;
  background-color: var(--orange);
  color: white;
  height: 45px;
  border-radius: 15px;
  font-weight: 700;
}

/* MEDIA */
@media (max-width: 1090px) {
  .container {
    padding: 10px 20px 20px;
  }
}
</style>

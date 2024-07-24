<script setup>
import axios from 'axios'
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const username = ref('')
const email = ref('')
const password = ref('')

const GlobalStore = inject('GlobalStore')
console.log('GlobalStore>>>>>', GlobalStore)

const isSubmitting = ref(false)
const errorMessage = ref('')

const handleSubmit = async () => {
  // console.log('submit ===>', {
  //   username: username.value,
  //   email: email.value,
  //   password: password.value
  // })

  // Changement de la valeur de la ref car la soumission est déclenchée
  isSubmitting.value = true

  if (username.value && email.value && password.value) {
    try {
      const { data } = await axios.post(
        'https://site--strapileboncoin--2m8zk47gvydr.code.run/api/auth/local/register',
        {
          username: username.value,
          email: email.value,
          password: password.value
        }
      )

      //Affichage de la réponse
      console.log('response>>>>>', data)

      //Navigation ers la page d'accueil
      // router.push({ name: 'home' })

      GlobalStore.changeToken(data.jwt)
    } catch (error) {
      console.log('catch>>>>', error)

      errorMessage.value = 'Une erreur est survenue, désolé !'
    }
  } else {
    errorMessage.value = 'Veuillez remplir tous les champs '
  }

  // Changement de la valeur de la ref car la soumission est terminée
  isSubmitting.value = false
}

const clearErrorMessage = () => {
  // S'il y a un message d'erreur on le vide
  if (errorMessage.value) {
    errorMessage.value = ''
  }
}
</script>

<template>
  <main>
    <div class="container">
      <div class="blocSignUp">
        <div>
          <h2>Bonjour !</h2>
          <p>Inscrivez-vous pour découvrir toutes nos fonctionnalités.</p>
        </div>

        <form @submit.prevent="handleSubmit">
          <div>
            <label for="username">Nom *</label>
            <input
              type="username"
              name="username"
              id="username"
              v-model="username"
              @input="clearErrorMessage"
            />
          </div>
          <div>
            <label for="email">E-mail *</label>
            <input type="text" name="email" id="email" v-model="email" @input="clearErrorMessage" />
          </div>

          <div>
            <label for="password">Mot de passe *</label>
            <input
              type="text"
              name="password"
              id="password"
              v-model="password"
              @input="clearErrorMessage"
            />
          </div>
          <p v-if="isSubmitting">Inscription en cours ...</p>
          <button v-else>
            S'inscire
            <font-awesome-icon :icon="['fas', 'arrow-right']" />
          </button>
        </form>
        <p>Vous avez déjà un compte ? <a href="">Connectez-vous </a></p>
      </div>
      <p v-if="errorMessage">{{ errorMessage }}</p>
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

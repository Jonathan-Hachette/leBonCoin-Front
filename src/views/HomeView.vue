<script setup></script>

<template>
  <main>
    <div class="container">
      <div>
        <form action="">
          <div>
            <div class="pricePart">
              <div>
                <p>Prix</p>
              </div>

              <div class="priceInputs">
                <div><input type="text" placeholder="Minimum" /><label for="">€</label></div>
                <div><input type="text" placeholder="Maximum" /><label for="">€</label></div>
              </div>
            </div>

            <div class="sortPart">
              <div>
                <p>Tri</p>
              </div>

              <div class="sortCheckbox">
                <span>Prix croissants</span> <input type="radio" /> <span>Prix décroissants</span>
                <input type="radio" /> <span>Pas de tri</span> <input type="radio" />
              </div>
            </div>
          </div>
          <button class="searchButton">Rechercher</button>
        </form>

        <h1>Des millions de petites annonces et autant d'occasions de se faire plaisir</h1>
        <div class="inBetweenBloc">
          <img src="../assets/imgs/onde-corail.svg" alt="" />
          <div>
            <h2>C'est le moment de vendre</h2>
            <a class="inBetweenBtn">
              <font-awesome-icon :icon="['far', 'plus-square']" />
              Déposer une annonce
            </a>
          </div>
          <img src="../assets/imgs/feuille-bleue.svg" alt="" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Général */

.container {
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - var(--header-height) - var(--footer-height));
  padding-bottom: 40px;
}

h1 {
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  margin: 30px 0;
}

h2 {
  text-align: center;
  font-weight: bold;
  font-size: 20px;
}

/* Form */

form {
  margin: 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  width: 100%;
}

form > div {
  /* border: 1px solid red; */
  display: flex;
  gap: 40px;
}

/* PRICE PART */

.pricePart {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.pricePart > div {
  display: flex;
  align-items: center;
  gap: 20px;
}

.priceInputs div {
  display: flex;
}

.priceInputs label {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 43px;
  width: 45px;
  border: 1px solid var(--grey-med);
  border-left: none;
  border-radius: 0 15px 15px 0;
  font-size: 14px;
}

.priceInputs div input {
  height: 43px;
  width: 150px;
  border: 1px solid var(--grey-med);
  border-radius: 15px 0 0 15px;
  padding-left: 10px;
}

.pricePart p,
.sortPart p {
  font-weight: bold;
}
/* SORT PART */

.sortPart {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
}

.sortCheckbox {
  display: flex;
  align-items: center;
  gap: 5px;
}

.searchButton {
  background-color: var(--orange);
  border-radius: 5px;
  height: 30px;
  color: white;
  border: none;
}

/* INBETWEEN BLOC */

.inBetweenBloc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--orange-pale);
  border-radius: 20px;
  margin-bottom: 35px;
}

.inBetweenBloc img {
  border-radius: 20px;
}

.inBetweenBloc div {
  display: flex;
  align-items: center;
  gap: 20px;
}

.inBetweenBtn {
  background-color: var(--orange);
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-weight: 700;
}
</style>

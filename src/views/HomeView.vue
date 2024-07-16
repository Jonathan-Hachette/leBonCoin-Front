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
          <button>Rechercher</button>
        </form>
        <h1>Des millions de petites annonces et autant d'occasions de se faire plaisir</h1>
        <div class="inBetweenBloc">
          <img src="../assets/imgs/onde-corail.svg" alt="" />
          <div>
            <h2>C'est le moment de vendre</h2>
            <button>+ Déposer ue annonce</button>
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
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  margin: 30px 0;
}

/* Form */

form {
  margin: 40px 0;
  display: flex;
  justify-content: space-between;
  gap: 50px;
}

form > div {
  /* border: 1px solid red; */
  display: flex;
  gap: 20px;
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
  align-items: center;
  gap: 10px;
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

/* INBETWEEN BLOC */

.inBetweenBloc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--light-orange);
  border-radius: 20px;
  margin-bottom: 35px;
}

.inBetweenBloc img {
  border-radius: 20px;
}

.inBetweenBloc div {
  display: flex;
  gap: 10px;
}
</style>

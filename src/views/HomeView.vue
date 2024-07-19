<script setup>
import OfferCard from '../components/OfferCard.vue'
import Sorting from '../components/Sorting.vue'

// import du package axios
import axios from 'axios'

// Import du hook
import { onMounted } from 'vue'

//Import valeur reactives
import { ref } from 'vue'

const offerList = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get(
      `https://site--strapileboncoin--2m8zk47gvydr.code.run/api/offers?populate[0]=pictures&populate[1]=owner.avatar`
    )
    offerList.value = data.data.map((offer) => ({
      ...offer,
      username: offer.attributes.owner.data.attributes.username,
      url: offer.attributes.pictures.data[0]?.attributes.url
    }))

    // console.log(data.data)
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <main class="container">
    <Sorting />
    <section class="cardBloc">
      <OfferCard v-for="offer in offerList" :key="offer.id" :offerInfos="offer" />
    </section>
  </main>
</template>

<style scoped>
.cardBloc {
  display: flex;
  flex-wrap: wrap;
  gap: 40px 15px;
}
</style>

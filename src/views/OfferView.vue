<script setup>
const props = defineProps({
  id: String
})

import axios from 'axios'
import { onMounted, ref } from 'vue'

import FormatedDate from '@/components/FormatedDate.vue'

const offerInfos = ref({})

onMounted(async () => {
  try {
    const { data } = await axios.get(
      `https://site--strapileboncoin--2m8zk47gvydr.code.run/api/offers/${props.id}?populate[0]=pictures&populate[1]=owner.avatar`
    )
    offerInfos.value = data.data
    console.log(data)
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <main>
    <div class="container">
      <div class="offerBloc">
        <div class="firstCol">
          <div>
            <img :src="offerInfos.attributes?.pictures.data[0].attributes.url" alt="" />
          </div>
          <div class="firstColInfos">
            <p>{{ offerInfos.attributes?.title }}</p>
            <p>{{ offerInfos.attributes?.price }} €</p>
            <FormatedDate :offerInfos="offerInfos" />
            <div class="description">
              <p>Description</p>
              <p>{{ offerInfos.attributes?.description }}</p>
            </div>
          </div>
        </div>
        <div class="secondCol">
          <div>
            <img
              :src="offerInfos.attributes?.owner.data.attributes.avatar.data.attributes.url"
              alt=""
              class="avatar"
            />
            <p class="username">{{ offerInfos.attributes?.owner.data.attributes.username }}</p>
          </div>
          <p>Pièce d'itentité vérifiée</p>
          <p>Répond généralement en 1 heure</p>
          <div class="offerCta">
            <a href="">Acheter</a>
            <a href="">Message</a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* General */
.offerBloc {
  display: flex;
  justify-content: center;
}

/* First column */

.firstCol > div img {
  width: 260px;
  height: 350px;
}

/* Second column */

.secondCol > div {
  display: flex;
  justify-content: center;
  gap: 20px;
}

/* CTA */
</style>

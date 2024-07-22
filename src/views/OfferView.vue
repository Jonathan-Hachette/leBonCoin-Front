<script setup>
const props = defineProps({
  id: String
})

import { useCycleList } from '@vueuse/core'
import axios from 'axios'
import { computed, onMounted, ref } from 'vue'

import FormatedDate from '@/components/FormatedDate.vue'

const offerInfos = ref({})

onMounted(async () => {
  try {
    const { data } = await axios.get(
      `https://site--strapileboncoin--2m8zk47gvydr.code.run/api/offers/${props.id}?populate[0]=pictures&populate[1]=owner.avatar`
    )
    offerInfos.value = data.data
    // console.log(data)
  } catch (error) {
    console.log(error)
  }
})

const cycleList = computed(() => {
  if (offerInfos.value.attributes.pictures.data) {
    const { state, next, prev } = useCycleList(offerInfos.value.attributes.pictures.data)

    return { state, next, prev }
  } else {
    return {}
  }
})
</script>

<template>
  <h1 v-if="!offerInfos.attributes" class="loading">Chargement en cours . . .</h1>
  <main v-else>
    <div class="container">
      <div class="offerBloc">
        <div class="firstCol">
          <div class="imgsCarousel">
            <font-awesome-icon
              :icon="['fas', 'chevron-left']"
              @click="cycleList.prev()"
              v-if="offerInfos.attributes.pictures.data?.length > 1"
            />
            <img :src="cycleList.state.value.attributes.url" alt="" />
            <font-awesome-icon
              :icon="['fas', 'chevron-right']"
              @click="cycleList.next()"
              v-if="offerInfos.attributes.pictures.data?.length > 1"
            />
          </div>
          <div class="firstColInfos">
            <p class="offerTitle">{{ offerInfos.attributes?.title }}</p>
            <p class="offerPrice">
              {{ new Intl.NumberFormat().format(offerInfos.attributes?.price) }} €
            </p>
            <FormatedDate :offerInfos="offerInfos" class="date" />
            <div>
              <h2 class="description">Description</h2>
              <p>{{ offerInfos.attributes?.description }}</p>
            </div>
            <div>
              <p class="location">
                <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
                Agon-Coutainville (50230)
              </p>
            </div>
          </div>
        </div>
        <div class="secondCol">
          <div class="user">
            <div>
              <img
                :src="offerInfos.attributes?.owner.data.attributes.avatar.data.attributes.url"
                alt=""
                class="avatar"
              />
              <p class="username">{{ offerInfos.attributes?.owner.data.attributes.username }}</p>
            </div>
            <p class="identity">
              <font-awesome-icon :icon="['fas', 'check-double']" />
              Pièce d'itentité vérifiée
            </p>
            <p>
              <font-awesome-icon :icon="['far', 'clock']" />
              Répond généralement en 1 heure
            </p>
          </div>
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
.container {
  padding: 30px 0;
}

.offerBloc {
  display: flex;
  justify-content: center;
  gap: 20px;
}

/* First column */
.firstCol {
  /* border: 1px solid red; */
  width: 67%;
}

.firstCol > div img {
  width: 100%;
  height: 350px;
  object-fit: contain;
}

.imgsCarousel {
  display: flex;
  align-items: center;
}

.imgsCarousel svg {
  font-size: 18px;
  cursor: pointer;
}

.offerTitle {
  font-size: 24px;
  font-weight: bold;
  margin: 30px 0;
}

.offerPrice {
  font-size: 18px;
  font-weight: bold;
}

.date {
  margin-top: 20px;
}

.description {
  font-size: 18px;
  font-weight: bold;
  border-top: 1px solid var(--grey-med);
  margin: 50px 0 25px;
  padding-top: 20px;
}

.location {
  border-top: 1px solid var(--grey-med);
  margin: 50px 0 25px;
  padding-top: 20px;
}

/* Second column */

.secondCol {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 375px;
  width: 33%;
  box-shadow: 0 0 5px var(--grey-med);
  border-radius: 2px;
  /* border: 1px solid black; */
}

.user {
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* border: 1px solid green; */
}

.user div:nth-child(1) {
  display: flex;
  flex-direction: row;
  gap: 10px;
  /* border: 1px solid black; */
}

.avatar {
  border-radius: 50%;
  width: 70px;
}

.username {
  font-weight: bold;
  font-size: 18px;
}

.identity {
  font-size: 12px;
  color: var(--brown);
  background-color: var(--orange-pale);
  border-radius: 10px;
  padding: 4px 7px;
  align-self: flex-start;
}

svg {
  margin-right: 3px;
}

/* CTA */
.offerCta {
  margin-top: 15px;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  border-top: 1px solid var(--grey-med);
}

.offerCta a {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 16px;
  width: 100%;
  height: 45px;
  border-radius: 15px;
}

.offerCta a:nth-child(1) {
  background-color: var(--orange);
}

.offerCta a:nth-child(2) {
  background-color: var(--blue-dark);
}
</style>

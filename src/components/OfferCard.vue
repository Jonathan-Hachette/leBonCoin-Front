<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-unused-vars -->
<script setup>
import { RouterLink } from 'vue-router'
import formatedDate from '../components/FormatedDate.vue'

const props = defineProps({
  offerInfos: Object
})
</script>

<template>
  <RouterLink :to="{ name: 'offer', params: { id: offerInfos.id } }" class="offerCard">
    <div class="firstPart">
      <div class="owner">
        <img
          :src="offerInfos.attributes.owner.data.attributes.avatar.data?.attributes.url"
          alt=""
          class="avatar"
        />
        <p class="username">{{ offerInfos.username }}</p>
      </div>
      <img :src="offerInfos.url" alt="Offer image" />
      <p>{{ offerInfos.attributes.title }}</p>
      <p>{{ offerInfos.attributes.price }} €</p>
    </div>
    <div class="secondPart">
      <div>
        <formatedDate :offerInfos="offerInfos" />
      </div>

      <font-awesome-icon :icon="['far', 'heart']" />
    </div>
  </RouterLink>
</template>

<style scoped>
/* GENERAL STYLE  */

.offerCard {
  height: 400px;
  width: calc((100% - 60px) / 5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

p {
  font-weight: 700;
}

/* FIRSTPART */

.firstPart p {
  font-weight: 700;
  line-height: 20px;
}

.firstPart p:last-child {
  margin-top: 5px;
}

/* OFFER IMG */

img {
  border-radius: 10px;
  width: 198px;
  height: 240px;
  object-fit: cover;
  margin: 10px 0;
}

/* OWNER */

.owner {
  display: flex;
  justify-content: left;
  align-items: baseline;
  gap: 5px;
}

.username {
  font-weight: bold;
  font-size: 14px;
}

.avatar {
  height: 25px;
  width: 25px;
  border-radius: 50%;
}

/* SECOND PART */

.secondPart {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.secondPart p {
  font-size: 12px;
  font-weight: 400;
  color: var(--grey);
  line-height: 16px;
}
</style>

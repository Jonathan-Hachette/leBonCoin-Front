import './assets/main.css'

import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* icons import   */

import { faClock, faHeart, faPlusSquare, faUser } from '@fortawesome/free-regular-svg-icons'
import {
  faArrowRight,
  faCheckDouble,
  faChevronLeft,
  faChevronRight,
  faCircle,
  faMapMarkerAlt,
  faSearch
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(
  faPlusSquare,
  faSearch,
  faUser,
  faHeart,
  faCheckDouble,
  faClock,
  faCircle,
  faMapMarkerAlt,
  faChevronLeft,
  faChevronRight,
  faArrowRight
)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

const userToken = ref('')

const changeToken = (token) => {
  userToken.value = token
}

app.provide('GlobalStore', {
  userToken: userToken,
  changeToken: changeToken
})
app.mount('#app')

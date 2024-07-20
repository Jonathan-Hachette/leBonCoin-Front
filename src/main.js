import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* icons import   */

import { faClock, faHeart, faPlusSquare, faUser } from '@fortawesome/free-regular-svg-icons'
import { faCheckDouble, faSearch } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faPlusSquare, faSearch, faUser, faHeart, faCheckDouble, faClock)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.mount('#app')

// import { defineNuxtPlugin } from '#app'
// import 'vue3-openlayers/styles.css'
// import OpenLayers from 'vue3-openlayers'

// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.vueApp.use(OpenLayers)
// })
import 'vue3-openlayers/styles.css'
import OpenLayers from 'vue3-openlayers'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(OpenLayers)
})

<template>
  <div>
    <form>
      <label for="zoom">Zoom:</label>
      <input id="zoom" v-model="zoom" type="number" />
    </form>
    <ol-map style="height: 400px">
      <ol-view
        ref="view"
        :center="center"
        :rotation="rotation"
        :zoom="zoom"
        :projection="projection"
        @change:center="centerChanged"
        @change:resolution="resolutionChanged"
        @change:rotation="rotationChanged"
      />
      <ol-tile-layer>
        <ol-source-osm />
      </ol-tile-layer>
      <ol-rotate-control></ol-rotate-control>
      <ol-interaction-link />
    </ol-map>
    <ul>
      <li>center : {{ currentCenter }}</li>
      <li>resolution : {{ currentResolution }}</li>
      <li>zoom : {{ currentZoom }}</li>
      <li>rotation : {{ currentRotation }}</li>
    </ul>
  </div>
</template>

<script setup>
// import { ref } from 'vue'
// const count = ref(Math.round(Math.random() * 1000))
// const count = useState('count', () => Math.round(Math.random() * 1000))
// const center = ref([40, 40])
const center = useState('center', () => [40, 40])
// const projection = ref('EPSG:4326')
const projection = useState('projection', () => 'EPSG:4326')
// const zoom = ref(8)
const zoom = useState('zoom', () => 8)
// const rotation = ref(0)
const rotation = useState('rotation', () => 0)

// const currentCenter = ref(center.value)
const currentCenter = useState('currentCenter', () => center.value)
// const currentZoom = ref(zoom.value)
const currentZoom = useState('currentZoom', () => zoom.value)
// const currentRotation = ref(rotation.value)
const currentRotation = useState('currentRotation', () => rotation.value)
// const currentResolution = ref(0)
const currentResolution = useState('currentResolution', () => 0)

function resolutionChanged(event) {
  currentResolution.value = event.target.getResolution()
  currentZoom.value = event.target.getZoom()
}
function centerChanged(event) {
  currentCenter.value = event.target.getCenter()
}
function rotationChanged(event) {
  currentRotation.value = event.target.getRotation()
}
</script>

<style scoped>
.ol-map {
  position: relative;
}
.ol-map-loading:after {
  content: '';
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 80px;
  margin-top: -40px;
  margin-left: -40px;
  border-radius: 50%;
  border: 5px solid rgba(180, 180, 180, 0.6);
  border-top-color: var(--vp-c-brand-1);
  animation: spinner 0.6s linear infinite;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
</style>

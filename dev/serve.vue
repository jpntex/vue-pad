<template>
  <vue-pad :sounds="sounds" />
</template>

<script>
import VuePad from '@/VuePad.vue';

export default {
  name: 'ServeDev',
  components: {
    VuePad
  },
  data() {
    return {
      sounds: [{
        label: 'Petaculo',
        url: require('./sounds/petaculo.mp3'),
        volume: 1,
        color: '#11e9e2',
        shortkey: 'Q'
      }, {
        label: 'Uepaaa',
        url: require('./sounds/uepaaa.mp3'),
        volume: 1,
        color: '#cee811',
        shortkey: 'W'
      }, {
        label: 'Horn',
        url: require('./sounds/horn.mp3'),
        volume: 0.1,
        color: '#b19a47',
        shortkey: 'E'
      }, {
        url: require('./sounds/1.wav'),
        volume: 1,
        color: '#10ed2b',
        shortkey: 'A'
      }, {
        url: require('./sounds/2.wav'),
        volume: 1,
        color: '#ff2300',
        shortkey: 'S'
      }, {
        url: require('./sounds/3.wav'),
        volume: 1,
        color: '#9d00ff',
        shortkey: 'D'
      }, {
        url: require('./sounds/4.wav'),
        volume: 1,
        color: '#ff00f7',
        shortkey: 'Z'
      }, {
        url: require('./sounds/5.wav'),
        volume: 1,
        color: '#004eff',
        shortkey: 'X'
      }, {
        url: require('./sounds/6.wav'),
        volume: 1,
        color: '#0ee31e',
        shortkey: 'C'
      }, {
        url: require('./sounds/7.wav'),
        volume: 1,
        color: '#ed1057',
        shortkey: 'R'
      }, {
        url: require('./sounds/8.wav'),
        volume: 1,
        color: '#ed8a10',
        shortkey: 'T'
      }, {
        url: require('./sounds/9.wav'),
        volume: 1,
        color: '#ed8a10',
        shortkey: 'Y'
      }, {
        url: require('./sounds/10.wav'),
        volume: 1,
        color: '#ed8a10',
        shortkey: 'F'
      }, {
        url: require('./sounds/11.wav'),
        volume: 1,
        color: '#ed8a10',
        shortkey: 'G'
      }, {
        url: require('./sounds/12.wav'),
        volume: 1,
        color: '#ed8a10',
        shortkey: 'H'
      }]
    }
  }
}
</script>

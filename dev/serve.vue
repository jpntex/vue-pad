<script>
import Vue from 'vue';
import VuePad from '@/VuePad.vue';

export default Vue.extend({
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
        shortkey: 'B'
      }, {
        label: 'Uepaaa',
        url: require('./sounds/uepaaa.mp3'),
        volume: 1,
        color: '#cee811',
        shortkey: 'N'
      }, {
        label: 'Horn',
        url: require('./sounds/horn.mp3'),
        volume: 0.1,
        color: '#ed8a10',
        shortkey: 'M'
      }, {
        url: require('./sounds/1.wav'),
        volume: 1,
        color: '#ed8a10'
      }, {
        url: require('./sounds/2.wav'),
        volume: 1,
        color: '#ed8a10'
      }, {
        url: require('./sounds/3.wav'),
        volume: 1,
        color: '#ed8a10'
      }, {
        url: require('./sounds/4.wav'),
        volume: 1,
        color: '#ed8a10'
      }, {
        url: require('./sounds/5.wav'),
        volume: 1,
        color: '#ed8a10'
      }, {
        url: require('./sounds/6.wav'),
        volume: 1,
        color: '#ed8a10'
      }, {
        url: require('./sounds/7.wav'),
        volume: 1,
        color: '#ed8a10'
      }, {
        url: require('./sounds/8.wav'),
        volume: 1,
        color: '#ed8a10'
      }, {
        url: require('./sounds/9.wav'),
        volume: 1,
        color: '#ed8a10'
      }, {
        url: require('./sounds/10.wav'),
        volume: 1,
        color: '#ed8a10'
      }, {
        url: require('./sounds/11.wav'),
        volume: 1,
        color: '#ed8a10'
      }, {
        url: require('./sounds/12.wav'),
        volume: 1,
        color: '#ed8a10'
      }]
    }
  }
});
</script>

<template>
  <div id="app">
    <div style="padding: 10px;">
      <vue-pad :sounds="sounds" />
    </div>
    <footer><a target="_blank" href="https://github.com/jpntex/vue-pad">https://github.com/jpntex/vue-pad</a></footer>
  </div>
</template>

<style>
body {
  padding: 0;
  margin: 0;
  background-color: #151515;
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

footer {
  position: fixed;
  bottom: 0;
  background-color: #151515;
  width: 100%;
  padding: 10px;
}

footer a {
  font-size: 0.875rem;
  color: #828282;
}
</style>

<p align="center">
  <a href="https://jpntex.github.io/vue-pad/">
    <img src="https://user-images.githubusercontent.com/3942799/90333817-ca5c8f80-dfc0-11ea-8571-3233ce586db8.png" alt="Vue Pad" width="200" />
  </a>
</p>

<p align="center">Vue Pad - Sound Pads for Vue JS</p>

<p align="center">
  <a href="https://npmjs.org/package/vue-pad">
    <img src="https://img.shields.io/npm/v/vue-pad.svg" alt="Version" />
  </a>
  <a href="https://github.com/jpntex/vue-pad/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/jpntex/vue-pad.svg" alt="License" />
  </a>
</p>

<p align="center">
  <a href="https://jpntex.github.io/vue-pad/" target="_blank">https://jpntex.github.io/vue-pad/</a>
</p>

## Getting Started

Do you want to add to your own projects? There you go:

1. Add this package to your dependencies

```bash
$ npm i vue-pad
# or
$ yarn add vue-pad
```

2. Usage:

```html
<template>
  <vue-pad :sounds="sounds" />
</template>

<script>
import VuePad from 'vue-pad'

export default {
  components: {
    VuePad
  },
  data() {
    return {
      sounds: [{
        label: 'Petaculo',
        url: require('./sounds/petaculo.mp3'),
        volume: 1, // 0 .. 0.5 .. 1
        color: '#11e9e2',
        shortkey: 'B',
      }, {
        url: '/beats/snare.wav',
        color: 'purple'
      }]
    }
  }
}
</script>
```

## License

[MIT license](https://github.com/jpntex/vue-pad/blob/master/LICENSE) - jpntex

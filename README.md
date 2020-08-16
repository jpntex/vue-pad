# Vue Pad

[![npm (scoped with tag)](https://flat.badgen.net/npm/v/vue-pad)](https://npmjs.com/package/vue-pad)
[![npm](https://flat.badgen.net/npm/dt/vue-pad)](https://npmjs.com/package/vue-pad)

DEMO - [https://jpntex.github.io/vue-pad/](https://jpntex.github.io/vue-pad/)

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

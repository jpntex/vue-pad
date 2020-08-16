<template>
  <div class="vue-pad">
    <div
      class="vue-pad-btn"
      v-for="(sound, index) in sounds"
      :key="index"
      :style="getColorStyle(sound.color)"
      @click="play(sound, index)"
    >
      <audio
        :ref="`sound${index}`"
        :src="sound.url"
        v-bind:ontimeupdate.prop="() => onUpdate(sound, index)"
        preload="metadata"
      />

      <div class="vue-pad-btn-label">
        <div class="vue-pad-btn-number" :style="`color: ${sound.color};`">
          {{index + 1}}
        </div>
        <span>{{ sound.label }}</span>
      </div>

      <div class="vue-pad-btn-key" v-if="sound.shortkey">
        {{ sound.shortkey }}
      </div>

      <div :ref="`seekbar${index}`" class="vue-pad-btn-progress"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sounds: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      keys: {} 
    }
  },
  mounted() {
    window.addEventListener('keyup', this.onKeyUp);

    this.sounds.forEach((sound, index) => {
      if (sound.shortkey) {
        this.keys[sound.shortkey.toLowerCase()] = {
          sound,
          index
        }
      }
    })
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.onKeyUp);
  },
  methods: {
    onKeyUp(event) {
      const keyMap = this.keys[event.key.toLowerCase()]

      if (keyMap) this.play(keyMap.sound, keyMap.index)
    },
    play(sound, index) {
      const ref = this.$refs[`sound${index}`]
      if (!ref) return
      const audio = ref[0]

      if (!audio) return

      audio.volume = sound.volume
      audio.currentTime = 0
      audio.play()
    },
    getColorStyle(color) {
      return `background: radial-gradient(circle, rgba(255, 255, 255, 1) -40%, ${color} 100%);`
    },
    onUpdate(sound, index) {
      const ref = this.$refs[`sound${index}`]
      if (!ref) return
      
      const audio = ref[0]

      if (!audio) return

      const seek = this.$refs[`seekbar${index}`][0]

      if (audio.currentTime / audio.duration === 1) {
        seek.style.width = audio.currentTime / audio.duration * 100 + '%'

        setTimeout(() => {
          seek.style.display = 'none'
          seek.style.width = 0
        }, 200)
      } else {
        seek.style.display = 'block'
        seek.style.width = audio.currentTime / audio.duration * 100 + '%'
      }
    },
    findKeyCode(key) {
      for (let keyCode in keyCodes) {
        if (keyCodes[keyCode] === key.toLowerCase()) return keyCode
      }

      return null
    }
  }
}
</script>

<style scoped>
.vue-pad {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  grid-gap: 6px;
}

.vue-pad-btn * {
  user-select: none;
}

.vue-pad-btn {
  position: relative;
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.1s ease-out;
  border: 2px solid rgb(255 255 255 / 5%);
  border-top-color: rgb(255 255 255 / 37%);
}

.vue-pad-btn-progress {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  transition: width 0.4s;
  height: 100%;
  background-color: rgb(255 252 252 / 52%);
}

.vue-pad-btn::before {
  content: "";
  display: block;
  padding-bottom: 100%;
}

.vue-pad-btn:active {
  border-color: rgb(255 255 255 / 0%);
  transform: translateY(2px);
}

.vue-pad-btn-label {
  max-width: 80px;
  position: absolute;
  top: 8px;
  left: 8px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 0.875rem;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.vue-pad-btn-key {
  position: absolute;
  bottom: 8px;
  left: 8px;
  font-weight: 700;
  font-size: 0.675rem;
}

.vue-pad-btn-number {
  padding: 1px 6px;
  margin-right: 4px;
  border-radius: 2px;
  color: rgb(208, 34, 208);
  background-color: rgb(0 0 0 / 60%);
}
</style>

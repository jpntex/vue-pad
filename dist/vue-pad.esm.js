//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  props: {
    sounds: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      keys: {}
    };
  },

  mounted() {
    window.addEventListener('keyup', this.onKeyUp);
    this.sounds.forEach((sound, index) => {
      if (sound.shortkey) {
        this.keys[sound.shortkey.toLowerCase()] = {
          sound,
          index
        };
      }
    });
  },

  beforeDestroy() {
    window.removeEventListener('keyup', this.onKeyUp);
  },

  methods: {
    onKeyUp(event) {
      const keyMap = this.keys[event.key.toLowerCase()];
      if (keyMap) this.play(keyMap.sound, keyMap.index);
    },

    play(sound, index) {
      const ref = this.$refs[`sound${index}`];
      if (!ref) return;
      const audio = ref[0];
      if (!audio) return;
      audio.volume = sound.volume;
      audio.currentTime = 0;
      audio.play();
    },

    getColorStyle(color) {
      return `background: radial-gradient(circle, rgba(255, 255, 255, 1) -40%, ${color} 100%);`;
    },

    onUpdate(sound, index) {
      const ref = this.$refs[`sound${index}`];
      if (!ref) return;
      const audio = ref[0];
      if (!audio) return;
      const seek = this.$refs[`seekbar${index}`][0];

      if (audio.currentTime / audio.duration === 1) {
        seek.style.width = audio.currentTime / audio.duration * 100 + '%';
        setTimeout(() => {
          seek.style.display = 'none';
          seek.style.width = 0;
        }, 200);
      } else {
        seek.style.display = 'block';
        seek.style.width = audio.currentTime / audio.duration * 100 + '%';
      }
    },

    findKeyCode(key) {
      for (let keyCode in keyCodes) {
        if (keyCodes[keyCode] === key.toLowerCase()) return keyCode;
      }

      return null;
    }

  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "vue-pad"
  }, _vm._l(_vm.sounds, function (sound, index) {
    return _c('div', {
      key: index,
      staticClass: "vue-pad-btn",
      style: _vm.getColorStyle(sound.color),
      on: {
        "click": function ($event) {
          return _vm.play(sound, index);
        }
      }
    }, [_c('audio', {
      ref: "sound" + index,
      refInFor: true,
      attrs: {
        "src": sound.url,
        "preload": "metadata"
      },
      domProps: {
        "ontimeupdate": function () {
          return _vm.onUpdate(sound, index);
        }
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "vue-pad-btn-label"
    }, [_c('div', {
      staticClass: "vue-pad-btn-number",
      style: "color: " + sound.color + ";"
    }, [_vm._v("\n        " + _vm._s(index + 1) + "\n      ")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(sound.label))])]), _vm._v(" "), sound.shortkey ? _c('div', {
      staticClass: "vue-pad-btn-key"
    }, [_vm._v("\n      " + _vm._s(sound.shortkey) + "\n    ")]) : _vm._e(), _vm._v(" "), _c('div', {
      ref: "seekbar" + index,
      refInFor: true,
      staticClass: "vue-pad-btn-progress"
    })]);
  }), 0);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-8abb052a_0", {
    source: ".vue-pad[data-v-8abb052a]{display:grid;grid-template-columns:repeat(auto-fill,minmax(80px,1fr));grid-gap:6px}.vue-pad-btn *[data-v-8abb052a]{user-select:none}.vue-pad-btn[data-v-8abb052a]{position:relative;cursor:pointer;border-radius:3px;transition:all .1s ease-out;border:2px solid rgb(255 255 255 / 5%);border-top-color:rgb(255 255 255 / 37%)}.vue-pad-btn-progress[data-v-8abb052a]{content:\"\";display:block;position:absolute;top:0;left:0;width:0;transition:width .4s;height:100%;background-color:rgb(255 252 252 / 52%)}.vue-pad-btn[data-v-8abb052a]::before{content:\"\";display:block;padding-bottom:100%}.vue-pad-btn[data-v-8abb052a]:active{border-color:rgb(255 255 255 / 0%);transform:translateY(2px)}.vue-pad-btn-label[data-v-8abb052a]{max-width:80px;position:absolute;top:8px;left:8px;display:flex;align-items:center;font-weight:600;font-size:.875rem;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vue-pad-btn-key[data-v-8abb052a]{position:absolute;bottom:8px;left:8px;font-weight:700;font-size:.675rem}.vue-pad-btn-number[data-v-8abb052a]{padding:1px 6px;margin-right:4px;border-radius:2px;color:#d022d0;background-color:rgb(0 0 0 / 60%)}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-8abb052a";
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

// Import vue component

const install = function installVuePad(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('VuePad', __vue_component__);
}; // Create module definition for Vue.use()
// to be registered via Vue.use() as well as Vue.component()


__vue_component__.install = install; // Export component by default
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

export default __vue_component__;

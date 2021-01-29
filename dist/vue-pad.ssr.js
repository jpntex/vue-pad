'use strict';Object.defineProperty(exports,'__esModule',{value:true});//
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
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      keys: {}
    };
  },
  mounted: function mounted() {
    var _this = this;

    window.addEventListener('keyup', this.onKeyUp);
    this.sounds.forEach(function (sound, index) {
      if (sound.shortkey) {
        _this.keys[sound.shortkey.toLowerCase()] = {
          sound: sound,
          index: index
        };
      }
    });
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('keyup', this.onKeyUp);
  },
  methods: {
    onKeyUp: function onKeyUp(event) {
      var keyMap = this.keys[event.key.toLowerCase()];
      if (keyMap) this.play(keyMap.sound, keyMap.index);
    },
    play: function play(sound, index) {
      var ref = this.$refs["sound".concat(index)];
      if (!ref) return;
      var audio = ref[0];
      if (!audio) return;
      audio.volume = sound.volume;
      audio.currentTime = 0;
      audio.play();
    },
    getColorStyle: function getColorStyle(color) {
      return "background: radial-gradient(circle, rgba(255, 255, 255, 1) -40%, ".concat(color, " 100%);");
    },
    onUpdate: function onUpdate(sound, index) {
      var ref = this.$refs["sound".concat(index)];
      if (!ref) return;
      var audio = ref[0];
      if (!audio) return;
      var seek = this.$refs["seekbar".concat(index)][0];

      if (audio.currentTime / audio.duration === 1) {
        seek.style.width = audio.currentTime / audio.duration * 100 + '%';
        setTimeout(function () {
          seek.style.display = 'none';
          seek.style.width = 0;
        }, 200);
      } else {
        seek.style.display = 'block';
        seek.style.width = audio.currentTime / audio.duration * 100 + '%';
      }
    },
    findKeyCode: function findKeyCode(key) {
      for (var keyCode in keyCodes) {
        if (keyCodes[keyCode] === key.toLowerCase()) return keyCode;
      }

      return null;
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group =  css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "vue-pad"
  }, [_vm._ssrNode(_vm._ssrList(_vm.sounds, function (sound, index) {
    return "<div class=\"vue-pad-btn\"" + _vm._ssrStyle(null, _vm.getColorStyle(sound.color), null) + " data-v-8abb052a><audio" + _vm._ssrAttr("src", sound.url) + " preload=\"metadata\" data-v-8abb052a></audio> <div class=\"vue-pad-btn-label\" data-v-8abb052a><div class=\"vue-pad-btn-number\"" + _vm._ssrStyle(null, "color: " + sound.color + ";", null) + " data-v-8abb052a>" + _vm._ssrEscape("\n        " + _vm._s(index + 1) + "\n      ") + "</div> <span data-v-8abb052a>" + _vm._ssrEscape(_vm._s(sound.label)) + "</span></div> " + (sound.shortkey ? "<div class=\"vue-pad-btn-key\" data-v-8abb052a>" + _vm._ssrEscape("\n      " + _vm._s(sound.shortkey) + "\n    ") + "</div>" : "<!---->") + " <div class=\"vue-pad-btn-progress\" data-v-8abb052a></div></div>";
  }))]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-8abb052a_0", {
    source: ".vue-pad[data-v-8abb052a]{display:grid;grid-template-columns:repeat(auto-fill,minmax(80px,1fr));grid-gap:6px}.vue-pad-btn *[data-v-8abb052a]{user-select:none}.vue-pad-btn[data-v-8abb052a]{position:relative;cursor:pointer;border-radius:3px;transition:all .1s ease-out;border:2px solid rgb(255 255 255 / 5%);border-top-color:rgb(255 255 255 / 37%)}.vue-pad-btn-progress[data-v-8abb052a]{content:\"\";display:block;position:absolute;top:0;left:0;width:0;transition:width .4s;height:100%;background-color:rgb(255 252 252 / 52%)}.vue-pad-btn[data-v-8abb052a]::before{content:\"\";display:block;padding-bottom:100%}.vue-pad-btn[data-v-8abb052a]:active{border-color:rgb(255 255 255 / 0%);transform:translateY(2px)}.vue-pad-btn-label[data-v-8abb052a]{max-width:80px;position:absolute;top:8px;left:8px;display:flex;align-items:center;font-weight:600;font-size:.875rem;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vue-pad-btn-key[data-v-8abb052a]{position:absolute;bottom:8px;left:8px;font-weight:700;font-size:.675rem}.vue-pad-btn-number[data-v-8abb052a]{padding:1px 6px;margin-right:4px;border-radius:2px;color:#d022d0;background-color:rgb(0 0 0 / 60%)}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-8abb052a";
/* module identifier */

var __vue_module_identifier__ = "data-v-8abb052a";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);// Import vue component

var install = function installVuePad(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('VuePad', __vue_component__);
}; // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

{
  var GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
} // Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()


__vue_component__.install = install; // Export component by default
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;
exports.default=__vue_component__;
import __nuxt_component_0 from './Icon-B6ODn5Cd.mjs';
import { useSSRContext, defineComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PasswordRule",
  __ssrInlineRender: true,
  props: {
    inputString: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="${ssrRenderClass([{
        "text-gray-300": _ctx.inputString.length < 6 || _ctx.inputString.length > 18,
        "text-orange-600": _ctx.inputString.length >= 6 && _ctx.inputString.length <= 18
      }, "flex items-center"])}">`);
      _push(ssrRenderComponent(_component_UIcon, { name: "i-heroicons:check-circle-solid" }, null, _parent));
      _push(`<span>\u9577\u5EA6\u70BA 6-18 \u500B\u5B57\u5143</span></div><div class="${ssrRenderClass([{
        "text-gray-300": /(?=.*[A-Z]).*/g.test(_ctx.inputString) === false,
        "text-orange-600": /(?=.*[A-Z]).*/g.test(_ctx.inputString) === true
      }, "flex items-center"])}">`);
      _push(ssrRenderComponent(_component_UIcon, { name: "i-heroicons:check-circle-solid" }, null, _parent));
      _push(`<span>\u5305\u542B 1 \u500B\u5927\u5BEB\u5B57\u6BCD</span></div><div class="${ssrRenderClass([{
        "text-gray-300": /(?=.*\d).*/g.test(_ctx.inputString) === false,
        "text-orange-600": /(?=.*\d).*/g.test(_ctx.inputString) === true
      }, "flex items-center"])}">`);
      _push(ssrRenderComponent(_component_UIcon, { name: "i-heroicons:check-circle-solid" }, null, _parent));
      _push(`<span>\u5305\u542B 1 \u500B\u6578\u5B57</span></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PasswordRule.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=PasswordRule-fKVF88Ky.mjs.map

import __nuxt_component_0 from './Icon-B6ODn5Cd.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';
import { a as useLocalePath, n as navigateTo } from './server.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RoundAngleYellow",
  __ssrInlineRender: true,
  props: {
    label: {},
    disabled: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        "aria-label": _ctx.label,
        class: "box-border cursor-pointer rounded-2xl border-none outline-none",
        style: { "background-color": "#E0B053" },
        disabled: _ctx.disabled
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button/RoundAngleYellow.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BeeKeeper",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_0;
      const _component_ButtonRoundAngleYellow = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between md:justify-around rounded-full bg-transparent md:bg-[#FFECBB] text-[#B77F2C] md:p-3" }, _attrs))}><span class="flex items-center justify-center gap-x-2 xs:gap-x-2 text-sm xs:text-md">`);
      _push(ssrRenderComponent(_component_UIcon, {
        class: "h-6 w-6",
        name: "i-solar:chef-hat-heart-outline"
      }, null, _parent));
      _push(` \u6211\u60F3\u6210\u70BA\u5BF5\u7269\u8913\u6BCD </span>`);
      _push(ssrRenderComponent(_component_ButtonRoundAngleYellow, {
        label: "\u7533\u8ACB\u6210\u70BA\u5BF5\u7269\u8913\u6BCD\u6309\u9215",
        class: "flex items-center justify-center gap-x-2 px-4 py-2 text-white text-xs xs:text-sm",
        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(unref(localePath)("signUp-petSitter"))
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}> \u7533\u8ACB\u53BB </span>`);
            _push2(ssrRenderComponent(_component_UIcon, { name: "i-heroicons:arrow-right" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", null, " \u7533\u8ACB\u53BB "),
              createVNode(_component_UIcon, { name: "i-heroicons:arrow-right" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button/SignUp/BeeKeeper.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BeeKeeper-BvdERutE.mjs.map

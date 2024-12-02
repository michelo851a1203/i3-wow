import { _ as _sfc_main$1 } from './Pale-B861WQUB.mjs';
import __nuxt_component_0 from './Icon-B6ODn5Cd.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderHot",
  __ssrInlineRender: true,
  props: {
    order: { default: "asc" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonPale = _sfc_main$1;
      const _component_UIcon = __nuxt_component_0;
      _push(ssrRenderComponent(_component_ButtonPale, mergeProps({
        label: "\u6392\u5E8F\u71B1\u9580\u9AD8\u5230\u4F4E\u6309\u9215",
        class: "flex items-center justify-center gap-x-2 rounded-xl bg-white px-3 py-2 shadow-md"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="font-medium"${_scopeId}>${ssrInterpolate(_ctx.order === "asc" ? "\u71B1\u9580\u9AD8\u5230\u4F4E" : "\u71B1\u9580\u4F4E\u5230\u9AD8")}</span>`);
            _push2(ssrRenderComponent(_component_UIcon, { name: "i-heroicons:funnel" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", { class: "font-medium" }, toDisplayString(_ctx.order === "asc" ? "\u71B1\u9580\u9AD8\u5230\u4F4E" : "\u71B1\u9580\u4F4E\u5230\u9AD8"), 1),
              createVNode(_component_UIcon, { name: "i-heroicons:funnel" })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button/Utils/OrderHot.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=OrderHot-CscGDj-l.mjs.map

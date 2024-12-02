import { _ as _sfc_main$1 } from './Pale-B861WQUB.mjs';
import __nuxt_component_0 from './Icon-B6ODn5Cd.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LikeSwitcher",
  __ssrInlineRender: true,
  props: {
    isLike: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonPale = _sfc_main$1;
      const _component_UIcon = __nuxt_component_0;
      _push(ssrRenderComponent(_component_ButtonPale, mergeProps({ label: "\u52A0\u5230\u6700\u611B/\u53D6\u6D88\u52A0\u5230\u6700\u611B\u6309\u9215" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!_ctx.isLike) {
              _push2(ssrRenderComponent(_component_UIcon, {
                class: "text-orange-600",
                name: "i-heroicons:heart"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.isLike) {
              _push2(ssrRenderComponent(_component_UIcon, {
                class: "text-orange-600",
                name: "i-heroicons:heart-solid"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !_ctx.isLike ? (openBlock(), createBlock(_component_UIcon, {
                key: 0,
                class: "text-orange-600",
                name: "i-heroicons:heart"
              })) : createCommentVNode("", true),
              _ctx.isLike ? (openBlock(), createBlock(_component_UIcon, {
                key: 1,
                class: "text-orange-600",
                name: "i-heroicons:heart-solid"
              })) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button/Utils/LikeSwitcher.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=LikeSwitcher-DWkHCC9E.mjs.map

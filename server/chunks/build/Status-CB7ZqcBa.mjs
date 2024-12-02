import __nuxt_component_0 from './Modal-CUWDe7J7.mjs';
import { useSSRContext, defineComponent, mergeModels, useModel, mergeProps, withCtx, createVNode, renderSlot, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Status",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    msg: {}
  }, {
    "modelValue": { type: Boolean, ...{ default: false } },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const isShow = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = __nuxt_component_0;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        modelValue: isShow.value,
        "onUpdate:modelValue": ($event) => isShow.value = $event,
        overlay: false,
        ui: {
          width: "w-36",
          height: "h-36"
        },
        "trap-focus": {
          escapeDeactivates: true,
          allowOutsideClick: true
        }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mx-auto flex flex-col h-full w-full items-center justify-center gap-y-4 rounded-xl"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.msg)}</span><button class="absolute right-2 top-1 text-white"${_scopeId}> \xD7 </button></div>`);
          } else {
            return [
              createVNode("div", { class: "mx-auto flex flex-col h-full w-full items-center justify-center gap-y-4 rounded-xl" }, [
                renderSlot(_ctx.$slots, "default"),
                createVNode("span", null, toDisplayString(_ctx.msg), 1),
                createVNode("button", { class: "absolute right-2 top-1 text-white" }, " \xD7 ")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modal/Status.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Status-CB7ZqcBa.mjs.map

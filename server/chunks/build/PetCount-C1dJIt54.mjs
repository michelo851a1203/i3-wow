import { useSSRContext, defineComponent, mergeProps, mergeModels, useModel, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';
import __nuxt_component_0 from './Icon-B6ODn5Cd.mjs';
import { _ as _sfc_main$2 } from './Common-DHSSImN5.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RoundFullOutline",
  __ssrInlineRender: true,
  props: {
    label: {},
    disabled: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        "aria-label": _ctx.label,
        class: "border border-[#FB976E] aspect-square flex cursor-pointer items-center justify-center rounded-full bg-transparent",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button/RoundFullOutline.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PetCount",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    min: { default: 1 }
  }, {
    "modelValue": { default: 0 },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const count = useModel(__props, "modelValue");
    const add = () => {
      count.value++;
    };
    const minus = () => {
      if (__props.min === count.value)
        return;
      count.value--;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonRoundFullOutline = _sfc_main$1;
      const _component_UIcon = __nuxt_component_0;
      const _component_InputCommon = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="w-full flex items-center gap-x-1">`);
      if (_ctx.required) {
        _push(`<span class="text-red-500 text-sm"> * </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span>\u5BF5\u7269\u6578\u91CF</span></div><div class="w-full flex items-center justify-start gap-x-4">`);
      _push(ssrRenderComponent(_component_ButtonRoundFullOutline, {
        label: "\u6E1B\u5C11\u5BF5\u7269\u6578\u91CF1\u6309\u9215",
        class: "border-orange-600 p-1",
        disabled: _ctx.disabled || _ctx.min === count.value,
        onClick: minus
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              class: "text-orange-600",
              name: "i-heroicons-minus"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UIcon, {
                class: "text-orange-600",
                name: "i-heroicons-minus"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_InputCommon, {
        modelValue: count.value,
        "onUpdate:modelValue": ($event) => count.value = $event,
        label: "\u5BF5\u7269\u6578\u91CF",
        "is-show-label": false,
        required: "",
        "cursor-center": "",
        class: "max-w-12 text-center",
        disabled: _ctx.disabled
      }, null, _parent));
      _push(ssrRenderComponent(_component_ButtonRoundFullOutline, {
        class: "p-1",
        label: "\u589E\u52A0\u5BF5\u7269\u6578\u91CF1\u6309\u9215",
        disabled: _ctx.disabled,
        onClick: add
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              class: "text-orange-600",
              name: "i-heroicons-plus"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UIcon, {
                class: "text-orange-600",
                name: "i-heroicons-plus"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/PetCount.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=PetCount-C1dJIt54.mjs.map

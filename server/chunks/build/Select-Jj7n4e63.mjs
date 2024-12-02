import __nuxt_component_0 from './SelectMenu-JtM-AXfn.mjs';
import { useSSRContext, defineComponent, mergeModels, useId, useModel, computed, withCtx, unref, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Select",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    label: {},
    isShowLabel: { type: Boolean, default: true },
    errorMessage: { default: "" },
    options: { default: () => [] },
    disabled: { type: Boolean },
    required: { type: Boolean },
    suffix: { default: "" },
    isFullSize: { type: Boolean, default: false }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const errorID = useId("$CZgBj6o4Ns");
    const modelValue = useModel(__props, "modelValue");
    const showName = computed(() => {
      var _a2;
      var _a;
      return (_a2 = (_a = __props.options.find((option) => option.value === modelValue.value)) == null ? void 0 : _a.title) != null ? _a2 : "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_USelectMenu = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-col items-start gap-y-2"><span style="${ssrRenderStyle(_ctx.isShowLabel ? null : { display: "none" })}" class="flex items-center justify-center gap-x-1">`);
      if (_ctx.required) {
        _push(`<span class="text-red-500 text-xs"> * </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${ssrInterpolate(_ctx.label)}</span></span><div class="w-full flex items-center justify-start gap-x-2">`);
      _push(ssrRenderComponent(_component_USelectMenu, {
        modelValue: modelValue.value,
        "onUpdate:modelValue": ($event) => modelValue.value = $event,
        options: _ctx.options,
        "value-attribute": "value",
        "option-attribute": "title",
        class: ["rounded-lg py-1", { "w-full": _ctx.isFullSize }]
      }, {
        label: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="py-1"${_scopeId}>${ssrInterpolate(unref(showName))}</span>`);
          } else {
            return [
              createVNode("span", { class: "py-1" }, toDisplayString(unref(showName)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (_ctx.suffix !== "") {
        _push(`<span>${ssrInterpolate(_ctx.suffix)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><span style="${ssrRenderStyle(_ctx.errorMessage ? null : { display: "none" })}"${ssrRenderAttr("id", unref(errorID))} class="text-sm text-red-500">${ssrInterpolate(_ctx.errorMessage)}</span></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/Select.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Select-Jj7n4e63.mjs.map

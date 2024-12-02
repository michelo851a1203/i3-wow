import { useSSRContext, defineComponent, mergeModels, useId, useModel, shallowRef, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderClass, ssrRenderSlot, ssrIncludeBooleanAttr } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Prefix",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    label: {},
    id: { default: () => useId("$N7fPaqmvJU") },
    isShowLabel: { type: Boolean, default: true },
    errorMessage: { default: "" },
    placeholder: { default: "" },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false }
  }, {
    "modelValue": { default: "" },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const errorID = useId("$Kyu4KKUoZP");
    const modelValue = useModel(__props, "modelValue");
    const isInputFocus = shallowRef(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><label${ssrRenderAttr("for", _ctx.id)} class="flex flex-col items-start"><span style="${ssrRenderStyle(_ctx.isShowLabel ? null : { display: "none" })}" class="flex items-center justify-center gap-x-1">`);
      if (_ctx.required) {
        _push(`<span class="text-red-500 text-xs"> * </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${ssrInterpolate(_ctx.label)}</span></span><div class="${ssrRenderClass([{ "border-[1px] border-gray-200": !unref(isInputFocus), "border-[2px] border-orange-600": unref(isInputFocus) }, "w-full flex items-stretch overflow-hidden rounded-lg"])}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<input${ssrRenderAttr("id", _ctx.id)}${ssrRenderAttr("value", modelValue.value)} class="flex-grow px-3 py-2 outline-none" type="text"${ssrRenderAttr("placeholder", _ctx.placeholder)}${ssrRenderAttr("aria-describedby", _ctx.errorMessage ? unref(errorID) : void 0)}${ssrIncludeBooleanAttr(_ctx.disabled) ? " disabled" : ""}></div></label><span style="${ssrRenderStyle(_ctx.errorMessage ? null : { display: "none" })}"${ssrRenderAttr("id", unref(errorID))} class="text-sm text-red-500">${ssrInterpolate(_ctx.errorMessage)}</span></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/Prefix.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Prefix-CQaUPUPN.mjs.map

import { useSSRContext, defineComponent, mergeModels, useId, useModel, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TextArea",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    label: {},
    id: { default: () => useId("$y70s6vqKO7") },
    isShowLabel: { type: Boolean, default: true },
    errorMessage: { default: "" },
    placeholder: { default: "" },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    showLimit: { default: () => -1 }
  }, {
    "modelValue": { default: "" },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const errorID = useId("$lItb9ezgTf");
    const modelValue = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><label${ssrRenderAttr("for", _ctx.id)} class="flex flex-col items-start gap-y-2"><span style="${ssrRenderStyle(_ctx.isShowLabel ? null : { display: "none" })}" class="flex items-center justify-center gap-x-1">`);
      if (_ctx.required) {
        _push(`<span class="text-red-500 text-xs"> * </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${ssrInterpolate(_ctx.label)}</span></span><textarea${ssrRenderAttr("id", _ctx.id)}${ssrRenderAttr("placeholder", _ctx.placeholder)} class="border border-gray-200 w-full rounded-lg px-3 py-2 outline-orange-600"${ssrRenderAttr("aria-describedby", _ctx.errorMessage ? unref(errorID) : void 0)}${ssrIncludeBooleanAttr(_ctx.disabled) ? " disabled" : ""}>${ssrInterpolate(modelValue.value)}</textarea>`);
      if (_ctx.showLimit !== -1) {
        _push(`<div class="${ssrRenderClass([{
          "text-gray-400": modelValue.value.length <= _ctx.showLimit,
          "text-red-500": modelValue.value.length > _ctx.showLimit
        }, "w-full mt-[-0.5rem] text-right"])}">${ssrInterpolate(modelValue.value.length)}/${ssrInterpolate(_ctx.showLimit)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><span style="${ssrRenderStyle(_ctx.errorMessage ? null : { display: "none" })}"${ssrRenderAttr("id", unref(errorID))} class="text-sm text-red-500">${ssrInterpolate(_ctx.errorMessage)}</span></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/TextArea.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=TextArea-BzPNiDUE.mjs.map

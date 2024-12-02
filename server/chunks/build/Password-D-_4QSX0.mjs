import __nuxt_component_0 from './Icon-B6ODn5Cd.mjs';
import { useSSRContext, defineComponent, mergeModels, useId, shallowRef, useModel, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderClass, ssrRenderDynamicModel, ssrIncludeBooleanAttr, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Password",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    label: {},
    id: { default: () => useId("$bkWbGsHCse") },
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
    const errorID = shallowRef("");
    const modelValue = useModel(__props, "modelValue");
    const isShowPassword = shallowRef(false);
    const isInputFocus = shallowRef(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><label${ssrRenderAttr("for", _ctx.id)} class="flex flex-col items-start gap-y-2"><span style="${ssrRenderStyle(_ctx.isShowLabel ? null : { display: "none" })}" class="flex items-center justify-center gap-x-1">`);
      if (_ctx.required) {
        _push(`<span class="text-red-500 text-xs"> * </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${ssrInterpolate(_ctx.label)}</span></span><div class="${ssrRenderClass([{ "border-[1px] border-gray-200": !unref(isInputFocus), "border-[2px] border-orange-600": unref(isInputFocus) }, "w-full flex items-center justify-center gap-x-2 overflow-hidden rounded-lg pr-3"])}"><input${ssrRenderAttr("id", _ctx.id)}${ssrRenderDynamicModel(!unref(isShowPassword) ? "password" : "text", modelValue.value, null)}${ssrRenderAttr("placeholder", _ctx.placeholder)}${ssrRenderAttr("type", !unref(isShowPassword) ? "password" : "text")} class="flex-grow px-3 py-2 outline-none"${ssrRenderAttr("aria-describedby", _ctx.errorMessage ? unref(errorID) : void 0)}${ssrIncludeBooleanAttr(_ctx.disabled) ? " disabled" : ""}>`);
      _push(ssrRenderComponent(_component_UIcon, {
        style: !unref(isShowPassword) ? null : { display: "none" },
        class: "cursor-pointer",
        name: "i-eva:eye-off-2-outline",
        onClick: ($event) => isShowPassword.value = true
      }, null, _parent));
      _push(ssrRenderComponent(_component_UIcon, {
        style: unref(isShowPassword) ? null : { display: "none" },
        class: "cursor-pointer",
        name: "i-eva:eye-outline",
        onClick: ($event) => isShowPassword.value = false
      }, null, _parent));
      _push(`</div></label><span style="${ssrRenderStyle(_ctx.errorMessage ? null : { display: "none" })}"${ssrRenderAttr("id", unref(errorID))} class="text-sm text-red-500">${ssrInterpolate(_ctx.errorMessage)}</span></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/Password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Password-D-_4QSX0.mjs.map

import { useSSRContext, defineComponent, mergeModels, useModel, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Tabs",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    tabList: {}
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["update:triggerTab"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const activeTabID = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-start gap-x-6" }, _attrs))}><!--[-->`);
      ssrRenderList(_ctx.tabList, (item) => {
        _push(`<button class="${ssrRenderClass([{ "border-b-orange-600 border-b-2 text-orange-600": activeTabID.value === item.id }, "text-sm text-center flex items-center justify-center py-2"])}">${ssrInterpolate(item.title)}</button>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tabs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Tabs-Cb0V9DXg.mjs.map

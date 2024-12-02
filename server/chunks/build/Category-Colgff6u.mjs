import __nuxt_component_0 from './Icon-B6ODn5Cd.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Category",
  __ssrInlineRender: true,
  props: {
    imageUrl: {},
    title: {},
    articleCount: {}
  },
  setup(__props) {
    const backGroundImage = computed(() => `background-image: url('${__props.imageUrl}')`);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "bg-cover bg-center bg-no-repeat h-64 w-64 flex items-center justify-end rounded-xl text-white",
        style: unref(backGroundImage)
      }, _attrs))}><div class="w-2/3"><div class="text-xl">${ssrInterpolate(_ctx.title)}</div><div class="text-sm">${ssrInterpolate(_ctx.articleCount)} \u7BC7 </div></div><div class="w-1/3">`);
      _push(ssrRenderComponent(_component_UIcon, { name: "i-heroicons:chevron-right-16-solid" }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/Card/Category.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Category-Colgff6u.mjs.map

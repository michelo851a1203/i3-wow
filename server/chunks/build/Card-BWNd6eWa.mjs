import { useSSRContext, defineComponent, computed, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { u as useImage } from './composables-VAV01sHq.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    photo: {},
    provider: {},
    city: {},
    price: {},
    rating: {}
  },
  setup(__props) {
    const img = useImage();
    const photoStyle = computed(() => `background-image: url('${img(__props.photo)}')`);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full flex items-center justify-center" }, _attrs))}><div class="w-[11.25rem] h-[11.25rem] overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat" style="${ssrRenderStyle(unref(photoStyle))}"></div><div class="w-40 bg-black/50 text-center text-white absolute bottom-3 rounded-md px-2 py-2 backdrop-blur-lg"><div class="flex items-center justify-between text-sm"><div class="font-semibold">${ssrInterpolate(_ctx.provider)}</div></div><div class="flex items-center justify-between text-xs"><div>${ssrInterpolate(_ctx.rating)}</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Recommend/Card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Card-BWNd6eWa.mjs.map

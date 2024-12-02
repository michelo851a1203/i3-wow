import { _ as _sfc_main$1 } from './NuxtImg-Ce9a8LGV.mjs';
import { useSSRContext, defineComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "WaveBackground",
  __ssrInlineRender: true,
  props: {
    topBackgroundColor: { default: "#FFEAE1" },
    bottomBackgroundColor: { default: "#FFEAE1" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "images/frontpage/wavetop.svg",
        class: ["h-auto w-full object-cover", _ctx.topBackgroundColor],
        alt: "Crowdfunding"
      }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "images/frontpage/wavebottom.svg",
        class: ["h-auto w-full object-cover", _ctx.bottomBackgroundColor],
        alt: "Crowdfunding"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WaveBackground.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=WaveBackground-C7ZH5xxO.mjs.map

import __nuxt_component_1 from './index-Bq1kpYX2.mjs';
import { useSSRContext, defineComponent, unref, mergeProps } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { I as IconNameStatus } from './petSitter.type-BjvpgkZ2.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "ServiceIcon",
  __ssrInlineRender: true,
  props: {
    iconName: {},
    active: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<!--[-->`);
      if (_ctx.iconName === unref(IconNameStatus).Sitter && _ctx.active) {
        _push(ssrRenderComponent(_component_Icon, mergeProps(_ctx.$attrs, { name: "main-icons:service-sitter" }), null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.iconName === unref(IconNameStatus).Beauty && _ctx.active) {
        _push(ssrRenderComponent(_component_Icon, mergeProps(_ctx.$attrs, { name: "main-icons:service-beauty" }), null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.iconName === unref(IconNameStatus).Sitter && !_ctx.active) {
        _push(ssrRenderComponent(_component_Icon, mergeProps(_ctx.$attrs, { name: "main-icons:service-sitter-no-active" }), null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.iconName === unref(IconNameStatus).Beauty && !_ctx.active) {
        _push(ssrRenderComponent(_component_Icon, mergeProps(_ctx.$attrs, { name: "main-icons:service-beauty-no-active" }), null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PetSitter/ServiceIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ServiceIcon-B7HfU_kG.mjs.map

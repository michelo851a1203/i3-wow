import { _ as _sfc_main$2 } from './Pale-B861WQUB.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, withCtx, createTextVNode, toDisplayString, unref, createVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { u as useDateFormat } from './server.mjs';
import { _ as _sfc_main$3 } from './Primary-DO2BBNU0.mjs';
import __nuxt_component_0 from './Icon-B6ODn5Cd.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HotArticle",
  __ssrInlineRender: true,
  props: {
    title: {},
    photoUrl: {},
    postDate: {},
    categories: {}
  },
  setup(__props) {
    const backgroundImageStyle = computed(() => {
      return `background-image: url('${__props.photoUrl}')`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonPale = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex items-center justify-start gap-x-2 rounded-xl bg-white" }, _attrs))}><div class="w-2/3"><h3>${ssrInterpolate(_ctx.title)}</h3><div class="flex items-center">`);
      _push(ssrRenderComponent(_component_ButtonPale, {
        class: "text-orange-600 underline",
        label: "\u4E00\u822C\u7528\u6236\u8A3B\u518A\u6309\u9215"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.categories)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.categories), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="text-gray-300">.</span><span class="text-gray-300">${ssrInterpolate(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))(_ctx.postDate, "MMMM DD ,YYYY"))}</span></div></div><div class="h-full w-1/3 rounded-2xl bg-cover bg-center" style="${ssrRenderStyle(unref(backgroundImageStyle))}"></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/Card/HotArticle.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Hot",
  __ssrInlineRender: true,
  props: {
    hotList: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlogCardHotArticle = _sfc_main$1;
      const _component_ButtonPrimary = _sfc_main$3;
      const _component_UIcon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(_attrs)}><h2>\u71B1\u9580\u6587\u7AE0</h2><div class="w-full border-b border-dashed border-[#FEBEA3]"></div><!--[-->`);
      ssrRenderList(_ctx.hotList, (hot) => {
        _push(ssrRenderComponent(_component_BlogCardHotArticle, mergeProps({
          key: hot.id,
          ref_for: true
        }, hot), null, _parent));
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_ButtonPrimary, {
        label: "\u524D\u5F80\u66F4\u591A\u71B1\u9580\u6587\u7AE0\u6309\u9215",
        class: "w-full flex items-center justify-center gap-x-2 text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u71B1\u9580\u6587\u7AE0</span>`);
            _push2(ssrRenderComponent(_component_UIcon, { name: "i-heroicons:chevron-right-16-solid" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", null, "\u71B1\u9580\u6587\u7AE0"),
              createVNode(_component_UIcon, { name: "i-heroicons:chevron-right-16-solid" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/Article/Hot.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Hot-BuHhMNiQ.mjs.map

import { _ as _sfc_main$2 } from './NuxtImg-Ce9a8LGV.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as _sfc_main$3 } from './Primary-DO2BBNU0.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center gap-4 pt-6" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "images/frontpage/feet.svg",
    class: "w-[1.125rem] object-cover",
    alt: "Crowdfunding"
  }, null, _parent));
  _push(`<p class="text-[1.125rem] text-amber-950 font-bold"> \u70BA\u60A8\u63A8\u85A6\u512A\u8CEA\u670D\u52D9\u5C08\u5BB6 </p>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "images/frontpage/feet.svg",
    class: "w-[1.125rem] object-cover",
    alt: "Crowdfunding"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Recommend/Title.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ButtonPrimary = _sfc_main$3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_ButtonPrimary, {
    class: "mb-6 h-[2.375rem] w-[17.25rem] flex items-center justify-center",
    label: _ctx.$t("home.recommendButtonLabel")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="text-white text-sm"${_scopeId}> \u67E5\u770B\u66F4\u591A\u5C08\u5BB6 &gt; </span>`);
      } else {
        return [
          createVNode("span", { class: "text-white text-sm" }, " \u67E5\u770B\u66F4\u591A\u5C08\u5BB6 > ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Recommend/Tail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _, __nuxt_component_2 as a };
//# sourceMappingURL=Tail-CPaypyWV.mjs.map

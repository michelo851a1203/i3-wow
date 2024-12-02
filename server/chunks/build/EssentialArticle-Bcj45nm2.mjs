import { _ as _sfc_main$1 } from './NuxtImg-Ce9a8LGV.mjs';
import { _ as _sfc_main$2 } from './LikeSwitcher-DWkHCC9E.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { u as useDateFormat } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EssentialArticle",
  __ssrInlineRender: true,
  props: {
    title: {},
    photoUrl: {},
    authorName: {},
    authorPhotoUrl: {},
    postDate: {},
    isLike: { type: Boolean }
  },
  setup(__props) {
    const backgroundImageStyle = computed(() => {
      return `background-image: url('${__props.photoUrl}')`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      const _component_ButtonUtilsLikeSwitcher = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex items-center justify-start gap-x-2 rounded-xl bg-white" }, _attrs))}><div class="h-full w-1/4 rounded-2xl bg-cover bg-center" style="${ssrRenderStyle(unref(backgroundImageStyle))}"></div><div class="w-3/4"><h3>${ssrInterpolate(_ctx.title)}</h3><div class="flex items-center justify-between"><div class="flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: _ctx.authorPhotoUrl,
        format: "webp"
      }, null, _parent));
      _push(`<div class="flex flex-col items-start"><span>${ssrInterpolate(_ctx.authorName)}</span><span>${ssrInterpolate(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))(_ctx.postDate, "MMMM DD ,YYYY"))}</span></div></div>`);
      _push(ssrRenderComponent(_component_ButtonUtilsLikeSwitcher, { "is-like": _ctx.isLike }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/Card/EssentialArticle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=EssentialArticle-Bcj45nm2.mjs.map

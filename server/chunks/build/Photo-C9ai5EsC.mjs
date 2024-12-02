import { _ as _sfc_main$1 } from './NuxtImg-Ce9a8LGV.mjs';
import { _ as _sfc_main$2 } from './LikeSwitcher-DWkHCC9E.mjs';
import { useSSRContext, defineComponent, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { u as useDateFormat } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Photo",
  __ssrInlineRender: true,
  props: {
    title: {},
    photoUrl: {},
    authorName: {},
    authorPhotoUrl: {},
    postDate: {},
    isLike: { type: Boolean, default: false }
  },
  setup(__props) {
    const convertToBackgroundImage = (url) => {
      return `background-image: url('${url}')`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      const _component_ButtonUtilsLikeSwitcher = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtImg, { src: _ctx.photoUrl }, null, _parent));
      _push(`<div>${ssrInterpolate(_ctx.title)}</div><div class="flex items-end justify-between"><div class="flex items-center justify-center"><div class="h-8 w-8 rounded-full bg-cover bg-center bg-no-repeat" style="${ssrRenderStyle(convertToBackgroundImage(_ctx.authorPhotoUrl))}"></div><div class="flex flex-col items-center"><span>${ssrInterpolate(_ctx.authorName)}</span><p>${ssrInterpolate(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))(_ctx.postDate, "MMMM DD ,YYYY"))}</p></div></div>`);
      _push(ssrRenderComponent(_component_ButtonUtilsLikeSwitcher, { "is-like": _ctx.isLike }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/Card/Photo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Photo-C9ai5EsC.mjs.map

import { _ as _sfc_main$1 } from './Pale-B861WQUB.mjs';
import { _ as __nuxt_component_4 } from './LineRoundIcon-CHKgnO9C.mjs';
import __nuxt_component_0 from './Icon-B6ODn5Cd.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CommunityShare",
  __ssrInlineRender: true,
  props: {
    name: {},
    lineLink: { default: "" },
    youtubeLink: { default: "" },
    facebookLink: { default: "" },
    link: { default: "" }
  },
  setup(__props) {
    const openLink = (url) => {
      if (url === "")
        return;
      const newWindow = (void 0).open(__props.link, "_blank");
      if (newWindow === null)
        return;
      newWindow.opener = null;
    };
    const share = () => {
      console.group("%c test", "color: yellow;");
      console.log(__props.link);
      console.groupEnd();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonPale = _sfc_main$1;
      const _component_MemberPersonalInfoLineRoundIcon = __nuxt_component_4;
      const _component_UIcon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-x-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ButtonPale, {
        class: "flex items-center justify-center rounded-full",
        label: `\u524D\u5F80${_ctx.name}\u7684Line\u5E33\u865F\u6309\u9215`,
        onClick: ($event) => openLink(_ctx.lineLink)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_MemberPersonalInfoLineRoundIcon, { class: "w-7" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_MemberPersonalInfoLineRoundIcon, { class: "w-7" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ButtonPale, {
        class: "flex items-center justify-center rounded-full",
        label: `\u524D\u5F80${_ctx.name}\u7684Youtube\u5E33\u865F\u6309\u9215`,
        onClick: ($event) => openLink(_ctx.youtubeLink)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              class: "rounded-full text-xl",
              name: "i-logos:youtube-icon"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UIcon, {
                class: "rounded-full text-xl",
                name: "i-logos:youtube-icon"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ButtonPale, {
        class: "flex items-center justify-center rounded-full",
        label: `\u524D\u5F80${_ctx.name}\u7684\u81C9\u66F8\u5E33\u865F\u6309\u9215`,
        onClick: ($event) => openLink(_ctx.facebookLink)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              class: "rounded-full text-2xl",
              name: "i-logos:facebook"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UIcon, {
                class: "rounded-full text-2xl",
                name: "i-logos:facebook"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ButtonPale, {
        class: "flex items-center justify-center",
        label: `\u5206\u4EAB${_ctx.name}\u7684\u500B\u4EBA\u9023\u7D50\u6309\u9215`,
        onClick: share
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              class: "text-xl",
              name: "i-heroicons:share"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UIcon, {
                class: "text-xl",
                name: "i-heroicons:share"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button/Utils/CommunityShare.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=CommunityShare-CmFxLHYh.mjs.map

import { _ as __nuxt_component_1$3 } from './nuxt-link-BMiRqRVI.mjs';
import { _ as _sfc_main$h } from './NuxtImg-Ce9a8LGV.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useTemplateRef, useModel, watch, shallowRef, isRef, mergeModels, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderStyle, ssrRenderTeleport, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { g as useRoute, a as useLocalePath, M as onClickOutside, n as navigateTo, J as __nuxt_component_0$2, N as createSharedComposable, Q as useWindowSize, _ as _export_sfc } from './server.mjs';
import { _ as _sfc_main$i } from './OutlineRound-gX7utPmx.mjs';
import __nuxt_component_1$4 from './index-Bq1kpYX2.mjs';
import { _ as _sfc_main$j } from './Pale-B861WQUB.mjs';
import __nuxt_component_0$3 from './Icon-B6ODn5Cd.mjs';
import { u as useAuthStore } from './useAuthStore-6LI8GoiG.mjs';
import { storeToRefs } from 'pinia';
import * as zod from 'zod';
import __nuxt_component_0$4 from './Modal-CUWDe7J7.mjs';
import './composables-VAV01sHq.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'tailwind-merge';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './signUp.type-C4a4H3kg.mjs';
import './useCustomError-C6r27JZ9.mjs';
import './transition-HtJtC6dg.mjs';
import './portal-u0Fjoh1P.mjs';
import './focus-management-vHH7q6nP.mjs';
import './keyboard-Duq8EHr3.mjs';
import './use-outside-click-Did7lc5E.mjs';
import './hidden-Dc_fFmis.mjs';
import './active-element-history-Cer4cSOw.mjs';
import './micro-task-B6uncIso.mjs';
import './open-closed-BDzQJ33n.mjs';
import './description-BDgAPIdI.mjs';
import './tooltip-CpVvyQRR.mjs';

const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "NavList",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1$3;
      const _component_NuxtImg = _sfc_main$h;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-x-8" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              class: "w-40 md:w-[13.3125rem]",
              src: "images/header/shine.png",
              format: "webp",
              alt: _ctx.$t("header.brandImgAlt")
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtImg, {
                class: "w-40 md:w-[13.3125rem]",
                src: "images/header/shine.png",
                format: "webp",
                alt: _ctx.$t("header.brandImgAlt")
              }, null, 8, ["alt"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul class="hidden sm:flex items-center gap-x-8"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("intro")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("header.intro"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("header.intro")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></nav>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/NavList.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "RoundSecondary",
  __ssrInlineRender: true,
  props: {
    label: {},
    disabled: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        "aria-label": _ctx.label,
        class: "box-border aspect-square cursor-pointer rounded-full border-none outline-none",
        style: { "background-color": "#FFEAE1" },
        disabled: _ctx.disabled
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button/RoundSecondary.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "Drawer",
  __ssrInlineRender: true,
  props: {
    "modelValue": { type: Boolean, ...{ default: false } },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    useLocalePath();
    const drawer = useTemplateRef("drawerBody");
    const isDrawerShow = useModel(__props, "modelValue");
    const route = useRoute();
    onClickOutside(drawer, () => {
      isDrawerShow.value = false;
    });
    watch(() => route.path, () => {
      isDrawerShow.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$2;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Drawer.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "RegisterPanel",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    const authStore = useAuthStore();
    const { fakeToken } = storeToRefs(authStore);
    const isShow = shallowRef(false);
    const useSharableWindowsize = createSharedComposable(useWindowSize);
    const { width: windowWidth } = useSharableWindowsize();
    const backGroundImage = computed(() => `background-image: url('https://picsum.photos/id/40/500/500')`);
    const toggleDrawer = () => {
      if (windowWidth.value > 640)
        return;
      isShow.value = !isShow.value;
    };
    watch(isShow, (val) => {
      (void 0).body.style.overflowY = val ? "hidden" : "";
    });
    watch(windowWidth, (currentWindowWidth) => {
      if (currentWindowWidth > 640 && isShow) {
        isShow.value = false;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonOutlineRound = _sfc_main$i;
      const _component_Icon = __nuxt_component_1$4;
      const _component_ButtonPale = _sfc_main$j;
      const _component_UIcon = __nuxt_component_0$3;
      const _component_ButtonRoundSecondary = _sfc_main$f;
      const _component_Drawer = _sfc_main$e;
      _push(`<!--[--><div class="flex items-center gap-x-4">`);
      _push(ssrRenderComponent(_component_ButtonOutlineRound, {
        class: "ml-auto hidden sm:flex items-center",
        label: _ctx.$t("header.bePetSitterLabel"),
        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(unref(localePath)("signUp-petSitter"))
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              class: "text-2xl",
              name: "main-icons:hat"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-[#FB976E] font-bold"${_scopeId}>${ssrInterpolate(_ctx.$t("header.bePetSitter"))}</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                class: "text-2xl",
                name: "main-icons:hat"
              }),
              createVNode("span", { class: "text-[#FB976E] font-bold" }, toDisplayString(_ctx.$t("header.bePetSitter")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-x-2">`);
      _push(ssrRenderComponent(_component_ButtonPale, {
        class: "hidden h-full items-center justify-center pt-2 sm:flex",
        label: _ctx.$t("header.cartLabel")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              class: "w-9 h-9",
              name: "main-icons:cart"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                class: "w-9 h-9",
                name: "main-icons:cart"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ButtonPale, {
        class: "hidden items-center justify-center pt-2 sm:flex",
        label: _ctx.$t("header.bellLabel")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              class: "w-9 h-9",
              name: "main-icons:bell"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                class: "w-9 h-9",
                name: "main-icons:bell"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!unref(fakeToken)) {
        _push(ssrRenderComponent(_component_ButtonPale, {
          class: "pt-1",
          label: _ctx.$t("header.signInSignUpButton"),
          onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(unref(localePath)("signIn"))
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                class: "w-9 h-9 sm:hidden",
                name: "main-icons:people"
              }, null, _parent2, _scopeId));
              _push2(`<span class="hidden sm:inline"${_scopeId}>${ssrInterpolate(_ctx.$t("header.signInSignUp"))}</span>`);
            } else {
              return [
                createVNode(_component_Icon, {
                  class: "w-9 h-9 sm:hidden",
                  name: "main-icons:people"
                }),
                createVNode("span", { class: "hidden sm:inline" }, toDisplayString(_ctx.$t("header.signInSignUp")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_ButtonPale, {
          class: "min-w-16 flex items-center justify-center",
          label: "\u524D\u5F80\u6703\u54E1\u4E2D\u5FC3",
          onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(unref(localePath)("member"))
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-2/3 bg-cover bg-center bg-no-repeat aspect-square rounded-full" style="${ssrRenderStyle(unref(backGroundImage))}"${_scopeId}></div>`);
              _push2(ssrRenderComponent(_component_UIcon, { name: "i-heroicons:chevron-down-16-solid" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("div", {
                  class: "w-2/3 bg-cover bg-center bg-no-repeat aspect-square rounded-full",
                  style: unref(backGroundImage)
                }, null, 4),
                createVNode(_component_UIcon, { name: "i-heroicons:chevron-down-16-solid" })
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(ssrRenderComponent(_component_ButtonRoundSecondary, {
        class: "w-9 flex items-center justify-center sm:hidden",
        label: _ctx.$t("header.hambugerButton"),
        onClick: toggleDrawer
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              class: "h-full w-full",
              name: "main-icons:hamburger"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                class: "h-full w-full",
                name: "main-icons:hamburger"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(_component_Drawer, {
          modelValue: unref(isShow),
          "onUpdate:modelValue": ($event) => isRef(isShow) ? isShow.value = $event : null
        }, null, _parent));
      }, "#teleports", false, _parent);
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/RegisterPanel.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  const _component_HeaderNavList = _sfc_main$g;
  const _component_HeaderRegisterPanel = _sfc_main$d;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "fixed left-0 top-0 z-30 max-w-screen w-full flex items-center justify-around bg-white shadow-md min-h-[3.25rem] md:min-h-[4.625rem] sm:px-10" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_HeaderNavList, null, null, _parent));
  _push(ssrRenderComponent(_component_HeaderRegisterPanel, null, null, _parent));
  _push(`</header>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "RoundWhite",
  __ssrInlineRender: true,
  props: {
    label: {},
    disabled: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        "aria-label": _ctx.label,
        class: "box-border aspect-square cursor-pointer rounded-full border-none outline-none bg-white",
        disabled: _ctx.disabled
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button/RoundWhite.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Main",
  __ssrInlineRender: true,
  setup(__props) {
    const openLink = (url) => {
      (void 0).open(url);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonRoundWhite = _sfc_main$b;
      const _component_Icon = __nuxt_component_1$4;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "space-y-6 sm:space-y-8 w-full sm:w-1/3" }, _attrs))}><h2 class="text-lg text-center sm:text-left font-bold">${ssrInterpolate(_ctx.$t("footer.main"))}</h2><p class="text-sm xl:text-md leading-normal sm:leading-loose">${ssrInterpolate(_ctx.$t("footer.mainContent"))}</p><div class="flex items-center justify-center sm:justify-start gap-x-6 sm:gap-x-2">`);
      _push(ssrRenderComponent(_component_ButtonRoundWhite, {
        class: "w-8 h-8 flex items-center justify-center",
        label: _ctx.$t("footer.toFaceBookLabel"),
        onClick: ($event) => openLink("https://www.facebook.com")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              class: "h-full w-full",
              name: "main-icons:facebook"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                class: "h-full w-full",
                name: "main-icons:facebook"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ButtonRoundWhite, {
        class: "w-8 h-8 flex items-center justify-center",
        label: _ctx.$t("footer.toXLabel"),
        onClick: ($event) => openLink("https://www.x.com")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              class: "h-full w-full",
              name: "main-icons:twitter"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                class: "h-full w-full",
                name: "main-icons:twitter"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ButtonRoundWhite, {
        class: "w-8 h-8 flex items-center justify-center",
        label: _ctx.$t("footer.toInstagramLabel"),
        onClick: ($event) => openLink("https://www.instagram.com")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              class: "h-full w-full",
              name: "main-icons:instagram"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                class: "h-full w-full",
                name: "main-icons:instagram"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ButtonRoundWhite, {
        class: "w-8 h-8 flex items-center justify-center",
        label: _ctx.$t("footer.toYoutubeLabel"),
        onClick: ($event) => openLink("https://www.youtube.com")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              class: "h-full w-full",
              name: "main-icons:youtube"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                class: "h-full w-full",
                name: "main-icons:youtube"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></article>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer/Main.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = _sfc_main$h;
  _push(`<article${ssrRenderAttrs(mergeProps({ class: "w-1/2 sm:w-2/9 space-y-4 sm:space-y-8" }, _attrs))}><div class="space-y-2 sm:space-y-4"><h2 class="text-lg font-bold">${ssrInterpolate(_ctx.$t("footer.service"))}</h2>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    class: "w-8",
    src: "images/header/buttomline.svg"
  }, null, _parent));
  _push(`</div><p class="grid grid-cols-2 gap-y-4 w-9/10 sm:w-4/5 text-xs sm:text-sm xl:text-md"><span class="col-span-1">${ssrInterpolate(_ctx.$t("footer.serviceConent1"))}</span><span class="col-span-1">${ssrInterpolate(_ctx.$t("footer.serviceConent2"))}</span><span class="col-span-1">${ssrInterpolate(_ctx.$t("footer.serviceConent3"))}</span><span class="col-span-1">${ssrInterpolate(_ctx.$t("footer.serviceConent4"))}</span><span class="col-span-1">${ssrInterpolate(_ctx.$t("footer.serviceConent5"))}</span><span class="col-span-1">${ssrInterpolate(_ctx.$t("footer.serviceConent6"))}</span><span class="col-span-1">${ssrInterpolate(_ctx.$t("footer.serviceConent7"))}</span><span class="col-span-1">${ssrInterpolate(_ctx.$t("footer.serviceConent8"))}</span></p></article>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer/Service.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = _sfc_main$h;
  _push(`<article${ssrRenderAttrs(mergeProps({ class: "w-1/2 sm:w-2/9 space-y-4 sm:space-y-8 pl-6 sm:pl-0" }, _attrs))}><div class="space-y-2 sm:space-y-4"><h2 class="text-lg font-bold">${ssrInterpolate(_ctx.$t("footer.aboutUs"))}</h2>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    class: "w-8",
    src: "images/header/buttomline.svg"
  }, null, _parent));
  _push(`</div><p class="grid grid-cols-1 gap-y-4 text-xs sm:text-sm xl:text-md"><span class="col-span-1">${ssrInterpolate(_ctx.$t("footer.aboutContent1"))}</span><span class="col-span-1">${ssrInterpolate(_ctx.$t("footer.aboutContent2"))}</span><span class="col-span-1">${ssrInterpolate(_ctx.$t("footer.aboutContent3"))}</span><span class="col-span-1">${ssrInterpolate(_ctx.$t("footer.aboutContent4"))}</span></p></article>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer/About.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = _sfc_main$h;
  const _component_Icon = __nuxt_component_1$4;
  _push(`<article${ssrRenderAttrs(mergeProps({ class: "w-1/2 sm:w-2/9 space-y-8" }, _attrs))}><div class="space-y-2 sm:space-y-4"><h2 class="text-lg font-bold">${ssrInterpolate(_ctx.$t("footer.contact"))}</h2>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    class: "w-8",
    src: "images/header/buttomline.svg"
  }, null, _parent));
  _push(`</div><p class="flex sm:flex-col gap-y-4 text-xs sm:text-sm xl:text-md w-[80vw] sm:w-auto"><span class="flex space-x-2 w-1/3 sm:w-full">`);
  _push(ssrRenderComponent(_component_Icon, { name: "main-icons:company" }, null, _parent));
  _push(`<span>${ssrInterpolate(_ctx.$t("footer.contactContent1"))}</span></span><span class="flex space-x-2 w-2/3 sm:w-full">`);
  _push(ssrRenderComponent(_component_Icon, { name: "main-icons:contact-mail" }, null, _parent));
  _push(`<span>${ssrInterpolate(_ctx.$t("footer.contactContent2"))}</span></span></p></article>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer/Contact.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_FooterMain = _sfc_main$a;
  const _component_FooterService = __nuxt_component_1$2;
  const _component_FooterAbout = __nuxt_component_2;
  const _component_FooterContact = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap sm:flex-nowrap items-start w-full sm:w-9/10 gap-x-6 xl:gap-x-10 gap-y-6 sm:gap-y-0" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_FooterMain, null, null, _parent));
  _push(ssrRenderComponent(_component_FooterService, null, null, _parent));
  _push(ssrRenderComponent(_component_FooterAbout, null, null, _parent));
  _push(ssrRenderComponent(_component_FooterContact, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer/Content.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = _sfc_main$h;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    class: "absolute right-4 top-5 h-2/3 hidden sm:inline-block",
    src: "images/header/footbyfooter.svg"
  }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtImg, {
    class: "absolute bottom-0 left-0 hidden sm:inline w-full",
    src: "images/header/wavebottom.svg"
  }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtImg, {
    class: "absolute bottom-0 left-0 w-full sm:hidden",
    src: "images/header/wavebottom-mobile.svg"
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer/BackgroundDecoration.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_FooterContent = __nuxt_component_0;
  const _component_FooterBackgroundDecoration = __nuxt_component_1$1;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "rounded-[2.625rem] w-[calc(100vw-1rem)] sm:w-[calc(100vw-5rem)] bg-[#9B3F1A] ml-2 sm:ml-10 relative gap-x-12 px-8 sm:px-20 pb-20 pt-8 text-white min-h-[33vh] mt-12 md:mt-auto mb-12 md:mb-0" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_FooterContent, null, null, _parent));
  _push(ssrRenderComponent(_component_FooterBackgroundDecoration, null, null, _parent));
  _push(`</footer>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
var RouteIconStatus = /* @__PURE__ */ ((RouteIconStatus2) => {
  RouteIconStatus2[RouteIconStatus2["ReservationDetail"] = 1] = "ReservationDetail";
  RouteIconStatus2[RouteIconStatus2["Wallet"] = 2] = "Wallet";
  RouteIconStatus2[RouteIconStatus2["StartReservation"] = 3] = "StartReservation";
  RouteIconStatus2[RouteIconStatus2["MyCollection"] = 4] = "MyCollection";
  RouteIconStatus2[RouteIconStatus2["SubList"] = 5] = "SubList";
  return RouteIconStatus2;
})(RouteIconStatus || {});
const tabSchema = zod.object({
  id: zod.number().or(zod.string()),
  // 未來這裡用 generic 處理
  title: zod.string().min(1, "tab title required")
});
tabSchema.extend({
  notificationCount: zod.number().optional(),
  routerName: zod.string()
});
tabSchema.extend({
  notificationCount: zod.number().optional(),
  routerName: zod.string().optional(),
  routerIcon: zod.nativeEnum(RouteIconStatus),
  isHighLight: zod.boolean().optional(),
  isSubList: zod.boolean().optional()
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    iconStatus: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_0$3;
      _push(`<!--[-->`);
      if (_ctx.iconStatus === unref(RouteIconStatus).ReservationDetail) {
        _push(ssrRenderComponent(_component_UIcon, mergeProps(_ctx.$attrs, {
          class: "text-2xl",
          name: "i-bx:detail"
        }), null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.iconStatus === unref(RouteIconStatus).Wallet) {
        _push(ssrRenderComponent(_component_UIcon, mergeProps(_ctx.$attrs, {
          class: "text-2xl",
          name: "i-mingcute:wallet-5-line"
        }), null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.iconStatus === unref(RouteIconStatus).StartReservation) {
        _push(ssrRenderComponent(_component_UIcon, mergeProps(_ctx.$attrs, {
          class: "text-2xl",
          name: "i-material-symbols:pets"
        }), null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.iconStatus === unref(RouteIconStatus).MyCollection) {
        _push(ssrRenderComponent(_component_UIcon, mergeProps(_ctx.$attrs, {
          class: "text-2xl",
          name: "i-heroicons:heart"
        }), null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.iconStatus === unref(RouteIconStatus).SubList) {
        _push(ssrRenderComponent(_component_UIcon, mergeProps(_ctx.$attrs, {
          class: "text-2xl",
          name: "i-material-symbols:list"
        }), null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MobileBottomMenu/Icon.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "MobileMenu",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    subList: {}
  }, {
    "modelValue": { type: Boolean, ...{ default: false } },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const localePath = useLocalePath();
    const isShow = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = __nuxt_component_0$4;
      const _component_NuxtLink = __nuxt_component_1$3;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        modelValue: isShow.value,
        "onUpdate:modelValue": ($event) => isShow.value = $event
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.subList, (item) => {
              var _a;
              _push2(ssrRenderComponent(_component_NuxtLink, {
                key: item.id,
                label: item.title,
                class: "px-4 py-3",
                to: unref(localePath)({ name: (_a = item.routerName) != null ? _a : "" }),
                onClick: ($event) => isShow.value = false
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.subList, (item) => {
                var _a;
                return openBlock(), createBlock(_component_NuxtLink, {
                  key: item.id,
                  label: item.title,
                  class: "px-4 py-3",
                  to: unref(localePath)({ name: (_a = item.routerName) != null ? _a : "" }),
                  onClick: ($event) => isShow.value = false
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.title), 1)
                  ]),
                  _: 2
                }, 1032, ["label", "to", "onClick"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modal/MobileMenu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MobileBottomMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    const isShowSubListModal = shallowRef(false);
    const proprityList = [
      { id: 1, title: "\u9810\u7D04\u8A73\u60C5", routerName: "member-appointment", notificationCount: 3, routerIcon: RouteIconStatus.ReservationDetail },
      { id: 2, title: "\u6211\u7684\u9322\u5305", routerName: "member-wallet", routerIcon: RouteIconStatus.Wallet },
      { id: 3, title: "\u6211\u8981\u9810\u7D04", routerName: "petSitters", isHighLight: true, routerIcon: RouteIconStatus.StartReservation },
      { id: 4, title: "\u6211\u7684\u6536\u85CF", routerName: "member-collection", routerIcon: RouteIconStatus.MyCollection },
      { id: 5, title: "\u5217\u8868", isSubList: true, routerIcon: RouteIconStatus.SubList }
    ];
    const subList = [
      { id: 6, title: "\u500B\u4EBA\u8CC7\u6599", routerName: "member" },
      // { id: 7, title: '成為褓母', routerName: 'member-bePetSitter' },
      { id: 8, title: "\u8913\u6BCD\u57FA\u672C\u8CC7\u6599", routerName: "member-petSitter" },
      { id: 9, title: "\u670D\u52D9\u8A2D\u5B9A", routerName: "member-petSitter-settings", notificationCount: 99 },
      { id: 10, title: "\u63A5\u55AE\u5217\u8868", routerName: "member-petSitter-orderList" },
      { id: 11, title: "\u9032\u5E33\u7E3D\u89BD", routerName: "member-petSitter-income" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MobileBottomMenuIcon = _sfc_main$3;
      const _component_ModalMobileMenu = _sfc_main$2;
      _push(`<!--[--><nav class="fixed bottom-0 left-0 h-16 w-full bg-[#FFEAE1] border-t border-t-solid border-gray-200 shadow-xl md:hidden"><div class="h-full flex items-center justify-around"><!--[-->`);
      ssrRenderList(proprityList, (item) => {
        var _a, _b;
        _push(`<div class="${ssrRenderClass({
          "border-t-solid border-t-2 border-t-orange-600": unref(localePath)((_a = item.routerName) != null ? _a : "") === _ctx.$route.path && !item.isSubList && !item.isHighLight
        })}"><button class="${ssrRenderClass([{
          "bg-gradient-to-br from-yellow-400 to-orange-600 rounded-xl": item.isHighLight,
          "border-solid border-2 border-orange-600": item.isHighLight && unref(localePath)((_b = item.routerName) != null ? _b : "") === _ctx.$route.path
        }, "cursor-pointer px-4 py-3"])}">`);
        _push(ssrRenderComponent(_component_MobileBottomMenuIcon, {
          "icon-status": item.routerIcon
        }, null, _parent));
        _push(`</button></div>`);
      });
      _push(`<!--]--></div></nav>`);
      _push(ssrRenderComponent(_component_ModalMobileMenu, {
        modelValue: unref(isShowSubListModal),
        "onUpdate:modelValue": ($event) => isRef(isShowSubListModal) ? isShowSubListModal.value = $event : null,
        "sub-list": subList
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MobileBottomMenu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const localePath = useLocalePath();
    const currentBackGroundStyle = computed(() => {
      if (route.path === localePath("signUp-petSitter")) {
        return 2;
      }
      return 1;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0$1;
      const _component_Footer = __nuxt_component_1;
      const _component_MobileBottomMenu = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [{
          "bg-[#FEEAE1]": unref(currentBackGroundStyle) === 2,
          "bg-[#FFF6F3]": unref(currentBackGroundStyle) === 1
          /* Default */
        }, "pb-10 w-full"]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<main class="mt-[3.25rem] md:mt-[4.625rem] min-h-[calc(100vh_-_3.25rem)] md:min-h-[calc(100vh_-_4.625rem)]">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(ssrRenderComponent(_component_MobileBottomMenu, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-mDVoaqIF.mjs.map

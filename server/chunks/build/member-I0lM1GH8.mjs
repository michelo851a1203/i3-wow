import { _ as _sfc_main$4 } from './Pale-B861WQUB.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, computed } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { u as useImage } from './composables-VAV01sHq.mjs';
import { u as useAuthStore } from './useAuthStore-6LI8GoiG.mjs';
import { storeToRefs } from 'pinia';
import { _ as __nuxt_component_1$1 } from './nuxt-link-BMiRqRVI.mjs';
import { a as useLocalePath, g as useRoute, h as __nuxt_component_1 } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'ipx';
import 'zod';
import './signUp.type-C4a4H3kg.mjs';
import './useCustomError-C6r27JZ9.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'tailwind-merge';
import '@iconify/vue';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Account",
  __ssrInlineRender: true,
  setup(__props) {
    const img = useImage();
    const memberPhoto = img("images/nannylist/nanny.svg");
    const authStore = useAuthStore();
    const { fakeToken } = storeToRefs(authStore);
    const handleAccountSetting = () => {
      console.log("settings");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonPale = _sfc_main$4;
      if (unref(fakeToken) !== null) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-b border-gray-200 flex items-center justify-center gap-x-4 px-3 py-2" }, _attrs))}><div class="aspect-square w-1/3 rounded-full bg-cover bg-center bg-no-repeat" style="${ssrRenderStyle(`background-image: url('${unref(memberPhoto)}')`)}"></div><div class="w-2/3 flex flex-col items-start gap-y-1"><span>${ssrInterpolate(unref(fakeToken).userName)}</span>`);
        _push(ssrRenderComponent(_component_ButtonPale, {
          class: "text-gray-400 underline",
          label: "\u5E33\u865F\u8A2D\u5B9A\u6309\u9215",
          onClick: handleAccountSetting
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u5E33\u865F\u8A2D\u5B9A `);
            } else {
              return [
                createTextVNode(" \u5E33\u865F\u8A2D\u5B9A ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Member/LeftNavList/Account.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SettingList",
  __ssrInlineRender: true,
  props: {
    title: {},
    selectionList: {},
    currentActiveTab: {}
  },
  setup(__props) {
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="px-4 py-6 text-gray-300">${ssrInterpolate(_ctx.title)}</div><ul><!--[-->`);
      ssrRenderList(_ctx.selectionList, (item) => {
        _push(`<li class="${ssrRenderClass([{
          "bg-[#FFFAF8] text-orange-600 border-l-[2px] border-l-solid border-l-orange-600": _ctx.currentActiveTab === item.id
        }, "py-3 pl-4 pr-1"])}">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)({ name: item.routerName })
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-between pr-4"${_scopeId}><span${_scopeId}>${ssrInterpolate(item.title)}</span>`);
              if (item.notificationCount) {
                _push2(`<div class="h-[1.2rem] w-auto flex items-center justify-center rounded-full bg-red-400 px-[0.4rem] text-[0.6rem] text-white"${_scopeId}>${ssrInterpolate(item.notificationCount)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between pr-4" }, [
                  createVNode("span", null, toDisplayString(item.title), 1),
                  item.notificationCount ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "h-[1.2rem] w-auto flex items-center justify-center rounded-full bg-red-400 px-[0.4rem] text-[0.6rem] text-white"
                  }, toDisplayString(item.notificationCount), 1)) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Member/LeftNavList/SettingList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LeftNavList",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const localePath = useLocalePath();
    const memberSettingList = [
      { id: 1, title: "\u500B\u4EBA\u8CC7\u6599", routerName: "member" },
      { id: 2, title: "\u9810\u7D04\u8A73\u60C5", routerName: "member-appointment", notificationCount: 3 },
      { id: 3, title: "\u6211\u7684\u9322\u5305", routerName: "member-wallet" },
      { id: 4, title: "\u6211\u7684\u6536\u85CF", routerName: "member-collection" }
      // { id: 5, title: '成為褓母', routerName: 'member-bePetSitter' },
    ];
    const petSitterSettingList = [
      { id: 6, title: "\u8913\u6BCD\u57FA\u672C\u8CC7\u6599", routerName: "member-petSitter" },
      { id: 7, title: "\u670D\u52D9\u8A2D\u5B9A", routerName: "member-petSitter-settings", notificationCount: 99 },
      { id: 8, title: "\u63A5\u55AE\u5217\u8868", routerName: "member-petSitter-orderList" },
      { id: 9, title: "\u9032\u5E33\u7E3D\u89BD", routerName: "member-petSitter-income" }
    ];
    const totalMemberSettingList = computed(() => [...memberSettingList, ...petSitterSettingList]);
    const currentTab = computed(() => {
      const tabList = totalMemberSettingList.value;
      const path = route.path;
      const currentActiveItem = tabList.find((item) => localePath(item.routerName) === path);
      if (!currentActiveItem)
        return -1;
      const id = currentActiveItem.id;
      if (typeof id !== "number")
        return -1;
      return id;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MemberLeftNavListAccount = _sfc_main$3;
      const _component_MemberLeftNavListSettingList = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full md:w-14rem hidden rounded-xl bg-white md:block" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_MemberLeftNavListAccount, null, null, _parent));
      _push(ssrRenderComponent(_component_MemberLeftNavListSettingList, {
        title: "\u6703\u54E1\u8A2D\u5B9A",
        "selection-list": memberSettingList,
        "current-active-tab": unref(currentTab)
      }, null, _parent));
      _push(ssrRenderComponent(_component_MemberLeftNavListSettingList, {
        title: "\u4FDD\u59C6\u8A2D\u5B9A",
        "selection-list": petSitterSettingList,
        "current-active-tab": unref(currentTab)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Member/LeftNavList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "member",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MemberLeftNavList = _sfc_main$1;
      const _component_NuxtPage = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#FFF6F3] flex flex-wrap md:flex-nowrap items-start gap-x-8 px-8 py-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_MemberLeftNavList, null, null, _parent));
      _push(`<div class="flex-grow">`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/member.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=member-I0lM1GH8.mjs.map

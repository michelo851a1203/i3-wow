import { _ as __nuxt_component_0 } from './ContentHead-CuZnXXmp.mjs';
import { _ as _sfc_main$4 } from './Tabs-Cb0V9DXg.mjs';
import { _ as _sfc_main$5 } from './OrderHot-CscGDj-l.mjs';
import { useSSRContext, defineComponent, shallowRef, computed, withCtx, unref, isRef, createVNode, mergeProps, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as __nuxt_component_0$1 } from './DashLine-D16LjvTB.mjs';
import { _ as _sfc_main$6 } from './EssentialArticle-Bcj45nm2.mjs';
import { u as useImage } from './composables-VAV01sHq.mjs';
import { _ as _sfc_main$7 } from './Pale-B861WQUB.mjs';
import { n as navigateTo, a as useLocalePath } from './server.mjs';
import __nuxt_component_2 from './Pagination-V5D3FNQV.mjs';
import './Icon-B6ODn5Cd.mjs';
import './index-Bq1kpYX2.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './NuxtImg-Ce9a8LGV.mjs';
import './LikeSwitcher-DWkHCC9E.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'ipx';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'tailwind-merge';
import './Button-B_jr3BZp.mjs';
import './Link-DZ2bKZug.mjs';
import './nuxt-link-BMiRqRVI.mjs';
import './link-D5-3RomB.mjs';
import './tooltip-CpVvyQRR.mjs';
import './useButtonGroup-CKD41UhK.mjs';
import './button-Bz5rwL6o.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Title",
  __ssrInlineRender: true,
  props: {
    title: {},
    count: { default: 0 }
  },
  setup(__props) {
    const currentArticleOrder = shallowRef("asc");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonUtilsOrderHot = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-end justify-between" }, _attrs))}><div class="flex items-end"><h2 class="text-3xl">${ssrInterpolate(_ctx.title)}</h2><span>\u5171 ${ssrInterpolate(_ctx.count)} \u7BC7</span></div>`);
      _push(ssrRenderComponent(_component_ButtonUtilsOrderHot, { order: unref(currentArticleOrder) }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/Article/MainList/Title.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "MainList",
  __ssrInlineRender: true,
  props: {
    title: {},
    count: { default: 0 }
  },
  setup(__props) {
    const img = useImage();
    const categroyFakeList = Array.from({ length: 6 }, (_, index) => {
      return {
        id: index + 1,
        title: "\u63ED\u5BF5\u7269\u53CB\u5584\u61F6\u4EBA\u5305\u3011\u4E0D\u5B9A\u671F\u6574\u7406\u3001\u66F4\u65B0\u5168\u53F0\u5BF5\u7269\u53CB\u5584\u98EF\u5E97\u53CA\u6C11\u5BBF\uFF0C\u8B93\u6BDB\u5C0F\u5B69\u4E5F\u80FD\u8DDF\u7238\u5ABD\u4E00\u540C\u5916\u51FA\u65C5\u904A\uFF5E",
        photoUrl: img("/pet_images/sample_dog.jpeg"),
        authorName: "\u5D14\u5F1F\u7684\u5ABD\u5ABD",
        authorPhotoUrl: "images/frontpage/dogcard.jpg",
        postDate: 1729930323308,
        isLike: false
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlogArticleMainListTitle = _sfc_main$3;
      const _component_DashLine = __nuxt_component_0$1;
      const _component_BlogCardEssentialArticle = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_BlogArticleMainListTitle, {
        title: _ctx.title,
        count: _ctx.count
      }, null, _parent));
      _push(ssrRenderComponent(_component_DashLine, null, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(categroyFakeList), (item) => {
        _push(ssrRenderComponent(_component_BlogCardEssentialArticle, mergeProps({
          key: item.id,
          ref_for: true
        }, item), null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/Article/MainList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HotTag",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    const tagList = Array.from({ length: 22 }, (_, index) => {
      return {
        id: index + 1,
        tagName: "\u5BF5\u7269\u5065\u5EB7"
      };
    });
    const toTagPage = (tagName) => {
      navigateTo(localePath(`/blog/tag/${tagName}`));
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DashLine = __nuxt_component_0$1;
      const _component_ButtonPale = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="text-3xl"> \u71B1\u641C\u6A19\u7C64 </h2>`);
      _push(ssrRenderComponent(_component_DashLine, null, null, _parent));
      _push(`<section class="grid grid-cols-3 gap-x-4"><!--[-->`);
      ssrRenderList(unref(tagList), (item) => {
        _push(ssrRenderComponent(_component_ButtonPale, {
          key: item.id,
          label: item.tagName,
          class: "col-span-1 flex items-center justify-center rounded-md bg-white text-orange-600",
          onClick: ($event) => toTagPage(item.tagName)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` # ${ssrInterpolate(item.tagName)}`);
            } else {
              return [
                createTextVNode(" # " + toDisplayString(item.tagName), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></section></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/Article/HotTag.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[type]",
  __ssrInlineRender: true,
  props: {
    type: {}
  },
  setup(__props) {
    const tabList = [
      {
        id: 1,
        title: "\u5BF5\u7269\u5065\u5EB7"
      },
      {
        id: 2,
        title: "\u6587\u7AE0\u5206\u985E2"
      },
      {
        id: 3,
        title: "\u6587\u7AE0\u5206\u985E3"
      },
      {
        id: 4,
        title: "\u6587\u7AE0\u5206\u985E4"
      }
    ];
    const articleCount = shallowRef(1345);
    const currentPage = shallowRef(1);
    const activeTabID = computed({
      get: () => {
        const typeNumber = +__props.type;
        if (Number.isNaN(typeNumber))
          return 1;
        return typeNumber;
      },
      set: (newValue) => {
        navigateTo(`/blog/type/${newValue}`);
      }
    });
    const activeTabTitle = computed(() => {
      const activeTab = tabList.find((item) => item.id === activeTabID.value);
      return !activeTab ? "" : activeTab.title;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlogContentHead = __nuxt_component_0;
      const _component_Tabs = _sfc_main$4;
      const _component_BlogArticleMainList = _sfc_main$2;
      const _component_BlogArticleHotTag = _sfc_main$1;
      const _component_UPagination = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_BlogContentHead, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Tabs, {
              modelValue: unref(activeTabID),
              "onUpdate:modelValue": ($event) => isRef(activeTabID) ? activeTabID.value = $event : null,
              "tab-list": tabList
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Tabs, {
                modelValue: unref(activeTabID),
                "onUpdate:modelValue": ($event) => isRef(activeTabID) ? activeTabID.value = $event : null,
                "tab-list": tabList
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-start justify-center gap-x-4">`);
      _push(ssrRenderComponent(_component_BlogArticleMainList, {
        class: "w-2/3",
        title: unref(activeTabTitle),
        count: unref(articleCount)
      }, null, _parent));
      _push(ssrRenderComponent(_component_BlogArticleHotTag, { class: "w-1/3" }, null, _parent));
      _push(`</div><div class="flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_UPagination, {
        modelValue: unref(currentPage),
        "onUpdate:modelValue": ($event) => isRef(currentPage) ? currentPage.value = $event : null,
        max: 5,
        "page-count": 10,
        total: 100
      }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/type/[type].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_type_-BZuuBhZi.mjs.map

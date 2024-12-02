import { _ as _sfc_main$5 } from './Pale-B861WQUB.mjs';
import __nuxt_component_0$1 from './Icon-B6ODn5Cd.mjs';
import { useSSRContext, defineComponent, shallowRef, mergeProps, unref, isRef, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as _sfc_main$3 } from './Card-BWNd6eWa.mjs';
import __nuxt_component_2 from './Pagination-V5D3FNQV.mjs';
import { _ as _sfc_main$4 } from './Photo-C9ai5EsC.mjs';
import { u as useImage } from './composables-VAV01sHq.mjs';
import './index-Bq1kpYX2.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
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
import './NuxtImg-Ce9a8LGV.mjs';
import './LikeSwitcher-DWkHCC9E.mjs';

const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ButtonPale = _sfc_main$5;
  const _component_UIcon = __nuxt_component_0$1;
  _push(ssrRenderComponent(_component_ButtonPale, mergeProps({
    label: "\u6642\u9593\u8FD1\u5230\u9060\u6392\u5E8F\u6309\u9215",
    class: "flex items-center justify-center gap-x-4 rounded-xl bg-white"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>\u6642\u9593\u8FD1\u5230\u9060</span>`);
        _push2(ssrRenderComponent(_component_UIcon, { name: "i-heroicons:funnel" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode("span", null, "\u6642\u9593\u8FD1\u5230\u9060"),
          createVNode(_component_UIcon, { name: "i-heroicons:funnel" })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button/Utils/OrderTime.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PhotoCardList",
  __ssrInlineRender: true,
  props: {
    articleList: { default: () => [] }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlogCardPhoto = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-3 gap-4" }, _attrs))}><!--[-->`);
      ssrRenderList(_ctx.articleList, (article) => {
        _push(ssrRenderComponent(_component_BlogCardPhoto, mergeProps({
          key: article.id,
          ref_for: true
        }, article), null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Member/Collection/PhotoCardList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "collection",
  __ssrInlineRender: true,
  setup(__props) {
    const img = useImage();
    const petSitterCurrentPage = shallowRef(0);
    const blogCurrentPage = shallowRef(0);
    const petSitterInfo = {
      count: 1345,
      petSitterList: Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        photo: "images/frontpage/girl.png",
        provider: "\u9673\u5C0F\u7F8E",
        city: "\u53F0\u5317\u5E02",
        price: "$ 550 /hr",
        rating: "\u2B50\uFE0F\u2B50\uFE0F\u2B50\uFE0F\u2B50\uFE0F\u2B50\uFE0F"
      }))
    };
    const blogList = Array.from({ length: 16 }, (_, index) => {
      return {
        id: index + 1,
        title: "\u63ED\u5BF5\u7269\u53CB\u5584\u61F6\u4EBA\u5305\u3011\u4E0D\u5B9A\u671F\u6574\u7406\u3001\u66F4\u65B0\u5168\u53F0\u5BF5\u7269\u53CB\u5584\u98EF\u5E97\u53CA\u6C11\u5BBF\uFF0C\u8B93\u6BDB\u5C0F\u5B69\u4E5F\u80FD\u8DDF\u7238\u5ABD\u4E00\u540C\u5916\u51FA\u65C5\u904A\uFF5E",
        photoUrl: img("/pet_images/sample_article_dog.png", { format: "webp" }),
        authorName: "\u5D14\u5F1F\u7684\u5ABD\u5ABD",
        authorPhotoUrl: "images/frontpage/dogcard.jpg",
        postDate: 1729930323308,
        isLike: false
      };
    });
    const blogInfo = {
      count: 45,
      blogList
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonUtilsOrderTime = __nuxt_component_0;
      const _component_HomeRecommendCard = _sfc_main$3;
      const _component_UPagination = __nuxt_component_2;
      const _component_MemberCollectionPhotoCardList = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col w-full items-center gap-y-4" }, _attrs))}><div class="rounded-xl bg-white"><div class="flex items-center justify-between px-4 py-3 border-b border-solid border-gray-300"><div>\u6536\u85CF\u8913\u6BCD</div>`);
      _push(ssrRenderComponent(_component_ButtonUtilsOrderTime, null, null, _parent));
      _push(`</div><div><div>\u641C\u5C0B\u7D50\u679C\u5171${ssrInterpolate(petSitterInfo.count.toLocaleString())}\u4F4D</div><div class="grid grid-cols-5 gap-4"><!--[-->`);
      ssrRenderList(petSitterInfo.petSitterList, (item) => {
        _push(ssrRenderComponent(_component_HomeRecommendCard, mergeProps({
          key: item.id,
          ref_for: true
        }, item, { class: "col-span-1" }), null, _parent));
      });
      _push(`<!--]--></div></div><div class="flex items-center justify-end">`);
      _push(ssrRenderComponent(_component_UPagination, {
        modelValue: unref(petSitterCurrentPage),
        "onUpdate:modelValue": ($event) => isRef(petSitterCurrentPage) ? petSitterCurrentPage.value = $event : null,
        max: 5,
        "page-count": 10,
        total: 100
      }, null, _parent));
      _push(`</div></div><div class="rounded-xl bg-white"><div class="flex items-center justify-between px-4 py-3 border-b border-solid border-gray-300"><div>\u6536\u85CF\u6587\u7AE0</div>`);
      _push(ssrRenderComponent(_component_ButtonUtilsOrderTime, null, null, _parent));
      _push(`</div><div><div>\u641C\u5C0B\u7D50\u679C\u5171${ssrInterpolate(blogInfo.count.toLocaleString())}\u7BC7</div></div>`);
      _push(ssrRenderComponent(_component_MemberCollectionPhotoCardList, blogInfo.blogList, null, _parent));
      _push(`<div class="flex items-center justify-end">`);
      _push(ssrRenderComponent(_component_UPagination, {
        modelValue: unref(blogCurrentPage),
        "onUpdate:modelValue": ($event) => isRef(blogCurrentPage) ? blogCurrentPage.value = $event : null,
        max: 5,
        "page-count": 6,
        total: 100
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/member/collection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=collection-DuWxB4DF.mjs.map

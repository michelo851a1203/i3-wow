import { _ as __nuxt_component_0 } from './ContentHead-CuZnXXmp.mjs';
import { _ as _sfc_main$1 } from './OrderHot-CscGDj-l.mjs';
import { _ as _sfc_main$2 } from './Photo-C9ai5EsC.mjs';
import __nuxt_component_2 from './Pagination-V5D3FNQV.mjs';
import { _ as _sfc_main$3 } from './Category-Colgff6u.mjs';
import { defineComponent, shallowRef, withCtx, unref, createVNode, toDisplayString, mergeProps, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useImage } from './composables-VAV01sHq.mjs';
import './server.mjs';
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
import '@iconify/vue';
import './Pale-B861WQUB.mjs';
import './Icon-B6ODn5Cd.mjs';
import './index-Bq1kpYX2.mjs';
import '@iconify/utils/lib/css/icon';
import './NuxtImg-Ce9a8LGV.mjs';
import './LikeSwitcher-DWkHCC9E.mjs';
import './Button-B_jr3BZp.mjs';
import './Link-DZ2bKZug.mjs';
import './nuxt-link-BMiRqRVI.mjs';
import './link-D5-3RomB.mjs';
import './tooltip-CpVvyQRR.mjs';
import './useButtonGroup-CKD41UhK.mjs';
import './button-Bz5rwL6o.mjs';

const sampleDogImage = "images/blog/dog_category.jpeg";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[name]",
  __ssrInlineRender: true,
  props: {
    name: {}
  },
  setup(__props) {
    const img = useImage();
    const articleCount = shallowRef(1345);
    const currentPage = shallowRef(1);
    const fakeList = Array.from({ length: 16 }, (_, index) => {
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
    const categoryFakeList = [
      {
        id: 1,
        imageUrl: img(sampleDogImage, { format: "webp" }),
        title: "\u5BF5\u7269\u5065\u5EB7",
        articleCount: 3657
      },
      {
        id: 2,
        imageUrl: img(sampleDogImage, { format: "webp" }),
        title: "\u9054\u4EBA\u904A\u8A18",
        articleCount: 3657
      },
      {
        id: 3,
        imageUrl: img(sampleDogImage, { format: "webp" }),
        title: "\u9054\u4EBA\u904A\u8A18",
        articleCount: 3657
      },
      {
        id: 4,
        imageUrl: img(sampleDogImage, { format: "webp" }),
        title: "\u9054\u4EBA\u904A\u8A18",
        articleCount: 3657
      },
      {
        id: 5,
        imageUrl: img(sampleDogImage, { format: "webp" }),
        title: "\u9054\u4EBA\u904A\u8A18",
        articleCount: 3657
      }
    ];
    const currentArticleOrder = shallowRef("asc");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlogContentHead = __nuxt_component_0;
      const _component_ButtonUtilsOrderHot = _sfc_main$1;
      const _component_BlogCardPhoto = _sfc_main$2;
      const _component_UPagination = __nuxt_component_2;
      const _component_BlogCardCategory = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_BlogContentHead, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><h2 class="text-2xl"${_scopeId}>${ssrInterpolate(_ctx.name)}</h2><span${_scopeId}>\u5171${ssrInterpolate(unref(articleCount).toLocaleString())} \u7BC7</span></div>`);
            _push2(ssrRenderComponent(_component_ButtonUtilsOrderHot, { order: unref(currentArticleOrder) }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", null, [
                createVNode("h2", { class: "text-2xl" }, toDisplayString(_ctx.name), 1),
                createVNode("span", null, "\u5171" + toDisplayString(unref(articleCount).toLocaleString()) + " \u7BC7", 1)
              ]),
              createVNode(_component_ButtonUtilsOrderHot, { order: unref(currentArticleOrder) }, null, 8, ["order"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(unref(fakeList), (article) => {
        _push(ssrRenderComponent(_component_BlogCardPhoto, mergeProps({
          key: article.id,
          ref_for: true
        }, article), null, _parent));
      });
      _push(`<!--]--></div><div class="flex items-center justify-end">`);
      _push(ssrRenderComponent(_component_UPagination, {
        modelValue: unref(currentPage),
        "onUpdate:modelValue": ($event) => isRef(currentPage) ? currentPage.value = $event : null,
        max: 5,
        "page-count": 16,
        total: 100
      }, null, _parent));
      _push(`</div><div class="mx-auto w-full text-xl text-center"> \u63A2\u7D22\u5BF5\u7269\u5404\u985E\u6587\u7AE0 </div><div class="flex items-center justify-center gap-x-4"><!--[-->`);
      ssrRenderList(categoryFakeList, (category) => {
        _push(ssrRenderComponent(_component_BlogCardCategory, mergeProps({
          key: category.id,
          ref_for: true
        }, category), null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/tag/[name].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_name_-DgQkvfvG.mjs.map

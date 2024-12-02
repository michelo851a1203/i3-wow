import { _ as _sfc_main$5 } from './NuxtImg-Ce9a8LGV.mjs';
import { _ as _sfc_main$6 } from './Primary-DO2BBNU0.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, shallowRef, isRef } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useDateFormat } from './server.mjs';
import { _ as _sfc_main$7 } from './Photo-C9ai5EsC.mjs';
import { _ as _sfc_main$8 } from './WaveBackground-C7ZH5xxO.mjs';
import { _ as _sfc_main$9 } from './Category-Colgff6u.mjs';
import { _ as _sfc_main$a } from './EssentialArticle-Bcj45nm2.mjs';
import __nuxt_component_0 from './Icon-B6ODn5Cd.mjs';
import { _ as _sfc_main$b } from './Hot-BuHhMNiQ.mjs';
import __nuxt_component_2 from './Pagination-V5D3FNQV.mjs';
import { u as useImage } from './composables-VAV01sHq.mjs';
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
import './LikeSwitcher-DWkHCC9E.mjs';
import './Pale-B861WQUB.mjs';
import './index-Bq1kpYX2.mjs';
import '@iconify/utils/lib/css/icon';
import './Button-B_jr3BZp.mjs';
import './Link-DZ2bKZug.mjs';
import './nuxt-link-BMiRqRVI.mjs';
import './link-D5-3RomB.mjs';
import './tooltip-CpVvyQRR.mjs';
import './useButtonGroup-CKD41UhK.mjs';
import './button-Bz5rwL6o.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "LatestArticle",
  __ssrInlineRender: true,
  props: {
    title: {},
    photoUrl: {},
    authorName: {},
    authorPhotoUrl: {},
    postDate: {}
  },
  setup(__props) {
    const convertToBackgroundImage = (url) => {
      return `background-image: url('${url}')`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonPrimary = _sfc_main$6;
      const _component_NuxtImg = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between" }, _attrs))}><div><h2 class="text-base"> \u672C\u9031\u6700\u65B0\u7684\u5BF5\u7269\u6587\u7AE0 </h2><p class="text-sm"> \u5728\u9019\u5206\u4EAB\u6700\u5C08\u696D\u7684\u5BF5\u7269\u91AB\u7642\u77E5\u8B58\u3001\u98FC\u4E3B\u98FC\u990A\u5FC3\u5F97\uFF0C\u4EE5\u53CA\u6700\u71B1\u9580\u7684\u5BF5\u7269\u8A71\u984C\uFF01 </p>`);
      _push(ssrRenderComponent(_component_ButtonPrimary, {
        label: "\u524D\u5F80\u5BF5\u7269\u6587\u7AE0\u6309\u9215",
        class: "w-full text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u5BF5\u7269\u6587\u7AE0 &gt; `);
          } else {
            return [
              createTextVNode(" \u5BF5\u7269\u6587\u7AE0 > ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="bg-cover bg-center bg-no-repeat h-full w-full flex items-end justify-start rounded-xl" style="${ssrRenderStyle(convertToBackgroundImage(_ctx.photoUrl))}"><div class="space-x-2">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: _ctx.authorPhotoUrl,
        format: "webp",
        class: "inline-block"
      }, null, _parent));
      _push(`<span class="text-sm">${ssrInterpolate(_ctx.authorName)}</span><span class="text-sm">${ssrInterpolate(unref(useDateFormat)(_ctx.postDate, "MMMM DD ,YYYY"))}</span></div><div class="text-xl font-semibold">${ssrInterpolate(_ctx.title)}</div></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/LatestArticle.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PhotoCardList",
  __ssrInlineRender: true,
  props: {
    articleList: { default: () => [] }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlogCardPhoto = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex items-center gap-x-4" }, _attrs))}><!--[-->`);
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/PhotoCardList.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Category",
  __ssrInlineRender: true,
  props: {
    categoryList: { default: () => [] }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WaveBackground = _sfc_main$8;
      const _component_BlogCardCategory = _sfc_main$9;
      _push(ssrRenderComponent(_component_WaveBackground, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-center gap-x-4"${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.categoryList, (category) => {
              _push2(ssrRenderComponent(_component_BlogCardCategory, mergeProps({
                key: category.id,
                ref_for: true
              }, category), null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-center gap-x-4" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.categoryList, (category) => {
                  return openBlock(), createBlock(_component_BlogCardCategory, mergeProps({
                    key: category.id,
                    ref_for: true
                  }, category), null, 16);
                }), 128))
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/Category.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Article",
  __ssrInlineRender: true,
  props: {
    essentialList: {},
    hotList: {}
  },
  setup(__props) {
    const currentPage = shallowRef(1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlogCardEssentialArticle = _sfc_main$a;
      const _component_ButtonPrimary = _sfc_main$6;
      const _component_UIcon = __nuxt_component_0;
      const _component_BlogArticleHot = _sfc_main$b;
      const _component_UPagination = __nuxt_component_2;
      _push(`<!--[--><section class="flex items-center justify-start"><div class="w-1/3"><h2>\u6BDB\u5B69\u7CBE\u9078\u6587\u7AE0</h2><div class="w-full border-b border-dashed border-[#FEBEA3]"></div><!--[-->`);
      ssrRenderList(_ctx.essentialList, (essential) => {
        _push(ssrRenderComponent(_component_BlogCardEssentialArticle, mergeProps({
          key: essential.id,
          ref_for: true
        }, essential), null, _parent));
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_ButtonPrimary, {
        label: "\u524D\u5F80\u66F4\u591A\u7CBE\u9078\u6587\u7AE0\u6309\u9215",
        class: "w-full flex items-center justify-center gap-x-2 text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u7CBE\u9078\u6587\u7AE0</span>`);
            _push2(ssrRenderComponent(_component_UIcon, { name: "i-heroicons:chevron-right-16-solid" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", null, "\u7CBE\u9078\u6587\u7AE0"),
              createVNode(_component_UIcon, { name: "i-heroicons:chevron-right-16-solid" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_BlogArticleHot, {
        class: "w-2/3",
        "hot-list": _ctx.hotList
      }, null, _parent));
      _push(`</section><div class="flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_UPagination, {
        modelValue: unref(currentPage),
        "onUpdate:modelValue": ($event) => isRef(currentPage) ? currentPage.value = $event : null,
        max: 5,
        "page-count": 6,
        total: 100
      }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/Article.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const sampleDogImage = "images/blog/dog_category.jpeg";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const img = useImage();
    const fakeLatestArticleData = {
      title: "\u63ED\u5BF5\u7269\u53CB\u5584\u61F6\u4EBA\u5305\u3011\u4E0D\u5B9A\u671F\u6574\u7406\u3001\u66F4\u65B0\u5168\u53F0\u5BF5\u7269\u53CB\u5584\u98EF\u5E97\u53CA\u6C11\u5BBF\uFF0C\u8B93\u6BDB\u5C0F\u5B69\u4E5F\u80FD\u8DDF\u7238\u5ABD\u4E00\u540C\u5916\u51FA\u65C5\u904A\uFF5E",
      photoUrl: img("/pet_images/sample_dog.jpeg"),
      authorName: "\u5D14\u5F1F\u7684\u5ABD\u5ABD",
      authorPhotoUrl: "images/frontpage/dogcard.jpg",
      postDate: 1729930323308
    };
    const fakeList = Array.from({ length: 4 }, (_, index) => {
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
    const essentialArticle = Array.from({ length: 6 }, (_, index) => {
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
    const hotArticle = Array.from({ length: 6 }, (_, index) => {
      return {
        id: index + 1,
        title: "\u63ED\u5BF5\u7269\u53CB\u5584\u61F6\u4EBA\u5305\u3011\u4E0D\u5B9A\u671F\u6574\u7406\u3001\u66F4\u65B0\u5168\u53F0\u5BF5\u7269\u53CB\u5584\u98EF\u5E97\u53CA\u6C11\u5BBF\uFF0C\u8B93\u6BDB\u5C0F\u5B69\u4E5F\u80FD\u8DDF\u7238\u5ABD\u4E00\u540C\u5916\u51FA\u65C5\u904A\uFF5E",
        photoUrl: img("/pet_images/sample_dog.jpeg"),
        postDate: 1729930323308,
        categories: "\u5BF5\u7269\u5065\u5EB7"
      };
    });
    const articleSection = {
      essentialList: essentialArticle,
      hotList: hotArticle
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$5;
      const _component_BlogLatestArticle = _sfc_main$4;
      const _component_BlogPhotoCardList = _sfc_main$3;
      const _component_BlogCategory = _sfc_main$2;
      const _component_BlogArticle = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[calc(100vh_-_3.25rem)] md:h-[calc(100vh_-_4.625rem)] relative mb-8 w-full flex items-center justify-between" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "left-0 top-0 h-[85%]",
        src: "pet_images/login/pet-left.png"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "right-0 top-0 h-[85%]",
        src: "pet_images/login/pet-right.png"
      }, null, _parent));
      _push(`<div class="absolute">`);
      _push(ssrRenderComponent(_component_BlogLatestArticle, fakeLatestArticleData, null, _parent));
      _push(ssrRenderComponent(_component_BlogPhotoCardList, unref(fakeList), null, _parent));
      _push(ssrRenderComponent(_component_BlogCategory, categoryFakeList, null, _parent));
      _push(ssrRenderComponent(_component_BlogArticle, articleSection, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CBjKWUFK.mjs.map

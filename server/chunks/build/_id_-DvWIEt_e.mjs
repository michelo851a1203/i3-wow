import { _ as __nuxt_component_0 } from './DashLine-D16LjvTB.mjs';
import { _ as _sfc_main$8 } from './NuxtImg-Ce9a8LGV.mjs';
import { _ as _sfc_main$9 } from './LikeSwitcher-DWkHCC9E.mjs';
import __nuxt_component_0$1 from './Icon-B6ODn5Cd.mjs';
import { useSSRContext, defineComponent, shallowRef, unref, mergeProps, withCtx, createTextVNode, toDisplayString, isRef } from 'vue';
import { ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttrs, ssrRenderStyle } from 'vue/server-renderer';
import { u as useDateFormat } from './server.mjs';
import { _ as _sfc_main$a } from './Pale-B861WQUB.mjs';
import { _ as _sfc_main$b } from './CommunityShare-CmFxLHYh.mjs';
import { _ as _sfc_main$c } from './Discussion-Bz455CEt.mjs';
import { _ as _sfc_main$d } from './TextArea-BzPNiDUE.mjs';
import { _ as _sfc_main$e } from './Primary-DO2BBNU0.mjs';
import { _ as _sfc_main$6 } from './Hot-BuHhMNiQ.mjs';
import { _ as _sfc_main$7 } from './Photo-C9ai5EsC.mjs';
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
import './LineRoundIcon-CHKgnO9C.mjs';
import './Outline-DOrBdQBb.mjs';

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "AuthorBar",
  __ssrInlineRender: true,
  props: {
    authorName: {},
    authorImage: {},
    postDate: {},
    isLike: { type: Boolean },
    likeNumber: {},
    discussNumber: {},
    focusNumber: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$8;
      const _component_ButtonUtilsLikeSwitcher = _sfc_main$9;
      const _component_UIcon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between" }, _attrs))}><div class="flex items-center gap-x-4">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: _ctx.authorImage,
        format: "webp"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(_ctx.authorName)}</span><span>${ssrInterpolate(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))(_ctx.postDate, "MMMM DD ,YYYY"))}</span></div><div class="flex items-center gap-x-4"><div><span>${ssrInterpolate(_ctx.likeNumber)}</span>`);
      _push(ssrRenderComponent(_component_ButtonUtilsLikeSwitcher, { "is-like": _ctx.isLike }, null, _parent));
      _push(`</div><div><span>${ssrInterpolate(_ctx.discussNumber)}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        class: "text-orange-600",
        name: "i-heroicons:chat-bubble-left-ellipsis"
      }, null, _parent));
      _push(`</div><div><span>${ssrInterpolate(_ctx.focusNumber)}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        class: "text-orange-600",
        name: "i-heroicons:eye"
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/Article/AuthorBar.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SmallTag",
  __ssrInlineRender: true,
  props: {
    title: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonPale = _sfc_main$a;
      _push(ssrRenderComponent(_component_ButtonPale, mergeProps({
        bg: "#FFF6F3",
        class: "flex items-center justify-center rounded-md text-orange-600",
        label: `${_ctx.title}\u6A19\u7C64\u6309\u9215`
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` # ${ssrInterpolate(_ctx.title)}`);
          } else {
            return [
              createTextVNode(" # " + toDisplayString(_ctx.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/Article/SmallTag.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AuthorConnectBar",
  __ssrInlineRender: true,
  props: {
    authorName: {},
    authorImage: {},
    description: {},
    lineLink: { default: "" },
    youtubeLink: { default: "" },
    facebookLink: { default: "" },
    link: { default: "" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonUtilsCommunityShare = _sfc_main$b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-start justify-center gap-x-4" }, _attrs))}><div class="h-32 w-32 rounded-full bg-cover bg-center bg-no-repeat" style="${ssrRenderStyle(`background-image: url('${_ctx.authorImage}')`)}"></div><div class="flex-grow"><div class="text-xl">${ssrInterpolate(_ctx.authorName)}</div><p>${ssrInterpolate(_ctx.description)}</p>`);
      _push(ssrRenderComponent(_component_ButtonUtilsCommunityShare, {
        name: _ctx.authorName,
        "line-link": _ctx.lineLink,
        "youtube-link": _ctx.youtubeLink,
        "facebook-link": _ctx.facebookLink,
        link: _ctx.link
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/Article/AuthorConnectBar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Comment",
  __ssrInlineRender: true,
  props: {
    count: {},
    discussionList: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Discussion = _sfc_main$c;
      _push(`<div${ssrRenderAttrs(mergeProps({ "bg-white": "" }, _attrs))}><div> \u7559\u8A00\u8A0E\u8AD6 <span text-orange-600>\u5171${ssrInterpolate(_ctx.count)}\u5247</span></div>`);
      _push(ssrRenderComponent(_component_Discussion, { "discussion-list": _ctx.discussionList }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/Article/Comment.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LeaveComment",
  __ssrInlineRender: true,
  setup(__props) {
    const comment = shallowRef("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputTextArea = _sfc_main$d;
      const _component_ButtonPrimary = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full rounded-xl bg-white" }, _attrs))}><h3 class="text-2xl"> \u7559\u4E0B\u4F60\u7684\u7559\u8A00 </h3><div class="flex items-center justify-center gap-x-4">`);
      _push(ssrRenderComponent(_component_InputTextArea, {
        modelValue: unref(comment),
        "onUpdate:modelValue": ($event) => isRef(comment) ? comment.value = $event : null,
        placeholder: "\u5C0D\u6587\u7AE0\u6709\u4EC0\u9EBC\u770B\u6CD5\u5462\uFF1F\u6B61\u8FCE\u7559\u8A00",
        label: "\u8ACB\u60A8\u7C21\u55AE\u63CF\u8FF0\u60A8\u7684\u8913\u6BCD\u7D93\u9A57",
        required: "",
        class: "w-full",
        disabled: false,
        "show-limit": 200
      }, null, _parent));
      _push(ssrRenderComponent(_component_ButtonPrimary, { label: "\u7559\u8A00\u9001\u51FA\u6309\u9215" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u9001\u51FA `);
          } else {
            return [
              createTextVNode(" \u9001\u51FA ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/Article/LeaveComment.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const img = useImage();
    const title = shallowRef("\u3010\u5BF5\u7269\u53CB\u5584\u61F6\u4EBA\u5305\u3011\u4E0D\u5B9A\u671F\u6574\u7406\u3001\u66F4\u65B0\u5168\u53F0\u5BF5\u7269\u53CB\u5584\u98EF\u5E97\u53CA\u6C11\u5BBF\uFF0C\u8B93\u6BDB\u5C0F\u5B69\u4E5F\u80FD\u8DDF\u7238\u5ABD\u4E00\u540C\u5916\u51FA\u65C5\u904A\uFF5E");
    const authorBarFakeData = {
      authorName: "\u5D14\u5F1F\u7684\u5ABD\u5ABD",
      authorImage: "images/frontpage/dogcard.jpg",
      postDate: 1729930323308,
      isLike: false,
      likeNumber: 123,
      discussNumber: 123,
      focusNumber: 123
    };
    const currentTagList = Array.from({ length: 8 }, (_, index) => {
      return `\u5BF5\u7269\u5065\u5EB7${index + 1}`;
    });
    const authorConnectFakeData = {
      authorName: "\u5D14\u5F1F\u7684\u5ABD\u5ABD",
      authorImage: "images/frontpage/dogcard.jpg",
      description: "\u6B61\u8FCE\u5149\u81E8Yu Ching\u5728\u7684\u5C0F\u5929\u5730\uFF0C\u53EF\u4EE5\u900F\u904E\u6211\u7684E-mail\u8207\u6211\u4EA4\u6D41\u6216\u9080\u7D04\u5594conni29@gmail.com",
      lineLink: "www.google.com",
      youtubeLink: "www.google.com",
      facebookLink: "www.google.com",
      link: "www.google.com"
    };
    const discussion = {
      count: 123,
      discussionList: [
        {
          id: 1,
          name: "\u9EC3\u66C9\u739F",
          avatar: "images/frontpage/dogcard.jpg",
          message: "\u5C0D\u5F85\u6211\u7684\u72D7\u72D7\u975E\u5E38\u6709\u8010\u5FC3\u548C\u611B\u5FC3\uFF0C\u7E3D\u662F\u6309\u6642\u6E96\u6642\u4F86\u5E6B\u5FD9\u7167\u9867\uFF0C\u8B93\u6211\u53EF\u4EE5\u5B89\u5FC3\u5DE5\u4F5C\u3002\u611F\u8B1D\u5979\u7684\u4ED8\u51FA\uFF01",
          time: "1 \u500B\u6708\u524D",
          isPetSitter: false,
          discussionList: [
            {
              id: 1,
              name: "\u516D\u6BDB\u8207\u6211",
              avatar: "images/frontpage/dogcard.jpg",
              message: "\u611F\u8B1D\u60A8\u7684\u4FE1\u4EFB\u548C\u652F\u6301\uFF0C\u6211\u975E\u5E38\u4EAB\u53D7\u7167\u9867\u5404\u7A2E\u53EF\u611B\u7684\u5BF5\u7269\uFF0C\u5E0C\u671B\u53EF\u4EE5\u70BA\u66F4\u591A\u5BB6\u5EAD\u63D0\u4F9B\u5E6B\u52A9\u548C\u670D\u52D9\u3002\u518D\u6B21\u611F\u8B1D\u60A8\u7684\u4FE1\u4EFB",
              time: "1 \u500B\u6708\u524D",
              isPetSitter: true
            }
          ]
        },
        {
          id: 2,
          name: "\u9EC3\u66C9\u739F",
          avatar: "images/frontpage/dogcard.jpg",
          message: "\u5C0D\u5F85\u6211\u7684\u72D7\u72D7\u975E\u5E38\u6709\u8010\u5FC3\u548C\u611B\u5FC3\uFF0C\u7E3D\u662F\u6309\u6642\u6E96\u6642\u4F86\u5E6B\u5FD9\u7167\u9867\uFF0C\u8B93\u6211\u53EF\u4EE5\u5B89\u5FC3\u5DE5\u4F5C\u3002\u611F\u8B1D\u5979\u7684\u4ED8\u51FA\uFF01",
          time: "1 \u500B\u6708\u524D",
          isPetSitter: false
        }
      ]
    };
    const hostList = Array.from({ length: 6 }, (_, index) => {
      return {
        id: index + 1,
        title: "\u63ED\u5BF5\u7269\u53CB\u5584\u61F6\u4EBA\u5305\u3011\u4E0D\u5B9A\u671F\u6574\u7406\u3001\u66F4\u65B0\u5168\u53F0\u5BF5\u7269\u53CB\u5584\u98EF\u5E97\u53CA\u6C11\u5BBF\uFF0C\u8B93\u6BDB\u5C0F\u5B69\u4E5F\u80FD\u8DDF\u7238\u5ABD\u4E00\u540C\u5916\u51FA\u65C5\u904A\uFF5E",
        photoUrl: img("/pet_images/sample_dog.jpeg"),
        postDate: 1729930323308,
        categories: "\u5BF5\u7269\u5065\u5EB7"
      };
    });
    const fakeRecommendList = Array.from({ length: 16 }, (_, index) => {
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DashLine = __nuxt_component_0;
      const _component_BlogArticleAuthorBar = _sfc_main$5;
      const _component_BlogArticleSmallTag = _sfc_main$4;
      const _component_BlogArticleAuthorConnectBar = _sfc_main$3;
      const _component_BlogArticleComment = _sfc_main$2;
      const _component_BlogArticleLeaveComment = _sfc_main$1;
      const _component_BlogArticleHot = _sfc_main$6;
      const _component_BlogCardPhoto = _sfc_main$7;
      _push(`<!--[--><article class="flex items-start justify-center gap-x-6 px-16"><section class="w-2/3"><h2>${ssrInterpolate(unref(title))}</h2>`);
      _push(ssrRenderComponent(_component_DashLine, null, null, _parent));
      _push(ssrRenderComponent(_component_BlogArticleAuthorBar, authorBarFakeData, null, _parent));
      _push(`<section class="rounded-xl bg-white px-3 py-2"><div>markdown preference</div><div class="grid grid-cols-8 gap-x-4"><!--[-->`);
      ssrRenderList(unref(currentTagList), (item) => {
        _push(ssrRenderComponent(_component_BlogArticleSmallTag, {
          key: item,
          title: item
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_DashLine, null, null, _parent));
      _push(ssrRenderComponent(_component_BlogArticleAuthorConnectBar, authorConnectFakeData, null, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(_component_BlogArticleComment, discussion, null, _parent));
      _push(ssrRenderComponent(_component_BlogArticleLeaveComment, null, null, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(_component_BlogArticleHot, {
        class: "w-1/3",
        "hot-list": unref(hostList)
      }, null, _parent));
      _push(`</article><div class="flex items-center justify-center gap-x-4"><h3>\u63A8\u85A6\u6587\u7AE0</h3>`);
      _push(ssrRenderComponent(_component_DashLine, null, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(fakeRecommendList), (article) => {
        _push(ssrRenderComponent(_component_BlogCardPhoto, mergeProps({
          key: article.id,
          ref_for: true
        }, article), null, _parent));
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/article/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-DvWIEt_e.mjs.map

import { _ as _sfc_main$5 } from './NuxtImg-Ce9a8LGV.mjs';
import { _ as _sfc_main$6 } from './Tabs-Cb0V9DXg.mjs';
import { useSSRContext, defineComponent, computed, shallowRef, mergeProps, unref, isRef, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useImage } from './composables-VAV01sHq.mjs';
import { _ as _sfc_main$7 } from './Pale-B861WQUB.mjs';
import __nuxt_component_0 from './Icon-B6ODn5Cd.mjs';
import { _ as __nuxt_component_0$1, a as __nuxt_component_2 } from './Tail-CPaypyWV.mjs';
import { _ as _sfc_main$8 } from './Card-BWNd6eWa.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'ipx';
import './index-Bq1kpYX2.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'tailwind-merge';
import './Primary-DO2BBNU0.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Introduction",
  __ssrInlineRender: true,
  setup(__props) {
    const img = useImage();
    const backGroundImage = computed(() => {
      return `background-image: url('${img("images/serve/headimg.svg")}')`;
    });
    const tabList = [
      {
        id: 1,
        title: "\u5230\u5E9C\u7167\u8B77"
      },
      {
        id: 2,
        title: "\u5BF5\u7269\u8A13\u7DF4"
      },
      {
        id: 3,
        title: "\u5BF5\u7269\u6E9D\u901A"
      },
      {
        id: 4,
        title: "\u5BF5\u7269\u65E5\u8A8C"
      }
    ];
    const introContentList = Object.freeze([
      {
        id: 1,
        title: "\u5230\u5E9C\u7167\u8B77",
        mainContent: "\u8B93\u5C08\u696D\u7684\u5BF5\u7269\u7F8E\u5BB9\u5E2B\u8207\u5C08\u5BB6\uFF0C\u5230\u60A8\u5BB6\u4E2D\u5354\u52A9\u5BF5\u7269\u4FEE\u526A\u3001\u7406\u6BDB\u3001\u76E5\u6D17\u7B49\u512A\u8CEA\u670D\u52D9\uFF0C\u8B93\u6BDB\u5B69\u5011\u5728\u81EA\u5DF1\u7FD2\u6163\u7684\u74B0\u5883\u4E2D\uFF0C\u4EAB\u53D7\u512A\u8CEA\u5C08\u5BB6\u7684\u670D\u52D9\u3002",
        subContent: "\u8A31\u591A\u6BDB\u5B69\u5C0D\u65BC\u807D\u5230\u300C\u6D17\u6FA1\u300D\u9019\u4E00\u540D\u8A5E\u662F\u76F8\u7576\u6050\u61FC\u7684\u4E8B\u60C5(\u7B11)\uFF0C\u5176\u5BE6\u6700\u5927\u7684\u554F\u984C\u4F86\u81EA\u65BC\u74B0\u5883\u6539\u8B8A\u4EE5\u53CA\u4E0D\u5B89\u5168\u611F\uFF0C\u5305\u542B\u6C34\u6EAB\u3001\u76E5\u6D17\u5291\u7B49\uFF0C\u90FD\u662F\u6703\u9020\u6210\u5BF5\u7269\u611F\u5230\u5BB3\u6015\u53CA\u8E81\u52D5\uFF0C\u9032\u800C\u5E36\u4F86\u653B\u64CA\u6027\u884C\u70BA\u4EE5\u53CA\u9003\u907F\u7B49\u72C0\u6CC1\uFF0C\u7531\u65BC\u5BF5\u7269\u7684\u6BDB\u9AEE\u6703\u6709\u6CB9\u8CEA\u4EE3\u8B1D\uFF0C\u82E5\u6C92\u6709\u5B9A\u671F\u7684\u6E05\u7406\uFF0C\u5C31\u5F88\u5BB9\u6613\u7522\u751F\u7570\u5473\u3001\u9AD2\u5473\u7B49\uFF0C\u6211\u5011\u63D0\u4F9B\u7684\u5C08\u696D\u7F8E\u5BB9\u5E2B\uFF0C\u5C07\u651C\u5E36\u5C08\u696D\u7684\u6E05\u6F54\u7528\u5177\u5230\u60A8\u5E9C\u4E0A\uFF0C\u66FF\u6BDB\u5B69\u9032\u884C\u512A\u8CEA\u670D\u52D9\uFF0C\u60A8\u53EF\u4EE5\u653E\u5FC3\u7684\u4EA4\u7D66\u6211\u5011\u5C08\u5BB6\uFF0C\u7121\u9808\u64D4\u5FC3\u5BF5\u7269\u7684\u5B89\u5371\u8207\u5E78\u798F\u3002"
      },
      {
        id: 2,
        title: "\u5BF5\u7269\u8A13\u7DF4",
        mainContent: "\u8B93\u5C08\u696D\u7684\u5BF5\u7269\u8A13\u7DF4\u5E2B\u8207\u5C08\u5BB6\uFF0C\u5230\u60A8\u7D04\u5B9A\u7684\u5730\u9EDE(\u5BB6\u4E2D/\u8A13\u7DF4\u5834\u5730)\u9032\u884C\u8A13\u7DF4\uFF0C\u8B93\u6BDB\u5B69\u5728\u6700\u77ED\u7684\u6642\u9593\u5167\uFF0C\u7531\u5C08\u696D\u7684\u6559\u80B2\u8A13\u7DF4\u5E2B\uFF0C\u63D0\u4F9B\u512A\u8CEA\u7684\u6559\u990A\u670D\u52D9\u8207\u6559\u5B78\u3002",
        subContent: "\u6211\u5011\u5FC3\u611B\u7684\u5BF5\u7269\u5C31\u50CF\u5C0F\u5B69\u4E00\u6A23\uFF0C\u5F9E\u60C5\u61C2\u7121\u77E5\u5230\u7CBE\u660E\u80FD\u5E79\uFF0C\u8A31\u591A\u932F\u8AA4\u7684\u884C\u70BA\uFF0C\u662F\u7D93\u5E74\u7D2F\u6708\u7D2F\u7A4D\u6240\u9020\u6210\uFF0C\u53EF\u80FD\u662F\u4E3B\u4EBA\u7919\u65BC\u6642\u9593\u8207\u6559\u990A\u65B9\u5F0F\u932F\u8AA4\uFF0C\u9020\u6210\u57F9\u990A\u6210\u4E0D\u597D\u7684\u7FD2\u6163\uFF0C\n\n\u7279\u8058\u76F8\u7576\u591A\u512A\u8CEA\u5C08\u696D\u7684\u5BF5\u7269\u6559\u990A\u5E2B\u3001\u5BF5\u7269\u8A13\u7DF4\u5E2B\u7B49\u5C08\u5BB6\uFF0C\u63D0\u4F9B\u4E0D\u540C\u6280\u80FD\u7684\u8A13\u7DF4\u65B9\u5F0F\uFF0C\u4E26\u8B93\u98FC\u4E3B\u5728\u65C1\u908A\u4E00\u540C\u5B78\u7FD2\uFF0C\u5728\u6700\u77ED\u7684\u6642\u9593\u5167\u8A13\u7DF4\u5BF5\u7269\uFF0C\u6210\u70BA\u4E56\u5DE7\u807D\u8A71\u7684\u5925\u4F34\u3002"
      },
      {
        id: 3,
        title: "\u5BF5\u7269\u6E9D\u901A",
        mainContent: "\u8B93\u5C08\u696D\u7684\u5BF5\u7269\u6E9D\u901A\u5E2B\u8207\u5C08\u5BB6\uFF0C\u4EE5\u60A8\u7D04\u5B9A\u7684\u65B9\u5F0F\u9032\u884C\u6E9D\u901A\u9451\u5B9A\uFF0C\u5C08\u5BB6\u5011\u63D0\u4F9B\u6700\u512A\u8CEA\u7684\u5206\u6790\u670D\u52D9\u8207\u6E9D\u901A\u9451\u5B9A\uFF0C\u4E00\u540C\u6316\u6398\u5BF5\u7269\u7684\u5167\u5FC3\u4E16\u754C\u8207\u60A8\u7684\u7DE3\u5206\u95DC\u4FC2\u3002",
        subContent: "\u6BDB\u5B69\u8A95\u751F\u5728\u6211\u5011\u5BB6\u88E1\uFF0C\u6210\u70BA\u6211\u5011\u7684\u5BB6\u4EBA\uFF0C\u5F7C\u6B64\u9593\u4E00\u5B9A\u6709\u8457\u5BC6\u4E0D\u53EF\u5206\u7684\u7DE3\u5206\uFF0C\u8B93\u5C08\u696D\u7684\u5BF5\u7269\u6E9D\u901A\u5E2B\u8207\u9451\u5B9A\u5C08\u5BB6\uFF0C\u5206\u6790\u5BF5\u7269\u8207\u60A8\u7684\u7DE3\u5206\uFF0C\u4EE5\u53CA\u5BF5\u7269\u7684\u67D0\u4E9B\u884C\u70BA\uFF0C\u80CC\u5F8C\u4EE3\u8868\u8457\u4EC0\u9EBC\u610F\u7FA9\uFF1F\n\n\u5728\u5BF5\u7269\u7684\u773C\u88E1\uFF0C\u53C8\u662F\u600E\u9EBC\u6A23\u770B\u5F85\u6211\u5011\u5462\uFF1F\u5BF5\u7269\u96D6\u7136\u4E0D\u6703\u8AAA\u8A71\uFF0C\u4F46\u5167\u5FC3\u4E00\u5B9A\u6709\u8A31\u591A\u5C0F\u5287\u5834\uFF0C\u8D95\u7DCA\u8B93\u5C08\u696D\u7684\u5BF5\u7269\u6E9D\u901A\u5E2B\u8207\u9451\u5B9A\u5C08\u5BB6\uFF0C\u4E00\u540C\u89E3\u6790\u6BDB\u5B69\u7684\u5167\u5FC3\u5427\uFF01"
      },
      {
        id: 4,
        title: "\u5BF5\u7269\u65E5\u8A17",
        mainContent: "\u63D0\u4F9B\u512A\u8CEA\u7684\u5834\u5730\u8207\u56B4\u683C\u8A55\u9078\u7684\u5C08\u5BB6\u8913\u6BCD\u5011\uFF0C\u60A8\u53EF\u4EE5\u653E\u5FC3\u7684\u9078\u64C7\u65E5\u8A17\u5FC3\u611B\u7684\u5BF5\u7269\u65BC\u5C08\u696D\u8913\u6BCD\u7684\u5BB6\u4E2D\u6216\u5834\u5730\uFF0C\u7531\u5C08\u696D\u7684\u5C08\u5BB6\u5011\uFF0C\u63D0\u4F9B\u512A\u8CEA\u7684\u670D\u52D9\u8207\u65E5\u8A17\u7167\u8B77\u3002",
        subContent: "\u7576\u60A8\u9078\u64C7\u6211\u5011\u5BF5\u7269\u8913\u6BCD\u7684\u5404\u9805\u670D\u52D9\u6642\uFF0C\u60A8\u53EF\u4EE5\u653E\u5FC3\u5730\u5C07\u60A8\u5FC3\u611B\u7684\u6BDB\u5B69\u4EA4\u8A17\u7D66\u6211\u5011\uFF0C\u56E0\u70BA\u6211\u5011\u4E0D\u50C5\u63D0\u4F9B\u5C08\u696D\u7684\u7167\u9867\u548C\u95DC\u611B\uFF0C\u66F4\u5C07\u4EE5\u7121\u5FAE\u4E0D\u81F3\u7684\u7D30\u5FC3\uFF0C\u4F86\u5475\u8B77\u60A8\u5011\u5BB6\u7684\u5BF6\u8C9D\u3002\n\n\u6211\u5011\u7684\u5C08\u5BB6\u8207\u8913\u6BCD\u5718\u968A\u5C07\u6703\u8207\u60A8\u7684\u5BF5\u7269\u5EFA\u7ACB\u89AA\u5BC6\u7684\u95DC\u4FC2\uFF0C\u7D66\u4E88\u7260\u5011\u6EAB\u6696\u7684\u966A\u4F34\u548C\u611B\u5FC3\uFF0C\u78BA\u4FDD\u7260\u5011\u5728\u60A8\u4E0D\u5728\u8EAB\u908A\u6642\u4E5F\u80FD\u611F\u53D7\u5230\u5BB6\u7684\u6EAB\u6696\u3002\u6211\u5011\u5C07\u4E0D\u65B7\u95DC\u6CE8\u5BF5\u7269\u7684\u9700\u6C42\u548C\u60C5\u7DD2\u8B8A\u5316\uFF0C\u4E26\u63D0\u4F9B\u9069\u6642\u7684\u7167\u9867\u548C\u5B89\u64AB\uFF0C\u8B93\u60A8\u53EF\u4EE5\u653E\u5FC3\u5730\u5C08\u6CE8\u65BC\u5DE5\u4F5C\u6216\u65C5\u884C\uFF0C\u7121\u9700\u64D4\u5FC3\u5BF5\u7269\u7684\u5B89\u5371\u548C\u5E78\u798F\u3002"
      }
    ]);
    const activeTab = shallowRef(1);
    const activeContent = computed(() => {
      const content = introContentList.find((item) => activeTab.value === item.id);
      if (!content) {
        return {
          id: -1,
          title: "\u67E5\u7121\u5167\u5BB9",
          mainContent: "\u67E5\u7121\u5167\u5BB9",
          subContent: "\u67E5\u7121\u5167\u5BB9"
        };
      }
      return content;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$5;
      const _component_Tabs = _sfc_main$6;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "bg-contain bg-no-repeat w-full flex items-center justify-center gap-x-4 p-8",
        style: unref(backGroundImage)
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "w-7/24 mt-52",
        src: "images/serve/leftimg.svg"
      }, null, _parent));
      _push(`<div class="flex flex-col bg-[#FFF7F4] max-w-[35rem] flex-grow items-center justify-center rounded-xl p-8">`);
      _push(ssrRenderComponent(_component_Tabs, {
        modelValue: unref(activeTab),
        "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
        "tab-list": tabList
      }, null, _parent));
      _push(`<div class="flex flex-col items-center justify-center gap-y-4 pt-16"><h2 class="text-3xl text-orange-600 font-semibold">${ssrInterpolate(unref(activeContent).title)}</h2><p class="text-orange-500 text-center px-15 font-normal">${ssrInterpolate(unref(activeContent).mainContent)}</p><div class="relative my-6 h-[0.2rem] w-[85%] bg-gray-300"><div class="absolute right-0 top-0 h-2 w-2 transform translate-y-[-50%] rounded-full bg-gray-300"></div><div class="absolute left-0 top-0 h-2 w-2 transform translate-y-[-50%] rounded-full bg-gray-300"></div></div><p class="text-amber-950/70 text-center whitespace-pre-line px-12 leading-loose">${ssrInterpolate(unref(activeContent).subContent)}</p></div></div>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "w-7/24 mt-52",
        src: "images/serve/rightimg.svg"
      }, null, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Intro/Introduction.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Content",
  __ssrInlineRender: true,
  props: {
    title: {},
    content: {}
  },
  setup(__props) {
    const isShowContent = shallowRef(false);
    const toggleShowContent = () => {
      isShowContent.value = !isShowContent.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonPale = _sfc_main$7;
      const _component_UIcon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-t border-white flex flex-col items-center justify-between py-6 text-white" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ButtonPale, {
        label: _ctx.title,
        class: ["w-full flex select-none items-center justify-between", { "pb-6": unref(isShowContent) }],
        onClick: toggleShowContent
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.title)}</span>`);
            if (unref(isShowContent)) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-minus",
                class: "h-4 md:h-6 w-4 md:w-6 text-white"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (!unref(isShowContent)) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-plus",
                class: "h-4 md:h-6 w-4 md:w-6 text-white"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("span", null, toDisplayString(_ctx.title), 1),
              unref(isShowContent) ? (openBlock(), createBlock(_component_UIcon, {
                key: 0,
                name: "i-heroicons-minus",
                class: "h-4 md:h-6 w-4 md:w-6 text-white"
              })) : createCommentVNode("", true),
              !unref(isShowContent) ? (openBlock(), createBlock(_component_UIcon, {
                key: 1,
                name: "i-heroicons-plus",
                class: "h-4 md:h-6 w-4 md:w-6 text-white"
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(isShowContent)) {
        _push(`<div class="whitespace-pre-line text-rose-100 text-sm">${ssrInterpolate(_ctx.content)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Intro/QuestionAnswer/Content.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "QuestionAnswer",
  __ssrInlineRender: true,
  setup(__props) {
    const fakeData = [
      {
        id: 1,
        title: "Q1.PetsKeeper\u5BF5\u7269\u8913\u6BCD\u662F\u4EC0\u9EBC\u6A23\u7684\u5E73\u53F0\uFF1F",
        content: "\u2714 \u6211\u5011\u63D0\u4F9B\u5BF5\u7269\u5C08\u696D\u4EBA\u58EB(\u8913\u59C6\u3001\u8A13\u7DF4\u5E2B\u3001\u7F8E\u5BB9\u5E2B\u3001\u6E9D\u901A\u5E2B\u7B49)\u8207\u9867\u5BA2\u7684\u914D\u5C0D\u670D\u52D9\uFF0C\u4F7F\u6BDB\u5B69\u4E3B\u4EBA\u53EF\u4EE5\u8F15\u9B06\u627E\u5230\u96E2\u5BB6\u6700\u8FD1\u3001\u6700\u503C\u5F97\u4FE1\u4EFB\u7684\u4FDD\u59C6\uFF0C\u4E26\u4EE5\u512A\u60E0\u7684\u50F9\u683C\uFF0C\u63D0\u4F9B\u98FC\u4E3B\u5C08\u696D\u7684\u512A\u8CEA\u670D\u52D9\u3002"
      },
      {
        id: 2,
        title: "Q2.\u6211\u7684\u5BF5\u7269\u9069\u5408\u4F7F\u7528PetsKeeper\u5BF5\u7269\u8913\u6BCD\u670D\u52D9\u55CE\uFF1F",
        content: "\u2714 \u82E5\u60A8\u5BB6\u7684\u5BF5\u7269\u5177\u6709\u5F37\u70C8\u653B\u64CA\u6027\u6216\u8005\u6027\u683C\u4E0D\u7A69\u5B9A\u3001\u5BB9\u6613\u7DCA\u5F35\u3001\u5177\u6709\u50B7\u5BB3\u6027\u7B49\u72C0\u6CC1\uFF0C\u4E0D\u5EFA\u8B70\u4F7F\u7528Petskeeper\u5BF5\u7269\u8913\u6BCD\u5E73\u53F0\uFF0C\u9810\u7D04\u670D\u52D9\u524D\uFF0C\u8ACB\u60A8\u512A\u5148\u8A55\u4F30\u3002"
      },
      {
        id: 3,
        title: "Q3.\u600E\u9EBC\u8A3B\u518APetsKeeper\u5BF5\u7269\u8913\u6BCD\u5E73\u53F0\uFF1F",
        content: `(1)\u4E00\u822C\u6703\u54E1\uFF1A\u60A8\u53EF\u5230\u7DB2\u7AD9\u9EDE\u9078\u53F3\u4E0A\u89D2\u300C\u6211\u8981\u8A3B\u518A\u300D\u6839\u64DA\u8A3B\u518A\u6D41\u7A0B\u586B\u5BEB\u8CC7\u6599\u5F8C\uFF0C\u5B8C\u6210\u6703\u54E1\u8A3B\u518A\u3002 (2)\u5BF5\u7269\u8913\u6BCD\uFF1A\u82E5\u60A8\u662F\u5BF5\u8913\u6BCD\u3001\u5C08\u5BB6\u7B49\u8EAB\u5206\uFF0C\u53EF\u9EDE\u9078\u300C\u6211\u8981\u8A3B\u518A\u8913\u6BCD\u300D\uFF0C\u4E26\u4F9D\u8A3B\u518A\u6D41\u7A0B\uFF0C\u5B8C\u6210\u8CC7\u6599\u4E0A\u50B3\u7533\u8ACB\u5F8C\uFF0C\u7B49\u5F85\u5B98\u65B9\u5BE9\u6838\u7533\u8ACB\uFF0C\u5373\u5B8C\u6210\u8A3B\u518A\u3002`
      },
      {
        id: 4,
        title: "Q4.\u5982\u4F55\u958B\u59CB\u4F7F\u7528PetsKeeper\u5BF5\u7269\u8913\u6BCD\u5E73\u53F0\u670D\u52D9\uFF1F",
        content: " \u2714 \u6211\u5011\u5E73\u53F0\u7684\u670D\u52D9\u5167\u5BB9\uFF0C\u5305\u542B\u201D\u5230\u5E9C\u7167\u9867\u201D\u3001\u201D\u5B89\u89AA\u5BC4\u5BBF\u201D\u3001\u201D\u6563\u6B65\u905B\u72D7\u201D\u3001\u201D\u5BF5\u7269\u63A5\u9001\u201D\u3001\u201D\u5230\u5E9C\u7F8E\u5BB9\u201D\u3001\u201D\u5BF5\u7269\u8A13\u7DF4\u201D\u3001\u201D\u5BF5\u7269\u6E9D\u901A\u201D\u3001\u201D\u7378\u91AB\u9867\u554F\u201D\u7B49\u5A92\u5408\u5C08\u696D\u7684\u5BF5\u7269\u670D\u52D9\u3002 \n\n\u4F7F\u7528\u6D41\u7A0B\u5982\u4E0B\uFF1A\n1.\u6253\u958BPetsKeeper\u5BF5\u7269\u8913\u6BCD\u7DB2\u7AD9\n2.\u9078\u64C7\u60A8\u9700\u6C42\u7684\u300C\u670D\u52D9\u7A2E\u985E\u300D\u3001\u300C\u5730\u9EDE\u300D\uFF0C\u4EE5\u53CA\u9700\u6C42\u7684\u300C\u670D\u52D9\u6642\u9593\u300D\u3002\n3.\u914D\u5C0D\u4E26\u627E\u5C0B\u60A8\u6709\u8208\u8DA3\u7684\u5BF5\u7269\u8913\u6BCD\u8207\u5C08\u696D\u4EBA\u58EB\uFF0C\u767C\u51FA\u9080\u8ACB\u9700\u6C42\u3002\n4.\u8F38\u5165\u670D\u52D9\u7D30\u7BC0\u5F8C\u9EDE\u64CA\u300C\u9810\u7D04\u8ACB\u6C42\u300D\u4E26\u9001\u51FA\u300C\u9810\u7D04\u9700\u6C42\u55AE\u300D(\u6B64\u6642\u4E26\u975E\u78BA\u5B9A\u9810\u7D04\uFF0C\u56E0\u6B64\u4E0D\u6703\u6536\u8CBB)\n5.\u7B49\u5F85\u5BF5\u7269\u8913\u6BCD\u78BA\u8A8D\u300C\u9810\u7D04\u9700\u6C42\u55AE\u300D(\u5167\u542B\u6536\u8CBB\u6A19\u6E96\u3001\u65B0\u589E\u689D\u4EF6\u3001\u670D\u52D9\u7D30\u7BC0\u7B49)\n6.\u8207\u8913\u6BCD\u78BA\u8A8D\u670D\u52D9\u7D30\u7BC0\u5F8C\uFF0C\u4E26\u78BA\u8A8D\u9810\u7D04\u9700\u6C42\u55AE\uFF0C\u9032\u5165\u4ED8\u6B3E\u7A0B\u5E8F\uFF0C\u9EDE\u64CA\u300C\u7ACB\u5373\u4ED8\u6B3E\u300D\u5F8C\uFF0C\u96D9\u65B9\u5B8C\u6210\u9810\u7D04\u3002"
      },
      {
        id: 5,
        title: "Q5.PetsKeeper\u5BF5\u7269\u8913\u6BCD\u7684\u9810\u7D04\u670D\u52D9\u4EE5\u53CA\u8CBB\u7528\uFF1F",
        content: "\u2714 \u6211\u5011\u91DD\u5C0D\u5BF5\u7269\u8913\u6BCD\u8207\u5C08\u5BB6\uFF0C\u63D0\u4F9B\u4E0D\u540C\u7684\u670D\u52D9\u578B\u614B\uFF0C\u6709\u63D0\u4F9B\u76F8\u5C0D\u61C9\u7684\u6536\u8CBB\u6A19\u6E96\u8207\u57FA\u672C\u898F\u7BC4\uFF0C\u4EE5\u4E0B\u50C5\u4F9B\u53C3\u8003\uFF0C\u5BE6\u969B\u6536\u8CBB\u4F9D\u5BE6\u969B\u72C0\u6CC1\u800C\u6709\u6240\u4E0D\u540C\u3002 \n\u2022\u5230\u5E9C\u7167\u9867(\u8913\u6BCD)\uFF1A$550/\u6BCF\u6B21\u8D77\uFF0C\u6BCF\u6B21\u534A\u5C0F\u6642\uFF0C\u4FDD\u59C6\u81EA\u884C\u4F9D\u80FD\u529B\u3001\u7D93\u9A57\u8207\u5C08\u696D\u8A2D\u5B9A\u55AE\u50F9\uFF0C\u8D85\u904E\u534A\u5C0F\u6642\u53EF\u52A0\u8CFC\u3002\n\u2022\u5B89\u89AA\u5BC4\u5BBF\uFF1A\u5B89\u89AA/\u5BC4\u5BBF\u5A92\u5408\u8CBB $550/12H \u8D77\uFF0C\u4F9D\u64DA\u5BF5\u7269\u7684\u7A2E\u985E\u8207\u9AD4\u578B\u8ABF\u6574\u3002\n\u2022\u6563\u6B65\u905B\u72D7\uFF1A$250/\u6BCF\u6B21 \u8D77\uFF0C\u6BCF\u6B21\u534A\u5C0F\u6642\uFF0C\u4FDD\u59C6\u81EA\u884C\u4F9D\u80FD\u529B\u3001\u7D93\u9A57\u8207\u5C08\u696D\u8A2D\u5B9A\u55AE\u50F9\uFF0C\u8D85\u904E\u534A\u5C0F\u6642\u53EF\u52A0\u8CFC\u3002\n\u2022\u5BF5\u7269\u63A5\u9001\uFF1A$250/\u6BCF\u6B21\u8D77\uFF0C\u4F9D\u64DA\u5BF5\u7269\u7684\u7A2E\u985E\u8207\u9AD4\u578B\u8ABF\u6574\u3002\n\u2022\u5230\u5E9C\u7F8E\u5BB9\uFF1A$900/\u6BCF\u6B21\u8D77\uFF0C\u4F9D\u64DA\u5BF5\u7269\u7684\u7A2E\u985E\u8207\u9AD4\u578B\u8ABF\u6574\u3002\n\u2022\u5BF5\u7269\u8A13\u7DF4\uFF1A$3600/\u6BCF\u6B21 \u8D77\uFF0C\u5C08\u5BB6\u81EA\u884C\u4F9D\u80FD\u529B\u3001\u7D93\u9A57\u8207\u5C08\u696D\u8A2D\u5B9A\u5831\u50F9\u3002\n\u2022\u5BF5\u7269\u6E9D\u901A\uFF1A$880/\u6BCF\u6B21 \u8D77\uFF0C\u6BCF\u6B21\u4E00\u5C0F\u6642\uFF0C\u5C08\u5BB6\u81EA\u884C\u4F9D\u80FD\u529B\u3001\u7D93\u9A57\u8207\u5C08\u696D\u8A2D\u5B9A\u5831\u50F9\uFF0C\u8D85\u904E\u534A\u5C0F\u6642\u53EF\u52A0\u8CFC\u3002\n\u2022\u7378\u91AB\u9867\u554F\uFF1A$1500/\u6BCF\u6B21 \u8D77\uFF0C\u5C08\u5BB6\u81EA\u884C\u4F9D\u80FD\u529B\u3001\u7D93\u9A57\u8207\u5C08\u696D\u8A2D\u5B9A\u5831\u50F9\u3002\n\u4EE5\u4E0A\u9810\u7D04\u670D\u52D9\u4E4B\u5831\u50F9\uFF0C\u4F9D\u7167\u5C08\u5BB6\u7D93\u9A57\u8207\u80FD\u529B\u800C\u6709\u6240\u5DEE\u7570\uFF0C\u672C\u7AD9\u50C5\u7D66\u4E88\u5EFA\u8B70\u8207\u8F14\u5C0E\uFF0C\u5BE6\u969B\u5831\u50F9\u72C0\u6CC1\uFF0C\u4F9D\u500B\u4EBA\u7D93\u9A57\u8207\u5C08\u696D\u800C\u6709\u6240\u4E0D\u540C\uFF0C\u9810\u7D04\u670D\u52D9\u6642\u8ACB\u659F\u914C\u8A55\u4F30\u3002"
      },
      {
        id: 6,
        title: "Q6.\u5E73\u53F0\u6709\u63D0\u4F9B\u54EA\u4E9B\u4ED8\u6B3E\u65B9\u5F0F\uFF1F",
        content: "\u2714 \u6211\u5011\u63D0\u4F9B\u7DDA\u4E0A\u4FE1\u7528\u5361\u4ED8\u6B3E\uFF0C\u56E0\u9632\u7BC4\u8A50\u9A19\uFF0C\u66AB\u6642\u4E0D\u63D0\u4F9B\u532F\u6B3E\u65B9\u5F0F\u3002(\u672A\u4F86\u5C07\u9810\u8A08\u958B\u653E\u66F4\u591A\u7A2E\u985E\u7B2C\u4E09\u65B9\u652F\u4ED8\u65B9\u5F0F\uFF0C\u656C\u8ACB\u671F\u5F85)"
      },
      {
        id: 7,
        title: "Q7.\u5B8C\u6210\u9810\u7D04\u670D\u52D9\u5F8C\uFF0C\u5982\u4F55\u5C0D\u8913\u6BCD\u7559\u4E0B\u8A55\u8AD6\u6216\u8A55\u5206\uFF1F",
        content: "\u2714 \u7576\u8A72\u6B21\u670D\u52D9\u7D50\u675F\u5F8C\uFF0C\u60A8\u5373\u53EF\u7559\u4E0B\u8A55\u8AD6\u6216\u8A55\u5206\u3002(\u672C\u7AD9\u5C07\u91DD\u5C0D\u8A55\u5206\u4F4E\u65BC\u4E09\u5206\u4EE5\u4E0B\u4E4B\u670D\u52D9\uFF0C\u9032\u884C\u96D9\u65B9\u7684\u8A2A\u8AC7\u4E26\u4E86\u89E3\u8A73\u7D30\u72C0\u6CC1\uFF0C\u4EE5\u5229\u672A\u4F86\u6539\u9032)"
      },
      {
        id: 8,
        title: "Q8.\u5982\u4F55\u53D6\u6D88\u9810\u7D04\uFF1F\u722D\u8B70\u9000\u6B3E\u5982\u4F55\u8655\u7406\uFF1F",
        content: "\u2714 \u5982\u679C\u60A8\u5728\u9810\u8A02\u7684\u670D\u52D9\u671F\u9593\u4E4B\u524D\u6216\u671F\u9593\u53D6\u6D88\u9810\u8A02\uFF0C\u6211\u5011\u5C07\u6839\u64DA\u670D\u52D9\u4F9B\u61C9\u5546\u5728\u670D\u52D9\u4E2D\u9078\u64C7\u7684\u53D6\u6D88\u6642\u9593\u9000\u9084\u8CBB\u7528\uFF0C\u9000\u6B3E\u898F\u5247\u5982\u4E0B\uFF1A\n(1)\u9810\u7D04\u670D\u52D9\u524D\u4E00\u65E5(24\u5C0F\u6642\u5167)\uFF0C\u7533\u8ACB\u53D6\u6D88\u9810\u7D04\uFF1A\u5168\u984D\u9000\u6B3E\u3002\n(2)\u9810\u7D04\u670D\u52D9\u7576\u65E5(\u524D12\u5C0F\u6642\u5167)\uFF0C\u7533\u8ACB\u53D6\u6D88\u9810\u7D04\uFF1A\u9000\u6B3E70%\u6B3E\u9805\uFF0C\u6263\u6B3E30%\u3002\n(3)\u9810\u7D04\u670D\u52D9\u7576\u65E5(\u524D6\u5C0F\u6642\u5167)\uFF0C\u7533\u8ACB\u53D6\u6D88\u9810\u7D04\uFF1A\u9000\u6B3E50%\u6B3E\u9805\uFF0C\u6263\u6B3E50%\u3002\n(4)\u9810\u7D04\u670D\u52D9\u7576\u65E5(\u524D3\u5C0F\u6642\u5167)\uFF0C\u7533\u8ACB\u53D6\u6D88\u9810\u7D04\uFF1A\u9000\u6B3E30%\u6B3E\u9805\uFF0C\u6263\u6B3E70%\u3002\n(5)\u9810\u7D04\u670D\u52D9\u524D30\u5206\u9418\uFF5E1\u5C0F\u6642\u5167\uFF0C\u7533\u8ACB\u53D6\u6D88\u9810\u7D04\uFF1A\u7121\u6CD5\u9000\u6B3E\u3002\n\u70BA\u6C42\u96D9\u65B9\u826F\u597D\u7684\u5408\u4F5C\u95DC\u4FC2\u8207\u76F8\u4E92\u5C0A\u91CD\uFF0C\u8ACB\u98FC\u4E3B\u9810\u7D04\u670D\u52D9\u6642\u8B39\u614E\u601D\u8003\uFF0C\u82E5\u56E0\u6545\u9700\u8981\u81E8\u6642\u53D6\u6D88\uFF0C\u4E5F\u8ACB\u60A8\u63D0\u65E9\u901A\u77E5\uFF0C\u5171\u540C\u6253\u9020\u4E00\u500B\u7F8E\u597D\u7684\u74B0\u5883\u3002"
      },
      {
        id: 9,
        title: "Q9.PetsKeeper\u5BF5\u7269\u8913\u6BCD\u63D0\u4F9B\u670D\u52D9\u7684\u4FE1\u4EFB\u8207\u4FDD\u8B49\uFF1F",
        content: "\u2714 \u91DD\u5C0D\u8A3B\u518A\u70BAPetsKeeper\u5BF5\u7269\u8A3B\u518A\u7684\u8913\u6BCD\u8207\u5C08\u5BB6\u5011\uFF0C\u5728\u8A3B\u518A\u7533\u8ACB\u6642\uFF0C\u7686\u6709\u901A\u904E\u56B4\u683C\u7684\u8EAB\u4EFD\u5BE9\u6838\u3001\u6587\u4EF6\u8B49\u660E\u3001\u96FB\u8A71\u9A57\u8B49\u7B49\u6D41\u7A0B\uFF0C\u624D\u80FD\u901A\u904E\u8913\u6BCD\u8A8D\u8B49\u7533\u8ACB\uFF1B\u5B8C\u6210\u8A3B\u518A\u5F8C\uFF0C\u8913\u6BCD\u3001\u5C08\u5BB6\u5011\u4E5F\u9808\u7D93\u904E\u591A\u6B21\u7684\u670D\u52D9\uFF0C\u4F86\u7D2F\u7A4D\u500B\u4EBA\u7684\u8A55\u5206\u661F\u7B49\u8207\u7372\u5F97\u8A55\u50F9\u3002\n\u2714 \u7576\u60A8\u9078\u64C7\u9810\u7D04\u670D\u52D9\u6642\uFF0C\u53EF\u4EE5\u900F\u904E\u67E5\u770B\u5BF5\u7269\u8913\u6BCD\u7684\u8A55\u5206\u3001\u8A55\u8AD6\u8207\u8B49\u7167\uFF0C\u4F5C\u70BA\u8A55\u5224\u4F9D\u64DA\uFF0C\u4F86\u9078\u64C7\u662F\u5426\u9810\u8A02\u4ED6\u7684\u670D\u52D9\u3002"
      },
      {
        id: 10,
        title: "Q10.\u6211\u6709\u5BA2\u670D\u554F\u984C\uFF0C\u8A72\u5982\u4F55PetsKeeper\u5BF5\u7269\u8913\u6BCD\uFF1F",
        content: "\u2714 \u6B61\u8FCE\u60A8\u53EF\u52A0\u5165\u6211\u5011\u7684\u5B98\u65B9line@\u5E33\u865F\uFF0C\u7559\u4E0B\u60A8\u7684\u554F\u984C\uFF0C\u6211\u5011\u6703\u76E1\u5FEB\u5B89\u6392\u4EBA\u54E1\u8207\u60A8\u806F\u7E6B\u3002\n\u2714 \u5982\u6709\u5408\u4F5C\u7684\u696D\u52D9\u6D3D\u8AC7\u7B49\uFF0C\u6B61\u8FCE\u60A8\u4F86\u4FE1\u5BC4\u5230service@petskeeper.com\u5B98\u65B9\u4FE1\u7BB1\uFF0C\u4E26\u586B\u5BEB\u76F8\u95DC\u554F\u984C\u8207\u610F\u898B\uFF0C\u6211\u5011\u6703\u5728\u4E09\u500B\u5DE5\u4F5C\u5929\u5167\u56DE\u8986\u60A8\u3002"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$5;
      const _component_IntroQuestionAnswerContent = _sfc_main$3;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "images/serve/wavetop.svg",
        class: "w-full",
        alt: "wavetop"
      }, null, _parent));
      _push(`<h2 class="bg-[#FB976E] text-center text-white text-3xl font-[&#39;Noto Sans TC&#39;] font-semibold pb-6"> Q&amp;A </h2><div class="bg-[#FB976E] flex flex-col items-center justify-center"><!--[-->`);
      ssrRenderList(fakeData, (item) => {
        _push(ssrRenderComponent(_component_IntroQuestionAnswerContent, mergeProps({
          key: item.id,
          class: "w-1/2",
          ref_for: true
        }, item), null, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "images/serve/wavebottom.svg",
        class: "w-full",
        alt: "wavebottom"
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Intro/QuestionAnswer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Recommend",
  __ssrInlineRender: true,
  setup(__props) {
    const fakeData = Array.from({ length: 6 }, (_, i) => ({
      id: i + 1,
      photo: "images/frontpage/girl.png",
      provider: "\u9673\u5C0F\u7F8E",
      city: "\u53F0\u5317\u5E02",
      price: "$ 550 /hr",
      rating: "\u2B50\uFE0F\u2B50\uFE0F\u2B50\uFE0F\u2B50\uFE0F\u2B50\uFE0F"
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeRecommendTitle = __nuxt_component_0$1;
      const _component_HomeRecommendCard = _sfc_main$8;
      const _component_HomeRecommendTail = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full rounded-[2.5rem] bg-white p-3 shadow-lg" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_HomeRecommendTitle, null, null, _parent));
      _push(`<div class="w-full grid grid-cols-6 gap-[0.75rem] py-8"><!--[-->`);
      ssrRenderList(unref(fakeData), (item) => {
        _push(ssrRenderComponent(_component_HomeRecommendCard, mergeProps({
          key: item.id,
          ref_for: true
        }, item, { class: "col-span-1" }), null, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_HomeRecommendTail, { class: "w-full" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Intro/Recommend.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_IntroIntroduction = _sfc_main$4;
  const _component_IntroQuestionAnswer = _sfc_main$2;
  const _component_IntroRecommend = _sfc_main$1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_IntroIntroduction, null, null, _parent));
  _push(ssrRenderComponent(_component_IntroQuestionAnswer, null, null, _parent));
  _push(ssrRenderComponent(_component_IntroRecommend, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/intro.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const intro = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { intro as default };
//# sourceMappingURL=intro-DRdVywpl.mjs.map

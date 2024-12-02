import __nuxt_component_0 from './Icon-B6ODn5Cd.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { _ as _sfc_main$3 } from './NuxtImg-Ce9a8LGV.mjs';
import { _ as _sfc_main$4 } from './Outline-DOrBdQBb.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "RatingStartRow",
  __ssrInlineRender: true,
  props: {
    rating: { default: 0 },
    isShowRatingNumber: { type: Boolean, default: false }
  },
  setup(__props) {
    const startCount = computed(() => {
      if (__props.rating > 5)
        return 5;
      if (__props.rating <= 0)
        return 0;
      return Math.round(__props.rating);
    });
    const roundRatingNumber = computed(() => {
      if (__props.rating > 5)
        return 5;
      if (__props.rating <= 0)
        return 0;
      return Math.floor(__props.rating * 10) / 10;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-x-2" }, _attrs))}><!--[-->`);
      ssrRenderList(5, (item) => {
        _push(ssrRenderComponent(_component_UIcon, {
          key: item,
          class: {
            "text-[#FFC658]": item <= unref(startCount),
            "text-[#F4F4F4]": item > unref(startCount)
          },
          name: "i-ic:baseline-star"
        }, null, _parent));
      });
      _push(`<!--]-->`);
      if (_ctx.isShowRatingNumber) {
        _push(`<span>${ssrInterpolate(unref(roundRatingNumber))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RatingStartRow.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    id: {},
    name: {},
    avatar: {},
    message: {},
    time: {},
    isPetSitter: { type: Boolean },
    rating: {},
    attachUrlList: {},
    discussionList: {}
  },
  setup(__props) {
    const backGroundImage = computed(() => `background-image: url('${__props.avatar}')`);
    const inChatDiscussionList = computed(() => {
      return !__props.discussionList ? [] : __props.discussionList;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RatingStartRow = _sfc_main$2;
      const _component_NuxtImg = _sfc_main$3;
      const _component_DiscussionCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex flex-col items-start gap-y-3 rounded-xl px-3 md:px-6 py-2 md:py-4", { "bg-[#FEF8F5]": _ctx.isPetSitter }]
      }, _attrs))}><div class="w-full flex items-center justify-between"><div class="flex items-center justify-center gap-x-2 md:gap-x-4"><div class="bg-cover bg-center bg-no-repeat aspect-square w-6 md:w-12 rounded-full" style="${ssrRenderStyle(unref(backGroundImage))}"></div><span class="text-sm md:text-md">${ssrInterpolate(_ctx.name)}</span>`);
      if (_ctx.isPetSitter) {
        _push(`<div class="flex items-center justify-center rounded-md bg-orange-600 px-3 py-1 text-white text-xs md:text-sm"> \u8913\u6BCD </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="text-xs md:text-md">${ssrInterpolate(_ctx.time)}</div></div>`);
      if (_ctx.rating) {
        _push(ssrRenderComponent(_component_RatingStartRow, {
          "is-show-rating-number": true,
          rating: _ctx.rating
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="whitespace-pre-line text-sm md:text-md">${ssrInterpolate(_ctx.message)}</p><div class="w-full flex md:flex-wrap items-center gap-x-1 overflow-x-auto md:overflow-visible"><!--[-->`);
      ssrRenderList(_ctx.attachUrlList, (item) => {
        _push(ssrRenderComponent(_component_NuxtImg, {
          key: item,
          class: "md:[calc(16.7%_-_0.25rem)] h-28 md:h-auto rounded-md md:rounded-xl bg-cover bg-center",
          src: item
        }, null, _parent));
      });
      _push(`<!--]--></div><!--[-->`);
      ssrRenderList(unref(inChatDiscussionList), (item) => {
        _push(ssrRenderComponent(_component_DiscussionCard, mergeProps({
          key: item.id,
          ref_for: true
        }, item), null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Discussion/Card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Discussion",
  __ssrInlineRender: true,
  props: {
    discussionList: {},
    isTopNotRounded: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DiscussionCard = _sfc_main$1;
      const _component_ButtonOutline = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center gap-y-4" }, _attrs))}><div class="${ssrRenderClass([{
        "rounded-xl": !_ctx.isTopNotRounded,
        "rounded-b-xl": _ctx.isTopNotRounded
      }, "w-full border border-gray-300"])}"><!--[-->`);
      ssrRenderList(_ctx.discussionList, (item) => {
        _push(ssrRenderComponent(_component_DiscussionCard, mergeProps({
          key: item.id,
          class: "{ 'bg-[#FEF8F5]': item.isPetSitter }",
          ref_for: true
        }, item), null, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_ButtonOutline, {
        class: "mx-auto w-full md:w-1/2 border border-orange-600 flex items-center justify-center rounded-xl text-orange-600",
        label: "\u66F4\u591A\u8A55\u8AD6\u6309\u9215"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u66F4\u591A\u8A55\u8AD6 `);
          } else {
            return [
              createTextVNode(" \u66F4\u591A\u8A55\u8AD6 ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Discussion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Discussion-Bz455CEt.mjs.map

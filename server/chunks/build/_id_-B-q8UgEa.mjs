import { _ as _sfc_main$v } from './LikeSwitcher-DWkHCC9E.mjs';
import __nuxt_component_0$2 from './Icon-B6ODn5Cd.mjs';
import { _ as _sfc_main$w } from './Primary-DO2BBNU0.mjs';
import { useSSRContext, defineComponent, useTemplateRef, shallowRef, computed, watch, mergeProps, unref, isRef, resolveComponent, withCtx, createTextVNode, mergeModels, useModel, createVNode, toDisplayString, useId, openBlock, createBlock, createCommentVNode, Fragment, renderList, ref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderSlot, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import { _ as _sfc_main$D } from './Status-CB7ZqcBa.mjs';
import __nuxt_component_0$3 from './Modal-CUWDe7J7.mjs';
import { _ as __nuxt_component_1 } from './ModalClose-DniwJvVv.mjs';
import { _ as _sfc_main$x } from './Select-Jj7n4e63.mjs';
import { d as useElementBounding, Q as useWindowSize, g as useRoute, K as useDateTimeRanger, L as useCalendar, u as useDateFormat, M as onClickOutside, a as useLocalePath, n as navigateTo, N as createSharedComposable, O as useWindowScroll, J as __nuxt_component_0$1, b as useThrottleFn, _ as _export_sfc, P as useNow } from './server.mjs';
import { _ as _sfc_main$y } from './SelectWithNoValue-EvF5oYkr.mjs';
import { _ as _sfc_main$z } from './Common-DHSSImN5.mjs';
import { _ as _sfc_main$A } from './PetCount-C1dJIt54.mjs';
import { P as PetType, b as PetSize, S as ServiceStatus, c as SpecialPetSitterCertificateStatus, d as PetSitterCertificateStatus, V as VerifiedIdentityStatus, g as petNameMapping, I as IconNameStatus, h as petSizeDetailName, i as SpecialPetSitterCertificateName, j as PetSitterCertificateName, k as VerifiedIdentityName } from './petSitter.type-BjvpgkZ2.mjs';
import { u as usePetSitterStore } from './usePetSitterStore-BLaObs6U.mjs';
import { storeToRefs } from 'pinia';
import { u as useForm, a as useField, t as toTypedSchema } from './vee-validate-zod-CmN8nNdS.mjs';
import { c as cities } from './region.type-CQhlObjv.mjs';
import * as zod from 'zod';
import { _ as _sfc_main$B } from './TextArea-BzPNiDUE.mjs';
import { _ as _sfc_main$C } from './Outline-DOrBdQBb.mjs';
import { _ as _sfc_main$E } from './ServiceIcon-B7HfU_kG.mjs';
import __nuxt_component_1$1 from './Tooltip-BpJFnbW6.mjs';
import { _ as _sfc_main$u } from './Tabs-Cb0V9DXg.mjs';
import { _ as _sfc_main$F } from './NuxtImg-Ce9a8LGV.mjs';
import { _ as _sfc_main$G } from './CommunityShare-CmFxLHYh.mjs';
import Decimal from 'decimal.js';
import { _ as _sfc_main$H } from './Discussion-Bz455CEt.mjs';
import { _ as _sfc_main$I } from './Pale-B861WQUB.mjs';
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
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'tailwind-merge';
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
import './SelectMenu-JtM-AXfn.mjs';
import './Avatar-DmdANAXU.mjs';
import './combobox-BRR1qDhj.mjs';
import '@tanstack/vue-virtual';
import './form-DsUILy5F.mjs';
import './use-resolve-button-type-DOOP2SMg.mjs';
import './calculate-active-index-Dujs8zvP.mjs';
import './use-text-value-CfKvyAwN.mjs';
import './index-BWxBLvh9.mjs';
import './index-B0sILfIw.mjs';
import './usePopper-C-zM4LTl.mjs';
import './useFormGroup-RtfcSx_K.mjs';
import './useButtonGroup-CKD41UhK.mjs';
import './composables-VAV01sHq.mjs';
import './useCustomError-C6r27JZ9.mjs';
import './Kbd-p8uTVBrN.mjs';
import './LineRoundIcon-CHKgnO9C.mjs';

const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "Rating",
  __ssrInlineRender: true,
  props: {
    rating: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_i_ic58baseline_star = resolveComponent("i-ic:baseline-star");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center" }, _attrs))}><span>${ssrInterpolate(_ctx.rating)}</span>`);
      _push(ssrRenderComponent(_component_i_ic58baseline_star, { class: "text-[#FFC658]" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Rating.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "Fixed",
  __ssrInlineRender: true,
  props: {
    name: {},
    photoUrl: {},
    isLike: { type: Boolean, default: false },
    rating: { default: 0 },
    commentCount: { default: 0 }
  },
  emits: ["update:addToFavorate", "update:startReservation"],
  setup(__props) {
    const backGroundImage = computed(() => `background-image: url('${__props.photoUrl}')`);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Rating = _sfc_main$t;
      const _component_ButtonUtilsLikeSwitcher = _sfc_main$v;
      const _component_ButtonPrimary = _sfc_main$w;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed top-[3.25rem] md:top-[4.625rem] left-0 z-2 h-20 w-full bg-white text-black shadow-xl" }, _attrs))}><div class="h-full w-full flex items-center justify-between px-8 sm:px-4 md:px-32"><div class="flex items-center justify-center gap-x-4"><div class="aspect-square w-12 rounded-full bg-cover bg-center bg-no-repeat" style="${ssrRenderStyle(unref(backGroundImage))}"></div><div class="flex items-center justify-center gap-x-2"><span class="hidden sm:inline">${ssrInterpolate(_ctx.name)}</span><span class="hidden sm:inline">|</span>`);
      _push(ssrRenderComponent(_component_Rating, { rating: _ctx.rating }, null, _parent));
      _push(`<span class="hidden sm:inline">(${ssrInterpolate(_ctx.commentCount)}\u5247\u8A55\u8AD6)</span></div></div><div class="flex items-center justify-center gap-x-4">`);
      _push(ssrRenderComponent(_component_ButtonUtilsLikeSwitcher, {
        class: "hidden sm:flex items-center justify-center",
        "is-like": _ctx.isLike,
        onClick: ($event) => _ctx.$emit("update:addToFavorate")
      }, null, _parent));
      _push(ssrRenderComponent(_component_ButtonPrimary, {
        class: "min-w-48 text-white",
        label: "\u9810\u7D04\u670D\u670D\u6309\u9215",
        onClick: ($event) => _ctx.$emit("update:startReservation")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u9810\u7D04\u670D\u52D9 `);
          } else {
            return [
              createTextVNode(" \u9810\u7D04\u670D\u52D9 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PetSitter/PersonalSection/Fixed.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "MonthYearControlPanel",
  __ssrInlineRender: true,
  props: {
    isDisabledYear: { type: Boolean, default: false },
    isDisableNextMonth: { type: Boolean, default: false },
    isDisablePreviousMonth: { type: Boolean, default: false }
  },
  emits: ["update:controlMonthOrYear"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center px-3 py-2 border-b border-gray-300 mx-[-3]" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<div class="flex flex-grow items-center justify-center text-black">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/DateTime/MonthYearControlPanel.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "WeekList",
  __ssrInlineRender: true,
  props: {
    weekNameList: { default: () => [] }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "my-3 w-full flex items-center font-light" }, _attrs))}><!--[-->`);
      ssrRenderList(_ctx.weekNameList, (item) => {
        _push(`<div class="w-1/7 flex select-none items-center justify-center">${ssrInterpolate(item)}</div>`);
      });
      _push(`<!--]--></section>`);
    };
  }
});
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/DateTime/WeekList.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "Calendar",
  __ssrInlineRender: true,
  props: {
    calendar: { default: () => [] }
  },
  emits: ["update:currentDate"],
  setup(__props) {
    const flatCalendar = computed(() => {
      return __props.calendar.flat();
    });
    const activeCount = computed(() => {
      return flatCalendar.value.filter((item) => item.isActive).length;
    });
    const getFlatIndex = (rowIndex, colIndex) => {
      return rowIndex * 7 + colIndex;
    };
    const getOneActive = (rowIndex, colIndex) => {
      if (activeCount.value !== 1)
        return false;
      const index = getFlatIndex(rowIndex, colIndex);
      const currentFlatCalendar = flatCalendar.value;
      if (index !== flatCalendar.value.length - 1) {
        if (currentFlatCalendar[index + 1].isInActiveRange) {
          return true;
        }
      }
      if (index !== 0) {
        if (currentFlatCalendar[index - 1].isInActiveRange) {
          return true;
        }
      }
      return false;
    };
    const isNextRangeOrActive = (rowIndex, colIndex) => {
      const index = getFlatIndex(rowIndex, colIndex);
      const currentFlatCalendar = flatCalendar.value;
      if (index !== flatCalendar.value.length - 1) {
        if (currentFlatCalendar[index + 1].isInActiveRange || currentFlatCalendar[index + 1].isActive) {
          return true;
        }
      }
      return false;
    };
    const isBeforeRangeOrActive = (rowIndex, colIndex) => {
      const index = getFlatIndex(rowIndex, colIndex);
      const currentFlatCalendar = flatCalendar.value;
      if (index !== 0) {
        if (currentFlatCalendar[index - 1].isInActiveRange || currentFlatCalendar[index - 1].isActive) {
          return true;
        }
      }
      return false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(_ctx.calendar, (weeksItem, rowIndex) => {
        _push(`<section class="mb-2 flex select-none items-center font-light"><!--[-->`);
        ssrRenderList(weeksItem, (item, colIndex) => {
          _push(`<div class="w-1/7 flex cursor-pointer items-center justify-center">`);
          if (item.isActive) {
            _push(`<button class="${ssrRenderClass([{
              "bg-orange-300/50": unref(activeCount) === 2 || getOneActive(rowIndex, colIndex),
              "rounded-l-full": isNextRangeOrActive(rowIndex, colIndex),
              "rounded-r-full": isBeforeRangeOrActive(rowIndex, colIndex)
            }, "h-7 w-full flex items-center justify-center text-white"])}"><span class="aspect-square w-7 flex items-center justify-center rounded-full bg-orange-600">${ssrInterpolate(item.date)}</span></button>`);
          } else {
            _push(`<button class="${ssrRenderClass([{
              "bg-orange-300/50": item.isInActiveRange
            }, "h-7 w-full flex items-center justify-center"])}">`);
            if (item.isNow) {
              _push(`<span class="border border-orange-500 aspect-square w-7 flex items-center justify-center rounded-full hover:bg-orange-300/50">${ssrInterpolate(item.date)}</span>`);
            } else {
              _push(`<span class="${ssrRenderClass([{
                "text-[#C0C4CC]": item.isBlur
              }, "aspect-square w-7 flex items-center justify-center rounded-full hover:bg-orange-300/50"])}">${ssrInterpolate(item.date)}</span>`);
            }
            _push(`</button>`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></section>`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/DateTime/Calendar.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "FunctionBottomControlPanel",
  __ssrInlineRender: true,
  emits: ["update:now", "update:cancel", "update:clean"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-start border-t border-gray-300 px-3 pt-2 mx-[-3]" }, _attrs))}><button class="text-orange-600"> \u4ECA\u5929 </button></div>`);
    };
  }
});
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/DateTime/FunctionBottomControlPanel.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "DateTimeSingleRangerInModal",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    label: {},
    id: {},
    isShowLabel: { type: Boolean, default: true },
    errorMessage: { default: "" },
    placeholder: { default: "" },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false }
  }, {
    "modelValue": { default: [null, null] },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const errorID = shallowRef("");
    const modelValue = useModel(__props, "modelValue");
    const isShowCalendar = shallowRef(false);
    const calendarRef = useTemplateRef("calendarRef");
    const isCurrentExcludeElement = shallowRef(false);
    shallowRef(false);
    const isPickDateFull = computed(() => {
      return modelValue.value[0] !== null && modelValue.value[1] !== null;
    });
    const firstDate = computed({
      get: () => {
        const currentDate = modelValue.value[0];
        if (currentDate === null)
          return null;
        return new Date(currentDate);
      },
      set: (newValue) => {
        if (newValue === null)
          return;
        setCalendarDate(newValue);
      }
    });
    const secondDate = computed({
      get: () => {
        const currentDate = modelValue.value[1];
        if (currentDate === null)
          return null;
        return new Date(currentDate);
      },
      set: (newValue) => {
        if (newValue === null)
          return;
        setCalendarDate(newValue);
      }
    });
    const {
      weekNames,
      boardShownYear,
      boardShownMonth,
      // isShowClockSelector,
      // selectedClockMessage,
      // isClockMessageEmpty,
      calendar,
      // selectedDateFormat,
      // boardShownIndicator,
      dateTimeControl,
      refreshCalendar,
      setCurrentDateActive,
      setBoardShownYearButNotRefresh,
      setBoardShownMonthButNotRefresh
      // toggleClockSelector,
      // receiveMessageFromClockSelector,
      // changeClockMessageEmptyStatus
    } = useDateTimeRanger(useCalendar, firstDate, secondDate);
    const inputIndicatorValue = computed(() => {
      const currentValue = modelValue.value;
      if (currentValue.length !== 2) {
        return "";
      }
      if (currentValue[0] === null || currentValue[1] === null)
        return "";
      return `${useDateFormat(currentValue[0], "YYYY/MM/DD").value}-${useDateFormat(currentValue[1], "YYYY/MM/DD").value}`;
    });
    const handleUpdateCurrentDate = (currentDate, isBlurSection) => {
      setCurrentDateActive(currentDate, isBlurSection);
    };
    const rematchCalendarDate = () => {
      if (!isPickDateFull.value)
        return;
      resetPickDate();
    };
    const setCalendarDate = (date) => {
      rematchCalendarDate();
      if (modelValue.value[0] === null) {
        modelValue.value[0] = date.setHours(0, 0, 0, 0);
        return;
      }
      modelValue.value[1] = date.setHours(23, 59, 59, 999);
    };
    const resetPickDate = () => {
      modelValue.value[0] = null;
      modelValue.value[1] = null;
    };
    const setControlBoardNow = () => {
      const now = /* @__PURE__ */ new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      setBoardShownYearButNotRefresh(year);
      setBoardShownMonthButNotRefresh(month);
    };
    const handleUpdateCurrentNow = () => {
      const now = /* @__PURE__ */ new Date();
      setControlBoardNow();
      setCalendarDate(now);
    };
    onClickOutside(calendarRef, () => {
      if (isCurrentExcludeElement.value)
        return;
      isShowCalendar.value = false;
    });
    watch(isPickDateFull, (isFull) => {
      if (!isFull)
        return;
      if (isCurrentExcludeElement.value)
        return;
      const firstDate2 = modelValue.value[0];
      const secondDate2 = modelValue.value[1];
      if (firstDate2 === null || secondDate2 === null)
        return;
      if (firstDate2 > secondDate2) {
        modelValue.value = [secondDate2, firstDate2];
      }
      isShowCalendar.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_0$2;
      const _component_InputDateTimeMonthYearControlPanel = _sfc_main$r;
      const _component_InputDateTimeWeekList = _sfc_main$q;
      const _component_InputDateTimeCalendar = _sfc_main$p;
      const _component_InputDateTimeFunctionBottomControlPanel = _sfc_main$o;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-col relative items-start gap-y-2"><span style="${ssrRenderStyle(_ctx.isShowLabel ? null : { display: "none" })}" class="flex items-center justify-center gap-x-1">`);
      if (_ctx.required) {
        _push(`<span class="text-red-500 text-xs"> * </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${ssrInterpolate(_ctx.label)}</span></span><div class="border border-gray-300 w-full flex items-center justify-center gap-x-2 overflow-hidden rounded-lg"><button class="flex flex-grow items-center justify-between px-3 py-2">`);
      if (modelValue.value.length === 0 || modelValue.value.every((item) => item === null)) {
        _push(`<span class="text-gray-400">${ssrInterpolate(_ctx.placeholder)}</span>`);
      } else {
        _push(`<span>${ssrInterpolate(unref(inputIndicatorValue))}</span>`);
      }
      if (modelValue.value.length === 0 || modelValue.value.every((item) => item === null)) {
        _push(ssrRenderComponent(_component_UIcon, { name: "i-heroicons:calendar-days-16-solid" }, null, _parent));
      } else {
        _push(`<button> \xD7 </button>`);
      }
      _push(`</button></div><div style="${ssrRenderStyle(unref(isShowCalendar) ? null : { display: "none" })}" class="border border-gray-300 shadow-[0_1rem_1.2rem_0_#d1d1d1] absolute top-22 z-10 w-[80vw] md:w-64 rounded-xl bg-white px-3 py-2">`);
      _push(ssrRenderComponent(_component_InputDateTimeMonthYearControlPanel, { "onUpdate:controlMonthOrYear": unref(dateTimeControl) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(unref(boardShownYear))}\u5E74${ssrInterpolate(unref(boardShownMonth))}\u6708 </span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(unref(boardShownYear)) + "\u5E74" + toDisplayString(unref(boardShownMonth)) + "\u6708 ", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_InputDateTimeWeekList, { "week-name-list": unref(weekNames) }, null, _parent));
      _push(ssrRenderComponent(_component_InputDateTimeCalendar, {
        calendar: unref(calendar),
        "onUpdate:currentDate": handleUpdateCurrentDate
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputDateTimeFunctionBottomControlPanel, {
        "onUpdate:cancel": ($event) => isShowCalendar.value = false,
        "onUpdate:now": handleUpdateCurrentNow,
        "onUpdate:clean": handleUpdateCurrentNow
      }, null, _parent));
      _push(`</div></div><span style="${ssrRenderStyle(_ctx.errorMessage ? null : { display: "none" })}"${ssrRenderAttr("id", unref(errorID))} class="text-sm text-red-500">${ssrInterpolate(_ctx.errorMessage)}</span></div>`);
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/DateTimeSingleRangerInModal.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "CheckBoxListVertical",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    label: {},
    id: { default: () => useId("$zfAH4yenQ3") },
    isShowLabel: { type: Boolean, default: true },
    errorMessage: { default: "" },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    optionList: {},
    showInputWhenValueIs: {},
    placeholder: { default: "" }
  }, {
    "modelValue": {},
    "modelModifiers": {},
    "input": { default: "" },
    "inputModifiers": {}
  }),
  emits: ["update:modelValue", "update:input"],
  setup(__props) {
    const errorID = useId("$CnB7AqiIS8");
    const modelValue = useModel(__props, "modelValue");
    const inputModalValue = useModel(__props, "input");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-col items-start gap-y-2"><span style="${ssrRenderStyle(_ctx.isShowLabel ? null : { display: "none" })}" class="flex items-center justify-center gap-x-1">`);
      if (_ctx.required) {
        _push(`<span class="text-red-500 text-xs"> * </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${ssrInterpolate(_ctx.label)}</span></span><div class="flex flex-col w-full items-start gap-y-1"><!--[-->`);
      ssrRenderList(_ctx.optionList, (item) => {
        _push(`<label${ssrRenderAttr("for", `${_ctx.id}_${item.value}`)} class="w-full flex items-center gap-x-2"><input${ssrRenderAttr("id", `${_ctx.id}_${item.value}`)}${ssrIncludeBooleanAttr(Array.isArray(modelValue.value) ? ssrLooseContain(modelValue.value, item.value) : modelValue.value) ? " checked" : ""} type="checkbox"${ssrRenderAttr("value", item.value)}${ssrIncludeBooleanAttr(_ctx.disabled) ? " disabled" : ""}><span>${ssrInterpolate(item.title)}</span><input style="${ssrRenderStyle(modelValue.value === _ctx.showInputWhenValueIs && item.value === _ctx.showInputWhenValueIs ? null : { display: "none" })}"${ssrRenderAttr("id", _ctx.id)}${ssrRenderAttr("value", inputModalValue.value)} type="text"${ssrRenderAttr("placeholder", _ctx.placeholder)} class="border border-gray-200 flex-grow rounded-lg px-3 py-2 outline-orange-600"${ssrIncludeBooleanAttr(_ctx.disabled) ? " disabled" : ""}></label>`);
      });
      _push(`<!--]--></div></div><span style="${ssrRenderStyle(_ctx.errorMessage ? null : { display: "none" })}"${ssrRenderAttr("id", unref(errorID))} class="text-sm text-red-500">${ssrInterpolate(_ctx.errorMessage)}</span></div>`);
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/CheckBoxListVertical.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const petInfoSchema = zod.object({
  id: zod.number(),
  petType: zod.nativeEnum(PetType),
  petName: zod.string().min(1, "\u8ACB\u8F38\u5165\u5BF5\u7269\u540D\u7A31"),
  extraServiceIDList: zod.number().array(),
  // ids
  size: zod.nativeEnum(PetSize).optional()
});
const reservationFirstStepSchema = zod.object({
  serviceType: zod.nativeEnum(ServiceStatus),
  reservationTime: zod.number().int().nullable().array().length(2).refine(([startTime, endTime]) => {
    return startTime !== null && endTime !== null;
  }, "\u8ACB\u9078\u64C7\u9810\u7D04\u65E5\u671F"),
  cityName: zod.string().min(1, "\u8ACB\u9078\u64C7\u7E23\u5E02"),
  distructName: zod.string().min(1, "\u8ACB\u9078\u64C7\u5730\u5340"),
  address: zod.string().min(1, "\u8ACB\u8F38\u5165\u8A73\u7D30\u5730\u5740"),
  petList: petInfoSchema.array().min(1, "\u8ACB\u8F38\u5165\u5BF5\u7269\u8CC7\u8A0A").refine((val) => {
    const dogList = val.filter((item) => item.petType === PetType.Dog);
    if (dogList.length === 0)
      return true;
    return dogList.every((item) => item.size !== void 0);
  }, "\u8ACB\u8F38\u5165\u5BF5\u7269\u5C3A\u5BF8")
});
const reservationSecondStepSchema = zod.object({
  phone: zod.string().regex(/^09\d{2}[-\s]?\d{3}[-\s]?\d{3}$/, "\u8ACB\u8F38\u5165\u624B\u6A5F\u865F\u78BC\u683C\u5F0F").min(1, "\u8ACB\u8F38\u5165\u624B\u6A5F\u865F\u78BC"),
  message: zod.string().max(200, "\u8981\u767C\u9001\u592A\u9577\u4E86\uFF01(200\u5B57\u4EE5\u5167)").optional()
});
reservationFirstStepSchema.merge(reservationSecondStepSchema);
const useReservationForm = (submitFn, submitErrorFn) => {
  const isSubmittingDisabled = shallowRef(false);
  const validationSchema = toTypedSchema(reservationFirstStepSchema);
  const initialValues = {
    serviceType: ServiceStatus.ToHomeCare,
    reservationTime: [null, null],
    cityName: "",
    distructName: "",
    address: "",
    petList: [
      {
        id: 1,
        petType: PetType.Dog,
        petName: "",
        extraServiceIDList: [],
        size: PetSize.SMALL
      }
    ]
  };
  const { handleSubmit, isSubmitting, resetForm, errors } = useForm({
    validationSchema,
    initialValues
  });
  const formSubmit = handleSubmit(
    useThrottleFn(async (values) => {
      isSubmittingDisabled.value = true;
      const isSuccess = await submitFn(values);
      if (!isSuccess && submitErrorFn) {
        submitErrorFn();
      }
      isSubmittingDisabled.value = false;
    }, 800)
  );
  const { value: serviceType } = useField("serviceType");
  const { value: reservationTime } = useField("reservationTime");
  const { value: cityName } = useField("cityName");
  const { value: distructName } = useField("distructName");
  const { value: address } = useField("address");
  const { value: petList } = useField("petList");
  const districtRegionOptionList = computed(() => {
    const currentCity = cities.find((item) => item.city === cityName.value);
    if (!currentCity)
      return [];
    return currentCity.districts.map((item) => {
      return {
        value: item.name,
        title: item.name
      };
    });
  });
  const cityOptionList = cities.map((item) => {
    return {
      value: item.city,
      title: item.city
    };
  });
  const petTypeOptionList = Object.entries(petNameMapping).map(([key, value]) => {
    return {
      value: +key,
      title: value
    };
  });
  const dogSizeOptionList = Object.entries(petSizeDetailName).map(([key, value]) => {
    return {
      value: +key,
      title: value
    };
  });
  return {
    cityOptionList,
    serviceType,
    reservationTime,
    cityName,
    distructName,
    address,
    petList,
    formSubmit,
    isSubmitting,
    isSubmittingDisabled,
    resetForm,
    errors,
    districtRegionOptionList,
    petTypeOptionList,
    dogSizeOptionList
  };
};
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "First",
  __ssrInlineRender: true,
  setup(__props) {
    const petSitterStore = usePetSitterStore();
    const { getExtraServiceOptionList, setTempReservation, setCurrentReservationStep } = petSitterStore;
    const { serviceTypeOptionList } = storeToRefs(petSitterStore);
    const {
      cityOptionList,
      serviceType,
      reservationTime,
      cityName,
      distructName,
      address,
      petList,
      formSubmit,
      isSubmittingDisabled,
      errors,
      districtRegionOptionList,
      petTypeOptionList,
      dogSizeOptionList
    } = useReservationForm(async (values) => {
      setTempReservation(values);
      setCurrentReservationStep(2);
      return true;
    });
    const petListCount = computed({
      get: () => petList.value.length,
      set: (newValue) => {
        const currentPetList = petList.value;
        const currentLength = currentPetList.length;
        if (newValue >= currentLength) {
          let maxId = currentLength === 0 ? 0 : Math.max(...currentPetList.map((item) => item.id));
          for (let i = 0; i < newValue - currentLength; i++) {
            maxId++;
            petList.value.push({
              id: maxId,
              petType: PetType.Dog,
              petName: "",
              extraServiceIDList: [],
              size: PetSize.SMALL
            });
          }
          return;
        }
        petList.value = petList.value.filter((_, index) => index < newValue);
      }
    });
    watch(cityName, () => {
      distructName.value = "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputSelect = _sfc_main$x;
      const _component_InputDateTimeSingleRangerInModal = _sfc_main$n;
      const _component_InputSelectWithNoValue = _sfc_main$y;
      const _component_InputCommon = _sfc_main$z;
      const _component_InputPetCount = _sfc_main$A;
      const _component_InputCheckBoxListVertical = _sfc_main$m;
      const _component_UIcon = __nuxt_component_0$2;
      const _component_ButtonPrimary = _sfc_main$w;
      _push(`<form${ssrRenderAttrs(_attrs)}><div class="border-b border-gray-300 flex flex-col w-full items-center gap-y-4 px-6 py-4">`);
      _push(ssrRenderComponent(_component_InputSelect, {
        modelValue: unref(serviceType),
        "onUpdate:modelValue": ($event) => isRef(serviceType) ? serviceType.value = $event : null,
        label: "\u9810\u7D04\u670D\u52D9",
        "is-full-size": "",
        required: "",
        class: "w-full",
        options: unref(serviceTypeOptionList),
        disabled: unref(isSubmittingDisabled),
        "error-message": unref(errors).serviceType
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputDateTimeSingleRangerInModal, {
        modelValue: unref(reservationTime),
        "onUpdate:modelValue": ($event) => isRef(reservationTime) ? reservationTime.value = $event : null,
        required: "",
        label: "\u9810\u7D04\u6642\u9593",
        placeholder: "\u9810\u7D04\u6642\u9593",
        disabled: unref(isSubmittingDisabled),
        "error-message": unref(errors).reservationTime,
        class: "w-full"
      }, null, _parent));
      _push(`<div class="w-full flex items-center gap-x-1"><span class="text-red-500 sm">*</span><span>\u670D\u52D9\u5730\u9EDE</span></div><div class="w-full flex items-center gap-x-4">`);
      _push(ssrRenderComponent(_component_InputSelectWithNoValue, {
        modelValue: unref(cityName),
        "onUpdate:modelValue": ($event) => isRef(cityName) ? cityName.value = $event : null,
        "is-show-label": false,
        placeholder: "\u9078\u64C7\u7E23\u5E02",
        "is-full-size": "",
        label: "\u7E23\u5E02",
        required: "",
        class: "w-1/2",
        options: unref(cityOptionList),
        disabled: unref(isSubmittingDisabled),
        "no-value": ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputSelectWithNoValue, {
        modelValue: unref(distructName),
        "onUpdate:modelValue": ($event) => isRef(distructName) ? distructName.value = $event : null,
        "is-full-size": "",
        label: "\u884C\u653F\u5340",
        placeholder: "\u9078\u64C7\u57CE\u9109\u93AE\u5E02\u5340",
        "is-show-label": false,
        required: "",
        class: "w-1/2",
        "no-value": "",
        options: unref(districtRegionOptionList),
        disabled: unref(isSubmittingDisabled)
      }, null, _parent));
      _push(`</div><div style="${ssrRenderStyle(unref(errors).cityName || unref(errors).distructName ? null : { display: "none" })}" class="w-full text-red-500 sm">${ssrInterpolate(unref(errors).cityName || unref(errors).distructName)}</div>`);
      _push(ssrRenderComponent(_component_InputCommon, {
        modelValue: unref(address),
        "onUpdate:modelValue": ($event) => isRef(address) ? address.value = $event : null,
        "is-show-label": false,
        label: "\u8A73\u7D30\u5730\u5740",
        placeholder: "\u8A73\u7D30\u5730\u5740",
        disabled: unref(isSubmittingDisabled),
        required: "",
        class: "w-full",
        "error-message": unref(errors).address
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputPetCount, {
        modelValue: unref(petListCount),
        "onUpdate:modelValue": ($event) => isRef(petListCount) ? petListCount.value = $event : null,
        required: "",
        class: "w-full",
        disabled: unref(isSubmittingDisabled),
        min: 1
      }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(petList), (pet) => {
        _push(`<div class="flex flex-col w-full items-center gap-y-4">`);
        _push(ssrRenderComponent(_component_InputSelect, {
          modelValue: pet.petType,
          "onUpdate:modelValue": ($event) => pet.petType = $event,
          label: "\u5BF5\u7269\u7A2E\u985E",
          options: unref(petTypeOptionList),
          disabled: unref(isSubmittingDisabled),
          "is-full-size": "",
          required: "",
          class: "w-full"
        }, null, _parent));
        _push(`<div class="w-full flex items-center justify-center gap-x-4">`);
        _push(ssrRenderComponent(_component_InputCommon, {
          modelValue: pet.petName,
          "onUpdate:modelValue": ($event) => pet.petName = $event,
          label: "\u5BF5\u7269\u540D\u5B57",
          "is-show-label": false,
          placeholder: "\u8ACB\u8F38\u5165\u5BF5\u7269\u540D\u5B57",
          required: "",
          class: {
            "w-full": pet.petType !== unref(PetType).Dog,
            "w-1/2": pet.petType === unref(PetType).Dog
          },
          disabled: unref(isSubmittingDisabled)
        }, null, _parent));
        _push(ssrRenderComponent(_component_InputSelect, {
          style: pet.petType === unref(PetType).Dog ? null : { display: "none" },
          modelValue: pet.size,
          "onUpdate:modelValue": ($event) => pet.size = $event,
          label: "\u5BF5\u7269\u5C3A\u5BF8",
          "is-full-size": "",
          "is-show-label": false,
          placeholder: "\u8ACB\u9078\u64C7\u5BF5\u7269\u5C3A\u5BF8",
          required: "",
          class: "w-1/2",
          options: unref(dogSizeOptionList),
          disabled: unref(isSubmittingDisabled)
        }, null, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_InputCheckBoxListVertical, {
          modelValue: pet.extraServiceIDList,
          "onUpdate:modelValue": ($event) => pet.extraServiceIDList = $event,
          label: "\u984D\u5916\u670D\u52D9\u7D30\u9805",
          class: "w-full",
          "option-list": unref(getExtraServiceOptionList)(unref(serviceType), pet.petType),
          disabled: unref(isSubmittingDisabled)
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--><p class="text-sm text-gray-400 w-full"> \u5982\u4E0A\u8FF0\u7121\u60A8\u9700\u8981\u7684\u670D\u52D9\uFF0C\u53EF\u76F4\u63A5\u5728\u7533\u8ACB\u5B8C\u5F8C\u8207\u8913\u6BCD\u6E9D\u901A\u3002 </p></div><div class="w-full flex items-center justify-between px-4 py-3"><div class="flex items-center justify-center gap-x-2">`);
      _push(ssrRenderComponent(_component_UIcon, { name: "i-mingcute:warning-line" }, null, _parent));
      _push(`<span class="font-light">\u63D0\u9192\u60A8\uFF0C\u5831\u50F9\u6703\u4F9D\u64DA\u60A8\u7684\u9700\u6C42\u9032\u884C\u8B8A\u52D5</span></div>`);
      _push(ssrRenderComponent(_component_ButtonPrimary, {
        type: "submit",
        label: "\u4E0B\u4E00\u6B65\u6309\u9215",
        disabled: unref(isSubmittingDisabled),
        class: "min-w-32 text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u50C5\u5269\u4E00\u6B65\u9A5F `);
          } else {
            return [
              createTextVNode(" \u50C5\u5269\u4E00\u6B65\u9A5F ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form>`);
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PetSitter/Modal/Form/First.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const useReservationSecondForm = (submitFn, submitErrorFn) => {
  const isSubmittingDisabled = shallowRef(false);
  const validationSchema = toTypedSchema(reservationSecondStepSchema);
  const initialValues = {
    phone: "",
    message: ""
  };
  const { handleSubmit, isSubmitting, resetForm, errors } = useForm({
    validationSchema,
    initialValues
  });
  const formSubmit = handleSubmit(
    useThrottleFn(async (values) => {
      isSubmittingDisabled.value = true;
      const isSuccess = await submitFn(values);
      if (!isSuccess && submitErrorFn) {
        submitErrorFn();
      }
      isSubmittingDisabled.value = false;
    }, 800)
  );
  const { value: phone } = useField("phone");
  const { value: message } = useField("message");
  return {
    phone,
    message,
    formSubmit,
    isSubmitting,
    isSubmittingDisabled,
    resetForm,
    errors
  };
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "Second",
  __ssrInlineRender: true,
  setup(__props) {
    const petSitterStore = usePetSitterStore();
    const { handleSubmitReservation, setCurrentReservationStep } = petSitterStore;
    const {
      phone,
      message,
      formSubmit,
      isSubmittingDisabled,
      errors
    } = useReservationSecondForm(async (values) => {
      const isSuccess = await handleSubmitReservation(values);
      if (isSuccess) {
        setCurrentReservationStep(3);
      }
      return isSuccess;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputCommon = _sfc_main$z;
      const _component_InputTextArea = _sfc_main$B;
      const _component_UIcon = __nuxt_component_0$2;
      const _component_ButtonPrimary = _sfc_main$w;
      _push(`<form${ssrRenderAttrs(_attrs)}><div class="border-b border-gray-300 flex flex-col w-full items-center gap-y-4 px-6 py-4">`);
      _push(ssrRenderComponent(_component_InputCommon, {
        modelValue: unref(phone),
        "onUpdate:modelValue": ($event) => isRef(phone) ? phone.value = $event : null,
        label: "\u806F\u7D61\u96FB\u8A71",
        placeholder: "\u8ACB\u8F38\u5165\u96FB\u8A71\u865F\u78BC(ex: 0912345678)",
        disabled: unref(isSubmittingDisabled),
        required: "",
        class: "w-full",
        "error-message": unref(errors).phone
      }, null, _parent));
      _push(`<div class="w-full text-sm text-gray-300 mt-[-0.5rem]"> \u6B64\u8CC7\u6599\u50C5\u7528\u65BC\u670D\u52D9\u9700\u6C42\uFF0C\u4E0D\u6703\u7528\u65BC\u4EFB\u4F55\u5176\u4ED6\u7528\u9014\u3002 </div>`);
      _push(ssrRenderComponent(_component_InputTextArea, {
        modelValue: unref(message),
        "onUpdate:modelValue": ($event) => isRef(message) ? message.value = $event : null,
        label: "\u7D66\u8913\u6BCD\u7684\u8A0A\u606F",
        placeholder: "\u5982\u679C\u6709\u4EC0\u9EBC\u7279\u5225\u9700\u8981\u5BF5\u7269\u4FDD\u59C6\u6CE8\u610F\u7684\u90FD\u53EF\u4EE5\u7559\u8A00\uFF0C\u8B1D\u8B1D\u3002",
        required: "",
        class: "w-full",
        disabled: unref(isSubmittingDisabled),
        "show-limit": 200,
        "error-message": unref(errors).message
      }, null, _parent));
      _push(`</div><div class="w-full flex items-center justify-between px-4 py-3"><div class="flex items-center justify-center gap-x-2">`);
      _push(ssrRenderComponent(_component_UIcon, { name: "i-mingcute:warning-line" }, null, _parent));
      _push(`<span class="font-light">\u63D0\u9192\u60A8\uFF0C\u5831\u50F9\u6703\u4F9D\u64DA\u60A8\u7684\u9700\u6C42\u9032\u884C\u8B8A\u52D5</span></div>`);
      _push(ssrRenderComponent(_component_ButtonPrimary, {
        type: "submit",
        label: "\u767B\u5165\u6309\u9215",
        disabled: unref(isSubmittingDisabled),
        class: "min-w-32 text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u5B8C\u6210\u9810\u7D04\u55AE `);
          } else {
            return [
              createTextVNode(" \u5B8C\u6210\u9810\u7D04\u55AE ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form>`);
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PetSitter/Modal/Form/Second.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "Finish",
  __ssrInlineRender: true,
  props: {
    name: {}
  },
  setup(__props) {
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonOutline = _sfc_main$C;
      const _component_ButtonPrimary = _sfc_main$w;
      _push(`<div${ssrRenderAttrs(_attrs)}><article class="border-b border-gray-300 flex flex-col w-full items-center gap-y-4 px-6 py-4"><h3>\u611F\u8B1D\u60A8\u7684\u9810\u7D04\uFF01</h3><p class="text-center"> \u9810\u7D04\u55AE\u8A73\u60C5\u5DF2\u50B3\u9001\u81F3\u60A8\u7684\u4FE1\u7BB1\u5167\uFF0C <span class="text-orange-600">${ssrInterpolate(_ctx.name)}</span> \u8913\u6BCD\u5C07\u76E1\u5FEB\u56DE\u8986\u60A8\u7684\u9810\u7D04\uFF0C\u8ACB\u7559\u610F\u60A8\u7684\u624B\u6A5F\uFF0C\u611F\u8B1D\u3002 </p></article><div class="w-full flex items-center justify-between gap-x-4 px-4 py-3">`);
      _push(ssrRenderComponent(_component_ButtonOutline, {
        label: "\u7E7C\u7E8C\u9810\u7D04\u6309\u9215",
        class: "border border-orange-600 w-1/2 flex items-center justify-center rounded-xl text-orange-600",
        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(unref(localePath)("petSitters"))
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u7E7C\u7E8C\u9810\u7D04 `);
          } else {
            return [
              createTextVNode(" \u7E7C\u7E8C\u9810\u7D04 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ButtonPrimary, {
        label: "\u67E5\u770B\u9810\u7D04\u55AE\u6309\u9215",
        class: "w-1/2 text-white",
        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(unref(localePath)("member-appointment"))
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u67E5\u770B\u9810\u7D04\u55AE `);
          } else {
            return [
              createTextVNode(" \u67E5\u770B\u9810\u7D04\u55AE ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PetSitter/Modal/Finish.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "Reservation",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    name: {},
    photoUrl: {}
  }, {
    "modelValue": { type: Boolean, ...{ default: false } },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const petSitterStore = usePetSitterStore();
    const { currentReservationStep } = storeToRefs(petSitterStore);
    const isShow = useModel(__props, "modelValue");
    const backGroundImage = computed(() => `background-image: url('${__props.photoUrl}')`);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = __nuxt_component_0$3;
      const _component_ButtonModalClose = __nuxt_component_1;
      const _component_PetSitterModalFormFirst = _sfc_main$l;
      const _component_PetSitterModalFormSecond = _sfc_main$k;
      const _component_PetSitterModalFinish = _sfc_main$j;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        modelValue: isShow.value,
        "onUpdate:modelValue": ($event) => isShow.value = $event
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col items-center justify-center"${_scopeId}>`);
            if (unref(currentReservationStep) !== 3) {
              _push2(`<div class="w-full border-b border-gray-300 flex items-center justify-between px-6 py-4"${_scopeId}><div class="flex items-center justify-center gap-x-4"${_scopeId}><div class="aspect-square w-12 rounded-full bg-cover bg-center bg-no-repeat" style="${ssrRenderStyle(unref(backGroundImage))}"${_scopeId}></div><div class="flex flex-col items-start justify-around"${_scopeId}><h3 class="text-lg font-medium"${_scopeId}> \u9810\u7D04\u7533\u8ACB </h3><p class="text-sm text-gray-300"${_scopeId}> Step ${ssrInterpolate(unref(currentReservationStep))}/2 </p></div></div>`);
              _push2(ssrRenderComponent(_component_ButtonModalClose, {
                onClick: ($event) => isShow.value = false
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(currentReservationStep) === 1) {
              _push2(ssrRenderComponent(_component_PetSitterModalFormFirst, { class: "w-full" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(currentReservationStep) === 2) {
              _push2(ssrRenderComponent(_component_PetSitterModalFormSecond, { class: "w-full" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(currentReservationStep) === 3) {
              _push2(ssrRenderComponent(_component_PetSitterModalFinish, {
                class: "w-full",
                name: _ctx.name
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col items-center justify-center" }, [
                unref(currentReservationStep) !== 3 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "w-full border-b border-gray-300 flex items-center justify-between px-6 py-4"
                }, [
                  createVNode("div", { class: "flex items-center justify-center gap-x-4" }, [
                    createVNode("div", {
                      class: "aspect-square w-12 rounded-full bg-cover bg-center bg-no-repeat",
                      style: unref(backGroundImage)
                    }, null, 4),
                    createVNode("div", { class: "flex flex-col items-start justify-around" }, [
                      createVNode("h3", { class: "text-lg font-medium" }, " \u9810\u7D04\u7533\u8ACB "),
                      createVNode("p", { class: "text-sm text-gray-300" }, " Step " + toDisplayString(unref(currentReservationStep)) + "/2 ", 1)
                    ])
                  ]),
                  createVNode(_component_ButtonModalClose, {
                    onClick: ($event) => isShow.value = false
                  }, null, 8, ["onClick"])
                ])) : createCommentVNode("", true),
                unref(currentReservationStep) === 1 ? (openBlock(), createBlock(_component_PetSitterModalFormFirst, {
                  key: 1,
                  class: "w-full"
                })) : createCommentVNode("", true),
                unref(currentReservationStep) === 2 ? (openBlock(), createBlock(_component_PetSitterModalFormSecond, {
                  key: 2,
                  class: "w-full"
                })) : createCommentVNode("", true),
                unref(currentReservationStep) === 3 ? (openBlock(), createBlock(_component_PetSitterModalFinish, {
                  key: 3,
                  class: "w-full",
                  name: _ctx.name
                }, null, 8, ["name"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PetSitter/Modal/Reservation.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "PersonalSection",
  __ssrInlineRender: true,
  props: {
    name: {},
    photoUrl: {},
    isLike: { type: Boolean, default: false },
    rating: { default: 0 },
    commentCount: { default: 0 }
  },
  setup(__props) {
    const route = useRoute();
    const petSitterStore = usePetSitterStore();
    const { handleLikeThisPetSitter, resetTempReservation, resetCurrentReservationStep } = petSitterStore;
    const isShowMessage = shallowRef(false);
    const personalInfo = useTemplateRef("personalInfo");
    const isShowReservationModal = shallowRef(false);
    const { bottom: bottomOfPersonInfoY } = useElementBounding(personalInfo);
    const useWindowSharableScroll = createSharedComposable(useWindowScroll);
    const { y: windowY } = useWindowSharableScroll();
    const backGroundImage = computed(() => `background-image: url('${__props.photoUrl}')`);
    const isShowHiddenPersonalInfo = computed(() => {
      return windowY.value > bottomOfPersonInfoY.value;
    });
    const addToFavorate = async () => {
      const id = Number(route.params.id);
      if (Number.isNaN(id))
        return false;
      const result = handleLikeThisPetSitter(id, !__props.isLike);
      if (!result)
        return false;
      isShowMessage.value = true;
      setTimeout(() => {
        isShowMessage.value = false;
      }, 2e3);
      return result;
    };
    const startReservation = () => {
      isShowReservationModal.value = true;
    };
    watch(isShowReservationModal, (isShowReservation) => {
      if (isShowReservation)
        return;
      resetCurrentReservationStep();
      resetTempReservation();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonUtilsLikeSwitcher = _sfc_main$v;
      const _component_UIcon = __nuxt_component_0$2;
      const _component_ButtonPrimary = _sfc_main$w;
      const _component_PetSitterPersonalSectionFixed = _sfc_main$s;
      const _component_ModalStatus = _sfc_main$D;
      const _component_PetSitterModalReservation = _sfc_main$i;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "personalInfo",
        ref: personalInfo,
        class: "flex items-stretch gap-x-4"
      }, _attrs))} data-v-8958e604><div class="w-1/3 aspect-square rounded-full bg-cover bg-center bg-no-repeat" data-testid="round" style="${ssrRenderStyle(unref(backGroundImage))}" data-v-8958e604></div><div class="w-2/3 flex flex-col items-start justify-around" data-v-8958e604><div class="flex items-center gap-x-4" data-v-8958e604><h2 class="text-xl font-medium" data-v-8958e604>${ssrInterpolate(_ctx.name)}</h2>`);
      _push(ssrRenderComponent(_component_ButtonUtilsLikeSwitcher, {
        class: "flex items-center justify-center",
        "is-like": _ctx.isLike,
        onClick: addToFavorate
      }, null, _parent));
      _push(`</div><div data-v-8958e604>`);
      _push(ssrRenderComponent(_component_UIcon, { name: "i-openmoji:star" }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.rating)} (${ssrInterpolate(_ctx.commentCount)}\u5247\u8A55\u8AD6) </div>`);
      _push(ssrRenderComponent(_component_ButtonPrimary, {
        class: "w-full text-white",
        label: "\u9810\u7D04\u670D\u670D\u6309\u9215",
        onClick: startReservation
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u9810\u7D04\u670D\u52D9 `);
          } else {
            return [
              createTextVNode(" \u9810\u7D04\u670D\u52D9 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(isShowHiddenPersonalInfo)) {
        _push(ssrRenderComponent(_component_PetSitterPersonalSectionFixed, {
          name: _ctx.name,
          "photo-url": _ctx.photoUrl,
          "is-like": _ctx.isLike,
          rating: _ctx.rating,
          "comment-count": _ctx.commentCount,
          "onUpdate:addToFavorate": addToFavorate,
          "onUpdate:startReservation": startReservation
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_ModalStatus, {
        modelValue: unref(isShowMessage),
        "onUpdate:modelValue": ($event) => isRef(isShowMessage) ? isShowMessage.value = $event : null,
        msg: _ctx.isLike ? "\u5DF2\u6536\u85CF\u8913\u6BCD" : "\u5DF2\u53D6\u6D88\u6536\u85CF"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-lucide:circle-check-big",
              class: "text-3xl text-green-500"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "i-lucide:circle-check-big",
                class: "text-3xl text-green-500"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_PetSitterModalReservation, {
        modelValue: unref(isShowReservationModal),
        "onUpdate:modelValue": ($event) => isRef(isShowReservationModal) ? isShowReservationModal.value = $event : null,
        "photo-url": _ctx.photoUrl,
        name: _ctx.name
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PetSitter/PersonalSection.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-8958e604"]]);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "PetIcon",
  __ssrInlineRender: true,
  props: {
    icon: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_0$2;
      _push(`<!--[-->`);
      if (_ctx.icon === unref(PetType).Dog) {
        _push(ssrRenderComponent(_component_UIcon, { name: "i-ph:dog-bold" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.icon === unref(PetType).Cat) {
        _push(ssrRenderComponent(_component_UIcon, { name: "i-ph:cat-bold" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.icon === unref(PetType).Bird) {
        _push(ssrRenderComponent(_component_UIcon, { name: "i-ph:bird-bold" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.icon === unref(PetType).Rabbit) {
        _push(ssrRenderComponent(_component_UIcon, { name: "i-ph:rabbit-bold" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.icon === unref(PetType).Mouse) {
        _push(ssrRenderComponent(_component_UIcon, { name: "i-game-icons:mouse" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PetSitter/PetIcon.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "ExtraService",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    extraService: { default: () => [] }
  }, {
    "modelValue": { type: Boolean, ...{ default: false } },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const isShow = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = __nuxt_component_0$3;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        modelValue: isShow.value,
        "onUpdate:modelValue": ($event) => isShow.value = $event
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<article class="flex flex-col items-center justify-center"${_scopeId}><div class="w-full flex items-center justify-between px-6 py-4 border-b border-gray-300"${_scopeId}><h3 class="text-xl font-medium"${_scopeId}> \u984D\u5916\u8CBB\u7528 </h3><button class="aspect-square w-6 flex items-center justify-center rounded-full bg-gray-100"${_scopeId}> \xD7 </button></div><div class="flex flex-col w-full items-center gap-y-4 px-6 py-4"${_scopeId}><h4 class="w-full"${_scopeId}> \u984D\u5916\u670D\u52D9 </h4><!--[-->`);
            ssrRenderList(_ctx.extraService, (pet) => {
              _push2(`<div class="w-full flex flex-col"${_scopeId}><h5${_scopeId}>${ssrInterpolate(unref(petNameMapping)[pet.petType])}</h5><!--[-->`);
              ssrRenderList(pet.extraServiceList, (item) => {
                _push2(`<div class="w-full flex items-center justify-between text-gray-600 font-light"${_scopeId}><span${_scopeId}>${ssrInterpolate(item.name)}</span><span${_scopeId}> $${ssrInterpolate(item.price)}</span></div>`);
              });
              _push2(`<!--]--></div>`);
            });
            _push2(`<!--]--></div></article>`);
          } else {
            return [
              createVNode("article", { class: "flex flex-col items-center justify-center" }, [
                createVNode("div", { class: "w-full flex items-center justify-between px-6 py-4 border-b border-gray-300" }, [
                  createVNode("h3", { class: "text-xl font-medium" }, " \u984D\u5916\u8CBB\u7528 "),
                  createVNode("button", {
                    class: "aspect-square w-6 flex items-center justify-center rounded-full bg-gray-100",
                    onClick: ($event) => isShow.value = false
                  }, " \xD7 ", 8, ["onClick"])
                ]),
                createVNode("div", { class: "flex flex-col w-full items-center gap-y-4 px-6 py-4" }, [
                  createVNode("h4", { class: "w-full" }, " \u984D\u5916\u670D\u52D9 "),
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.extraService, (pet) => {
                    return openBlock(), createBlock("div", {
                      key: pet.petType,
                      class: "w-full flex flex-col"
                    }, [
                      createVNode("h5", null, toDisplayString(unref(petNameMapping)[pet.petType]), 1),
                      (openBlock(true), createBlock(Fragment, null, renderList(pet.extraServiceList, (item) => {
                        return openBlock(), createBlock("div", {
                          key: item.id,
                          class: "w-full flex items-center justify-between text-gray-600 font-light"
                        }, [
                          createVNode("span", null, toDisplayString(item.name), 1),
                          createVNode("span", null, " $" + toDisplayString(item.price), 1)
                        ]);
                      }), 128))
                    ]);
                  }), 128))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PetSitter/Modal/ExtraService.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "PetSizeBoard",
  __ssrInlineRender: true,
  props: {
    pet: {}
  },
  setup(__props) {
    const isShowExtraServiceModal = shallowRef(false);
    const isProvideExtraService = computed(() => {
      return __props.pet.some((item) => !!item.extraServiceList && item.extraServiceList.length > 0);
    });
    const showExtraServiceModal = () => {
      isShowExtraServiceModal.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonOutline = _sfc_main$C;
      const _component_PetSitterModalExtraService = _sfc_main$f;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap items-stretch gap-4 py-3" }, _attrs))}>`);
      if (unref(isProvideExtraService)) {
        _push(ssrRenderComponent(_component_ButtonOutline, {
          label: "\u6AA2\u8996\u984D\u5916\u8CBB\u7528\u6309\u9215",
          class: "border border-orange-600 w-full flex items-center justify-center rounded-xl text-orange-600",
          onClick: showExtraServiceModal
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u6AA2\u8996\u984D\u5916\u8CBB\u7528 `);
            } else {
              return [
                createTextVNode(" \u6AA2\u8996\u984D\u5916\u8CBB\u7528 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_PetSitterModalExtraService, {
        modelValue: unref(isShowExtraServiceModal),
        "onUpdate:modelValue": ($event) => isRef(isShowExtraServiceModal) ? isShowExtraServiceModal.value = $event : null,
        "extra-service": _ctx.pet
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PetSitter/PetSizeBoard.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "MainService",
  __ssrInlineRender: true,
  props: {
    iconName: { default: () => IconNameStatus.Sitter },
    name: {},
    description: { default: "" },
    price: {},
    pet: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PetSitterServiceIcon = _sfc_main$E;
      const _component_UTooltip = __nuxt_component_1$1;
      const _component_PetSitterPetIcon = _sfc_main$g;
      const _component_PetSitterPetSizeBoard = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="w-full flex items-center justify-between"><div class="w-1/2 flex items-center gap-x-4">`);
      _push(ssrRenderComponent(_component_PetSitterServiceIcon, {
        active: "",
        class: "aspect-square h-full text-3xl",
        "icon-name": _ctx.iconName
      }, null, _parent));
      _push(`<div class="flex flex-col items-start"><div class="flex items-center gap-x-2"><h3 class="font-bold">${ssrInterpolate(_ctx.name)}</h3><!--[-->`);
      ssrRenderList(_ctx.pet, (item) => {
        var _a;
        _push(ssrRenderComponent(_component_UTooltip, {
          ui: {
            base: `[@media(pointer:coarse)]:hidden h-[${8 + ((_a = item.petSizeList) != null ? _a : []).length * 4}px] px-4 py-3 text-base font-normal relative`
          },
          key: item.petType
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_PetSitterPetIcon, {
                icon: item.petType
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_PetSitterPetIcon, {
                  icon: item.petType
                }, null, 8, ["icon"])
              ];
            }
          }),
          text: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b;
            if (_push2) {
              _push2(`<div class="flex flex-col items-start justify-start"${_scopeId}><span class="text-lg font-bold"${_scopeId}>${ssrInterpolate(unref(petNameMapping)[item.petType])}</span><!--[-->`);
              ssrRenderList((_a2 = item.petSizeList) != null ? _a2 : [], (size) => {
                _push2(`<span class="text-gray-400"${_scopeId}>${ssrInterpolate(unref(petSizeDetailName)[size])}</span>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col items-start justify-start" }, [
                  createVNode("span", { class: "text-lg font-bold" }, toDisplayString(unref(petNameMapping)[item.petType]), 1),
                  (openBlock(true), createBlock(Fragment, null, renderList((_b = item.petSizeList) != null ? _b : [], (size) => {
                    return openBlock(), createBlock("span", {
                      class: "text-gray-400",
                      key: size
                    }, toDisplayString(unref(petSizeDetailName)[size]), 1);
                  }), 128))
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      if (_ctx.description) {
        _push(`<span class="text-gray-400 sm">${ssrInterpolate(_ctx.description)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="w-1/2 text-sm text-right flex items-center justify-end"><span class="text-2xl font-medium">$${ssrInterpolate(_ctx.price)}</span><span> /\u6B21</span></div></div>`);
      _push(ssrRenderComponent(_component_PetSitterPetSizeBoard, {
        class: "w-full",
        pet: _ctx.pet
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PetSitter/Card/MainService.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "Region",
  __ssrInlineRender: true,
  props: {
    title: {},
    content: {}
  },
  setup(__props) {
    const isShowContent = shallowRef(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-between" }, _attrs))}><button${ssrRenderAttr("aria-label", _ctx.title)} class="w-full cursor-pointer select-none items-center rounded-md border border-solid border-[#FFCEC4] px-4 py-2 bg-[#FEF9F6]"><div class="w-full flex items-center justify-between"><span class="text-[#E05B21]">${ssrInterpolate(_ctx.title)}</span>`);
      if (unref(isShowContent)) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons:chevron-down-16-solid",
          class: "h-4 md:h-6 w-4 md:w-6 text-[#E05B21]"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!unref(isShowContent)) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: "heroicons:chevron-up-16-solid",
          class: "h-4 md:h-6 w-4 md:w-6 text-[#E05B21]"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></button><div style="${ssrRenderStyle(unref(isShowContent) ? null : { display: "none" })}" class="w-full whitespace-pre-line break-all px-3 py-2 text-sm">${ssrInterpolate(_ctx.content)}</div></div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PetSitter/Accordion/Region.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const useReservationCalendar = (useCalendar2, unavailableTimeList) => {
  const { getCalendar } = useCalendar2((calendarDate) => {
    return {
      date: calendarDate
    };
  });
  const weekNames = ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"];
  const switcher = shallowRef("date");
  const now = /* @__PURE__ */ new Date();
  const boardShownYear = shallowRef(now.getFullYear());
  const boardShownMonth = shallowRef(now.getMonth() + 1);
  const calendar = ref([]);
  const isShowClockSelector = shallowRef(false);
  const selectedClockMessage = shallowRef("");
  const isClockMessageEmpty = shallowRef(false);
  const isBoardYearToday = computed(() => {
    return boardShownYear.value === useNow().value.getFullYear();
  });
  const isTodayInBoardMonthRange = computed(() => {
    if (!isBoardYearToday.value)
      return "none";
    const todayMonth = useNow().value.getMonth() + 1;
    if (boardShownMonth.value === todayMonth - 1)
      return "prev";
    if (boardShownMonth.value === todayMonth)
      return "current";
    if (boardShownMonth.value === todayMonth + 1)
      return "next";
    return "none";
  });
  const boardShownIndicator = computed(() => {
    return `${boardShownYear.value}\u5E74  ${boardShownMonth.value}\u6708`;
  });
  const triggerCalendarRender = () => {
    return getCalendar(
      boardShownMonth.value,
      boardShownYear.value,
      (input) => {
        input.id = crypto.randomUUID();
        if (checkShowNowTag(input, "prev")) {
          input.isNow = true;
        }
        input.isActive = !isPreviousDateNotActive(input.date);
        input.isBlur = "prev";
        return input;
      },
      (input) => {
        input.id = crypto.randomUUID();
        if (checkShowNowTag(input, "current")) {
          input.isNow = true;
        }
        input.isActive = !isCurrentDateNotActive(input.date);
        return input;
      },
      (input) => {
        input.id = crypto.randomUUID();
        if (checkShowNowTag(input, "next")) {
          input.isNow = true;
        }
        input.isActive = !isNextDateNotActive(input.date);
        input.isBlur = "next";
        return input;
      }
    );
  };
  const isCurrentDateNotActive = (currentDate) => {
    const currentMonth = boardShownMonth.value;
    const dateListCluster = unavailableTimeList.find((item) => item.month === currentMonth);
    if (!dateListCluster)
      return false;
    return dateListCluster.day.includes(currentDate);
  };
  const isPreviousDateNotActive = (currentDate) => {
    const currentMonth = boardShownMonth.value - 1;
    const dateListCluster = unavailableTimeList.find((item) => item.month === currentMonth);
    if (!dateListCluster)
      return false;
    return dateListCluster.day.includes(currentDate);
  };
  const isNextDateNotActive = (currentDate) => {
    const currentMonth = boardShownMonth.value + 1;
    const dateListCluster = unavailableTimeList.find((item) => item.month === currentMonth);
    if (!dateListCluster)
      return false;
    return dateListCluster.day.includes(currentDate);
  };
  const refreshCalendar = () => {
    calendar.value = triggerCalendarRender();
  };
  const checkShowNowTag = (input, monthRageTarget) => {
    return monthRageTarget === isTodayInBoardMonthRange.value && input.date === useNow().value.getDate();
  };
  const dateTimeControl = (control) => {
    control === "+" && setBoardNextMonth();
    control === "-" && setBoardPreviousMonth();
    control === "++" && setBoardNextYear();
    control === "--" && setBoardPreviousYear();
  };
  const setBoardShownYearButNotRefresh = (value) => {
    boardShownYear.value = value;
  };
  const setBoardShownMonthButNotRefresh = (value) => {
    boardShownMonth.value = value;
  };
  const setBoardNextYear = () => {
    boardShownYear.value++;
    refreshCalendar();
  };
  const setBoardPreviousYear = () => {
    boardShownYear.value--;
    refreshCalendar();
  };
  const setBoardNextMonth = () => {
    if (boardShownMonth.value === 12) {
      boardShownMonth.value = 1;
      boardShownYear.value++;
      refreshCalendar();
      return;
    }
    boardShownMonth.value++;
    refreshCalendar();
  };
  const setBoardPreviousMonth = () => {
    if (boardShownMonth.value === 1) {
      boardShownMonth.value = 12;
      boardShownYear.value--;
      refreshCalendar();
      return;
    }
    boardShownMonth.value--;
    refreshCalendar();
  };
  const toggleClockSelector = () => {
    isShowClockSelector.value = !isShowClockSelector.value;
  };
  const receiveMessageFromClockSelector = (message) => {
    changeClockMessageEmptyStatus(false);
    selectedClockMessage.value = message;
  };
  const changeClockMessageEmptyStatus = (status) => {
    isClockMessageEmpty.value = status;
  };
  return {
    // const::
    weekNames,
    // refs::
    switcher,
    boardShownYear,
    boardShownMonth,
    calendar,
    // selectedDateTime,
    isShowClockSelector,
    selectedClockMessage,
    isClockMessageEmpty,
    // computed::
    boardShownIndicator,
    // methods::
    refreshCalendar,
    dateTimeControl,
    toggleClockSelector,
    receiveMessageFromClockSelector,
    changeClockMessageEmptyStatus,
    setBoardShownYearButNotRefresh,
    setBoardShownMonthButNotRefresh
  };
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "ReservationCalendar",
  __ssrInlineRender: true,
  props: {
    unavailableTimeList: {}
  },
  setup(__props) {
    const {
      weekNames,
      boardShownYear,
      boardShownMonth,
      calendar,
      dateTimeControl,
      refreshCalendar
    } = useReservationCalendar(useCalendar, __props.unavailableTimeList);
    refreshCalendar();
    const now = /* @__PURE__ */ new Date();
    const isDisabledPrevious = computed(() => {
      return now.getMonth() === boardShownMonth.value - 1;
    });
    const isDisabledNext = computed(() => {
      return now.getMonth() + 2 === boardShownMonth.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputDateTimeMonthYearControlPanel = _sfc_main$r;
      const _component_InputDateTimeWeekList = _sfc_main$q;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border border-gray-300 w-full rounded-xl bg-white px-3 py-2" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_InputDateTimeMonthYearControlPanel, {
        "is-disable-previous-month": unref(isDisabledPrevious),
        "is-disable-next-month": unref(isDisabledNext),
        "is-disabled-year": "",
        "onUpdate:controlMonthOrYear": unref(dateTimeControl)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(unref(boardShownYear))}\u5E74${ssrInterpolate(unref(boardShownMonth))}\u6708 </span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(unref(boardShownYear)) + "\u5E74" + toDisplayString(unref(boardShownMonth)) + "\u6708 ", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_InputDateTimeWeekList, { "week-name-list": unref(weekNames) }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(calendar), (weeksItem) => {
        _push(`<section class="mb-2 flex select-none items-center font-light"><!--[-->`);
        ssrRenderList(weeksItem, (item) => {
          _push(`<div class="w-1/7 flex items-center justify-center">`);
          if (item.isActive) {
            _push(`<div class="h-7 w-full flex items-center justify-center text-white"><span class="aspect-square w-7 flex items-center justify-center rounded-full bg-orange-600/50">${ssrInterpolate(item.date)}</span></div>`);
          } else {
            _push(`<div class="h-7 w-full flex items-center justify-center">`);
            if (item.isNow) {
              _push(`<span class="border border-orange-500 aspect-square w-7 flex items-center justify-center rounded-full hover:bg-orange-300/50">${ssrInterpolate(item.date)}</span>`);
            } else {
              _push(`<span class="${ssrRenderClass([{
                "text-[#C0C4CC]": item.isBlur
              }, "hover:bg-orange-300/50 aspect-square w-7 flex items-center justify-center rounded-full"])}">${ssrInterpolate(item.date)}</span>`);
            }
            _push(`</div>`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></section>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PetSitter/ReservationCalendar.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "ServiceSection",
  __ssrInlineRender: true,
  props: {
    serviceList: {},
    serviceRegionCodeList: {},
    unavailableTimeList: {}
  },
  setup(__props) {
    const petSitterStore = usePetSitterStore();
    const { setCurrentSelectedService } = petSitterStore;
    const { serviceTypeOptionList, currentSelectedService } = storeToRefs(petSitterStore);
    const selectedService = computed({
      get: () => currentSelectedService.value,
      set: (newValue) => {
        setCurrentSelectedService(newValue);
      }
    });
    const getCityTitleString = (singleRegion) => {
      const cityObject = cities.find((item) => item.code === singleRegion.cityCode);
      return !cityObject ? "" : cityObject.city;
    };
    const getCityCombineString = (singleRegion) => {
      const cityObject = cities.find((item) => item.code === singleRegion.cityCode);
      if (!cityObject)
        return "";
      const totalList = cityObject.districts;
      const selectedList = singleRegion.distructCodeList;
      const selectedLength = selectedList.length;
      const totalLength = totalList.length;
      if (selectedLength > totalLength)
        return "";
      if (totalLength >= 5 && selectedLength >= 4) {
        return highEfficientGetDistructNameString(selectedList, totalList);
      }
      return simpleGetDistructNameString(selectedList, totalList);
    };
    const simpleGetDistructNameString = (selectedList, totalList) => {
      const result = [];
      selectedList.forEach((selectedItem) => {
        const currentObject = totalList.find((item) => item.code === selectedItem);
        if (currentObject) {
          result.push(currentObject.name);
        }
      });
      return result.join(",");
    };
    const highEfficientGetDistructNameString = (selectedList, totalList) => {
      const sortedCodeList = selectedList.toSorted();
      let i = 0;
      let j = 0;
      const result = [];
      while (i < sortedCodeList.length && j < totalList.length) {
        if (sortedCodeList[i] === totalList[j].code) {
          result.push(totalList[j].name);
          i++;
        }
        j++;
      }
      return result.join(",");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PetSitterCardMainService = _sfc_main$d;
      const _component_PetSitterAccordionRegion = _sfc_main$c;
      const _component_InputSelect = _sfc_main$x;
      const _component_PetSitterReservationCalendar = _sfc_main$b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-start gap-y-4 rounded-xl bg-white px-4 py-3" }, _attrs))}><div class="text-gray-600"> \u63D0\u4F9B\u7684\u670D\u52D9 </div><!--[-->`);
      ssrRenderList(_ctx.serviceList, (item) => {
        _push(ssrRenderComponent(_component_PetSitterCardMainService, mergeProps({
          key: item.id,
          class: "w-full",
          ref_for: true
        }, item), null, _parent));
      });
      _push(`<!--]--><div class="w-full h-[2px] bg-gray-200"></div><div>\u53EF\u670D\u52D9\u5340\u57DF</div><div class="w-full space-y-2"><!--[-->`);
      ssrRenderList(_ctx.serviceRegionCodeList, (item) => {
        _push(ssrRenderComponent(_component_PetSitterAccordionRegion, {
          key: item.cityCode,
          title: getCityTitleString(item),
          content: getCityCombineString(item)
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="w-full h-[2px] bg-gray-200"></div><div>\u53EF\u9810\u7D04\u6642\u9593</div>`);
      _push(ssrRenderComponent(_component_InputSelect, {
        modelValue: unref(selectedService),
        "onUpdate:modelValue": ($event) => isRef(selectedService) ? selectedService.value = $event : null,
        label: "\u53EF\u9810\u7D04\u6642\u9593",
        "is-show-label": false,
        options: unref(serviceTypeOptionList),
        "is-full-size": "",
        class: "w-full"
      }, null, _parent));
      _push(ssrRenderComponent(_component_PetSitterReservationCalendar, { "unavailable-time-list": _ctx.unavailableTimeList }, null, _parent));
      _push(`<div class="flex items-center gap-x-2"><div class="h-4 w-4 rounded-full bg-orange-600/50"></div><span>\u53EF\u9810\u7D04\u65E5\u671F</span></div></div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PetSitter/ServiceSection.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "CertificateBadge",
  __ssrInlineRender: true,
  props: {
    title: {},
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-start gap-x-2 md:gap-x-4" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<div class="flex flex-col items-start gap-y-1 md:gap-y-2"><p class="text-md md:text-xl font-medium">${ssrInterpolate(_ctx.title)}</p><p class="text-orange-600 text-sm">${ssrInterpolate(_ctx.content)}</p></div></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PetSitter/CertificateBadge.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var SourceMediaType = /* @__PURE__ */ ((SourceMediaType2) => {
  SourceMediaType2[SourceMediaType2["Unknown"] = 0] = "Unknown";
  SourceMediaType2[SourceMediaType2["Image"] = 1] = "Image";
  SourceMediaType2[SourceMediaType2["Video"] = 2] = "Video";
  return SourceMediaType2;
})(SourceMediaType || {});
const imageExtension = [
  "jpg",
  "jpeg",
  "png",
  "gif",
  "bmp",
  "webp",
  "svg",
  "avif"
];
const videoExtension = [
  "mp4",
  "mov",
  "avi",
  "wmv",
  "flv",
  "mkv",
  "webm",
  "ogg"
];
zod.object({
  id: zod.string(),
  extension: zod.nativeEnum(SourceMediaType),
  url: zod.string()
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "MediaVideoOrImage",
  __ssrInlineRender: true,
  props: {
    url: {},
    type: { default: () => SourceMediaType.Unknown },
    showImply: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$F;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden" }, _attrs))}>`);
      if (_ctx.type === unref(SourceMediaType).Video) {
        _push(ssrRenderComponent(_component_NuxtImg, {
          class: "w-full object-cover object-center",
          src: _ctx.url
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.type === unref(SourceMediaType).Video) {
        _push(`<video class="object-cover object-center"${ssrRenderAttr("src", _ctx.url)}><track default kind="captions"></video>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.showImply) {
        _push(`<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex transform items-center justify-center">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MediaVideoOrImage.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const useMediaUtil = () => {
  const checkMediaType = async (url) => {
    var _a;
    try {
      const extension = (_a = url.split(".").pop()) == null ? void 0 : _a.toLowerCase();
      if (extension) {
        if (imageExtension.findIndex((item) => item === extension) !== -1)
          return SourceMediaType.Image;
        if (videoExtension.findIndex((item) => item === extension) !== -1)
          return SourceMediaType.Video;
      }
      const response = await fetch(url, {
        method: "HEAD"
      });
      const contentType = response.headers.get("content-type");
      if (!contentType)
        return SourceMediaType.Unknown;
      if (contentType.startsWith("image/"))
        return SourceMediaType.Image;
      if (contentType.startsWith("video/"))
        return SourceMediaType.Video;
      return SourceMediaType.Unknown;
    } catch (error) {
      console.error("Error checking media type", error);
      return SourceMediaType.Unknown;
    }
  };
  const convertMediaExtensionType = async (url) => {
    var _a;
    try {
      const extension = (_a = url.split(".").pop()) == null ? void 0 : _a.toLowerCase();
      if (extension) {
        if (imageExtension.findIndex((item) => item === extension) !== -1)
          return { id: useId("$6lalcXwTC7"), extension: SourceMediaType.Image, url };
        if (videoExtension.findIndex((item) => item === extension) !== -1)
          return { id: useId("$UcvHHODhJ6"), extension: SourceMediaType.Video, url };
      }
      const response = await fetch(url, {
        method: "HEAD"
      });
      const contentType = response.headers.get("content-type");
      if (!contentType)
        return { id: useId("$Bwg765evQk"), extension: SourceMediaType.Unknown, url };
      if (contentType.startsWith("image/"))
        return { id: useId("$gVy8CECiaf"), extension: SourceMediaType.Image, url };
      if (contentType.startsWith("video/"))
        return { id: useId("$QpSG4FbG7h"), extension: SourceMediaType.Video, url };
      return { id: useId("$Od1MeKnLiq"), extension: SourceMediaType.Unknown, url };
    } catch (error) {
      console.error("Error checking media type", error);
      return { id: useId("$semMekrq2K"), extension: SourceMediaType.Unknown, url };
    }
  };
  return {
    checkMediaType,
    convertMediaExtensionType
  };
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Media",
  __ssrInlineRender: true,
  props: {
    attachmentUrlList: {}
  },
  setup(__props) {
    const { convertMediaExtensionType } = useMediaUtil();
    const mediaList = ref([]);
    const mainMedia = computed(() => {
      const currentMediaList = mediaList.value;
      if (currentMediaList.length === 0)
        return;
      return currentMediaList[0];
    });
    const restMediaList = computed(() => {
      const currentMediaList = mediaList.value.slice(1, 5);
      if (currentMediaList.length === 0)
        return;
      return currentMediaList;
    });
    const convertAttachToValidMedia = async (mediaUrlList) => {
      const extensionMedia = mediaUrlList.map((url) => convertMediaExtensionType(url));
      return Promise.all(extensionMedia);
    };
    watch(() => __props.attachmentUrlList, async (urlList) => {
      mediaList.value = await convertAttachToValidMedia(urlList);
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MediaVideoOrImage = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center gap-x-4" }, _attrs))}>`);
      if (unref(mainMedia)) {
        _push(ssrRenderComponent(_component_MediaVideoOrImage, {
          class: "w-1/2 rounded-xl",
          url: unref(mainMedia).url,
          type: unref(mainMedia).extension
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(restMediaList)) {
        _push(`<div class="w-1/2 grid grid-cols-2 gap-x-4"><!--[-->`);
        ssrRenderList(unref(restMediaList), (item, index) => {
          _push(ssrRenderComponent(_component_MediaVideoOrImage, {
            key: item.id,
            url: item.url,
            type: item.extension,
            class: "rounded-xl",
            "show-imply": index === unref(restMediaList).length - 1
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="text-white underline"${_scopeId}>\u6AA2\u8996\u6240\u6709\u7167\u7247</span>`);
              } else {
                return [
                  createVNode("span", { class: "text-white underline" }, "\u6AA2\u8996\u6240\u6709\u7167\u7247")
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PetSitter/AboutSection/Media.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "AboutSection",
  __ssrInlineRender: true,
  props: {
    name: {},
    about: { default: "" },
    certificate: {},
    attachmentUrlList: {},
    lineUrl: { default: "" },
    youtubeUrl: { default: "" },
    facebookUrl: { default: "" },
    shareLinkUrl: { default: "" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PetSitterCertificateBadge = _sfc_main$9;
      const _component_UIcon = __nuxt_component_0$2;
      const _component_PetSitterAboutSectionMedia = _sfc_main$7;
      const _component_ButtonUtilsCommunityShare = _sfc_main$G;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-start gap-y-4 rounded-xl bg-white px-6 py-4" }, _attrs))}><h3 class="text-xl font-medium"> \u95DC\u65BC\u8913\u6BCD </h3><p class="whitespace-pre-line text-black/60 leading-loose">${ssrInterpolate(_ctx.about)}</p><div class="border border-gray-300 w-full flex flex-wrap md:flex-nowrap items-center justify-around rounded-xl px-3 md:px-4 py-2 md:py-3 gap-y-2 md:gap-y-0"><div class="w-1/2 md:w-1/4">`);
      _push(ssrRenderComponent(_component_PetSitterCertificateBadge, {
        title: "\u76F8\u95DC\u8B49\u7167",
        content: unref(SpecialPetSitterCertificateName)[_ctx.certificate.specialPet]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              class: "text-xl md:text-2xl",
              name: "i-bx:shield"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UIcon, {
                class: "text-xl md:text-2xl",
                name: "i-bx:shield"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-1/2 md:w-1/4">`);
      _push(ssrRenderComponent(_component_PetSitterCertificateBadge, {
        title: "\u8913\u6BCD\u6E2C\u9A57",
        content: unref(PetSitterCertificateName)[_ctx.certificate.petSitter]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              class: "text-xl md:text-2xl",
              name: "i-fluent:hat-graduation-24-regular"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UIcon, {
                class: "text-xl md:text-2xl",
                name: "i-fluent:hat-graduation-24-regular"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-1/2 md:w-1/4">`);
      _push(ssrRenderComponent(_component_PetSitterCertificateBadge, {
        title: "\u8913\u6BCD\u7D93\u9A57",
        content: `\u5DF2\u5F9E\u4E8B${_ctx.certificate.experienceYear}\u5E74`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              class: "text-xl md:text-2xl",
              name: "i-carbon:badge"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UIcon, {
                class: "text-xl md:text-2xl",
                name: "i-carbon:badge"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-1/2 md:w-1/4">`);
      _push(ssrRenderComponent(_component_PetSitterCertificateBadge, {
        title: "\u8EAB\u4EFD\u8A8D\u8B49",
        content: unref(VerifiedIdentityName)[_ctx.certificate.verifiedIdentity]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              class: "text-xl md:text-2xl",
              name: "i-eva:person-outline"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UIcon, {
                class: "text-xl md:text-2xl",
                name: "i-eva:person-outline"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (_ctx.attachmentUrlList) {
        _push(ssrRenderComponent(_component_PetSitterAboutSectionMedia, { "attachment-url-list": _ctx.attachmentUrlList }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center gap-x-4"><p>\u4FDD\u59C6\u76F8\u95DC\u793E\u7FA4:</p>`);
      _push(ssrRenderComponent(_component_ButtonUtilsCommunityShare, {
        name: _ctx.name,
        "line-link": _ctx.lineUrl,
        "youtube-link": _ctx.youtubeUrl,
        "facebook-link": _ctx.facebookUrl,
        link: _ctx.shareLinkUrl
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PetSitter/AboutSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "RatingBar",
  __ssrInlineRender: true,
  props: {
    percentageRate: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-2 w-full rounded-full bg-[#FFF5F0]" }, _attrs))}>`);
      if (_ctx.percentageRate > 0) {
        _push(`<div class="h-full rounded-full bg-[#FB976E]" style="${ssrRenderStyle(`width: ${_ctx.percentageRate}%`)}"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RatingBar.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "RatingDashboard",
  __ssrInlineRender: true,
  props: {
    rating: {},
    commentCount: {},
    allRate: {}
  },
  setup(__props) {
    const allRateKeyList = computed(() => {
      return Object.keys(__props.allRate).toSorted((a, b) => +b - +a);
    });
    const totalRateCont = computed(() => {
      return Object.values(__props.allRate).reduce((acc, cur) => acc + cur, 0);
    });
    const getPercentage = (total, numerator) => {
      if (typeof numerator === "undefined")
        return 0;
      if (total === 0) {
        console.error("demonitor === 0");
        return 0;
      }
      if (numerator > total) {
        console.error("numerator > total");
        return 0;
      }
      const num = new Decimal(numerator);
      const deNum = new Decimal(total);
      return num.div(deNum).toNumber() * 100;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Rating = _sfc_main$t;
      const _component_RatingBar = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap md:flex-nowrap items-center justify-center gap-y-4 md:gap-x-4 md:gap-y-0 px-2 md:px-6" }, _attrs))}><div class="w-full md:w-1/4 flex flex-col items-center md:items-start">`);
      _push(ssrRenderComponent(_component_Rating, {
        rating: _ctx.rating,
        class: "gap-x-1 text-4xl font-medium"
      }, null, _parent));
      _push(`<span>\u5171\u6709 ${ssrInterpolate(_ctx.commentCount.toLocaleString())} \u5247\u8A55\u8AD6</span></div><div class="w-full md:w-3/4 space-y-1 md:space-y-2"><!--[-->`);
      ssrRenderList(unref(allRateKeyList), (key) => {
        _push(`<div class="w-full flex items-center justify-center gap-x-3">`);
        _push(ssrRenderComponent(_component_Rating, {
          rating: +key
        }, null, _parent));
        _push(ssrRenderComponent(_component_RatingBar, {
          "percentage-rate": getPercentage(unref(totalRateCont), _ctx.allRate[key])
        }, null, _parent));
        _push(`<span>(${ssrInterpolate(_ctx.allRate[key])})</span></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PetSitter/RatingDashboard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CommentSection",
  __ssrInlineRender: true,
  props: {
    rating: {},
    commentCount: {},
    allRate: {},
    discussionList: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PetSitterRatingDashboard = _sfc_main$4;
      const _component_Discussion = _sfc_main$H;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-start gap-y-6 rounded-xl bg-white px-6 py-4" }, _attrs))}><div class="font-medium"> \u8A55\u50F9 (${ssrInterpolate(_ctx.commentCount)}) </div>`);
      _push(ssrRenderComponent(_component_PetSitterRatingDashboard, {
        class: "w-full",
        rating: _ctx.rating,
        "comment-count": _ctx.commentCount,
        "all-rate": _ctx.allRate
      }, null, _parent));
      _push(ssrRenderComponent(_component_Discussion, {
        class: "w-full",
        "discussion-list": _ctx.discussionList
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PetSitter/CommentSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Accordion",
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
      const _component_ButtonPale = _sfc_main$I;
      const _component_UIcon = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-b border-gray-300 flex flex-col items-center justify-between py-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ButtonPale, {
        label: _ctx.title,
        class: ["w-full flex select-none items-center justify-between", { "pb-6": unref(isShowContent) }],
        onClick: toggleShowContent
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-sm md:text-lg"${_scopeId}>${ssrInterpolate(_ctx.title)}</span>`);
            if (unref(isShowContent)) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-minus",
                class: "h-4 md:h-6 w-4 md:w-6"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (!unref(isShowContent)) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-plus",
                class: "h-4 md:h-6 w-4 md:w-6"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("span", { class: "text-sm md:text-lg" }, toDisplayString(_ctx.title), 1),
              unref(isShowContent) ? (openBlock(), createBlock(_component_UIcon, {
                key: 0,
                name: "i-heroicons-minus",
                class: "h-4 md:h-6 w-4 md:w-6"
              })) : createCommentVNode("", true),
              !unref(isShowContent) ? (openBlock(), createBlock(_component_UIcon, {
                key: 1,
                name: "i-heroicons-plus",
                class: "h-4 md:h-6 w-4 md:w-6"
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(isShowContent)) {
        _push(`<div class="whitespace-pre-line text-[#461C08] text-xs md:text-base leading-loose md:leading-normal self-start">${ssrInterpolate(_ctx.content)}</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PetSitter/ServiceQASection/Accordion.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ServiceQASection",
  __ssrInlineRender: true,
  props: {
    qaAccordionList: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PetSitterServiceQASectionAccordion = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-xl bg-white px-4 md:px-6 py-3 md:py-4" }, _attrs))}><div class="text-[#461B09]"> \u670D\u52D9QA </div><!--[-->`);
      ssrRenderList(_ctx.qaAccordionList, (item) => {
        _push(ssrRenderComponent(_component_PetSitterServiceQASectionAccordion, mergeProps({
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PetSitter/ServiceQASection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const petSitterStore = usePetSitterStore();
    const { petSitterDetail } = storeToRefs(petSitterStore);
    const personalSection = useTemplateRef("personalSection");
    const commentSection = useTemplateRef("commentSection");
    const qASection = useTemplateRef("qASection");
    const activeTab = shallowRef(1);
    const useSharableWindowScroll = createSharedComposable(useWindowScroll);
    const { bottom: personalSectionBottom } = useElementBounding(personalSection);
    const { bottom: commentSectionBottom } = useElementBounding(commentSection);
    const { y: windowScrollY } = useSharableWindowScroll({
      behavior: "smooth"
    });
    const { width: windowWidth } = useWindowSize();
    const route = useRoute();
    Number(route.params.id);
    const userInfo = computed(() => {
      const info = petSitterDetail.value.info;
      if (!info) {
        return {
          id: -1,
          name: "",
          about: "",
          photoUrl: "",
          rating: 0,
          commentCount: 0,
          servicePrice: [],
          serviceRegionCodeList: [],
          unavailableTimeList: [],
          petsCertificate: {
            specialPet: SpecialPetSitterCertificateStatus.None,
            petSitter: PetSitterCertificateStatus.None,
            experienceYear: 0,
            verifiedIdentity: VerifiedIdentityStatus.None
          },
          attachmentUrlList: []
        };
      }
      return info;
    });
    const commentInfo = computed(() => {
      const comment = petSitterDetail.value.comment;
      if (!comment) {
        return {
          rating: 0,
          commentCount: 0,
          allRate: {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0
          },
          discussionList: []
        };
      }
      return comment;
    });
    const serviceQAList = computed(() => {
      const qaList = petSitterDetail.value.QA;
      if (!qaList) {
        return [];
      }
      return qaList;
    });
    const tabList = computed(() => {
      return [
        {
          id: 1,
          title: "\u95DC\u65BC\u4FDD\u59C6"
        },
        {
          id: 2,
          title: `\u8A55\u50F9(${commentInfo.value.commentCount})`
        },
        {
          id: 3,
          title: "\u670D\u52D9QA"
        }
      ];
    });
    const handleTabTrigger = (currentTabID) => {
      if (currentTabID === 1) {
        windowScrollY.value = 0;
      }
      const diff = windowWidth.value < 768 ? 104 : 148;
      if (currentTabID === 2) {
        windowScrollY.value = personalSectionBottom.value - diff;
      }
      if (currentTabID === 3) {
        windowScrollY.value = commentSectionBottom.value - diff;
      }
    };
    watch(windowScrollY, (scrollY) => {
      const diff = windowWidth.value < 768 ? 104 : 148;
      if (scrollY < personalSectionBottom.value - diff) {
        activeTab.value = 1;
        return;
      }
      if (scrollY > commentSectionBottom.value - diff) {
        activeTab.value = 3;
        return;
      }
      activeTab.value = 2;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PetSitterPersonalSection = __nuxt_component_0;
      const _component_PetSitterServiceSection = _sfc_main$a;
      const _component_Tabs = _sfc_main$u;
      const _component_PetSitterAboutSection = _sfc_main$6;
      const _component_PetSitterCommentSection = _sfc_main$3;
      const _component_PetSitterServiceQASection = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap md:flex-nowrap items-start gap-y-4 md:gap-x-4 md:gap-y-0 px-8 md:px-12 py-8" }, _attrs))}><div class="w-full md:w-1/3 flex flex-col items-center gap-y-4">`);
      _push(ssrRenderComponent(_component_PetSitterPersonalSection, {
        class: "w-full",
        name: unref(userInfo).name,
        "is-like": unref(userInfo).isLike,
        "photo-url": unref(userInfo).photoUrl,
        rating: unref(userInfo).rating,
        "comment-count": unref(commentInfo).commentCount
      }, null, _parent));
      _push(ssrRenderComponent(_component_PetSitterServiceSection, {
        class: "w-full",
        "service-list": unref(userInfo).servicePrice,
        "service-region-code-list": unref(userInfo).serviceRegionCodeList,
        "unavailable-time-list": unref(userInfo).unavailableTimeList
      }, null, _parent));
      _push(`</div><div class="w-full md:w-2/3 flex flex-col items-start gap-y-4">`);
      _push(ssrRenderComponent(_component_Tabs, {
        modelValue: unref(activeTab),
        "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
        class: "w-full",
        "tab-list": unref(tabList),
        "onUpdate:triggerTab": handleTabTrigger
      }, null, _parent));
      _push(ssrRenderComponent(_component_PetSitterAboutSection, {
        ref_key: "personalSection",
        ref: personalSection,
        class: "w-full",
        name: unref(userInfo).name,
        about: unref(userInfo).about,
        certificate: unref(userInfo).petsCertificate,
        "attachment-url-list": unref(userInfo).attachmentUrlList,
        "line-url": unref(userInfo).lineUrl,
        "youtube-url": unref(userInfo).youtubeUrl,
        "facebook-url": unref(userInfo).facebookUrl,
        "share-link-url": unref(userInfo).shareLinkUrl
      }, null, _parent));
      _push(ssrRenderComponent(_component_PetSitterCommentSection, mergeProps({
        ref_key: "commentSection",
        ref: commentSection,
        class: "w-full"
      }, unref(commentInfo)), null, _parent));
      _push(ssrRenderComponent(_component_PetSitterServiceQASection, {
        ref_key: "qASection",
        ref: qASection,
        class: "w-full",
        "qa-accordion-list": unref(serviceQAList)
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/petSitter/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-B-q8UgEa.mjs.map

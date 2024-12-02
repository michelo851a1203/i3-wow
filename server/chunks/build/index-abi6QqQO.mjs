import { _ as _sfc_main$m } from './NuxtImg-Ce9a8LGV.mjs';
import { useSSRContext, defineComponent, shallowRef, watch, unref, isRef, withCtx, createVNode, useModel, mergeProps, openBlock, createBlock, toDisplayString, withModifiers, createCommentVNode, createTextVNode, computed, useTemplateRef } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import { e as useI18n, f as useHead, c as useCalendarStore, d as useElementBounding, u as useDateFormat, a as useLocalePath, n as navigateTo, _ as _export_sfc } from './server.mjs';
import __nuxt_component_0$4 from './SelectMenu-JtM-AXfn.mjs';
import __nuxt_component_0$3 from './Icon-B6ODn5Cd.mjs';
import { _ as _sfc_main$i } from './ServiceIcon-B7HfU_kG.mjs';
import { S as ServiceStatus, s as serviceIconNameMapping } from './petSitter.type-BjvpgkZ2.mjs';
import { _ as _sfc_main$j } from './RegionModal-CzotQf0Z.mjs';
import { c as cities } from './region.type-CQhlObjv.mjs';
import { storeToRefs } from 'pinia';
import { _ as _sfc_main$k } from './Primary-DO2BBNU0.mjs';
import { u as usePetSitterStore } from './usePetSitterStore-BLaObs6U.mjs';
import { _ as __nuxt_component_0$5, a as __nuxt_component_2 } from './Tail-CPaypyWV.mjs';
import { _ as _sfc_main$l } from './Card-BWNd6eWa.mjs';
import { _ as _sfc_main$n } from './WaveBackground-C7ZH5xxO.mjs';
import __nuxt_component_1 from './Carousel-D0c_dyFx.mjs';
import { _ as _sfc_main$h } from './Status-CB7ZqcBa.mjs';
import { u as useAuthStore } from './useAuthStore-6LI8GoiG.mjs';
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
import './Avatar-DmdANAXU.mjs';
import './tooltip-CpVvyQRR.mjs';
import './combobox-BRR1qDhj.mjs';
import '@tanstack/vue-virtual';
import './form-DsUILy5F.mjs';
import './active-element-history-Cer4cSOw.mjs';
import './micro-task-B6uncIso.mjs';
import './keyboard-Duq8EHr3.mjs';
import './use-outside-click-Did7lc5E.mjs';
import './focus-management-vHH7q6nP.mjs';
import './use-resolve-button-type-DOOP2SMg.mjs';
import './calculate-active-index-Dujs8zvP.mjs';
import './hidden-Dc_fFmis.mjs';
import './open-closed-BDzQJ33n.mjs';
import './use-text-value-CfKvyAwN.mjs';
import './index-BWxBLvh9.mjs';
import './index-B0sILfIw.mjs';
import './usePopper-C-zM4LTl.mjs';
import './useFormGroup-RtfcSx_K.mjs';
import './useButtonGroup-CKD41UhK.mjs';
import './index-Bq1kpYX2.mjs';
import '@iconify/utils/lib/css/icon';
import 'zod';
import './Modal-CUWDe7J7.mjs';
import './transition-HtJtC6dg.mjs';
import './portal-u0Fjoh1P.mjs';
import './description-BDgAPIdI.mjs';
import './useCustomUtils-B8GVkC05.mjs';
import './useCustomError-C6r27JZ9.mjs';
import './Button-B_jr3BZp.mjs';
import './Link-DZ2bKZug.mjs';
import './nuxt-link-BMiRqRVI.mjs';
import './link-D5-3RomB.mjs';
import './button-Bz5rwL6o.mjs';
import './signUp.type-C4a4H3kg.mjs';

const _sfc_main$g = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = _sfc_main$m;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "flex flex-col md:flex-row mb-10 items-center justify-between w-4/5" }, _attrs))}><h1${ssrRenderAttr("aria-label", _ctx.$t("home.brandTitle"))} class="p-6 text-center md:text-left text-[#9B3F19] font-bold w-full md:w-1/2"><p class="text-[2.25rem] md:text-3rem"> Your Pet&#39;s </p><p class="mb-2 mt-[-0.9375rem] text-[2.25rem] md:text-3rem"> Best Caretaker ! </p><p class="text-[1.5rem] md:text-[1.75rem] text-[#461B09]"> \u5168\u53F0\u6700\u5927<span class="text-orange-500">\u5BF5\u7269\u8913\u6BCD/\u5C08\u5BB6</span>\u5E73\u53F0 </p></h1><div class="w-full md:w-1/2 flex items-center justify-center md:p-6">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    class: "w-full",
    src: "images/frontpage/dogbanner.svg"
  }, null, _parent));
  _push(`</div></section>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Brand.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "ServiceType",
  __ssrInlineRender: true,
  props: {
    "modelValue": { default: "" },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const modelValue = useModel(__props, "modelValue");
    const options = Object.values(ServiceStatus).map((value) => {
      return {
        iconName: serviceIconNameMapping[value],
        value,
        title: value
      };
    });
    const isServiceWithIconSelectionOptionType = (input) => {
      if (typeof input !== "object")
        return false;
      if (input === null)
        return false;
      return "iconName" in input && "value" in input && "title" in input;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_USelectMenu = __nuxt_component_0$4;
      const _component_UIcon = __nuxt_component_0$3;
      const _component_PetSitterServiceIcon = _sfc_main$i;
      _push(ssrRenderComponent(_component_USelectMenu, mergeProps({
        modelValue: modelValue.value,
        "onUpdate:modelValue": ($event) => modelValue.value = $event,
        "selected-icon": "",
        options: unref(options),
        "value-attribute": "value",
        "option-attribute": "title",
        "ui-menu": {
          option: {
            active: "bg-[#FFF6F3]"
          }
        }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border border-gray-300 flex flex-col bg-[#FAFAFA] w-full rounded-xl px-4 py-3 text-gray-400 min-w-[20vw]"${_scopeId}><span class="flex items-center gap-x-1 text-black text-lg"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, { name: "i-lucide:award" }, null, _parent2, _scopeId));
            _push2(`<span class="font-medium"${_scopeId}>\u670D\u52D9</span></span>`);
            if (modelValue.value === "") {
              _push2(`<span${_scopeId}>\u60A8\u60F3\u9810\u7D04\u7684\u670D\u52D9\uFF1F</span>`);
            } else {
              _push2(`<span class="flex items-center justify-between text-orange-600"${_scopeId}><span${_scopeId}>${ssrInterpolate(modelValue.value)}</span><button class="text-black"${_scopeId}> \xD7 </button></span>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "border border-gray-300 flex flex-col bg-[#FAFAFA] w-full rounded-xl px-4 py-3 text-gray-400 min-w-[20vw]" }, [
                createVNode("span", { class: "flex items-center gap-x-1 text-black text-lg" }, [
                  createVNode(_component_UIcon, { name: "i-lucide:award" }),
                  createVNode("span", { class: "font-medium" }, "\u670D\u52D9")
                ]),
                modelValue.value === "" ? (openBlock(), createBlock("span", { key: 0 }, "\u60A8\u60F3\u9810\u7D04\u7684\u670D\u52D9\uFF1F")) : (openBlock(), createBlock("span", {
                  key: 1,
                  class: "flex items-center justify-between text-orange-600"
                }, [
                  createVNode("span", null, toDisplayString(modelValue.value), 1),
                  createVNode("button", {
                    class: "text-black",
                    onClick: withModifiers(($event) => modelValue.value = "", ["prevent"])
                  }, " \xD7 ", 8, ["onClick"])
                ]))
              ])
            ];
          }
        }),
        option: withCtx(({ option }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (isServiceWithIconSelectionOptionType(option)) {
              _push2(`<div class="flex items-center justify-center gap-x-2 px-3 py-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_PetSitterServiceIcon, {
                "icon-name": option.iconName,
                active: modelValue.value === option.value
              }, null, _parent2, _scopeId));
              _push2(`<span class="${ssrRenderClass({
                "text-[#F27541]": option.value === modelValue.value
              })}"${_scopeId}>${ssrInterpolate(option.title)}</span></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              isServiceWithIconSelectionOptionType(option) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex items-center justify-center gap-x-2 px-3 py-2"
              }, [
                createVNode(_component_PetSitterServiceIcon, {
                  "icon-name": option.iconName,
                  active: modelValue.value === option.value
                }, null, 8, ["icon-name", "active"]),
                createVNode("span", {
                  class: {
                    "text-[#F27541]": option.value === modelValue.value
                  }
                }, toDisplayString(option.title), 3)
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u6C92\u6709\u63D0\u4F9B\u670D\u52D9\u6A23\u76EE `);
          } else {
            return [
              createTextVNode(" \u6C92\u6709\u63D0\u4F9B\u670D\u52D9\u6A23\u76EE ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Reservation/ServiceType.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "Region",
  __ssrInlineRender: true,
  props: {
    "modelValue": { default: [] },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const allDistruct = cities.map((item) => {
      return item.districts;
    }).flat();
    const codeDistrictMap = allDistruct.reduce((prev, acc) => {
      return prev.set(acc.code, acc.fullName);
    }, /* @__PURE__ */ new Map());
    const codeList = useModel(__props, "modelValue");
    const isShowModal = shallowRef(false);
    const allNameList = computed(() => {
      const currentCodeList = codeList.value;
      const result = currentCodeList.map((code) => {
        var _a;
        return (_a = codeDistrictMap.get(code)) != null ? _a : "";
      });
      if (result.length > 1) {
        return [...result.slice(0, 1), `+${result.length - 1}...`];
      }
      return result;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_0$3;
      const _component_InputSelectRegionModal = _sfc_main$j;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-col items-start border border-gray-300 bg-[#FAFAFA] rounded-xl px-4 py-3"><span class="flex items-center gap-x-1 text-black text-lg">`);
      _push(ssrRenderComponent(_component_UIcon, { name: "i-basil:location-outline" }, null, _parent));
      _push(`<span class="font-medium">\u5730\u9EDE</span></span><div class="w-full flex items-center justify-start gap-x-2"><button class="w-full flex items-center justify-start gap-x-2">`);
      if (codeList.value.length === 0) {
        _push(`<div class="text-gray-400"> \u9078\u64C7\u5340\u57DF(\u53EF\u591A\u9078) </div>`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(unref(allNameList), (name) => {
          _push(`<div class="rounded-md bg-orange-200 px-2 py-1 text-base">${ssrInterpolate(name)}</div>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</button><button style="${ssrRenderStyle(codeList.value.length > 0 ? null : { display: "none" })}"> \xD7 </button>`);
      _push(ssrRenderComponent(_component_InputSelectRegionModal, {
        "is-show": unref(isShowModal),
        "onUpdate:isShow": ($event) => isRef(isShowModal) ? isShowModal.value = $event : null,
        modelValue: codeList.value,
        "onUpdate:modelValue": ($event) => codeList.value = $event,
        cities: unref(cities)
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Reservation/Region.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "Calendar",
  __ssrInlineRender: true,
  props: {
    "modelValue": { default: [null, null] },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const modelValue = useModel(__props, "modelValue");
    const calendarStore = useCalendarStore();
    const { changeCurrentExcludeElement, changeShowCalendarState, setCalendarDate, setPosition, resetPickDate } = calendarStore;
    const { isShowCalendar, pickDate, isPickDateFull, isCurrentExcludeElement } = storeToRefs(calendarStore);
    const dateTimepickerInput = useTemplateRef("dateTimepickerInput");
    useElementBounding(dateTimepickerInput);
    shallowRef(false);
    shallowRef(false);
    const inputIndicatorValue = computed(() => {
      const currentValue = modelValue.value;
      if (currentValue.length !== 2) {
        return "";
      }
      if (currentValue[0] === null || currentValue[1] === null)
        return "";
      return `${useDateFormat(currentValue[0], "YYYY/MM/DD").value}-${useDateFormat(currentValue[1], "YYYY/MM/DD").value}`;
    });
    watch(isPickDateFull, (isFull) => {
      if (!isFull)
        return;
      if (isCurrentExcludeElement.value)
        return;
      const firstDate = pickDate.value.firstDate;
      const secondDate = pickDate.value.secondDate;
      if (firstDate === null || secondDate === null)
        return;
      if (firstDate < secondDate) {
        modelValue.value = [firstDate, secondDate];
      } else {
        modelValue.value = [secondDate, firstDate];
      }
      changeShowCalendarState(false);
    });
    watch(isShowCalendar, (isShow) => {
      if (isShow)
        return;
      resetPickDate();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-start min-w-[20vw]" }, _attrs))}><button class="border border-gray-300 bg-[#FAFAFA] flex flex-col w-full rounded-lg px-4 py-3"><div class="flex items-center justify-between w-full"><span class="flex items-center gap-x-1 text-black text-lg">`);
      _push(ssrRenderComponent(_component_UIcon, { name: "i-heroicons:calendar-days-16-solid" }, null, _parent));
      _push(`<span class="font-medium">\u65E5\u671F</span></span>`);
      if (modelValue.value.length !== 0 && !modelValue.value.every((item) => item === null)) {
        _push(`<button> \xD7 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (modelValue.value.length === 0 || modelValue.value.every((item) => item === null)) {
        _push(`<span class="text-gray-400"> \u60A8\u60F3\u9810\u7D04\u7684\u65E5\u671F </span>`);
      } else {
        _push(`<span class="text-base w-full flex items-center justify-between"><span>${ssrInterpolate(unref(inputIndicatorValue))}</span></span>`);
      }
      _push(`</button></div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Reservation/Calendar.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "Reservation",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    const petSitterStore = usePetSitterStore();
    const { setHomeServiceType, setHomeRegionCodeList, setHomeTimeRange } = petSitterStore;
    const { homeServiceType, homeRegionCodeList, homeTimeRange } = storeToRefs(petSitterStore);
    const currentServiceType = computed({
      get: () => homeServiceType.value,
      set: (newValue) => {
        setHomeServiceType(newValue);
      }
    });
    const currentRegionCodeList = computed({
      get: () => homeRegionCodeList.value,
      set: (newValue) => {
        setHomeRegionCodeList(newValue);
      }
    });
    const currentTimeRange = computed({
      get: () => homeTimeRange.value,
      set: (newValue) => {
        setHomeTimeRange(newValue);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeReservationServiceType = _sfc_main$f;
      const _component_HomeReservationRegion = _sfc_main$e;
      const _component_HomeReservationCalendar = _sfc_main$d;
      const _component_ButtonPrimary = _sfc_main$k;
      const _component_UIcon = __nuxt_component_0$3;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full flex items-center justify-center py-16" }, _attrs))}><div class="w-[80%] flex flex-col gap-y-2 rounded-2xl bg-white px-8 py-4 shadow-xl"><h4>\u627E\u5C0B\u6700\u4F73\u5BF5\u7269\u8913\u6BCD</h4><div class="flex items-center gap-x-4">`);
      _push(ssrRenderComponent(_component_HomeReservationServiceType, {
        modelValue: unref(currentServiceType),
        "onUpdate:modelValue": ($event) => isRef(currentServiceType) ? currentServiceType.value = $event : null
      }, null, _parent));
      _push(ssrRenderComponent(_component_HomeReservationRegion, {
        modelValue: unref(currentRegionCodeList),
        "onUpdate:modelValue": ($event) => isRef(currentRegionCodeList) ? currentRegionCodeList.value = $event : null,
        class: "min-w-[20vw]"
      }, null, _parent));
      _push(ssrRenderComponent(_component_HomeReservationCalendar, {
        modelValue: unref(currentTimeRange),
        "onUpdate:modelValue": ($event) => isRef(currentTimeRange) ? currentTimeRange.value = $event : null
      }, null, _parent));
      _push(ssrRenderComponent(_component_ButtonPrimary, {
        label: "\u958B\u59CB\u9810\u7D04\u6309\u9215",
        class: "min-w-30 text-white",
        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(unref(localePath)("petSitters"))
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-center gap-x-1 py-1"${_scopeId}><span${_scopeId}>\u958B\u59CB\u9810\u7D04</span>`);
            _push2(ssrRenderComponent(_component_UIcon, { name: "i-heroicons:chevron-right-16-solid" }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-center gap-x-1 py-1" }, [
                createVNode("span", null, "\u958B\u59CB\u9810\u7D04"),
                createVNode(_component_UIcon, { name: "i-heroicons:chevron-right-16-solid" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Reservation.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Recommend",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    const fakeData = Array.from({ length: 6 }, (_, i) => ({
      id: i + 1,
      photo: "images/frontpage/girl.png",
      provider: "\u9673\u5C0F\u7F8E",
      city: "\u53F0\u5317\u5E02",
      price: "$ 550 /hr",
      rating: "\u2B50\uFE0F\u2B50\uFE0F\u2B50\uFE0F\u2B50\uFE0F\u2B50\uFE0F"
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeRecommendTitle = __nuxt_component_0$5;
      const _component_HomeRecommendCard = _sfc_main$l;
      const _component_HomeRecommendTail = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full rounded-[2.5rem] bg-white p-3 shadow-lg" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_HomeRecommendTitle, null, null, _parent));
      _push(`<div class="w-full grid grid-cols-6 gap-[0.75rem] py-[2rem]"><!--[-->`);
      ssrRenderList(unref(fakeData), (item) => {
        _push(ssrRenderComponent(_component_HomeRecommendCard, mergeProps({
          key: item.id,
          ref_for: true
        }, item, {
          class: "col-span-1",
          onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(unref(localePath)({ name: "petSitter-id", params: { id: item.id } }))
        }), null, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_HomeRecommendTail, { class: "w-full" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Recommend.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_WaveBackground = _sfc_main$n;
  const _component_NuxtImg = _sfc_main$m;
  _push(ssrRenderComponent(_component_WaveBackground, mergeProps({ "top-background-color": "#FFF7F4" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtImg, {
          src: "images/frontpage/process.svg",
          class: "h-auto w-full object-cover",
          alt: "Crowdfunding"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtImg, {
            src: "images/frontpage/process.svg",
            class: "h-auto w-full object-cover",
            alt: "Crowdfunding"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Step.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    id: {},
    name: {},
    response: { default: "" },
    serviceType: {},
    rating: { default: 0 }
  },
  setup(__props) {
    const serviceTypeMap = {
      1: "\u5B89\u89AA\u5BC4\u5BBF",
      2: "\u77ED\u671F\u5BC4\u5BBF",
      3: "\u9577\u671F\u5BC4\u5BBF",
      4: "\u65E5\u9593\u7167\u9867",
      5: "\u5176\u4ED6\u670D\u52D9"
    };
    const currentServiceType = computed(() => {
      return serviceTypeMap[__props.serviceType];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$m;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "select-none rounded-2xl p-4 text-center max-w-[17.5rem]" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "images/frontpage/AvatarImage.svg",
        class: "mx-auto mb-4 h-20 w-20 rounded-full"
      }, null, _parent));
      _push(`<p class="mb-2 text-lg font-bold">${ssrInterpolate(_ctx.name)}</p><p class="mb-4 text-sm text-gray-700 leading-[1.375rem]"> \u201C ${ssrInterpolate(_ctx.response)} \u201D </p><div class="flex items-center justify-center gap-2"><span class="block text-sm text-[#858378]">${ssrInterpolate(unref(currentServiceType))}</span><span class="text-[#C2C1BB]">\u2022</span><p class="text-sm"> \u2B50\uFE0F\u2B50\uFE0F\u2B50\uFE0F\u2B50\uFE0F\u2B50\uFE0F </p><p class="pt-0.5 text-sm text-[#858378]"> (${ssrInterpolate(_ctx.rating)}) </p></div></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Promote/Card.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Promote",
  __ssrInlineRender: true,
  setup(__props) {
    const fakeData = [
      {
        id: 1,
        name: "\u9EC3\u5148\u751F",
        response: "\u6211\u5C0D\u9019\u500B\u5BF5\u7269\u4FDD\u59C6\u5A92\u5408\u5E73\u53F0\u7684\u670D\u52D9\u5370\u8C61\u6DF1\u523B\u3002\u4ED6\u5011\u7684\u4FDD\u59C6\u5C08\u696D\u4E14\u6709\u611B\u5FC3\uFF0C\u5C0D\u5BF5\u7269\u7684\u7167\u9867\u975E\u5E38\u7528\u5FC3\u3002",
        serviceType: 1,
        rating: 4.5
      },
      {
        id: 2,
        name: "\u6797\u5C0F\u59D0",
        response: "\u9019\u500B\u5E73\u53F0\u63D0\u4F9B\u4E86\u975E\u5E38\u597D\u7684\u5BF5\u7269\u4FDD\u59C6\u670D\u52D9\uFF0C\u8B93\u6211\u53EF\u4EE5\u5B89\u5FC3\u51FA\u9580\u3002",
        serviceType: 3,
        rating: 3.8
      },
      {
        id: 3,
        name: "\u738B\u5C0F\u59D0",
        response: "\u9019\u500B\u5E73\u53F0\u63D0\u4F9B\u4E86\u975E\u5E38\u597D\u7684\u5BF5\u7269\u4FDD\u59C6\u670D\u52D9\uFF0C\u8B93\u6211\u53EF\u4EE5\u5B89\u5FC3\u51FA\u9580\u3002",
        serviceType: 4,
        rating: 2.8
      },
      {
        id: 4,
        name: "A\u5148\u751F",
        response: "\u6211\u5C0D\u9019\u500B\u5BF5\u7269\u4FDD\u59C6\u5A92\u5408\u5E73\u53F0\u7684\u670D\u52D9\u5370\u8C61\u6DF1\u523B\u3002\u4ED6\u5011\u7684\u4FDD\u59C6\u5C08\u696D\u4E14\u6709\u611B\u5FC3\uFF0C\u5C0D\u5BF5\u7269\u7684\u7167\u9867\u975E\u5E38\u7528\u5FC3\u3002",
        serviceType: 1,
        rating: 4.5
      },
      {
        id: 5,
        name: "A\u5148\u751F",
        response: "\u6211\u5C0D\u9019\u500B\u5BF5\u7269\u4FDD\u59C6\u5A92\u5408\u5E73\u53F0\u7684\u670D\u52D9\u5370\u8C61\u6DF1\u523B\u3002\u4ED6\u5011\u7684\u4FDD\u59C6\u5C08\u696D\u4E14\u6709\u611B\u5FC3\uFF0C\u5C0D\u5BF5\u7269\u7684\u7167\u9867\u975E\u5E38\u7528\u5FC3\u3002",
        serviceType: 1,
        rating: 4.5
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCarousel = __nuxt_component_1;
      const _component_HomePromoteCard = _sfc_main$9;
      const _component_NuxtImg = _sfc_main$m;
      _push(`<!--[--><div class="bg-[#FEEAE1] relative overflow-x-hidden"><div class="w-full flex flex-col md:flex-row p-8 md:ml-[6.25rem] md:pt-[7.8125rem]"><div class="w-1/3 p-6 text-[#9B3F19] md:text-left"><div class="flex items-center justify-center text-left"><div class="flex-col"><p class="title text-[24px] text-[#461B09] font-bold md:text-[34px]"> \u8D85\u904E<span class="text-left text-orange-500">1,100</span>\u540D\u5BF5\u7269\u4E3B\u4EBA </p><p class="title pb-4 text-left text-[24px] text-[#461B09] font-[700] md:text-[34px]"> \u4E00\u81F4\u771F\u5FC3\u63A8\u85A6 </p><span class="description text-section block text-[14px] text-[#461B09] tracking-[0.56px] max-md:hidden"> \u900F\u904E\u5176\u4ED6\u5BA2\u6236\u7684\u771F\u5BE6\u597D\u8A55\uFF0C\u8B93\u60A8\u66F4\u6709\u4FE1\u5FC3\u9078\u64C7\u6211\u5011\u7684\u670D\u52D9\uFF0C </span><span class="description text-section block text-[14px] text-[#461B09] tracking-[0.56px] max-md:hidden"> \u8B93\u5BF5\u7269\u5F97\u5230\u6700\u597D\u7684\u7167\u9867\u3002 </span></div></div></div><div class="relative w-2/3 overflow-x-hidden px-[32px] max-md:hidden"><div class="flex space-x-6">`);
      _push(ssrRenderComponent(_component_UCarousel, {
        items: fakeData,
        "cursor-grab": ""
      }, {
        default: withCtx(({ item, index }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_HomePromoteCard, mergeProps({
              class: ["mr-4", {
                "bg-[#FEF6F2]": index % 3 === 0,
                "bg-[#FFECBC]": index % 3 === 1,
                "bg-[#E9FFCB]": index % 3 === 2
              }]
            }, item), null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_HomePromoteCard, mergeProps({
                class: ["mr-4", {
                  "bg-[#FEF6F2]": index % 3 === 0,
                  "bg-[#FFECBC]": index % 3 === 1,
                  "bg-[#E9FFCB]": index % 3 === 2
                }]
              }, item), null, 16, ["class"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><div>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "images/frontpage/kv.svg",
        class: "hidden h-auto w-full object-cover md:inline",
        alt: "Crowdfunding"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "images/frontpage/kvph.svg",
        class: "h-auto w-full object-cover md:hidden",
        alt: "Crowdfunding"
      }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Promote.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = _sfc_main$m;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center gap-4" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "images/frontpage/feet.svg",
    class: "mb-2 w-5 object-cover",
    alt: "Crowdfunding"
  }, null, _parent));
  _push(`<div class="mb-2 text-center text-[#461B09] font-bold"><h2 class="hidden text-3xl md:block"> \u95DC\u65BC\u5BF5\u7269\u8913\u6BCD\uFF5C\u5E38\u898B\u554F\u8207\u7B54Q&amp;A </h2><h2 class="text-[1.5rem] md:hidden"> \u95DC\u65BC\u5BF5\u7269\u8913\u6BCD<br>\u5E38\u898B\u554F\u8207\u7B54Q&amp;A </h2></div>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "images/frontpage/feet.svg",
    class: "mb-2 w-5 object-cover",
    style: { "top": "1.5rem" },
    alt: "Crowdfunding"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/QuestionAnswer/Title.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "RoundAngleWhite",
  __ssrInlineRender: true,
  props: {
    label: {},
    disabled: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        "aria-label": _ctx.label,
        class: "box-border cursor-pointer rounded-full border-none outline-none bg-white",
        disabled: _ctx.disabled
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button/RoundAngleWhite.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Accordion",
  __ssrInlineRender: true,
  props: {
    label: {},
    buttonTitle: { default: "" },
    content: { default: "" }
  },
  setup(__props) {
    const isShowContent = shallowRef(false);
    const toggleContent = () => {
      isShowContent.value = !isShowContent.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonRoundAngleWhite = _sfc_main$6;
      const _component_UIcon = __nuxt_component_0$3;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ButtonRoundAngleWhite, {
        label: _ctx.label,
        class: ["w-full flex items-center justify-between px-5 py-3 h-12 shadow-sm", { absolute: unref(isShowContent) }],
        onClick: toggleContent
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.buttonTitle)}</span>`);
            if (unref(isShowContent)) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-minus",
                class: "h-4 md:h-6 w-4 md:w-6 text-[#D16236]"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (!unref(isShowContent)) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-plus",
                class: "h-4 md:h-6 w-4 md:w-6 text-[#D16236]"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("span", null, toDisplayString(_ctx.buttonTitle), 1),
              unref(isShowContent) ? (openBlock(), createBlock(_component_UIcon, {
                key: 0,
                name: "i-heroicons-minus",
                class: "h-4 md:h-6 w-4 md:w-6 text-[#D16236]"
              })) : createCommentVNode("", true),
              !unref(isShowContent) ? (openBlock(), createBlock(_component_UIcon, {
                key: 1,
                name: "i-heroicons-plus",
                class: "h-4 md:h-6 w-4 md:w-6 text-[#D16236]"
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div style="${ssrRenderStyle(unref(isShowContent) ? null : { display: "none" })}" class="w-full h-12"></div><div style="${ssrRenderStyle(unref(isShowContent) ? null : { display: "none" })}" class="mt-[-1.0625rem] px-8 pb-5 pt-[1.875rem] text-sm text-[#461B09] bg-[#FEBEA3]/50 mb-2 w-full whitespace-pre-wrap rounded-b-3xl">${ssrInterpolate(_ctx.content)}</div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/QuestionAnswer/Accordion.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "QuestionAnswer",
  __ssrInlineRender: true,
  setup(__props) {
    const fakeData = [
      {
        id: 1,
        label: "PetsKeeper\u5BF5\u7269\u8913\u6BCD\u662F\u4EC0\u9EBC\u6A23\u7684\u5E73\u53F0\uFF1F",
        buttonTitle: "PetsKeeper\u5BF5\u7269\u8913\u6BCD\u662F\u4EC0\u9EBC\u6A23\u7684\u5E73\u53F0\uFF1F",
        content: "\u2714 \u6211\u5011\u63D0\u4F9B\u5BF5\u7269\u5C08\u696D\u4EBA\u58EB(\u8913\u59C6\u3001\u8A13\u7DF4\u5E2B\u3001\u7F8E\u5BB9\u5E2B\u3001\u6E9D\u901A\u5E2B\u7B49)\u8207\u9867\u5BA2\u7684\u914D\u5C0D\u670D\u52D9\uFF0C\u4F7F\u6BDB\u5B69\u4E3B\u4EBA\u53EF\u4EE5\u8F15\u9B06\u627E\u5230\u96E2\u5BB6\u6700\u8FD1\u3001\u6700\u503C\u5F97\u4FE1\u4EFB\u7684\u4FDD\u59C6\uFF0C\u4E26\u4EE5\u512A\u60E0\u7684\u50F9\u683C\uFF0C\u63D0\u4F9B\u98FC\u4E3B\u5C08\u696D\u7684\u512A\u8CEA\u670D\u52D9\u3002"
      },
      {
        id: 2,
        label: "\u6211\u7684\u5BF5\u7269\u9069\u5408\u4F7F\u7528PetsKeeper\u5BF5\u7269\u8913\u6BCD\u670D\u52D9\u55CE\uFF1F",
        buttonTitle: "\u6211\u7684\u5BF5\u7269\u9069\u5408\u4F7F\u7528PetsKeeper\u5BF5\u7269\u8913\u6BCD\u670D\u52D9\u55CE\uFF1F",
        content: "\u2714 \u82E5\u60A8\u5BB6\u7684\u5BF5\u7269\u5177\u6709\u5F37\u70C8\u653B\u64CA\u6027\u6216\u8005\u6027\u683C\u4E0D\u7A69\u5B9A\u3001\u5BB9\u6613\u7DCA\u5F35\u3001\u5177\u6709\u50B7\u5BB3\u6027\u7B49\u72C0\u6CC1\uFF0C\u4E0D\u5EFA\u8B70\u4F7F\u7528Petskeeper\u5BF5\u7269\u8913\u6BCD\u5E73\u53F0\uFF0C\u9810\u7D04\u670D\u52D9\u524D\uFF0C\u8ACB\u60A8\u512A\u5148\u8A55\u4F30\u3002"
      },
      {
        id: 3,
        label: "\u600E\u9EBC\u8A3B\u518APetsKeeper\u5BF5\u7269\u8913\u6BCD\u5E73\u53F0\uFF1F",
        buttonTitle: "\u600E\u9EBC\u8A3B\u518APetsKeeper\u5BF5\u7269\u8913\u6BCD\u5E73\u53F0\uFF1F",
        content: "(1)\u4E00\u822C\u6703\u54E1\uFF1A\u60A8\u53EF\u5230\u7DB2\u7AD9\u9EDE\u9078\u53F3\u4E0A\u89D2\u300C\u6211\u8981\u8A3B\u518A\u300D\u6839\u64DA\u8A3B\u518A\u6D41\u7A0B\u586B\u5BEB\u8CC7\u6599\u5F8C\uFF0C\u5B8C\u6210\u6703\u54E1\u8A3B\u518A\u3002\n(2)\u5BF5\u7269\u8913\u6BCD\uFF1A\u82E5\u60A8\u662F\u5BF5\u8913\u6BCD\u3001\u5C08\u5BB6\u7B49\u8EAB\u5206\uFF0C\u53EF\u9EDE\u9078\u300C\u6211\u8981\u8A3B\u518A\u8913\u6BCD\u300D\uFF0C\u4E26\u4F9D\u8A3B\u518A\u6D41\u7A0B\uFF0C\u5B8C\u6210\u8CC7\u6599\u4E0A\u50B3\u7533\u8ACB\u5F8C\uFF0C\u7B49\u5F85\u5B98\u65B9\u5BE9\u6838\u7533\u8ACB\uFF0C\u5373\u5B8C\u6210\u8A3B\u518A\u3002"
      },
      {
        id: 4,
        label: "\u5982\u4F55\u958B\u59CB\u4F7F\u7528PetsKeeper\u5BF5\u7269\u8913\u6BCD\u5E73\u53F0\u670D\u52D9\uFF1F",
        buttonTitle: "\u5982\u4F55\u958B\u59CB\u4F7F\u7528PetsKeeper\u5BF5\u7269\u8913\u6BCD\u5E73\u53F0\u670D\u52D9\uFF1F",
        content: "\u2714 \u6211\u5011\u5E73\u53F0\u7684\u670D\u52D9\u5167\u5BB9\uFF0C\u5305\u542B\u201D\u5230\u5E9C\u7167\u9867\u201D\u3001\u201D\u5B89\u89AA\u5BC4\u5BBF\u201D\u3001\u201D\u6563\u6B65\u905B\u72D7\u201D\u3001\u201D\u5BF5\u7269\u63A5\u9001\u201D\u3001\u201D\u5230\u5E9C\u7F8E\u5BB9\u201D\u3001\u201D\u5BF5\u7269\u8A13\u7DF4\u201D\u3001\u201D\u5BF5\u7269\u6E9D\u901A\u201D\u3001\u201D\u7378\u91AB\u9867\u554F\u201D\u7B49\u5A92\u5408\u5C08\u696D\u7684\u5BF5\u7269\u670D\u52D9\u3002\n\n \u4F7F\u7528\u6D41\u7A0B\u5982\u4E0B\uFF1A\n1.\u6253\u958BPetsKeeper\u5BF5\u7269\u8913\u6BCD\u7DB2\u7AD9\n2.\u9078\u64C7\u60A8\u9700\u6C42\u7684\u300C\u670D\u52D9\u7A2E\u985E\u300D\u3001\u300C\u5730\u9EDE\u300D\uFF0C\u4EE5\u53CA\u9700\u6C42\u7684\u300C\u670D\u52D9\u6642\u9593\u300D\u3002\n3.\u914D\u5C0D\u4E26\u627E\u5C0B\u60A8\u6709\u8208\u8DA3\u7684\u5BF5\u7269\u8913\u6BCD\u8207\u5C08\u696D\u4EBA\u58EB\uFF0C\u767C\u51FA\u9080\u8ACB\u9700\u6C42\u3002\n4.\u8F38\u5165\u670D\u52D9\u7D30\u7BC0\u5F8C\u9EDE\u64CA\u300C\u9810\u7D04\u8ACB\u6C42\u300D\u4E26\u9001\u51FA\u300C\u9810\u7D04\u9700\u6C42\u55AE\u300D(\u6B64\u6642\u4E26\u975E\u78BA\u5B9A\u9810\u7D04\uFF0C\u56E0\u6B64\u4E0D\u6703\u6536\u8CBB)\n5.\u7B49\u5F85\u5BF5\u7269\u8913\u6BCD\u78BA\u8A8D\u300C\u9810\u7D04\u9700\u6C42\u55AE\u300D(\u5167\u542B\u6536\u8CBB\u6A19\u6E96\u3001\u65B0\u589E\u689D\u4EF6\u3001\u670D\u52D9\u7D30\u7BC0\u7B49)\n6.\u8207\u8913\u6BCD\u78BA\u8A8D\u670D\u52D9\u7D30\u7BC0\u5F8C\uFF0C\u4E26\u78BA\u8A8D\u9810\u7D04\u9700\u6C42\u55AE\uFF0C\u9032\u5165\u4ED8\u6B3E\u7A0B\u5E8F\uFF0C\u9EDE\u64CA\u300C\u7ACB\u5373\u4ED8\u6B3E\u300D\u5F8C\uFF0C\u96D9\u65B9\u5B8C\u6210\u9810\u7D04\u3002"
      },
      {
        id: 5,
        label: "PetsKeeper\u5BF5\u7269\u8913\u6BCD\u7684\u9810\u7D04\u670D\u52D9\u4EE5\u53CA\u8CBB\u7528\uFF1F",
        buttonTitle: "PetsKeeper\u5BF5\u7269\u8913\u6BCD\u7684\u9810\u7D04\u670D\u52D9\u4EE5\u53CA\u8CBB\u7528\uFF1F",
        content: "\u2714 \u6211\u5011\u91DD\u5C0D\u5BF5\u7269\u8913\u6BCD\u8207\u5C08\u5BB6\uFF0C\u63D0\u4F9B\u4E0D\u540C\u7684\u670D\u52D9\u578B\u614B\uFF0C\u6709\u63D0\u4F9B\u76F8\u5C0D\u61C9\u7684\u6536\u8CBB\u6A19\u6E96\u8207\u57FA\u672C\u898F\u7BC4\uFF0C\u4EE5\u4E0B\u50C5\u4F9B\u53C3\u8003\uFF0C\u5BE6\u969B\u6536\u8CBB\u4F9D\u5BE6\u969B\u72C0\u6CC1\u800C\u6709\u6240\u4E0D\u540C\u3002 \n\u2022\u5230\u5E9C\u7167\u9867(\u8913\u6BCD)\uFF1A$550/\u6BCF\u6B21\u8D77\uFF0C\u6BCF\u6B21\u534A\u5C0F\u6642\uFF0C\u4FDD\u59C6\u81EA\u884C\u4F9D\u80FD\u529B\u3001\u7D93\u9A57\u8207\u5C08\u696D\u8A2D\u5B9A\u55AE\u50F9\uFF0C\u8D85\u904E\u534A\u5C0F\u6642\u53EF\u52A0\u8CFC\u3002\n\u2022\u5B89\u89AA\u5BC4\u5BBF\uFF1A\u5B89\u89AA/\u5BC4\u5BBF\u5A92\u5408\u8CBB $550/12H \u8D77\uFF0C\u4F9D\u64DA\u5BF5\u7269\u7684\u7A2E\u985E\u8207\u9AD4\u578B\u8ABF\u6574\u3002\n\u2022\u6563\u6B65\u905B\u72D7\uFF1A$250/\u6BCF\u6B21 \u8D77\uFF0C\u6BCF\u6B21\u534A\u5C0F\u6642\uFF0C\u4FDD\u59C6\u81EA\u884C\u4F9D\u80FD\u529B\u3001\u7D93\u9A57\u8207\u5C08\u696D\u8A2D\u5B9A\u55AE\u50F9\uFF0C\u8D85\u904E\u534A\u5C0F\u6642\u53EF\u52A0\u8CFC\u3002\n\u2022\u5BF5\u7269\u63A5\u9001\uFF1A$250/\u6BCF\u6B21\u8D77\uFF0C\u4F9D\u64DA\u5BF5\u7269\u7684\u7A2E\u985E\u8207\u9AD4\u578B\u8ABF\u6574\u3002\n\u2022\u5230\u5E9C\u7F8E\u5BB9\uFF1A$900/\u6BCF\u6B21\u8D77\uFF0C\u4F9D\u64DA\u5BF5\u7269\u7684\u7A2E\u985E\u8207\u9AD4\u578B\u8ABF\u6574\u3002\n\u2022\u5BF5\u7269\u8A13\u7DF4\uFF1A$3600/\u6BCF\u6B21 \u8D77\uFF0C\u5C08\u5BB6\u81EA\u884C\u4F9D\u80FD\u529B\u3001\u7D93\u9A57\u8207\u5C08\u696D\u8A2D\u5B9A\u5831\u50F9\u3002\n\u2022\u5BF5\u7269\u6E9D\u901A\uFF1A$880/\u6BCF\u6B21 \u8D77\uFF0C\u6BCF\u6B21\u4E00\u5C0F\u6642\uFF0C\u5C08\u5BB6\u81EA\u884C\u4F9D\u80FD\u529B\u3001\u7D93\u9A57\u8207\u5C08\u696D\u8A2D\u5B9A\u5831\u50F9\uFF0C\u8D85\u904E\u534A\u5C0F\u6642\u53EF\u52A0\u8CFC\u3002\n\u2022\u7378\u91AB\u9867\u554F\uFF1A$1500/\u6BCF\u6B21 \u8D77\uFF0C\u5C08\u5BB6\u81EA\u884C\u4F9D\u80FD\u529B\u3001\u7D93\u9A57\u8207\u5C08\u696D\u8A2D\u5B9A\u5831\u50F9\u3002\n\u4EE5\u4E0A\u9810\u7D04\u670D\u52D9\u4E4B\u5831\u50F9\uFF0C\u4F9D\u7167\u5C08\u5BB6\u7D93\u9A57\u8207\u80FD\u529B\u800C\u6709\u6240\u5DEE\u7570\uFF0C\u672C\u7AD9\u50C5\u7D66\u4E88\u5EFA\u8B70\u8207\u8F14\u5C0E\uFF0C\u5BE6\u969B\u5831\u50F9\u72C0\u6CC1\uFF0C\u4F9D\u500B\u4EBA\u7D93\u9A57\u8207\u5C08\u696D\u800C\u6709\u6240\u4E0D\u540C\uFF0C\u9810\u7D04\u670D\u52D9\u6642\u8ACB\u659F\u914C\u8A55\u4F30\u3002"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeQuestionAnswerTitle = __nuxt_component_0$1;
      const _component_HomeQuestionAnswerAccordion = _sfc_main$5;
      const _component_ButtonPrimary = _sfc_main$k;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center" }, _attrs))}><div class="mx-auto w-[966px] max-md:w-full">`);
      _push(ssrRenderComponent(_component_HomeQuestionAnswerTitle, null, null, _parent));
      _push(`<p class="my-4 text-center text-sm text-[#461B09] tracking-wider"> \u900F\u904E\u9867\u5BA2\u5E38\u898B\u7684\u554F\u984C\uFF0C\u8B93\u60A8\u66F4\u4E86\u89E3\u6211\u5011\u7684\u5E73\u53F0\u670D\u52D9\uFF0C\u8B93\u512A\u8CEA\u7684\u8913\u6BCD\u8207\u5C08\u5BB6\u63D0\u4F9B\u60A8\u5C08\u696D\u7684\u670D\u52D9\uFF01 </p><div class="mx-auto w-[44rem] px-[3.75rem] py-4 space-y-4"><!--[-->`);
      ssrRenderList(fakeData, (item) => {
        _push(ssrRenderComponent(_component_HomeQuestionAnswerAccordion, mergeProps({
          key: item.id,
          ref_for: true
        }, item), null, _parent));
      });
      _push(`<!--]--></div><div class="flex justify-center">`);
      _push(ssrRenderComponent(_component_ButtonPrimary, {
        class: "mb-6 h-[2.375rem] w-[17.25rem] flex items-center justify-center",
        label: _ctx.$t("home.recommendButtonLabel")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-white text-sm"${_scopeId}> \u67E5\u770B\u66F4\u591AQA &gt; </span>`);
          } else {
            return [
              createVNode("span", { class: "text-white text-sm" }, " \u67E5\u770B\u66F4\u591AQA > ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/QuestionAnswer.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = _sfc_main$m;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center gap-4" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "images/frontpage/feet.svg",
    class: "mb-2 w-5 object-cover",
    alt: "Crowdfunding"
  }, null, _parent));
  _push(`<h2 class="mb-2 text-3xl text-center text-[#461B09] lg:text-3xl font-bold"> \u5BF5\u7269\u77E5\u8B58\u5927\u516C\u958B </h2>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "images/frontpage/feet.svg",
    class: "mb-2 w-5 object-cover",
    alt: "Crowdfunding"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Knowledge/Title.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    photo: {},
    avatarImage: {},
    userName: {},
    content: { default: "" },
    date: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$m;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "m-4 h-[19.9375rem] max-w-[18.25rem] w-[50rem] gap-4 rounded-lg bg-white p-2" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "h-[10.9375rem] w-[16.125rem] md:w-[17.25rem] rounded-md",
        src: _ctx.photo
      }, null, _parent));
      _push(`<div class="p-2"><p class="line-clamp-2 mb-4 text-base">${ssrInterpolate(_ctx.content)}</p><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_NuxtImg, { src: _ctx.avatarImage }, null, _parent));
      _push(`<div class="flex flex-col text-xs font-normal"><span>${ssrInterpolate(_ctx.userName)}</span><span class="text-[#858378]">${ssrInterpolate(_ctx.date)}</span></div></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Knowledge/Card.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Knowledge",
  __ssrInlineRender: true,
  setup(__props) {
    const fakeData = [
      {
        id: 1,
        photo: "images/frontpage/dogcard.jpg",
        userName: "\u73EE\u742A\u5ABD\u5ABD",
        content: "\u63ED\u5BF5\u7269\u53CB\u5584\u61F6\u4EBA\u5305\u3011\u4E0D\u5B9A\u671F\u6574\u7406\u3001\u66F4\u65B0\u5168\u53F0\u5BF5\u7269\u53CB\u5584\u98EF\u5E97\u53CA\u6C11\u5BBF\uFF0C\u8B93\u6BDB\u5C0F\u5B69\u4E5F\u80FD\u8DDF",
        date: "August 20, 2022",
        avatarImage: "images/frontpage/Idphoto.svg"
      },
      {
        id: 2,
        photo: "images/frontpage/dogcard.jpg",
        userName: "\u73EE\u742A\u5ABD\u5ABD",
        content: "\u63ED\u5BF5\u7269\u53CB\u5584\u61F6\u4EBA\u5305\u3011\u4E0D\u5B9A\u671F\u6574\u7406\u3001\u66F4\u65B0\u5168\u53F0\u5BF5\u7269\u53CB\u5584\u98EF\u5E97\u53CA\u6C11\u5BBF\uFF0C\u8B93\u6BDB\u5C0F\u5B69\u4E5F\u80FD\u8DDF",
        date: "August 20, 2022",
        avatarImage: "images/frontpage/Idphoto.svg"
      },
      {
        id: 3,
        photo: "images/frontpage/dogcard.jpg",
        userName: "\u73EE\u742A\u5ABD\u5ABD",
        content: "\u63ED\u5BF5\u7269\u53CB\u5584\u61F6\u4EBA\u5305\u3011\u4E0D\u5B9A\u671F\u6574\u7406\u3001\u66F4\u65B0\u5168\u53F0\u5BF5\u7269\u53CB\u5584\u98EF\u5E97\u53CA\u6C11\u5BBF\uFF0C\u8B93\u6BDB\u5C0F\u5B69\u4E5F\u80FD\u8DDF",
        date: "August 20, 2022",
        avatarImage: "images/frontpage/Idphoto.svg"
      },
      {
        id: 4,
        photo: "images/frontpage/dogcard.jpg",
        userName: "\u73EE\u742A\u5ABD\u5ABD",
        content: "\u63ED\u5BF5\u7269\u53CB\u5584\u61F6\u4EBA\u5305\u3011\u4E0D\u5B9A\u671F\u6574\u7406\u3001\u66F4\u65B0\u5168\u53F0\u5BF5\u7269\u53CB\u5584\u98EF\u5E97\u53CA\u6C11\u5BBF\uFF0C\u8B93\u6BDB\u5C0F\u5B69\u4E5F\u80FD\u8DDF",
        date: "August 20, 2022",
        avatarImage: "images/frontpage/Idphoto.svg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeKnowledgeTitle = __nuxt_component_0;
      const _component_UCarousel = __nuxt_component_1;
      const _component_HomeKnowledgeCard = _sfc_main$2;
      const _component_ButtonPrimary = _sfc_main$k;
      _push(`<section${ssrRenderAttrs(_attrs)}><div>`);
      _push(ssrRenderComponent(_component_HomeKnowledgeTitle, null, null, _parent));
      _push(`<p class="my-4 text-center text-[14px] text-[#461B09] tracking-wider lg:text-[14px] max-md:text-[14px]"> \u9080\u8ACB\u5BF5\u5B78\u5C08\u5BB6\u8207\u9054\u4EBA\u5171\u540C\u5206\u4EAB\u5C08\u696D\u77E5\u8B58\u6587\u7AE0\u8207\u5BE6\u7528\u5EFA\u8B70\uFF0C\u8B93\u98FC\u4E3B\u5011\u7167\u9867\u5BF5\u7269\u66F4\u5F97\u5FC3\u61C9\u624B </p>`);
      _push(ssrRenderComponent(_component_UCarousel, { items: fakeData }, {
        default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_HomeKnowledgeCard, item, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_HomeKnowledgeCard, item, null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex justify-center">`);
      _push(ssrRenderComponent(_component_ButtonPrimary, {
        class: "mb-6 h-[2.375rem] w-[17.25rem] flex items-center justify-center",
        label: _ctx.$t("home.recommendButtonLabel")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-white text-sm"${_scopeId}> \u67E5\u770B\u66F4\u591A\u6587\u7AE0 &gt; </span>`);
          } else {
            return [
              createVNode("span", { class: "text-white text-sm" }, " \u67E5\u770B\u66F4\u591A\u6587\u7AE0 > ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Knowledge.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useHead({
      title: t("title.index"),
      meta: [
        {
          name: "description",
          content: t("title.indexDescription")
        }
      ]
    });
    const authStore = useAuthStore();
    const { changeIsShowLoginAlert } = authStore;
    const { isShowLoginAlert } = storeToRefs(authStore);
    const isLoginStatusShow = shallowRef(false);
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    watch(isShowLoginAlert, async (isShowLogin) => {
      if (!isShowLogin)
        return;
      isLoginStatusShow.value = true;
      await wait(3e3);
      isLoginStatusShow.value = false;
      changeIsShowLoginAlert(false);
    });
    watch(isLoginStatusShow, (isShow) => {
      if (isShow)
        return;
      changeIsShowLoginAlert(false);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeBrand = __nuxt_component_0$2;
      const _component_HomeReservation = _sfc_main$c;
      const _component_HomeRecommend = _sfc_main$b;
      const _component_HomeStep = __nuxt_component_3;
      const _component_HomePromote = _sfc_main$8;
      const _component_HomeQuestionAnswer = _sfc_main$4;
      const _component_HomeKnowledge = _sfc_main$1;
      const _component_ModalStatus = _sfc_main$h;
      const _component_UIcon = __nuxt_component_0$3;
      _push(`<!--[--><div class="flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_HomeBrand, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_HomeReservation, null, null, _parent));
      _push(`<div class="px-16">`);
      _push(ssrRenderComponent(_component_HomeRecommend, null, null, _parent));
      _push(`</div><div class="mt-16 pb-16 bg-[#FFEAE1]">`);
      _push(ssrRenderComponent(_component_HomeStep, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_HomePromote, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeQuestionAnswer, { class: "mt-16" }, null, _parent));
      _push(ssrRenderComponent(_component_HomeKnowledge, { class: "my-16" }, null, _parent));
      _push(ssrRenderComponent(_component_ModalStatus, {
        modelValue: unref(isLoginStatusShow),
        "onUpdate:modelValue": ($event) => isRef(isLoginStatusShow) ? isLoginStatusShow.value = $event : null,
        msg: "\u767B\u5165\u6210\u529F"
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
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-abi6QqQO.mjs.map

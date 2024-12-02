import __nuxt_component_0 from './SelectMenu-JtM-AXfn.mjs';
import { _ as _sfc_main$d } from './ServiceIcon-B7HfU_kG.mjs';
import { useSSRContext, defineComponent, useTemplateRef, shallowRef, watch, mergeProps, unref, isRef, mergeModels, useId, useModel, withCtx, openBlock, createBlock, toDisplayString, createVNode, createCommentVNode, createTextVNode, computed } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { S as ServiceStatus, s as serviceIconNameMapping, h as petSizeDetailName, g as petNameMapping, l as petterSitterSearchSchema } from './petSitter.type-BjvpgkZ2.mjs';
import { a as _sfc_main$1$1, _ as _sfc_main$c } from './Pagination-DS0SqUIM.mjs';
import { _ as _sfc_main$e } from './RegionModal-CzotQf0Z.mjs';
import { c as cities } from './region.type-CQhlObjv.mjs';
import { _ as _sfc_main$a } from './SelectWithNoValue-EvF5oYkr.mjs';
import { _ as _sfc_main$f } from './Prefix-CQaUPUPN.mjs';
import __nuxt_component_0$1 from './Icon-B6ODn5Cd.mjs';
import { T as useDebounceFn, R as useParentElement, d as useElementBounding, a as useLocalePath, n as navigateTo, b as useThrottleFn, N as createSharedComposable, S as useMouse } from './server.mjs';
import { u as useCustomUtils } from './useCustomUtils-B8GVkC05.mjs';
import Decimal from 'decimal.js';
import { _ as _sfc_main$b } from './OrderHot-CscGDj-l.mjs';
import __nuxt_component_1 from './index-Bq1kpYX2.mjs';
import { _ as _sfc_main$g } from './LikeSwitcher-DWkHCC9E.mjs';
import { u as usePetSitterStore } from './usePetSitterStore-BLaObs6U.mjs';
import { _ as _sfc_main$h } from './Primary-DO2BBNU0.mjs';
import { storeToRefs } from 'pinia';
import { u as useForm, a as useField, t as toTypedSchema } from './vee-validate-zod-CmN8nNdS.mjs';
import './Avatar-DmdANAXU.mjs';
import 'tailwind-merge';
import './tooltip-CpVvyQRR.mjs';
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
import 'zod';
import './Pagination-V5D3FNQV.mjs';
import './Button-B_jr3BZp.mjs';
import './Link-DZ2bKZug.mjs';
import './nuxt-link-BMiRqRVI.mjs';
import './link-D5-3RomB.mjs';
import './button-Bz5rwL6o.mjs';
import './Modal-CUWDe7J7.mjs';
import './transition-HtJtC6dg.mjs';
import './portal-u0Fjoh1P.mjs';
import './description-BDgAPIdI.mjs';
import './Pale-B861WQUB.mjs';
import './composables-VAV01sHq.mjs';
import './useCustomError-C6r27JZ9.mjs';

const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "ServiceTypeSelect",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    label: {},
    isShowLabel: { type: Boolean, default: true },
    errorMessage: { default: "" },
    disabled: { type: Boolean },
    required: { type: Boolean },
    isFullSize: { type: Boolean, default: false }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const options = Object.values(ServiceStatus).map((value) => {
      return {
        iconName: serviceIconNameMapping[value],
        value,
        title: value
      };
    });
    const errorID = useId("$Q62maetc2e");
    const modelValue = useModel(__props, "modelValue");
    const isServiceWithIconSelectionOptionType = (input) => {
      if (typeof input !== "object")
        return false;
      if (input === null)
        return false;
      return "iconName" in input && "value" in input && "title" in input;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_USelectMenu = __nuxt_component_0;
      const _component_PetSitterServiceIcon = _sfc_main$d;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-col items-start gap-y-2"><span style="${ssrRenderStyle(_ctx.isShowLabel ? null : { display: "none" })}" class="flex items-center justify-center gap-x-1">`);
      if (_ctx.required) {
        _push(`<span class="text-red-500 text-xs"> * </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${ssrInterpolate(_ctx.label)}</span></span><div class="w-full flex items-center justify-start gap-x-2">`);
      _push(ssrRenderComponent(_component_USelectMenu, {
        modelValue: modelValue.value,
        "onUpdate:modelValue": ($event) => modelValue.value = $event,
        options: unref(options),
        "value-attribute": "value",
        "option-attribute": "title",
        class: ["rounded-lg py-1", { "w-full": _ctx.isFullSize }],
        "ui-menu": {
          option: {
            active: "bg-[#FFF6F3]"
          }
        }
      }, {
        label: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (modelValue.value === "") {
              _push2(`<span class="text-gray-400 py-1"${_scopeId}> \u8ACB\u9078\u64C7\u670D\u52D9\u6A23\u76EE </span>`);
            } else {
              _push2(`<span class="py-1"${_scopeId}>${ssrInterpolate(modelValue.value)}</span>`);
            }
          } else {
            return [
              modelValue.value === "" ? (openBlock(), createBlock("span", {
                key: 0,
                class: "text-gray-400 py-1"
              }, " \u8ACB\u9078\u64C7\u670D\u52D9\u6A23\u76EE ")) : (openBlock(), createBlock("span", {
                key: 1,
                class: "py-1"
              }, toDisplayString(modelValue.value), 1))
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
      _push(`</div></div><span style="${ssrRenderStyle(_ctx.errorMessage ? null : { display: "none" })}"${ssrRenderAttr("id", unref(errorID))} class="text-sm text-red-500">${ssrInterpolate(_ctx.errorMessage)}</span></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/ServiceTypeSelect.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "RegionSelect",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    label: {},
    isShowLabel: { type: Boolean, default: true },
    errorMessage: { default: "" },
    disabled: { type: Boolean },
    required: { type: Boolean }
  }, {
    "modelValue": { default: [] },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const allDistruct = cities.map((item) => {
      return item.districts;
    }).flat();
    const codeDistrictMap = allDistruct.reduce((prev, acc) => {
      return prev.set(acc.code, acc.fullName);
    }, /* @__PURE__ */ new Map());
    const errorID = useId("$qfuydjHKFo");
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
      const _component_InputSelectRegionModal = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-col items-start gap-y-2"><span style="${ssrRenderStyle(_ctx.isShowLabel ? null : { display: "none" })}" class="flex items-center justify-center gap-x-1">`);
      if (_ctx.required) {
        _push(`<span class="text-red-500 text-xs"> * </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${ssrInterpolate(_ctx.label)}</span></span><div class="border border-gray-300 w-full flex items-center justify-start gap-x-2 rounded-md px-3 py-2"><button class="w-full flex items-center justify-start gap-x-2">`);
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
      _push(`</div></div><span style="${ssrRenderStyle(_ctx.errorMessage ? null : { display: "none" })}"${ssrRenderAttr("id", unref(errorID))} class="text-sm text-red-500">${ssrInterpolate(_ctx.errorMessage)}</span></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/RegionSelect.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "PriceRanger",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    label: {},
    id: {},
    isShowLabel: { type: Boolean, default: true },
    errorMessage: { default: "" },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    min: { default: 0 },
    max: { default: 3e3 }
  }, {
    "modelValue": { default: { min: 0, max: 0 } },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const errorID = useId("$Xqir1qc53c");
    const modelValue = useModel(__props, "modelValue");
    const minValue = computed({
      get: () => modelValue.value.min,
      set: (newValue) => {
        const result = Math.min(Math.max(newValue, __props.min), maxValue.value - 1);
        modelValue.value.min = result;
      }
    });
    const maxValue = computed({
      get: () => modelValue.value.max,
      set: (newValue) => {
        const result = Math.max(Math.min(newValue, __props.max), minValue.value + 1);
        modelValue.value.max = result;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputPrefix = _sfc_main$f;
      const _component_UIcon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-col items-start gap-y-2"><span style="${ssrRenderStyle(_ctx.isShowLabel ? null : { display: "none" })}" class="flex items-center justify-center gap-x-1">`);
      if (_ctx.required) {
        _push(`<span class="text-red-500 text-xs"> * </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${ssrInterpolate(_ctx.label)}</span></span><div class="w-full flex items-center justify-start gap-x-2">`);
      _push(ssrRenderComponent(_component_InputPrefix, {
        modelValue: unref(minValue),
        "onUpdate:modelValue": ($event) => isRef(minValue) ? minValue.value = $event : null,
        label: "\u8D77\u59CB\u50F9\u683C",
        "is-show-label": false,
        placeholder: _ctx.min.toString(),
        disabled: _ctx.disabled,
        class: "w-1/3 flex-grow"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-center bg-gray-200 border-r border-gray-300 px-4"${_scopeId}> $ </div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-center bg-gray-200 border-r border-gray-300 px-4" }, " $ ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UIcon, { name: "i-heroicons:arrow-right" }, null, _parent));
      _push(ssrRenderComponent(_component_InputPrefix, {
        modelValue: unref(maxValue),
        "onUpdate:modelValue": ($event) => isRef(maxValue) ? maxValue.value = $event : null,
        label: "\u7D50\u675F\u50F9\u683C",
        "is-show-label": false,
        placeholder: _ctx.max.toString(),
        disabled: _ctx.disabled,
        class: "w-1/3 flex-grow"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-center bg-gray-200 border-r border-gray-300 px-4"${_scopeId}> $ </div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-center bg-gray-200 border-r border-gray-300 px-4" }, " $ ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><span style="${ssrRenderStyle(_ctx.errorMessage ? null : { display: "none" })}"${ssrRenderAttr("id", unref(errorID))} class="text-sm text-red-500">${ssrInterpolate(_ctx.errorMessage)}</span></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/PriceRanger.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Ball",
  __ssrInlineRender: true,
  props: {
    "modelValue": { default: 0 },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const { isDivElement } = useCustomUtils();
    const currentX = useModel(__props, "modelValue");
    const cursor = useTemplateRef("cursor");
    const isMouseDown = shallowRef(false);
    const useShareMouse = createSharedComposable(useMouse);
    const { x: mouseX } = useShareMouse();
    const parentEl = useParentElement();
    const { width } = useElementBounding(parentEl);
    const startX = shallowRef(0);
    const style = computed(() => {
      return `left: ${currentX.value}px;`;
    });
    const handleMouseDown = (e) => {
      isMouseDown.value = true;
      const divElement = e.target;
      if (!isDivElement(divElement))
        return;
      startX.value = e.clientX - currentX.value;
    };
    const handleTouchStart = () => {
    };
    const handleMouseMoveToUpdatePosition = () => {
      if (!isMouseDown.value)
        return;
      const element = cursor.value;
      if (!isDivElement(element))
        return;
      const newX = mouseX.value - startX.value;
      const result = Math.max(0, Math.min(newX, width.value));
      currentX.value = result;
    };
    const handleMouseUp = () => {
      isMouseDown.value = false;
    };
    computed(() => {
      return {
        mousedown: handleMouseDown,
        touchstart: handleTouchStart,
        mouseup: handleMouseUp,
        mousemove: handleMouseMoveToUpdatePosition,
        mouseleave: handleMouseUp
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "cursor",
        ref: cursor,
        class: "absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 aspect-square w-6 flex cursor-grab select-none items-center justify-center rounded-full bg-orange-600",
        style: unref(style)
      }, _attrs))}><div class="aspect-square w-[4.5] rounded-full bg-white"></div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/RangeBar/Ball.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "RangeBar",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    min: { default: 0 },
    max: { default: 3e3 }
  }, {
    "modelValue": { default: { min: 0, max: 0 } },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const bar = useTemplateRef("bar");
    const { width: barWidth } = useElementBounding(bar);
    const modelValue = useModel(__props, "modelValue");
    const barWidthRatio = computed(() => {
      const range = modelValue.value;
      const maxNum = new Decimal(__props.max);
      const minNum = new Decimal(__props.min);
      const targetMaxNum = new Decimal(range.max);
      const targetMinNum = new Decimal(range.min);
      const demonnitor = maxNum.minus(minNum);
      if (demonnitor.toNumber() <= 0)
        return 0;
      const numerator = targetMaxNum.minus(targetMinNum);
      return numerator.div(demonnitor).toNumber();
    });
    const barMoveX = computed({
      get: () => {
        const range = modelValue.value;
        const maxNum = new Decimal(__props.max);
        const minNum = new Decimal(__props.min);
        const targetMinNum = new Decimal(range.min);
        const demonnitor = maxNum.minus(minNum);
        if (demonnitor.toNumber() <= 0)
          return 0;
        const ratio = targetMinNum.div(demonnitor);
        return ratio.times(barWidth.value).toNumber();
      },
      set: (renderWidth) => {
        const renderWidthNum = new Decimal(renderWidth);
        const maxNum = new Decimal(__props.max);
        const minNum = new Decimal(__props.min);
        const allRange = maxNum.minus(minNum);
        const ratio = renderWidthNum.div(barWidth.value);
        const result = allRange.times(ratio).toNumber();
        modelValue.value.min = Math.round(result);
      }
    });
    const barMoveMaxX = computed({
      get: () => {
        const range = modelValue.value;
        const maxNum = new Decimal(__props.max);
        const minNum = new Decimal(__props.min);
        const targetMaxNum = new Decimal(range.max);
        const demonnitor = maxNum.minus(minNum);
        if (demonnitor.toNumber() <= 0)
          return 0;
        const ratio = targetMaxNum.div(demonnitor);
        return ratio.times(barWidth.value).toNumber();
      },
      set: (renderWidth) => {
        const renderWidthNum = new Decimal(renderWidth);
        const maxNum = new Decimal(__props.max);
        const minNum = new Decimal(__props.min);
        const allRange = maxNum.minus(minNum);
        const ratio = renderWidthNum.div(barWidth.value);
        const result = allRange.times(ratio).toNumber();
        modelValue.value.max = Math.round(result);
      }
    });
    const barWidthStyle = computed(() => {
      return `left: ${barMoveX.value}px;width: ${barWidthRatio.value * 100}%;`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputRangeBarBall = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full space-y-2" }, _attrs))}><div class="relative h-2 w-full rounded-full bg-gray-300"><div class="absolute h-full rounded-full bg-orange-600" style="${ssrRenderStyle(unref(barWidthStyle))}"></div>`);
      _push(ssrRenderComponent(_component_InputRangeBarBall, {
        modelValue: unref(barMoveX),
        "onUpdate:modelValue": ($event) => isRef(barMoveX) ? barMoveX.value = $event : null
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputRangeBarBall, {
        modelValue: unref(barMoveMaxX),
        "onUpdate:modelValue": ($event) => isRef(barMoveMaxX) ? barMoveMaxX.value = $event : null
      }, null, _parent));
      _push(`</div><div class="flex select-none items-center justify-between text-gray-600"><span>$${ssrInterpolate(_ctx.min.toLocaleString())}</span><span>$${ssrInterpolate(_ctx.max.toLocaleString())}</span></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/RangeBar.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "MobileContent",
  __ssrInlineRender: true,
  props: {
    id: {},
    photoUrl: {},
    name: {},
    rating: {},
    commentCount: {},
    price: {},
    isLike: { type: Boolean, default: false }
  },
  setup(__props) {
    const backgroundImageStyle = computed(() => {
      return `background-image: url('${__props.photoUrl}')`;
    });
    const petSitterStore = usePetSitterStore();
    const { handleLikeThisPetSitter, changeIsLike } = petSitterStore;
    const handleLike = async () => {
      const isSuccess = handleLikeThisPetSitter(__props.id, !__props.isLike);
      if (!isSuccess)
        return false;
      changeIsLike(__props.id, !__props.isLike);
      return true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_ButtonUtilsLikeSwitcher = _sfc_main$g;
      const _component_UIcon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-start justify-center gap-x-4 md:hidden" }, _attrs))}><div class="aspect-square max-w-40 w-1/3 self-center rounded-xl bg-cover bg-center bg-no-repeat" style="${ssrRenderStyle(unref(backgroundImageStyle))}"></div><div class="flex flex-col grow items-center justify-center"><div class="w-full flex items-center gap-x-2 py-2"><h3 class="text-xl font-medium">${ssrInterpolate(_ctx.name)}</h3>`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "h-5 w-4",
        name: "main-icons:medal"
      }, null, _parent));
      _push(ssrRenderComponent(_component_ButtonUtilsLikeSwitcher, {
        class: "ml-auto flex items-center",
        "is-like": _ctx.isLike,
        onClick: handleLike
      }, null, _parent));
      _push(`</div><div class="w-full flex items-start justify-between"><div><div>`);
      _push(ssrRenderComponent(_component_UIcon, {
        class: "text-[#FFC658]",
        name: "i-ic:baseline-star"
      }, null, _parent));
      _push(`<span class="text-xl md:font-bold">${ssrInterpolate(_ctx.rating)}</span></div><div class="text-gray-400 sm">${ssrInterpolate(_ctx.commentCount)}\u689D\u8A55\u8AD6 </div></div><div><div><span class="text-xl md:font-bold">$${ssrInterpolate(_ctx.price)}</span>/\u6B21 </div><div class="text-gray-400 sm text-center"> \u670D\u52D9\u50F9\u683C </div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PetSitter/Card/MobileContent.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "MainContent",
  __ssrInlineRender: true,
  props: {
    name: {},
    serviceCount: {},
    commentUserImageUrl: { default: "" },
    comment: { default: "" }
  },
  setup(__props) {
    const smallRoundImageStyle = computed(() => {
      return `background-image: url('${__props.commentUserImageUrl}')`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-1" }, _attrs))}><div class="hidden md:flex items-center gap-x-4 py-2"><h3 class="text-xl font-medium">${ssrInterpolate(_ctx.name)}</h3>`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "h-5 w-4",
        name: "main-icons:medal"
      }, null, _parent));
      _push(`</div>`);
      if (_ctx.serviceCount !== 0) {
        _push(`<div class="flex items-center gap-x-2">`);
        _push(ssrRenderComponent(_component_Icon, {
          class: "h-4 w-4",
          name: "main-icons:finish"
        }, null, _parent));
        _push(`<span>\u5DF2\u5B8C\u6210${ssrInterpolate(_ctx.serviceCount)}\u6B21\u8913\u6BCD\u670D\u52D9</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center justify-start gap-x-2 px-3 py-2">`);
      if (_ctx.commentUserImageUrl !== "") {
        _push(`<div class="w-1/5 max-w-12 aspect-square rounded-full bg-cover bg-center bg-no-repeat" style="${ssrRenderStyle(unref(smallRoundImageStyle))}"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="text-gray-400 xs">${ssrInterpolate(_ctx.comment)}</p></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PetSitter/Card/MainContent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FunctionBoard",
  __ssrInlineRender: true,
  props: {
    id: {},
    rating: {},
    commentCount: {},
    price: {},
    isLike: { type: Boolean, default: false }
  },
  setup(__props) {
    const localePath = useLocalePath();
    const petSitterStore = usePetSitterStore();
    const { handleLikeThisPetSitter, changeIsLike } = petSitterStore;
    const handleLike = async () => {
      const isSuccess = handleLikeThisPetSitter(__props.id, !__props.isLike);
      if (!isSuccess)
        return false;
      changeIsLike(__props.id, !__props.isLike);
      return true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonUtilsLikeSwitcher = _sfc_main$g;
      const _component_UIcon = __nuxt_component_0$1;
      const _component_ButtonPrimary = _sfc_main$h;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-w-40 items-end gap-y-2 py-3" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ButtonUtilsLikeSwitcher, {
        class: "hidden md:flex items-center",
        "is-like": _ctx.isLike,
        onClick: handleLike
      }, null, _parent));
      _push(`<div class="hidden w-full items-center justify-between md:flex"><div><div>`);
      _push(ssrRenderComponent(_component_UIcon, {
        class: "text-[#FFC658]",
        name: "i-ic:baseline-star"
      }, null, _parent));
      _push(`<span class="text-xl font-bold">${ssrInterpolate(_ctx.rating)}</span></div><div class="text-gray-400 sm">${ssrInterpolate(_ctx.commentCount)}\u689D\u8A55\u8AD6 </div></div><div><div><span class="text-xl font-bold">$${ssrInterpolate(_ctx.price)}</span>/\u6B21 </div><div class="text-gray-400 sm text-center"> \u670D\u52D9\u50F9\u683C </div></div></div>`);
      _push(ssrRenderComponent(_component_ButtonPrimary, {
        class: "mt-auto w-full text-white",
        label: "\u67E5\u770B\u4FDD\u6BCD\u7D30\u7BC0\u8CC7\u8A0A\u6309\u9215",
        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(unref(localePath)({ name: "petSitter-id", params: { id: _ctx.id } }))
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u67E5\u770B\u4FDD\u6BCD `);
          } else {
            return [
              createTextVNode(" \u67E5\u770B\u4FDD\u6BCD ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PetSitter/Card/FunctionBoard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    id: {},
    name: {},
    photoUrl: {},
    serviceCount: {},
    commentUserImageUrl: { default: "" },
    comment: { default: "" },
    rating: {},
    commentCount: {},
    price: {},
    isLike: { type: Boolean, default: false }
  },
  setup(__props) {
    const backgroundImageStyle = computed(() => {
      return `background-image: url('${__props.photoUrl}')`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PetSitterCardMobileContent = _sfc_main$4;
      const _component_PetSitterCardMainContent = _sfc_main$3;
      const _component_PetSitterCardFunctionBoard = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col md:flex-row items-stretch gap-y-4 md:gap-x-4 md:gap-y-0 rounded-xl bg-white px-6 py-4 shadow-sm" }, _attrs))}><div class="w-1/2 bg-cover bg-center bg-no-repeat hidden aspect-square max-w-40 self-center rounded-xl md:block" style="${ssrRenderStyle(unref(backgroundImageStyle))}"></div>`);
      _push(ssrRenderComponent(_component_PetSitterCardMobileContent, {
        id: _ctx.id,
        "photo-url": _ctx.photoUrl,
        name: _ctx.name,
        rating: _ctx.rating,
        "comment-count": _ctx.commentCount,
        price: _ctx.price,
        "is-like": _ctx.isLike
      }, null, _parent));
      _push(ssrRenderComponent(_component_PetSitterCardMainContent, {
        class: "flex-grow",
        name: _ctx.name,
        "service-count": _ctx.serviceCount,
        "comment-user-image-url": _ctx.commentUserImageUrl,
        comment: _ctx.comment
      }, null, _parent));
      _push(ssrRenderComponent(_component_PetSitterCardFunctionBoard, {
        id: _ctx.id,
        class: "w-full md:w-1/4",
        rating: _ctx.rating,
        "comment-count": _ctx.commentCount,
        price: _ctx.price,
        "is-like": _ctx.isLike
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PetSitter/Card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const usePetSitterListForm = (submitFn, submitErrorFn) => {
  const isSubmittingDisabled = shallowRef(false);
  const validationSchema = toTypedSchema(petterSitterSearchSchema);
  const initialValues = {
    serviceType: "",
    serviceTimePeriod: [null, null],
    serviceRegionCodeList: [],
    petType: -1,
    priceRange: {
      min: 300,
      max: 2200
    }
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
  const { value: serviceTimePeriod } = useField("serviceTimePeriod");
  const { value: serviceRegionCodeList } = useField("serviceRegionCodeList");
  const { value: petType } = useField("petType");
  const { value: priceRange } = useField("priceRange");
  const petSizeOptionList = Object.entries(petSizeDetailName).map(([key, value]) => ({
    value: +key,
    title: value
  }));
  const petTypeOptionList = Object.entries(petNameMapping).map(([key, value]) => ({
    value: +key,
    title: value
  }));
  return {
    petSizeOptionList,
    petTypeOptionList,
    serviceType,
    serviceTimePeriod,
    serviceRegionCodeList,
    petType,
    priceRange,
    formSubmit,
    isSubmitting,
    isSubmittingDisabled,
    resetForm,
    errors
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "petSitters",
  __ssrInlineRender: true,
  setup(__props) {
    const petSitterStore = usePetSitterStore();
    const { handleSearchPetterSitters, toggleOrder, resetOrder, resetHomeServiceType, resetHomeRegionCodeList, resetHomeTimeRange } = petSitterStore;
    const { petSitterCount, petSitterList, orderStatus, homeServiceType, homeRegionCodeList, homeTimeRange } = storeToRefs(petSitterStore);
    const {
      petTypeOptionList,
      serviceType,
      serviceTimePeriod,
      serviceRegionCodeList,
      petType,
      priceRange,
      formSubmit,
      isSubmittingDisabled,
      errors
    } = usePetSitterListForm(async (values) => {
      const isLoginSuccess = await handleSearchPetterSitters(values);
      return isLoginSuccess;
    });
    useTemplateRef("searchForm");
    const currentPage = shallowRef(1);
    const changeOrderToSendForm = async () => {
      toggleOrder();
      await formSubmit();
      return true;
    };
    watch([
      serviceType,
      serviceTimePeriod,
      serviceRegionCodeList,
      petType,
      priceRange
    ], useDebounceFn(async () => {
      await formSubmit();
    }, 500));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputServiceTypeSelect = _sfc_main$9;
      const _component_InputDateTimeSingleRanger = _sfc_main$1$1;
      const _component_InputRegionSelect = _sfc_main$8;
      const _component_InputSelectWithNoValue = _sfc_main$a;
      const _component_InputPriceRanger = _sfc_main$7;
      const _component_InputRangeBar = _sfc_main$5;
      const _component_ButtonUtilsOrderHot = _sfc_main$b;
      const _component_PetSitterCard = _sfc_main$1;
      const _component_Pagination = _sfc_main$c;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap md:flex-nowrap items-start justify-center gap-x-6 px-6 sm:px-8 md:px-12 py-8" }, _attrs))}><div class="w-full md:w-1/4 flex flex-col items-start gap-y-4"><h2 class="px-3 py-2 text-2xl font-medium"> \u627E\u5C0B\u9069\u5408\u7684\u8913\u6BCD/\u5C08\u5BB6 </h2><form class="flex flex-col w-full items-center gap-y-4 rounded-xl bg-white px-4 py-3">`);
      _push(ssrRenderComponent(_component_InputServiceTypeSelect, {
        modelValue: unref(serviceType),
        "onUpdate:modelValue": ($event) => isRef(serviceType) ? serviceType.value = $event : null,
        label: "\u9810\u7D04\u670D\u52D9",
        placeholder: "\u9810\u7D04\u670D\u52D9",
        disabled: unref(isSubmittingDisabled),
        "error-message": unref(errors).serviceType,
        "is-full-size": "",
        class: "w-full"
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputDateTimeSingleRanger, {
        modelValue: unref(serviceTimePeriod),
        "onUpdate:modelValue": ($event) => isRef(serviceTimePeriod) ? serviceTimePeriod.value = $event : null,
        label: "\u9810\u7D04\u6642\u9593",
        placeholder: "\u9810\u7D04\u6642\u9593",
        disabled: unref(isSubmittingDisabled),
        "error-message": unref(errors).serviceTimePeriod,
        "is-full-size": "",
        class: "w-full"
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputRegionSelect, {
        modelValue: unref(serviceRegionCodeList),
        "onUpdate:modelValue": ($event) => isRef(serviceRegionCodeList) ? serviceRegionCodeList.value = $event : null,
        label: "\u670D\u52D9\u5340\u57DF",
        placeholder: "\u9078\u64C7\u5340\u57DF(\u53EF\u591A\u9078)",
        class: "w-full",
        disabled: unref(isSubmittingDisabled),
        "error-message": unref(errors).serviceRegionCodeList
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputSelectWithNoValue, {
        modelValue: unref(petType),
        "onUpdate:modelValue": ($event) => isRef(petType) ? petType.value = $event : null,
        label: "\u5BF5\u7269\u7A2E\u985E",
        options: unref(petTypeOptionList),
        disabled: unref(isSubmittingDisabled),
        "is-full-size": "",
        class: "w-full",
        "error-message": unref(errors).petType,
        "no-value": -1,
        placeholder: "\u8ACB\u9078\u64C7\u5BF5\u7269\u7A2E\u985E(\u53EF\u591A\u9078)"
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputPriceRanger, {
        modelValue: unref(priceRange),
        "onUpdate:modelValue": ($event) => isRef(priceRange) ? priceRange.value = $event : null,
        min: 0,
        max: 3e3,
        label: "\u50F9\u683C",
        disabled: unref(isSubmittingDisabled),
        class: "w-full",
        "error-message": unref(errors).priceRange
      }, null, _parent));
      _push(`<div class="w-full py-6">`);
      _push(ssrRenderComponent(_component_InputRangeBar, {
        modelValue: unref(priceRange),
        "onUpdate:modelValue": ($event) => isRef(priceRange) ? priceRange.value = $event : null,
        min: 0,
        max: 3e3
      }, null, _parent));
      _push(`</div></form></div><div class="w-full md:w-3/4"><div class="flex items-center justify-between py-3"><span>\u641C\u5C0B\u7D50\u679C\u5171 ${ssrInterpolate(unref(petSitterCount).toLocaleString())} \u4F4D</span>`);
      _push(ssrRenderComponent(_component_ButtonUtilsOrderHot, {
        order: unref(orderStatus),
        onClick: changeOrderToSendForm
      }, null, _parent));
      _push(`</div><div class="hidden w-full"> \u5EE3\u544A\u6B04\u4F4D </div><section class="w-full flex flex-col items-center gap-y-4"><!--[-->`);
      ssrRenderList(unref(petSitterList), (item) => {
        _push(ssrRenderComponent(_component_PetSitterCard, mergeProps({
          key: item.id,
          class: "w-full",
          ref_for: true
        }, item), null, _parent));
      });
      _push(`<!--]--></section><div class="flex items-center justify-end pt-8">`);
      _push(ssrRenderComponent(_component_Pagination, {
        modelValue: unref(currentPage),
        "onUpdate:modelValue": ($event) => isRef(currentPage) ? currentPage.value = $event : null,
        max: 5,
        "page-count": 10,
        total: 100
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/petSitters.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=petSitters-Cgfg3Ag6.mjs.map

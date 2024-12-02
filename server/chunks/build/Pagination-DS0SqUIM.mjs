import __nuxt_component_0 from './Icon-B6ODn5Cd.mjs';
import { useSSRContext, defineComponent, mergeModels, useId, shallowRef, useModel, useTemplateRef, computed, watch, unref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderComponent } from 'vue/server-renderer';
import { c as useCalendarStore, d as useElementBounding, u as useDateFormat } from './server.mjs';
import { storeToRefs } from 'pinia';
import __nuxt_component_2 from './Pagination-V5D3FNQV.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DateTimeSingleRanger",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    label: {},
    id: { default: () => useId("$sv4xrHTYIn") },
    isShowLabel: { type: Boolean, default: true },
    errorMessage: { default: "" },
    placeholder: { default: "" },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    type: { default: "text" }
  }, {
    "modelValue": { default: [null, null] },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const errorID = shallowRef("");
    const modelValue = useModel(__props, "modelValue");
    const calendarStore = useCalendarStore();
    const { changeCurrentExcludeElement, changeShowCalendarState, setCalendarDate, setPosition, resetPickDate } = calendarStore;
    const { isShowCalendar, pickDate, isPickDateFull, isCurrentExcludeElement } = storeToRefs(calendarStore);
    const dateTimepickerInput = useTemplateRef("dateTimepickerInput");
    useElementBounding(dateTimepickerInput);
    const isInputFocus = shallowRef(false);
    const inputIndicatorValue = computed(() => {
      const currentValue = modelValue.value;
      if (currentValue.length !== 2) {
        return "";
      }
      if (currentValue[0] === null || currentValue[1] === null)
        return "";
      return `${useDateFormat(currentValue[0], "YYYY/MM/DD").value} - ${useDateFormat(currentValue[1], "YYYY/MM/DD").value}`;
    });
    const clearDate = () => {
      modelValue.value = [null, null];
    };
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
      const _component_UIcon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><label${ssrRenderAttr("for", _ctx.id)} class="flex flex-col items-start gap-y-2"><span style="${ssrRenderStyle(_ctx.isShowLabel ? null : { display: "none" })}" class="flex items-center justify-center gap-x-1">`);
      if (_ctx.required) {
        _push(`<span class="text-red-500 text-xs"> * </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${ssrInterpolate(_ctx.label)}</span></span><div class="${ssrRenderClass([{
        "border-solid border-[1px] border-gray-300": !unref(isInputFocus),
        "border-solid border-[2px] border-orange-600": unref(isInputFocus),
        "bg-gray-200 ": unref(isShowCalendar) || _ctx.disabled
      }, "w-full flex items-center justify-center gap-x-2 overflow-hidden rounded-lg pr-3"])}"><input${ssrRenderAttr("id", _ctx.id)}${ssrRenderAttr("value", unref(inputIndicatorValue))}${ssrRenderAttr("type", _ctx.type)}${ssrRenderAttr("placeholder", _ctx.placeholder)} class="flex-grow px-3 py-2 outline-none"${ssrRenderAttr("aria-describedby", _ctx.errorMessage ? unref(errorID) : void 0)}${ssrIncludeBooleanAttr(unref(isShowCalendar) || _ctx.disabled) ? " disabled" : ""}>`);
      _push(ssrRenderComponent(_component_UIcon, {
        style: unref(inputIndicatorValue) !== "" ? null : { display: "none" },
        name: "i-heroicons:x-mark",
        role: "button",
        class: "cursor-pointer",
        onClick: clearDate
      }, null, _parent));
      _push(ssrRenderComponent(_component_UIcon, { name: "i-heroicons:calendar-days-16-solid" }, null, _parent));
      _push(`</div></label><span style="${ssrRenderStyle(_ctx.errorMessage ? null : { display: "none" })}"${ssrRenderAttr("id", unref(errorID))} class="text-sm text-red-500">${ssrInterpolate(_ctx.errorMessage)}</span></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/DateTimeSingleRanger.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Pagination",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    max: { default: 5 },
    pageCount: { default: 10 },
    total: {}
  }, {
    "modelValue": { default: 0 },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const currentPage = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPagination = __nuxt_component_2;
      _push(ssrRenderComponent(_component_UPagination, mergeProps({
        modelValue: currentPage.value,
        "onUpdate:modelValue": ($event) => currentPage.value = $event,
        class: "gap-x-2",
        ui: {
          base: "w-8 aspect-square flex items-center justify-center",
          rounded: "rounded-full"
        },
        "active-button": {
          variant: "outline",
          color: "orange"
        },
        "inactive-button": {
          variant: "soft",
          color: "black"
        },
        "next-button": {
          variant: "soft",
          color: "black"
        },
        "prev-button": {
          variant: "soft",
          color: "black"
        },
        max: _ctx.max,
        "page-count": _ctx.pageCount,
        total: _ctx.total
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, _sfc_main$1 as a };
//# sourceMappingURL=Pagination-DS0SqUIM.mjs.map

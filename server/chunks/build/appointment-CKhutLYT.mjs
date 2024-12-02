import { _ as _sfc_main$a } from './SelectWithNoValue-EvF5oYkr.mjs';
import { _ as _sfc_main$9, a as _sfc_main$1$1 } from './Pagination-DS0SqUIM.mjs';
import { _ as _sfc_main$b } from './Primary-DO2BBNU0.mjs';
import { useSSRContext, defineComponent, shallowRef, unref, isRef, mergeProps, mergeModels, useModel, watch, withCtx, createTextVNode, computed, createVNode, toDisplayString, useId, withModifiers } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { u as useMemberStore, a as appointmentTagList, A as AppointmentStatus, b as AppointmentDetailProcessStatus, c as appointReservationMap, d as appointmentSearchSchema } from './useMemberStore-uW6LN4tp.mjs';
import { u as usePetSitterStore } from './usePetSitterStore-BLaObs6U.mjs';
import { storeToRefs } from 'pinia';
import { u as useForm, a as useField, t as toTypedSchema } from './vee-validate-zod-CmN8nNdS.mjs';
import { u as useDateFormat, b as useThrottleFn } from './server.mjs';
import { _ as _sfc_main$c } from './Pale-B861WQUB.mjs';
import __nuxt_component_0 from './Icon-B6ODn5Cd.mjs';
import { _ as _sfc_main$d } from './OutlineRound-gX7utPmx.mjs';
import { _ as _sfc_main$e } from './ReservationInfo-CdlEHTW7.mjs';
import { _ as _sfc_main$f } from './Discussion-Bz455CEt.mjs';
import __nuxt_component_0$1 from './Modal-CUWDe7J7.mjs';
import { _ as __nuxt_component_1 } from './ModalClose-DniwJvVv.mjs';
import { _ as _sfc_main$g } from './TextArea-BzPNiDUE.mjs';
import { _ as _sfc_main$h } from './MultipleUploader-BbIg_aij.mjs';
import { _ as _sfc_main$i } from './Outline-DOrBdQBb.mjs';
import * as zod from 'zod';
import { c as createFileListSchema } from './signUp.type-C4a4H3kg.mjs';
import './SelectMenu-JtM-AXfn.mjs';
import './Avatar-DmdANAXU.mjs';
import 'tailwind-merge';
import './tooltip-CpVvyQRR.mjs';
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
import './Pagination-V5D3FNQV.mjs';
import './Button-B_jr3BZp.mjs';
import './Link-DZ2bKZug.mjs';
import './nuxt-link-BMiRqRVI.mjs';
import './link-D5-3RomB.mjs';
import './button-Bz5rwL6o.mjs';
import './useCustomError-C6r27JZ9.mjs';
import './petSitter.type-BjvpgkZ2.mjs';
import './composables-VAV01sHq.mjs';
import './NuxtImg-Ce9a8LGV.mjs';
import './transition-HtJtC6dg.mjs';
import './portal-u0Fjoh1P.mjs';
import './description-BDgAPIdI.mjs';
import './useCustomUtils-B8GVkC05.mjs';

const useMemberAppointmentSearchForm = (submitFn, submitErrorFn) => {
  const isSubmittingDisabled = shallowRef(false);
  const validationSchema = toTypedSchema(appointmentSearchSchema);
  const initialValues = {
    serviceType: "",
    timePeriod: [null, null]
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
  const { value: timePeriod } = useField("timePeriod");
  return {
    serviceType,
    timePeriod,
    formSubmit,
    isSubmitting,
    isSubmittingDisabled,
    resetForm,
    errors
  };
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "SearchForm",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    currentPage: { default: 1 }
  }, {
    "modelValue": { type: Boolean, ...{ default: false } },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const memberStore = useMemberStore();
    const { handleGetAppointmentList } = memberStore;
    const petSitterStore = usePetSitterStore();
    const { serviceTypeOptionList } = storeToRefs(petSitterStore);
    const isTriggerFormSubmit = useModel(__props, "modelValue");
    const {
      serviceType,
      timePeriod,
      formSubmit,
      isSubmittingDisabled,
      errors
    } = useMemberAppointmentSearchForm(async (values) => {
      const isSuccess = await handleGetAppointmentList(values, __props.currentPage);
      return isSuccess;
    });
    watch(() => __props.currentPage, async () => {
      await formSubmit();
    });
    watch(isTriggerFormSubmit, async (isTrigger) => {
      if (!isTrigger)
        return;
      await formSubmit();
      isTriggerFormSubmit.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputSelectWithNoValue = _sfc_main$a;
      const _component_InputDateTimeSingleRanger = _sfc_main$1$1;
      const _component_ButtonPrimary = _sfc_main$b;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "flex items-start gap-x-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_InputSelectWithNoValue, {
        id: "serviceType",
        modelValue: unref(serviceType),
        "onUpdate:modelValue": ($event) => isRef(serviceType) ? serviceType.value = $event : null,
        label: "\u9078\u64C7\u670D\u52D9",
        "is-show-label": false,
        options: unref(serviceTypeOptionList),
        "error-message": unref(errors).serviceType,
        "no-value": "",
        placeholder: "\u9078\u64C7\u670D\u52D9",
        "is-full-size": "",
        class: "min-w-40"
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputDateTimeSingleRanger, {
        id: "reservationTime",
        modelValue: unref(timePeriod),
        "onUpdate:modelValue": ($event) => isRef(timePeriod) ? timePeriod.value = $event : null,
        "is-show-label": false,
        label: "\u9810\u7D04\u6642\u9593",
        placeholder: "\u9810\u7D04\u6642\u9593",
        disabled: unref(isSubmittingDisabled),
        "error-message": unref(errors).timePeriod,
        class: "w-full max-w-80"
      }, null, _parent));
      _push(ssrRenderComponent(_component_ButtonPrimary, {
        type: "submit",
        label: "\u67E5\u8A62\u6309\u9215",
        disabled: unref(isSubmittingDisabled),
        class: "min-w-24 text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u67E5\u8A62 `);
          } else {
            return [
              createTextVNode(" \u67E5\u8A62 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Member/Appointment/SearchForm.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    ticketCode: {},
    name: {},
    avatar: {},
    appointmentTime: {},
    status: {},
    serviceName: {},
    price: {}
  },
  emits: ["update:showDetail", "update:comment"],
  setup(__props) {
    const backGroundImage = computed(() => `background-image: url('${__props.avatar}')`);
    const tagName = computed(() => {
      return appointmentTagList[__props.status];
    });
    const statusStyle = computed(() => {
      const defaultStyle = "text-black bg-transparent border-gray-400 ";
      const paleStyle = [
        AppointmentStatus.PendingForReply,
        AppointmentStatus.FinishedNoComment,
        AppointmentStatus.Finished
      ];
      if (paleStyle.includes(__props.status)) {
        return defaultStyle;
      }
      const redStyle = [
        AppointmentStatus.Error
      ];
      if (redStyle.includes(__props.status)) {
        return "text-red-500 bg-[#fef1ef] border-red-400";
      }
      const cancelStyle = [
        AppointmentStatus.Canceled
      ];
      if (cancelStyle.includes(__props.status)) {
        return "text-gray-300 border-gray-400";
      }
      const yellowStyle = [
        AppointmentStatus.ReservedPay
      ];
      if (yellowStyle.includes(__props.status)) {
        return "text-yellow-600  border-yellow-500";
      }
      const greenStyle = [
        AppointmentStatus.WaitForService
      ];
      if (greenStyle.includes(__props.status)) {
        return "text-green-500 bg-green-200 border-green-400";
      }
      return defaultStyle;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonPale = _sfc_main$c;
      const _component_UIcon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex items-center justify-between bg-gray-100 px-4 py-3">`);
      _push(ssrRenderComponent(_component_ButtonPale, {
        label: "\u524D\u5F80\u9810\u7D04",
        onClick: ($event) => _ctx.$emit("update:showDetail", _ctx.ticketCode)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u8A02\u55AE\u7DE8\u865F:<span class="underline"${_scopeId}>${ssrInterpolate(_ctx.ticketCode)}</span>`);
          } else {
            return [
              createTextVNode(" \u8A02\u55AE\u7DE8\u865F:"),
              createVNode("span", { class: "underline" }, toDisplayString(_ctx.ticketCode), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_ButtonPale, {
        label: `${unref(appointmentTagList)[_ctx.status]}`,
        class: [unref(statusStyle), "border-solid border-1 rounded-md px-3 py-1"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(tagName))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(tagName)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex items-center justify-between px-4"><div class="w-1/2 flex items-center justify-between gap-x-4 px-4 py-3"><div class="aspect-square w-16 rounded-xl bg-cover bg-center bg-no-repeat" style="${ssrRenderStyle(unref(backGroundImage))}"></div><div class="flex flex-col items-start gap-y-1 flex-grow"><p class="text-gray-400 sm"> \u8A02\u55AE\u6642\u9593:${ssrInterpolate(unref(useDateFormat)(_ctx.appointmentTime, "YYYY/MM/DD HH:mm"))}</p><span class="flex items-center justify-center gap-x-2"><span>\u9810\u7D04\u670D\u52D9:${ssrInterpolate(_ctx.serviceName)}</span><span>(${ssrInterpolate(_ctx.name)})</span></span></div></div><div class="flex items-center justify-center gap-x-4">`);
      if (_ctx.status !== unref(AppointmentStatus).FinishedNoComment && _ctx.status !== unref(AppointmentStatus).Finished) {
        _push(`<div> NT$ ${ssrInterpolate(_ctx.price)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.status === unref(AppointmentStatus).FinishedNoComment) {
        _push(ssrRenderComponent(_component_ButtonPale, {
          label: "\u66F4\u65B0\u8A55\u8AD6",
          class: "underline text-[#DBA640]",
          onClick: ($event) => _ctx.$emit("update:comment", _ctx.ticketCode)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u6211\u8981\u8A55\u50F9 `);
            } else {
              return [
                createTextVNode(" \u6211\u8981\u8A55\u50F9 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.status === unref(AppointmentStatus).Finished) {
        _push(`<div class="text-[#DBA640]"> \u5DF2\u8A55\u50F9 </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="shadow-xl shadow-[#FEEAE1] aspect-square w-6 flex items-center justify-center rounded-full border-solid border-[1px] border-orange-300">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons:chevron-right-16-solid",
        class: "text-orange-600"
      }, null, _parent));
      _push(`</button></div></div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Appointment/Card.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Process",
  __ssrInlineRender: true,
  props: {
    id: {},
    name: {},
    iconText: {},
    status: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center gap-x-2" }, _attrs))}>`);
      if (_ctx.status === unref(AppointmentDetailProcessStatus).Finished) {
        _push(`<div class="border border-solid border-orange-600 aspect-square w-8 flex items-center justify-center rounded-full">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-mdi:tick",
          class: "text-orange-600"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.status === unref(AppointmentDetailProcessStatus).Current) {
        _push(`<div class="text-white text-lg aspect-square w-8 flex items-center justify-center rounded-full bg-orange-600">${ssrInterpolate(_ctx.iconText)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.status === unref(AppointmentDetailProcessStatus).NotYet) {
        _push(`<div class="text-gray-400 text-lg border border-solid border-gray-400 aspect-square w-8 flex items-center justify-center rounded-full">${ssrInterpolate(_ctx.iconText)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${ssrInterpolate(_ctx.name)}</span></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Appointment/Detail/Process.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "PaymentBoard",
  __ssrInlineRender: true,
  props: {
    status: {},
    price: {},
    serviceName: {}
  },
  emits: ["update:payTheBill", "update:comment"],
  setup(__props) {
    const isAllowedPayTheBill = computed(() => {
      return __props.status === AppointmentStatus.PendingForReply || __props.status === AppointmentStatus.ReservedPay;
    });
    const isAllowedComment = computed(() => {
      return __props.status === AppointmentStatus.FinishedNoComment;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonPrimary = _sfc_main$b;
      const _component_ButtonOutlineRound = _sfc_main$d;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-stretch justify-center gap-x-4" }, _attrs))}><div class="w-1/3 flex items-center justify-between rounded-xl bg-gray-100 px-6 py-4"><div class="flex flex-col items-start justify-around gap-y-2"><span>\u9810\u7D04\u72C0\u614B</span><span class="text-lg font-medium">${ssrInterpolate(unref(appointReservationMap).get(_ctx.status))}</span><span style="${ssrRenderStyle(_ctx.status !== unref(AppointmentStatus).FinishedNoComment && _ctx.status !== unref(AppointmentStatus).Finished ? null : { display: "none" })}" class="${ssrRenderClass({
        "text-orange-400": _ctx.status !== unref(AppointmentStatus).WaitForService,
        "text-gray-400": _ctx.status === unref(AppointmentStatus).WaitForService
      })}">${ssrInterpolate(_ctx.status === unref(AppointmentStatus).WaitForService ? "\u7B49\u5F85\u670D\u52D9\u6642\u9593" : "\u8ACB\u6CE8\u610F\u8913\u6BCD\u624B\u6A5F\u4F86\u96FB")}</span></div>`);
      if (unref(isAllowedPayTheBill)) {
        _push(ssrRenderComponent(_component_ButtonPrimary, {
          class: "text-white",
          label: "\u4ED8\u6B3E\u6309\u9215",
          onClick: ($event) => _ctx.$emit("update:payTheBill")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u4ED8\u6B3E `);
            } else {
              return [
                createTextVNode(" \u4ED8\u6B3E ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(isAllowedComment)) {
        _push(ssrRenderComponent(_component_ButtonOutlineRound, {
          class: "text-orange-600",
          label: "\u8A55\u8AD6\u6309\u9215",
          onClick: ($event) => _ctx.$emit("update:comment")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u6211\u8981\u8A55\u50F9 `);
            } else {
              return [
                createTextVNode(" \u6211\u8981\u8A55\u50F9 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="w-1/3 flex flex-col items-start gap-y-2 rounded-xl bg-gray-100 px-6 py-4"><span>\u9810\u7D04\u91D1\u984D</span><span class="text-lg font-medium">NT$ ${ssrInterpolate(_ctx.price.toLocaleString())}</span><span class="text-gray-400">\u6B64\u70BA\u8ABF\u6574\u670D\u52D9\u9805\u76EE\u5F8C\u91D1\u984D</span></div><div class="w-1/3 flex flex-col items-start gap-y-4 rounded-xl bg-gray-100 px-6 py-4"><span>\u9810\u7D04\u670D\u52D9</span><span class="text-lg font-medium">${ssrInterpolate(_ctx.serviceName)}</span></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Appointment/Detail/PaymentBoard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ServiceInfo",
  __ssrInlineRender: true,
  props: {
    petSitterName: {},
    mainServiceName: {},
    servicePetSitterPhotoUrl: {},
    price: {},
    address: {},
    serviceStart: {},
    serviceEnd: {},
    petName: {},
    serviceDetail: {},
    serviceExtraService: {},
    totalPrice: {}
  },
  setup(__props) {
    const backGroundImage = computed(() => `background-image: url('${__props.servicePetSitterPhotoUrl}')`);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-start gap-y-4 px-6 py-4 border-solid border-[1px] border-gray-200" }, _attrs))}><span class="w-full text-lg font-medium">\u670D\u52D9\u8CC7\u8A0A</span><div class="w-full border-b border-solid border-gray-200 flex items-start gap-x-4 pb-6"><div class="aspect-square w-28 rounded-xl bg-cover bg-center" style="${ssrRenderStyle(unref(backGroundImage))}"></div><div class="flex flex-col items-start gap-y-2 flex-grow"><h4 class="text-xl font-medium">${ssrInterpolate(_ctx.petSitterName)}</h4><div class="w-full flex items-center justify-between"><span>\u670D\u52D9-${ssrInterpolate(_ctx.mainServiceName)}</span><span>NT$${ssrInterpolate(_ctx.price)}</span></div><!--[-->`);
      ssrRenderList(_ctx.serviceExtraService, (item) => {
        _push(`<div class="w-full flex items-center justify-between"><span>\u984D\u5916\u7D30\u9805-${ssrInterpolate(item.name)}</span><span>NT$${ssrInterpolate(item.price.toLocaleString())}</span></div>`);
      });
      _push(`<!--]--><div class="flex flex-col items-start text-gray-500"><span>\u670D\u52D9\u6642\u9593: ${ssrInterpolate(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))(_ctx.serviceStart, "YYYY/MM/DD HH:mm"))} \u2192 ${ssrInterpolate(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))(_ctx.serviceEnd, "YYYY/MM/DD HH:mm"))}</span><span>\u670D\u52D9\u5730\u9EDE: ${ssrInterpolate(_ctx.address)}</span><span>\u5BF5\u7269\u540D\u7A31: ${ssrInterpolate(_ctx.petName)}</span><span>\u670D\u52D9\u7D30\u9805: ${ssrInterpolate(_ctx.serviceDetail)}</span></div></div></div><div class="w-full flex items-center justify-between py-2"><span>\u7E3D\u91D1\u984D</span><span>NT$${ssrInterpolate(_ctx.totalPrice.toLocaleString())}</span></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Appointment/Detail/ServiceInfo.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Detail",
  __ssrInlineRender: true,
  emits: ["update:comment"],
  setup(__props) {
    const memberStore = useMemberStore();
    const { handleCancelReservation, resetCurrentDetailTicketCode, resetCurrentAppointmentDetail, handlePayTheBill } = memberStore;
    const { currentAppointmentDetail } = storeToRefs(memberStore);
    const appointmentMap = /* @__PURE__ */ new Map([
      [AppointmentStatus.PendingForReply, 2],
      [AppointmentStatus.ReservedPay, 3],
      [AppointmentStatus.WaitForService, 4],
      [AppointmentStatus.FinishedNoComment, 5],
      [AppointmentStatus.Finished, 5],
      [AppointmentStatus.Canceled, -1],
      [AppointmentStatus.Error, -1]
    ]);
    const processList = computed(() => {
      const detail = currentAppointmentDetail.value;
      if (detail == null)
        return [];
      const status = detail.status;
      const currentNumber = appointmentMap.get(status);
      if (!currentNumber) {
        console.warn("\u627E\u4E0D\u5230\u5C0D\u61C9\u6B04\u4F4D");
        return [];
      }
      return [
        { id: 1, name: "\u9810\u7D04\u6210\u7ACB", iconText: "1", status: getDetailStatus(currentNumber, 1) },
        { id: 2, name: "\u7B49\u5F85\u56DE\u8986", iconText: "2", status: getDetailStatus(currentNumber, 2) },
        { id: 3, name: "\u9810\u7D04\u4ED8\u6B3E", iconText: "3", status: getDetailStatus(currentNumber, 3) },
        { id: 4, name: "\u7B49\u5F85\u670D\u52D9", iconText: "4", status: getDetailStatus(currentNumber, 4) },
        { id: 5, name: "\u670D\u52D9\u5B8C\u6210", iconText: "5", status: getDetailStatus(currentNumber, 5) }
      ];
    });
    const totalPrice = computed(() => {
      const detail = currentAppointmentDetail.value;
      if (detail === null)
        return 0;
      const mainServicePrice = detail.mainService.price;
      if (!detail.serviceExtraService || detail.serviceExtraService.length === 0)
        return mainServicePrice;
      return mainServicePrice + detail.serviceExtraService.reduce((total, item) => total + item.price, 0);
    });
    const getDetailStatus = (input, currentNumber) => {
      if (input > currentNumber) {
        return AppointmentDetailProcessStatus.Finished;
      }
      if (input < currentNumber) {
        return AppointmentDetailProcessStatus.NotYet;
      }
      return AppointmentDetailProcessStatus.Current;
    };
    const backToList = () => {
      resetCurrentDetailTicketCode();
      resetCurrentAppointmentDetail();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonPale = _sfc_main$c;
      const _component_UIcon = __nuxt_component_0;
      const _component_AppointmentDetailProcess = _sfc_main$6;
      const _component_AppointmentDetailPaymentBoard = _sfc_main$5;
      const _component_AppointmentDetailReservationInfo = _sfc_main$e;
      const _component_AppointmentDetailServiceInfo = _sfc_main$4;
      const _component_Discussion = _sfc_main$f;
      if (unref(currentAppointmentDetail) !== null) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col w-full rounded-xl bg-white" }, _attrs))}>`);
        _push(ssrRenderComponent(_component_ButtonPale, {
          class: "border-b-solid border-b-[1px] border-b-gray-200 w-full flex items-center gap-x-2 px-4 py-6",
          label: "\u56DE\u5230\u9810\u7D04\u8A73\u60C5\u6309\u9215",
          onClick: backToList
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, { name: "i-uis:angle-left" }, null, _parent2, _scopeId));
              _push2(`<h3${_scopeId}>\u9810\u7D04\u8A73\u60C5</h3>`);
            } else {
              return [
                createVNode(_component_UIcon, { name: "i-uis:angle-left" }),
                createVNode("h3", null, "\u9810\u7D04\u8A73\u60C5")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="flex flex-col gap-y-4 px-4 py-3"><div class="flex items-center justify-evenly gap-x-2 rounded-xl bg-gray-100 px-4 py-6"><!--[-->`);
        ssrRenderList(unref(processList), (item, index) => {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(_component_AppointmentDetailProcess, mergeProps({ ref_for: true }, item), null, _parent));
          if (unref(processList).length - 1 !== index) {
            _push(`<div class="${ssrRenderClass([{
              "bg-orange-600": item.status === unref(AppointmentDetailProcessStatus).Finished,
              "bg-gray-300": item.status !== unref(AppointmentDetailProcessStatus).Finished
            }, "w-[calc(11%_-_2.5rem)] h-[0.05rem]"])}"></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
        _push(ssrRenderComponent(_component_AppointmentDetailPaymentBoard, {
          status: unref(currentAppointmentDetail).status,
          price: unref(currentAppointmentDetail).mainService.price,
          "service-name": unref(currentAppointmentDetail).mainService.name,
          "onUpdate:payTheBill": ($event) => unref(handlePayTheBill)(unref(currentAppointmentDetail).ticketCode),
          "onUpdate:comment": ($event) => _ctx.$emit("update:comment", unref(currentAppointmentDetail).ticketCode)
        }, null, _parent));
        _push(ssrRenderComponent(_component_AppointmentDetailReservationInfo, {
          "ticket-code": unref(currentAppointmentDetail).ticketCode,
          "ticket-estiblish-time": unref(currentAppointmentDetail).ticketEstiblishTime,
          price: unref(currentAppointmentDetail).mainService.price,
          "keeper-name": unref(currentAppointmentDetail).keeperName,
          "keeper-phone": unref(currentAppointmentDetail).keeperphone,
          "keeper-mail": unref(currentAppointmentDetail).keeperEmail,
          status: unref(currentAppointmentDetail).status,
          "onUpdate:cancelReservation": unref(handleCancelReservation)
        }, null, _parent));
        _push(ssrRenderComponent(_component_AppointmentDetailServiceInfo, {
          class: "-mt-4",
          "pet-sitter-name": unref(currentAppointmentDetail).servicePetSitterName,
          "main-service-name": unref(currentAppointmentDetail).mainService.name,
          "service-pet-sitter-photo-url": unref(currentAppointmentDetail).servicePetSitterPhotoUrl,
          price: unref(currentAppointmentDetail).mainService.price,
          address: unref(currentAppointmentDetail).serviceAddress,
          "service-start": unref(currentAppointmentDetail).serviceTimeStart,
          "service-end": unref(currentAppointmentDetail).serviceTimeEnd,
          "pet-name": unref(currentAppointmentDetail).petNameDescription,
          "service-detail": unref(currentAppointmentDetail).serviceDetail,
          "service-extra-service": unref(currentAppointmentDetail).serviceExtraService,
          "total-price": unref(totalPrice)
        }, null, _parent));
        _push(`<article class="${ssrRenderClass([{
          "rounded-b-xl": !unref(currentAppointmentDetail).discussionList || unref(currentAppointmentDetail).discussionList.length === 0,
          "border-b-none": unref(currentAppointmentDetail).discussionList && unref(currentAppointmentDetail).discussionList.length > 0
        }, "-mt-4 border-solid border-[1px] border-gray-30 border-t-none px-6 py-4 space-y-4"])}"><h4 class="text-lg font-medium"> \u9810\u7D04\u55AE\u5099\u6CE8 </h4><p class="whitespace-pre-line leading-relaxed">${ssrInterpolate(unref(currentAppointmentDetail).description)}</p></article>`);
        if (unref(currentAppointmentDetail).discussionList && unref(currentAppointmentDetail).discussionList.length > 0) {
          _push(ssrRenderComponent(_component_Discussion, {
            class: "-mt-4 w-full",
            "is-top-not-rounded": "",
            "discussion-list": unref(currentAppointmentDetail).discussionList
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Appointment/Detail.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "StarRanker",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    label: {},
    id: { default: () => useId("$muosrNDH1M") },
    isShowLabel: { type: Boolean, default: true },
    errorMessage: { default: "" },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false }
  }, {
    "modelValue": { default: 0 },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const errorID = useId("$GsaGaH879i");
    const startCount = useModel(__props, "modelValue");
    const rateWithStar = (currentStarCount) => {
      if (__props.disabled)
        return;
      if (startCount.value === currentStarCount) {
        startCount.value = 0;
        return;
      }
      startCount.value = currentStarCount;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div${ssrRenderAttr("for", _ctx.id)} class="flex flex-col items-start gap-y-2"><span style="${ssrRenderStyle(_ctx.isShowLabel ? null : { display: "none" })}" class="flex items-center justify-center gap-x-1">`);
      if (_ctx.required) {
        _push(`<span class="text-red-500 text-xs"> * </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${ssrInterpolate(_ctx.label)}</span></span><div class="flex items-center gap-x-2"><!--[-->`);
      ssrRenderList(5, (item) => {
        _push(ssrRenderComponent(_component_UIcon, {
          key: item,
          role: "button",
          class: {
            "text-[#FFC658]": item <= startCount.value,
            "text-[#F4F4F4]": item > startCount.value
          },
          name: "i-ic:baseline-star",
          onClick: ($event) => rateWithStar(item)
        }, null, _parent));
      });
      _push(`<!--]--></div></div><span style="${ssrRenderStyle(_ctx.errorMessage ? null : { display: "none" })}"${ssrRenderAttr("id", unref(errorID))} class="text-sm text-red-500">${ssrInterpolate(_ctx.errorMessage)}</span></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/StarRanker.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const commentFormSchema = zod.object({
  rate: zod.number().int().nonnegative("\u8ACB\u8F38\u5165\u6B63\u6574\u6578\u62160").min(1, "\u6700\u5C11\u8A55\u50F9\u4E00\u9846\u661F").max(5, "\u4E0D\u80FD\u8D85\u904E\u4E94\u9846\u661F"),
  shareComment: zod.string().min(1, "\u8ACB\u7559\u4E0B\u8A55\u8A9E").max(500, "\u8A55\u8A9E\u5BEB\u592A\u9577\u4E86\u5427\uFF01(500 \u5B57\u5167)"),
  petServiceImageList: createFileListSchema().nullable().refine((fileList) => {
    if (fileList !== null && fileList.length > 0) {
      if (!(fileList instanceof FileList)) {
        return false;
      }
      const fileArrayList = Array.from(fileList);
      return fileArrayList.every((file) => file.type.startsWith("image"));
    }
    return true;
  }, "\u4FDD\u59C6\u670D\u52D9\u7167\u7247\u683C\u5F0F\u932F\u8AA4")
});
const useMemberCommentForm = (submitFn, submitErrorFn) => {
  const isSubmittingDisabled = shallowRef(false);
  const validationSchema = toTypedSchema(commentFormSchema);
  const initialValues = {
    rate: 0,
    shareComment: "",
    petServiceImageList: null
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
  const { value: rate } = useField("rate");
  const { value: shareComment } = useField("shareComment");
  const { value: petServiceImageList } = useField("petServiceImageList");
  return {
    rate,
    shareComment,
    petServiceImageList,
    formSubmit,
    isSubmitting,
    isSubmittingDisabled,
    resetForm,
    errors
  };
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Comment",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    ticketCode: {}
  }, {
    "modelValue": { type: Boolean, ...{ default: false } },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["update:updateList"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const memberStore = useMemberStore();
    const { handleCommentSubmit } = memberStore;
    const isShow = useModel(__props, "modelValue");
    const {
      rate,
      shareComment,
      petServiceImageList,
      formSubmit,
      isSubmittingDisabled,
      resetForm,
      errors
    } = useMemberCommentForm(async (values) => {
      const isSuccess = await handleCommentSubmit(__props.ticketCode, values);
      if (isSuccess) {
        isShow.value = false;
        emit("update:updateList");
      }
      return isSuccess;
    });
    const cancelAndReset = () => {
      resetForm();
      isShow.value = false;
    };
    watch(() => __props.ticketCode, (code) => {
      if (code !== "")
        return;
      isShow.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = __nuxt_component_0$1;
      const _component_ButtonModalClose = __nuxt_component_1;
      const _component_InputStarRanker = _sfc_main$2;
      const _component_InputTextArea = _sfc_main$g;
      const _component_InputMultipleUploader = _sfc_main$h;
      const _component_ButtonOutline = _sfc_main$i;
      const _component_ButtonPrimary = _sfc_main$b;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        modelValue: isShow.value,
        "onUpdate:modelValue": ($event) => isShow.value = $event,
        fullscreen: "",
        ui: {
          container: "flex items-center justify-center w-full",
          fullscreen: "w-full h-full md:w-[40vw] md:h-[95vh]",
          base: "rounded-xl shadow-xl border-solid border-[1px] border-gray-200 overflow-y-auto py-[2.5] gap-y-4"
        }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between border-b border-solid border-gray-200 px-4 py-3"${_scopeId}><div class="flex flex-col items-start gap-y-1"${_scopeId}><h3 class="text-xl font-medium"${_scopeId}> \u8A55\u50F9\u6B64\u6B21\u670D\u52D9 </h3><span class="text-gray-300 text-sm"${_scopeId}>\u9810\u7D04\u7DE8\u865F ${ssrInterpolate(_ctx.ticketCode)}</span></div>`);
            _push2(ssrRenderComponent(_component_ButtonModalClose, {
              onClick: ($event) => isShow.value = false
            }, null, _parent2, _scopeId));
            _push2(`</div><form class="flex flex-col gap-y-2 px-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_InputStarRanker, {
              modelValue: unref(rate),
              "onUpdate:modelValue": ($event) => isRef(rate) ? rate.value = $event : null,
              label: "\u661F\u7D1A\u8A55\u50F9",
              required: "",
              class: "w-full",
              disabled: unref(isSubmittingDisabled),
              "show-limit": 500,
              "error-message": unref(errors).rate
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputTextArea, {
              modelValue: unref(shareComment),
              "onUpdate:modelValue": ($event) => isRef(shareComment) ? shareComment.value = $event : null,
              label: "\u8ACB\u60A8\u7C21\u55AE\u63CF\u8FF0\u60A8\u7684\u8913\u6BCD\u7D93\u9A57",
              placeholder: "\u5206\u4EAB\u4F60\u7684\u670D\u52D9\u9AD4\u9A57\uFF0C\u8B93\u66F4\u591A\u98FC\u4E3B\u505A\u51FA\u597D\u7684\u9078\u64C7\uFF01",
              required: "",
              class: "w-full",
              disabled: unref(isSubmittingDisabled),
              "show-limit": 500,
              "error-message": unref(errors).shareComment
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputMultipleUploader, {
              modelValue: unref(petServiceImageList),
              "onUpdate:modelValue": ($event) => isRef(petServiceImageList) ? petServiceImageList.value = $event : null,
              label: "\u5BF5\u7269\u8913\u6BCD\u670D\u52D9\u7167\u7247",
              placeholder: "\u4E0A\u50B3",
              class: "w-full",
              disabled: unref(isSubmittingDisabled),
              "error-message": unref(errors).petServiceImageList
            }, null, _parent2, _scopeId));
            _push2(`<p class="text-gray-400 text-sm"${_scopeId}> \u5C3A\u5BF8 600x600 px \u4EE5\u4E0A\uFF0C\u5C0F\u65BC 1MB\uFF0C\u683C\u5F0FJPG / PNG / JPEG \u3002 </p><div class="w-full h-[0.05rem] bg-gray-300"${_scopeId}></div><div class="flex items-center justify-end gap-x-4 mb-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ButtonOutline, {
              class: "min-w-24 flex items-center justify-center rounded-xl border border-solid border-orange-600 text-orange-600",
              label: "\u91CD\u8A2D\u500B\u4EBA\u8CC7\u6599\u6B04\u4F4D\u6309\u9215",
              onClick: cancelAndReset
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u53D6\u6D88 `);
                } else {
                  return [
                    createTextVNode(" \u53D6\u6D88 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ButtonPrimary, {
              class: "min-w-24 text-white",
              type: "submit",
              label: "\u8A3B\u518A\u6703\u54E1\u9001\u51FA\u6309\u9215"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u5132\u5B58 `);
                } else {
                  return [
                    createTextVNode(" \u5132\u5B58 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between border-b border-solid border-gray-200 px-4 py-3" }, [
                createVNode("div", { class: "flex flex-col items-start gap-y-1" }, [
                  createVNode("h3", { class: "text-xl font-medium" }, " \u8A55\u50F9\u6B64\u6B21\u670D\u52D9 "),
                  createVNode("span", { class: "text-gray-300 text-sm" }, "\u9810\u7D04\u7DE8\u865F " + toDisplayString(_ctx.ticketCode), 1)
                ]),
                createVNode(_component_ButtonModalClose, {
                  onClick: ($event) => isShow.value = false
                }, null, 8, ["onClick"])
              ]),
              createVNode("form", {
                class: "flex flex-col gap-y-2 px-4",
                onSubmit: withModifiers(unref(formSubmit), ["prevent"])
              }, [
                createVNode(_component_InputStarRanker, {
                  modelValue: unref(rate),
                  "onUpdate:modelValue": ($event) => isRef(rate) ? rate.value = $event : null,
                  label: "\u661F\u7D1A\u8A55\u50F9",
                  required: "",
                  class: "w-full",
                  disabled: unref(isSubmittingDisabled),
                  "show-limit": 500,
                  "error-message": unref(errors).rate
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "error-message"]),
                createVNode(_component_InputTextArea, {
                  modelValue: unref(shareComment),
                  "onUpdate:modelValue": ($event) => isRef(shareComment) ? shareComment.value = $event : null,
                  label: "\u8ACB\u60A8\u7C21\u55AE\u63CF\u8FF0\u60A8\u7684\u8913\u6BCD\u7D93\u9A57",
                  placeholder: "\u5206\u4EAB\u4F60\u7684\u670D\u52D9\u9AD4\u9A57\uFF0C\u8B93\u66F4\u591A\u98FC\u4E3B\u505A\u51FA\u597D\u7684\u9078\u64C7\uFF01",
                  required: "",
                  class: "w-full",
                  disabled: unref(isSubmittingDisabled),
                  "show-limit": 500,
                  "error-message": unref(errors).shareComment
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "error-message"]),
                createVNode(_component_InputMultipleUploader, {
                  modelValue: unref(petServiceImageList),
                  "onUpdate:modelValue": ($event) => isRef(petServiceImageList) ? petServiceImageList.value = $event : null,
                  label: "\u5BF5\u7269\u8913\u6BCD\u670D\u52D9\u7167\u7247",
                  placeholder: "\u4E0A\u50B3",
                  class: "w-full",
                  disabled: unref(isSubmittingDisabled),
                  "error-message": unref(errors).petServiceImageList
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "error-message"]),
                createVNode("p", { class: "text-gray-400 text-sm" }, " \u5C3A\u5BF8 600x600 px \u4EE5\u4E0A\uFF0C\u5C0F\u65BC 1MB\uFF0C\u683C\u5F0FJPG / PNG / JPEG \u3002 "),
                createVNode("div", { class: "w-full h-[0.05rem] bg-gray-300" }),
                createVNode("div", { class: "flex items-center justify-end gap-x-4 mb-2" }, [
                  createVNode(_component_ButtonOutline, {
                    class: "min-w-24 flex items-center justify-center rounded-xl border border-solid border-orange-600 text-orange-600",
                    label: "\u91CD\u8A2D\u500B\u4EBA\u8CC7\u6599\u6B04\u4F4D\u6309\u9215",
                    onClick: withModifiers(cancelAndReset, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u53D6\u6D88 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ButtonPrimary, {
                    class: "min-w-24 text-white",
                    type: "submit",
                    label: "\u8A3B\u518A\u6703\u54E1\u9001\u51FA\u6309\u9215"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u5132\u5B58 ")
                    ]),
                    _: 1
                  })
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Appointment/Detail/Modal/Comment.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "appointment",
  __ssrInlineRender: true,
  setup(__props) {
    const memberStore = useMemberStore();
    const { handleGetAppointmentList, handleGetAppointmentDetail, resetCurrentDetailTicketCode, resetCurrentAppointmentDetail } = memberStore;
    const { appointmentList, currentDetailTicketCode } = storeToRefs(memberStore);
    const currentPage = shallowRef(1);
    const isTriggerUpdate = shallowRef(false);
    const isShowCommentModal = shallowRef(false);
    const commentTicketCode = shallowRef("");
    const showCommentModal = (ticketCode) => {
      isShowCommentModal.value = true;
      commentTicketCode.value = ticketCode;
    };
    const triggerUpdateList = async () => {
      isTriggerUpdate.value = true;
      if (currentDetailTicketCode.value === "")
        return;
      await handleGetAppointmentDetail(currentDetailTicketCode.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MemberAppointmentSearchForm = _sfc_main$8;
      const _component_AppointmentCard = _sfc_main$7;
      const _component_Pagination = _sfc_main$9;
      const _component_AppointmentDetail = _sfc_main$3;
      const _component_AppointmentDetailModalComment = _sfc_main$1;
      _push(`<!--[-->`);
      if (unref(currentDetailTicketCode) === "") {
        _push(`<div class="w-full rounded-xl bg-white"><div class="px-4 py-6 border-b border-gray-300"> \u9810\u7D04\u5217\u8868 </div><div class="flex flex-col gap-y-6 px-4 py-6">`);
        _push(ssrRenderComponent(_component_MemberAppointmentSearchForm, {
          modelValue: unref(isTriggerUpdate),
          "onUpdate:modelValue": ($event) => isRef(isTriggerUpdate) ? isTriggerUpdate.value = $event : null,
          "current-page": unref(currentPage)
        }, null, _parent));
        _push(`<section class="flex flex-col w-full items-center justify-center"><!--[-->`);
        ssrRenderList(unref(appointmentList), (item) => {
          _push(ssrRenderComponent(_component_AppointmentCard, mergeProps({
            key: item.ticketCode,
            class: "w-full",
            ref_for: true
          }, item, {
            "onUpdate:showDetail": unref(handleGetAppointmentDetail),
            "onUpdate:comment": showCommentModal
          }), null, _parent));
        });
        _push(`<!--]--></section><div class="w-full flex items-center justify-center">`);
        _push(ssrRenderComponent(_component_Pagination, {
          modelValue: unref(currentPage),
          "onUpdate:modelValue": ($event) => isRef(currentPage) ? currentPage.value = $event : null,
          max: 5,
          "page-count": 10,
          total: 100
        }, null, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(ssrRenderComponent(_component_AppointmentDetail, { "onUpdate:comment": showCommentModal }, null, _parent));
      }
      _push(ssrRenderComponent(_component_AppointmentDetailModalComment, {
        modelValue: unref(isShowCommentModal),
        "onUpdate:modelValue": ($event) => isRef(isShowCommentModal) ? isShowCommentModal.value = $event : null,
        "ticket-code": unref(commentTicketCode),
        "onUpdate:updateList": triggerUpdateList
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/member/appointment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=appointment-CKhutLYT.mjs.map

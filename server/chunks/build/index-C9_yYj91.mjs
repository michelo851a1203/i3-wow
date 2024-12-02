import { useSSRContext, defineComponent, mergeProps, unref, isRef, withCtx, createTextVNode, useId, shallowRef } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './Select-Jj7n4e63.mjs';
import { _ as _sfc_main$3 } from './TextArea-BzPNiDUE.mjs';
import { _ as _sfc_main$4 } from './MultipleUploader-BbIg_aij.mjs';
import { _ as _sfc_main$5 } from './Outline-DOrBdQBb.mjs';
import { _ as _sfc_main$6 } from './Primary-DO2BBNU0.mjs';
import { u as useMemberStore } from './useMemberStore-uW6LN4tp.mjs';
import { u as useForm, a as useField, t as toTypedSchema } from './vee-validate-zod-CmN8nNdS.mjs';
import { a as memberPetSitterInfoFormSchema } from './memberInfo.type-BHPS2aO7.mjs';
import { b as useThrottleFn } from './server.mjs';
import './SelectMenu-JtM-AXfn.mjs';
import './Icon-B6ODn5Cd.mjs';
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
import './Modal-CUWDe7J7.mjs';
import './transition-HtJtC6dg.mjs';
import './portal-u0Fjoh1P.mjs';
import './description-BDgAPIdI.mjs';
import './Pale-B861WQUB.mjs';
import './useCustomUtils-B8GVkC05.mjs';
import 'zod';
import './useCustomError-C6r27JZ9.mjs';
import './petSitter.type-BjvpgkZ2.mjs';
import './composables-VAV01sHq.mjs';
import './signUp.type-C4a4H3kg.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "None",
  __ssrInlineRender: true,
  props: {
    label: {},
    id: { default: () => useId() },
    isShowLabel: { type: Boolean, default: true },
    value: { default: "" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({
        style: _ctx.isShowLabel ? null : { display: "none" },
        for: _ctx.id,
        class: "flex flex-col items-start gap-y-2"
      }, _attrs))}><span>${ssrInterpolate(_ctx.label)}</span><input${ssrRenderAttr("id", _ctx.id)} disabled class="bg-transparent text-gray-400"${ssrRenderAttr("value", _ctx.value)}></label>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/None.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const useMemberPetSitterInfoForm = (submitFn, submitErrorFn) => {
  const isSubmittingDisabled = shallowRef(false);
  const validationSchema = toTypedSchema(memberPetSitterInfoFormSchema);
  const initialValues = {
    experienceYear: 0,
    introduction: "",
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
  const { value: experienceYear } = useField("experienceYear");
  const { value: introduction } = useField("introduction");
  const { value: petServiceImageList } = useField("petServiceImageList");
  const allExperienceYearList = Array.from({ length: 50 }, (_, index) => ({
    value: index,
    title: `${index}`
  }));
  return {
    allExperienceYearList,
    experienceYear,
    introduction,
    petServiceImageList,
    formSubmit,
    isSubmitting,
    isSubmittingDisabled,
    resetForm,
    errors
  };
};
const firstName = "\u674E";
const lastName = "\u4E8E\u6D0B";
const phoneNumber = "0912345678";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const memberStore = useMemberStore();
    const { handlePetSitterInfo } = memberStore;
    const {
      allExperienceYearList,
      experienceYear,
      introduction,
      petServiceImageList,
      formSubmit,
      isSubmittingDisabled,
      resetForm,
      errors
    } = useMemberPetSitterInfoForm(async (values) => {
      const isSuccess = await handlePetSitterInfo(values);
      return isSuccess;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputNone = _sfc_main$1;
      const _component_InputSelect = _sfc_main$2;
      const _component_InputTextArea = _sfc_main$3;
      const _component_InputMultipleUploader = _sfc_main$4;
      const _component_ButtonOutline = _sfc_main$5;
      const _component_ButtonPrimary = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-xl bg-white" }, _attrs))}><div class="border-b border-gray-300 px-6 py-4"> \u8913\u6BCD\u57FA\u672C\u8CC7\u6599 </div><form class="flex flex-col gap-y-4 px-6 py-4"><div class="flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_InputNone, {
        id: "firstName",
        label: "\u771F\u5BE6\u59D3\u6C0F",
        value: firstName,
        class: "w-1/3"
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputNone, {
        id: "lastName",
        label: "\u771F\u5BE6\u540D\u5B57",
        value: lastName,
        class: "w-2/3"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_InputNone, {
        id: "phoneNumber",
        label: "\u624B\u6A5F\u865F\u78BC",
        value: phoneNumber
      }, null, _parent));
      _push(`</div><div class="w-full h-[0.3px] bg-gray-300"></div>`);
      _push(ssrRenderComponent(_component_InputSelect, {
        modelValue: unref(experienceYear),
        "onUpdate:modelValue": ($event) => isRef(experienceYear) ? experienceYear.value = $event : null,
        label: "\u60A8\u5F9E\u4E8B\u5BF5\u7269\u8913\u6BCD\u7684\u5E74\u8CC7\u8CC7\u6B77",
        required: "",
        class: "w-full",
        suffix: "\u5E74",
        options: unref(allExperienceYearList),
        disabled: unref(isSubmittingDisabled),
        "error-message": unref(errors).experienceYear
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputTextArea, {
        modelValue: unref(introduction),
        "onUpdate:modelValue": ($event) => isRef(introduction) ? introduction.value = $event : null,
        label: "\u81EA\u6211\u4ECB\u7D39",
        placeholder: "\u7C21\u77ED\u4ECB\u7D39\u4F60\u81EA\u5DF1\u7684\u904E\u5F80\u8913\u6BCD\u7D93\u9A57\u5427\uFF01",
        required: "",
        class: "w-full",
        disabled: unref(isSubmittingDisabled),
        "show-limit": 500,
        "error-message": unref(errors).introduction
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputMultipleUploader, {
        modelValue: unref(petServiceImageList),
        "onUpdate:modelValue": ($event) => isRef(petServiceImageList) ? petServiceImageList.value = $event : null,
        label: "\u5BF5\u7269\u8913\u6BCD\u670D\u52D9\u7167\u7247",
        placeholder: "\u4E0A\u50B3",
        disabled: unref(isSubmittingDisabled),
        "error-message": unref(errors).petServiceImageList
      }, null, _parent));
      _push(`<div class="text-gray-400 text-sm"> \u5C3A\u5BF8 600x600 px \u4EE5\u4E0A\uFF0C\u5C0F\u65BC 1MB\uFF0C\u683C\u5F0FJPG / PNG / JPEG \u3002 </div><div class="flex items-center justify-start gap-x-4">`);
      _push(ssrRenderComponent(_component_ButtonOutline, {
        label: "\u91CD\u8A2D\u500B\u4EBA\u8CC7\u6599\u6B04\u4F4D\u6309\u9215",
        class: "border border-orange-600 min-w-24 flex items-center justify-center rounded-xl text-orange-600",
        onClick: unref(resetForm)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u91CD\u8A2D `);
          } else {
            return [
              createTextVNode(" \u91CD\u8A2D ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ButtonPrimary, {
        class: "min-w-24 text-white",
        type: "submit",
        label: "\u9001\u51FA\u4E26\u5132\u5B58\u5DF2\u586B\u597D\u7684\u8913\u6BCD\u57FA\u672C\u8CC7\u6599\u6309\u9215"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u5132\u5B58 `);
          } else {
            return [
              createTextVNode(" \u5132\u5B58 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/member/petSitter/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-C9_yYj91.mjs.map

import { _ as _sfc_main$1 } from './Common-DHSSImN5.mjs';
import { _ as _sfc_main$2, a as _sfc_main$1$1, b as _sfc_main$6 } from './SocialNetWorkLinkList-BCMh_oDh.mjs';
import { _ as _sfc_main$3 } from './TextArea-BzPNiDUE.mjs';
import { _ as _sfc_main$4 } from './Select-Jj7n4e63.mjs';
import { _ as _sfc_main$5 } from './MultipleUploader-BbIg_aij.mjs';
import { _ as _sfc_main$7 } from './Primary-DO2BBNU0.mjs';
import { defineComponent, mergeProps, unref, isRef, withCtx, createTextVNode, useSSRContext, shallowRef } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useMemberStore } from './useMemberStore-uW6LN4tp.mjs';
import { u as useForm, a as useField, t as toTypedSchema } from './vee-validate-zod-CmN8nNdS.mjs';
import { m as memberBePetSitterFormSchema } from './memberPetSitter.type-CaMt6ZpT.mjs';
import { b as useThrottleFn } from './server.mjs';
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
import './useCustomUtils-B8GVkC05.mjs';
import './Pale-B861WQUB.mjs';
import './Outline-DOrBdQBb.mjs';
import './signUp.type-C4a4H3kg.mjs';
import 'zod';
import './SelectMenu-JtM-AXfn.mjs';
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
import './useCustomError-C6r27JZ9.mjs';
import './petSitter.type-BjvpgkZ2.mjs';
import './composables-VAV01sHq.mjs';

const useMemberBePetSitterForm = (submitFn, submitErrorFn) => {
  const isSubmittingDisabled = shallowRef(false);
  const validationSchema = toTypedSchema(memberBePetSitterFormSchema);
  const initialValues = {
    firstName: "",
    lastName: "",
    mobilePhone: "",
    email: "",
    identityImageFront: null,
    identityImageBack: null,
    title: "",
    experienceYear: 0,
    description: "",
    certificateProofFileList: "",
    petServiceImageList: "",
    isExperienceOnOtherPlatform: false,
    otherPlatform: "",
    socialNetworkLinkList: []
  };
  const isExperienceOtherPlatformOptionsList = [
    {
      value: false,
      title: "\u6C92\u6709"
    },
    {
      value: true,
      title: "\u6709"
    }
  ];
  const allExperienceYearList = Array.from({ length: 50 }, (_, index) => ({
    value: index,
    title: `${index}`
  }));
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
  const { value: firstName } = useField("firstName");
  const { value: lastName } = useField("lastName");
  const { value: mobilePhone } = useField("mobilePhone");
  const { value: email } = useField("email");
  const { value: identityImageFront } = useField("identityImageFront");
  const { value: identityImageBack } = useField("identityImageBack");
  const { value: title } = useField("title");
  const { value: experienceYear } = useField("experienceYear");
  const { value: description } = useField("description");
  const { value: certificateProofFileList } = useField("certificateProofFileList");
  const { value: petServiceImageList } = useField("petServiceImageList");
  const { value: isExperienceOnOtherPlatform } = useField("isExperienceOnOtherPlatform");
  const { value: otherPlatform } = useField("otherPlatform");
  const { value: socialNetworkLinkList } = useField("socialNetworkLinkList");
  return {
    allExperienceYearList,
    isExperienceOtherPlatformOptionsList,
    firstName,
    lastName,
    mobilePhone,
    email,
    identityImageFront,
    identityImageBack,
    title,
    experienceYear,
    description,
    certificateProofFileList,
    petServiceImageList,
    isExperienceOnOtherPlatform,
    otherPlatform,
    socialNetworkLinkList,
    formSubmit,
    isSubmitting,
    isSubmittingDisabled,
    resetForm,
    errors
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "bePetSitter",
  __ssrInlineRender: true,
  setup(__props) {
    const baseStore = useMemberStore();
    const { handleBeAPetSitter } = baseStore;
    const {
      allExperienceYearList,
      isExperienceOtherPlatformOptionsList,
      firstName,
      lastName,
      mobilePhone,
      email,
      identityImageFront,
      identityImageBack,
      title,
      experienceYear,
      description,
      certificateProofFileList,
      petServiceImageList,
      isExperienceOnOtherPlatform,
      otherPlatform,
      socialNetworkLinkList,
      formSubmit,
      isSubmittingDisabled,
      errors
    } = useMemberBePetSitterForm(async (values) => {
      const isSuccess = await handleBeAPetSitter(values);
      return isSuccess;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputCommon = _sfc_main$1;
      const _component_InputUploader = _sfc_main$2;
      const _component_InputTextArea = _sfc_main$3;
      const _component_InputSelect = _sfc_main$4;
      const _component_InputMultipleUploader = _sfc_main$5;
      const _component_InputRadioListVertical = _sfc_main$1$1;
      const _component_SignUpPetSitterQualificationSocialNetWorkLinkList = _sfc_main$6;
      const _component_ButtonPrimary = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full bg-white" }, _attrs))}><div class="border-b border-gray-300 px-4 py-6"> \u6210\u70BA\u8913\u6BCD </div><form class="flex flex-col gap-y-4 px-4 py-6"><div class="flex items-start gap-x-4">`);
      _push(ssrRenderComponent(_component_InputCommon, {
        modelValue: unref(firstName),
        "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
        label: "\u771F\u5BE6\u59D3\u6C0F",
        placeholder: "\u8ACB\u8F38\u5165\u59D3\u6C0F",
        required: "",
        class: "w-1/2",
        disabled: unref(isSubmittingDisabled),
        "error-message": unref(errors).firstName
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputCommon, {
        modelValue: unref(lastName),
        "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
        label: "\u771F\u5BE6\u540D\u5B57",
        placeholder: "\u8ACB\u8F38\u5165\u540D\u5B57",
        required: "",
        class: "w-1/2",
        disabled: unref(isSubmittingDisabled),
        "error-message": unref(errors).lastName
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_InputCommon, {
        modelValue: unref(mobilePhone),
        "onUpdate:modelValue": ($event) => isRef(mobilePhone) ? mobilePhone.value = $event : null,
        label: "\u624B\u6A5F\u865F\u78BC",
        placeholder: "\u50C5\u7528\u65BC\u9A57\u8B49\u7528\u9014\uFF0C\u975E\u516C\u958B",
        required: "",
        class: "w-1/2",
        disabled: unref(isSubmittingDisabled),
        "error-message": unref(errors).mobilePhone
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputCommon, {
        modelValue: unref(email),
        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
        label: "\u96FB\u5B50\u4FE1\u7BB1",
        placeholder: "\u50C5\u7528\u65BC\u9A57\u8B49\u7528\u9014\uFF0C\u975E\u516C\u958B",
        required: "",
        class: "w-full",
        disabled: unref(isSubmittingDisabled),
        "error-message": unref(errors).email
      }, null, _parent));
      _push(`<div class="flex items-start justify-center gap-x-4">`);
      _push(ssrRenderComponent(_component_InputUploader, {
        modelValue: unref(identityImageFront),
        "onUpdate:modelValue": ($event) => isRef(identityImageFront) ? identityImageFront.value = $event : null,
        "is-show-label": false,
        label: "\u982D\u929C\u3001\u81EA\u6211\u4ECB\u7D39",
        placeholder: "\u6B63\u9762\u4E0A\u50B3",
        required: "",
        class: "w-1/2",
        disabled: unref(isSubmittingDisabled),
        "error-message": unref(errors).identityImageFront
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputUploader, {
        modelValue: unref(identityImageBack),
        "onUpdate:modelValue": ($event) => isRef(identityImageBack) ? identityImageBack.value = $event : null,
        "is-show-label": false,
        label: "\u982D\u929C\u3001\u81EA\u6211\u4ECB\u7D39",
        placeholder: "\u53CD\u9762\u4E0A\u50B3",
        required: "",
        class: "w-1/2",
        disabled: unref(isSubmittingDisabled),
        "error-message": unref(errors).identityImageBack
      }, null, _parent));
      _push(`</div><div class="text-gray-400"> \u7533\u8ACB\u5BF5\u7269\u8913\u6BCD\u9700\u5BE6\u540D\u8A8D\u8B49\uFF0C\u7169\u8ACB\u60A8\u4F5C\u63D0\u4F9B\u70BA\u8CC7\u6599\u9A57\u8B49\uFF0C\u4EE5\u4E0A\u8CC7\u8A0A\u5C07\u53D7\u5230\u56B4\u683C\u7BA1\u63A7\uFF0C\u8ACB\u60A8\u653E\u5FC3\u3002 </div>`);
      _push(ssrRenderComponent(_component_InputTextArea, {
        modelValue: unref(title),
        "onUpdate:modelValue": ($event) => isRef(title) ? title.value = $event : null,
        label: "\u982D\u929C\u3001\u81EA\u6211\u4ECB\u7D39",
        placeholder: "\u7C21\u77ED\u4ECB\u7D39\u4F60\u81EA\u5DF1\uFF0C\u8B93\u98FC\u4E3B\u66F4\u6CE8\u610F\u5230\u4F60\u5427",
        required: "",
        class: "w-full",
        disabled: unref(isSubmittingDisabled),
        "show-limit": 200,
        "error-message": unref(errors).title
      }, null, _parent));
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
        modelValue: unref(description),
        "onUpdate:modelValue": ($event) => isRef(description) ? description.value = $event : null,
        label: "\u8ACB\u60A8\u7C21\u55AE\u63CF\u8FF0\u60A8\u7684\u8913\u6BCD\u7D93\u9A57",
        placeholder: "\u7C21\u77ED\u4ECB\u7D39\u4F60\u81EA\u5DF1\u7684\u904E\u5F80\u8913\u6BCD\u7D93\u9A57\u5427\uFF01",
        required: "",
        class: "w-full",
        disabled: unref(isSubmittingDisabled),
        "show-limit": 200,
        "error-message": unref(errors).description
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputMultipleUploader, {
        modelValue: unref(certificateProofFileList),
        "onUpdate:modelValue": ($event) => isRef(certificateProofFileList) ? certificateProofFileList.value = $event : null,
        label: "\u7279\u5BF5\u8B49\u660E\u8207\u76F8\u95DC\u8B49\u7167",
        placeholder: "\u4E0A\u50B3",
        required: "",
        class: "w-full",
        disabled: unref(isSubmittingDisabled),
        "error-message": unref(errors).certificateProofFileList
      }, null, _parent));
      _push(`<p class="text-gray-400 text-sm -mt-2"> \u8ACB\u60A8\u63D0\u4F9B\u6E05\u6670\u7684\u76F8\u95DC\u5BF5\u7269\u8B49\u7167\u8207\u8003\u7167\uFF0C\u6216\u8005\u653F\u5E9C\u55AE\u4F4D\u3001\u5354\u6703\u7B49\u4FEE\u7FD2\u8AB2\u7A0B\u4E4B\u8B49\u660E\u3001\u7167\u7247\u7B49\uFF0C\u5C07\u4F5C\u70BA\u8A3B\u518A\u8913\u6BCD\u6642\u4E4B\u5C08\u696D\u7A4D\u5206\u8207\u66DD\u5149\u3002 </p>`);
      _push(ssrRenderComponent(_component_InputMultipleUploader, {
        modelValue: unref(petServiceImageList),
        "onUpdate:modelValue": ($event) => isRef(petServiceImageList) ? petServiceImageList.value = $event : null,
        label: "\u5BF5\u7269\u8913\u6BCD\u670D\u52D9\u7167\u7247",
        placeholder: "\u4E0A\u50B3",
        class: "w-full",
        disabled: unref(isSubmittingDisabled),
        "error-message": unref(errors).petServiceImageList
      }, null, _parent));
      _push(`<p class="text-gray-400 text-sm -mt-2"> \u5C3A\u5BF8 600x600 px \u4EE5\u4E0A\uFF0C\u5C0F\u65BC 1MB\uFF0C\u683C\u5F0FJPG / PNG / JPEG \u3002 </p>`);
      _push(ssrRenderComponent(_component_InputRadioListVertical, {
        modelValue: unref(isExperienceOnOtherPlatform),
        "onUpdate:modelValue": ($event) => isRef(isExperienceOnOtherPlatform) ? isExperienceOnOtherPlatform.value = $event : null,
        input: unref(otherPlatform),
        "onUpdate:input": ($event) => isRef(otherPlatform) ? otherPlatform.value = $event : null,
        label: "\u662F\u5426\u6709\u5728\u5176\u4ED6\u5BF5\u7269\u8913\u6BCD\u5E73\u53F0\u670D\u52D9\u7684\u7D93\u9A57?",
        required: "",
        class: "w-full",
        "option-list": unref(isExperienceOtherPlatformOptionsList),
        disabled: unref(isSubmittingDisabled),
        "error-message": unref(errors).isExperienceOnOtherPlatform,
        "show-input-when-value-is": true,
        placeholder: "\u8ACB\u8F38\u5165\u5176\u4ED6\u5BF5\u7269\u8913\u6BCD\u5E73\u53F0\u670D\u52D9"
      }, null, _parent));
      _push(ssrRenderComponent(_component_SignUpPetSitterQualificationSocialNetWorkLinkList, {
        modelValue: unref(socialNetworkLinkList),
        "onUpdate:modelValue": ($event) => isRef(socialNetworkLinkList) ? socialNetworkLinkList.value = $event : null,
        "error-message": unref(errors).socialNetworkLinkList,
        disabled: unref(isSubmittingDisabled)
      }, null, _parent));
      _push(ssrRenderComponent(_component_ButtonPrimary, {
        type: "submit",
        class: "w-1/3 text-white",
        label: "\u9001\u51FA\u6210\u70BA\u8913\u6BCD\u7533\u8ACB\u6309\u9215"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u9001\u51FA\u7533\u8ACB `);
          } else {
            return [
              createTextVNode(" \u9001\u51FA\u7533\u8ACB ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/member/bePetSitter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=bePetSitter-CWwVw7gW.mjs.map

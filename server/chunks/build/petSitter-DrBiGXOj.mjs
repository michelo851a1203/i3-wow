import { _ as _sfc_main$8 } from './NuxtImg-Ce9a8LGV.mjs';
import { _ as __nuxt_component_1 } from './Card-BR-BXdAC.mjs';
import { useSSRContext, defineComponent, computed, h, mergeProps, withCtx, unref, createVNode, createTextVNode, isRef, withModifiers, renderSlot, shallowRef } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { b as PetSitterSignUpStep, d as petSitterSignUpQualificationFormSchema, P as PetSitterSignUpPersonalImageType, p as petSittersignUpPersonalFormSchema } from './signUp.type-C4a4H3kg.mjs';
import { D as nuxtLinkDefaults, a as useLocalePath, k as hasProtocol, g as useRoute, _ as _export_sfc, b as useThrottleFn, n as navigateTo } from './server.mjs';
import { _ as _sfc_main$9 } from './Common-DHSSImN5.mjs';
import { _ as _sfc_main$a } from './TextArea-BzPNiDUE.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$1$1, b as _sfc_main$e } from './SocialNetWorkLinkList-BCMh_oDh.mjs';
import { _ as _sfc_main$b } from './Primary-DO2BBNU0.mjs';
import { u as useAuthStore, a as useStorageStore } from './useAuthStore-6LI8GoiG.mjs';
import { u as useForm, a as useField, t as toTypedSchema } from './vee-validate-zod-CmN8nNdS.mjs';
import { storeToRefs } from 'pinia';
import { _ as _sfc_main$c } from './Select-Jj7n4e63.mjs';
import { _ as _sfc_main$d } from './MultipleUploader-BbIg_aij.mjs';
import * as zod from 'zod';
import { d as defineNuxtLink } from './nuxt-link-BMiRqRVI.mjs';
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
import './Icon-B6ODn5Cd.mjs';
import './index-Bq1kpYX2.mjs';
import '@iconify/utils/lib/css/icon';
import './useCustomUtils-B8GVkC05.mjs';
import './Pale-B861WQUB.mjs';
import './Outline-DOrBdQBb.mjs';
import './useCustomError-C6r27JZ9.mjs';
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

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ProgressRound",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean, default: false },
    isBeforeFinish: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["aspect-square w-12 flex items-center justify-center rounded-full", [
          _ctx.active ? "bg-[#FFC658]" : "bg-transparent"
        ]]
      }, _attrs))}><div class="w-[2.65rem] aspect-square flex items-center justify-center rounded-full bg-white"><div class="${ssrRenderClass([[
        _ctx.active || !_ctx.active && _ctx.isBeforeFinish ? "bg-[#FFC658]" : "bg-gray-200"
      ], "aspect-square w-8 flex items-center justify-center rounded-full"])}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SignUp/PetSitter/ProgressRound.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Progress",
  __ssrInlineRender: true,
  props: {
    currentState: { default: () => PetSitterSignUpStep.None }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SignUpPetSitterProgressRound = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full flex items-center justify-evenly" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SignUpPetSitterProgressRound, {
        active: _ctx.currentState === unref(PetSitterSignUpStep).Personal,
        "is-before-finish": _ctx.currentState === unref(PetSitterSignUpStep).Qualification || _ctx.currentState === unref(PetSitterSignUpStep).Audit
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 1 `);
          } else {
            return [
              createTextVNode(" 1 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="${ssrRenderClass([{
        "w-[calc(12.5%_-_0.125rem)] left-[calc(25%_-_0.25rem)] bg-[#FFC658]": _ctx.currentState !== unref(PetSitterSignUpStep).Personal,
        "w-[calc(12.5%_-_1.125rem)] left-[calc(25%_+_0.75rem)] bg-[#FFC658]": _ctx.currentState === unref(PetSitterSignUpStep).Personal
      }, "absolute z-1 h-[0.125rem]"])}"></div><div class="${ssrRenderClass([{
        "w-[calc(12.5%_-_0.125rem)]": _ctx.currentState !== unref(PetSitterSignUpStep).Qualification,
        "w-[calc(12.5%_-_1.125rem)]": _ctx.currentState === unref(PetSitterSignUpStep).Qualification,
        "bg-gray-200": _ctx.currentState === unref(PetSitterSignUpStep).Personal,
        "bg-[#FFC658]": _ctx.currentState !== unref(PetSitterSignUpStep).Personal
      }, "absolute left-[calc(37.5%_-_0.375rem)] z-1 h-[0.125rem]"])}"></div>`);
      _push(ssrRenderComponent(_component_SignUpPetSitterProgressRound, {
        active: _ctx.currentState === unref(PetSitterSignUpStep).Qualification,
        "is-before-finish": _ctx.currentState === unref(PetSitterSignUpStep).Audit
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 2 `);
          } else {
            return [
              createTextVNode(" 2 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="${ssrRenderClass([{
        "w-[calc(12.5%_-_0.125rem)] left-[calc(50%_+_0.5rem)]": _ctx.currentState !== unref(PetSitterSignUpStep).Qualification,
        "w-[calc(12.5%_-_1.125rem)] left-[calc(50%_+_1.5rem)]": _ctx.currentState === unref(PetSitterSignUpStep).Qualification,
        "bg-gray-200": _ctx.currentState === unref(PetSitterSignUpStep).Personal,
        "bg-[#FFC658]": _ctx.currentState !== unref(PetSitterSignUpStep).Personal
      }, "absolute z-1 h-[0.125rem]"])}"></div><div class="${ssrRenderClass([{
        "bg-gray-200 w-[calc(12.5%_-_0.125rem)]": _ctx.currentState !== unref(PetSitterSignUpStep).Audit,
        "bg-[#FFC658] w-[calc(12.5%_-_1.125rem)]": _ctx.currentState === unref(PetSitterSignUpStep).Audit
      }, "absolute left-[calc(62.5%_+_0.375rem)] z-1 h-[0.125rem]"])}"></div>`);
      _push(ssrRenderComponent(_component_SignUpPetSitterProgressRound, {
        active: _ctx.currentState === unref(PetSitterSignUpStep).Audit
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 3 `);
          } else {
            return [
              createTextVNode(" 3 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SignUp/PetSitter/Progress.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex items-center justify-evenly" }, _attrs))}><h4>\u500B\u4EBA\u8CC7\u6599</h4><h4>\u8CC7\u683C\u6AA2\u6E2C</h4><h4>\u9001\u5BE9\u5B8C\u6210</h4></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SignUp/PetSitter/ProgressDescription.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
const usePetSitterSignUpForm = (submitFn, submitErrorFn) => {
  const isSubmittingDisabled = shallowRef(false);
  const validationSchema = toTypedSchema(petSittersignUpPersonalFormSchema);
  const storageStore = useStorageStore();
  const { initializeImageIndexDB, getAllImage } = storageStore;
  const { storeName } = storeToRefs(storageStore);
  const initialValues = {
    firstName: "",
    lastName: "",
    identityImageFront: null,
    identityImageBack: null,
    title: "",
    mobilePhone: "",
    email: ""
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
  const { value: firstName } = useField("firstName");
  const { value: lastName } = useField("lastName");
  const { value: identityImageFront } = useField("identityImageFront");
  const { value: identityImageBack } = useField("identityImageBack");
  const { value: title } = useField("title");
  const { value: mobilePhone } = useField("mobilePhone");
  const { value: email } = useField("email");
  const isSentButtonDisabled = computed(() => {
    const firstNameIsEmpty = firstName.value === "";
    const lastNameIsEmpty = lastName.value === "";
    const identityImageFrontIsEmpty = identityImageFront.value === null;
    const identityImageBackIsEmpty = identityImageBack.value === null;
    const titleIsEmpty = title.value === "";
    const mobilePhoneIsEmpty = mobilePhone.value === "";
    const emailIsEmpty = email.value === "";
    if (firstNameIsEmpty || lastNameIsEmpty || identityImageFrontIsEmpty || identityImageBackIsEmpty || titleIsEmpty || mobilePhoneIsEmpty || emailIsEmpty) {
      return true;
    }
    const disabled = Object.values(errors.value).length !== 0;
    return disabled || isSubmittingDisabled.value;
  });
  const setFieldValue = async (form) => {
    firstName.value = form.firstName;
    lastName.value = form.lastName;
    title.value = form.title;
    mobilePhone.value = form.mobilePhone;
    email.value = form.email;
    const db = await initializeImageIndexDB();
    if (db === null)
      return;
    const imageSetList = await getAllImage(db, storeName.value)();
    const frontImageRecord = imageSetList.find((item) => item.name === PetSitterSignUpPersonalImageType.PersonalIdentityImageFront);
    if (frontImageRecord) {
      identityImageFront.value = frontImageRecord.data;
    }
    const backImageRecord = imageSetList.find((item) => item.name === PetSitterSignUpPersonalImageType.PersonalIdentityImageBack);
    if (backImageRecord) {
      identityImageBack.value = backImageRecord.data;
    }
  };
  return {
    firstName,
    lastName,
    identityImageFront,
    identityImageBack,
    title,
    mobilePhone,
    email,
    formSubmit,
    isSubmitting,
    isSubmittingDisabled,
    resetForm,
    errors,
    isSentButtonDisabled,
    setFieldValue
  };
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Personal",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    const authStore = useAuthStore();
    const { setPetSitterPersonalForm, finishPetSitterSignUpPersonal } = authStore;
    const {
      firstName,
      lastName,
      identityImageFront,
      identityImageBack,
      title,
      mobilePhone,
      email,
      formSubmit,
      isSubmittingDisabled,
      errors,
      isSentButtonDisabled,
      setFieldValue
    } = usePetSitterSignUpForm(async (values) => {
      const isLoginSuccess = await finishPetSitterSignUpPersonal(values);
      if (isLoginSuccess) {
        navigateTo({ path: localePath("signUp-petSitter"), query: { step: PetSitterSignUpStep.Qualification } });
      }
      return isLoginSuccess;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SignInCard = __nuxt_component_1;
      const _component_InputCommon = _sfc_main$9;
      const _component_InputTextArea = _sfc_main$a;
      const _component_InputUploader = _sfc_main$2$1;
      const _component_ButtonPrimary = _sfc_main$b;
      _push(ssrRenderComponent(_component_SignInCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="border-b border-b-gray-300 -mt-2 -mx-8 px-8 pb-2 font-bold"${_scopeId}> \u8913\u6BCD\u500B\u4EBA\u8CC7\u6599 </h2><form class="flex flex-col gap-y-4 pt-6"${_scopeId}><div class="flex items-start gap-x-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_InputCommon, {
              modelValue: unref(firstName),
              "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
              label: "\u59D3\u6C0F",
              placeholder: "\u8ACB\u8F38\u5165\u59D3\u6C0F",
              required: "",
              class: "w-1/2",
              disabled: unref(isSubmittingDisabled),
              "error-message": unref(errors).firstName
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputCommon, {
              modelValue: unref(lastName),
              "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
              label: "\u540D\u5B57",
              placeholder: "\u8ACB\u8F38\u5165\u540D\u5B57",
              required: "",
              class: "w-1/2",
              disabled: unref(isSubmittingDisabled),
              "error-message": unref(errors).lastName
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_InputTextArea, {
              modelValue: unref(title),
              "onUpdate:modelValue": ($event) => isRef(title) ? title.value = $event : null,
              label: "\u982D\u929C\u3001\u81EA\u6211\u4ECB\u7D39",
              placeholder: "\u7C21\u77ED\u4ECB\u7D39\u4F60\u81EA\u5DF1\uFF0C\u8B93\u98FC\u4E3B\u66F4\u6CE8\u610F\u5230\u4F60\u5427",
              required: "",
              class: "w-full",
              disabled: unref(isSubmittingDisabled),
              "show-limit": 200,
              "error-message": unref(errors).title
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex flex-col items-start gap-y-2"${_scopeId}><div class="flex items-center justify-center"${_scopeId}><span class="text-red-500 text-sm"${_scopeId}>*</span><span${_scopeId}>\u8EAB\u5206\u8B49\u6B63\u53CD\u9762</span></div><div class="w-full flex items-start gap-x-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_InputUploader, {
              modelValue: unref(identityImageFront),
              "onUpdate:modelValue": ($event) => isRef(identityImageFront) ? identityImageFront.value = $event : null,
              "is-show-label": false,
              label: "\u8EAB\u5206\u8B49\u6B63\u9762\u4E0A\u50B3",
              placeholder: "\u6B63\u9762\u4E0A\u50B3",
              required: "",
              class: "w-1/2",
              disabled: unref(isSubmittingDisabled),
              "error-message": unref(errors).identityImageFront
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputUploader, {
              modelValue: unref(identityImageBack),
              "onUpdate:modelValue": ($event) => isRef(identityImageBack) ? identityImageBack.value = $event : null,
              "is-show-label": false,
              label: "\u8EAB\u5206\u8B49\u53CD\u9762\u4E0A\u50B3",
              placeholder: "\u53CD\u9762\u4E0A\u50B3",
              required: "",
              class: "w-1/2",
              disabled: unref(isSubmittingDisabled),
              "error-message": unref(errors).identityImageBack
            }, null, _parent2, _scopeId));
            _push2(`</div></div><p class="text-gray-400 text-sm"${_scopeId}> \u7533\u8ACB\u5BF5\u7269\u8913\u6BCD\u9700\u5BE6\u540D\u8A8D\u8B49\uFF0C\u7169\u8ACB\u60A8\u4F5C\u63D0\u4F9B\u70BA\u8CC7\u6599\u9A57\u8B49\uFF0C\u4EE5\u4E0A\u8CC7\u8A0A\u5C07\u53D7\u5230\u56B4\u683C\u7BA1\u63A7\uFF0C\u8ACB\u60A8\u653E\u5FC3\u3002 </p>`);
            _push2(ssrRenderComponent(_component_InputCommon, {
              modelValue: unref(mobilePhone),
              "onUpdate:modelValue": ($event) => isRef(mobilePhone) ? mobilePhone.value = $event : null,
              label: "\u624B\u6A5F\u865F\u78BC",
              placeholder: "\u50C5\u7528\u65BC\u9A57\u8B49\u7528\u9014\uFF0C\u975E\u516C\u958B",
              required: "",
              class: "w-full",
              disabled: unref(isSubmittingDisabled),
              "error-message": unref(errors).mobilePhone
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputCommon, {
              modelValue: unref(email),
              "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
              label: "\u96FB\u5B50\u4FE1\u7BB1",
              placeholder: "\u50C5\u7528\u65BC\u9A57\u8B49\u7528\u9014\uFF0C\u975E\u516C\u958B",
              required: "",
              class: "w-full",
              disabled: unref(isSubmittingDisabled),
              "error-message": unref(errors).email
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ButtonPrimary, {
              type: "submit",
              class: "w-full text-white",
              label: "\u524D\u5F80\u8CC7\u683C\u6AA2\u6E2C\u6309\u9215",
              disabled: unref(isSentButtonDisabled)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u4E0B\u4E00\u6B65 `);
                } else {
                  return [
                    createTextVNode(" \u4E0B\u4E00\u6B65 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form>`);
          } else {
            return [
              createVNode("h2", { class: "border-b border-b-gray-300 -mt-2 -mx-8 px-8 pb-2 font-bold" }, " \u8913\u6BCD\u500B\u4EBA\u8CC7\u6599 "),
              createVNode("form", {
                class: "flex flex-col gap-y-4 pt-6",
                onSubmit: withModifiers(unref(formSubmit), ["prevent"])
              }, [
                createVNode("div", { class: "flex items-start gap-x-4" }, [
                  createVNode(_component_InputCommon, {
                    modelValue: unref(firstName),
                    "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                    label: "\u59D3\u6C0F",
                    placeholder: "\u8ACB\u8F38\u5165\u59D3\u6C0F",
                    required: "",
                    class: "w-1/2",
                    disabled: unref(isSubmittingDisabled),
                    "error-message": unref(errors).firstName
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "error-message"]),
                  createVNode(_component_InputCommon, {
                    modelValue: unref(lastName),
                    "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                    label: "\u540D\u5B57",
                    placeholder: "\u8ACB\u8F38\u5165\u540D\u5B57",
                    required: "",
                    class: "w-1/2",
                    disabled: unref(isSubmittingDisabled),
                    "error-message": unref(errors).lastName
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "error-message"])
                ]),
                createVNode(_component_InputTextArea, {
                  modelValue: unref(title),
                  "onUpdate:modelValue": ($event) => isRef(title) ? title.value = $event : null,
                  label: "\u982D\u929C\u3001\u81EA\u6211\u4ECB\u7D39",
                  placeholder: "\u7C21\u77ED\u4ECB\u7D39\u4F60\u81EA\u5DF1\uFF0C\u8B93\u98FC\u4E3B\u66F4\u6CE8\u610F\u5230\u4F60\u5427",
                  required: "",
                  class: "w-full",
                  disabled: unref(isSubmittingDisabled),
                  "show-limit": 200,
                  "error-message": unref(errors).title
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "error-message"]),
                createVNode("div", { class: "flex flex-col items-start gap-y-2" }, [
                  createVNode("div", { class: "flex items-center justify-center" }, [
                    createVNode("span", { class: "text-red-500 text-sm" }, "*"),
                    createVNode("span", null, "\u8EAB\u5206\u8B49\u6B63\u53CD\u9762")
                  ]),
                  createVNode("div", { class: "w-full flex items-start gap-x-4" }, [
                    createVNode(_component_InputUploader, {
                      modelValue: unref(identityImageFront),
                      "onUpdate:modelValue": ($event) => isRef(identityImageFront) ? identityImageFront.value = $event : null,
                      "is-show-label": false,
                      label: "\u8EAB\u5206\u8B49\u6B63\u9762\u4E0A\u50B3",
                      placeholder: "\u6B63\u9762\u4E0A\u50B3",
                      required: "",
                      class: "w-1/2",
                      disabled: unref(isSubmittingDisabled),
                      "error-message": unref(errors).identityImageFront
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "error-message"]),
                    createVNode(_component_InputUploader, {
                      modelValue: unref(identityImageBack),
                      "onUpdate:modelValue": ($event) => isRef(identityImageBack) ? identityImageBack.value = $event : null,
                      "is-show-label": false,
                      label: "\u8EAB\u5206\u8B49\u53CD\u9762\u4E0A\u50B3",
                      placeholder: "\u53CD\u9762\u4E0A\u50B3",
                      required: "",
                      class: "w-1/2",
                      disabled: unref(isSubmittingDisabled),
                      "error-message": unref(errors).identityImageBack
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "error-message"])
                  ])
                ]),
                createVNode("p", { class: "text-gray-400 text-sm" }, " \u7533\u8ACB\u5BF5\u7269\u8913\u6BCD\u9700\u5BE6\u540D\u8A8D\u8B49\uFF0C\u7169\u8ACB\u60A8\u4F5C\u63D0\u4F9B\u70BA\u8CC7\u6599\u9A57\u8B49\uFF0C\u4EE5\u4E0A\u8CC7\u8A0A\u5C07\u53D7\u5230\u56B4\u683C\u7BA1\u63A7\uFF0C\u8ACB\u60A8\u653E\u5FC3\u3002 "),
                createVNode(_component_InputCommon, {
                  modelValue: unref(mobilePhone),
                  "onUpdate:modelValue": ($event) => isRef(mobilePhone) ? mobilePhone.value = $event : null,
                  label: "\u624B\u6A5F\u865F\u78BC",
                  placeholder: "\u50C5\u7528\u65BC\u9A57\u8B49\u7528\u9014\uFF0C\u975E\u516C\u958B",
                  required: "",
                  class: "w-full",
                  disabled: unref(isSubmittingDisabled),
                  "error-message": unref(errors).mobilePhone
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "error-message"]),
                createVNode(_component_InputCommon, {
                  modelValue: unref(email),
                  "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                  label: "\u96FB\u5B50\u4FE1\u7BB1",
                  placeholder: "\u50C5\u7528\u65BC\u9A57\u8B49\u7528\u9014\uFF0C\u975E\u516C\u958B",
                  required: "",
                  class: "w-full",
                  disabled: unref(isSubmittingDisabled),
                  "error-message": unref(errors).email
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "error-message"]),
                createVNode(_component_ButtonPrimary, {
                  type: "submit",
                  class: "w-full text-white",
                  label: "\u524D\u5F80\u8CC7\u683C\u6AA2\u6E2C\u6309\u9215",
                  disabled: unref(isSentButtonDisabled)
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u4E0B\u4E00\u6B65 ")
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ], 40, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SignUp/PetSitter/Personal.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const usePetSitterSignUpQualificationForm = (submitFn, submitErrorFn) => {
  const isSubmittingDisabled = shallowRef(false);
  const formSchema = petSitterSignUpQualificationFormSchema.superRefine(({ isExperienceOnOtherPlatform: isExperienceOnOtherPlatform2, otherPlatform: otherPlatform2 }, ctx) => {
    if (isExperienceOnOtherPlatform2 && otherPlatform2 === "") {
      ctx.addIssue({
        path: ["isExperienceOnOtherPlatform"],
        code: zod.ZodIssueCode.custom,
        message: "\u8ACB\u8F38\u5165\u5176\u4ED6\u5E73\u53F0\u540D\u7A31"
      });
    }
  });
  const validationSchema = toTypedSchema(formSchema);
  const allExperienceYearList = Array.from({ length: 50 }, (_, index) => ({
    value: index,
    title: `${index}`
  }));
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
  const initialValues = {
    experienceYear: 0,
    description: "",
    certificateProofFileList: null,
    petServiceImageList: null,
    isExperienceOnOtherPlatform: false,
    otherPlatform: "",
    socialNetworkLinkList: []
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
  const { value: description } = useField("description");
  const { value: certificateProofFileList } = useField("certificateProofFileList");
  const { value: petServiceImageList } = useField("petServiceImageList");
  const { value: isExperienceOnOtherPlatform } = useField("isExperienceOnOtherPlatform");
  const { value: otherPlatform } = useField("otherPlatform");
  const { value: socialNetworkLinkList } = useField("socialNetworkLinkList");
  const isSentButtonDisabled = computed(() => {
    const descriptionEmpty = description.value === "";
    const certificateProofFileListEmpty = certificateProofFileList.value === null || certificateProofFileList.value.length === 0;
    if (descriptionEmpty || certificateProofFileListEmpty) {
      return true;
    }
    const disabled = Object.values(errors.value).length !== 0;
    return disabled || isSubmittingDisabled.value;
  });
  return {
    allExperienceYearList,
    isExperienceOtherPlatformOptionsList,
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
    errors,
    isSentButtonDisabled
  };
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Qualification",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    const authStore = useAuthStore();
    const { handlePetSitterSignUp, resetPetSitterPersonalForm, removeImageDBPersonal } = authStore;
    const {
      allExperienceYearList,
      isExperienceOtherPlatformOptionsList,
      experienceYear,
      description,
      certificateProofFileList,
      petServiceImageList,
      isExperienceOnOtherPlatform,
      otherPlatform,
      socialNetworkLinkList,
      formSubmit,
      isSubmittingDisabled,
      errors,
      isSentButtonDisabled
    } = usePetSitterSignUpQualificationForm(async (values) => {
      const isSignupSuccess = await handlePetSitterSignUp(values);
      if (isSignupSuccess) {
        localStorage.removeItem("petSitter_signup_personal_temp");
        resetPetSitterPersonalForm();
        await removeImageDBPersonal();
        navigateTo({ path: localePath("signUp-petSitter"), query: { step: PetSitterSignUpStep.Audit } });
      }
      return isSignupSuccess;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SignInCard = __nuxt_component_1;
      const _component_InputSelect = _sfc_main$c;
      const _component_InputTextArea = _sfc_main$a;
      const _component_InputMultipleUploader = _sfc_main$d;
      const _component_InputRadioListVertical = _sfc_main$1$1;
      const _component_SignUpPetSitterQualificationSocialNetWorkLinkList = _sfc_main$e;
      const _component_ButtonPrimary = _sfc_main$b;
      _push(ssrRenderComponent(_component_SignInCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="border-b border-gray-300 -mt-2 -mx-8 px-8 pb-2 font-bold"${_scopeId}> \u8913\u6BCD\u8CC7\u6599\u6AA2\u6E2C </h2><form class="flex flex-col gap-y-4 pt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_InputSelect, {
              modelValue: unref(experienceYear),
              "onUpdate:modelValue": ($event) => isRef(experienceYear) ? experienceYear.value = $event : null,
              label: "\u60A8\u5F9E\u4E8B\u5BF5\u7269\u8913\u6BCD\u7684\u5E74\u8CC7\u8CC7\u6B77",
              required: "",
              class: "w-full",
              suffix: "\u5E74",
              options: unref(allExperienceYearList),
              disabled: unref(isSubmittingDisabled),
              "error-message": unref(errors).experienceYear
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputTextArea, {
              modelValue: unref(description),
              "onUpdate:modelValue": ($event) => isRef(description) ? description.value = $event : null,
              label: "\u8ACB\u60A8\u7C21\u55AE\u63CF\u8FF0\u60A8\u7684\u8913\u6BCD\u7D93\u9A57",
              placeholder: "\u7C21\u77ED\u4ECB\u7D39\u4F60\u81EA\u5DF1\u7684\u904E\u5F80\u8913\u6BCD\u7D93\u9A57\u5427\uFF01",
              required: "",
              class: "w-full",
              disabled: unref(isSubmittingDisabled),
              "show-limit": 200,
              "error-message": unref(errors).description
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputMultipleUploader, {
              modelValue: unref(certificateProofFileList),
              "onUpdate:modelValue": ($event) => isRef(certificateProofFileList) ? certificateProofFileList.value = $event : null,
              label: "\u7279\u5BF5\u8B49\u660E\u8207\u76F8\u95DC\u8B49\u7167",
              placeholder: "\u4E0A\u50B3",
              required: "",
              class: "w-full",
              disabled: unref(isSubmittingDisabled),
              "error-message": unref(errors).certificateProofFileList
            }, null, _parent2, _scopeId));
            _push2(`<p class="text-gray-400 text-sm -mt-2"${_scopeId}> \u8ACB\u60A8\u63D0\u4F9B\u6E05\u6670\u7684\u76F8\u95DC\u5BF5\u7269\u8B49\u7167\u8207\u8003\u7167\uFF0C\u6216\u8005\u653F\u5E9C\u55AE\u4F4D\u3001\u5354\u6703\u7B49\u4FEE\u7FD2\u8AB2\u7A0B\u4E4B\u8B49\u660E\u3001\u7167\u7247\u7B49\uFF0C\u5C07\u4F5C\u70BA\u8A3B\u518A\u8913\u6BCD\u6642\u4E4B\u5C08\u696D\u7A4D\u5206\u8207\u66DD\u5149\u3002 </p>`);
            _push2(ssrRenderComponent(_component_InputMultipleUploader, {
              modelValue: unref(petServiceImageList),
              "onUpdate:modelValue": ($event) => isRef(petServiceImageList) ? petServiceImageList.value = $event : null,
              label: "\u5BF5\u7269\u8913\u6BCD\u670D\u52D9\u7167\u7247",
              placeholder: "\u4E0A\u50B3",
              class: "w-full",
              disabled: unref(isSubmittingDisabled),
              "error-message": unref(errors).petServiceImageList
            }, null, _parent2, _scopeId));
            _push2(`<p class="text-gray-400 text-sm -mt-2"${_scopeId}> \u5C3A\u5BF8 600x600 px \u4EE5\u4E0A\uFF0C\u5C0F\u65BC 1MB\uFF0C\u683C\u5F0FJPG / PNG / JPEG \u3002 </p>`);
            _push2(ssrRenderComponent(_component_InputRadioListVertical, {
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
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SignUpPetSitterQualificationSocialNetWorkLinkList, {
              modelValue: unref(socialNetworkLinkList),
              "onUpdate:modelValue": ($event) => isRef(socialNetworkLinkList) ? socialNetworkLinkList.value = $event : null,
              "error-message": unref(errors).socialNetworkLinkList,
              disabled: unref(isSubmittingDisabled)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ButtonPrimary, {
              type: "submit",
              class: "w-full text-white",
              label: "\u9001\u51FA\u7533\u8ACB\u6309\u9215",
              disabled: unref(isSentButtonDisabled)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u9001\u51FA\u7533\u8ACB `);
                } else {
                  return [
                    createTextVNode(" \u9001\u51FA\u7533\u8ACB ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form>`);
          } else {
            return [
              createVNode("h2", { class: "border-b border-gray-300 -mt-2 -mx-8 px-8 pb-2 font-bold" }, " \u8913\u6BCD\u8CC7\u6599\u6AA2\u6E2C "),
              createVNode("form", {
                class: "flex flex-col gap-y-4 pt-6",
                onSubmit: withModifiers(unref(formSubmit), ["prevent"])
              }, [
                createVNode(_component_InputSelect, {
                  modelValue: unref(experienceYear),
                  "onUpdate:modelValue": ($event) => isRef(experienceYear) ? experienceYear.value = $event : null,
                  label: "\u60A8\u5F9E\u4E8B\u5BF5\u7269\u8913\u6BCD\u7684\u5E74\u8CC7\u8CC7\u6B77",
                  required: "",
                  class: "w-full",
                  suffix: "\u5E74",
                  options: unref(allExperienceYearList),
                  disabled: unref(isSubmittingDisabled),
                  "error-message": unref(errors).experienceYear
                }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "disabled", "error-message"]),
                createVNode(_component_InputTextArea, {
                  modelValue: unref(description),
                  "onUpdate:modelValue": ($event) => isRef(description) ? description.value = $event : null,
                  label: "\u8ACB\u60A8\u7C21\u55AE\u63CF\u8FF0\u60A8\u7684\u8913\u6BCD\u7D93\u9A57",
                  placeholder: "\u7C21\u77ED\u4ECB\u7D39\u4F60\u81EA\u5DF1\u7684\u904E\u5F80\u8913\u6BCD\u7D93\u9A57\u5427\uFF01",
                  required: "",
                  class: "w-full",
                  disabled: unref(isSubmittingDisabled),
                  "show-limit": 200,
                  "error-message": unref(errors).description
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "error-message"]),
                createVNode(_component_InputMultipleUploader, {
                  modelValue: unref(certificateProofFileList),
                  "onUpdate:modelValue": ($event) => isRef(certificateProofFileList) ? certificateProofFileList.value = $event : null,
                  label: "\u7279\u5BF5\u8B49\u660E\u8207\u76F8\u95DC\u8B49\u7167",
                  placeholder: "\u4E0A\u50B3",
                  required: "",
                  class: "w-full",
                  disabled: unref(isSubmittingDisabled),
                  "error-message": unref(errors).certificateProofFileList
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "error-message"]),
                createVNode("p", { class: "text-gray-400 text-sm -mt-2" }, " \u8ACB\u60A8\u63D0\u4F9B\u6E05\u6670\u7684\u76F8\u95DC\u5BF5\u7269\u8B49\u7167\u8207\u8003\u7167\uFF0C\u6216\u8005\u653F\u5E9C\u55AE\u4F4D\u3001\u5354\u6703\u7B49\u4FEE\u7FD2\u8AB2\u7A0B\u4E4B\u8B49\u660E\u3001\u7167\u7247\u7B49\uFF0C\u5C07\u4F5C\u70BA\u8A3B\u518A\u8913\u6BCD\u6642\u4E4B\u5C08\u696D\u7A4D\u5206\u8207\u66DD\u5149\u3002 "),
                createVNode(_component_InputMultipleUploader, {
                  modelValue: unref(petServiceImageList),
                  "onUpdate:modelValue": ($event) => isRef(petServiceImageList) ? petServiceImageList.value = $event : null,
                  label: "\u5BF5\u7269\u8913\u6BCD\u670D\u52D9\u7167\u7247",
                  placeholder: "\u4E0A\u50B3",
                  class: "w-full",
                  disabled: unref(isSubmittingDisabled),
                  "error-message": unref(errors).petServiceImageList
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "error-message"]),
                createVNode("p", { class: "text-gray-400 text-sm -mt-2" }, " \u5C3A\u5BF8 600x600 px \u4EE5\u4E0A\uFF0C\u5C0F\u65BC 1MB\uFF0C\u683C\u5F0FJPG / PNG / JPEG \u3002 "),
                createVNode(_component_InputRadioListVertical, {
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
                }, null, 8, ["modelValue", "onUpdate:modelValue", "input", "onUpdate:input", "option-list", "disabled", "error-message"]),
                createVNode(_component_SignUpPetSitterQualificationSocialNetWorkLinkList, {
                  modelValue: unref(socialNetworkLinkList),
                  "onUpdate:modelValue": ($event) => isRef(socialNetworkLinkList) ? socialNetworkLinkList.value = $event : null,
                  "error-message": unref(errors).socialNetworkLinkList,
                  disabled: unref(isSubmittingDisabled)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-message", "disabled"]),
                createVNode(_component_ButtonPrimary, {
                  type: "submit",
                  class: "w-full text-white",
                  label: "\u9001\u51FA\u7533\u8ACB\u6309\u9215",
                  disabled: unref(isSentButtonDisabled)
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u9001\u51FA\u7533\u8ACB ")
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SignUp/PetSitter/Qualification.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const NuxtLinkLocale = defineNuxtLink({ ...nuxtLinkDefaults, componentName: "NuxtLinkLocale" });
const __nuxt_component_0 = defineComponent({
  name: "NuxtLinkLocale",
  props: {
    ...NuxtLinkLocale.props,
    locale: {
      type: String,
      default: void 0,
      required: false
    }
  },
  setup(props, { slots }) {
    const localePath = useLocalePath();
    const resolvedPath = computed(() => {
      var _a;
      const destination = (_a = props.to) != null ? _a : props.href;
      return destination != null ? localePath(destination, props.locale) : destination;
    });
    const isExternal = computed(() => {
      var _a;
      if (props.external) {
        return true;
      }
      if (props.target && props.target !== "_self") {
        return true;
      }
      const destination = (_a = props.to) != null ? _a : props.href;
      if (typeof destination === "object") {
        return false;
      }
      return destination === "" || destination == null || hasProtocol(destination, { acceptRelative: true });
    });
    const getNuxtLinkProps = () => {
      const _props = {
        ...props
      };
      if (!isExternal.value) {
        _props.to = resolvedPath.value;
      }
      delete _props.href;
      delete _props.locale;
      return _props;
    };
    return () => h(NuxtLinkLocale, getNuxtLinkProps(), slots.default);
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PrimaryLink",
  __ssrInlineRender: true,
  props: {
    label: {},
    disabled: { type: Boolean, default: false },
    link: {},
    external: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLinkLocale = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLinkLocale, mergeProps({
        external: _ctx.external,
        "aria-label": _ctx.label,
        to: _ctx.link,
        class: "box-border cursor-pointer rounded-xl border-none disabled:border disabled:border-gray-200 px-3 py-2 text-gray-400 disabled:text-gray-400 bg-orange-500 hover:bg-orange-800 disabled:bg-gray-100",
        disabled: _ctx.disabled
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button/PrimaryLink.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SignInCard = __nuxt_component_1;
  const _component_NuxtImg = _sfc_main$8;
  const _component_ButtonPrimaryLink = _sfc_main$2;
  _push(ssrRenderComponent(_component_SignInCard, mergeProps({ class: "pt-16" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="text-center space-y-6"${_scopeId}><h2 class="text-xl font-medium"${_scopeId}> \u606D\u559C\u5B8C\u6210\u7533\u8ACB\uFF01 </h2><div class="flex items-center justify-center w-full"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_NuxtImg, {
          format: "webp",
          src: "images/auth/Line_at_community.png"
        }, null, _parent2, _scopeId));
        _push2(`</div><p${_scopeId}> \u611F\u8B1D\u60A8\u586B\u5BEB\u6211\u5011\u7684\u5BF5\u7269\u8913\u6BCD/\u5C08\u5BB6\u7533\u8ACB\u8868\u55AE\uFF01\u6211\u5011\u5C07\u57283\u81F35\u500B\u5DE5\u4F5C\u5929\u5167\u5B8C\u6210\u521D\u6B65\u5BE9\u6838\uFF0C\u4E26\u4E14\u6703 <span class="text-orange-600"${_scopeId}>Email \u8207\u60A8\u806F\u7E6B\u662F\u5426\u5BE9\u6838\u901A\u904E\uFF0C\u5982\u6709\u8CC7\u6599\u7F3A\u4EF6\u7684\u90E8\u5206\u4E5F\u5C07\u8207\u60A8</span>\uFF01\u82E5\u5B8C\u6210\u5BF5\u7269\u8913\u6BCD\u5B98\u65B9\u8A8D\u8B49\u7533\u8ACB\u5F8C\uFF0C\u4EE5\u4E0A\u8CC7\u6599\u4ECD\u53EF\u4EE5\u4FEE\u6539\u8207\u88DC\u6B63\uFF0C\u8B93\u60A8\u7684\u670D\u52D9\u8CC7\u8A0A\u66F4\u52A0\u5B8C\u5584\u3002\u4E5F\u6B61\u8FCE\u60A8\u52A0\u5165\u6211\u5011\u5B98\u65B9LINE@\u5E33\u865F\uFF0C\u95DC\u65BC\u8913\u6BCD\u76F8\u95DC\u670D\u52D9\u8207\u7CFB\u7D71\u64CD\u4F5C\u554F\u984C\uFF0C\u5C07\u7531\u5BA2\u670D\u7AED\u8AA0\u70BA\u60A8\u670D\u52D9\uFF0C\u638C\u63E1\u7B2C\u4E00\u624B\u5BF5\u7269\u8913\u6BCD\u5B98\u65B9\u6D88\u606F\uFF01 </p></div><div class="flex items-center justify-stretch gap-x-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_ButtonPrimaryLink, {
          target: "_blank",
          rel: "noopener",
          label: "\u7B49\u5F85 Email \u56DE\u8986\u78BA\u8A8D\u6309\u9215",
          class: "mt-6 w-full text-white text-center",
          link: "https://lin.ee/oUOoF0c"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` \u52A0\u5165\u5B98\u65B9Line@\u5E33\u865F `);
            } else {
              return [
                createTextVNode(" \u52A0\u5165\u5B98\u65B9Line@\u5E33\u865F ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ButtonPrimaryLink, {
          label: "\u7B49\u5F85 Email \u56DE\u8986\u78BA\u8A8D\u6309\u9215",
          class: "mt-6 w-full text-white text-center text-sm",
          link: "index"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` \u4E86\u89E3\uFF0C\u6211\u6703\u7B49\u5F85 Email \u56DE\u8986\uFF01 `);
            } else {
              return [
                createTextVNode(" \u4E86\u89E3\uFF0C\u6211\u6703\u7B49\u5F85 Email \u56DE\u8986\uFF01 ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "text-center space-y-6" }, [
            createVNode("h2", { class: "text-xl font-medium" }, " \u606D\u559C\u5B8C\u6210\u7533\u8ACB\uFF01 "),
            createVNode("div", { class: "flex items-center justify-center w-full" }, [
              createVNode(_component_NuxtImg, {
                format: "webp",
                src: "images/auth/Line_at_community.png"
              })
            ]),
            createVNode("p", null, [
              createTextVNode(" \u611F\u8B1D\u60A8\u586B\u5BEB\u6211\u5011\u7684\u5BF5\u7269\u8913\u6BCD/\u5C08\u5BB6\u7533\u8ACB\u8868\u55AE\uFF01\u6211\u5011\u5C07\u57283\u81F35\u500B\u5DE5\u4F5C\u5929\u5167\u5B8C\u6210\u521D\u6B65\u5BE9\u6838\uFF0C\u4E26\u4E14\u6703 "),
              createVNode("span", { class: "text-orange-600" }, "Email \u8207\u60A8\u806F\u7E6B\u662F\u5426\u5BE9\u6838\u901A\u904E\uFF0C\u5982\u6709\u8CC7\u6599\u7F3A\u4EF6\u7684\u90E8\u5206\u4E5F\u5C07\u8207\u60A8"),
              createTextVNode("\uFF01\u82E5\u5B8C\u6210\u5BF5\u7269\u8913\u6BCD\u5B98\u65B9\u8A8D\u8B49\u7533\u8ACB\u5F8C\uFF0C\u4EE5\u4E0A\u8CC7\u6599\u4ECD\u53EF\u4EE5\u4FEE\u6539\u8207\u88DC\u6B63\uFF0C\u8B93\u60A8\u7684\u670D\u52D9\u8CC7\u8A0A\u66F4\u52A0\u5B8C\u5584\u3002\u4E5F\u6B61\u8FCE\u60A8\u52A0\u5165\u6211\u5011\u5B98\u65B9LINE@\u5E33\u865F\uFF0C\u95DC\u65BC\u8913\u6BCD\u76F8\u95DC\u670D\u52D9\u8207\u7CFB\u7D71\u64CD\u4F5C\u554F\u984C\uFF0C\u5C07\u7531\u5BA2\u670D\u7AED\u8AA0\u70BA\u60A8\u670D\u52D9\uFF0C\u638C\u63E1\u7B2C\u4E00\u624B\u5BF5\u7269\u8913\u6BCD\u5B98\u65B9\u6D88\u606F\uFF01 ")
            ])
          ]),
          createVNode("div", { class: "flex items-center justify-stretch gap-x-4" }, [
            createVNode(_component_ButtonPrimaryLink, {
              target: "_blank",
              rel: "noopener",
              label: "\u7B49\u5F85 Email \u56DE\u8986\u78BA\u8A8D\u6309\u9215",
              class: "mt-6 w-full text-white text-center",
              link: "https://lin.ee/oUOoF0c"
            }, {
              default: withCtx(() => [
                createTextVNode(" \u52A0\u5165\u5B98\u65B9Line@\u5E33\u865F ")
              ]),
              _: 1
            }),
            createVNode(_component_ButtonPrimaryLink, {
              label: "\u7B49\u5F85 Email \u56DE\u8986\u78BA\u8A8D\u6309\u9215",
              class: "mt-6 w-full text-white text-center text-sm",
              link: "index"
            }, {
              default: withCtx(() => [
                createTextVNode(" \u4E86\u89E3\uFF0C\u6211\u6703\u7B49\u5F85 Email \u56DE\u8986\uFF01 ")
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SignUp/PetSitter/Audit.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "petSitter",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useAuthStore();
    const currentStep = computed(() => {
      const { step } = route.query;
      if (Array.isArray(step)) {
        return PetSitterSignUpStep.Personal;
      }
      if (step === null || Number.isNaN(+step)) {
        return PetSitterSignUpStep.Personal;
      }
      const stepNumber = +step;
      if (!isPetSitterSignUpStep(stepNumber))
        return PetSitterSignUpStep.None;
      return stepNumber;
    });
    const isPetSitterSignUpStep = (stepNumber) => {
      const index = Object.values(PetSitterSignUpStep).findIndex((step) => step === stepNumber);
      return index !== -1;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$8;
      const _component_SignInCard = __nuxt_component_1;
      const _component_SignUpPetSitterProgress = _sfc_main$6;
      const _component_SignUpPetSitterProgressDescription = __nuxt_component_3;
      const _component_SignUpPetSitterPersonal = _sfc_main$4;
      const _component_SignUpPetSitterQualification = _sfc_main$3;
      const _component_SignUpPetSitterAudit = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#FEEAE1] h-full flex flex-wrap md:flex-nowrap items-start gap-y-12 md:gap-x-24 px-10 md:px-24 py-20" }, _attrs))}><div class="flex flex-col items-start w-full md:w-1/2 gap-y-6"><h1 class="text-orange-600 text-3xl font-bold"> \u5C08\u696D\u5BF5\u7269\u8913\u6BCD \u611B\u5FC3\u7167\u9867\u6BDB\u5B69\u5011\uFF01 </h1><p class="text-sm font-light leading-loose"> \u4F5C\u70BA\u4E00\u540D\u5C08\u696D\u7684\u5BF5\u7269\u8913\u6BCD\uFF0C\u60A8\u5C07\u6709\u6A5F\u6703\u63D0\u4F9B\u611B\u5FC3\u548C\u5C08\u696D\u7684\u7167\u9867\u7D66\u90A3\u4E9B\u9700\u8981\u60A8\u5E6B\u52A9\u7684\u5BF5\u7269\u3002\u7121\u8AD6\u60A8\u662F\u6709\u8C50\u5BCC\u7D93\u9A57\u7684\u8913\u6BCD\uFF0C\u9084\u662F\u5C0D\u52D5\u7269\u5145\u6EFF\u611B\u5FC3\u7684\u5BF5\u7269\u611B\u597D\u8005\uFF0C\u6211\u5011\u90FD\u6B61\u8FCE\u60A8\u7684\u52A0\u5165\u3002 </p>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "w-4/5 self-center",
        src: "pet_images/login/dog.png",
        format: "webp"
      }, null, _parent));
      _push(`</div><div class="w-full md:w-1/2 flex flex-col items-center justify-center gap-y-4">`);
      _push(ssrRenderComponent(_component_SignInCard, { class: "w-full space-y-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SignUpPetSitterProgress, { "current-state": unref(currentStep) }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SignUpPetSitterProgressDescription, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SignUpPetSitterProgress, { "current-state": unref(currentStep) }, null, 8, ["current-state"]),
              createVNode(_component_SignUpPetSitterProgressDescription)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(currentStep) === unref(PetSitterSignUpStep).Personal) {
        _push(ssrRenderComponent(_component_SignUpPetSitterPersonal, { class: "w-full" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(currentStep) === unref(PetSitterSignUpStep).Qualification) {
        _push(ssrRenderComponent(_component_SignUpPetSitterQualification, { class: "w-full" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(currentStep) === unref(PetSitterSignUpStep).Audit) {
        _push(ssrRenderComponent(_component_SignUpPetSitterAudit, { class: "w-full" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/signUp/petSitter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=petSitter-DrBiGXOj.mjs.map

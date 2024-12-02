import { _ as _sfc_main$5 } from './Common-DHSSImN5.mjs';
import { _ as _sfc_main$6 } from './Outline-DOrBdQBb.mjs';
import { _ as _sfc_main$7 } from './Primary-DO2BBNU0.mjs';
import { computed, useSSRContext, defineComponent, mergeProps, unref, withCtx, createVNode, shallowRef, watch, isRef, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import { u as useMemberStore } from './useMemberStore-uW6LN4tp.mjs';
import { i as definePrivateState, b as useThrottleFn } from './server.mjs';
import { u as useCustomError } from './useCustomError-C6r27JZ9.mjs';
import { I as IdentityStatus, m as memberPersonalInfoSchema } from './memberInfo.type-BHPS2aO7.mjs';
import { storeToRefs } from 'pinia';
import { u as useForm, a as useField, t as toTypedSchema } from './vee-validate-zod-CmN8nNdS.mjs';
import { u as useVerifyCount } from './useVerifyCount-BxlrLA_B.mjs';
import __nuxt_component_0 from './Icon-B6ODn5Cd.mjs';
import { _ as _sfc_main$8 } from './Password-D-_4QSX0.mjs';
import * as zod from 'zod';
import { _ as _sfc_main$9 } from './Pale-B861WQUB.mjs';
import { _ as __nuxt_component_4 } from './LineRoundIcon-CHKgnO9C.mjs';
import './petSitter.type-BjvpgkZ2.mjs';
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
import './signUp.type-C4a4H3kg.mjs';
import './index-Bq1kpYX2.mjs';
import '@iconify/utils/lib/css/icon';

const useMemberInfoApi = () => {
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const getMemberInfo = async () => {
    await wait(500);
    return {
      name: "John Doe",
      firstName: "John",
      lastName: "Doe",
      mobilePhone: "0989712345",
      email: "ilovei3BData@gmail.com",
      identity: IdentityStatus.AuditingPetSitter
    };
  };
  return {
    getMemberInfo
  };
};
const useMemberInfoStore = definePrivateState("useMemberInfoStore", () => {
  return {
    memberInfo: null
  };
}, (privateState) => {
  const { customTypeError, fatalError } = useCustomError();
  const { getMemberInfo } = useMemberInfoApi();
  const handleGetMemberInfo = async () => {
    try {
      const response = await getMemberInfo();
      privateState.memberInfo = response;
      return true;
    } catch (error) {
      if (customTypeError(error))
        return false;
      if (fatalError(error))
        return false;
      return false;
    }
  };
  return {
    // getters::
    memberInfo: computed(() => privateState.memberInfo),
    // methods::
    handleGetMemberInfo
  };
});
const useMemberInfoForm = (submitFn, submitErrorFn) => {
  const isSubmittingDisabled = shallowRef(false);
  const validationSchema = toTypedSchema(memberPersonalInfoSchema);
  const initialValues = {
    name: "",
    firstName: "",
    lastName: "",
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
  const { value: name } = useField("name");
  const { value: firstName } = useField("firstName");
  const { value: lastName } = useField("lastName");
  const { value: mobilePhone } = useField("mobilePhone");
  const { value: email } = useField("email");
  return {
    name,
    firstName,
    lastName,
    mobilePhone,
    email,
    formSubmit,
    isSubmitting,
    isSubmittingDisabled,
    resetForm,
    errors
  };
};
const identity = "\u8913\u6BCD(\u5BE9\u6838\u4E2D)";
const key = "phoneValidate";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "InfoSection",
  __ssrInlineRender: true,
  setup(__props) {
    const memberStore = useMemberStore();
    const {
      handleUpdatePersonalInfo,
      handlePersonalInfoPhoneValidate,
      handlePersonalInfoPhoneValidateCode
    } = memberStore;
    const memberInfoStore = useMemberInfoStore();
    const { memberInfo } = storeToRefs(memberInfoStore);
    const {
      name,
      firstName,
      lastName,
      mobilePhone,
      email,
      formSubmit,
      isSubmittingDisabled,
      resetForm,
      errors
    } = useMemberInfoForm(async (values) => {
      const isLoginSuccess = await handleUpdatePersonalInfo(values);
      return isLoginSuccess;
    });
    const {
      reVerifyCodeCount,
      getKeyTimeStamp,
      startCounter,
      resetCounter
    } = useVerifyCount();
    const isShowValidatedPhone = shallowRef(false);
    const phoneValidationCode = shallowRef("");
    const verifyButtonTite = computed(() => {
      return !isShowValidatedPhone.value ? "\u9A57\u8B49" : `\u518D\u6B21\u9A57\u8B49(${reVerifyCodeCount.value})`;
    });
    const phoneValidate = async () => {
      if (isShowValidatedPhone.value) {
        if (reVerifyCodeCount.value > 0)
          return false;
        const isValidatedSent2 = await handlePersonalInfoPhoneValidate(mobilePhone.value);
        if (!isValidatedSent2)
          return false;
        resetCounter(key);
        return true;
      }
      const isValidatedSent = await handlePersonalInfoPhoneValidate(mobilePhone.value);
      if (!isValidatedSent)
        return false;
      isShowValidatedPhone.value = true;
      verifyCounterStart();
      return true;
    };
    const verifyCounterStart = () => {
      const currentCount = getKeyTimeStamp(key);
      startCounter(currentCount, key);
    };
    const sendPhoneValidationCode = async () => {
      const isSuccess = await handlePersonalInfoPhoneValidateCode(phoneValidationCode.value);
      if (!isSuccess)
        return false;
      phoneValidationCode.value = "";
      isShowValidatedPhone.value = false;
      return true;
    };
    watch(memberInfo, (info) => {
      if (info === null) return;
      name.value = info.name;
      firstName.value = info.firstName;
      lastName.value = info.lastName;
      mobilePhone.value = info.mobilePhone;
      email.value = info.email;
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputCommon = _sfc_main$5;
      const _component_ButtonOutline = _sfc_main$6;
      const _component_ButtonPrimary = _sfc_main$7;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-start gap-y-4 px-4 py-3" }, _attrs))}><div class="w-full"><p><span class="text-red-500">*</span> \u8EAB\u4EFD </p><div class="w-full px-4 py-3 text-orange-800">${ssrInterpolate(identity)}</div></div>`);
      _push(ssrRenderComponent(_component_InputCommon, {
        modelValue: unref(name),
        "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
        class: "w-1/2",
        label: "\u66B1\u7A31",
        placeholder: "\u8ACB\u8F38\u5165\u66B1\u7A31",
        disabled: unref(isSubmittingDisabled),
        required: true,
        "error-message": unref(errors).name
      }, null, _parent));
      _push(`<span class="text-gray-400 text-sm">\u66B1\u7A31\u70BA\u60A8\u5728\u672C\u670D\u52D9\u4E2D\u9867\u5BA2\u5C0D\u60A8\u4E4B\u7A31\u547C\uFF0C\u53EF\u81EA\u884C\u4FEE\u6B63\u3002</span><div class="w-full flex items-center justify-center gap-x-2">`);
      _push(ssrRenderComponent(_component_InputCommon, {
        modelValue: unref(firstName),
        "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
        label: "\u771F\u5BE6\u59D3\u6C0F",
        placeholder: "\u8ACB\u8F38\u5165\u96FB\u5B50\u4FE1\u7BB1",
        disabled: unref(isSubmittingDisabled),
        required: true,
        class: "w-1/2"
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputCommon, {
        modelValue: unref(lastName),
        "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
        label: "\u771F\u5BE6\u540D\u5B57",
        placeholder: "\u8ACB\u8F38\u5165\u96FB\u5B50\u4FE1\u7BB1",
        disabled: unref(isSubmittingDisabled),
        required: true,
        class: "w-1/2"
      }, null, _parent));
      _push(`</div><div style="${ssrRenderStyle(unref(errors).firstName || unref(errors).lastName ? null : { display: "none" })}" class="mt-[-2] w-full text-sm text-red-500">${ssrInterpolate(unref(errors).firstName || unref(errors).lastName)}</div><span class="text-gray-400 text-sm">\u4F7F\u7528\u672C\u7AD9\u670D\u52D9\u9700\u5BE6\u540D\u5236\u8A8D\u8B49\uFF0C\u8ACB\u586B\u5BEB\u8EAB\u5206\u8B49\u4E4B\u771F\u5BE6\u59D3\u540D\u3002</span><div class="w-full flex items-start gap-x-2">`);
      _push(ssrRenderComponent(_component_InputCommon, {
        modelValue: unref(mobilePhone),
        "onUpdate:modelValue": ($event) => isRef(mobilePhone) ? mobilePhone.value = $event : null,
        label: "\u624B\u6A5F\u865F\u78BC",
        placeholder: "\u8ACB\u8F38\u5165\u624B\u6A5F\u865F\u78BC\uFF08\u7528\u65BC\u9810\u7D04\u806F\u7D61\uFF09",
        disabled: unref(isSubmittingDisabled),
        required: true,
        class: "flex-grow",
        "error-message": unref(errors).mobilePhone
      }, null, _parent));
      _push(ssrRenderComponent(_component_ButtonOutline, {
        class: ["mt-8 flex items-center justify-center rounded-xl", {
          "text-orange-600 border-solid border-[1px] border-orange-600": !unref(isShowValidatedPhone) || unref(isShowValidatedPhone) && unref(reVerifyCodeCount) === 0,
          "text-gray-300 border-solid border-[1px] border-gray-300": unref(isShowValidatedPhone) && unref(reVerifyCodeCount) > 0
        }],
        label: "\u9A57\u8B49\u624B\u6A5F\u865F\u78BC\u6309\u9215",
        onClick: phoneValidate
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(verifyButtonTite))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(verifyButtonTite)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div style="${ssrRenderStyle(unref(isShowValidatedPhone) ? null : { display: "none" })}" class="flex items-start justify-center gap-x-2">`);
      _push(ssrRenderComponent(_component_InputCommon, {
        modelValue: unref(phoneValidationCode),
        "onUpdate:modelValue": ($event) => isRef(phoneValidationCode) ? phoneValidationCode.value = $event : null,
        "is-show-label": false,
        label: "\u624B\u6A5F\u9A57\u8B49\u78BC",
        placeholder: "\u8ACB\u8F38\u5165\u56DB\u4F4D\u6578\u9A57\u8B49\u78BC",
        disabled: unref(isSubmittingDisabled),
        class: "flex-grow",
        "error-message": unref(phoneValidationCode).length !== 4 ? "\u8ACB\u8F38\u5165\u56DB\u4F4D\u6578\u9A57\u8B49\u78BC" : void 0
      }, null, _parent));
      _push(ssrRenderComponent(_component_ButtonOutline, {
        class: "flex items-center justify-center rounded-xl border-solid border-[1px] border-orange-600 text-orange-600 min-w-24",
        label: "\u9001\u51FA\u624B\u6A5F\u9A57\u8B49\u78BC\u6309\u9215",
        onClick: sendPhoneValidationCode
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u9001\u51FA `);
          } else {
            return [
              createTextVNode(" \u9001\u51FA ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><span class="text-gray-400 text-sm">\u76F8\u95DC\u8A8D\u8B49\u3001\u9810\u7D04\u7B49\u7C21\u8A0A\u5C07\u4EE5\u6B64\u624B\u6A5F\u865F\u901A\u77E5\uFF0C\u8ACB\u586B\u5BEB\u5E38\u7528\u624B\u6A5F\u865F\u78BC\u3002</span>`);
      _push(ssrRenderComponent(_component_InputCommon, {
        modelValue: unref(email),
        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
        type: "email",
        class: "w-full",
        label: "\u96FB\u5B50\u4FE1\u7BB1",
        placeholder: "\u8ACB\u8F38\u5165\u96FB\u5B50\u4FE1\u7BB1\uFF08\u7528\u65BC\u9810\u7D04\u806F\u7D61\uFF09",
        disabled: unref(isSubmittingDisabled),
        "error-message": unref(errors).email,
        required: true
      }, null, _parent));
      _push(`<span class="text-gray-400 text-sm">\u4FE1\u7BB1\u5C07\u767C\u9001\u76F8\u95DC\u8A0A\u606F\u8207\u670D\u52D9\u901A\u77E5\uFF0C\u8ACB\u52D9\u5FC5\u586B\u5BEB\u6B63\u78BA\u3002</span><div class="flex items-center justify-center gap-x-4">`);
      _push(ssrRenderComponent(_component_ButtonOutline, {
        class: "flex items-center justify-center rounded-xl border-solid border-[1px] border-orange-600 text-orange-600 min-w-24",
        label: "\u91CD\u8A2D\u500B\u4EBA\u8CC7\u6599\u6B04\u4F4D\u6309\u9215",
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
        type: "submit",
        class: "min-w-24 text-white",
        label: "\u5132\u5B58\u500B\u4EBA\u8CC7\u6599\u6309\u9215"
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
      _push(`</div></form>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Member/PersonalInfo/InfoSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "UploadAvatar",
  __ssrInlineRender: true,
  props: {
    avatar: { default: "" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_0;
      const _component_ButtonOutline = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-start gap-y-4 px-4 pt-6" }, _attrs))}>`);
      if (_ctx.avatar !== "") {
        _push(`<div class="w-1/2 aspect-square rounded-full bg-cover bg-center bg-no-repeat" style="${ssrRenderStyle(`background-image: url('${_ctx.avatar}')`)}"></div>`);
      } else {
        _push(`<div class="w-1/2 aspect-square flex items-center justify-center rounded-full bg-[#C2C1BB]">`);
        _push(ssrRenderComponent(_component_UIcon, {
          class: "aspect-square text-5xl",
          name: "i-octicon:person-24"
        }, null, _parent));
        _push(`</div>`);
      }
      _push(ssrRenderComponent(_component_ButtonOutline, {
        label: "\u4E0A\u50B3\u500B\u4EBA\u7167\u7247\u6309\u9215",
        class: "flex items-center justify-center rounded-xl border-solid border-[1px] border-orange-600 text-orange-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u4E0A\u50B3\u7167\u7247 `);
          } else {
            return [
              createTextVNode(" \u4E0A\u50B3\u7167\u7247 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-sm font-light"><p>\u6A94\u6848\u5927\u5C0F:\u6700\u59271MB</p><p>\u6A94\u6848\u9650\u5236\uFF1AJPEG\u3001PNG</p></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Member/PersonalInfo/UploadAvatar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const memberResetPasswordSchema = zod.object({
  password: zod.string().min(6, "\u9577\u5EA6\u70BA6-18\u500B\u5B57\u5143").max(18, "\u9577\u5EA6\u70BA6-18\u500B\u5B57\u5143").regex(/(?=.*[A-Z]).*/g, "\u5305\u542B1\u500B\u5927\u5BEB\u5B57\u6BCD").regex(/(?=.*\d).*/g, "\u5305\u542B1\u500B\u6578\u5B57"),
  newPassword: zod.string().min(6, "\u9577\u5EA6\u70BA6-18\u500B\u5B57\u5143").max(18, "\u9577\u5EA6\u70BA6-18\u500B\u5B57\u5143").regex(/(?=.*[A-Z]).*/g, "\u5305\u542B1\u500B\u5927\u5BEB\u5B57\u6BCD").regex(/(?=.*\d).*/g, "\u5305\u542B1\u500B\u6578\u5B57"),
  confirmNewPassword: zod.string().min(6, "\u9577\u5EA6\u70BA6-18\u500B\u5B57\u5143").max(18, "\u9577\u5EA6\u70BA6-18\u500B\u5B57\u5143").regex(/(?=.*[A-Z]).*/g, "\u5305\u542B1\u500B\u5927\u5BEB\u5B57\u6BCD").regex(/(?=.*\d).*/g, "\u5305\u542B1\u500B\u6578\u5B57")
});
const useMemberResetPasswordForm = (submitFn, submitErrorFn) => {
  const isSubmittingDisabled = shallowRef(false);
  const validationSchema = toTypedSchema(memberResetPasswordSchema);
  const initialValues = {
    password: "",
    newPassword: "",
    confirmNewPassword: ""
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
  const { value: password } = useField("password");
  const { value: newPassword } = useField("newPassword");
  const { value: confirmNewPassword } = useField("confirmNewPassword");
  return {
    password,
    newPassword,
    confirmNewPassword,
    formSubmit,
    isSubmitting,
    isSubmittingDisabled,
    resetForm,
    errors
  };
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ResetPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const memberStore = useMemberStore();
    const { handleResetPassword } = memberStore;
    const {
      password,
      newPassword,
      confirmNewPassword,
      formSubmit,
      isSubmittingDisabled,
      errors
    } = useMemberResetPasswordForm(async (values) => {
      const isSuccess = await handleResetPassword(values);
      return isSuccess;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputPassword = _sfc_main$8;
      const _component_ButtonOutline = _sfc_main$6;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-start gap-y-4 px-4 py-3" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_InputPassword, {
        modelValue: unref(password),
        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
        type: "email",
        class: "w-full",
        label: "\u820A\u5BC6\u78BC\u78BA\u8A8D",
        placeholder: "\u8ACB\u8F38\u5165\u820A\u5BC6\u78BC",
        disabled: unref(isSubmittingDisabled),
        required: true,
        "error-message": unref(errors).password
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputPassword, {
        modelValue: unref(newPassword),
        "onUpdate:modelValue": ($event) => isRef(newPassword) ? newPassword.value = $event : null,
        type: "email",
        class: "w-full",
        label: "\u65B0\u5BC6\u78BC",
        placeholder: "\u8ACB\u8F38\u5165 8-30 \u500B\u82F1\u6578\u6587\u5B57\uFF0C\u907F\u514D\u7279\u6B8A\u7B26\u865F",
        disabled: unref(isSubmittingDisabled),
        required: true,
        "error-message": unref(errors).newPassword
      }, null, _parent));
      _push(`<div class="w-full flex items-end gap-x-4">`);
      _push(ssrRenderComponent(_component_InputPassword, {
        modelValue: unref(confirmNewPassword),
        "onUpdate:modelValue": ($event) => isRef(confirmNewPassword) ? confirmNewPassword.value = $event : null,
        type: "email",
        class: "flex-grow",
        label: "\u65B0\u5BC6\u78BC\u78BA\u8A8D",
        placeholder: "\u8ACB\u518D\u6B21\u8F38\u5165\u65B0\u5BC6\u78BC",
        disabled: unref(isSubmittingDisabled),
        required: true,
        "error-message": unref(errors).confirmNewPassword
      }, null, _parent));
      _push(ssrRenderComponent(_component_ButtonOutline, {
        type: "submit",
        class: "flex items-center justify-center rounded-xl border-solid border-[1px] border-orange-600 text-orange-600",
        label: "\u8B8A\u66F4\u5BC6\u78BC\u78BA\u5B9A\u6309\u9215"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u8B8A\u66F4\u5BC6\u78BC `);
          } else {
            return [
              createTextVNode(" \u8B8A\u66F4\u5BC6\u78BC ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Member/PersonalInfo/ResetPassword.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ThirdPartyAccountBinding",
  __ssrInlineRender: true,
  props: {
    label: {},
    title: {},
    bindingToken: { default: "" }
  },
  emits: ["update:binding"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonPrimary = _sfc_main$7;
      const _component_UIcon = __nuxt_component_0;
      const _component_ButtonPale = _sfc_main$9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between px-4 py-3" }, _attrs))}><div class="flex items-center justify-center gap-x-4">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<span>${ssrInterpolate(_ctx.title)}</span></div>`);
      if (_ctx.bindingToken === "") {
        _push(ssrRenderComponent(_component_ButtonPrimary, {
          label: `\u7D81\u5B9A${_ctx.label}\u5E33\u865F\u6309\u9215`,
          class: "text-white",
          onClick: ($event) => _ctx.$emit("update:binding")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-center gap-x-2"${_scopeId}><span${_scopeId}> \u7D81\u5B9A\u5E33\u865F </span>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                class: "h-4 w-4",
                name: "i-zondicons:add-outline"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-center gap-x-2" }, [
                  createVNode("span", null, " \u7D81\u5B9A\u5E33\u865F "),
                  createVNode(_component_UIcon, {
                    class: "h-4 w-4",
                    name: "i-zondicons:add-outline"
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_ButtonPale, {
          label: `\u89E3\u9664\u7D81\u5B9A${_ctx.label}\u5E33\u865F\u6309\u9215`,
          class: "text-orange-600"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u89E3\u7D81 `);
            } else {
              return [
                createTextVNode(" \u89E3\u7D81 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Member/PersonalInfo/ThirdPartyAccountBinding.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const lineToken = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const memberInfoStore = useMemberInfoStore();
    const { memberInfo } = storeToRefs(memberInfoStore);
    const bindingLineTitle = computed(() => {
      return "\u5C1A\u7121 Line \u5E33\u865F";
    });
    const bindingAccount = () => {
      console.group("%c test", "color: yellow;");
      console.log("binding");
      console.groupEnd();
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a;
      const _component_MemberPersonalInfoSection = _sfc_main$4;
      const _component_MemberPersonalInfoUploadAvatar = _sfc_main$3;
      const _component_MemberPersonalInfoResetPassword = _sfc_main$2;
      const _component_MemberPersonalInfoThirdPartyAccountBinding = _sfc_main$1;
      const _component_MemberPersonalInfoLineRoundIcon = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full space-y-4" }, _attrs))}><div class="w-full rounded-xl bg-white"><div class="px-4 py-6 border-b border-solid border-gray-200"> \u500B\u4EBA\u8CC7\u6599 </div><div class="flex items-stretch justify-center">`);
      _push(ssrRenderComponent(_component_MemberPersonalInfoSection, { class: "w-3/4 border-r border-solid border-gray-100" }, null, _parent));
      _push(ssrRenderComponent(_component_MemberPersonalInfoUploadAvatar, {
        avatar: (_a2 = (_a = unref(memberInfo)) == null ? void 0 : _a.avatarImageUrl) != null ? _a2 : "",
        class: "w-1/4"
      }, null, _parent));
      _push(`</div></div><div class="w-full rounded-xl bg-white"><div class="px-4 py-6 border-b border-solid border-gray-200"> \u5BC6\u78BC\u8A2D\u5B9A </div>`);
      _push(ssrRenderComponent(_component_MemberPersonalInfoResetPassword, { class: "w-2/3" }, null, _parent));
      _push(`</div><div class="w-full rounded-xl bg-white"><div class="px-4 py-6 border-b border-solid border-gray-300"> \u7B2C\u4E09\u65B9\u767B\u5165\u7BA1\u7406 </div><div class="flex flex-col items-center justify-center gap-y-4 px-4 py-3">`);
      _push(ssrRenderComponent(_component_MemberPersonalInfoThirdPartyAccountBinding, {
        "binding-token": lineToken,
        class: "w-full",
        label: "Line",
        title: unref(bindingLineTitle),
        "onUpdate:binding": bindingAccount
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([{ "opacity-50": lineToken === "" }, "scale-120 transform"])}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MemberPersonalInfoLineRoundIcon, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: ["scale-120 transform", { "opacity-50": lineToken === "" }]
              }, [
                createVNode(_component_MemberPersonalInfoLineRoundIcon)
              ], 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/member/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-K-zNLfxo.mjs.map

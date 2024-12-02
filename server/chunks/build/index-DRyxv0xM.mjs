import { _ as __nuxt_component_1 } from './Card-BR-BXdAC.mjs';
import { _ as _sfc_main$2 } from './Pale-B861WQUB.mjs';
import { _ as _sfc_main$3 } from './Common-DHSSImN5.mjs';
import { useSSRContext, defineComponent, shallowRef, withCtx, unref, createTextVNode, isRef, createVNode, withModifiers, withDirectives, vShow, mergeModels, useId, useModel } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual } from 'vue/server-renderer';
import { _ as _sfc_main$4 } from './Outline-DOrBdQBb.mjs';
import { _ as _sfc_main$5 } from './Password-D-_4QSX0.mjs';
import { _ as _sfc_main$6 } from './PasswordRule-fKVF88Ky.mjs';
import { _ as _sfc_main$7 } from './Primary-DO2BBNU0.mjs';
import { _ as _sfc_main$8 } from './NuxtImg-Ce9a8LGV.mjs';
import { _ as _sfc_main$9 } from './BeeKeeper-BvdERutE.mjs';
import { a as useLocalePath, n as navigateTo, b as useThrottleFn } from './server.mjs';
import { u as useAuthStore } from './useAuthStore-6LI8GoiG.mjs';
import { u as useForm, a as useField, t as toTypedSchema } from './vee-validate-zod-CmN8nNdS.mjs';
import { g as genderName, G as GenderStatus, a as signUpFormSchema } from './signUp.type-C4a4H3kg.mjs';
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
import './composables-VAV01sHq.mjs';
import 'zod';
import './useCustomError-C6r27JZ9.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RadioList",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    label: {},
    id: { default: () => useId("$MCbrBVfJsT") },
    isShowLabel: { type: Boolean, default: true },
    errorMessage: { default: "" },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    optionList: {}
  }, {
    "modelValue": { type: [String, Number, Boolean] },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const errorID = useId("$H4dKEtVPQX");
    const modelValue = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-col items-start gap-y-2"><span style="${ssrRenderStyle(_ctx.isShowLabel ? null : { display: "none" })}" class="flex items-center justify-center gap-x-1">`);
      if (_ctx.required) {
        _push(`<span class="text-red-500 text-xs"> * </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${ssrInterpolate(_ctx.label)}</span></span><div class="flex items-center justify-center gap-x-4"><!--[-->`);
      ssrRenderList(_ctx.optionList, (item) => {
        _push(`<label${ssrRenderAttr("for", `${_ctx.id}_${item.value}`)} class="space-x-2"><input${ssrRenderAttr("id", `${_ctx.id}_${item.value}`)}${ssrIncludeBooleanAttr(ssrLooseEqual(modelValue.value, item.value)) ? " checked" : ""} type="radio"${ssrRenderAttr("value", item.value)}${ssrIncludeBooleanAttr(_ctx.disabled) ? " disabled" : ""}><span>${ssrInterpolate(item.title)}</span></label>`);
      });
      _push(`<!--]--></div></div><span style="${ssrRenderStyle(_ctx.errorMessage ? null : { display: "none" })}"${ssrRenderAttr("id", unref(errorID))} class="text-sm text-red-500">${ssrInterpolate(_ctx.errorMessage)}</span></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/RadioList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const useSignUpForm = (submitFn, submitErrorFn) => {
  const isSubmittingDisabled = shallowRef(false);
  const validationSchema = toTypedSchema(signUpFormSchema);
  const genderList = Object.entries(genderName).map((item) => {
    return {
      value: item[0],
      title: item[1]
    };
  });
  const initialValues = {
    firstName: "",
    lastName: "",
    gender: GenderStatus.None,
    email: "",
    emailVerifyCode: "",
    password: "",
    confirmPassword: ""
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
  const { value: gender } = useField("gender");
  const { value: email } = useField("email");
  const { value: emailVerifyCode } = useField("emailVerifyCode");
  const { value: password } = useField("password");
  const { value: confirmPassword } = useField("confirmPassword");
  return {
    genderList,
    firstName,
    lastName,
    gender,
    email,
    emailVerifyCode,
    password,
    confirmPassword,
    formSubmit,
    isSubmitting,
    isSubmittingDisabled,
    resetForm,
    errors
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    const authStore = useAuthStore();
    const { handleSignUp, handleSendEmailToGetVerificationCode } = authStore;
    const {
      genderList,
      firstName,
      lastName,
      gender,
      email,
      emailVerifyCode,
      password,
      confirmPassword,
      formSubmit,
      isSubmittingDisabled,
      errors
    } = useSignUpForm(async (values) => {
      const isSignUpSuccess = await handleSignUp(values);
      navigateTo(localePath("signIn"));
      return isSignUpSuccess;
    });
    const isShowEmailVerifyCode = shallowRef(false);
    const getVerifyCode = async () => {
      const isSentSuccess = await handleSendEmailToGetVerificationCode(email.value);
      isShowEmailVerifyCode.value = isSentSuccess;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SignInCard = __nuxt_component_1;
      const _component_ButtonPale = _sfc_main$2;
      const _component_InputCommon = _sfc_main$3;
      const _component_InputRadioList = _sfc_main$1;
      const _component_ButtonOutline = _sfc_main$4;
      const _component_InputPassword = _sfc_main$5;
      const _component_PasswordRule = _sfc_main$6;
      const _component_ButtonPrimary = _sfc_main$7;
      const _component_NuxtImg = _sfc_main$8;
      const _component_ButtonSignUpBeeKeeper = _sfc_main$9;
      _push(`<!--[--><div class="bg-[#F27541] relative mb-8"><section class="w-4/5 mx-auto flex items-start justify-center gap-x-12 pt-6 h-[35vh]"><div class="w-1/2 hidden p-10 text-white md:block space-y-8"><p class="text-3xl font-bold"> \u627E\u5C0B\u6700\u9069\u5408\u6BDB\u5B69\u7684\u7167\u6599\u8005\uFF01 </p><p class="font-light"> \u52A0\u5165\u6703\u54E1\u5F8C\uFF0C\u60A8\u5C07\u4EAB\u6709\u5C08\u5C6C\u7684\u512A\u60E0\u548C\u798F\u5229\uFF01\u4E0D\u50C5\u53EF\u4EE5\u9810\u7D04\u5BF5\u7269\u8913\u6BCD\u670D\u52D9\uFF0C\u9084\u53EF\u4EE5\u4EAB\u6709\u6298\u6263\u512A\u60E0\u7B49\u7279\u6B8A\u798F\u5229\u3002\u7ACB\u5373\u52A0\u5165\u6211\u5011\u7684\u6703\u54E1\uFF0C\u8B93\u60A8\u7684\u6BDB\u5B69\u7372\u5F97\u66F4\u8CBC\u5FC3\u7684\u7167\u6599\uFF0C\u540C\u6642\u4EAB\u53D7\u66F4\u591A\u9A5A\u559C\u548C\u798F\u5229\uFF01 </p></div>`);
      _push(ssrRenderComponent(_component_SignInCard, { class: "min-h-[75vh] w-9/10 md:w-1/2 mb-8 z-[1] md:z-0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex items-center justify-between"${_scopeId}><div${_scopeId}><p${_scopeId}>Welcome to <span class="text-orange-600"${_scopeId}>LOGO</span></p><p class="text-2xl"${_scopeId}> Sign Up! </p></div><div class="text-right"${_scopeId}><p class="text-gray-400"${_scopeId}> \u6211\u6709\u5E33\u865F </p><p${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ButtonPale, {
              label: "\u4E00\u822C\u7528\u6236\u767B\u5165\u6309\u9215",
              class: "text-orange-600 underline",
              onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(unref(localePath)("signIn"))
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u767B\u5165 `);
                } else {
                  return [
                    createTextVNode(" \u767B\u5165 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p></div></div><form class="flex flex-col items-start justify-center gap-y-4"${_scopeId}><div class="flex items-center gap-x-2"${_scopeId}>`);
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
            _push2(ssrRenderComponent(_component_InputRadioList, {
              modelValue: unref(gender),
              "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : null,
              modelModifiers: { number: true },
              "option-list": unref(genderList),
              label: "\u6027\u5225",
              class: "w-full",
              disabled: unref(isSubmittingDisabled),
              "error-message": unref(errors).gender
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputCommon, {
              modelValue: unref(email),
              "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
              type: "email",
              label: "\u5E33\u865F",
              placeholder: "\u8ACB\u8F38\u5165\u96FB\u5B50\u4FE1\u7BB1",
              disabled: unref(isSubmittingDisabled),
              required: "",
              class: "w-full",
              "error-message": unref(errors).email
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ButtonOutline, {
              style: typeof unref(errors).email === "undefined" && unref(email) !== "" && !unref(isShowEmailVerifyCode) ? null : { display: "none" },
              label: "\u9001\u51FA\u9A57\u8B49\u78BC\u6309\u9215",
              class: "border-solid border border-orange-300 flex flex-grow items-center justify-center rounded-md text-orange-600",
              onClick: getVerifyCode
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u53D6\u5F97\u9A57\u8B49\u78BC `);
                } else {
                  return [
                    createTextVNode(" \u53D6\u5F97\u9A57\u8B49\u78BC ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle(typeof unref(errors).email === "undefined" && unref(email) !== "" && unref(isShowEmailVerifyCode) ? null : { display: "none" })}" class="flex items-start justify-center gap-x-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_InputCommon, {
              modelValue: unref(emailVerifyCode),
              "onUpdate:modelValue": ($event) => isRef(emailVerifyCode) ? emailVerifyCode.value = $event : null,
              label: "\u9A57\u8B49\u78BC",
              "is-show-label": false,
              placeholder: "\u8ACB\u8F38\u5165\u9A57\u8B49\u78BC",
              disabled: unref(isSubmittingDisabled),
              required: "",
              "error-message": unref(errors).emailVerifyCode
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ButtonOutline, {
              label: "\u91CD\u65B0\u53D6\u5F97\u9A57\u8B49\u78BC\u6309\u9215",
              class: "border-solid border border-orange-300 flex flex-grow items-center justify-center rounded-md text-orange-600",
              onClick: getVerifyCode
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u91CD\u65B0\u53D6\u5F97\u9A57\u8B49\u78BC `);
                } else {
                  return [
                    createTextVNode(" \u91CD\u65B0\u53D6\u5F97\u9A57\u8B49\u78BC ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_InputPassword, {
              modelValue: unref(password),
              "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
              label: "\u5BC6\u78BC",
              placeholder: "\u8ACB\u8F38\u5165\u5BC6\u78BC",
              disabled: unref(isSubmittingDisabled),
              required: "",
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PasswordRule, { "input-string": unref(password) }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputPassword, {
              modelValue: unref(confirmPassword),
              "onUpdate:modelValue": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
              label: "\u78BA\u8A8D\u5BC6\u78BC",
              placeholder: "\u8ACB\u518D\u6B21\u8F38\u5165\u5BC6\u78BC",
              disabled: unref(isSubmittingDisabled),
              required: "",
              class: "w-full",
              "error-message": unref(errors).confirmPassword
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ButtonPrimary, {
              type: "submit",
              class: "w-full text-white",
              label: "\u8A3B\u518A\u6703\u54E1\u9001\u51FA\u6309\u9215"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u8A3B\u518A\u6703\u54E1 `);
                } else {
                  return [
                    createTextVNode(" \u8A3B\u518A\u6703\u54E1 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form><div class="text-sm text-gray-400 mt-4"${_scopeId}> \u627F\u8AFE\u4FDD\u8B77\u60A8\u7684\u96B1\u79C1\uFF0C\u60A8\u63D0\u4F9B\u7684\u624B\u6A5F\u865F\u78BC\u50C5\u7528\u65BC\u6703\u54E1\u4F7F\u7528\uFF0C\u7D55\u4E0D\u6703\u88AB\u7528\u65BC\u5176\u4ED6\u7528\u9014\u6216\u5411\u7B2C\u4E09\u65B9\u5206\u4EAB\u3002 </div>`);
          } else {
            return [
              createVNode("div", { class: "mb-8 flex items-center justify-between" }, [
                createVNode("div", null, [
                  createVNode("p", null, [
                    createTextVNode("Welcome to "),
                    createVNode("span", { class: "text-orange-600" }, "LOGO")
                  ]),
                  createVNode("p", { class: "text-2xl" }, " Sign Up! ")
                ]),
                createVNode("div", { class: "text-right" }, [
                  createVNode("p", { class: "text-gray-400" }, " \u6211\u6709\u5E33\u865F "),
                  createVNode("p", null, [
                    createVNode(_component_ButtonPale, {
                      label: "\u4E00\u822C\u7528\u6236\u767B\u5165\u6309\u9215",
                      class: "text-orange-600 underline",
                      onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(unref(localePath)("signIn"))
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u767B\u5165 ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ])
              ]),
              createVNode("form", {
                class: "flex flex-col items-start justify-center gap-y-4",
                onSubmit: withModifiers(unref(formSubmit), ["prevent"])
              }, [
                createVNode("div", { class: "flex items-center gap-x-2" }, [
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
                createVNode(_component_InputRadioList, {
                  modelValue: unref(gender),
                  "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : null,
                  modelModifiers: { number: true },
                  "option-list": unref(genderList),
                  label: "\u6027\u5225",
                  class: "w-full",
                  disabled: unref(isSubmittingDisabled),
                  "error-message": unref(errors).gender
                }, null, 8, ["modelValue", "onUpdate:modelValue", "option-list", "disabled", "error-message"]),
                createVNode(_component_InputCommon, {
                  modelValue: unref(email),
                  "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                  type: "email",
                  label: "\u5E33\u865F",
                  placeholder: "\u8ACB\u8F38\u5165\u96FB\u5B50\u4FE1\u7BB1",
                  disabled: unref(isSubmittingDisabled),
                  required: "",
                  class: "w-full",
                  "error-message": unref(errors).email
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "error-message"]),
                withDirectives(createVNode(_component_ButtonOutline, {
                  label: "\u9001\u51FA\u9A57\u8B49\u78BC\u6309\u9215",
                  class: "border-solid border border-orange-300 flex flex-grow items-center justify-center rounded-md text-orange-600",
                  onClick: withModifiers(getVerifyCode, ["prevent"])
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u53D6\u5F97\u9A57\u8B49\u78BC ")
                  ]),
                  _: 1
                }, 512), [
                  [vShow, typeof unref(errors).email === "undefined" && unref(email) !== "" && !unref(isShowEmailVerifyCode)]
                ]),
                withDirectives(createVNode("div", { class: "flex items-start justify-center gap-x-4" }, [
                  createVNode(_component_InputCommon, {
                    modelValue: unref(emailVerifyCode),
                    "onUpdate:modelValue": ($event) => isRef(emailVerifyCode) ? emailVerifyCode.value = $event : null,
                    label: "\u9A57\u8B49\u78BC",
                    "is-show-label": false,
                    placeholder: "\u8ACB\u8F38\u5165\u9A57\u8B49\u78BC",
                    disabled: unref(isSubmittingDisabled),
                    required: "",
                    "error-message": unref(errors).emailVerifyCode
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "error-message"]),
                  createVNode(_component_ButtonOutline, {
                    label: "\u91CD\u65B0\u53D6\u5F97\u9A57\u8B49\u78BC\u6309\u9215",
                    class: "border-solid border border-orange-300 flex flex-grow items-center justify-center rounded-md text-orange-600",
                    onClick: withModifiers(getVerifyCode, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u91CD\u65B0\u53D6\u5F97\u9A57\u8B49\u78BC ")
                    ]),
                    _: 1
                  })
                ], 512), [
                  [vShow, typeof unref(errors).email === "undefined" && unref(email) !== "" && unref(isShowEmailVerifyCode)]
                ]),
                createVNode(_component_InputPassword, {
                  modelValue: unref(password),
                  "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                  label: "\u5BC6\u78BC",
                  placeholder: "\u8ACB\u8F38\u5165\u5BC6\u78BC",
                  disabled: unref(isSubmittingDisabled),
                  required: "",
                  class: "w-full"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                createVNode(_component_PasswordRule, { "input-string": unref(password) }, null, 8, ["input-string"]),
                createVNode(_component_InputPassword, {
                  modelValue: unref(confirmPassword),
                  "onUpdate:modelValue": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
                  label: "\u78BA\u8A8D\u5BC6\u78BC",
                  placeholder: "\u8ACB\u518D\u6B21\u8F38\u5165\u5BC6\u78BC",
                  disabled: unref(isSubmittingDisabled),
                  required: "",
                  class: "w-full",
                  "error-message": unref(errors).confirmPassword
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "error-message"]),
                createVNode(_component_ButtonPrimary, {
                  type: "submit",
                  class: "w-full text-white",
                  label: "\u8A3B\u518A\u6703\u54E1\u9001\u51FA\u6309\u9215"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u8A3B\u518A\u6703\u54E1 ")
                  ]),
                  _: 1
                })
              ], 40, ["onSubmit"]),
              createVNode("div", { class: "text-sm text-gray-400 mt-4" }, " \u627F\u8AFE\u4FDD\u8B77\u60A8\u7684\u96B1\u79C1\uFF0C\u60A8\u63D0\u4F9B\u7684\u624B\u6A5F\u865F\u78BC\u50C5\u7528\u65BC\u6703\u54E1\u4F7F\u7528\uFF0C\u7D55\u4E0D\u6703\u88AB\u7528\u65BC\u5176\u4ED6\u7528\u9014\u6216\u5411\u7B2C\u4E09\u65B9\u5206\u4EAB\u3002 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "bottom-0 w-[48%] hidden md:inline-block",
        format: "webp",
        src: "pet_images/login/kv.png"
      }, null, _parent));
      _push(`</div><div class="w-[72%] md:w-1/2 flex items-center justify-center md:justify-right py-4 md:py-0 md:pb-80 bg-white md:bg-transparent rounded-xl md:rounded-none mx-auto md:mx-0 mt-[80vh] md:mt-0">`);
      _push(ssrRenderComponent(_component_ButtonSignUpBeeKeeper, { class: "w-9/10 md:w-3/4" }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/signUp/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DRyxv0xM.mjs.map

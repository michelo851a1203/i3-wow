import { _ as _sfc_main$1 } from './NuxtImg-Ce9a8LGV.mjs';
import { _ as __nuxt_component_1 } from './Card-BR-BXdAC.mjs';
import { _ as _sfc_main$2 } from './Password-D-_4QSX0.mjs';
import { _ as _sfc_main$3 } from './PasswordRule-fKVF88Ky.mjs';
import { _ as _sfc_main$4 } from './Primary-DO2BBNU0.mjs';
import { defineComponent, mergeProps, withCtx, unref, isRef, createTextVNode, createVNode, withModifiers, useSSRContext, shallowRef } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { a as useLocalePath, b as useThrottleFn, n as navigateTo } from './server.mjs';
import { u as useAuthStore } from './useAuthStore-6LI8GoiG.mjs';
import { u as useForm, a as useField, t as toTypedSchema } from './vee-validate-zod-CmN8nNdS.mjs';
import * as zod from 'zod';
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
import './Icon-B6ODn5Cd.mjs';
import './index-Bq1kpYX2.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'tailwind-merge';
import './signUp.type-C4a4H3kg.mjs';
import './useCustomError-C6r27JZ9.mjs';

const renewPasswordFormSchema = zod.object({
  password: zod.string().min(6, "\u9577\u5EA6\u70BA6-18\u500B\u5B57\u5143").max(18, "\u9577\u5EA6\u70BA6-18\u500B\u5B57\u5143").regex(/(?=.*[A-Z]).*/g, "\u5305\u542B1\u500B\u5927\u5BEB\u5B57\u6BCD").regex(/(?=.*\d).*/g, "\u5305\u542B1\u500B\u6578\u5B57"),
  confirmPassword: zod.string().min(6, "\u9577\u5EA6\u70BA6-18\u500B\u5B57\u5143").max(18, "\u9577\u5EA6\u70BA6-18\u500B\u5B57\u5143").regex(/(?=.*[A-Z]).*/g, "\u5305\u542B1\u500B\u5927\u5BEB\u5B57\u6BCD").regex(/(?=.*\d).*/g, "\u5305\u542B1\u500B\u6578\u5B57")
}).superRefine(({ password, confirmPassword }, ctx) => {
  if (password !== confirmPassword) {
    ctx.addIssue({
      path: ["confirmPassword"],
      code: zod.ZodIssueCode.custom,
      message: "\u8207\u5BC6\u78BC\u4E0D\u4E00\u81F4"
    });
  }
});
const useRenewPasswordForm = (submitFn, submitErrorFn) => {
  const isSubmittingDisabled = shallowRef(false);
  const validationSchema = toTypedSchema(renewPasswordFormSchema);
  const initialValues = {
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
  const { value: password } = useField("password");
  const { value: confirmPassword } = useField("confirmPassword");
  return {
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
  __name: "newPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    const authStore = useAuthStore();
    const { handleRenewPassword } = authStore;
    const {
      password,
      confirmPassword,
      formSubmit,
      isSubmittingDisabled,
      errors
    } = useRenewPasswordForm(async (values) => {
      const isLoginSuccess = await handleRenewPassword(values);
      navigateTo(localePath("signIn"));
      return isLoginSuccess;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      const _component_SignInCard = __nuxt_component_1;
      const _component_InputPassword = _sfc_main$2;
      const _component_PasswordRule = _sfc_main$3;
      const _component_ButtonPrimary = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[calc(100vh_-_3.25rem)] md:h-[calc(100vh_-_4.625rem)] relative mb-8 w-full flex items-center justify-between" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "left-0 top-0 h-[85%] hidden md:inline-block",
        src: "pet_images/login/pet-left.png"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "right-0 top-0 h-[85%] hidden md:inline-block",
        src: "pet_images/login/pet-right.png"
      }, null, _parent));
      _push(ssrRenderComponent(_component_SignInCard, { class: "flex flex-col absolute left-1/2 transform items-center justify-center -translate-x-1/2 w-4/5 md:w-1/2 gap-y-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              class: "w-[3.0625rem]",
              src: "pet_images/login/sheld.svg"
            }, null, _parent2, _scopeId));
            _push2(`<h1 class="text-2xl"${_scopeId}> \u8A2D\u5B9A\u65B0\u5BC6\u78BC </h1><form class="w-9/10 md:w-2/3 flex flex-col items-center gap-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_InputPassword, {
              modelValue: unref(password),
              "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
              label: "\u8F38\u5165\u65B0\u5BC6\u78BC",
              placeholder: "\u8ACB\u8F38\u5165\u65B0\u5BC6\u78BC",
              disabled: unref(isSubmittingDisabled),
              required: "",
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PasswordRule, {
              class: "w-full",
              "input-string": unref(password)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputPassword, {
              modelValue: unref(confirmPassword),
              "onUpdate:modelValue": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
              label: "\u78BA\u8A8D\u65B0\u5BC6\u78BC",
              placeholder: "\u8ACB\u518D\u6B21\u8F38\u5165\u5BC6\u78BC",
              disabled: unref(isSubmittingDisabled),
              required: "",
              class: "w-full",
              "error-message": unref(errors).confirmPassword
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ButtonPrimary, {
              type: "submit",
              class: "w-full text-white",
              label: "\u9001\u51FA\u65B0\u5BC6\u78BC\u6309\u9215"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u78BA\u8A8D\u65B0\u5BC6\u78BC `);
                } else {
                  return [
                    createTextVNode(" \u78BA\u8A8D\u65B0\u5BC6\u78BC ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form>`);
          } else {
            return [
              createVNode(_component_NuxtImg, {
                class: "w-[3.0625rem]",
                src: "pet_images/login/sheld.svg"
              }),
              createVNode("h1", { class: "text-2xl" }, " \u8A2D\u5B9A\u65B0\u5BC6\u78BC "),
              createVNode("form", {
                class: "w-9/10 md:w-2/3 flex flex-col items-center gap-y-4",
                onSubmit: withModifiers(unref(formSubmit), ["prevent"])
              }, [
                createVNode(_component_InputPassword, {
                  modelValue: unref(password),
                  "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                  label: "\u8F38\u5165\u65B0\u5BC6\u78BC",
                  placeholder: "\u8ACB\u8F38\u5165\u65B0\u5BC6\u78BC",
                  disabled: unref(isSubmittingDisabled),
                  required: "",
                  class: "w-full"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                createVNode(_component_PasswordRule, {
                  class: "w-full",
                  "input-string": unref(password)
                }, null, 8, ["input-string"]),
                createVNode(_component_InputPassword, {
                  modelValue: unref(confirmPassword),
                  "onUpdate:modelValue": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
                  label: "\u78BA\u8A8D\u65B0\u5BC6\u78BC",
                  placeholder: "\u8ACB\u518D\u6B21\u8F38\u5165\u5BC6\u78BC",
                  disabled: unref(isSubmittingDisabled),
                  required: "",
                  class: "w-full",
                  "error-message": unref(errors).confirmPassword
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "error-message"]),
                createVNode(_component_ButtonPrimary, {
                  type: "submit",
                  class: "w-full text-white",
                  label: "\u9001\u51FA\u65B0\u5BC6\u78BC\u6309\u9215"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u78BA\u8A8D\u65B0\u5BC6\u78BC ")
                  ]),
                  _: 1
                })
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/newPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=newPassword-Dfj7Q22G.mjs.map

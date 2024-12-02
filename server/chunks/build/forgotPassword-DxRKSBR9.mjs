import { _ as _sfc_main$1 } from './NuxtImg-Ce9a8LGV.mjs';
import { _ as __nuxt_component_1 } from './Card-BR-BXdAC.mjs';
import { _ as _sfc_main$2 } from './Common-DHSSImN5.mjs';
import { _ as _sfc_main$3 } from './Primary-DO2BBNU0.mjs';
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
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'tailwind-merge';
import '@iconify/vue';
import './signUp.type-C4a4H3kg.mjs';
import './useCustomError-C6r27JZ9.mjs';

const forgetPasswordFormSchema = zod.object({
  email: zod.string().email("\u8ACB\u8F38\u5165 email \u683C\u5F0F").min(1, "\u8ACB\u8F38\u5165 email").max(50, "\u4F60\u7684 email \u592A\u9577\u4E86\u5427\uFF01")
});
const useForgetPasswordForm = (submitFn, submitErrorFn) => {
  const isSubmittingDisabled = shallowRef(false);
  const validationSchema = toTypedSchema(forgetPasswordFormSchema);
  const initialValues = {
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
  const { value: email } = useField("email");
  return {
    email,
    formSubmit,
    isSubmitting,
    isSubmittingDisabled,
    resetForm,
    errors
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "forgotPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    const authStore = useAuthStore();
    const { handleForgetPassword } = authStore;
    const {
      email,
      formSubmit,
      isSubmittingDisabled,
      errors
    } = useForgetPasswordForm(async (values) => {
      const isForgetPasswordEmailSentSuccess = await handleForgetPassword(values.email);
      if (isForgetPasswordEmailSentSuccess) {
        const key = "verifyTime";
        const startCountTimeStamp = localStorage.getItem(key);
        if (startCountTimeStamp !== null) {
          localStorage.removeItem(key);
        }
        navigateTo({ path: localePath("verifycode"), query: { email: values.email } });
      }
      return isForgetPasswordEmailSentSuccess;
    });
    const handleVerify = () => {
      navigateTo(localePath("verifycode"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      const _component_SignInCard = __nuxt_component_1;
      const _component_InputCommon = _sfc_main$2;
      const _component_ButtonPrimary = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[calc(100vh_-_3.25rem)] md:h-[calc(100vh_-_4.625rem)] relative mb-8 w-full flex items-center justify-between" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "left-0 top-0 h-[85%] hidden md:inline-block",
        src: "pet_images/login/pet-left.png"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "right-0 top-0 h-[85%] hidden md:inline-block",
        src: "pet_images/login/pet-right.png"
      }, null, _parent));
      _push(ssrRenderComponent(_component_SignInCard, { class: "flex flex-col absolute left-1/2 w-4/5 md:w-auto transform items-center justify-center -translate-x-1/2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              class: "w-[3.0625rem]",
              src: "pet_images/login/sheld.svg"
            }, null, _parent2, _scopeId));
            _push2(`<h1 class="my-4 text-2xl"${_scopeId}> \u91CD\u8A2D\u5BC6\u78BC </h1><form class="w-full md:w-2/3 flex flex-col items-center gap-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_InputCommon, {
              modelValue: unref(email),
              "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
              type: "email",
              class: "w-full",
              label: "\u96FB\u5B50\u4FE1\u7BB1",
              placeholder: "\u8ACB\u8F38\u5165\u96FB\u5B50\u4FE1\u7BB1",
              disabled: unref(isSubmittingDisabled),
              required: true,
              "error-message": unref(errors).email
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ButtonPrimary, {
              class: "w-full text-white",
              label: "\u53D6\u5F97\u9A57\u8B49\u78BC\u6309\u9215",
              onClick: handleVerify
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
            _push2(`<p class="text-gray-400 text-sm"${_scopeId}> \u627F\u8AFE\u4FDD\u8B77\u60A8\u7684\u96B1\u79C1\uFF0C\u60A8\u63D0\u4F9B\u7684\u624B\u6A5F\u865F\u78BC\u50C5\u7528\u65BC\u6703\u54E1\u4F7F\u7528\uFF0C\u7D55\u4E0D\u6703\u88AB\u7528\u65BC\u5176\u4ED6\u7528\u9014\u6216\u5411\u7B2C\u4E09\u65B9\u5206\u4EAB\u3002 </p></form>`);
          } else {
            return [
              createVNode(_component_NuxtImg, {
                class: "w-[3.0625rem]",
                src: "pet_images/login/sheld.svg"
              }),
              createVNode("h1", { class: "my-4 text-2xl" }, " \u91CD\u8A2D\u5BC6\u78BC "),
              createVNode("form", {
                class: "w-full md:w-2/3 flex flex-col items-center gap-y-4",
                onSubmit: withModifiers(unref(formSubmit), ["prevent"])
              }, [
                createVNode(_component_InputCommon, {
                  modelValue: unref(email),
                  "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                  type: "email",
                  class: "w-full",
                  label: "\u96FB\u5B50\u4FE1\u7BB1",
                  placeholder: "\u8ACB\u8F38\u5165\u96FB\u5B50\u4FE1\u7BB1",
                  disabled: unref(isSubmittingDisabled),
                  required: true,
                  "error-message": unref(errors).email
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "error-message"]),
                createVNode(_component_ButtonPrimary, {
                  class: "w-full text-white",
                  label: "\u53D6\u5F97\u9A57\u8B49\u78BC\u6309\u9215",
                  onClick: handleVerify
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u53D6\u5F97\u9A57\u8B49\u78BC ")
                  ]),
                  _: 1
                }),
                createVNode("p", { class: "text-gray-400 text-sm" }, " \u627F\u8AFE\u4FDD\u8B77\u60A8\u7684\u96B1\u79C1\uFF0C\u60A8\u63D0\u4F9B\u7684\u624B\u6A5F\u865F\u78BC\u50C5\u7528\u65BC\u6703\u54E1\u4F7F\u7528\uFF0C\u7D55\u4E0D\u6703\u88AB\u7528\u65BC\u5176\u4ED6\u7528\u9014\u6216\u5411\u7B2C\u4E09\u65B9\u5206\u4EAB\u3002 ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/forgotPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=forgotPassword-DxRKSBR9.mjs.map

import { _ as _sfc_main$2 } from './NuxtImg-Ce9a8LGV.mjs';
import { _ as __nuxt_component_1 } from './Card-BR-BXdAC.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, withModifiers, useTemplateRef, shallowRef } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { a as useLocalePath, n as navigateTo, b as useThrottleFn, J as __nuxt_component_0 } from './server.mjs';
import { _ as _sfc_main$3 } from './Pale-B861WQUB.mjs';
import { _ as _sfc_main$4 } from './Primary-DO2BBNU0.mjs';
import { u as useAuthStore } from './useAuthStore-6LI8GoiG.mjs';
import { u as useForm, a as useField, t as toTypedSchema } from './vee-validate-zod-CmN8nNdS.mjs';
import * as zod from 'zod';
import { u as useVerifyCount } from './useVerifyCount-BxlrLA_B.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Verify",
  __ssrInlineRender: true,
  props: {
    codeNumber: { default: 4 },
    disabled: { type: Boolean, default: false }
  },
  emits: ["update:verifyCode"],
  setup(__props, { emit: __emit }) {
    useTemplateRef("inputVerify");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex items-center justify-center gap-x-4 rounded-xl px-4 py-3", [
          _ctx.disabled ? "bg-gray-100" : "bg-[#FFF6F3]"
        ]]
      }, _attrs))}><!--[-->`);
      ssrRenderList(_ctx.codeNumber, (item) => {
        _push(`<label${ssrRenderAttr("for", `code_number_${item}`)}><input${ssrRenderAttr("id", `code_number_${item}`)} class="${ssrRenderClass([[
          _ctx.disabled ? "border-b-2 border-gray-300" : "border-b-2 border-orange-500"
        ], "w-6 bg-transparent px-2 py-1 outline-none"])}" type="text"${ssrRenderAttr("tabindex", item)}${ssrIncludeBooleanAttr(_ctx.disabled) ? " disabled" : ""}></label>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/Verify.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const verifyCodeSchema = zod.object({
  verifyCode: zod.string().length(4, "\u8ACB\u8F38\u51654\u4F4D\u9A57\u8B49\u78BC")
});
const useVerifyCodeForm = (submitFn, submitErrorFn) => {
  const isSubmittingDisabled = shallowRef(false);
  const validationSchema = toTypedSchema(verifyCodeSchema);
  const initialValues = {
    verifyCode: ""
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
  const { value: verifyCode } = useField("verifyCode");
  return {
    verifyCode,
    formSubmit,
    isSubmitting,
    isSubmittingDisabled,
    resetForm,
    errors
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "verifycode",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const { handleForgetPasswordVerifyCode } = authStore;
    const localePath = useLocalePath();
    const {
      verifyCode,
      formSubmit,
      isSubmittingDisabled,
      errors
    } = useVerifyCodeForm(async (values) => {
      const isLoginSuccess = await handleForgetPasswordVerifyCode(values.verifyCode);
      navigateTo(localePath("newPassword"));
      return isLoginSuccess;
    });
    const {
      reVerifyCodeCount,
      startCounter,
      getKeyTimeStamp,
      resetCounter
    } = useVerifyCount();
    const getVerifyCode = (verifyCodeString) => {
      verifyCode.value = verifyCodeString;
      if (verifyCode.value.length === 4) {
        formSubmit();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$2;
      const _component_SignInCard = __nuxt_component_1;
      const _component_InputVerify = _sfc_main$1;
      const _component_ClientOnly = __nuxt_component_0;
      const _component_ButtonPale = _sfc_main$3;
      const _component_ButtonPrimary = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative mb-8 w-full flex items-center justify-between h-[calc(100vh_-_3.25rem)] md:h-[calc(100vh_-_4.625rem)]" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "absolute left-0 top-0 h-[85%] hidden md:inline-block",
        src: "pet_images/login/pet-left.png"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "absolute right-0 top-0 h-[85%] hidden md:inline-block",
        src: "pet_images/login/pet-right.png"
      }, null, _parent));
      _push(ssrRenderComponent(_component_SignInCard, { class: "absolute left-1/2 flex flex-col transform items-center justify-center -translate-x-1/2 w-4/5 md:w-1/2 gap-y-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              class: "w-1/4 md:w-1/5",
              src: "pet_images/login/plane.svg"
            }, null, _parent2, _scopeId));
            _push2(`<p class="text-2xl"${_scopeId}> \u9A57\u8B49\u78BC\u5DF2\u767C\u9001\uFF01 </p><p${_scopeId}>\u767C\u9001\u5730\u5740: ${ssrInterpolate(_ctx.$route.query.email)}</p><form class="w-9/10 md:w-2/3 flex flex-col items-center gap-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_InputVerify, {
              class: "w-full",
              disabled: unref(reVerifyCodeCount) === 0 || unref(isSubmittingDisabled),
              "onUpdate:verifyCode": getVerifyCode
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ButtonPale, {
              label: "\u518D\u6B21\u767C\u9001\u6309\u9215",
              class: "text-orange-600 underline",
              onClick: unref(resetCounter)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u518D\u6B21\u767C\u9001 `);
                } else {
                  return [
                    createTextVNode(" \u518D\u6B21\u767C\u9001 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_ButtonPrimary, {
              type: "submit",
              class: "w-full text-white",
              label: "\u53D6\u5F97\u9A57\u8B49\u78BC\u6309\u9215",
              disabled: unref(isSubmittingDisabled) || typeof unref(errors).verifyCode !== "undefined"
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
            _push2(ssrRenderComponent(_component_ButtonPale, {
              label: "\u8A66\u8A66\u5176\u4ED6\u4FE1\u7BB1\u6309\u9215",
              class: "text-orange-600 underline",
              onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(unref(localePath)("forgotPassword"))
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u8A66\u8A66\u5176\u4ED6\u4FE1\u7BB1 `);
                } else {
                  return [
                    createTextVNode(" \u8A66\u8A66\u5176\u4ED6\u4FE1\u7BB1 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form>`);
          } else {
            return [
              createVNode(_component_NuxtImg, {
                class: "w-1/4 md:w-1/5",
                src: "pet_images/login/plane.svg"
              }),
              createVNode("p", { class: "text-2xl" }, " \u9A57\u8B49\u78BC\u5DF2\u767C\u9001\uFF01 "),
              createVNode("p", null, "\u767C\u9001\u5730\u5740: " + toDisplayString(_ctx.$route.query.email), 1),
              createVNode("form", {
                class: "w-9/10 md:w-2/3 flex flex-col items-center gap-y-4",
                onSubmit: withModifiers(unref(formSubmit), ["prevent"])
              }, [
                createVNode(_component_InputVerify, {
                  class: "w-full",
                  disabled: unref(reVerifyCodeCount) === 0 || unref(isSubmittingDisabled),
                  "onUpdate:verifyCode": getVerifyCode
                }, null, 8, ["disabled"]),
                createVNode("div", null, [
                  createVNode(_component_ClientOnly, null, {
                    default: withCtx(() => [
                      createVNode("span", null, " \u6C92\u6536\u5230\u9A57\u8B49\u78BC\uFF1F\uFF08" + toDisplayString(unref(reVerifyCodeCount)) + "\u79D2\uFF09 ", 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ButtonPale, {
                    label: "\u518D\u6B21\u767C\u9001\u6309\u9215",
                    class: "text-orange-600 underline",
                    onClick: withModifiers(unref(resetCounter), ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u518D\u6B21\u767C\u9001 ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                createVNode(_component_ButtonPrimary, {
                  type: "submit",
                  class: "w-full text-white",
                  label: "\u53D6\u5F97\u9A57\u8B49\u78BC\u6309\u9215",
                  disabled: unref(isSubmittingDisabled) || typeof unref(errors).verifyCode !== "undefined"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u53D6\u5F97\u9A57\u8B49\u78BC ")
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                createVNode(_component_ButtonPale, {
                  label: "\u8A66\u8A66\u5176\u4ED6\u4FE1\u7BB1\u6309\u9215",
                  class: "text-orange-600 underline",
                  onClick: withModifiers(($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(unref(localePath)("forgotPassword")), ["prevent"])
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u8A66\u8A66\u5176\u4ED6\u4FE1\u7BB1 ")
                  ]),
                  _: 1
                }, 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/verifycode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=verifycode-JM03ILp_.mjs.map

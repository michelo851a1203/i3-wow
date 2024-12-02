import { _ as __nuxt_component_1 } from './Card-BR-BXdAC.mjs';
import { _ as _sfc_main$9 } from './BeeKeeper-BvdERutE.mjs';
import { defineComponent, shallowRef, watch, withCtx, createVNode, unref, isRef, createTextVNode, withModifiers, useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { a as useLocalePath, n as navigateTo, b as useThrottleFn, _ as _export_sfc } from './server.mjs';
import { _ as _sfc_main$2 } from './OutlineRound-gX7utPmx.mjs';
import { _ as _sfc_main$3 } from './Common-DHSSImN5.mjs';
import { _ as _sfc_main$4 } from './Password-D-_4QSX0.mjs';
import { _ as _sfc_main$5 } from './Primary-DO2BBNU0.mjs';
import { _ as _sfc_main$6 } from './Pale-B861WQUB.mjs';
import { _ as _sfc_main$7 } from './NuxtImg-Ce9a8LGV.mjs';
import { _ as _sfc_main$8 } from './Status-CB7ZqcBa.mjs';
import __nuxt_component_0$1 from './Icon-B6ODn5Cd.mjs';
import { u as useAuthStore, s as signInFormSchema } from './useAuthStore-6LI8GoiG.mjs';
import { storeToRefs } from 'pinia';
import { u as useForm, a as useField, t as toTypedSchema } from './vee-validate-zod-CmN8nNdS.mjs';
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
import './composables-VAV01sHq.mjs';
import './Modal-CUWDe7J7.mjs';
import './transition-HtJtC6dg.mjs';
import './portal-u0Fjoh1P.mjs';
import './focus-management-vHH7q6nP.mjs';
import './keyboard-Duq8EHr3.mjs';
import './use-outside-click-Did7lc5E.mjs';
import './hidden-Dc_fFmis.mjs';
import './active-element-history-Cer4cSOw.mjs';
import './micro-task-B6uncIso.mjs';
import './open-closed-BDzQJ33n.mjs';
import './description-BDgAPIdI.mjs';
import './tooltip-CpVvyQRR.mjs';
import './index-Bq1kpYX2.mjs';
import '@iconify/utils/lib/css/icon';
import 'zod';
import './signUp.type-C4a4H3kg.mjs';
import './useCustomError-C6r27JZ9.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SignInCard = __nuxt_component_1;
  const _component_ButtonSignUpBeeKeeper = _sfc_main$9;
  _push(ssrRenderComponent(_component_SignInCard, mergeProps({ class: "space-y-4" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h3 class="hidden md:block"${_scopeId}> \u5BF5\u7269\u8913\u6BCD\uFF0C\u63D0\u4F9B\u7D30\u5FC3\u7167\u6599\uFF01 </h3><h2 class="hidden pb-8 text-2xl md:block"${_scopeId}> Become a Pet Sitter! </h2>`);
        _push2(ssrRenderComponent(_component_ButtonSignUpBeeKeeper, { class: "w-full" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode("h3", { class: "hidden md:block" }, " \u5BF5\u7269\u8913\u6BCD\uFF0C\u63D0\u4F9B\u7D30\u5FC3\u7167\u6599\uFF01 "),
          createVNode("h2", { class: "hidden pb-8 text-2xl md:block" }, " Become a Pet Sitter! "),
          createVNode(_component_ButtonSignUpBeeKeeper, { class: "w-full" })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SignIn/RegisterPetSitter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const useSingInForm = (submitFn, submitErrorFn) => {
  const isSubmittingDisabled = shallowRef(false);
  const validationSchema = toTypedSchema(signInFormSchema);
  const initialValues = {
    email: "",
    password: ""
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
  const { value: password } = useField("password");
  return {
    email,
    password,
    formSubmit,
    isSubmitting,
    isSubmittingDisabled,
    resetForm,
    errors
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "signIn",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    const authStore = useAuthStore();
    const {
      handleSignIn,
      changeIsShowSignUpAlert
    } = authStore;
    const { isShowSignUpAlert } = storeToRefs(authStore);
    const {
      email,
      password,
      formSubmit,
      isSubmittingDisabled,
      errors
    } = useSingInForm(async (values) => {
      const isLoginSuccess = await handleSignIn(values);
      if (isLoginSuccess) {
        navigateTo(localePath("index"));
      }
      return isLoginSuccess;
    });
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const isSignUpSuccessStatusShow = shallowRef(false);
    watch(isShowSignUpAlert, async (isShowLogin) => {
      if (!isShowLogin)
        return;
      isSignUpSuccessStatusShow.value = true;
      await wait(3e3);
      isSignUpSuccessStatusShow.value = false;
      changeIsShowSignUpAlert(false);
    });
    watch(isSignUpSuccessStatusShow, (isShow) => {
      if (isShow)
        return;
      changeIsShowSignUpAlert(false);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SignInRegisterPetSitter = __nuxt_component_0;
      const _component_SignInCard = __nuxt_component_1;
      const _component_ButtonOutlineRound = _sfc_main$2;
      const _component_InputCommon = _sfc_main$3;
      const _component_InputPassword = _sfc_main$4;
      const _component_ButtonPrimary = _sfc_main$5;
      const _component_ButtonPale = _sfc_main$6;
      const _component_NuxtImg = _sfc_main$7;
      const _component_ModalStatus = _sfc_main$8;
      const _component_UIcon = __nuxt_component_0$1;
      _push(`<!--[--><div class="relative mb-8 bg-[#F27541]"><section class="w-9/10 xs:w-4/5 mx-auto flex flex-wrap md:flex-nowrap items-start justify-center gap-y-8 md:gap-x-12 pt-6 h-[70vh]">`);
      _push(ssrRenderComponent(_component_SignInRegisterPetSitter, { class: "w-full md:w-1/2" }, null, _parent));
      _push(ssrRenderComponent(_component_SignInCard, { class: "h-[75vh] w-full md:w-1/2 mb-8" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mb-xs:4 text-sm"${_scopeId}> Welcome to <span class="text-orange-600"${_scopeId}>LOGO</span></p><p class="mb-4 xs:mb-8 text-2xl"${_scopeId}> Welcome back\uFF01 </p>`);
            _push2(ssrRenderComponent(_component_ButtonOutlineRound, {
              class: "w-full border-gray-300",
              label: "\u7528Line\u5E33\u865F\u767B\u5165\u6309\u9215"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u7528Line\u5E33\u865F\u7E7C\u7E8C</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u7528Line\u5E33\u865F\u7E7C\u7E8C")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="relative my-8 w-full bg-gray-200 h-[0.3px] after:absolute after:left-[50%] after:-translate-x-1/2 after:transform after:bg-white after:px-4 after:text-gray-400 after:content-[&#39;OR&#39;]"${_scopeId}></div><form class="flex flex-col mb-4 items-center gap-y-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_InputCommon, {
              id: "account",
              modelValue: unref(email),
              "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
              type: "email",
              class: "w-full",
              label: "\u5E33\u865F",
              placeholder: "\u8ACB\u8F38\u5165\u96FB\u5B50\u4FE1\u7BB1",
              disabled: unref(isSubmittingDisabled),
              required: true,
              "error-message": unref(errors).email
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputPassword, {
              id: "password",
              modelValue: unref(password),
              "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
              class: "w-full",
              label: "\u5BC6\u78BC",
              placeholder: "\u8ACB\u8F38\u5165\u5BC6\u78BC",
              disabled: unref(isSubmittingDisabled),
              required: true,
              "error-message": unref(errors).password
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ButtonPrimary, {
              type: "submit",
              label: "\u767B\u5165\u6309\u9215",
              disabled: unref(email) === "" || unref(password) === "" || unref(isSubmittingDisabled),
              class: "mt-2 w-full text-white"
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
            _push2(`</form><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><span class="text-gray-400"${_scopeId}>\u6C92\u6709\u5E33\u865F?</span>`);
            _push2(ssrRenderComponent(_component_ButtonPale, {
              label: "\u4E00\u822C\u7528\u6236\u8A3B\u518A\u6309\u9215",
              class: "text-orange-600 underline",
              onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(unref(localePath)("signUp"))
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u8A3B\u518A `);
                } else {
                  return [
                    createTextVNode(" \u8A3B\u518A ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ButtonPale, {
              label: "\u4E00\u822C\u7528\u6236\u8A3B\u518A\u6309\u9215",
              class: "text-orange-600 underline",
              onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(unref(localePath)("forgotPassword"))
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u5FD8\u8A18\u5BC6\u78BC `);
                } else {
                  return [
                    createTextVNode(" \u5FD8\u8A18\u5BC6\u78BC ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("p", { class: "mb-xs:4 text-sm" }, [
                createTextVNode(" Welcome to "),
                createVNode("span", { class: "text-orange-600" }, "LOGO")
              ]),
              createVNode("p", { class: "mb-4 xs:mb-8 text-2xl" }, " Welcome back\uFF01 "),
              createVNode(_component_ButtonOutlineRound, {
                class: "w-full border-gray-300",
                label: "\u7528Line\u5E33\u865F\u767B\u5165\u6309\u9215"
              }, {
                default: withCtx(() => [
                  createVNode("span", null, "\u7528Line\u5E33\u865F\u7E7C\u7E8C")
                ]),
                _: 1
              }),
              createVNode("div", { class: "relative my-8 w-full bg-gray-200 h-[0.3px] after:absolute after:left-[50%] after:-translate-x-1/2 after:transform after:bg-white after:px-4 after:text-gray-400 after:content-['OR']" }),
              createVNode("form", {
                class: "flex flex-col mb-4 items-center gap-y-3",
                onSubmit: withModifiers(unref(formSubmit), ["prevent"])
              }, [
                createVNode(_component_InputCommon, {
                  id: "account",
                  modelValue: unref(email),
                  "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                  type: "email",
                  class: "w-full",
                  label: "\u5E33\u865F",
                  placeholder: "\u8ACB\u8F38\u5165\u96FB\u5B50\u4FE1\u7BB1",
                  disabled: unref(isSubmittingDisabled),
                  required: true,
                  "error-message": unref(errors).email
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "error-message"]),
                createVNode(_component_InputPassword, {
                  id: "password",
                  modelValue: unref(password),
                  "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                  class: "w-full",
                  label: "\u5BC6\u78BC",
                  placeholder: "\u8ACB\u8F38\u5165\u5BC6\u78BC",
                  disabled: unref(isSubmittingDisabled),
                  required: true,
                  "error-message": unref(errors).password
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "error-message"]),
                createVNode(_component_ButtonPrimary, {
                  type: "submit",
                  label: "\u767B\u5165\u6309\u9215",
                  disabled: unref(email) === "" || unref(password) === "" || unref(isSubmittingDisabled),
                  class: "mt-2 w-full text-white"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u767B\u5165 ")
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ], 40, ["onSubmit"]),
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("div", null, [
                  createVNode("span", { class: "text-gray-400" }, "\u6C92\u6709\u5E33\u865F?"),
                  createVNode(_component_ButtonPale, {
                    label: "\u4E00\u822C\u7528\u6236\u8A3B\u518A\u6309\u9215",
                    class: "text-orange-600 underline",
                    onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(unref(localePath)("signUp"))
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u8A3B\u518A ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                createVNode("div", null, [
                  createVNode(_component_ButtonPale, {
                    label: "\u4E00\u822C\u7528\u6236\u8A3B\u518A\u6309\u9215",
                    class: "text-orange-600 underline",
                    onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(unref(localePath)("forgotPassword"))
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u5FD8\u8A18\u5BC6\u78BC ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "absolute bottom-0 w-[48%] hidden md:inline-block",
        format: "webp",
        src: "pet_images/login/kv.png"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ModalStatus, {
        modelValue: unref(isSignUpSuccessStatusShow),
        "onUpdate:modelValue": ($event) => isRef(isSignUpSuccessStatusShow) ? isSignUpSuccessStatusShow.value = $event : null,
        msg: "\u8A3B\u518A\u6210\u529F"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-lucide:circle-check-big",
              class: "text-3xl text-green-500"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "i-lucide:circle-check-big",
                class: "text-3xl text-green-500"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/signIn.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=signIn-iiAMgXBj.mjs.map

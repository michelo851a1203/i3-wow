import { _ as _sfc_main$a } from './Tabs-Cb0V9DXg.mjs';
import { _ as _sfc_main$b, o as orderSearchFormSchema } from './memberPetSitterOrder.type-CiRsJV1G.mjs';
import { _ as _sfc_main$c } from './SelectWithNoValue-EvF5oYkr.mjs';
import { a as _sfc_main$1$1, _ as _sfc_main$d } from './Pagination-DS0SqUIM.mjs';
import { _ as _sfc_main$e } from './Pale-B861WQUB.mjs';
import { useSSRContext, defineComponent, shallowRef, watch, unref, mergeProps, isRef, withCtx, createVNode, computed, createTextVNode, mergeModels, useModel, ref, toDisplayString, withDirectives, vShow } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderStyle } from 'vue/server-renderer';
import { o as orderStatusName } from './memberPetSitter.type-CaMt6ZpT.mjs';
import { u as useDateFormat, b as useThrottleFn } from './server.mjs';
import __nuxt_component_0 from './Icon-B6ODn5Cd.mjs';
import { _ as _sfc_main$f } from './Primary-DO2BBNU0.mjs';
import { _ as _sfc_main$g } from './OutlineRound-gX7utPmx.mjs';
import { u as useMemberStore, A as AppointmentStatus, c as appointReservationMap } from './useMemberStore-uW6LN4tp.mjs';
import { _ as _sfc_main$n } from './ReservationInfo-CdlEHTW7.mjs';
import { _ as _sfc_main$k } from './Outline-DOrBdQBb.mjs';
import __nuxt_component_0$1 from './Modal-CUWDe7J7.mjs';
import { _ as __nuxt_component_1 } from './ModalClose-DniwJvVv.mjs';
import { _ as _sfc_main$l } from './PetCount-C1dJIt54.mjs';
import { _ as _sfc_main$h } from './Select-Jj7n4e63.mjs';
import { _ as _sfc_main$i } from './Common-DHSSImN5.mjs';
import { _ as _sfc_main$j } from './Prefix-CQaUPUPN.mjs';
import { e as petServiceSchema, P as PetType, b as PetSize, S as ServiceStatus, g as petNameMapping, h as petSizeDetailName } from './petSitter.type-BjvpgkZ2.mjs';
import { storeToRefs } from 'pinia';
import { u as useForm, a as useField, t as toTypedSchema } from './vee-validate-zod-CmN8nNdS.mjs';
import * as zod from 'zod';
import { c as cities } from './region.type-CQhlObjv.mjs';
import { u as usePetSitterStore } from './usePetSitterStore-BLaObs6U.mjs';
import { _ as _sfc_main$m } from './TextArea-BzPNiDUE.mjs';
import { _ as _sfc_main$o } from './Discussion-Bz455CEt.mjs';
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
import './signUp.type-C4a4H3kg.mjs';
import './useCustomError-C6r27JZ9.mjs';
import './composables-VAV01sHq.mjs';
import './transition-HtJtC6dg.mjs';
import './portal-u0Fjoh1P.mjs';
import './description-BDgAPIdI.mjs';
import './NuxtImg-Ce9a8LGV.mjs';

const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "OrderTable",
  __ssrInlineRender: true,
  props: {
    orderList: {}
  },
  emits: ["update:showDetail"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonPale = _sfc_main$e;
      _push(`<table${ssrRenderAttrs(mergeProps({ class: "table-auto" }, _attrs))}><thead><tr class="rounded-t-xl bg-gray-100 text-left"><th class="px-3 py-2"> \u9810\u7D04\u7DE8\u865F </th><th class="px-3 py-2"> \u6642\u9593 </th><th class="px-3 py-2"> \u98FC\u4E3B\u5E33\u865F </th><th class="px-3 py-2"> \u9810\u7D04\u72C0\u614B </th><th class="px-3 py-2"> \u670D\u52D9\u9805\u76EE </th><th class="px-3 py-2"> \u52D5\u4F5C </th></tr></thead><tbody><!--[-->`);
      ssrRenderList(_ctx.orderList, (item, index) => {
        _push(`<tr class="${ssrRenderClass([[index % 2 === 1 ? "bg-gray-100" : ""], "border-b border-solid border-gray-200"])}"><td class="px-3 py-2">${ssrInterpolate(item.ticketCode)}</td><td class="px-3 py-2">${ssrInterpolate(unref(useDateFormat)(item.orderTime, "YYYY/MM/DD HH:mm "))}</td><td class="px-3 py-2">${ssrInterpolate(item.name)}</td><td class="px-3 py-2">${ssrInterpolate(unref(orderStatusName).get(item.orderStatus))}</td><td class="px-3 py-2">${ssrInterpolate(item.serviceItem)}</td><td class="px-3 py-2">`);
        _push(ssrRenderComponent(_component_ButtonPale, {
          label: `\u67E5\u770B\u66F4\u591A\u95DC\u65BC:\u8A02\u55AE\u7DE8\u865F${item.ticketCode}\u7684\u8A0A\u606F\u6309\u9215`,
          onClick: ($event) => _ctx.$emit("update:showDetail", item.ticketCode)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="underline"${_scopeId}>\u67E5\u770B\u66F4\u591A</span>`);
            } else {
              return [
                createVNode("span", { class: "underline" }, "\u67E5\u770B\u66F4\u591A")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Member/PetSitter/OrderTable.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "PaymentBoard",
  __ssrInlineRender: true,
  props: {
    status: {},
    price: {},
    serviceName: {},
    keeperPhone: {}
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
      const _component_ButtonPrimary = _sfc_main$f;
      const _component_ButtonOutlineRound = _sfc_main$g;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-stretch justify-center gap-x-4" }, _attrs))}><div class="w-1/4 flex items-center justify-between rounded-xl bg-gray-100 px-6 py-4"><div class="flex flex-col items-start justify-around gap-y-2"><span>\u9810\u7D04\u72C0\u614B</span><span class="text-lg font-medium">${ssrInterpolate(unref(appointReservationMap).get(_ctx.status))}</span></div>`);
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
      _push(`</div><div class="w-1/4 flex flex-col items-start gap-y-2 rounded-xl bg-gray-100 px-6 py-4"><span>\u9810\u7D04\u670D\u52D9</span><span class="text-lg font-medium">${ssrInterpolate(_ctx.serviceName)}</span></div><div class="w-1/4 flex flex-col items-start gap-y-2 rounded-xl bg-gray-100 px-6 py-4"><span>\u9810\u7D04\u91D1\u984D</span><span class="text-lg font-medium">NT$ ${ssrInterpolate(_ctx.price.toLocaleString())}</span></div><div class="w-1/4 flex flex-col items-start gap-y-2 rounded-xl bg-gray-100 px-6 py-4"><span>\u98FC\u4E3B\u806F\u7D61\u8CC7\u6599</span><span class="text-lg font-medium">${ssrInterpolate(_ctx.keeperPhone)}</span></div></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Order/Detail/PaymentBoard.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Pet",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    disabled: { type: Boolean, default: false },
    petTypeOptionList: {},
    petSizeOptionList: {}
  }, {
    "modelValue": { default: [] },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const petEditList = useModel(__props, "modelValue");
    const addExtraServiceItem = (id) => {
      const pickedPetEdit = petEditList.value.find((item) => item.id === id);
      if (!pickedPetEdit)
        return;
      const defaultValue = {
        id: 1,
        name: "",
        price: 0,
        isDeleteabe: true
      };
      if (!pickedPetEdit.extraServiceList) {
        pickedPetEdit.extraServiceList = [defaultValue];
        return;
      }
      const maxId = Math.max(...pickedPetEdit.extraServiceList.map((item) => item.id)) + 1;
      pickedPetEdit.extraServiceList.push({
        id: maxId,
        name: "",
        price: 0,
        isDeleteabe: true
      });
    };
    const removeExtraServiceItem = (id, extraId) => {
      const pickedPetEdit = petEditList.value.find((item) => item.id === id);
      if (!pickedPetEdit)
        return;
      if (!pickedPetEdit.extraServiceList)
        return;
      const index = pickedPetEdit.extraServiceList.findIndex((item) => item.id === extraId);
      if (index === -1)
        return;
      pickedPetEdit.extraServiceList.splice(index, 1);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputSelect = _sfc_main$h;
      const _component_InputCommon = _sfc_main$i;
      const _component_InputPrefix = _sfc_main$j;
      const _component_ButtonPale = _sfc_main$e;
      const _component_UIcon = __nuxt_component_0;
      const _component_ButtonOutline = _sfc_main$k;
      _push(`<!--[-->`);
      ssrRenderList(petEditList.value, (item, index) => {
        var _a;
        _push(`<div class="flex flex-col gap-y-2"><h4 class="w-full"> \u7B2C${ssrInterpolate(index + 1)}\u96BB\u5BF5\u7269 </h4><div class="flex flex-col gap-y-4">`);
        _push(ssrRenderComponent(_component_InputSelect, {
          modelValue: item.petType,
          "onUpdate:modelValue": ($event) => item.petType = $event,
          label: "\u5BF5\u7269\u7A2E\u985E",
          "is-show-label": false,
          options: _ctx.petTypeOptionList,
          disabled: _ctx.disabled,
          "is-full-size": "",
          class: "w-full"
        }, null, _parent));
        _push(`<div class="flex items-center justify-center gap-x-4">`);
        _push(ssrRenderComponent(_component_InputCommon, {
          id: "account",
          modelValue: item.name,
          "onUpdate:modelValue": ($event) => item.name = $event,
          "is-show-label": false,
          label: "\u5BF5\u7269\u540D\u5B57",
          placeholder: "\u8ACB\u8F38\u5165\u5BF5\u7269\u59D3\u540D",
          class: {
            "w-1/2": item.petType === unref(PetType).Dog,
            "w-full": item.petType !== unref(PetType).Dog
          },
          disabled: _ctx.disabled,
          required: ""
        }, null, _parent));
        if (item.petType === unref(PetType).Dog) {
          _push(ssrRenderComponent(_component_InputSelect, {
            id: "petSize",
            modelValue: item.size,
            "onUpdate:modelValue": ($event) => item.size = $event,
            label: "\u5BF5\u7269\u5C3A\u5BF8",
            "is-show-label": false,
            options: _ctx.petSizeOptionList,
            disabled: _ctx.disabled,
            "is-full-size": "",
            class: "w-1/2"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex flex-col gap-y-2"><h5>\u984D\u5916\u670D\u52D9\u7D30\u9805</h5><!--[-->`);
        ssrRenderList((_a = item.extraServiceList) != null ? _a : [], (extraItem) => {
          _push(`<label class="flex items-center justify-center gap-x-4"${ssrRenderAttr("for", `${item.id}_extra_${extraItem.id}`)}><input${ssrIncludeBooleanAttr(Array.isArray(extraItem.isChecked) ? ssrLooseContain(extraItem.isChecked, null) : extraItem.isChecked) ? " checked" : ""} type="checkbox">`);
          _push(ssrRenderComponent(_component_InputCommon, {
            id: `${item.id}_extra_${extraItem.id}`,
            modelValue: extraItem.name,
            "onUpdate:modelValue": ($event) => extraItem.name = $event,
            "is-show-label": false,
            label: "\u7D30\u9805\u540D\u7A31",
            placeholder: "\u8ACB\u8F38\u5165\u7D30\u9805\u540D\u7A31",
            disabled: _ctx.disabled,
            required: "",
            class: "flex-grow"
          }, null, _parent));
          _push(ssrRenderComponent(_component_InputPrefix, {
            label: "\u670D\u52D9\u7D30\u9805\u91D1\u984D",
            "is-show-label": false,
            placeholder: "\u91D1\u984D",
            disabled: _ctx.disabled,
            class: "w-32"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex items-center justify-center bg-gray-200 border-r border-gray-300 px-2"${_scopeId}> NT$ </div>`);
              } else {
                return [
                  createVNode("div", { class: "flex items-center justify-center bg-gray-200 border-r border-gray-300 px-2" }, " NT$ ")
                ];
              }
            }),
            _: 2
          }, _parent));
          if (extraItem.isDeleteabe) {
            _push(ssrRenderComponent(_component_ButtonPale, {
              label: `\u522A\u9664${extraItem.name}\u670D\u52D9\u9805\u76EE\u6309\u9215`,
              class: "flex items-center justify-center gap-x-2 text-orange-600",
              onClick: ($event) => removeExtraServiceItem(item.id, extraItem.id)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_UIcon, { name: "i-heroicons:trash" }, null, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_UIcon, { name: "i-heroicons:trash" })
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</label>`);
        });
        _push(`<!--]-->`);
        _push(ssrRenderComponent(_component_ButtonOutline, {
          label: "\u65B0\u589E\u984D\u5916\u670D\u52D9\u7D30\u9805\u6309\u9215",
          class: "w-full flex items-center justify-center gap-x-2 rounded-xl text-orange-600",
          onClick: ($event) => addExtraServiceItem(item.id)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}> \u984D\u5916\u670D\u52D9\u7D30\u9805 </span>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                class: "text-orange-600",
                name: "i-heroicons-plus"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", null, " \u984D\u5916\u670D\u52D9\u7D30\u9805 "),
                createVNode(_component_UIcon, {
                  class: "text-orange-600",
                  name: "i-heroicons-plus"
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Order/Detail/Modal/EditService/Pet.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const extendsPetServiceSchema = petServiceSchema.extend({
  isChecked: zod.boolean().optional(),
  isDeleteabe: zod.boolean().optional()
});
const petEditSchema = zod.object({
  id: zod.number().int().nonnegative("\u8ACB\u8F38\u5165\u6B63\u6574\u6578\u62160"),
  petType: zod.nativeEnum(PetType),
  name: zod.string().min(1, "\u8ACB\u8F38\u5165\u5BF5\u7269\u59D3\u540D"),
  size: zod.nativeEnum(PetSize).optional(),
  extraServiceList: extendsPetServiceSchema.array().optional()
});
const editOrderFirstSchema = zod.object({
  petEditList: petEditSchema.array().min(1, "\u81F3\u5C11\u8981\u6709\u4E00\u96BB\u5BF5\u7269")
});
const editOrderSecondSchema = zod.object({
  serviceType: zod.nativeEnum(ServiceStatus).or(zod.literal("")).optional(),
  serviceTimePeriod: zod.number().nullable().array().length(2).optional(),
  serviceCityName: zod.string().optional(),
  serviceRegionName: zod.string().optional(),
  serviceAddress: zod.string(),
  price: zod.number().int().nonnegative("\u8ACB\u8F38\u5165\u6B63\u6574\u6578\u62160")
});
const editOrderThirdSchema = zod.object({
  note: zod.string().min(1, "\u8ACB\u586B\u5BEB\u5099\u6CE8").max(500, "\u5099\u8A3B\u4E0D\u53EF\u4EE5\u8D85\u904E 500 \u5B57")
});
const editServiceFormSchema = editOrderThirdSchema.merge(editOrderFirstSchema).merge(editOrderSecondSchema);
const useMemberPetSitterEditServiceFirst = (submitFn, submitErrorFn) => {
  const isSubmittingDisabled = shallowRef(false);
  const validationSchema = toTypedSchema(editOrderFirstSchema);
  const initialValues = {
    petEditList: []
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
  const { value: petEditList } = useField("petEditList");
  return {
    petEditList,
    formSubmit,
    isSubmitting,
    isSubmittingDisabled,
    resetForm,
    errors
  };
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "First",
  __ssrInlineRender: true,
  emits: ["update:tempSave", "update:cancel"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const memberStore = useMemberStore();
    const { currentEditDetail } = storeToRefs(memberStore);
    const {
      petEditList,
      formSubmit,
      isSubmittingDisabled,
      resetForm,
      errors
    } = useMemberPetSitterEditServiceFirst(async (values) => {
      emit("update:tempSave", values);
      return true;
    });
    const petListCount = computed({
      get: () => petEditList.value.length,
      set: (length) => {
        const currentPetList = petEditList.value;
        const currentLength = currentPetList.length;
        if (length >= currentLength) {
          let maxId = currentLength === 0 ? 0 : Math.max(...currentPetList.map((item) => item.id));
          for (let i = 0; i < length - currentLength; i++) {
            maxId++;
            petEditList.value.push({
              id: maxId,
              petType: PetType.Dog,
              name: "",
              size: PetSize.MEDIUM,
              extraServiceList: []
            });
          }
          return;
        }
        petEditList.value = petEditList.value.filter((_, index) => index < length);
      }
    });
    const petTypeOptionList = Object.entries(petNameMapping).map(([key, value]) => {
      return {
        value: +key,
        title: value
      };
    });
    const petSizeOptionList = Object.entries(petSizeDetailName).map(([key, value]) => ({
      value: +key,
      title: value
    }));
    const cancelAndReset = () => {
      resetForm();
      emit("update:cancel");
    };
    watch(currentEditDetail, (detail) => {
      if (detail === null)
        return;
      const petList = detail.petEditList;
      petEditList.value = petList;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputPetCount = _sfc_main$l;
      const _component_OrderDetailModalEditServicePet = _sfc_main$7;
      const _component_ButtonOutline = _sfc_main$k;
      const _component_ButtonPrimary = _sfc_main$f;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-y-2 px-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_InputPetCount, {
        modelValue: unref(petListCount),
        "onUpdate:modelValue": ($event) => isRef(petListCount) ? petListCount.value = $event : null,
        required: "",
        disabled: unref(isSubmittingDisabled),
        min: 1
      }, null, _parent));
      _push(`<div class="flex items-start gap-x-1"><span class="text-red-500 sm">*</span><span>\u5BF5\u7269\u8CC7\u8A0A</span></div><div class="flex flex-col gap-y-2">`);
      _push(ssrRenderComponent(_component_OrderDetailModalEditServicePet, {
        modelValue: unref(petEditList),
        "onUpdate:modelValue": ($event) => isRef(petEditList) ? petEditList.value = $event : null,
        class: "w-full",
        "pet-type-option-list": unref(petTypeOptionList),
        "pet-size-option-list": unref(petSizeOptionList),
        disabled: unref(isSubmittingDisabled)
      }, null, _parent));
      _push(`</div>`);
      if (unref(errors).petEditList) {
        _push(`<div class="text-red-500 sm">${ssrInterpolate(unref(errors).petEditList)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="sticky bottom-0"><div class="flex items-center justify-end gap-x-4 bg-white px-4 py-3 border-t border-gray-300">`);
      _push(ssrRenderComponent(_component_ButtonOutline, {
        label: "\u91CD\u8A2D\u500B\u4EBA\u8CC7\u6599\u6B04\u4F4D\u6309\u9215",
        class: "border border-orange-600 min-w-24 flex items-center justify-center rounded-xl text-orange-600",
        onClick: cancelAndReset
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u53D6\u6D88 `);
          } else {
            return [
              createTextVNode(" \u53D6\u6D88 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ButtonPrimary, {
        type: "submit",
        label: "\u8A3B\u518A\u6703\u54E1\u9001\u51FA\u6309\u9215",
        class: "min-w-24 text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u4E0B\u4E00\u6B65 `);
          } else {
            return [
              createTextVNode(" \u4E0B\u4E00\u6B65 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></form>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Order/Detail/Modal/EditService/First.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const useMemberPetSitterEditServiceSecond = (submitFn, submitErrorFn) => {
  const isSubmittingDisabled = shallowRef(false);
  const validationSchema = toTypedSchema(editOrderSecondSchema);
  const initialValues = {
    serviceType: "",
    serviceTimePeriod: [null, null],
    serviceCityName: "",
    serviceRegionName: "",
    serviceAddress: "",
    price: 0
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
  const { value: serviceTimePeriod } = useField("serviceTimePeriod");
  const { value: serviceCityName } = useField("serviceCityName");
  const { value: serviceRegionName } = useField("serviceRegionName");
  const { value: serviceAddress } = useField("serviceAddress");
  const { value: price } = useField("price");
  return {
    serviceType,
    serviceTimePeriod,
    serviceCityName,
    serviceRegionName,
    serviceAddress,
    price,
    formSubmit,
    isSubmitting,
    isSubmittingDisabled,
    resetForm,
    errors
  };
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Second",
  __ssrInlineRender: true,
  emits: ["update:tempSave", "update:cancel"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const petSitterStore = usePetSitterStore();
    const { serviceTypeOptionList } = storeToRefs(petSitterStore);
    const {
      serviceType,
      serviceTimePeriod,
      serviceCityName,
      serviceRegionName,
      serviceAddress,
      price,
      formSubmit,
      isSubmittingDisabled,
      resetForm,
      errors
    } = useMemberPetSitterEditServiceSecond(async (values) => {
      emit("update:tempSave", values);
      return true;
    });
    const districtRegionOptionList = computed(() => {
      const currentCity = cities.find((item) => item.city === serviceCityName.value);
      if (!currentCity)
        return [];
      return currentCity.districts.map((item) => {
        return {
          value: item.name,
          title: item.name
        };
      });
    });
    const cityOptionList = cities.map((item) => {
      return {
        value: item.city,
        title: item.city
      };
    });
    const cancelAndReset = () => {
      resetForm();
      emit("update:cancel");
    };
    watch(serviceCityName, () => {
      serviceRegionName.value = "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputSelectWithNoValue = _sfc_main$c;
      const _component_InputDateTimeSingleRanger = _sfc_main$1$1;
      const _component_InputCommon = _sfc_main$i;
      const _component_InputPrefix = _sfc_main$j;
      const _component_ButtonOutline = _sfc_main$k;
      const _component_ButtonPrimary = _sfc_main$f;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-y-2 px-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_InputSelectWithNoValue, {
        id: "serviceType",
        modelValue: unref(serviceType),
        "onUpdate:modelValue": ($event) => isRef(serviceType) ? serviceType.value = $event : null,
        label: "\u9810\u7D04\u670D\u52D9",
        required: "",
        class: "w-full",
        options: unref(serviceTypeOptionList),
        disabled: unref(isSubmittingDisabled),
        "error-message": unref(errors).serviceType,
        "no-value": "",
        placeholder: "\u9078\u64C7\u670D\u52D9"
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputDateTimeSingleRanger, {
        modelValue: unref(serviceTimePeriod),
        "onUpdate:modelValue": ($event) => isRef(serviceTimePeriod) ? serviceTimePeriod.value = $event : null,
        label: "\u670D\u52D9\u6642\u9593",
        placeholder: "\u670D\u52D9\u6642\u9593",
        required: "",
        disabled: unref(isSubmittingDisabled),
        "error-message": unref(errors).serviceTimePeriod,
        class: "w-full"
      }, null, _parent));
      _push(`<div class="w-full flex items-center gap-x-1"><span class="text-red-500 sm">*</span><span> \u670D\u52D9\u5730\u9EDE </span></div><div class="flex items-start gap-x-2">`);
      _push(ssrRenderComponent(_component_InputSelectWithNoValue, {
        modelValue: unref(serviceCityName),
        "onUpdate:modelValue": ($event) => isRef(serviceCityName) ? serviceCityName.value = $event : null,
        "is-show-label": false,
        placeholder: "\u9078\u64C7\u7E23\u5E02",
        label: "\u7E23\u5E02",
        required: "",
        class: "w-1/2",
        "is-full-size": "",
        options: unref(cityOptionList),
        disabled: unref(isSubmittingDisabled),
        "no-value": ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputSelectWithNoValue, {
        modelValue: unref(serviceRegionName),
        "onUpdate:modelValue": ($event) => isRef(serviceRegionName) ? serviceRegionName.value = $event : null,
        label: "\u884C\u653F\u5340",
        placeholder: "\u9078\u64C7\u57CE\u9109\u93AE\u5E02\u5340",
        "is-show-label": false,
        "is-full-size": "",
        required: "",
        class: "w-1/2",
        "no-value": "",
        options: unref(districtRegionOptionList),
        disabled: unref(isSubmittingDisabled)
      }, null, _parent));
      _push(`</div>`);
      if (unref(errors).serviceCityName || unref(errors).serviceRegionName) {
        _push(`<div class="w-full">${ssrInterpolate(unref(errors).serviceCityName || unref(errors).serviceRegionName)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_InputCommon, {
        id: "serviceAddress",
        modelValue: unref(serviceAddress),
        "onUpdate:modelValue": ($event) => isRef(serviceAddress) ? serviceAddress.value = $event : null,
        class: "w-full",
        "is-show-label": false,
        label: "\u5730\u5740",
        placeholder: "\u8ACB\u8F38\u5165\u8A73\u7D30\u5730\u5740",
        disabled: unref(isSubmittingDisabled),
        required: true,
        "error-message": unref(errors).serviceAddress
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputPrefix, {
        modelValue: unref(price),
        "onUpdate:modelValue": ($event) => isRef(price) ? price.value = $event : null,
        label: "\u4E3B\u8981\u670D\u52D9\u7E3D\u91D1\u984D",
        required: "",
        placeholder: "\u8ACB\u8F38\u5165\u91D1\u984D",
        disabled: unref(isSubmittingDisabled),
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-center bg-gray-200 border-r border-gray-300 px-4"${_scopeId}> NT$ </div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-center bg-gray-200 border-r border-gray-300 px-4" }, " NT$ ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="border-t border-gray-300 flex items-center justify-end gap-x-4 px-4 py-3">`);
      _push(ssrRenderComponent(_component_ButtonOutline, {
        label: "\u91CD\u8A2D\u500B\u4EBA\u8CC7\u6599\u6B04\u4F4D\u6309\u9215",
        class: "border border-orange-600 min-w-24 flex items-center justify-center rounded-xl text-orange-600",
        onClick: cancelAndReset
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u53D6\u6D88 `);
          } else {
            return [
              createTextVNode(" \u53D6\u6D88 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ButtonPrimary, {
        type: "submit",
        label: "\u8A3B\u518A\u6703\u54E1\u9001\u51FA\u6309\u9215",
        class: "min-w-24 text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u4E0B\u4E00\u6B65 `);
          } else {
            return [
              createTextVNode(" \u4E0B\u4E00\u6B65 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Order/Detail/Modal/EditService/Second.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const useMemberPetSitterEditServiceThird = (submitFn, submitErrorFn) => {
  const isSubmittingDisabled = shallowRef(false);
  const validationSchema = toTypedSchema(editOrderThirdSchema);
  const initialValues = {
    note: ""
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
  const { value: note } = useField("note");
  return {
    note,
    formSubmit,
    isSubmitting,
    isSubmittingDisabled,
    resetForm,
    errors
  };
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Third",
  __ssrInlineRender: true,
  props: {
    petEditListForm: {},
    serviceForm: {}
  },
  emits: ["update:step"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const memberStore = useMemberStore();
    const { handleEditOrder } = memberStore;
    const {
      note,
      formSubmit,
      isSubmittingDisabled,
      errors
    } = useMemberPetSitterEditServiceThird(async (values) => {
      if (__props.petEditListForm === null || __props.serviceForm === null) {
        return false;
      }
      const resultForm = {
        ...values,
        ...__props.petEditListForm,
        ...__props.serviceForm
      };
      const formValidator = editServiceFormSchema.safeParse(resultForm);
      if (!formValidator.success) {
        console.error(formValidator.error);
        return false;
      }
      const result = formValidator.data;
      const isSuccess = await handleEditOrder(result);
      return isSuccess;
    });
    const previousStep = () => {
      emit("update:step", 2);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputTextArea = _sfc_main$m;
      const _component_ButtonOutline = _sfc_main$k;
      const _component_ButtonPrimary = _sfc_main$f;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-y-2 px-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_InputTextArea, {
        modelValue: unref(note),
        "onUpdate:modelValue": ($event) => isRef(note) ? note.value = $event : null,
        label: "\u9810\u7D04\u5099\u6CE8",
        placeholder: "\u6B64\u5099\u8A3B\u5C07\u6703\u986F\u793A\u65BC\u9810\u7D04\u8A73\u60C5\u5167",
        required: "",
        class: "w-full",
        disabled: unref(isSubmittingDisabled),
        "show-limit": 500,
        "error-message": unref(errors).note
      }, null, _parent));
      _push(`<div class="flex items-center justify-end gap-x-4 px-4 py-3 border-t border-gray-300">`);
      _push(ssrRenderComponent(_component_ButtonOutline, {
        label: "\u91CD\u8A2D\u500B\u4EBA\u8CC7\u6599\u6B04\u4F4D\u6309\u9215",
        class: "border border-orange-600 min-w-24 flex items-center justify-center rounded-xl text-orange-600",
        onClick: previousStep
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u4E0A\u4E00\u6B65 `);
          } else {
            return [
              createTextVNode(" \u4E0A\u4E00\u6B65 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ButtonPrimary, {
        type: "submit",
        label: "\u8A3B\u518A\u6703\u54E1\u9001\u51FA\u6309\u9215",
        class: "min-w-24 text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u9001\u51FA\u7D66\u98FC\u4E3B `);
          } else {
            return [
              createTextVNode(" \u9001\u51FA\u7D66\u98FC\u4E3B ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Order/Detail/Modal/EditService/Third.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "EditService",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    ticketCode: {}
  }, {
    "modelValue": { type: Boolean, ...{ default: false } },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const memberStore = useMemberStore();
    const { resetCurrentEditDetail } = memberStore;
    const isShow = useModel(__props, "modelValue");
    const step = shallowRef(1);
    const firstFormFnished = ref(null);
    const secondFormFinished = ref(null);
    const setFirstForm = (input) => {
      firstFormFnished.value = input;
      if (firstFormFnished.value !== null) {
        setStep(2);
      }
    };
    const setSecondForm = (input) => {
      secondFormFinished.value = input;
      if (firstFormFnished.value !== null && secondFormFinished.value !== null) {
        setStep(3);
      }
    };
    const cancel = () => {
      isShow.value = false;
    };
    const setStep = (currentStep) => {
      step.value = currentStep;
    };
    watch(() => isShow, (val) => {
      if (val)
        return;
      firstFormFnished.value = null;
      secondFormFinished.value = null;
      step.value = 1;
      resetCurrentEditDetail();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = __nuxt_component_0$1;
      const _component_ButtonModalClose = __nuxt_component_1;
      const _component_OrderDetailModalEditServiceFirst = _sfc_main$6;
      const _component_OrderDetailModalEditServiceSecond = _sfc_main$5;
      const _component_OrderDetailModalEditServiceThird = _sfc_main$4;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        modelValue: isShow.value,
        "onUpdate:modelValue": ($event) => isShow.value = $event,
        fullscreen: "",
        ui: {
          container: "flex items-center justify-center w-full",
          fullscreen: "w-full h-full md:w-[40vw] max-h-[95vh]",
          base: "rounded-xl shadow-xl border border-gray-200 overflow-y-auto py-2.5 gap-y-4"
        }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between border-b border-gray-200 px-4 py-3"${_scopeId}><div class="flex flex-col items-start gap-y-1"${_scopeId}><h3 class="text-xl font-medium"${_scopeId}> \u7DE8\u8F2F\u9805\u76EE\u8207\u91D1\u984D </h3><span class="text-gray-300 sm"${_scopeId}>\u9810\u7D04\u7DE8\u865F ${ssrInterpolate(_ctx.ticketCode)}\uFF0CStep ${ssrInterpolate(unref(step))}/3</span></div>`);
            _push2(ssrRenderComponent(_component_ButtonModalClose, {
              onClick: ($event) => isShow.value = false
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_OrderDetailModalEditServiceFirst, {
              style: unref(step) === 1 ? null : { display: "none" },
              "onUpdate:tempSave": setFirstForm,
              "onUpdate:cancel": cancel
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_OrderDetailModalEditServiceSecond, {
              style: unref(step) === 2 ? null : { display: "none" },
              "onUpdate:tempSave": setSecondForm,
              "onUpdate:cancel": cancel
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_OrderDetailModalEditServiceThird, {
              style: unref(step) === 3 ? null : { display: "none" },
              "pet-edit-list-form": unref(firstFormFnished),
              "service-form": unref(secondFormFinished),
              "onUpdate:step": setStep
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between border-b border-gray-200 px-4 py-3" }, [
                createVNode("div", { class: "flex flex-col items-start gap-y-1" }, [
                  createVNode("h3", { class: "text-xl font-medium" }, " \u7DE8\u8F2F\u9805\u76EE\u8207\u91D1\u984D "),
                  createVNode("span", { class: "text-gray-300 sm" }, "\u9810\u7D04\u7DE8\u865F " + toDisplayString(_ctx.ticketCode) + "\uFF0CStep " + toDisplayString(unref(step)) + "/3", 1)
                ]),
                createVNode(_component_ButtonModalClose, {
                  onClick: ($event) => isShow.value = false
                }, null, 8, ["onClick"])
              ]),
              withDirectives(createVNode(_component_OrderDetailModalEditServiceFirst, {
                "onUpdate:tempSave": setFirstForm,
                "onUpdate:cancel": cancel
              }, null, 512), [
                [vShow, unref(step) === 1]
              ]),
              withDirectives(createVNode(_component_OrderDetailModalEditServiceSecond, {
                "onUpdate:tempSave": setSecondForm,
                "onUpdate:cancel": cancel
              }, null, 512), [
                [vShow, unref(step) === 2]
              ]),
              withDirectives(createVNode(_component_OrderDetailModalEditServiceThird, {
                "pet-edit-list-form": unref(firstFormFnished),
                "service-form": unref(secondFormFinished),
                "onUpdate:step": setStep
              }, null, 8, ["pet-edit-list-form", "service-form"]), [
                [vShow, unref(step) === 3]
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Order/Detail/Modal/EditService.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ServiceInfo",
  __ssrInlineRender: true,
  props: {
    ticketCode: {},
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
    const memberStore = useMemberStore();
    const { handleGetOrderEditDetail } = memberStore;
    const isShowEditModal = shallowRef(false);
    const backGroundImage = computed(() => {
      return `background-image: url('${__props.servicePetSitterPhotoUrl}')`;
    });
    const getDetailAndShowEditModal = async () => {
      const isSuccess = await handleGetOrderEditDetail(__props.ticketCode);
      if (isSuccess) {
        isShowEditModal.value = true;
      }
      return isSuccess;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonOutline = _sfc_main$k;
      const _component_OrderDetailModalEditService = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-start gap-y-4 px-6 py-4 border border-gray-200" }, _attrs))}><div class="w-full flex items-center justify-between"><span class="w-full text-lg font-medium">\u670D\u52D9\u8CC7\u8A0A</span>`);
      _push(ssrRenderComponent(_component_ButtonOutline, {
        label: "\u9001\u51FA\u9A57\u8B49\u78BC\u6309\u9215",
        class: "border border-orange-300 min-w-38 flex items-center justify-center rounded-xl text-orange-600",
        onClick: getDetailAndShowEditModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u7DE8\u8F2F\u9805\u76EE\u8207\u91D1\u984D `);
          } else {
            return [
              createTextVNode(" \u7DE8\u8F2F\u9805\u76EE\u8207\u91D1\u984D ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="border-b border-gray-200 w-full flex items-start gap-x-4 pb-6"><div class="aspect-square w-28 rounded-xl bg-cover bg-center bg-no-repeat" style="${ssrRenderStyle(unref(backGroundImage))}"></div><div class="flex flex-col grow items-start gap-y-2"><h4 class="text-xl font-medium">${ssrInterpolate(_ctx.petSitterName)}</h4><div class="w-full flex items-center justify-between"><span>\u670D\u52D9-${ssrInterpolate(_ctx.mainServiceName)}</span><span>NT$${ssrInterpolate(_ctx.price)}</span></div><!--[-->`);
      ssrRenderList(_ctx.serviceExtraService, (item) => {
        _push(`<div class="w-full flex items-center justify-between"><span>\u984D\u5916\u7D30\u9805-${ssrInterpolate(item.name)}</span><span>NT$${ssrInterpolate(item.price.toLocaleString())}</span></div>`);
      });
      _push(`<!--]--><div class="flex flex-col items-start text-gray-500"><span>\u670D\u52D9\u6642\u9593: ${ssrInterpolate(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))(_ctx.serviceStart, "YYYY/MM/DD HH:mm"))} \u2192 ${ssrInterpolate(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))(_ctx.serviceEnd, "YYYY/MM/DD HH:mm"))}</span><span>\u670D\u52D9\u5730\u9EDE: ${ssrInterpolate(_ctx.address)}</span><span>\u5BF5\u7269\u540D\u7A31: ${ssrInterpolate(_ctx.petName)}</span><span>\u670D\u52D9\u7D30\u9805: ${ssrInterpolate(_ctx.serviceDetail)}</span></div></div></div><div class="w-full flex items-center justify-between py-2"><span>\u7E3D\u91D1\u984D</span><span>NT$${ssrInterpolate(_ctx.totalPrice.toLocaleString())}</span></div>`);
      _push(ssrRenderComponent(_component_OrderDetailModalEditService, {
        modelValue: unref(isShowEditModal),
        "onUpdate:modelValue": ($event) => isRef(isShowEditModal) ? isShowEditModal.value = $event : null,
        "ticket-code": _ctx.ticketCode
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Order/Detail/ServiceInfo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Detail",
  __ssrInlineRender: true,
  emits: ["update:comment"],
  setup(__props) {
    const memberStore = useMemberStore();
    const { handleCancelReservation, resetCurrentDetailTicketCode, resetCurrentOrderDetail, handlePayTheBill } = memberStore;
    const { currentOrderDetail } = storeToRefs(memberStore);
    const totalPrice = computed(() => {
      const detail = currentOrderDetail.value;
      if (detail === null)
        return 0;
      const mainServicePrice = detail.mainService.price;
      if (!detail.serviceExtraService || detail.serviceExtraService.length === 0)
        return mainServicePrice;
      return mainServicePrice + detail.serviceExtraService.reduce((total, item) => total + item.price, 0);
    });
    const backToList = () => {
      resetCurrentDetailTicketCode();
      resetCurrentOrderDetail();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonPale = _sfc_main$e;
      const _component_UIcon = __nuxt_component_0;
      const _component_OrderDetailPaymentBoard = _sfc_main$8;
      const _component_AppointmentDetailReservationInfo = _sfc_main$n;
      const _component_OrderDetailServiceInfo = _sfc_main$2;
      const _component_Discussion = _sfc_main$o;
      if (unref(currentOrderDetail) !== null) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full rounded-xl bg-white flex flex-col" }, _attrs))}>`);
        _push(ssrRenderComponent(_component_ButtonPale, {
          class: "border-b border-gray-200 w-full flex items-center gap-x-2 px-4 py-6",
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
        _push(`<div class="flex flex-col gap-y-4 px-4 py-3">`);
        _push(ssrRenderComponent(_component_OrderDetailPaymentBoard, {
          status: unref(currentOrderDetail).status,
          price: unref(currentOrderDetail).mainService.price,
          "service-name": unref(currentOrderDetail).mainService.name,
          "keeper-phone": unref(currentOrderDetail).keeperphone,
          "onUpdate:payTheBill": ($event) => unref(handlePayTheBill)(unref(currentOrderDetail).ticketCode),
          "onUpdate:comment": ($event) => _ctx.$emit("update:comment", unref(currentOrderDetail).ticketCode)
        }, null, _parent));
        _push(ssrRenderComponent(_component_AppointmentDetailReservationInfo, {
          "ticket-code": unref(currentOrderDetail).ticketCode,
          "ticket-estiblish-time": unref(currentOrderDetail).ticketEstiblishTime,
          price: unref(currentOrderDetail).mainService.price,
          "keeper-name": unref(currentOrderDetail).keeperName,
          "keeper-phone": unref(currentOrderDetail).keeperphone,
          "keeper-mail": unref(currentOrderDetail).keeperEmail,
          status: unref(currentOrderDetail).status,
          "onUpdate:cancelReservation": unref(handleCancelReservation)
        }, null, _parent));
        _push(ssrRenderComponent(_component_OrderDetailServiceInfo, {
          class: "-mt-4",
          "ticket-code": unref(currentOrderDetail).ticketCode,
          "pet-sitter-name": unref(currentOrderDetail).servicePetSitterName,
          "main-service-name": unref(currentOrderDetail).mainService.name,
          "service-pet-sitter-photo-url": unref(currentOrderDetail).servicePetSitterPhotoUrl,
          price: unref(currentOrderDetail).mainService.price,
          address: unref(currentOrderDetail).serviceAddress,
          "service-start": unref(currentOrderDetail).serviceTimeStart,
          "service-end": unref(currentOrderDetail).serviceTimeEnd,
          "pet-name": unref(currentOrderDetail).petNameDescription,
          "service-detail": unref(currentOrderDetail).serviceDetail,
          "service-extra-service": unref(currentOrderDetail).serviceExtraService,
          "total-price": unref(totalPrice)
        }, null, _parent));
        _push(`<article class="${ssrRenderClass([{
          "rounded-b-xl": !unref(currentOrderDetail).discussionList || unref(currentOrderDetail).discussionList.length === 0,
          "border-b-none": unref(currentOrderDetail).discussionList && unref(currentOrderDetail).discussionList.length > 0
        }, "-mt-4 border border-gray-300"])}"><h4 class="text-lg font-medium"> \u9810\u7D04\u55AE\u5099\u6CE8 </h4><p class="whitespace-pre-line leading-relaxed">${ssrInterpolate(unref(currentOrderDetail).description)}</p></article>`);
        if (unref(currentOrderDetail).discussionList && unref(currentOrderDetail).discussionList.length > 0) {
          _push(ssrRenderComponent(_component_Discussion, {
            class: "-mt-4 w-full",
            "is-top-not-rounded": "",
            "discussion-list": unref(currentOrderDetail).discussionList
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OrderList/Detail.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const useMemberPetSitterOrderSearchForm = (submitFn, submitErrorFn) => {
  const isSubmittingDisabled = shallowRef(false);
  const validationSchema = toTypedSchema(orderSearchFormSchema);
  const initialValues = {
    ticketCode: "",
    serviceType: "",
    orderTimePeriod: [null, null]
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
  const { value: ticketCode } = useField("ticketCode");
  const { value: serviceType } = useField("serviceType");
  const { value: orderTimePeriod } = useField("orderTimePeriod");
  return {
    ticketCode,
    serviceType,
    orderTimePeriod,
    formSubmit,
    isSubmitting,
    isSubmittingDisabled,
    resetForm,
    errors
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "orderList",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g;
    const petSitterStore = usePetSitterStore();
    const { serviceTypeOptionList } = storeToRefs(petSitterStore);
    const memberStore = useMemberStore();
    const { handleSearchOrderList, handleGetOrderDetail, resetCurrentDetailTicketCode, resetCurrentOrderDetail } = memberStore;
    const { petSitterOrderList, currentDetailTicketCode } = storeToRefs(memberStore);
    const currentPage = shallowRef(1);
    const {
      ticketCode,
      serviceType,
      orderTimePeriod,
      formSubmit,
      isSubmittingDisabled,
      errors
    } = useMemberPetSitterOrderSearchForm(async (values) => {
      const isSuccess = await handleSearchOrderList(values, currentPage.value);
      return isSuccess;
    });
    const tabList = [
      {
        id: 1,
        title: "\u5168\u90E8"
      },
      {
        id: 2,
        title: (_a = orderStatusName.get(AppointmentStatus.PendingForReply)) != null ? _a : ""
      },
      {
        id: 3,
        title: (_b = orderStatusName.get(AppointmentStatus.ReservedPay)) != null ? _b : ""
      },
      {
        id: 4,
        title: (_c = orderStatusName.get(AppointmentStatus.WaitForService)) != null ? _c : ""
      },
      {
        id: 5,
        title: (_d = orderStatusName.get(AppointmentStatus.FinishedNoComment)) != null ? _d : ""
      },
      {
        id: 6,
        title: (_e = orderStatusName.get(AppointmentStatus.Finished)) != null ? _e : ""
      },
      {
        id: 7,
        title: (_f = orderStatusName.get(AppointmentStatus.Canceled)) != null ? _f : ""
      },
      {
        id: 8,
        title: (_g = orderStatusName.get(AppointmentStatus.Error)) != null ? _g : ""
      }
    ];
    const activeTab = shallowRef(1);
    watch([
      ticketCode,
      serviceType,
      orderTimePeriod
    ], async () => {
      await formSubmit();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Tabs = _sfc_main$a;
      const _component_InputSuffix = _sfc_main$b;
      const _component_InputSelectWithNoValue = _sfc_main$c;
      const _component_InputDateTimeSingleRanger = _sfc_main$1$1;
      const _component_MemberPetSitterOrderTable = _sfc_main$9;
      const _component_Pagination = _sfc_main$d;
      const _component_OrderListDetail = _sfc_main$1;
      if (unref(currentDetailTicketCode) === "") {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-xl bg-white" }, _attrs))}><div class="px-4 py-3 border-b border-gray-200"> \u63A5\u55AE\u5217\u8868 </div><div class="flex flex-col gap-y-4 px-4 py-3">`);
        _push(ssrRenderComponent(_component_Tabs, {
          modelValue: unref(activeTab),
          "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
          class: "w-full",
          "tab-list": tabList
        }, null, _parent));
        _push(`<form class="flex items-start gap-x-2">`);
        _push(ssrRenderComponent(_component_InputSuffix, {
          id: "reservationTicketCode",
          modelValue: unref(ticketCode),
          "onUpdate:modelValue": ($event) => isRef(ticketCode) ? ticketCode.value = $event : null,
          class: "w-1/3",
          "is-show-label": false,
          label: "\u8F38\u5165\u9810\u7D04\u7DE8\u865F",
          placeholder: "\u8F38\u5165\u9810\u7D04\u7DE8\u865F",
          disabled: unref(isSubmittingDisabled),
          required: true,
          "error-message": unref(errors).ticketCode
        }, null, _parent));
        _push(ssrRenderComponent(_component_InputSelectWithNoValue, {
          id: "serviceType",
          modelValue: unref(serviceType),
          "onUpdate:modelValue": ($event) => isRef(serviceType) ? serviceType.value = $event : null,
          "is-show-label": false,
          label: "\u9078\u64C7\u670D\u52D9",
          required: "",
          "is-full-size": "",
          options: unref(serviceTypeOptionList),
          disabled: unref(isSubmittingDisabled),
          "error-message": unref(errors).serviceType,
          "no-value": "",
          placeholder: "\u9078\u64C7\u670D\u52D9",
          class: "w-1/3"
        }, null, _parent));
        _push(ssrRenderComponent(_component_InputDateTimeSingleRanger, {
          id: "reservationTimeSelector",
          modelValue: unref(orderTimePeriod),
          "onUpdate:modelValue": ($event) => isRef(orderTimePeriod) ? orderTimePeriod.value = $event : null,
          "is-show-label": false,
          label: "\u9810\u7D04\u6642\u9593",
          placeholder: "\u9810\u7D04\u6642\u9593",
          disabled: unref(isSubmittingDisabled),
          "error-message": unref(errors).orderTimePeriod,
          "is-full-size": "",
          class: "w-1/3"
        }, null, _parent));
        _push(`</form><div class="py-3">`);
        _push(ssrRenderComponent(_component_MemberPetSitterOrderTable, {
          class: "w-full",
          "order-list": unref(petSitterOrderList),
          "onUpdate:showDetail": unref(handleGetOrderDetail)
        }, null, _parent));
        _push(`</div><div class="flex items-center justify-center">`);
        _push(ssrRenderComponent(_component_Pagination, {
          modelValue: unref(currentPage),
          "onUpdate:modelValue": ($event) => isRef(currentPage) ? currentPage.value = $event : null,
          max: 5,
          "page-count": 10,
          total: 100
        }, null, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(ssrRenderComponent(_component_OrderListDetail, _attrs, null, _parent));
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/member/petSitter/orderList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=orderList-CT0I8N8c.mjs.map

import { _ as _sfc_main$3 } from './Outline-DOrBdQBb.mjs';
import __nuxt_component_0 from './Icon-B6ODn5Cd.mjs';
import { _ as _sfc_main$4 } from './NuxtImg-Ce9a8LGV.mjs';
import { _ as _sfc_main$8 } from './ServiceIcon-B7HfU_kG.mjs';
import { _ as _sfc_main$9 } from './Pale-B861WQUB.mjs';
import { useSSRContext, computed, defineComponent, shallowRef, unref, mergeProps, withCtx, createVNode, createTextVNode, isRef, useModel, watch, withModifiers, openBlock, createBlock, Fragment, renderList, withDirectives, vShow } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { P as PetType, e as petServiceSchema, b as PetSize, S as ServiceStatus, I as IconNameStatus, h as petSizeDetailName, g as petNameMapping } from './petSitter.type-BjvpgkZ2.mjs';
import { _ as _sfc_main$5 } from './Prefix-CQaUPUPN.mjs';
import { _ as _sfc_main$6 } from './TextArea-BzPNiDUE.mjs';
import { _ as _sfc_main$7 } from './Primary-DO2BBNU0.mjs';
import __nuxt_component_0$1 from './Modal-CUWDe7J7.mjs';
import { _ as __nuxt_component_1 } from './ModalClose-DniwJvVv.mjs';
import { _ as _sfc_main$a } from './SelectWithNoValue-EvF5oYkr.mjs';
import { _ as _sfc_main$b } from './Select-Jj7n4e63.mjs';
import { _ as _sfc_main$c } from './Common-DHSSImN5.mjs';
import { c as cities } from './region.type-CQhlObjv.mjs';
import { u as usePetSitterStore } from './usePetSitterStore-BLaObs6U.mjs';
import { storeToRefs } from 'pinia';
import { i as definePrivateState, b as useThrottleFn } from './server.mjs';
import { u as useCustomError } from './useCustomError-C6r27JZ9.mjs';
import { u as useForm, a as useField, t as toTypedSchema } from './vee-validate-zod-CmN8nNdS.mjs';
import * as zod from 'zod';
import { u as useMemberStore } from './useMemberStore-uW6LN4tp.mjs';
import { u as useAuthStore } from './useAuthStore-6LI8GoiG.mjs';
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
import 'tailwind-merge';
import './composables-VAV01sHq.mjs';
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
import './SelectMenu-JtM-AXfn.mjs';
import './Avatar-DmdANAXU.mjs';
import './combobox-BRR1qDhj.mjs';
import '@tanstack/vue-virtual';
import './form-DsUILy5F.mjs';
import './use-resolve-button-type-DOOP2SMg.mjs';
import './calculate-active-index-Dujs8zvP.mjs';
import './use-text-value-CfKvyAwN.mjs';
import './index-BWxBLvh9.mjs';
import './index-B0sILfIw.mjs';
import './usePopper-C-zM4LTl.mjs';
import './useFormGroup-RtfcSx_K.mjs';
import './useButtonGroup-CKD41UhK.mjs';
import './signUp.type-C4a4H3kg.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ServiceEditCard",
  __ssrInlineRender: true,
  props: {
    iconName: { default: () => IconNameStatus.Sitter },
    name: {},
    description: { default: "" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PetSitterServiceIcon = _sfc_main$8;
      const _component_ButtonPale = _sfc_main$9;
      const _component_UIcon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between rounded-xl border border-gray-300 px-3 py-2" }, _attrs))}><div class="flex items-center justify-center gap-x-4">`);
      _push(ssrRenderComponent(_component_PetSitterServiceIcon, {
        active: "",
        class: "aspect-square h-full text-4xl",
        "icon-name": _ctx.iconName
      }, null, _parent));
      _push(`<div class="flex flex-col items-start gap-y-2"><p>${ssrInterpolate(_ctx.name)}</p><p class="text-gray-400">${ssrInterpolate(_ctx.description)}</p></div></div><div class="flex items-center justify-center gap-x-4">`);
      _push(ssrRenderComponent(_component_ButtonPale, {
        label: `\u522A\u9664${_ctx.name}\u670D\u52D9\u9805\u76EE\u6309\u9215`,
        class: "flex items-center justify-center gap-x-2 text-orange-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u522A\u9664</span>`);
            _push2(ssrRenderComponent(_component_UIcon, { name: "i-heroicons:trash" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", null, "\u522A\u9664"),
              createVNode(_component_UIcon, { name: "i-heroicons:trash" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ButtonPale, {
        label: `\u7DE8\u8F2F${_ctx.name}\u670D\u52D9\u9805\u76EE\u6309\u9215`,
        class: "flex items-center justify-center gap-x-2 text-orange-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u7DE8\u8F2F</span>`);
            _push2(ssrRenderComponent(_component_UIcon, { name: "i-pepicons-pop:pen" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", null, "\u7DE8\u8F2F"),
              createVNode(_component_UIcon, { name: "i-pepicons-pop:pen" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Member/PetSitter/ServiceEditCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const useMemberSettingApi = () => {
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const getMainServiceList = async () => {
    await wait(500);
    return [
      {
        id: 1,
        name: "\u5230\u5E9C\u8913\u6BCD",
        price: 520,
        iconName: IconNameStatus.Sitter,
        description: "\u5230\u5E9C\u63D0\u4F9B\u7167\u8B77"
      }
      // {
      //   id: 2,
      //   name: '到府美容',
      //   price: 520,
      //   iconName: IconNameStatus.Beauty,
      //   description: '到府提供提供美容服務'
      // }
    ];
  };
  const addPetSitterService = async (request) => {
    console.log(request);
    await wait(500);
    return true;
  };
  return {
    getMainServiceList,
    addPetSitterService
  };
};
const useMemberSettingStore = definePrivateState("useMemberSettingStore", () => {
  return {
    mainServiceList: []
  };
}, (privateState) => {
  const { customTypeError, fatalError } = useCustomError();
  const { getMainServiceList, addPetSitterService } = useMemberSettingApi();
  const handleGetMainServiceList = async () => {
    try {
      const response = await getMainServiceList();
      setMainServiceList(response);
      return true;
    } catch (error) {
      if (customTypeError(error))
        return false;
      if (fatalError(error))
        return false;
      return false;
    }
  };
  const setMainServiceList = (serviceList) => {
    privateState.mainServiceList = serviceList;
  };
  const handleAddPetSitterService = async (request) => {
    try {
      const isSuccess = await addPetSitterService(request);
      return isSuccess;
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
    mainServiceList: computed(() => privateState.mainServiceList),
    // methods::
    handleGetMainServiceList,
    handleAddPetSitterService
  };
});
const petServiceSettingSchema = zod.object({
  id: zod.number().int().nonnegative("\u8ACB\u8F38\u5165\u6B63\u6574\u6578\u62160"),
  petType: zod.nativeEnum(PetType).or(zod.literal(-1)),
  extraServiceList: petServiceSchema.array().optional(),
  petSize: zod.nativeEnum(PetSize).optional()
});
const addServiceFormschema = zod.object({
  serviceType: zod.nativeEnum(ServiceStatus).or(zod.literal("")).optional(),
  serviceCityName: zod.number().or(zod.literal("")).optional(),
  serviceRegionName: zod.number().or(zod.literal("")).optional(),
  price: zod.number().int().nonnegative("\u8ACB\u8F38\u5165\u6B63\u6574\u6578\u62160"),
  petServiceSettingList: petServiceSettingSchema.array()
});
const useMemberPetSitterAddService = (submitFn, submitErrorFn) => {
  const isSubmittingDisabled = shallowRef(false);
  const validationSchema = toTypedSchema(addServiceFormschema);
  const initialValues = {
    serviceType: "",
    serviceCityName: "",
    serviceRegionName: "",
    price: 0,
    petServiceSettingList: [{
      id: 1,
      petType: PetType.Dog,
      extraServiceList: [],
      petSize: PetSize.MEDIUM
    }]
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
  const { value: serviceCityName } = useField("serviceCityName");
  const { value: serviceRegionName } = useField("serviceRegionName");
  const { value: price } = useField("price");
  const { value: petServiceSettingList } = useField("petServiceSettingList");
  const restPetTypeList = computed(() => {
    const petTypeList = petServiceSettingList.value.map((item) => item.petType).filter((item) => item !== -1);
    return Object.entries(petNameMapping).map(([key, _]) => +key).filter((item) => !petTypeList.includes(item));
  });
  const removeExtraServiceItem = (id, extraId) => {
    const pickedPetSetting = petServiceSettingList.value.find((item) => item.id === id);
    if (!pickedPetSetting)
      return;
    if (!pickedPetSetting.extraServiceList)
      return;
    const index = pickedPetSetting.extraServiceList.findIndex((item) => item.id === extraId);
    if (index === -1)
      return;
    pickedPetSetting.extraServiceList.splice(index, 1);
  };
  const addExtraServiceItem = (id) => {
    const pickedPetEdit = petServiceSettingList.value.find((item) => item.id === id);
    if (!pickedPetEdit)
      return;
    const defaultValue = {
      id: 1,
      name: "",
      price: 0
    };
    if (!pickedPetEdit.extraServiceList) {
      pickedPetEdit.extraServiceList = [defaultValue];
      return;
    }
    const maxId = Math.max(...pickedPetEdit.extraServiceList.map((item) => item.id)) + 1;
    pickedPetEdit.extraServiceList.push({
      id: maxId,
      name: "",
      price: 0
    });
  };
  const addMainServiceItem = () => {
    const maxId = Math.max(...petServiceSettingList.value.map((item) => item.id));
    const restList = restPetTypeList.value;
    console.group("%c test", "color: yellow;");
    console.log(restList);
    console.groupEnd();
    if (restList.length === 0)
      return;
    const newValue = {
      id: maxId + 1,
      petType: restList[0],
      extraServiceList: []
    };
    if (restList[0] === PetType.Dog) {
      newValue.petSize = PetSize.MEDIUM;
    }
    petServiceSettingList.value.push(newValue);
  };
  const getPetTypeOptionList = (currentPetType) => {
    const petTypeList = petServiceSettingList.value.map((item) => item.petType).filter((item) => item !== -1 && item !== currentPetType);
    return Object.entries(petNameMapping).map(([key, value]) => ({
      value: +key,
      title: value
    })).filter((item) => !petTypeList.includes(item.value));
  };
  return {
    serviceType,
    serviceCityName,
    serviceRegionName,
    price,
    petServiceSettingList,
    formSubmit,
    isSubmitting,
    isSubmittingDisabled,
    resetForm,
    errors,
    removeExtraServiceItem,
    addExtraServiceItem,
    addMainServiceItem,
    getPetTypeOptionList
  };
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AddService",
  __ssrInlineRender: true,
  props: {
    "modelValue": { type: Boolean, ...{ default: false } },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const isShow = useModel(__props, "modelValue");
    const petSitterStore = usePetSitterStore();
    const { serviceTypeOptionList } = storeToRefs(petSitterStore);
    const memberSettingStore = useMemberSettingStore();
    const { handleAddPetSitterService } = memberSettingStore;
    const {
      serviceType,
      serviceCityName,
      serviceRegionName,
      price,
      petServiceSettingList,
      formSubmit,
      isSubmittingDisabled,
      resetForm,
      errors,
      removeExtraServiceItem,
      addExtraServiceItem,
      addMainServiceItem,
      getPetTypeOptionList
    } = useMemberPetSitterAddService(async (values) => {
      const isSuccess = await handleAddPetSitterService(values);
      return isSuccess;
    });
    const cityOptionList = cities.map((item) => {
      return {
        value: item.city,
        title: item.city
      };
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
    const dogSizeOptionList = Object.entries(petSizeDetailName).map(([key, value]) => {
      return {
        value: +key,
        title: value
      };
    });
    const closeModal = () => {
      isShow.value = false;
      resetForm();
    };
    watch(isShow, (val) => {
      if (val)
        return;
      resetForm();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = __nuxt_component_0$1;
      const _component_ButtonModalClose = __nuxt_component_1;
      const _component_InputSelectWithNoValue = _sfc_main$a;
      const _component_InputPrefix = _sfc_main$5;
      const _component_InputSelect = _sfc_main$b;
      const _component_InputCommon = _sfc_main$c;
      const _component_ButtonPale = _sfc_main$9;
      const _component_UIcon = __nuxt_component_0;
      const _component_ButtonOutline = _sfc_main$3;
      const _component_ButtonPrimary = _sfc_main$7;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        modelValue: isShow.value,
        "onUpdate:modelValue": ($event) => isShow.value = $event,
        fullscreen: "",
        ui: {
          container: "flex items-center justify-center w-full",
          fullscreen: "w-full h-full md:w-[40vw] md:max-h-[95vh]",
          base: "rounded-xl shadow-xl border-solid border-[1px] border-gray-200 overflow-y-auto py-[2.5] gap-y-4"
        }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="flex items-center justify-between px-4 py-3 border-b-solid border-b-[1px] border-b-gray-300"${_scopeId}><h3${_scopeId}>\u65B0\u589E\u670D\u52D9</h3>`);
            _push2(ssrRenderComponent(_component_ButtonModalClose, { onClick: closeModal }, null, _parent2, _scopeId));
            _push2(`</div><form class="flex flex-col gap-y-4 px-4 py-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_InputSelectWithNoValue, {
              id: "serviceType",
              modelValue: unref(serviceType),
              "onUpdate:modelValue": ($event) => isRef(serviceType) ? serviceType.value = $event : null,
              label: "\u9810\u7D04\u670D\u52D9",
              required: "",
              "is-full-size": "",
              options: unref(serviceTypeOptionList),
              disabled: unref(isSubmittingDisabled),
              "error-message": unref(errors).serviceType,
              "no-value": "",
              placeholder: "\u9078\u64C7\u670D\u52D9",
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex items-start gap-x-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_InputSelectWithNoValue, {
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
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputSelectWithNoValue, {
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
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_InputPrefix, {
              modelValue: unref(price),
              "onUpdate:modelValue": ($event) => isRef(price) ? price.value = $event : null,
              label: "\u91D1\u984D",
              "is-show-label": false,
              placeholder: "\u91D1\u984D",
              disabled: unref(isSubmittingDisabled),
              class: "w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-center bg-gray-200 border-r border-gray-300 px-2"${_scopeId2}> NT$ </div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-center bg-gray-200 border-r border-gray-300 px-2" }, " NT$ ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(unref(petServiceSettingList), (item) => {
              var _a;
              _push2(`<div class="flex flex-col gap-y-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_InputSelectWithNoValue, {
                modelValue: item.petType,
                "onUpdate:modelValue": ($event) => item.petType = $event,
                label: "\u5BF5\u7269\u7A2E\u985E",
                required: "",
                options: unref(getPetTypeOptionList)(item.petType),
                disabled: unref(isSubmittingDisabled),
                "is-full-size": "",
                class: "w-full",
                "no-value": -1,
                placeholder: "\u8ACB\u9078\u64C7\u5BF5\u7269\u7A2E\u985E"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_InputSelect, {
                style: item.petType === unref(PetType).Dog ? null : { display: "none" },
                modelValue: item.petSize,
                "onUpdate:modelValue": ($event) => item.petSize = $event,
                label: "\u5BF5\u7269\u5C3A\u5BF8",
                "is-show-label": false,
                placeholder: "\u8ACB\u9078\u64C7\u5BF5\u7269\u5C3A\u5BF8",
                required: "",
                "is-full-size": "",
                class: "w-full",
                options: unref(dogSizeOptionList),
                disabled: unref(isSubmittingDisabled)
              }, null, _parent2, _scopeId));
              _push2(`<h4${_scopeId}>\u984D\u5916\u670D\u52D9\u7D30\u9805</h4><!--[-->`);
              ssrRenderList((_a = item.extraServiceList) != null ? _a : [], (extraItem) => {
                _push2(`<div class="flex items-center gap-x-4"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_InputCommon, {
                  id: `${item.id}_extra_${extraItem.id}`,
                  modelValue: extraItem.name,
                  "onUpdate:modelValue": ($event) => extraItem.name = $event,
                  "is-show-label": false,
                  label: "\u7D30\u9805\u540D\u7A31",
                  placeholder: "\u8ACB\u8F38\u5165\u7D30\u9805\u540D\u7A31",
                  disabled: unref(isSubmittingDisabled),
                  required: "",
                  class: "flex-grow"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_InputPrefix, {
                  label: "\u670D\u52D9\u7D30\u9805\u91D1\u984D",
                  "is-show-label": false,
                  placeholder: "\u91D1\u984D",
                  disabled: unref(isSubmittingDisabled)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex items-center justify-center bg-gray-200 border-r border-gray-300 px-2"${_scopeId2}> NT$ </div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex items-center justify-center bg-gray-200 border-r border-gray-300 px-2" }, " NT$ ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_ButtonPale, {
                  label: `\u522A\u9664${extraItem.name}\u670D\u52D9\u9805\u76EE\u6309\u9215`,
                  class: "flex items-center justify-center gap-x-2 text-orange-600",
                  onClick: ($event) => unref(removeExtraServiceItem)(item.id, extraItem.id)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UIcon, { name: "i-heroicons:trash" }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UIcon, { name: "i-heroicons:trash" })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]-->`);
              _push2(ssrRenderComponent(_component_ButtonOutline, {
                label: "\u65B0\u589E\u984D\u5916\u670D\u52D9\u7D30\u9805\u6309\u9215",
                class: "w-full flex items-center justify-center gap-x-2 rounded-xl text-orange-600",
                onClick: ($event) => unref(addExtraServiceItem)(item.id)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>\u984D\u5916\u670D\u52D9\u7D30\u9805</span>`);
                    _push3(ssrRenderComponent(_component_UIcon, {
                      class: "text-orange-600",
                      name: "i-heroicons-plus"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("span", null, "\u984D\u5916\u670D\u52D9\u7D30\u9805"),
                      createVNode(_component_UIcon, {
                        class: "text-orange-600",
                        name: "i-heroicons-plus"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--><div class="sticky bottom-0"${_scopeId}><div class="flex items-center justify-end gap-x-4 bg-white px-4 py-3 border-t border-gray-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ButtonOutline, {
              label: "\u91CD\u8A2D\u500B\u4EBA\u8CC7\u6599\u6B04\u4F4D\u6309\u9215",
              class: "min-w-24 flex items-center justify-center rounded-xl text-orange-600 border-solid border-[1px] border-orange-600",
              onClick: closeModal
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u53D6\u6D88 `);
                } else {
                  return [
                    createTextVNode(" \u53D6\u6D88 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ButtonOutline, {
              label: "\u65B0\u589E\u984D\u5916\u670D\u52D9\u7D30\u9805\u6309\u9215",
              class: "items-self-start flex items-center justify-center gap-x-2 rounded-xl text-orange-600",
              onClick: unref(addMainServiceItem)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u65B0\u589E\u670D\u52D9\u5BF5\u7269\u7A2E\u985E</span>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    class: "text-orange-600",
                    name: "i-heroicons-plus"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("span", null, "\u65B0\u589E\u670D\u52D9\u5BF5\u7269\u7A2E\u985E"),
                    createVNode(_component_UIcon, {
                      class: "text-orange-600",
                      name: "i-heroicons-plus"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ButtonPrimary, {
              type: "submit",
              label: "\u8A3B\u518A\u6703\u54E1\u9001\u51FA\u6309\u9215",
              class: "min-w-24 text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u65B0\u589E `);
                } else {
                  return [
                    createTextVNode(" \u65B0\u589E ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></form></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "flex items-center justify-between px-4 py-3 border-b-solid border-b-[1px] border-b-gray-300" }, [
                  createVNode("h3", null, "\u65B0\u589E\u670D\u52D9"),
                  createVNode(_component_ButtonModalClose, {
                    onClick: withModifiers(closeModal, ["prevent"])
                  })
                ]),
                createVNode("form", {
                  class: "flex flex-col gap-y-4 px-4 py-3",
                  onSubmit: withModifiers(unref(formSubmit), ["prevent"])
                }, [
                  createVNode(_component_InputSelectWithNoValue, {
                    id: "serviceType",
                    modelValue: unref(serviceType),
                    "onUpdate:modelValue": ($event) => isRef(serviceType) ? serviceType.value = $event : null,
                    label: "\u9810\u7D04\u670D\u52D9",
                    required: "",
                    "is-full-size": "",
                    options: unref(serviceTypeOptionList),
                    disabled: unref(isSubmittingDisabled),
                    "error-message": unref(errors).serviceType,
                    "no-value": "",
                    placeholder: "\u9078\u64C7\u670D\u52D9",
                    class: "w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "disabled", "error-message"]),
                  createVNode("div", { class: "flex items-start gap-x-2" }, [
                    createVNode(_component_InputSelectWithNoValue, {
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
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "disabled"]),
                    createVNode(_component_InputSelectWithNoValue, {
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
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "disabled"])
                  ]),
                  createVNode(_component_InputPrefix, {
                    modelValue: unref(price),
                    "onUpdate:modelValue": ($event) => isRef(price) ? price.value = $event : null,
                    label: "\u91D1\u984D",
                    "is-show-label": false,
                    placeholder: "\u91D1\u984D",
                    disabled: unref(isSubmittingDisabled),
                    class: "w-full"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center justify-center bg-gray-200 border-r border-gray-300 px-2" }, " NT$ ")
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(petServiceSettingList), (item) => {
                    var _a;
                    return openBlock(), createBlock("div", {
                      key: item.id,
                      class: "flex flex-col gap-y-4"
                    }, [
                      createVNode(_component_InputSelectWithNoValue, {
                        modelValue: item.petType,
                        "onUpdate:modelValue": ($event) => item.petType = $event,
                        label: "\u5BF5\u7269\u7A2E\u985E",
                        required: "",
                        options: unref(getPetTypeOptionList)(item.petType),
                        disabled: unref(isSubmittingDisabled),
                        "is-full-size": "",
                        class: "w-full",
                        "no-value": -1,
                        placeholder: "\u8ACB\u9078\u64C7\u5BF5\u7269\u7A2E\u985E"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "disabled"]),
                      withDirectives(createVNode(_component_InputSelect, {
                        modelValue: item.petSize,
                        "onUpdate:modelValue": ($event) => item.petSize = $event,
                        label: "\u5BF5\u7269\u5C3A\u5BF8",
                        "is-show-label": false,
                        placeholder: "\u8ACB\u9078\u64C7\u5BF5\u7269\u5C3A\u5BF8",
                        required: "",
                        "is-full-size": "",
                        class: "w-full",
                        options: unref(dogSizeOptionList),
                        disabled: unref(isSubmittingDisabled)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "disabled"]), [
                        [vShow, item.petType === unref(PetType).Dog]
                      ]),
                      createVNode("h4", null, "\u984D\u5916\u670D\u52D9\u7D30\u9805"),
                      (openBlock(true), createBlock(Fragment, null, renderList((_a = item.extraServiceList) != null ? _a : [], (extraItem) => {
                        return openBlock(), createBlock("div", {
                          key: extraItem.id,
                          class: "flex items-center gap-x-4"
                        }, [
                          createVNode(_component_InputCommon, {
                            id: `${item.id}_extra_${extraItem.id}`,
                            modelValue: extraItem.name,
                            "onUpdate:modelValue": ($event) => extraItem.name = $event,
                            "is-show-label": false,
                            label: "\u7D30\u9805\u540D\u7A31",
                            placeholder: "\u8ACB\u8F38\u5165\u7D30\u9805\u540D\u7A31",
                            disabled: unref(isSubmittingDisabled),
                            required: "",
                            class: "flex-grow"
                          }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "disabled"]),
                          createVNode(_component_InputPrefix, {
                            label: "\u670D\u52D9\u7D30\u9805\u91D1\u984D",
                            "is-show-label": false,
                            placeholder: "\u91D1\u984D",
                            disabled: unref(isSubmittingDisabled)
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center justify-center bg-gray-200 border-r border-gray-300 px-2" }, " NT$ ")
                            ]),
                            _: 1
                          }, 8, ["disabled"]),
                          createVNode(_component_ButtonPale, {
                            label: `\u522A\u9664${extraItem.name}\u670D\u52D9\u9805\u76EE\u6309\u9215`,
                            class: "flex items-center justify-center gap-x-2 text-orange-600",
                            onClick: withModifiers(($event) => unref(removeExtraServiceItem)(item.id, extraItem.id), ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UIcon, { name: "i-heroicons:trash" })
                            ]),
                            _: 2
                          }, 1032, ["label", "onClick"])
                        ]);
                      }), 128)),
                      createVNode(_component_ButtonOutline, {
                        label: "\u65B0\u589E\u984D\u5916\u670D\u52D9\u7D30\u9805\u6309\u9215",
                        class: "w-full flex items-center justify-center gap-x-2 rounded-xl text-orange-600",
                        onClick: withModifiers(($event) => unref(addExtraServiceItem)(item.id), ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "\u984D\u5916\u670D\u52D9\u7D30\u9805"),
                          createVNode(_component_UIcon, {
                            class: "text-orange-600",
                            name: "i-heroicons-plus"
                          })
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]);
                  }), 128)),
                  createVNode("div", { class: "sticky bottom-0" }, [
                    createVNode("div", { class: "flex items-center justify-end gap-x-4 bg-white px-4 py-3 border-t border-gray-300" }, [
                      createVNode(_component_ButtonOutline, {
                        label: "\u91CD\u8A2D\u500B\u4EBA\u8CC7\u6599\u6B04\u4F4D\u6309\u9215",
                        class: "min-w-24 flex items-center justify-center rounded-xl text-orange-600 border-solid border-[1px] border-orange-600",
                        onClick: withModifiers(closeModal, ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u53D6\u6D88 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ButtonOutline, {
                        label: "\u65B0\u589E\u984D\u5916\u670D\u52D9\u7D30\u9805\u6309\u9215",
                        class: "items-self-start flex items-center justify-center gap-x-2 rounded-xl text-orange-600",
                        onClick: withModifiers(unref(addMainServiceItem), ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "\u65B0\u589E\u670D\u52D9\u5BF5\u7269\u7A2E\u985E"),
                          createVNode(_component_UIcon, {
                            class: "text-orange-600",
                            name: "i-heroicons-plus"
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_ButtonPrimary, {
                        type: "submit",
                        label: "\u8A3B\u518A\u6703\u54E1\u9001\u51FA\u6309\u9215",
                        class: "min-w-24 text-white"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u65B0\u589E ")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ], 40, ["onSubmit"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Member/PetSitter/Modal/AddService.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const questionAnswerSchema = zod.object({
  question: zod.string().min(1, "\u8ACB\u8F38\u5165\u554F\u984C"),
  answer: zod.string().min(1, "\u8ACB\u8F38\u5165\u7B54\u6848")
});
const petSitterQAFormSchema = zod.object({
  questionList: questionAnswerSchema.array()
});
const useMemberPetSitterQAForm = (submitFn, submitErrorFn) => {
  const isSubmittingDisabled = shallowRef(false);
  const validationSchema = toTypedSchema(petSitterQAFormSchema);
  const initialValues = {
    questionList: []
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
  const { value: questionList } = useField("questionList");
  const addNewQA = () => {
    questionList.value.push({
      question: "",
      answer: ""
    });
  };
  return {
    questionList,
    formSubmit,
    isSubmitting,
    isSubmittingDisabled,
    resetForm,
    errors,
    addNewQA
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "settings",
  __ssrInlineRender: true,
  setup(__props) {
    const memberStore = useMemberStore();
    const { handleUpdatePetSitterQA } = memberStore;
    const authStore = useAuthStore();
    const { fakeToken } = storeToRefs(authStore);
    const memberSettingStore = useMemberSettingStore();
    const { mainServiceList } = storeToRefs(memberSettingStore);
    const isShowAddServiceModal = shallowRef(false);
    const {
      questionList,
      formSubmit,
      isSubmittingDisabled,
      resetForm,
      errors,
      addNewQA
    } = useMemberPetSitterQAForm(async (values) => {
      const isSuccess = await handleUpdatePetSitterQA(values);
      return isSuccess;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonOutline = _sfc_main$3;
      const _component_UIcon = __nuxt_component_0;
      const _component_NuxtImg = _sfc_main$4;
      const _component_MemberPetSitterServiceEditCard = _sfc_main$2;
      const _component_InputPrefix = _sfc_main$5;
      const _component_InputTextArea = _sfc_main$6;
      const _component_ButtonPrimary = _sfc_main$7;
      const _component_MemberPetSitterModalAddService = _sfc_main$1;
      if (unref(fakeToken) !== null) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col w-full items-center gap-y-4" }, _attrs))}><section class="w-full rounded-xl bg-white"><div class="border-b border-gray-300 flex items-center justify-between px-6 py-4"><p>\u9078\u64C7\u670D\u52D9</p>`);
        _push(ssrRenderComponent(_component_ButtonOutline, {
          label: "\u65B0\u589E\u670D\u52D9\u6309\u9215",
          class: "flex items-center justify-center gap-x-2 rounded-xl text-orange-600",
          onClick: ($event) => isShowAddServiceModal.value = true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>\u65B0\u589E\u670D\u52D9</span>`);
              _push2(ssrRenderComponent(_component_UIcon, { name: "i-heroicons-plus" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", null, "\u65B0\u589E\u670D\u52D9"),
                createVNode(_component_UIcon, { name: "i-heroicons-plus" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="px-4 py-3">`);
        if (unref(mainServiceList).length === 0) {
          _push(`<div class="w-full flex flex-col items-center justify-center gap-y-2">`);
          _push(ssrRenderComponent(_component_NuxtImg, { src: "pet_images/status/no-service.svg" }, null, _parent));
          _push(`<span class="text-[#FB976E]">\u5C1A\u672A\u63D0\u4F9B\u670D\u52D9</span></div>`);
        } else {
          _push(`<div class="flex flex-col items-center gap-y-4"><!--[-->`);
          ssrRenderList(unref(mainServiceList), (item) => {
            _push(ssrRenderComponent(_component_MemberPetSitterServiceEditCard, mergeProps({
              key: item.id,
              class: "w-full",
              ref_for: true
            }, item), null, _parent));
          });
          _push(`<!--]--></div>`);
        }
        _push(`</div></section><form class="w-full rounded-xl bg-white"><div class="border-b border-gray-300 px-6 py-4 flex items-center gap-x-2"><span>\u95DC\u65BC ${ssrInterpolate(unref(fakeToken).userName)}</span><span class="text-sm text-gray-300">\u53EF\u586B\u5BEB\u98FC\u4E3B\u7684\u5E38\u898B\u554F\u984C</span></div><div class="flex flex-col items-center px-4 py-3"><!--[-->`);
        ssrRenderList(unref(questionList), (item) => {
          _push(`<div class="flex flex-col mb-4 w-full gap-y-4">`);
          _push(ssrRenderComponent(_component_InputPrefix, {
            modelValue: item.question,
            "onUpdate:modelValue": ($event) => item.question = $event,
            label: "\u8F38\u5165\u984C\u76EE",
            "is-show-label": false,
            placeholder: "\u8F38\u5165\u984C\u76EE",
            disabled: unref(isSubmittingDisabled),
            class: "w-full flex-grow"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex items-center justify-center bg-gray-200 border-r border-gray-300 px-4"${_scopeId}> Q: </div>`);
              } else {
                return [
                  createVNode("div", { class: "flex items-center justify-center bg-gray-200 border-r border-gray-300 px-4" }, " Q: ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(_component_InputTextArea, {
            modelValue: item.answer,
            "onUpdate:modelValue": ($event) => item.answer = $event,
            "is-show-label": false,
            label: "\u8F38\u5165\u89E3\u7B54",
            placeholder: "\u8F38\u5165\u89E3\u7B54",
            class: "w-full",
            disabled: unref(isSubmittingDisabled)
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]-->`);
        if (unref(errors).questionList) {
          _push(`<div class="mb-4 text-sm text-red-500">${ssrInterpolate(unref(errors).questionList)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_ButtonOutline, {
          label: "\u65B0\u589E\u984D\u5916QA\u6309\u9215",
          class: "border border-orange-600 w-full flex items-center justify-center gap-x-2 rounded-xl text-orange-600",
          onClick: unref(addNewQA)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>\u65B0\u589E\u984D\u5916QA</span>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                class: "text-xl",
                name: "i-heroicons-plus"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", null, "\u65B0\u589E\u984D\u5916QA"),
                createVNode(_component_UIcon, {
                  class: "text-xl",
                  name: "i-heroicons-plus"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="flex items-center justify-start gap-x-2 px-4 py-3">`);
        _push(ssrRenderComponent(_component_ButtonOutline, {
          label: "\u91CD\u8A2D\u8913\u6BCDQA\u6B04\u4F4D\u6309\u9215",
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
          type: "submit",
          class: "min-w-24 text-white",
          label: "\u9001\u51FA\u4E26\u5132\u5B58\u8913\u6BCDQA\u6309\u9215"
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
        _push(ssrRenderComponent(_component_MemberPetSitterModalAddService, {
          modelValue: unref(isShowAddServiceModal),
          "onUpdate:modelValue": ($event) => isRef(isShowAddServiceModal) ? isShowAddServiceModal.value = $event : null
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/member/petSitter/settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=settings-Tx_FxBY7.mjs.map

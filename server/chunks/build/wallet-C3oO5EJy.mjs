import __nuxt_component_0 from './Icon-B6ODn5Cd.mjs';
import { _ as _sfc_main$2 } from './Primary-DO2BBNU0.mjs';
import { _ as _sfc_main$3 } from './Tabs-Cb0V9DXg.mjs';
import { a as _sfc_main$1$1, _ as _sfc_main$4 } from './Pagination-DS0SqUIM.mjs';
import { useSSRContext, defineComponent, shallowRef, watch, mergeProps, withCtx, createTextVNode, unref, isRef, computed } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { A as AppointmentStatus, u as useMemberStore, w as walletName } from './useMemberStore-uW6LN4tp.mjs';
import { u as useDateFormat, b as useThrottleFn } from './server.mjs';
import * as zod from 'zod';
import { p as paginationSearchSchema } from './petSitter.type-BjvpgkZ2.mjs';
import { storeToRefs } from 'pinia';
import { u as useForm, a as useField, t as toTypedSchema } from './vee-validate-zod-CmN8nNdS.mjs';
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
import './Pagination-V5D3FNQV.mjs';
import './Button-B_jr3BZp.mjs';
import './Link-DZ2bKZug.mjs';
import './nuxt-link-BMiRqRVI.mjs';
import './link-D5-3RomB.mjs';
import './tooltip-CpVvyQRR.mjs';
import './useButtonGroup-CKD41UhK.mjs';
import './button-Bz5rwL6o.mjs';
import './useCustomError-C6r27JZ9.mjs';
import './composables-VAV01sHq.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Row",
  __ssrInlineRender: true,
  props: {
    ticketCode: {},
    walletStatus: {},
    transactionMoney: {},
    transactionTime: {}
  },
  setup(__props) {
    const currentWalletName = computed(() => {
      return walletName[__props.walletStatus];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between px-4 py-3" }, _attrs))}><div class="flex flex-col items-start gap-y-2"><div>\u9810\u7D04${ssrInterpolate(_ctx.ticketCode)}</div><div class="text-gray-400 text-sm">${ssrInterpolate(unref(currentWalletName))}</div></div><div class="flex flex-col items-end gap-y-2"><div>${ssrInterpolate(_ctx.transactionMoney)}</div><div class="text-gray-400">${ssrInterpolate(unref(useDateFormat)(_ctx.transactionTime, "YYYY/MM/DD"))}</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Wallet/Row.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var WalletSearchStatus = /* @__PURE__ */ ((WalletSearchStatus2) => {
  WalletSearchStatus2[WalletSearchStatus2["All"] = 0] = "All";
  WalletSearchStatus2[WalletSearchStatus2["Discount"] = 1] = "Discount";
  WalletSearchStatus2[WalletSearchStatus2["RollBack"] = 2] = "RollBack";
  return WalletSearchStatus2;
})(WalletSearchStatus || {});
const finiancialDistributionSchema = zod.object({
  amount: zod.number(),
  distributTime: zod.number()
});
zod.object({
  unit: zod.literal("NT"),
  totalBalance: zod.number(),
  accountCode: zod.string().optional(),
  distributingFinance: finiancialDistributionSchema,
  distributedFinance: finiancialDistributionSchema
});
zod.object({
  ticketCode: zod.string(),
  orderStatus: zod.nativeEnum(AppointmentStatus),
  allocatedAmount: zod.number(),
  allocatedTime: zod.number()
});
const walletSearchFormSchema = zod.object({
  walletSearchType: zod.nativeEnum(WalletSearchStatus),
  timePeriod: zod.number().nullable().array().length(2)
});
walletSearchFormSchema.merge(paginationSearchSchema);
const useMemberWalletForm = (submitFn, submitErrorFn) => {
  const isSubmittingDisabled = shallowRef(false);
  const validationSchema = toTypedSchema(walletSearchFormSchema);
  const initialValues = {
    walletSearchType: WalletSearchStatus.All,
    timePeriod: [null, null]
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
  const { value: walletSearchType } = useField("walletSearchType");
  const { value: timePeriod } = useField("timePeriod");
  const warningList = [
    "\u5B89\u5168\u4FDD\u8B49\uFF1A\u8ACB\u78BA\u4FDD\u60A8\u7684\u5E33\u6236\u548C\u5BC6\u78BC\u5B89\u5168\uFF0C\u4E0D\u8981\u5206\u4EAB\u7D66\u4ED6\u4EBA\uFF0C\u4E26\u5B9A\u671F\u4FEE\u6539\u5BC6\u78BC\u4EE5\u4FDD\u8B77\u60A8\u7684\u5E33\u6236\u5B89\u5168\u3002",
    "\u8CC7\u91D1\u7BA1\u7406\uFF1A\u8ACB\u59A5\u5584\u7BA1\u7406\u60A8\u7684\u8CC7\u91D1\uFF0C\u5305\u62EC\u5B9A\u671F\u6AA2\u67E5\u5E33\u6236\u9918\u984D\u3001\u4EA4\u6613\u8A18\u9304\u548C\u4EA4\u6613\u8B66\u793A\uFF0C\u4EE5\u78BA\u4FDD\u8CC7\u91D1\u7684\u5B89\u5168\u548C\u6B63\u78BA\u6027\u3002",
    "\u98A8\u96AA\u8B66\u793A\uFF1A\u8ACB\u6CE8\u610F\u91D1\u878D\u4EA4\u6613\u5B58\u5728\u98A8\u96AA\uFF0C\u8ACB\u8B39\u614E\u9078\u64C7\u4EA4\u6613\u5C0D\u8C61\u548C\u4EA4\u6613\u65B9\u5F0F\uFF0C\u907F\u514D\u9677\u5165\u8A50\u9A19\u6216\u8CA1\u52D9\u640D\u5931\u3002",
    "\u76DC\u8CCA\u9632\u7BC4\uFF1A\u8ACB\u907F\u514D\u9EDE\u64CA\u4E0D\u660E\u90F5\u4EF6\u6216\u9023\u7D50\uFF0C\u4E0D\u8981\u4F7F\u7528\u516C\u5171\u7121\u7DDA\u7DB2\u8DEF\u9032\u884C\u91D1\u878D\u4EA4\u6613\uFF0C\u4EE5\u964D\u4F4E\u5E33\u6236\u88AB\u76DC\u8CCA\u7684\u98A8\u96AA\u3002",
    "\u5BA2\u6236\u6B0A\u76CA\uFF1A\u5982\u9047\u5230\u4EFB\u4F55\u554F\u984C\u6216\u7591\u616E\uFF0C\u8ACB\u53CA\u6642\u806F\u7E6B\u5BA2\u670D\u90E8\u9580\uFF0C\u7372\u5F97\u5C08\u696D\u7684\u5E6B\u52A9\u548C\u652F\u6301\u3002",
    "\u6CD5\u5F8B\u5408\u898F\uFF1A\u8ACB\u9075\u5B88\u76F8\u95DC\u6CD5\u5F8B\u548C\u898F\u5B9A\uFF0C\u4E0D\u8981\u5F9E\u4E8B\u975E\u6CD5\u6216\u9055\u6CD5\u6D3B\u52D5\uFF0C\u4EE5\u7DAD\u8B77\u60A8\u7684\u5408\u6CD5\u6B0A\u76CA\u548C\u8CA1\u52D9\u5B89\u5168\u3002"
  ];
  const tabList = [
    { id: WalletSearchStatus.All, title: "\u5168\u90E8" },
    { id: WalletSearchStatus.Discount, title: "\u6298\u62B5" },
    { id: WalletSearchStatus.RollBack, title: "\u9000\u56DE" }
  ];
  return {
    warningList,
    tabList,
    walletSearchType,
    timePeriod,
    formSubmit,
    isSubmitting,
    isSubmittingDisabled,
    resetForm,
    errors
  };
};
const balance = 3e3;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "wallet",
  __ssrInlineRender: true,
  setup(__props) {
    const currentPage = shallowRef(1);
    const memberStore = useMemberStore();
    const { handleGetWalletList } = memberStore;
    const { walletList } = storeToRefs(memberStore);
    const {
      warningList,
      tabList,
      walletSearchType,
      timePeriod,
      formSubmit,
      isSubmittingDisabled,
      errors
    } = useMemberWalletForm(async (values) => {
      const isSuccess = await handleGetWalletList(values, currentPage.value);
      return isSuccess;
    });
    watch([
      walletSearchType,
      timePeriod
    ], () => {
      formSubmit();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_0;
      const _component_ButtonPrimary = _sfc_main$2;
      const _component_Tabs = _sfc_main$3;
      const _component_InputDateTimeSingleRanger = _sfc_main$1$1;
      const _component_WalletRow = _sfc_main$1;
      const _component_Pagination = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-y-4" }, _attrs))}><div class="w-full flex items-center justify-between bg-white px-4 py-6"><div class="flex items-center justify-center gap-x-2 text-gray-400">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-mingcute:wallet-5-line",
        class: "mr-2"
      }, null, _parent));
      _push(` \u53EF\u4F7F\u7528\u9918\u984D <span class="font-bold text-black text-2xl">${ssrInterpolate(balance)}</span><span class="self-end text-black text-sm pb-0.5"> TWD </span></div>`);
      _push(ssrRenderComponent(_component_ButtonPrimary, {
        label: "\u5132\u503C\u6309\u9215",
        class: "text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u5132\u503C `);
          } else {
            return [
              createTextVNode(" \u5132\u503C ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-full rounded-xl bg-white"><div class="w-full px-4 py-6 border-b border-solid border-gray-200"> \u9322\u5305\u7D00\u9304 </div><div class="px-4 py-3"><form class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_Tabs, {
        modelValue: unref(walletSearchType),
        "onUpdate:modelValue": ($event) => isRef(walletSearchType) ? walletSearchType.value = $event : null,
        "tab-list": unref(tabList)
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputDateTimeSingleRanger, {
        id: "reservationTime",
        modelValue: unref(timePeriod),
        "onUpdate:modelValue": ($event) => isRef(timePeriod) ? timePeriod.value = $event : null,
        "is-show-label": false,
        label: "\u9810\u7D04\u6642\u9593",
        placeholder: "\u9810\u7D04\u6642\u9593",
        disabled: unref(isSubmittingDisabled),
        "error-message": unref(errors).timePeriod,
        "is-full-size": "",
        class: "w-1/3"
      }, null, _parent));
      _push(`</form><!--[-->`);
      ssrRenderList(unref(walletList), (item, index) => {
        _push(ssrRenderComponent(_component_WalletRow, mergeProps({
          key: item.ticketCode,
          class: { "bg-gray-100": index % 2 === 1 },
          ref_for: true
        }, item), null, _parent));
      });
      _push(`<!--]--><div class="mt-4 w-full flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_Pagination, {
        modelValue: unref(currentPage),
        "onUpdate:modelValue": ($event) => isRef(currentPage) ? currentPage.value = $event : null,
        max: 5,
        "page-count": 10,
        total: 100
      }, null, _parent));
      _push(`</div></div></div><div class="mt-8 text-gray-400"><ol class="list-decimal"><!--[-->`);
      ssrRenderList(unref(warningList), (item) => {
        _push(`<li>${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ol></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/member/wallet.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=wallet-C3oO5EJy.mjs.map

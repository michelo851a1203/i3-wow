import { useSSRContext, defineComponent, mergeModels, useId, shallowRef, useModel, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderDynamicModel, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import * as zod from 'zod';
import { A as AppointmentStatus } from './useMemberStore-uW6LN4tp.mjs';
import { S as ServiceStatus, p as paginationSearchSchema, e as petServiceSchema, f as discussionSchema } from './petSitter.type-BjvpgkZ2.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Suffix",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    label: {},
    id: { default: () => useId("$xuxJhXEDdo") },
    isShowLabel: { type: Boolean, default: true },
    errorMessage: { default: "" },
    placeholder: { default: "" },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    type: { default: "text" }
  }, {
    "modelValue": { default: "" },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const errorID = shallowRef("");
    const modelValue = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><label${ssrRenderAttr("for", _ctx.id)} class="flex flex-col items-start gap-y-2"><span style="${ssrRenderStyle(_ctx.isShowLabel ? null : { display: "none" })}" class="flex items-center justify-center gap-x-1">`);
      if (_ctx.required) {
        _push(`<span class="text-red-500 text-xs"> * </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${ssrInterpolate(_ctx.label)}</span></span><input${ssrRenderAttr("id", _ctx.id)}${ssrRenderDynamicModel(_ctx.type, modelValue.value, null)}${ssrRenderAttr("type", _ctx.type)}${ssrRenderAttr("placeholder", _ctx.placeholder)} class="border border-gray-300 w-full rounded-lg px-3 py-2 outline-orange-600"${ssrRenderAttr("aria-describedby", _ctx.errorMessage ? unref(errorID) : void 0)}${ssrIncludeBooleanAttr(_ctx.disabled) ? " disabled" : ""}></label><span style="${ssrRenderStyle(_ctx.errorMessage ? null : { display: "none" })}"${ssrRenderAttr("id", unref(errorID))} class="text-sm text-red-500">${ssrInterpolate(_ctx.errorMessage)}</span></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/Suffix.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const orderSearchFormSchema = zod.object({
  ticketCode: zod.string().optional(),
  serviceType: zod.nativeEnum(ServiceStatus).or(zod.literal("")).optional(),
  orderTimePeriod: zod.number().nullable().array().length(2).optional()
});
orderSearchFormSchema.merge(paginationSearchSchema);
const petSitterIncomeSearchFormSchema = zod.object({
  ticketCode: zod.string().optional(),
  orderTimePeriod: zod.number().nullable().array().length(2).optional()
});
petSitterIncomeSearchFormSchema.merge(paginationSearchSchema);
zod.object({
  status: zod.nativeEnum(AppointmentStatus),
  ticketCode: zod.string(),
  ticketEstiblishTime: zod.number(),
  mainService: petServiceSchema,
  keeperName: zod.string(),
  keeperphone: zod.string().regex(/^09\d{2}[-\s]?\d{3}[-\s]?\d{3}$/, "\u8ACB\u8F38\u5165\u624B\u6A5F\u865F\u78BC\u683C\u5F0F"),
  keeperEmail: zod.string().email("\u8ACB\u8F38\u5165 email \u683C\u5F0F").min(1, "\u8ACB\u8F38\u5165 email"),
  servicePetSitterPhotoUrl: zod.string().url(),
  servicePetSitterName: zod.string(),
  serviceTimeStart: zod.number().int("\u8ACB\u8F38\u5165\u6574\u6578"),
  serviceTimeEnd: zod.number().int("\u8ACB\u8F38\u5165\u6574\u6578"),
  serviceAddress: zod.string(),
  petNameDescription: zod.string(),
  serviceDetail: zod.string(),
  // 顯示服務細項，不收費的
  serviceExtraService: petServiceSchema.array().optional(),
  // 額外服務要收費的，顯示在上面
  description: zod.string().optional(),
  discussionList: discussionSchema.array().optional()
});

export { _sfc_main as _, orderSearchFormSchema as o, petSitterIncomeSearchFormSchema as p };
//# sourceMappingURL=memberPetSitterOrder.type-CiRsJV1G.mjs.map

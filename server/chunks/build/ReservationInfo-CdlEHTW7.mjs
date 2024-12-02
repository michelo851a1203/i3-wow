import { _ as _sfc_main$1 } from './Pale-B861WQUB.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { A as AppointmentStatus } from './useMemberStore-uW6LN4tp.mjs';
import { u as useDateFormat } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ReservationInfo",
  __ssrInlineRender: true,
  props: {
    ticketCode: {},
    ticketEstiblishTime: {},
    price: {},
    keeperName: {},
    keeperPhone: {},
    keeperMail: {},
    status: {}
  },
  emits: ["update:cancelReservation"],
  setup(__props) {
    const isAllowCancelReservation = computed(() => {
      return __props.status === AppointmentStatus.PendingForReply || __props.status === AppointmentStatus.ReservedPay;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonPale = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border border-solid border-gray-200 flex items-center rounded-t-xl border-b-1" }, _attrs))}><div class="w-1/2 flex flex-col border-r border-solid border-gray-200 items-start justify-around gap-y-3 px-6 py-4"><span class="text-lg font-medium">\u9810\u7D04\u8CC7\u8A0A</span><span><span class="text-gray-400">\u9810\u7D04\u7DE8\u865F</span> ${ssrInterpolate(_ctx.ticketCode)}</span><span><span class="text-gray-400">\u6210\u7ACB\u6642\u9593</span> ${ssrInterpolate(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))(_ctx.ticketEstiblishTime, "YYYY-MM-DD HH:mm"))}</span><span><span class="text-gray-400">\u9810\u7D04\u91D1\u984D</span> NT$${ssrInterpolate(_ctx.price.toLocaleString())}</span>`);
      if (unref(isAllowCancelReservation)) {
        _push(ssrRenderComponent(_component_ButtonPale, {
          class: "text-[#B77F2C] underline",
          label: "\u53D6\u6D88\u9810\u7D04\u6309\u9215",
          onClick: ($event) => _ctx.$emit("update:cancelReservation", _ctx.ticketCode)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u53D6\u6D88\u9810\u7D04 `);
            } else {
              return [
                createTextVNode(" \u53D6\u6D88\u9810\u7D04 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="w-1/2 flex flex-col items-start justify-around gap-y-3 px-6 py-4"><span class="text-lg font-medium">\u98FC\u4E3B\u8CC7\u8A0A</span><span><span class="text-gray-400">\u98FC\u4E3B\u59D3\u540D</span> ${ssrInterpolate(_ctx.keeperName)}</span><span><span class="text-gray-400">\u806F\u7D61\u96FB\u8A71</span> ${ssrInterpolate(_ctx.keeperPhone)}</span><span><span class="text-gray-400">\u96FB\u5B50\u90F5\u4EF6</span> ${ssrInterpolate(_ctx.keeperMail)}</span></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Appointment/Detail/ReservationInfo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ReservationInfo-CdlEHTW7.mjs.map

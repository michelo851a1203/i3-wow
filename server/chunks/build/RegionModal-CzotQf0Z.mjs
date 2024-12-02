import __nuxt_component_0 from './Modal-CUWDe7J7.mjs';
import __nuxt_component_0$1 from './Icon-B6ODn5Cd.mjs';
import { useSSRContext, defineComponent, mergeModels, useModel, shallowRef, computed, mergeProps, withCtx, unref, createVNode, withDirectives, isRef, vModelText, withModifiers, vShow, openBlock, createBlock, Fragment, renderList, vModelCheckbox, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrInterpolate } from 'vue/server-renderer';
import { u as useCustomUtils } from './useCustomUtils-B8GVkC05.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RegionModal",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    cities: { default: () => [] }
  }, {
    "isShow": { type: Boolean, ...{ default: false } },
    "isShowModifiers": {},
    "modelValue": { default: [] },
    "modelModifiers": {}
  }),
  emits: ["update:isShow", "update:modelValue"],
  setup(__props) {
    const { isInputElement } = useCustomUtils();
    const isShow = useModel(__props, "isShow");
    const modelValue = useModel(__props, "modelValue");
    const searchDistrict = shallowRef("");
    const filterCities = computed(() => {
      const currentSearch = searchDistrict.value.replace("\u53F0", "\u81FA");
      if (currentSearch === "") {
        return __props.cities;
      }
      return __props.cities.map((city) => {
        const newDistrict = city.districts.filter((district) => new RegExp(currentSearch, "i").test(district.fullName));
        return {
          code: city.code,
          city: city.city,
          districts: newDistrict
        };
      }).filter((item) => item.districts.length > 0);
    });
    const cityChecked = (e) => {
      const input = e.target;
      if (!isInputElement(input))
        return;
      if (!input.value)
        return;
      const city = __props.cities.find((item) => item.code === +input.value);
      if (!city)
        return;
      city.districts.forEach((district) => {
        const index = modelValue.value.findIndex((item) => item === district.code && item !== city.code);
        if (index === -1)
          return;
        modelValue.value.splice(index, 1);
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = __nuxt_component_0;
      const _component_UIcon = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        modelValue: isShow.value,
        "onUpdate:modelValue": ($event) => isShow.value = $event,
        overlay: false,
        ui: {
          container: "flex items-center justify-center w-full",
          base: "rounded-xl shadow-xl border-solid border border-gray-200 overflow-y-auto px-4 py-3 gap-y-4",
          fullscreen: "w-full h-full md:w-[75vw] md:h-[90vh]",
          body: {
            base: "grow"
          }
        },
        fullscreen: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full flex items-center justify-between"${_scopeId}><div class="flex items-center gap-x-2"${_scopeId}><label class="border border-orange-400 flex items-center justify-center gap-x-2 rounded-md bg-orange-50 px-2 py-1" for="distruct_search"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              class: "text-orange-600",
              name: "i-mynaui:search"
            }, null, _parent2, _scopeId));
            _push2(`<input id="distruct_search"${ssrRenderAttr("value", unref(searchDistrict))} placeholder="\u641C\u5C0B\u5340\u57DF" class="placeholder:text-orange-400 bg-orange-50 outline-none" type="text"${_scopeId}></label><button style="${ssrRenderStyle(modelValue.value.length > 0 ? null : { display: "none" })}" class="text-orange-600 hover:text-white border border-orange-600 hover:bg-orange-600 rounded-md px-2 py-1"${_scopeId}> \u6E05\u9664\u6240\u6709\u9805\u76EE </button><button style="${ssrRenderStyle(modelValue.value.length > 0 ? null : { display: "none" })}" class="border border-orange-600 rounded-md bg-orange-600 px-2 py-1 text-white"${_scopeId}> \u78BA\u5B9A </button></div><button${_scopeId}> \xD7 </button></div><!--[-->`);
            ssrRenderList(unref(filterCities), (city) => {
              _push2(`<fieldset class="${ssrRenderClass([{
                "bg-orange-50": modelValue.value.includes(city.code)
              }, "flex flex-wrap items-center justify-start gap-2 rounded-md px-4 py-2 border border-orange-300"])}"${_scopeId}><legend class="px-4"${_scopeId}><label${ssrRenderAttr("for", `city_${city.code}`)} class="flex items-center gap-x-2"${_scopeId}><input${ssrRenderAttr("id", `city_${city.code}`)}${ssrIncludeBooleanAttr(Array.isArray(modelValue.value) ? ssrLooseContain(modelValue.value, city.code) : modelValue.value) ? " checked" : ""} type="checkbox"${ssrRenderAttr("value", city.code)}${_scopeId}><span class="cursor-pointer select-none"${_scopeId}>${ssrInterpolate(city.city)}</span></label></legend><!--[-->`);
              ssrRenderList(city.districts.filter((item) => item.code !== city.code), (district) => {
                _push2(`<div class="text-black"${_scopeId}><label${ssrRenderAttr("for", `district_${city.code}_${district.code}`)} class="flex items-center justify-center gap-x-2"${_scopeId}><input style="${ssrRenderStyle(!modelValue.value.includes(city.code) ? null : { display: "none" })}"${ssrRenderAttr("id", `district_${city.code}_${district.code}`)}${ssrIncludeBooleanAttr(Array.isArray(modelValue.value) ? ssrLooseContain(modelValue.value, district.code) : modelValue.value) ? " checked" : ""}${ssrRenderAttr("name", `district_${city.code}`)} type="checkbox"${ssrRenderAttr("value", district.code)}${_scopeId}><span class="cursor-pointer select-none"${_scopeId}>${ssrInterpolate(district.name)}</span></label></div>`);
              });
              _push2(`<!--]--></fieldset>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode("div", { class: "w-full flex items-center justify-between" }, [
                createVNode("div", { class: "flex items-center gap-x-2" }, [
                  createVNode("label", {
                    class: "border border-orange-400 flex items-center justify-center gap-x-2 rounded-md bg-orange-50 px-2 py-1",
                    for: "distruct_search"
                  }, [
                    createVNode(_component_UIcon, {
                      class: "text-orange-600",
                      name: "i-mynaui:search"
                    }),
                    withDirectives(createVNode("input", {
                      id: "distruct_search",
                      "onUpdate:modelValue": ($event) => isRef(searchDistrict) ? searchDistrict.value = $event : null,
                      placeholder: "\u641C\u5C0B\u5340\u57DF",
                      class: "placeholder:text-orange-400 bg-orange-50 outline-none",
                      type: "text"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(searchDistrict)]
                    ])
                  ]),
                  withDirectives(createVNode("button", {
                    class: "text-orange-600 hover:text-white border border-orange-600 hover:bg-orange-600 rounded-md px-2 py-1",
                    onClick: withModifiers(($event) => modelValue.value = [], ["prevent"])
                  }, " \u6E05\u9664\u6240\u6709\u9805\u76EE ", 8, ["onClick"]), [
                    [vShow, modelValue.value.length > 0]
                  ]),
                  withDirectives(createVNode("button", {
                    class: "border border-orange-600 rounded-md bg-orange-600 px-2 py-1 text-white",
                    onClick: withModifiers(($event) => isShow.value = false, ["prevent"])
                  }, " \u78BA\u5B9A ", 8, ["onClick"]), [
                    [vShow, modelValue.value.length > 0]
                  ])
                ]),
                createVNode("button", {
                  onClick: ($event) => isShow.value = false
                }, " \xD7 ", 8, ["onClick"])
              ]),
              (openBlock(true), createBlock(Fragment, null, renderList(unref(filterCities), (city) => {
                return openBlock(), createBlock("fieldset", {
                  key: city.code,
                  class: ["flex flex-wrap items-center justify-start gap-2 rounded-md px-4 py-2 border border-orange-300", {
                    "bg-orange-50": modelValue.value.includes(city.code)
                  }]
                }, [
                  createVNode("legend", { class: "px-4" }, [
                    createVNode("label", {
                      for: `city_${city.code}`,
                      class: "flex items-center gap-x-2"
                    }, [
                      withDirectives(createVNode("input", {
                        id: `city_${city.code}`,
                        "onUpdate:modelValue": ($event) => modelValue.value = $event,
                        type: "checkbox",
                        value: city.code,
                        onChange: cityChecked
                      }, null, 40, ["id", "onUpdate:modelValue", "value"]), [
                        [vModelCheckbox, modelValue.value]
                      ]),
                      createVNode("span", { class: "cursor-pointer select-none" }, toDisplayString(city.city), 1)
                    ], 8, ["for"])
                  ]),
                  (openBlock(true), createBlock(Fragment, null, renderList(city.districts.filter((item) => item.code !== city.code), (district) => {
                    return openBlock(), createBlock("div", {
                      key: district.code,
                      class: "text-black"
                    }, [
                      createVNode("label", {
                        for: `district_${city.code}_${district.code}`,
                        class: "flex items-center justify-center gap-x-2"
                      }, [
                        withDirectives(createVNode("input", {
                          id: `district_${city.code}_${district.code}`,
                          "onUpdate:modelValue": ($event) => modelValue.value = $event,
                          name: `district_${city.code}`,
                          type: "checkbox",
                          value: district.code
                        }, null, 8, ["id", "onUpdate:modelValue", "name", "value"]), [
                          [vShow, !modelValue.value.includes(city.code)],
                          [vModelCheckbox, modelValue.value]
                        ]),
                        createVNode("span", { class: "cursor-pointer select-none" }, toDisplayString(district.name), 1)
                      ], 8, ["for"])
                    ]);
                  }), 128))
                ], 2);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/Select/RegionModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=RegionModal-CzotQf0Z.mjs.map

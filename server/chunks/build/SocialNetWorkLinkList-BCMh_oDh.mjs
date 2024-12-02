import __nuxt_component_0 from './Icon-B6ODn5Cd.mjs';
import { a as _sfc_main$1$1 } from './MultipleUploader-BbIg_aij.mjs';
import { useSSRContext, defineComponent, mergeModels, useId, useModel, shallowRef, computed, watch, mergeProps, unref, isRef, withCtx, createVNode, withModifiers } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseEqual } from 'vue/server-renderer';
import { H as useFileDialog } from './server.mjs';
import { u as useCustomUtils } from './useCustomUtils-B8GVkC05.mjs';
import { _ as _sfc_main$3 } from './Select-Jj7n4e63.mjs';
import { _ as _sfc_main$4 } from './Common-DHSSImN5.mjs';
import { _ as _sfc_main$5 } from './Pale-B861WQUB.mjs';
import { _ as _sfc_main$6 } from './Outline-DOrBdQBb.mjs';
import { S as SocialNetwork } from './signUp.type-C4a4H3kg.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Uploader",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    label: {},
    id: { default: () => useId("$D4n0bMvYrs") },
    isShowLabel: { type: Boolean, default: true },
    errorMessage: { default: "" },
    placeholder: { default: "" },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    acceptFileType: { default: "image" }
  }, {
    "modelValue": { default: null },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const file = useModel(__props, "modelValue");
    const decodeFileString = shallowRef("");
    const isShowFunctionBoard = shallowRef(false);
    const isShowPreview = shallowRef(false);
    const previewImageUrl = shallowRef("");
    const accept = computed(() => {
      if (__props.acceptFileType === "image") {
        return "image/*";
      }
      if (__props.acceptFileType === "video") {
        return "video/*";
      }
      return void 0;
    });
    const backGroundImage = computed(() => `background-image: url('${decodeFileString.value}')`);
    const { open, reset, onChange } = useFileDialog({
      accept: accept.value,
      multiple: false
    });
    const { getFileFromFileList, isFileImage, isString } = useCustomUtils();
    const getPreviewImage = async (imageFile) => {
      if (imageFile === null)
        return "";
      const reader = new FileReader();
      return new Promise((resolve) => {
        reader.onload = () => {
          const result = reader.result;
          if (!isString(result)) {
            resolve("");
            return;
          }
          resolve(result);
        };
        reader.readAsDataURL(imageFile);
      });
    };
    const setCurrentFile = (fileList) => {
      if (__props.acceptFileType !== "image")
        return;
      const imageFile = getFileFromFileList(fileList);
      if (imageFile === null)
        return;
      if (!isFileImage(imageFile))
        return;
      file.value = imageFile;
    };
    const previewImage = () => {
      previewImageUrl.value = decodeFileString.value;
      isShowPreview.value = true;
    };
    const closePreview = () => {
      previewImageUrl.value = "";
    };
    const resetFile = () => {
      reset();
      file.value = null;
    };
    onChange(async (fileList) => {
      if (__props.acceptFileType === "image") {
        setCurrentFile(fileList);
      }
    });
    computed(() => {
      return {
        mouseover: () => isShowFunctionBoard.value = true,
        mouseleave: () => isShowFunctionBoard.value = false
      };
    });
    watch(file, async (currentFile) => {
      if (currentFile === null) {
        decodeFileString.value = "";
        return;
      }
      decodeFileString.value = await getPreviewImage(currentFile);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_0;
      const _component_InputUploaderPreviewModal = _sfc_main$1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><div class="mb-2">`);
      if (_ctx.isShowLabel) {
        _push(`<span class="flex items-center justify-start gap-x-1">`);
        if (_ctx.required) {
          _push(`<span class="text-red-500 text-xs"> * </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span>${ssrInterpolate(_ctx.label)}</span></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(decodeFileString) === "") {
        _push(`<button${ssrRenderAttr("id", _ctx.id)} type="button" class="border-dashed border-[1.5px] border-gray-300 flex flex-col aspect-[3/2] bg-gray-100 w-full cursor-pointer items-center justify-center gap-y-2 rounded-lg">`);
        _push(ssrRenderComponent(_component_UIcon, {
          class: "font-bold",
          name: "i-heroicons-plus"
        }, null, _parent));
        _push(`<span class="text-gray-500">${ssrInterpolate(_ctx.placeholder)}</span></button>`);
      } else {
        _push(`<div class="border border-gray-300 p-6 relative flex items-center justify-center rounded-xl"><div class="bg-contain bg-center bg-no-repeat aspect-[3/2] border border-gray-300 w-full bg-gray-100" style="${ssrRenderStyle(unref(backGroundImage))}"></div><div style="${ssrRenderStyle(unref(isShowFunctionBoard) ? null : { display: "none" })}" class="aspect-[3/2] border border-gray-300 left-6 top-6 w-[calc(100%-0.75rem)] text-white absolute flex items-center justify-center gap-x-3 bg-black/50">`);
        _push(ssrRenderComponent(_component_UIcon, {
          class: "cursor-pointer text-white text-3xl",
          name: "i-eva:eye-outline",
          role: "button",
          onClick: previewImage
        }, null, _parent));
        _push(ssrRenderComponent(_component_UIcon, {
          class: "cursor-pointer text-white text-2xl",
          name: "i-lucide:trash",
          role: "button",
          onClick: resetFile
        }, null, _parent));
        _push(`</div></div>`);
      }
      _push(`<span style="${ssrRenderStyle(_ctx.errorMessage !== "" ? null : { display: "none" })}" class="text-sm text-red-500">${ssrInterpolate(_ctx.errorMessage)}</span>`);
      _push(ssrRenderComponent(_component_InputUploaderPreviewModal, {
        modelValue: unref(isShowPreview),
        "onUpdate:modelValue": ($event) => isRef(isShowPreview) ? isShowPreview.value = $event : null,
        "image-url": unref(previewImageUrl),
        onClose: closePreview
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/Uploader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RadioListVertical",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    label: {},
    id: { default: () => useId("$yhikAbQEXi") },
    isShowLabel: { type: Boolean, default: true },
    errorMessage: { default: "" },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    optionList: {},
    showInputWhenValueIs: {},
    placeholder: { default: "" }
  }, {
    "modelValue": { type: [String, Number, Boolean] },
    "modelModifiers": {},
    "input": { default: "" },
    "inputModifiers": {}
  }),
  emits: ["update:modelValue", "update:input"],
  setup(__props) {
    const errorID = useId("$mcRk1jlSG4");
    const modelValue = useModel(__props, "modelValue");
    const inputModalValue = useModel(__props, "input");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-col items-start gap-y-2"><span style="${ssrRenderStyle(_ctx.isShowLabel ? null : { display: "none" })}" class="flex items-center justify-center gap-x-1">`);
      if (_ctx.required) {
        _push(`<span class="text-red-500 text-xs"> * </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${ssrInterpolate(_ctx.label)}</span></span><div class="flex flex-col w-full items-start gap-y-1"><!--[-->`);
      ssrRenderList(_ctx.optionList, (item) => {
        _push(`<label${ssrRenderAttr("for", `${_ctx.id}_${item.value}`)} class="w-full flex items-center gap-x-2"><input${ssrRenderAttr("id", `${_ctx.id}_${item.value}`)}${ssrIncludeBooleanAttr(ssrLooseEqual(modelValue.value, item.value)) ? " checked" : ""} type="radio"${ssrRenderAttr("value", item.value)}${ssrIncludeBooleanAttr(_ctx.disabled) ? " disabled" : ""}><span>${ssrInterpolate(item.title)}</span><input style="${ssrRenderStyle(modelValue.value === _ctx.showInputWhenValueIs && item.value === _ctx.showInputWhenValueIs ? null : { display: "none" })}"${ssrRenderAttr("id", _ctx.id)}${ssrRenderAttr("value", inputModalValue.value)} type="text"${ssrRenderAttr("placeholder", _ctx.placeholder)} class="border border-gray-200 flex-grow rounded-lg px-3 py-2 outline-orange-600"${ssrIncludeBooleanAttr(_ctx.disabled) ? " disabled" : ""}></label>`);
      });
      _push(`<!--]--></div></div><span style="${ssrRenderStyle(_ctx.errorMessage ? null : { display: "none" })}"${ssrRenderAttr("id", unref(errorID))} class="text-sm text-red-500">${ssrInterpolate(_ctx.errorMessage)}</span></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/RadioListVertical.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SocialNetWorkLinkList",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    disabled: { type: Boolean, default: false },
    errorMessage: { default: "" }
  }, {
    "modelValue": { default: [] },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const modelValue = useModel(__props, "modelValue");
    const addNewLink = () => {
      const newLink = {
        name: SocialNetwork.NONE,
        link: ""
      };
      modelValue.value.push(newLink);
    };
    const removeLink = (index) => {
      modelValue.value.splice(index, 1);
    };
    const options = Object.entries(SocialNetwork).map((item) => {
      const [, value] = item;
      return {
        value,
        title: value
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputSelect = _sfc_main$3;
      const _component_InputCommon = _sfc_main$4;
      const _component_ButtonPale = _sfc_main$5;
      const _component_UIcon = __nuxt_component_0;
      const _component_ButtonOutline = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-start gap-y-2" }, _attrs))}><div class="flex items-center gap-x-4"><span>\u793E\u7FA4\u7DB2\u5740</span><span class="text-sm text-gray-400">\u63D0\u4F9B\u76F8\u95DC\u793E\u7FA4\u8CC7\u8A0A\uFF0C\u8B93\u6211\u5011\u66F4\u8A8D\u8B58\u60A8</span></div><!--[-->`);
      ssrRenderList(modelValue.value, (item, index) => {
        _push(`<div class="w-full flex items-center gap-x-2">`);
        _push(ssrRenderComponent(_component_InputSelect, {
          modelValue: item.name,
          "onUpdate:modelValue": ($event) => item.name = $event,
          label: "\u540D\u5B57",
          "is-show-label": false,
          placeholder: "\u8ACB\u8F38\u5165\u540D\u5B57",
          required: "",
          options: unref(options),
          class: "w-1/4 min-w-[34px] disabled:opacity-50 h-full",
          disabled: _ctx.disabled
        }, null, _parent));
        _push(ssrRenderComponent(_component_InputCommon, {
          modelValue: item.link,
          "onUpdate:modelValue": ($event) => item.link = $event,
          "is-show-label": false,
          label: "\u8ACB\u8F38\u5165\u793E\u7FA4\u7DB2\u5740",
          placeholder: "\u8ACB\u8F38\u5165\u793E\u7FA4\u7DB2\u5740\uFF01",
          class: "flex-grow disabled:opacity-50",
          disabled: _ctx.disabled
        }, null, _parent));
        _push(ssrRenderComponent(_component_ButtonPale, {
          label: "\u79FB\u9664\u793E\u7FA4\u6309\u9215",
          class: "cursor-pointer",
          disabled: _ctx.disabled
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                role: "button",
                class: "text-black",
                name: "i-lucide:trash",
                onClick: ($event) => removeLink(index)
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UIcon, {
                  role: "button",
                  class: "text-black",
                  name: "i-lucide:trash",
                  onClick: withModifiers(($event) => removeLink(index), ["prevent"])
                }, null, 8, ["onClick"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_ButtonOutline, {
        label: "\u65B0\u589E\u793E\u7FA4\u6309\u9215",
        class: "min-w-[34px] flex items-center justify-center gap-x-1 rounded-xl text-orange-400",
        disabled: _ctx.disabled,
        onClick: addNewLink
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u65B0\u589E\u793E\u7FA4</span>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-plus",
              class: "h-4 md:h-6 w-4 md:w-6 text-orange-600"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", null, "\u65B0\u589E\u793E\u7FA4"),
              createVNode(_component_UIcon, {
                name: "i-heroicons-plus",
                class: "h-4 md:h-6 w-4 md:w-6 text-orange-600"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span style="${ssrRenderStyle(_ctx.errorMessage !== "" ? null : { display: "none" })}" class="text-red-500 text-sm">${ssrInterpolate(_ctx.errorMessage)}</span></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SignUp/PetSitter/Qualification/SocialNetWorkLinkList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$2 as _, _sfc_main$1 as a, _sfc_main as b };
//# sourceMappingURL=SocialNetWorkLinkList-BCMh_oDh.mjs.map

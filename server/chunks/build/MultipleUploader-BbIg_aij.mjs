import __nuxt_component_0$1 from './Icon-B6ODn5Cd.mjs';
import __nuxt_component_0 from './Modal-CUWDe7J7.mjs';
import { _ as _sfc_main$2 } from './Pale-B861WQUB.mjs';
import { useSSRContext, defineComponent, mergeModels, useModel, mergeProps, withCtx, createTextVNode, createVNode, withModifiers, useId, shallowRef, computed, watch, unref, isRef } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { H as useFileDialog } from './server.mjs';
import { u as useCustomUtils } from './useCustomUtils-B8GVkC05.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PreviewModal",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    imageUrl: { default: "" }
  }, {
    "modelValue": { type: Boolean, ...{ default: false } },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const isShow = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = __nuxt_component_0;
      const _component_ButtonPale = _sfc_main$2;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        modelValue: isShow.value,
        "onUpdate:modelValue": ($event) => isShow.value = $event
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative flex items-center justify-center"${_scopeId}><img class="w-full"${ssrRenderAttr("src", _ctx.imageUrl)} alt="\u9810\u89BD\u5716"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ButtonPale, {
              class: "w-[3rem] absolute right-0 top-0 aspect-square rounded-full text-black",
              label: "\u95DC\u9589\u9810\u89BD\u5716",
              onClick: ($event) => isShow.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \xD7 `);
                } else {
                  return [
                    createTextVNode(" \xD7 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative flex items-center justify-center" }, [
                createVNode("img", {
                  class: "w-full",
                  src: _ctx.imageUrl,
                  alt: "\u9810\u89BD\u5716"
                }, null, 8, ["src"]),
                createVNode(_component_ButtonPale, {
                  class: "w-[3rem] absolute right-0 top-0 aspect-square rounded-full text-black",
                  label: "\u95DC\u9589\u9810\u89BD\u5716",
                  onClick: withModifiers(($event) => isShow.value = false, ["prevent"])
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \xD7 ")
                  ]),
                  _: 1
                }, 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/Uploader/PreviewModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MultipleUploader",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    label: {},
    id: { default: () => useId("$Q1HhBiZzyF") },
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
    const fileList = useModel(__props, "modelValue");
    const decodeFileStringList = shallowRef([]);
    const currentHoverBoard = shallowRef(-1);
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
    const { open, onChange } = useFileDialog({
      accept: accept.value,
      multiple: true
    });
    const { getLastFileFromFileList, isFileImage, isString, getFileArrayListFromFileList } = useCustomUtils();
    const getBackGroundImage = (base64ImageString) => {
      return `background-image: url('${base64ImageString}')`;
    };
    const convertImageFileToBase64 = async (imageFile) => {
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
    const getPreviewImageList = async (fileList2) => {
      if (__props.acceptFileType !== "image")
        return [];
      const imageFileList = getFileArrayListFromFileList(fileList2);
      if (imageFileList === null || imageFileList.length === 0)
        return [];
      const isAllImageFile = imageFileList.every((imageFile) => isFileImage(imageFile));
      if (!isAllImageFile)
        return [];
      return Promise.all(imageFileList.map((imageFile) => {
        return convertImageFileToBase64(imageFile);
      }));
    };
    const previewImage = (base64ImageString) => {
      previewImageUrl.value = base64ImageString;
      isShowPreview.value = true;
    };
    const closePreview = () => {
      previewImageUrl.value = "";
    };
    const getImagefile = (currentFileList) => {
      if (__props.acceptFileType !== "image")
        return null;
      const imageFile = getLastFileFromFileList(currentFileList);
      if (imageFile === null)
        return null;
      return isFileImage(imageFile) ? imageFile : null;
    };
    const addFileAtLast = (addedFileList, addedFile) => {
      if (addedFileList === null) {
        return null;
      }
      const dt = new DataTransfer();
      const fileArrayList = Array.from(addedFileList);
      fileArrayList.push(addedFile);
      fileArrayList.forEach((item) => {
        dt.items.add(item);
      });
      return dt.files;
    };
    const removeFileAtIndex = (currentFileList, index) => {
      if (currentFileList === null || currentFileList.length === 0) {
        return null;
      }
      const dt = new DataTransfer();
      const fileArrayList = Array.from(currentFileList);
      fileArrayList.splice(index, 1);
      fileArrayList.forEach((item) => {
        dt.items.add(item);
      });
      return dt.files;
    };
    const removeFile = (index) => {
      const currentFileList = fileList.value;
      const result = removeFileAtIndex(currentFileList, index);
      decodeFileStringList.value.splice(index, 1);
      fileList.value = result;
    };
    onChange(async (currentFileList) => {
      if (__props.acceptFileType === "image") {
        const imageFile = getImagefile(currentFileList);
        if (imageFile === null)
          return;
        if (fileList.value === null) {
          fileList.value = currentFileList;
          return;
        }
        const addedFileList = addFileAtLast(fileList.value, imageFile);
        fileList.value = addedFileList;
      }
    });
    computed(() => {
      return (index) => ({
        mouseover: () => currentHoverBoard.value = index,
        mouseleave: () => currentHoverBoard.value = -1
      });
    });
    watch(fileList, async (currentFileList) => {
      const base64ImageStringList = await getPreviewImageList(currentFileList);
      decodeFileStringList.value = base64ImageStringList;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_0$1;
      const _component_InputUploaderPreviewModal = _sfc_main$1;
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
      if (unref(decodeFileStringList).length === 0) {
        _push(`<button${ssrRenderAttr("id", _ctx.id)} type="button" class="border-dashed border-[1.5px] border-gray-300 flex flex-col aspect-[3/2] bg-gray-100 w-full cursor-pointer items-center justify-center gap-y-2 rounded-lg">`);
        _push(ssrRenderComponent(_component_UIcon, {
          class: "font-bold",
          name: "i-heroicons-plus"
        }, null, _parent));
        _push(`<span class="text-gray-500">${ssrInterpolate(_ctx.placeholder)}</span></button>`);
      } else {
        _push(`<div class="grid grid-cols-3 w-full gap-2"><!--[-->`);
        ssrRenderList(unref(decodeFileStringList), (item, index) => {
          _push(`<div class="border border-gray-300 p-[1.5rem] relative col-span-1 flex items-center justify-center rounded-xl"><div class="bg-contain bg-center bg-no-repeat aspect-square border border-gray-300 w-full bg-gray-100" style="${ssrRenderStyle(getBackGroundImage(item))}"></div><div style="${ssrRenderStyle(unref(currentHoverBoard) === index ? null : { display: "none" })}" class="border border-gray-300 left-[1.5rem] top-[1.5rem] w-[calc(100%_-_0.75rem)] text-white absolute aspect-square flex items-center justify-center gap-x-3 bg-black/50">`);
          _push(ssrRenderComponent(_component_UIcon, {
            class: "cursor-pointer text-white text-3xl",
            name: "i-eva:eye-outline",
            role: "button",
            onClick: ($event) => previewImage(item)
          }, null, _parent));
          _push(ssrRenderComponent(_component_UIcon, {
            class: "cursor-pointer text-white text-2xl",
            name: "i-lucide:trash",
            role: "button",
            onClick: ($event) => removeFile(index)
          }, null, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--><button${ssrRenderAttr("id", _ctx.id)} type="button" class="border-dashed border-[1.5px] border-gray-300 flex flex-col bg-gray-100 col-span-1 aspect-square cursor-pointer items-center justify-center gap-y-2 rounded-lg">`);
        _push(ssrRenderComponent(_component_UIcon, {
          class: "font-bold",
          name: "i-heroicons-plus"
        }, null, _parent));
        _push(`<span class="text-gray-500">${ssrInterpolate(_ctx.placeholder)}</span></button></div>`);
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/MultipleUploader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, _sfc_main$1 as a };
//# sourceMappingURL=MultipleUploader-BbIg_aij.mjs.map

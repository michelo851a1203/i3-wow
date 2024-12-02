const useCustomUtils = () => {
  const isString = (input) => {
    return typeof input === "string";
  };
  const isEmail = (input) => {
    return /^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(input);
  };
  const isInputElement = (input) => {
    return input instanceof HTMLInputElement;
  };
  const isDivElement = (input) => {
    return input instanceof HTMLDivElement;
  };
  const isButtonElement = (button) => {
    return button instanceof HTMLButtonElement;
  };
  const isFormElement = (form) => {
    return form instanceof HTMLFormElement;
  };
  const isFileListHasSingleFile = (fileList) => {
    if (fileList === null)
      return false;
    return fileList.length === 1;
  };
  const getFileFromFileList = (fileList) => {
    if (fileList === null)
      return null;
    return fileList.item(0);
  };
  const getLastFileFromFileList = (fileList) => {
    if (fileList === null)
      return null;
    return fileList.item(fileList.length - 1);
  };
  const getFileArrayListFromFileList = (fileList) => {
    if (fileList === null)
      return null;
    return Array.from(fileList);
  };
  const isFileImage = (file) => {
    return file.type.startsWith("image");
  };
  const isValidBase64Image = (base64String) => {
    return /^data:image\/jpeg|jpg|png|gif|webp|svg\+xml|bmp;base64,.*/.test(base64String);
  };
  return {
    isString,
    isEmail,
    isInputElement,
    isDivElement,
    isButtonElement,
    isFormElement,
    isFileListHasSingleFile,
    getFileFromFileList,
    getLastFileFromFileList,
    getFileArrayListFromFileList,
    isFileImage,
    isValidBase64Image
  };
};

export { useCustomUtils as u };
//# sourceMappingURL=useCustomUtils-B8GVkC05.mjs.map

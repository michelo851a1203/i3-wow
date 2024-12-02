import * as zod from 'zod';
import { P as PetSitterSignUpPersonalImageType, p as petSittersignUpPersonalFormSchema } from './signUp.type-C4a4H3kg.mjs';
import { i as definePrivateState, a as useLocalePath, n as navigateTo } from './server.mjs';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { u as useCustomError } from './useCustomError-C6r27JZ9.mjs';

const signInFormSchema = zod.object({
  email: zod.string().email("\u8ACB\u8F38\u5165 email \u683C\u5F0F").min(1, "\u8ACB\u8F38\u5165 email").max(50, "\u4F60\u7684 email \u592A\u9577\u4E86\u5427\uFF01"),
  password: zod.string().min(6, "\u9577\u5EA6\u70BA6-18\u500B\u5B57\u5143").max(18, "\u9577\u5EA6\u70BA6-18\u500B\u5B57\u5143").regex(/(?=.*[A-Z]).*/g, "\u5305\u542B1\u500B\u5927\u5BEB\u5B57\u6BCD").regex(/(?=.*\d).*/g, "\u5305\u542B1\u500B\u6578\u5B57")
});
const jwtPayloadSchema = zod.object({
  iss: zod.string(),
  sub: zod.string(),
  iat: zod.number().int().nonnegative("\u8ACB\u8F38\u5165\u6B63\u6574\u6578\u62160"),
  exp: zod.number().int().nonnegative("\u8ACB\u8F38\u5165\u6B63\u6574\u6578\u62160"),
  nbf: zod.number().int().nonnegative("\u8ACB\u8F38\u5165\u6B63\u6574\u6578\u62160"),
  jti: zod.string(),
  userName: zod.string().min(1, "\u5FC5\u9808\u8981\u6709\u59D3\u540D"),
  role: zod.string()
});
const useStorageStore = definePrivateState("useStorageStore", () => {
  return {
    dbName: "image",
    name: "i3-big-data-pets-image",
    version: 1
  };
}, (privateState) => {
  const checkSupportIndexDB = () => {
    if (!(void 0).indexedDB) {
      console.warn("Your browser does not support the IndexedDB API");
    }
    return !!(void 0).indexedDB;
  };
  const isIDBOpenDBRequest = (input) => {
    return input instanceof IDBOpenDBRequest;
  };
  const initializeImageIndexDB = async () => {
    if (!checkSupportIndexDB())
      return null;
    return new Promise((resolve, reject) => {
      const request = (void 0).indexedDB.open(privateState.name, privateState.version);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
      request.onupgradeneeded = (event) => {
        const dbRequest = event.target;
        if (!isIDBOpenDBRequest(dbRequest))
          return;
        const db = dbRequest.result;
        if (db.objectStoreNames.contains(privateState.name))
          return;
        const store = db.createObjectStore(privateState.name, {
          keyPath: "id",
          autoIncrement: true
        });
        store.createIndex("name", "name", { unique: false });
        store.createIndex("timeStamp", "timeStamp", { unique: false });
      };
    });
  };
  const saveImage = (db, storeName) => {
    return (name, data) => {
      return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, "readwrite");
        const store = transaction.objectStore(storeName);
        const row = {
          name,
          data,
          timeStamp: Date.now()
        };
        const request = store.add(row);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });
    };
  };
  const getAllImage = (db, storeName) => {
    return () => {
      return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, "readonly");
        const store = transaction.objectStore(storeName);
        const request = store.getAll();
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });
    };
  };
  const deleteImage = (db, storeName) => {
    return (id) => {
      return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, "readwrite");
        const store = transaction.objectStore(storeName);
        const request = store.delete(id);
        request.onsuccess = () => resolve(true);
        request.onerror = () => reject(request.error);
      });
    };
  };
  const searchImageByName = (db, storeName) => {
    return (name) => {
      return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, "readonly");
        const store = transaction.objectStore(storeName);
        const index = store.index("name");
        const request = index.getAll();
        request.onsuccess = () => {
          const result = request.result;
          const filterResult = result.filter((record) => record.name === name);
          resolve(filterResult);
        };
        request.onerror = () => reject(request.error);
      });
    };
  };
  return {
    // getters::
    storeName: computed(() => privateState.name),
    // methods::
    initializeImageIndexDB,
    saveImage,
    getAllImage,
    deleteImage,
    searchImageByName
  };
});
const useSignInApi = () => {
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const singin = async (request) => {
    console.log(request);
    await wait(500);
    const fakeToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJleGFtcGxlLWF1dGgtc2VydmljZSIsInN1YiI6InVzZXIxMjMiLCJpYXQiOjE2NTI3ODQ1NjAsImV4cCI6MTY1Mjc4NjM2MCwibmJmIjoxNjUyNzg0NTYwLCJqdGkiOiIxNjUyNzg0NTYwIiwidXNlck5hbWUiOiJKb2huIERvZSIsInJvbGUiOiJhZG1pbiJ9.XXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    return fakeToken;
  };
  const signOut = async () => {
    return true;
  };
  return {
    singin,
    signOut
  };
};
const useSignUpApi = () => {
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const signUp = async (request) => {
    console.group("%c test", "color: yellow;");
    console.log(request);
    console.groupEnd();
    await wait(800);
    return true;
  };
  const getEmailVerifyCode = async (email) => {
    console.group("%c test", "color: yellow;");
    console.log(email);
    console.groupEnd();
    await wait(800);
    return true;
  };
  const petSitterSignUp = async (petterSitterSignUp) => {
    console.group("%c test", "color: yellow;");
    console.log(petterSitterSignUp);
    console.groupEnd();
    await wait(800);
    return true;
  };
  return {
    signUp,
    getEmailVerifyCode,
    petSitterSignUp
  };
};
const useForgetPasswordApi = () => {
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const forgetPassword = async (email) => {
    console.log(email);
    await wait(500);
    return true;
  };
  const getVerifyCode = async (verifyCode) => {
    console.log(verifyCode);
    await wait(500);
    return true;
  };
  const renewPassword = async (request) => {
    console.log(request);
    await wait(500);
    return true;
  };
  return {
    forgetPassword,
    getVerifyCode,
    renewPassword
  };
};
const useAuthStore = definePrivateState("useAuthStore", () => {
  return {
    isShowLoginAlert: false,
    isShowSignUpAlert: false,
    petSitterPersonalForm: null,
    fakeToken: null
  };
}, (privateState) => {
  const petSitterSignupPersonalKey = "petSitter_signup_personal_temp";
  const storageStore = useStorageStore();
  const { initializeImageIndexDB, saveImage, getAllImage, deleteImage } = storageStore;
  const { storeName } = storeToRefs(storageStore);
  const localePath = useLocalePath();
  const { singin, signOut } = useSignInApi();
  const { signUp, getEmailVerifyCode, petSitterSignUp } = useSignUpApi();
  const { forgetPassword, getVerifyCode, renewPassword } = useForgetPasswordApi();
  const { customTypeError, fatalError } = useCustomError();
  const handleSignIn = async (request) => {
    try {
      const token = await singin(request);
      if (token === "")
        return false;
      if (!validateJwtToken(token)) {
        return false;
      }
      const payload = getJwtPayload(token);
      if (!payload) {
        return false;
      }
      setFakeToken(payload);
      changeIsShowLoginAlert(true);
      return true;
    } catch (error) {
      if (customTypeError(error))
        return false;
      if (fatalError(error))
        return false;
      return false;
    }
  };
  const handleSignUp = async (request) => {
    try {
      const isSuccess = await signUp(request);
      if (isSuccess) {
        changeIsShowSignUpAlert(true);
      }
      return isSuccess;
    } catch (error) {
      if (customTypeError(error))
        return false;
      if (fatalError(error))
        return false;
      return false;
    }
  };
  const handleSignOut = async () => {
    try {
      const isSuccess = await signOut();
      return isSuccess;
    } catch (error) {
      if (customTypeError(error))
        return false;
      if (fatalError(error))
        return false;
      return false;
    }
  };
  const handleForgetPassword = async (email) => {
    try {
      const isSuccess = await forgetPassword(email);
      return isSuccess;
    } catch (error) {
      if (customTypeError(error))
        return false;
      if (fatalError(error))
        return false;
      return false;
    }
  };
  const handleForgetPasswordVerifyCode = async (verifyCode) => {
    try {
      const isSuccess = await getVerifyCode(verifyCode);
      return isSuccess;
    } catch (error) {
      if (customTypeError(error))
        return false;
      if (fatalError(error))
        return false;
      return false;
    }
  };
  const handleSendEmailToGetVerificationCode = async (email) => {
    try {
      const isSuccess = await getEmailVerifyCode(email);
      return isSuccess;
    } catch (error) {
      if (customTypeError(error))
        return false;
      if (fatalError(error))
        return false;
      return false;
    }
  };
  const handleRenewPassword = async (request) => {
    try {
      const isSuccess = await renewPassword(request);
      return isSuccess;
    } catch (error) {
      if (customTypeError(error))
        return false;
      if (fatalError(error))
        return false;
      return false;
    }
  };
  const finishPetSitterSignUpPersonal = async (personalForm) => {
    const storageData = Object.fromEntries(Object.entries(personalForm).filter(([key]) => !["identityImageFront", "identityImageBack"].includes(key)));
    localStorage.setItem(petSitterSignupPersonalKey, JSON.stringify(storageData));
    privateState.petSitterPersonalForm = personalForm;
    const imageDB = await initializeImageIndexDB();
    if (imageDB === null)
      return true;
    if (personalForm.identityImageFront && personalForm.identityImageBack) {
      await Promise.all([
        saveImage(imageDB, storeName.value)(PetSitterSignUpPersonalImageType.PersonalIdentityImageFront, personalForm.identityImageFront),
        saveImage(imageDB, storeName.value)(PetSitterSignUpPersonalImageType.PersonalIdentityImageBack, personalForm.identityImageBack)
      ]);
    }
    return true;
  };
  const handlePetSitterSignUp = async (secondForm) => {
    if (privateState.petSitterPersonalForm === null) {
      navigateTo(localePath("signUp-petSitter"));
      return false;
    }
    const { success } = petSittersignUpPersonalFormSchema.safeParse(privateState.petSitterPersonalForm);
    if (!success) {
      navigateTo(localePath("signUp-petSitter"));
      return false;
    }
    const request = {
      ...privateState.petSitterPersonalForm,
      ...secondForm
    };
    try {
      const isSuccess = await petSitterSignUp(request);
      return isSuccess;
    } catch (error) {
      if (customTypeError(error))
        return false;
      if (fatalError(error))
        return false;
      return false;
    }
  };
  const changeIsShowLoginAlert = (isShow) => {
    privateState.isShowLoginAlert = isShow;
  };
  const changeIsShowSignUpAlert = (isShow) => {
    privateState.isShowSignUpAlert = isShow;
  };
  const setPetSitterPersonalForm = async (petSitterPersonalStorage) => {
    privateState.petSitterPersonalForm = {
      ...petSitterPersonalStorage,
      identityImageFront: null,
      identityImageBack: null
    };
    const db = await initializeImageIndexDB();
    if (db === null)
      return;
    const imageSetList = await getAllImage(db, storeName.value)();
    const frontImageRecord = imageSetList.find((item) => item.name === PetSitterSignUpPersonalImageType.PersonalIdentityImageFront);
    if (frontImageRecord) {
      privateState.petSitterPersonalForm.identityImageFront = frontImageRecord.data;
    }
    const backImageRecord = imageSetList.find((item) => item.name === PetSitterSignUpPersonalImageType.PersonalIdentityImageBack);
    if (backImageRecord) {
      privateState.petSitterPersonalForm.identityImageBack = backImageRecord.data;
    }
  };
  const resetPetSitterPersonalForm = () => {
    privateState.petSitterPersonalForm = null;
  };
  const removeImageDBPersonal = async () => {
    const db = await initializeImageIndexDB();
    if (db === null)
      return false;
    const imageSetList = await getAllImage(db, storeName.value)();
    const frontImageRecord = imageSetList.find((item) => item.name === PetSitterSignUpPersonalImageType.PersonalIdentityImageFront);
    if (frontImageRecord && frontImageRecord.id) {
      await deleteImage(db, storeName.value)(frontImageRecord.id);
    }
    const backImageRecord = imageSetList.find((item) => item.name === PetSitterSignUpPersonalImageType.PersonalIdentityImageBack);
    if (backImageRecord && backImageRecord.id) {
      await deleteImage(db, storeName.value)(backImageRecord.id);
    }
    return true;
  };
  const setFakeToken = (fakeToken) => {
    privateState.fakeToken = fakeToken;
  };
  const validateJwtToken = (token) => {
    const jwtTokenSchema = zod.string().refine((token2) => {
      const tokenList = token2.split(".");
      const isLengthOkay = tokenList.length === 3;
      if (!isLengthOkay)
        return false;
      const jwtAlgoEnum = [
        "HS256",
        "HS384",
        "HS512",
        "RS256",
        "RS384",
        "RS512",
        "ES256",
        "ES384",
        "ES512",
        "PS256",
        "PS384",
        "PS512",
        "none"
      ];
      const algoAndTypeSchema = zod.object({
        alg: zod.enum(jwtAlgoEnum),
        typ: zod.literal("JWT")
      });
      const rawJwtAlgoString = atob(tokenList[0]);
      const jwtAlgoString = JSON.parse(rawJwtAlgoString);
      const validatedAlgo = algoAndTypeSchema.safeParse(jwtAlgoString);
      if (!validatedAlgo.success)
        return false;
      const userBaseInfoBase64String = atob(tokenList[1]);
      const rawUserBaseInfo = JSON.parse(userBaseInfoBase64String);
      const validatedUserBaseInfo = jwtPayloadSchema.safeParse(rawUserBaseInfo);
      if (!validatedUserBaseInfo.success)
        return false;
      return true;
    });
    return jwtTokenSchema.safeParse(token).success;
  };
  const getJwtPayload = (token) => {
    const tokenList = token.split(".");
    if (tokenList.length !== 3)
      return;
    const rawPayload = atob(tokenList[1]);
    const rawUserBaseInfo = JSON.parse(rawPayload);
    const validator = jwtPayloadSchema.safeParse(rawUserBaseInfo);
    if (!validator.success) {
      return;
    }
    return validator.data;
  };
  return {
    // getters::
    isShowLoginAlert: computed(() => privateState.isShowLoginAlert),
    isShowSignUpAlert: computed(() => privateState.isShowSignUpAlert),
    fakeToken: computed(() => privateState.fakeToken),
    // methods::
    handleSignIn,
    handleSignUp,
    handleSignOut,
    handleForgetPassword,
    handleSendEmailToGetVerificationCode,
    handleForgetPasswordVerifyCode,
    handleRenewPassword,
    finishPetSitterSignUpPersonal,
    handlePetSitterSignUp,
    changeIsShowLoginAlert,
    changeIsShowSignUpAlert,
    setPetSitterPersonalForm,
    resetPetSitterPersonalForm,
    removeImageDBPersonal,
    setFakeToken
  };
});

export { useStorageStore as a, signInFormSchema as s, useAuthStore as u };
//# sourceMappingURL=useAuthStore-6LI8GoiG.mjs.map

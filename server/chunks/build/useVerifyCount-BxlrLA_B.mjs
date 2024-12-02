import { shallowRef, ref } from 'vue';
import { I as useCounter } from './server.mjs';

const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = () => {
  console.error(intervalError);
};
const useVerifyCount = () => {
  const reVerifyCodeCount = shallowRef(60);
  const sharableState = ref(null);
  const startCounter = (currentCount, key) => {
    if (sharableState.value !== null) {
      const stopTime = sharableState.value;
      stopTime();
    }
    useCounter(currentCount, { min: 0, max: 60 });
    reVerifyCodeCount.value = currentCount;
    const currentInterval = setInterval();
    const stopTimer = () => {
      clearInterval(currentInterval);
      localStorage.removeItem(key);
    };
    sharableState.value = stopTimer;
  };
  const resetCounter = (key) => {
    localStorage.setItem(key, (/* @__PURE__ */ new Date()).getTime().toString());
    startCounter(60, key);
  };
  const getKeyTimeStamp = (key) => {
    const startCountTimeStamp = localStorage.getItem(key);
    if (startCountTimeStamp === null) {
      localStorage.setItem(key, (/* @__PURE__ */ new Date()).getTime().toString());
    }
    const startTimeStamp = startCountTimeStamp === null || Number.isNaN(+startCountTimeStamp) ? null : +startCountTimeStamp;
    return startTimeStamp === null ? 60 : 60 - Math.floor(((/* @__PURE__ */ new Date()).getTime() - startTimeStamp) / 1e3);
  };
  return {
    reVerifyCodeCount,
    sharableState,
    startCounter,
    getKeyTimeStamp,
    resetCounter
  };
};

export { useVerifyCount as u };
//# sourceMappingURL=useVerifyCount-BxlrLA_B.mjs.map

import { t as createError } from './server.mjs';

const useCustomError = () => {
  const customTypeError = (error) => {
    const result = error instanceof TypeError;
    if (result) {
      console.warn(error.message);
    }
    return result;
  };
  const fatalError = (error, statusCode = -1) => {
    const result = error instanceof Error;
    if (result) {
      throw createError({
        statusCode,
        message: error.message
      });
    }
    return result;
  };
  return {
    customTypeError,
    fatalError
  };
};

export { useCustomError as u };
//# sourceMappingURL=useCustomError-C6r27JZ9.mjs.map

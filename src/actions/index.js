import { SIGN_IN, SIGN_OUT } from "./types";

export const singIn = (userId) => {
  return { type: SIGN_IN, payload: userId };
};

export const singOut = () => {
  return { type: SIGN_OUT };
};

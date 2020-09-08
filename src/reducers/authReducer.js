import { SIGN_IN, SIGN_OUT } from "../actions/types";

// ilk degeri null veriyoz cunku comnent jsx ekranda ozukur ve componenDidMount calisir auth library dahan sonra cagrip sonucu aoth store redux atanir
const INITIAL_STATE = { isSignedIn: null, userId: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};

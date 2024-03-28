import { AUTH_ACTIONS } from "./auth.actions";
import { Actions, InitialState, User } from "./auth.interfaces";

export const initialState: InitialState = {
  user: {} as User,
  isAuth: null,
  userType: null,
};

export function authReducer(
  state: InitialState,
  action: Actions
): InitialState {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN_SUCCEED:
      return {
        ...state,
        user: action.payload,
        userType: action.payload.userType,
        isAuth: true,
      };
    case AUTH_ACTIONS.SIGN_OUT:
      return {
        ...state,
        user: {} as User,
        isAuth: null,
        userType: null,
      };
    default: {
      throw new Error(`unhandled action type: ${action.type}`);
    }
  }
}

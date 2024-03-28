export interface AuthProviderProps {
  children: JSX.Element[] | JSX.Element;
}

export interface AuthContextTypes extends InitialState {
  signOut: () => void;
  onLoginSucceed: (user: User & { token?: string }, redirect?: boolean) => void;
}

export interface User {}

export type UserType = any;

export interface InitialState {
  user: User;
  userType: UserType | null;
  isAuth: boolean | null;
}

export interface Actions {
  type: AuthActionTypes;
  payload?: any;
}

export type AuthActionTypes = "SIGN_OUT" | "LOGIN_SUCCEED";

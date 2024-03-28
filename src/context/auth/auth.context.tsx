"use client";
import {
  Reducer,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import {
  Actions,
  AuthContextTypes,
  AuthProviderProps,
  InitialState,
  User,
} from "./auth.interfaces";
import { authReducer, initialState } from "./auth.reducer";
import service from "@/services/api.service";
import { usePathname, useRouter } from "next/navigation";

const AuthContext = createContext({} as AuthContextTypes);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useRouter();
  const pathname = usePathname();

  const [state, dispatch] = useReducer<Reducer<InitialState, Actions>>(
    authReducer,
    initialState
  );

  const onLoginSucceed = useCallback(
    (user: User & { token?: string }, redirect = true) => {
      const { token } = user;

      if (token) localStorage.setItem("[auth-token]", token!);
      if (redirect) navigate.push("/home");
      dispatch({ type: "LOGIN_SUCCEED", payload: user });
    },
    []
  );

  const signOut = useCallback(() => {
    navigate.push("/login");
    dispatch({ type: "SIGN_OUT" });
    localStorage.removeItem("[auth-token]");
  }, []);

  const validateUser = async (token: string) => {
    service
      .Get(`/auth/confirm/${token}`)
      .then((userValidated) => {
        dispatch({ type: "LOGIN_SUCCEED", payload: userValidated });
      })

      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const token = localStorage.getItem("[auth-token]");

    if (token) {
      validateUser(token);
      return;
    }

    if (pathname === "/login" || pathname === "/register") return;
    navigate.push("/");
  }, []);

  const values = useMemo(
    () => ({ ...state, signOut, onLoginSucceed }),
    [state, signOut, onLoginSucceed]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

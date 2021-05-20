import axios from "axios";
import React, { useState, useContext, createContext, ReactNode } from "react";

const authContext = createContext({user: false, signin: (loginData: Login) => {}, signout: () => {} });

export const ProvideAuth = ({ children }: { children: ReactNode}) => {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(authContext);
}

export interface Login { userName: string, password: string};

export const useProvideAuth = () => {
  const [user, setUser] = useState(false);

  const apiURL = process.env.REACT_APP_APIURL
  const signin = async (loginData: Login) => {
    const user = await axios.post(apiURL + '/auth/login', loginData);
    setUser(!!user);
  };


  const signout = () => {
    setUser(false);
  };

  return {
    user,
    signin,
    signout,
  };
}

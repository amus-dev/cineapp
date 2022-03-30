import React from "react";

import { useSelector } from "react-redux";

import AuthStack from "./AuthStack";
import UserStack from "./UserStack";

const Navigation = () => {
  const { userIsLogged } = useSelector((state) => state.userReducer);
  return userIsLogged ? <UserStack /> : <AuthStack />;
};

export default Navigation;

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { app } from "../services";
import { ERRORS_FIREBASE } from "../const";

const auth = getAuth(app);

export const createAccount = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    const errorCode = error.code;
    throw errorCode;
  }
};

export const loginAccount = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    const errorCode = error.code;
    console.log(errorCode);
    throw errorCode;
  }
};

export const viewError = (error) => {
  const result = ERRORS_FIREBASE.filter((err) => err.type == error).shift();
  return result.message;
};

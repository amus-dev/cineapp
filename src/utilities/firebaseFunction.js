import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../services/firebase";

const auth = getAuth(app);

export const createAccount = async (email, password) => {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  return result.user;
};

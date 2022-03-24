import { StyleSheet, View } from "react-native";
import React, { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";

//Firebase Functions
import { createAccount } from "../../../utilities/firebaseFunction";

//Molecules
import Toast from "../../molecules/Toast";
import InputText from "../../molecules/InputText";
import InputPassword from "../../molecules/InputPassword";
import Button from "../../molecules/Button";
import TextAccount from "../../molecules/TextAccount";

const index = () => {
  const navigation = useNavigation();
  const toastRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickCreateAccount = () => {
    createAccount(email, password).then((response) => {
      if (response.uid) {
        cleanInputs();
        toastRef.current.show("¡Cuenta creada!", 1000, () => {
          navigation.navigate("login");
        });
      }
    });
  };

  const cleanInputs = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <View style={styles.form}>
      <Toast
        toastRef={toastRef}
        position="top"
        backgroundColor="white"
        colorText="black"
      />
      <View>
        <InputText
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChange={setEmail}
        />
        <InputPassword
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={setPassword}
        />
      </View>
      <View>
        <Button
          style={styles.btn}
          text="Create Account"
          handleClick={handleClickCreateAccount}
        />
        <TextAccount
          description="Already have an account?"
          outstanding="Login"
          onClick={() => navigation.navigate("login")}
        />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

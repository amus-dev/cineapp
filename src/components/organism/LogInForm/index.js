import { StyleSheet, View } from "react-native";
import React, { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";

//Molecules
import Toast from "../../molecules/Toast";
import InputText from "../../molecules/InputText";
import InputPassword from "../../molecules/InputPassword";
import Button from "../../molecules/Button";
import TextAccount from "../../molecules/TextAccount";

//Utilities
import { loginAccount, viewError } from "../../../utilities/index";

const LogInForm = () => {
  const navigation = useNavigation();
  const toastRef = useRef();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const login = async () => {
    try {
      const response = await loginAccount(email, password);
      if (response.uid) {
        toastRef.current.show("¡Sesión iniciada!", 1000, () => {
          console.log("dirigir al dashboard");
        });
      }
    } catch (error) {
      toastRef.current.show(viewError(error));
    }
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
          onChange={setEmail}
        />
        <InputPassword
          label="Password"
          placeholder="Enter your password"
          onChange={setPassword}
        />
      </View>
      <View>
        <Button style={styles.btn} text="Login" handleClick={() => login()} />
        <TextAccount
          description="Don’t have an account?"
          outstanding="Sign Up"
          onClick={() => navigation.navigate("signup")}
        />
      </View>
    </View>
  );
};

export default LogInForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

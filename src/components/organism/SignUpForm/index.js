import { StyleSheet, View, Text } from "react-native";
import React from "react";

//Molecules
import InputText from "../../molecules/InputText";
import InputPassword from "../../molecules/InputPassword";
import Button from "../../molecules/Button";
import TextAccount from "../../molecules/TextAccount";

const index = () => {
  return (
    <View style={styles.form}>
      <InputText label="Name" placeholder="Enter your name" />
      <InputText label="Email" placeholder="Enter your email" />
      <InputText label="Email" placeholder="Enter your email" />
      <InputPassword label="Password" placeholder="Enter your password" />
      <Button
        style={styles.btn}
        text="Create Account"
        handleClick={() => navigation.navigate("signup")}
      />
      <TextAccount
        description="Already have an account?"
        outstanding="Login"
        onClick={() => console.log("ir a login")}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  form: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
  },
  btn: {
    position: "absolute",
    bottom: 0,
  },
});

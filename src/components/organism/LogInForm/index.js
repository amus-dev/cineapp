import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

//Molecules
import InputText from "../../molecules/InputText";
import InputPassword from "../../molecules/InputPassword";
import Button from "../../molecules/Button";
import TextAccount from "../../molecules/TextAccount";

const LogInForm = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.form}>
      <View>
        <InputText label="Email" placeholder="Enter your email" />
        <InputPassword label="Password" placeholder="Enter your password" />
      </View>
      <View>
        <Button
          style={styles.btn}
          text="Login"
          handleClick={() => navigation.navigate("signup")}
        />
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

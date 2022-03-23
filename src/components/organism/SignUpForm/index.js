import { StyleSheet, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

//Molecules
import InputText from "../../molecules/InputText";
import InputPassword from "../../molecules/InputPassword";
import Button from "../../molecules/Button";
import TextAccount from "../../molecules/TextAccount";

const index = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.form}>
      <View>
        <InputText label="Name" placeholder="Enter your name" />
        <InputText label="Email" placeholder="Enter your email" />
        <InputPassword label="Password" placeholder="Enter your password" />
      </View>
      <View>
        <Button
          style={styles.btn}
          text="Create Account"
          handleClick={() => navigation.navigate("signup")}
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

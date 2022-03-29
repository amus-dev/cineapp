import { StyleSheet, SafeAreaView, StatusBar, View } from "react-native";
import React from "react";

// Organism
import BackNavigate from "../../organism/BackNavigate";
import SocialSignLogin from "../../organism/SocialSignLogin";
import SignUpForm from "../../organism/SignUpForm";

import { signInAuthGoogle } from "../../../utilities";

const SignUpTemplate = () => {
  const signInWithGoogle = async () => {
    try {
      const response = await signInAuthGoogle();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const signInWithApple = () => {
    console.log("handleClickApple");
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>
        <BackNavigate url="welcome" text="Sign Up" />
        <SocialSignLogin
          method="signup"
          handleClickApple={signInWithApple}
          handleClickGoogle={signInWithGoogle}
        />
        <SignUpForm />
      </View>
    </SafeAreaView>
  );
};

export default SignUpTemplate;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: 20,
  },
});

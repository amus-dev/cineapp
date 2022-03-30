import { StyleSheet, SafeAreaView, StatusBar, View } from "react-native";
import React from "react";

// Organism
import BackNavigate from "../../organism/BackNavigate";
import SocialSignLogin from "../../organism/SocialSignLogin";
import SignUpForm from "../../organism/SignUpForm";

const SignUpTemplate = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>
        <BackNavigate text="Sign Up" />
        <SocialSignLogin method="signup" />
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

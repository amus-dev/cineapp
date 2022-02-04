import { StyleSheet, SafeAreaView, View, ScrollView } from "react-native";
import React from "react";

// Organism
import BackNavigate from "../../organism/BackNavigate";
import SocialSignLogin from "../../organism/SocialSignLogin";
import SignUpForm from "../../organism/SignUpForm";

const SignUpTemplate = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <BackNavigate url="welcome" text="Sign Up" />
          <SocialSignLogin method="signUp" />
          <SignUpForm />
        </View>
      </ScrollView>
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

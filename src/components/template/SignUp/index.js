import { StyleSheet, SafeAreaView, View } from "react-native";
import React from "react";
import BackNavigate from "../../organism/BackNavigate";

const SignUpTemplate = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <BackNavigate url="welcome" text="Sign Up" />
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

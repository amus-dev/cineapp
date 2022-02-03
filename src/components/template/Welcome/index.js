import { StyleSheet, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
// Molecules
import Button from "../../molecules/Button";
// Themes images
import Logo from "../../../assets/images/@icons/Logo";
import { BLACK, ORANGE, WHITE } from "../../../theme/color";

const WelcomeTemplate = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Logo />
      <Button
        style={styles.btn}
        text="Comenzar"
        bgButton={ORANGE}
        textColor={WHITE}
        handleClick={() => navigation.navigate("signup")}
      />
    </View>
  );
};

export default WelcomeTemplate;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    backgroundColor: BLACK,
    alignItems: "center",
    justifyContent: "space-around",
  },
  btn: {
    position: "absolute",
    bottom: 0,
    marginTop: 20,
  },
});

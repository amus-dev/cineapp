import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

// Icons
import Apple from "../../../assets/images/@icons/Apple";
import Google from "../../../assets/images/@icons/Google";

// Theme
import { MEDIUM_GRAY, GRAY } from "../../../theme/color";
import { fontSizes } from "../../../theme/fonts";

const index = ({ method }) => {
  return (
    <View style={styles.socialContainer}>
      <Text style={styles.socialDescription}>
        Sign up with one of following options
      </Text>
      <View style={styles.socialMethodContainer}>
        <TouchableOpacity
          style={styles.methodBlock}
          onPress={() => console.log(method)}
        >
          <Apple />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.methodBlock}
          onPress={() => console.log(method)}
        >
          <Google />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  socialContainer: {
    marginTop: 40,
  },
  socialDescription: {
    color: MEDIUM_GRAY,
    fontSize: fontSizes.small,
  },
  socialMethodContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  methodBlock: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GRAY,
    width: "45%",
    marginVertical: 30,
    height: 60,
    borderRadius: 10,
  },
});

import { StyleSheet, View } from "react-native";
import React from "react";

// Molecules
import SelectPicker from "../../molecules/SelectPicker";

const index = () => {
  return (
    <View style={styles.container}>
      <SelectPicker />
      <SelectPicker />
      <SelectPicker />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },
});

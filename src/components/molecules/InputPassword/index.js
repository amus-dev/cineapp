import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";

// Themes
import { GRAY, GOLD, MEDIUM_GRAY } from "../../../theme/color";

const index = ({ label, placeholder, onChange }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <TextInput
      secureTextEntry={isVisible}
      label={label}
      placeholder={placeholder}
      style={styles.input}
      activeUnderlineColor={GOLD}
      theme={{
        colors: {
          placeholder: MEDIUM_GRAY,
          text: MEDIUM_GRAY,
        },
      }}
      right={
        <TextInput.Icon
          name={isVisible ? "eye" : "eye-off"}
          color={GOLD}
          onPress={() => setIsVisible(!isVisible)}
        />
      }
      onChangeText={(text) => console.log(text)}
    />
  );
};

export default index;

const styles = StyleSheet.create({
  input: {
    backgroundColor: GRAY,
    marginBottom: 40,
    color: MEDIUM_GRAY,
  },
});

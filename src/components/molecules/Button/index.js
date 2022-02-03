import React from "react";
import { Button } from "react-native-paper";

const ButtonMovit = ({ text, bgButton, textColor, handleClick }) => {
  return (
    <Button
      mode="contained"
      onPress={() => handleClick()}
      color={bgButton}
      labelStyle={{ color: textColor }}
      contentStyle={{ width: "100%" }}
    >
      {text}
    </Button>
  );
};

export default ButtonMovit;

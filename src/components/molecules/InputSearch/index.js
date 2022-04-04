import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import React, { useState } from "react";
// Colors
import {
  GRAY,
  MEDIUM_GRAY,
  GOLD,
  WHITE,
  TRANSPARENT,
} from "../../../theme/color";

const InputSearch = () => {
  const [searchText, setSearchText] = useState(null);

  return (
    <View>
      <TextInput
        style={styles.inputContainer}
        placeholder="search in the app"
        placeholderTextColor={MEDIUM_GRAY}
        activeUnderlineColor={TRANSPARENT}
        selectionColor={MEDIUM_GRAY}
        left={<TextInput.Icon name="menu" color={WHITE} />}
        right={<TextInput.Icon name="microphone" color={GOLD} />}
        theme={{ colors: { text: WHITE } }}
        onSubmitEditing={() => console.log(searchText)}
        onChange={(e) => setSearchText(e.nativeEvent.text)}
      />
    </View>
  );
};

export default InputSearch;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: GRAY,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
  },
});

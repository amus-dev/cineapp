import { StyleSheet, Text, View } from "react-native";
import React from "react";
// Organism
import NavFilters from "../../organism/NavFilters";
// Molecules
import InputSearch from "../../molecules/InputSearch";

const HomeTemplate = () => {
  return (
    <View style={styles.container}>
      <InputSearch />
      <NavFilters />
    </View>
  );
};

export default HomeTemplate;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: 20,
  },
});

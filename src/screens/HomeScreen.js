import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import React from "react";
// Navigate
import { useNavigation } from "@react-navigation/native";
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <Text style={{ color: "white" }}>HomeScreen</Text>
        <TouchableOpacity onPress={() => navigation.navigate("movie")}>
          <Text style={{ color: "white" }}>Ir a detail movie</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

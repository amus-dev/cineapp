import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Welcome from "../screens/Welcome";
import SignUp from "../screens/SignUp";
import LogIn from "../screens/LogIn";
const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="signup"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="login"
            component={LogIn}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default Navigation;

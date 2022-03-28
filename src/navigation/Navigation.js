import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import WelcomeScreen from "../screens/Welcome";
import SignUpScreen from "../screens/SignUp";
import LogInScreen from "../screens/LogIn";
import HomeScreen from "../screens/Home";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="signup"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="login"
            component={LogInScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default Navigation;

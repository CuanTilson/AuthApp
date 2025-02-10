import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginView from "./screens/LoginView";
import SignupView from "./screens/SignupView";

// Define a type for the navigation stack
export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="Signup" component={SignupView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
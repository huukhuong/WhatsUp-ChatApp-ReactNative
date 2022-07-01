import SplashScreen from "../screens/SplashScreen/SplashScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import SignupScreen from "../screens/SignupScreen/SignupScreen";

const AuthStack = createNativeStackNavigator();

export type AuthStackParams = {
  LoginScreen: undefined;
  SignupScreen: undefined;
};

const AuthStackNavigation = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="SignupScreen" component={SignupScreen} />
    </AuthStack.Navigator>);
};

export default AuthStackNavigation;

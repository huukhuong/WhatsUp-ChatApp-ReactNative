import SplashScreen from "../screens/SplashScreen/SplashScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const RootStack = createNativeStackNavigator();

export type RootStackParams = {
  SplashScreen: undefined;
  HomeScreen: undefined;
};

const RootStackNavigation = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="HomeScreen" component={HomeScreen} />
    </RootStack.Navigator>);
};

export default RootStackNavigation;

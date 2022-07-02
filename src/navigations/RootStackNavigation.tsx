import SplashScreen from "../screens/SplashScreen/SplashScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatRoomScreen from "../screens/ChatRoom/ChatRoomScreen";
import CallScreen from "../screens/CallScreen/CallScreen";

export type RootStackParams = {
  SplashScreen: undefined
  HomeScreen: undefined
  LoginScreen: undefined
  ChatRoomScreen: { uid: string }
  CallScreen: { senderUid: string, receiverUid: string }
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const RootStackNavigation = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="HomeScreen" component={HomeScreen} />
      <RootStack.Screen name="ChatRoomScreen" component={ChatRoomScreen} />
      <RootStack.Screen name="CallScreen" component={CallScreen} />
    </RootStack.Navigator>);
};

export default RootStackNavigation;

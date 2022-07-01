import React from "react";
import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams } from "../../navigations/AuthStackNavigation";

type Props = NativeStackScreenProps<AuthStackParams>;

const SignupScreen = ({ navigation, route }: Props) => {
  return (
    <View>
    </View>
  );
};

export default SignupScreen;

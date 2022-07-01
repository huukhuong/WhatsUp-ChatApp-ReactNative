import React, { useState } from "react";
import { Image, StatusBar, Text, TextInput, View } from "react-native";
import styles from "./LoginScreen.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../utils/Themes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams } from "../../navigations/AuthStackNavigation";
import FormGroup from "../../components/FormGroup/FormGroup";

type Props = NativeStackScreenProps<AuthStackParams>;

const LoginScreen = ({ navigation, route }: Props) => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.DARK} />
      {/* LOGO */}
      <View style={styles.logoWrapper}>
        <Image
          source={require("../../assets/images/auth_logo.png")}
          style={styles.logo} />
      </View>
      {/* END LOGO */}

      <Text style={styles.title}>Login to your account</Text>

      <FormGroup
        value={email}
        label="Email address"
        icon="ios-mail-outline"
        placeholder="Enter your email address"
        onChangeText={(text) => {
          setEmail(text);
        }}
        isPassword={false}
        keyboardType="email-address"
        autoComplete="email" />

      <FormGroup
        value={password}
        label="Password"
        icon="ios-key-outline"
        placeholder="Enter your password"
        onChangeText={(text) => {
          setPassword(text);
        }}
        isPassword={false}
        keyboardType="default"
        autoComplete="password" />
    </SafeAreaView>
  );
};

export default LoginScreen;

import React, { useState } from "react";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import styles from "./LoginScreen.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../utils/Themes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams } from "../../navigations/AuthStackNavigation";
import FormGroup from "../../components/FormGroup/FormGroup";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import auth from "@react-native-firebase/auth";

type Props = NativeStackScreenProps<AuthStackParams>;

const LoginScreen = ({ navigation, route }: Props) => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onPressLogin = () => {
    if (email.trim().length > 0 && password.trim().length > 0) {
      auth().signInWithEmailAndPassword(email, password)
        .then(({ user }) => {
          console.log(user);
        })
        .catch(({ e }) => {
          console.log(e);
        });
    }
  };

  const onPressSignup = () => {
    navigation.navigate("SignupScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.DARK} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={"always"}>
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
          isPassword={true}
          keyboardType="default"
          autoComplete="password" />

        <PrimaryButton
          label={"Login"}
          onPress={onPressLogin} />

        <View style={styles.moreActionWrapper}>
          <Text style={styles.moreActionText}>Don't have an account?</Text>
          <TouchableOpacity
            activeOpacity={.6}
            onPress={onPressSignup}>
            <Text style={styles.moreActionButton}>Sign up</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

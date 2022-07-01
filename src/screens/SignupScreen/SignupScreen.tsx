import React, { useState } from "react";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import styles from "./SignupScreen.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../utils/Themes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams } from "../../navigations/AuthStackNavigation";
import FormGroup from "../../components/FormGroup/FormGroup";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import auth from "@react-native-firebase/auth";
import { Constants } from "../../utils/Constants";

type Props = NativeStackScreenProps<AuthStackParams>;

const Signup = ({ navigation, route }: Props) => {

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");

  const onPressSignup = () => {
    if (email.trim().length > 0 && password.trim().length > 0) {
      if (password === rePassword) {
        auth().createUserWithEmailAndPassword(email, password)
          .then(({ user }) => {
            auth().currentUser?.updateProfile({ displayName: name });
            Constants.database.ref("/users/" + user.uid)
              .set({
                uid: user.uid,
                email: user.email,
                name: name,
                avatar: "https://thucanh.vn/wp-content/uploads/2021/09/top-9-dia-chi-mua-meo-o-da-nang-uy-tin-va-bao-hanh-tot-nhat1-thucanh.vn_.jpg",
                isOnline: true,
              });
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }
  };

  const onPressLogin = () => {
    navigation.navigate("LoginScreen");
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

        <Text style={styles.title}>Sign up for free</Text>

        <FormGroup
          value={name}
          label="Your name"
          icon="person-outline"
          placeholder="Your display name"
          onChangeText={(text) => {
            setName(text);
          }}
          isPassword={false}
          keyboardType="default"
          autoComplete="name" />

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

        <FormGroup
          value={rePassword}
          label="Confirm Password"
          icon="ios-key-outline"
          placeholder="Re-type your password"
          onChangeText={(text) => {
            setRePassword(text);
          }}
          isPassword={true}
          keyboardType="default"
          autoComplete="password" />

        <PrimaryButton
          label={"Sign up"}
          onPress={onPressSignup} />

        <View style={styles.moreActionWrapper}>
          <Text style={styles.moreActionText}>Already have an account?</Text>
          <TouchableOpacity
            activeOpacity={.6}
            onPress={onPressLogin}>
            <Text style={styles.moreActionButton}>Sign in</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Signup;

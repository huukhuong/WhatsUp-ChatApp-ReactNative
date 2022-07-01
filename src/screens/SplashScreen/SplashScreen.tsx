import { View, Text, Image, StatusBar } from "react-native";
import React, { useEffect } from "react";
import styles from "./SplashSreen.styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Colors from "../../utils/Themes";
import { RootStackParams } from "../../navigations/RootStackNavigation";
import auth from "@react-native-firebase/auth";

type Props = NativeStackScreenProps<RootStackParams>;

const SplashScreen = ({ navigation }: Props) => {

  useEffect(() => {
    setTimeout(() => {
      if (auth().currentUser !== null) {
        goToHomeScreen();
      } else {
        goToLoginScreen();
      }
    }, 2000);
  }, []);

  const goToHomeScreen = () => {
    navigation.navigate("HomeScreen");
  };

  const goToLoginScreen = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.DARK} />
      <Image
        style={styles.background}
        source={require("../../assets/images/splash.png")} />
    </View>
  );
};

export default SplashScreen;

import { View, Text, Image, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import styles from './SplashSreen.styles';
import { RootStackParams } from '../../../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParams>;

const SplashScreen = ({ navigation }: Props) => {

  useEffect(() => {
    setTimeout(() => {
      goToHomeScreen()
    }, 2000);
  }, []);

  const goToHomeScreen = () => {
    navigation.navigate("HomeScreen",  {name: "HomeScreen"});
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#0D0D0D"} />
      <Image
        style={styles.background}
        source={require('../../assets/images/splash.png')} />
    </View>
  );
}

export default SplashScreen;
import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../App';
import styles from './HomeScreen.styles';

type Props = NativeStackScreenProps<RootStackParams>;

const HomeScreen = ({ navigation, route }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* APPBAR */}
      <View style={styles.appBar}>
      </View>
      {/* END APPBAR */}
    </SafeAreaView>
  );
}

export default HomeScreen;
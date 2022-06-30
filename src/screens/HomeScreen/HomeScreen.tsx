import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../App';
import styles from './HomeScreen.styles';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = NativeStackScreenProps<RootStackParams>;

const HomeScreen = ({ navigation, route }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* APPBAR */}
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>WhatsUp</Text>
        <TouchableOpacity activeOpacity={.7} style={styles.appBarButton}>
          <Icon name='facebook' size={18} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={.7} style={styles.appBarButton}>

        </TouchableOpacity>
      </View>
      {/* END APPBAR */}
    </SafeAreaView>
  );
}

export default HomeScreen;
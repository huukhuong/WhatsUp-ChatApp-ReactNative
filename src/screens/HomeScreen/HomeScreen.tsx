import { View, Text, SafeAreaView, TouchableOpacity, Image, Alert } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../App';
import styles from './HomeScreen.styles';
import { default as Ionicons } from 'react-native-vector-icons/Ionicons';
import { default as FontAwesome } from 'react-native-vector-icons/FontAwesome';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatsFragment from './ChatsFragment/ChatsFragment';
import CallsFragment from './CallsFragment/CallsFragment';

type Props = NativeStackScreenProps<RootStackParams>;

const TopTab = createMaterialTopTabNavigator();

const HomeScreen = ({ navigation, route }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* APPBAR */}
      <View style={styles.appBar}>
        <Image
          source={{ uri: "https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg" }}
          style={styles.userAvatar} />
        <Text style={styles.appBarTitle}>WhatsUp</Text>
        <TouchableOpacity
          activeOpacity={.7}
          style={styles.appBarButton}>
          <Ionicons
            name='search'
            size={16}
            color="#0EB676" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={.7}
          style={styles.appBarButton}>
          <FontAwesome
            name='sign-out'
            size={16}
            color="#0EB676" />
        </TouchableOpacity>
      </View>
      {/* END APPBAR */}
      
      <TopTab.Navigator>
        <TopTab.Screen name="Chats" component={ChatsFragment} />
        <TopTab.Screen name="Calls" component={CallsFragment} />
      </TopTab.Navigator>
      
    </SafeAreaView>
  );
}

export default HomeScreen;
import { View, Text, SafeAreaView, TouchableOpacity, Image, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import styles from "./HomeScreen.styles";
import { default as Ionicons } from "react-native-vector-icons/Ionicons";
import { default as FontAwesome } from "react-native-vector-icons/FontAwesome";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ChatsFragment from "./ChatsFragment/ChatsFragment";
import CallsFragment from "./CallsFragment/CallsFragment";
import Colors from "../../utils/Themes";
import { RootStackParams } from "../../navigations/RootStackNavigation";
import auth from "@react-native-firebase/auth";
import { User } from "../../models/User";
import { Constants } from "../../utils/Constants";
import { Helpers } from "../../utils/Helpers";

type Props = NativeStackScreenProps<RootStackParams>;

const TopTab = createMaterialTopTabNavigator();

const HomeScreen = ({ navigation, route }: Props) => {

  const [user, setUser] = useState<User | null>(null);

  const onPressLogout = () => {
    Helpers.setStatusToOffline();
    auth().signOut().then(r => {
    });
  };

  useEffect(() => {
    const uid = auth().currentUser?.uid;

    Constants.database.ref("/users/" + uid)
      .on("value", snapshot => {
        setUser(snapshot.val());
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* APPBAR */}
      <View style={styles.appBar}>
        <Image
          source={{ uri: user?.avatar }}
          style={styles.userAvatar} />
        <Text style={styles.appBarTitle}>WhatsUp</Text>
        <TouchableOpacity
          activeOpacity={.7}
          style={styles.appBarButton}>
          <Ionicons
            name="search"
            size={16}
            color={Colors.GREEN} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={.7}
          style={styles.appBarButton}
          onPress={onPressLogout}>
          <FontAwesome
            name="sign-out"
            size={16}
            color={Colors.GREEN} />
        </TouchableOpacity>
      </View>
      {/* END APPBAR */}

      <TopTab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Colors.GREEN,
          tabBarInactiveTintColor: Colors.LIGHT,
          tabBarIndicatorStyle: {
            backgroundColor: Colors.GREEN,
          },
          tabBarLabelStyle: {
            fontWeight: "bold",
            fontSize: 16,
          },
          tabBarStyle: {
            backgroundColor: Colors.DARK,
            borderBottomColor: Colors.LIGHT_1,
          },
        }}>
        <TopTab.Screen name=" Chats" component={ChatsFragment} />
        <TopTab.Screen name=" Calls" component={CallsFragment} />
      </TopTab.Navigator>

    </SafeAreaView>
  );
};

export default HomeScreen;

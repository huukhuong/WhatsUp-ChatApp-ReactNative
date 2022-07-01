import React, { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigations/RootStackNavigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./ChatRoomScreen.styles";
import Colors from "../../utils/Themes";
import Icon from "react-native-vector-icons/Ionicons";
import Ripple from "react-native-material-ripple";
import { Constants } from "../../utils/Constants";
import { User } from "../../models/User";
import MessageItem from "../../components/MessageItem/MessageItem";
import auth from "@react-native-firebase/auth";
import { Helpers } from "../../utils/Helpers";

type Props = NativeStackScreenProps<RootStackParams>;

interface Chat {
  senderUid: string
  receiverUid: string
  content: string
  timestamp: number
}

const ChatRoomScreen = ({ navigation, route }: Props) => {

  const [receiverUser, setReceiverUser] = useState<User>();
  const [chatList, setChatList] = useState<[Chat]>(
    // @ts-ignore
    [
      {
        senderUid: "JtBvUWvRbFeAs6FiNlovtuc1i0s2",
        receiverUid: "XlGzv2H62SVn28CSU8Qhk8bZdiZ2",
        content: "Hi",
        timestamp: Helpers.getCurrentTimestamp(),
      },
      {
        senderUid: "XlGzv2H62SVn28CSU8Qhk8bZdiZ2",
        receiverUid: "JtBvUWvRbFeAs6FiNlovtuc1i0s2",
        content: "Hello?",
        timestamp: Helpers.getCurrentTimestamp(),
      },
    ]);

  useEffect(() => {
    // @ts-ignore
    const uid = route.params?.uid;

    Constants.database.ref("/users/" + uid)
      .on("value", snapshot => {
        setReceiverUser(snapshot.val());
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* APPBAR */}
      <View style={styles.appBar}>

        <Ripple
          rippleColor={Colors.LIGHT_2}
          style={styles.btnBack}
          onPress={() => navigation.goBack()}>
          <Icon
            name={"arrow-back-outline"}
            size={24}
            color={Colors.GREEN} />
        </Ripple>

        <View style={styles.appBarAvatarWrapper}>
          <Image
            source={{ uri: receiverUser?.avatar }}
            style={styles.appBarAvatar} />

          <View style={styles.appBarOnline}>
            <Icon
              name={"ellipse"}
              size={12}
              color={receiverUser?.isOnline ? Colors.GREEN : Colors.LIGHT_3} />
          </View>
        </View>

        <Text
          style={styles.appBarTitle}
          numberOfLines={1}>
          {receiverUser?.name}
        </Text>

        <TouchableOpacity
          activeOpacity={.7}
          style={styles.appBarButton}
          onPress={() => {
          }}>
          <Icon
            name="ios-call"
            size={16}
            color={Colors.GREEN} />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={.7}
          style={styles.appBarButton}
          onPress={() => {
          }}>
          <Icon
            name="ios-videocam"
            size={16}
            color={Colors.GREEN} />
        </TouchableOpacity>

      </View>
      {/* END APPBAR */}

      <Image
        source={require("../../assets/images/backgroundChat.png")}
        style={styles.background} />

      {/*  MESSAGES LIST */}
      <FlatList
        style={{ zIndex: 10 }}
        data={chatList}
        renderItem={({ item, index }) =>
          <MessageItem
            content={item.content}
            timestamp={item.timestamp}
            isSender={item.senderUid === auth().currentUser?.uid} />
        } />

      {/* END  MESSAGES LIST */}

      {/*  FORM */}
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          placeholder={"Type message..."}
          placeholderTextColor={Colors.LIGHT_3}
          multiline
        />
        <View style={styles.btnSend}>
          <Ripple
            style={styles.btnSend}
            rippleColor={Colors.LIGHT_1}>
            <Icon
              name={"ios-send"}
              size={18}
              color={Colors.LIGHT} />
          </Ripple>
        </View>
      </View>
      {/* END  FORM */}
    </SafeAreaView>
  );
};

export default ChatRoomScreen;

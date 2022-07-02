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
import { ChatMessage } from "../../models/ChatMessage";

type Props = NativeStackScreenProps<RootStackParams, "ChatRoomScreen">;

const ChatRoomScreen = ({ navigation, route }: Props) => {

  const [receiverUser, setReceiverUser] = useState<User>();
  const [chatList, setChatList] = useState<ChatMessage[]>([]);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    // Listening receiver user change
    const receiverUid: string = route.params?.uid;
    Constants.database.ref("/users/" + receiverUid)
      .on("value", snapshot => {
        setReceiverUser(snapshot.val());

        // Listening chat messages change
        const senderUid = auth().currentUser?.uid;
        Constants.database
          .ref("/chats/" + senderUid + "_" + receiverUid)
          .on("value", snapshot => {
            const listChat: ChatMessage[] = [...chatList];
            // @ts-ignore
            snapshot.forEach(item => {
              listChat.push(item.val());
            });
            setChatList(listChat);
          });
      });
  }, []);

  const sendMessage = () => {
    const senderUid = auth().currentUser?.uid;
    const receiverUid = receiverUser?.uid;
    const currentTimestamp = Helpers.getCurrentTimestamp();

    if (message.trim().length > 0) {
      const chat = {
        senderUid: senderUid,
        receiverUid: receiverUid,
        content: message,
        timestamp: currentTimestamp,
      };

      // chats/user1_user2
      Constants.database
        .ref("/chats/" + senderUid + "_" + receiverUid + "/" + currentTimestamp)
        .set(chat);

      // chats/user2_user1
      Constants.database
        .ref("/chats/" + receiverUid + "_" + senderUid + "/" + currentTimestamp)
        .set(chat);

      setMessage("");
    }
  };

  const HeaderFlatList = () => {
    return <View style={{ height: 20 }} />;
  };

  const onPressCallButton = () => {
    navigation.navigate("CallScreen", {
      senderUid: auth().currentUser?.uid!,
      receiverUid: route.params?.uid,
      isVideoCall: false,
      isSender: true,
    });
  };

  const onPressVideoCallButton = () => {
    navigation.navigate("CallScreen", {
      senderUid: auth().currentUser?.uid!,
      receiverUid: route.params?.uid,
      isVideoCall: true,
      isSender: true,
    });
  };

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
          onPress={onPressCallButton}>
          <Icon
            name="ios-call"
            size={16}
            color={Colors.GREEN} />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={.7}
          style={styles.appBarButton}
          onPress={onPressVideoCallButton}>
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
        ListHeaderComponent={HeaderFlatList}
        data={chatList}
        renderItem={({ item, index }) =>
          <MessageItem
            key={index}
            content={item.content}
            timestamp={item.timestamp}
            isSender={item.senderUid === auth().currentUser?.uid} />
        } />

      {/* END  MESSAGES LIST */}

      {/*  FORM */}
      <View style={styles.formGroup}>
        <TextInput
          value={message}
          onChangeText={text => setMessage(text)}
          style={styles.input}
          placeholder={"Type message..."}
          placeholderTextColor={Colors.LIGHT_3}
          multiline
        />
        <View style={styles.btnSend}>
          <Ripple
            style={styles.btnSend}
            rippleColor={Colors.LIGHT_1}
            onPress={sendMessage}>
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

import { View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./ChatsFragment.styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { User } from "../../../models/User";
import UserItem from "../../../components/UserItem/UserItem";
import { RootStackParams } from "../../../navigations/RootStackNavigation";
import { Constants } from "../../../utils/Constants";
import auth from "@react-native-firebase/auth";
import { LastMessage } from "../../../models/LastMessage";

type Props = NativeStackScreenProps<RootStackParams>;

const ChatsFragment = ({ navigation, route }: Props) => {

  const [usersList, setUsersList] = useState<User[]>([]);
  const [lastMessagesList, setLastMessagesList] = useState<LastMessage[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    // when user online/offline/change_avatar
    Constants.database.ref("/users/")
      .on("value", snapshot => {
        const array: any[] | ((prevState: [User] | undefined) => [User] | undefined) | undefined = [];
        // @ts-ignore
        snapshot.forEach(item => {
          if (item.val().uid !== auth().currentUser?.uid && item.val() != undefined) {
            const userValue = item.val();
            array.push(userValue);

            // listener last message send
            Constants.database
              .ref("/chats/" + auth().currentUser?.uid + "_" + userValue.uid)
              .limitToLast(1)
              .on("value", snapshot => {
                const listLastMessage: LastMessage[] = [];
                // @ts-ignore
                snapshot.forEach(item => {
                  const value = item.val();
                  if (value != null) {
                    const lastMessage: LastMessage = {
                      uid: userValue.uid,
                      lastMessage: value.content,
                      timestamp: value.timestamp,
                    };
                    listLastMessage.push(lastMessage);
                  }
                });
                setLastMessagesList(listLastMessage);
              });
          }
        });
        // @ts-ignore
        setUsersList(array);
      });
  }, []);

  const pullToRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const onPressUser = (uid: string) => {
    navigation.navigate("ChatRoomScreen", { uid: uid });
  };

  return (
    <View style={styles.container}>
      <FlatList
        refreshing={refreshing}
        onRefresh={pullToRefresh}
        data={usersList}
        renderItem={({ item, index }) => {
          return (
            <UserItem
              key={index}
              uid={item.uid}
              name={item.name}
              avatar={item.avatar}
              isOnline={item.isOnline}
              lastMessages={lastMessagesList}
              onPress={() => onPressUser(item.uid)} />
          );
        }} />
    </View>
  );
};

export default ChatsFragment;

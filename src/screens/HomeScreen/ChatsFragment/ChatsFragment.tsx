import { View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./ChatsFragment.styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { User } from "../../../models/User";
import UserItem from "../../../components/UserItem/UserItem";
import { RootStackParams } from "../../../navigations/RootStackNavigation";
import { Constants } from "../../../utils/Constants";
import auth from "@react-native-firebase/auth";

type Props = NativeStackScreenProps<RootStackParams>;

const ChatsFragment = ({ navigation, route }: Props) => {

  const [usersList, setUsersList] = useState<[User]>();
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    Constants.database.ref("/users/")
      .on("value", snapshot => {
        const array: any[] | ((prevState: [User] | undefined) => [User] | undefined) | undefined = [];
        // @ts-ignore
        snapshot.forEach(item => {
          if (item.val().uid !== auth().currentUser?.uid) {
            array.push(item.val());
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
        renderItem={({ item, index }) => (
          <UserItem
            key={index}
            name={item.name}
            avatar={item.avatar}
            isOnline={item.isOnline}
            lastMessage="Hello"
            time="0:00"
            onPress={() => onPressUser(item.uid)} />
        )} />
    </View>
  );
};

export default ChatsFragment;

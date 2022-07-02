import { Image, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./UserItem.styles";
import Icon from "react-native-vector-icons/Ionicons";
import Ripple from "react-native-material-ripple";
import Colors from "../../utils/Themes";
import { Helpers } from "../../utils/Helpers";
import { LastMessage } from "../../models/LastMessage";

interface Props {
  uid: string,
  avatar: string,
  name: string,
  isOnline: boolean,
  onPress: () => void,
  lastMessages: any
}

const UserItem: React.FC<Props> = ({ uid, avatar, name, isOnline, onPress, lastMessages }) => {

  const lastMessage = lastMessages.map((item: LastMessage) => {
    if (item.uid === uid) {
      return item.lastMessage;
    }
  });

  const timestamp = lastMessages.map((item: LastMessage) => {
    if (item.uid === uid) {
      return Helpers.timestampToHour(item.timestamp);
    }
  });

  return (
    <Ripple
      onPress={onPress}
      style={styles.container}
      rippleColor={"#d9d9d9"}>

      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: avatar }}
          style={styles.avatar} />

        <View style={styles.active}>
          <Icon
            name="ellipse"
            size={14}
            color={isOnline ? Colors.GREEN : Colors.LIGHT_3} />
        </View>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.row}>
          <Text style={styles.txtName}>
            {name}
          </Text>
          <Text style={styles.txtTime}>
            {timestamp}
          </Text>
        </View>
        <View style={styles.row}>
          <Text
            style={styles.txtLastMassage}
            numberOfLines={1}>
            {
              lastMessage.toString().length === 0 ? "Send first message to " + name : lastMessage
            }
          </Text>
          <Icon
            name="checkmark"
            size={16}
            color={Colors.GREEN} />
        </View>
      </View>
    </Ripple>
  );
};

export default UserItem;


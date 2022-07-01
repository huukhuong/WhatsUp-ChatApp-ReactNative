import React from "react";
import { Text, View } from "react-native";
import { Helpers } from "../../utils/Helpers";
import styles from "./MessageItem.styles";

interface Props {
  content: string,
  timestamp: number,
  isSender: boolean
}

const MessageItem: React.FC<Props> = ({ content, timestamp, isSender }) => {
  return (
    <View style={styles.container}>
      {
        isSender ? <View style={{ flex: 1 }} /> : null
      }
      <View style={[styles.contentWrapper, isSender ? styles.senderContent : styles.receiverContent]}>
        <Text style={styles.contentText}>{content}</Text>
        <View style={styles.timeWrapper}>
          <Text style={styles.timeText}>{Helpers.timestampToHour(timestamp)}</Text>
        </View>
      </View>
    </View>
  );
};

export default MessageItem;

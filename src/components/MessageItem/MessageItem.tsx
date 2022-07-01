import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Colors from "../../utils/Themes";
import { Helpers } from "../../utils/Helpers";

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

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    zIndex: 10,
    marginVertical: 4,
    alignSelf: "flex-start",
    flexDirection: "row",
  },
  contentWrapper: {
    minWidth: 10,
    maxWidth: width * .6,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 10,
    flexDirection: "row",
  },
  senderContent: {
    backgroundColor: Colors.GREEN,
  },
  receiverContent: {
    backgroundColor: "#28323C",
  },
  contentText: {
    fontSize: 16,
    color: Colors.LIGHT,
  },
  timeWrapper: {
    justifyContent: "center",
    marginStart: 14,
  },
  timeText: {
    color: Colors.LIGHT_1,
    fontSize: 10,
  },
});

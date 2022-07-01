import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../utils/Themes";

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

export default styles;

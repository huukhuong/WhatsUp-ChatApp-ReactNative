import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../utils/Themes";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DARK,
  },
  appBar: {
    flexDirection: "row",
    alignItems: "center",
    height: 75,
    paddingEnd: 24,
    paddingStart: 8,
    borderBottomWidth: .5,
    borderBottomColor: Colors.LIGHT_3,
    zIndex: 10,
    backgroundColor: Colors.DARK,
  },
  btnBack: {
    width: 50,
    height: 50,
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  appBarAvatarWrapper: {
    width: 40,
    height: 40,
    marginEnd: 8,
  },
  appBarAvatar: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 200,
  },
  appBarOnline: {
    position: "absolute",
    backgroundColor: Colors.DARK,
    borderRadius: 100,
    bottom: 0,
    right: 0,
    paddingTop: .1,
    paddingLeft: .5,
  },
  appBarTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.LIGHT,
    flex: 1,
  },
  appBarButton: {
    width: 40,
    height: 40,
    backgroundColor: Colors.LIGHT_GREEN,
    marginStart: 10,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  formGroup: {
    flexDirection: "row",
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    paddingVertical: 18,
    paddingHorizontal: 14,
    borderTopWidth: .5,
    borderTopColor: Colors.LIGHT_3,
    zIndex: 10,
    backgroundColor: Colors.DARK,
  },
  input: {
    flex: 1,
    color: Colors.LIGHT,
    backgroundColor: Colors.DARK_GREEN,
    borderColor: Colors.LIGHT_3,
    borderWidth: .6,
    borderRadius: 14,
    fontSize: 16,
    maxHeight: 100,
    paddingHorizontal: 12,
    marginEnd: 10,
  },
  btnSend: {
    backgroundColor: Colors.GREEN,
    width: 50,
    height: 50,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width,
    height: height,
    resizeMode: "repeat",
    zIndex: 1,
    opacity: .6,
  },
});

export default styles;

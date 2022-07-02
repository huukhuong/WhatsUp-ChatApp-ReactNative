import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../utils/Themes";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DARK
  },
  background: {
    top: 0,
    left: 0,
    width: width,
    height: height,
    resizeMode: "cover",
    opacity: .6
  },
  avatarWrapper: {
    position: "absolute",
    top: 150,
    left: 0,
    width: width,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 60
  },
  name: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.LIGHT
  },
  controlWrapper: {
    position: "absolute",
    bottom: 50,
    left: 0,
    width: width,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  btnControl: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "rgba(255, 255, 255, .2)",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15
  },
  btnCamera: {
    position: "absolute",
    top: 50,
    right: 10
  }
});

export default styles;

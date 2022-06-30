import { Dimensions, StyleSheet } from "react-native";
const width  = Dimensions.get('window').width;
const height  = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D"
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width,
    height: height,
    resizeMode: "cover"
  }
});

export default styles;
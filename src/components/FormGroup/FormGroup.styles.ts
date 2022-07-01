import { StyleSheet } from "react-native";
import Colors from "../../utils/Themes";

const styles = StyleSheet.create({
  formGroup: {
    marginVertical: 10,
    paddingHorizontal: 24,
  },
  formLabel: {
    color: Colors.LIGHT_1,
    marginStart: 18,
  },
  formControlWrapper: {
    borderWidth: 1,
    borderColor: Colors.GREEN,
    backgroundColor: Colors.DARK_GREEN,
    marginTop: 10,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    height: 50,
    overflow: "hidden",
  },
  formControl: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    color: Colors.LIGHT,
    fontSize: 16,
    zIndex: 100,
    borderRadius: 200,
    paddingStart: 18 * 3,
    paddingEnd: 18,
  },
});

export default styles;

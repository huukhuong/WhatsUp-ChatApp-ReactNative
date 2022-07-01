import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../utils/Themes";

const styles = StyleSheet.create({
  btnWrapper: {
    marginTop: 20,
    marginHorizontal: 24,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.GREEN,
    borderRadius: 100,
  },
  btnPrimary: {
    color: Colors.LIGHT,
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 4,
  },
});

export default styles;

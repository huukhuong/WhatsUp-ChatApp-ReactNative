import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../utils/Themes";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DARK,
  },
  logoWrapper: {
    width: width,
    height: height * .3,
    padding: 20,
  },
  logo: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  title: {
    color: Colors.LIGHT,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 20,
  },
});

export default styles;

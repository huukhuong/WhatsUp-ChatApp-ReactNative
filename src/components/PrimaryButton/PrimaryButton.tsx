import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./PrimaryButton.styles";

interface Props {
  label: string
  onPress: () => void
}

const PrimaryButton: React.FC<Props> = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.btnWrapper}
      activeOpacity={.8}
      onPress={onPress}>
      <Text style={styles.btnPrimary}>{label}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

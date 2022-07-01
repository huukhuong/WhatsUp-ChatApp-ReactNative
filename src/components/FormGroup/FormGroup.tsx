import { Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Colors from "../../utils/Themes";
import React from "react";
import styles from "./FormGroup.styles";

interface Props {
  label: string
  icon: string
  placeholder: string
  value: string
  onChangeText: (text: string) => void
  isPassword: boolean
  keyboardType: any
  autoComplete: any
}

const FormGroup:
  React.FC<Props> = ({
                       label,
                       icon,
                       placeholder,
                       value,
                       onChangeText,
                       isPassword,
                       keyboardType,
                       autoComplete,
                     }) => {
  return (
    <View style={styles.formGroup}>
      <Text style={styles.formLabel}>{label}</Text>
      <View style={styles.formControlWrapper}>
        <Icon
          name={icon}
          color={Colors.LIGHT_1}
          size={22} />
        <TextInput
          style={styles.formControl}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={Colors.LIGHT_3}
          numberOfLines={1}
          onChangeText={onChangeText}
          secureTextEntry={isPassword}
          keyboardType={keyboardType}
          autoComplete={autoComplete}
          autoCapitalize={"none"} />
      </View>
    </View>
  );
};

export default FormGroup;

import React, { useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigations/RootStackNavigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./ChatRoomScreen.styles";
import Colors from "../../utils/Themes";
import Icon from "react-native-vector-icons/Ionicons";
import Ripple from "react-native-material-ripple";

type Props = NativeStackScreenProps<RootStackParams>;

const ChatRoomScreen = ({ navigation, route }: Props) => {

  useEffect(() => {

  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* APPBAR */}
      <View style={styles.appBar}>

        <Ripple
          rippleColor={Colors.LIGHT_2}
          style={styles.btnBack}
          onPress={() => navigation.goBack()}>
          <Icon
            name={"arrow-back-outline"}
            size={24}
            color={Colors.GREEN} />
        </Ripple>

        <View style={styles.appBarAvatarWrapper}>
          <Image
            source={{ uri: "https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg" }}
            style={styles.appBarAvatar} />

          <View style={styles.appBarOnline}>
            <Icon
              name={"ellipse"}
              size={12}
              color={Colors.GREEN} />
          </View>
        </View>

        <Text
          style={styles.appBarTitle}
          numberOfLines={1}>
          Adam Smith
        </Text>

        <TouchableOpacity
          activeOpacity={.7}
          style={styles.appBarButton}
          onPress={() => {
          }}>
          <Icon
            name="ios-call"
            size={16}
            color={Colors.GREEN} />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={.7}
          style={styles.appBarButton}
          onPress={() => {
          }}>
          <Icon
            name="ios-videocam"
            size={16}
            color={Colors.GREEN} />
        </TouchableOpacity>

      </View>
      {/* END APPBAR */}

      <Image
        source={require("../../assets/images/backgroundChat.png")}
        style={styles.background} />

      {/*  MESSAGES LIST */}

      {/* END  MESSAGES LIST */}

      {/*  FORM */}
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          placeholder={"Type message..."}
          placeholderTextColor={Colors.LIGHT_3}
          multiline
        />
        <View style={styles.btnSend}>
          <Ripple
            style={styles.btnSend}
            rippleColor={Colors.LIGHT_1}>
            <Icon
              name={"ios-send"}
              size={18}
              color={Colors.LIGHT} />
          </Ripple>
        </View>
      </View>
      {/* END  FORM */}
    </SafeAreaView>
  );
};

export default ChatRoomScreen;

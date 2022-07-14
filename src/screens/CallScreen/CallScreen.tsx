import React, { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigations/RootStackNavigation";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { Constants } from "../../utils/Constants";
import { Helpers } from "../../utils/Helpers";
import auth from '@react-native-firebase/auth'
import styles from "./CallScreen.styles";
import { default as Icon } from "react-native-vector-icons/Ionicons";

type Props = NativeStackScreenProps<RootStackParams, "CallScreen">;

const CallScreen = ({ navigation, route }: Props) => {

  const { senderUid, receiverUid, isVideoCall } = route.params;
  const [isCalling, setIsCalling] = useState(false);
  const [isPeding, setIsPeding] = useState(false);

  useEffect(() => {
    disableGoBack();
    updateCallsDataOnFirebase();
  }, []);

  const disableGoBack = () => {

  }

  const updateCallsDataOnFirebase = () => {
    if (senderUid === auth().currentUser?.uid) {
      const callingData = {
        senderUid: senderUid,
        receiverUid: receiverUid,
        timestamp: Helpers.getCurrentTimestamp(),
        isPending: true,
        isCalling: false,
        isVideoCall: isVideoCall
      }
      Constants.database
        .ref("/calls/" + senderUid + "_" + receiverUid)
        .set(callingData);
      Constants.database
        .ref("/calls/" + receiverUid + "_" + senderUid)
        .set(callingData);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={'rgba(0, 0, 0, .2)'} />
      <Image
        source={{ uri: 'https://fridaycat.com.vn/wp-content/uploads/2021/04/meo-muop-giong-meo-pho-bien-tren-the-gioi.jpg' }}
        blurRadius={5}
        style={styles.background} />

      <TouchableOpacity
        style={[styles.btnControl, styles.btnCamera]}
        activeOpacity={1}>
        <Icon
          name="ios-videocam"
          size={25}
          color={"#fff"} />
      </TouchableOpacity>

      <View style={styles.avatarWrapper}>
        <Image
          source={{ uri: 'https://fridaycat.com.vn/wp-content/uploads/2021/04/meo-muop-giong-meo-pho-bien-tren-the-gioi.jpg' }}
          style={styles.avatar} />

        <Text style={styles.name}>Adam Smith</Text>
      </View>

      <View style={styles.controlWrapper}>
        <TouchableOpacity
          style={styles.btnControl}
          activeOpacity={1}>
          <Icon
            name="ios-volume-low"
            size={30}
            color={"#fff"} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnControl}
          activeOpacity={1}>
          <Icon
            name="ios-mic"
            size={30}
            color={"#fff"} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btnControl, { backgroundColor: '#FE294D' }]}
          activeOpacity={1}>
          <Icon
            style={{
              transform: [{ rotate: "135deg" }]
            }}
            name="ios-call"
            size={30}
            color={"#fff"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CallScreen;

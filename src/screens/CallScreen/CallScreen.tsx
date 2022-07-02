import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigations/RootStackNavigation";
import { Text } from "react-native";
import { Constants } from "../../utils/Constants";
import { Helpers } from "../../utils/Helpers";

type Props = NativeStackScreenProps<RootStackParams, "CallScreen">;

const CallScreen = ({ navigation, route }: Props) => {

  const { senderUid, receiverUid, isVideoCall } = route.params;

  useEffect(() => {
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
  }, []);

  return (
    <SafeAreaView>
      <Text>{senderUid + " || " + receiverUid + " || " + isVideoCall}</Text>
    </SafeAreaView>
  );
};
export default CallScreen;

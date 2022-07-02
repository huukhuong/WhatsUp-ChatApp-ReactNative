import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigations/RootStackNavigation";

type Props = NativeStackScreenProps<RootStackParams, "CallScreen">;

const CallScreen = ({ navigation, route }: Props) => {

  const { senderUid, receiverUid } = route.params;

  return (
    <SafeAreaView>

    </SafeAreaView>
  );
};
export default CallScreen;

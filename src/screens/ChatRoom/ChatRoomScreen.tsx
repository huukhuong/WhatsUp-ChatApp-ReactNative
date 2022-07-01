import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigations/RootStackNavigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

type Props = NativeStackScreenProps<RootStackParams>;

const ChatRoomScreen = ({ navigation, route }: Props) => {
  return (
    <SafeAreaView>
      <Text>{route.params?.uid}</Text>
    </SafeAreaView>
  );
};

export default ChatRoomScreen;

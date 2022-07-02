import {Image, Text, View} from "react-native";
import React, {useState} from "react";
import styles from "./UserItem.styles";
import Icon from "react-native-vector-icons/Ionicons";
import Ripple from "react-native-material-ripple";
import Colors from "../../utils/Themes";
import {Helpers} from "../../utils/Helpers";
import {Constants} from "../../utils/Constants";
import auth from "@react-native-firebase/auth";

interface Props {
    uid: string,
    avatar: string,
    name: string,
    isOnline: boolean,
    onPress: () => void,
}

const UserItem: React.FC<Props> = ({uid, avatar, name, isOnline, onPress}) => {

    const [lastMessage, setLastMessage] = useState<string>("")
    const [timestamp, setTimestamp] = useState<number>(0)

    Constants.database
        .ref("/chats/" + uid + "_" + auth().currentUser?.uid)
        .limitToLast(1)
        .on('value', snapshot => {
            if (snapshot != null) {
                // @ts-ignore
                snapshot.forEach(child => {
                    const {content, receiverUid, senderUid, timestamp} = child.val();
                    if (uid === receiverUid || uid === senderUid) {
                        setLastMessage(content);
                        setTimestamp(timestamp);
                    }
                })
            } else {
                setLastMessage("");
                setTimestamp(0);
            }
        });

    return (
        <Ripple
            onPress={onPress}
            style={styles.container}
            rippleColor={"#d9d9d9"}>

            <View style={styles.avatarContainer}>
                <Image
                    source={{uri: avatar}}
                    style={styles.avatar}/>

                <View style={styles.active}>
                    <Icon
                        name="ellipse"
                        size={14}
                        color={isOnline ? Colors.GREEN : Colors.LIGHT_3}/>
                </View>
            </View>

            <View style={styles.contentContainer}>
                <View style={styles.row}>
                    <Text style={styles.txtName}>
                        {name}
                    </Text>
                    <Text style={styles.txtTime}>
                        {timestamp != 0 ? Helpers.timestampToHour(timestamp) : ""}
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text
                        style={styles.txtLastMassage}
                        numberOfLines={1}>
                        {
                            lastMessage === "" ? "Send first message to " + name : lastMessage
                        }
                    </Text>
                    {/*<Icon*/}
                    {/*    name="checkmark"*/}
                    {/*    size={16}*/}
                    {/*    color={Colors.GREEN}/>*/}
                </View>
            </View>
        </Ripple>
    );
};

export default UserItem;


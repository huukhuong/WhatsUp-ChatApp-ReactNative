import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './UserItem.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Ripple from 'react-native-material-ripple';

interface Props {
  avatar: string,
  name: string,
  lastMessage: string,
  time: string,
  isOnline: boolean,
  onPress: () => void
}

const UserItem: React.FC<Props> = ({ avatar, name, lastMessage, time, isOnline, onPress }) => {
  return (
    <Ripple
      onPress={onPress}
      style={styles.container}
      rippleColor={"#d9d9d9"}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: avatar }}
          style={styles.avatar} />

        {
          isOnline
            ?
            <View style={styles.active}>
              <Icon
                name='ellipse'
                size={14}
                color='#05E28D' />
            </View>
            :
            null
        }
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.row}>
          <Text style={styles.txtName}>{name}</Text>
          <Text style={styles.txtTime}>{time}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.txtLastMassage}>{lastMessage}</Text>
          <Icon
            name='checkmark'
            size={16}
            color='#05E28D' />
        </View>
      </View>
    </Ripple>
  );
}

export default UserItem;


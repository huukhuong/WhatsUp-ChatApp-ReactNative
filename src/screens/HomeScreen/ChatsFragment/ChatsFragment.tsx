import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import styles from './ChatsFragment.styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../../App';
import { User } from '../../../models/User';
import UserItem from '../../../components/UserItem/UserItem';

type Props = NativeStackScreenProps<RootStackParams>;

const ChatsFragment = ({ navigation, route }: Props) => {

  const [usersList, setUsersList] = useState<[User]>([
    {
      uid: "dasudaiudiw",
      name: "Admin",
      email: "admin@gmail.com",
      avatar: "https://daohieu.com/wp-content/uploads/2020/05/meo-con.jpg",
      isOnline: true
    }
  ]);

  const [refreshing, setRefreshing] = useState<boolean>(false);

  const pullToRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }

  return (
    <View style={styles.container}>
      <FlatList
        refreshing={refreshing}
        onRefresh={pullToRefresh}
        data={usersList}
        renderItem={({ item, index }) => (
          <UserItem
            key={index}
            name={item.name}
            avatar={item.avatar}
            isOnline={item.isOnline}
            lastMessage="Hello"
            time='20:00'
            onPress={() => { console.log(`Press user ${index}`) }} />
        )} />
    </View>
  );
}

export default ChatsFragment;
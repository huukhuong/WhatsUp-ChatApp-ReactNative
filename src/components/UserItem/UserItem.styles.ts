import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 6
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },
  avatarContainer: {
    width: 55,
    height: 55,
    marginEnd: 12
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 35,
    resizeMode: 'cover'
  },
  active: {
    position: 'absolute',
    bottom: 0,
    right: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#000",
    borderRadius: 100,
    paddingLeft: 1,
    paddingTop: .6
  },
  contentContainer: {
    height: 70,
    justifyContent: 'space-between',
    paddingVertical: 4,
    flex: 1
  },
  txtName: {
    color: '#fafafa',
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1
  },
  txtLastMassage: {
    color: '#9a9a9a',
    fontSize: 15,
    flex: 1
  },
  txtTime: {
    color: "#868686"
  }
});

export default styles;
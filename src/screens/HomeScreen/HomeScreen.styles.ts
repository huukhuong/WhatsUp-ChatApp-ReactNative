import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D"
  },
  appBar: {
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    // backgroundColor: "#ccc"
  },
  userAvatar: {
    width: 45,
    height: 45,
    borderRadius: 30,
    resizeMode: "cover",
    marginEnd: 10
  },
  appBarTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
  },
  appBarButton: {
    width: 40,
    height: 40,
    backgroundColor: "#0F211D",
    marginStart: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;
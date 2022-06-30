import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D"
  },
  appBar: {
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    // backgroundColor: "#ccc"
  },
  appBarTitle: {
    color: '#fff',
    fontSize: 24,
    flex: 1,
  },
  appBarButton: {
    width: 40,
    height: 40,
    backgroundColor: "#0F211D",
    marginStart: 14,
    borderRadius: 15
  }
});

export default styles;
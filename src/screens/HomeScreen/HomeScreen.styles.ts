import { StyleSheet } from 'react-native';
import Colors from '../../utils/Themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DARK
  },
  appBar: {
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  userAvatar: {
    width: 45,
    height: 45,
    borderRadius: 30,
    resizeMode: "cover",
    marginEnd: 10
  },
  appBarTitle: {
    color: Colors.LIGHT,
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
  },
  appBarButton: {
    width: 40,
    height: 40,
    backgroundColor: Colors.LIGHT_GREEN,
    marginStart: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;
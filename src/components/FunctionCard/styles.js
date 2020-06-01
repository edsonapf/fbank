import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#1B1D28',
    borderRadius: 20,
    width: 125,
    height: 125,
    marginTop: 16,
    justifyContent: 'space-between',
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  background: {
    backgroundColor: '#000000',
    borderBottomLeftRadius: 100,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 10,
    position: 'absolute',
    height: 100,
    width: 90,
    marginLeft: 35,
  },
  functionImageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 8,
  },
  text: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default styles;

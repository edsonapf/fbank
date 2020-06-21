import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexGrow: 1,
    paddingTop: 32,
    paddingHorizontal: 8,
  },
  titleText: {
    color: '#000000',
    fontSize: 20,
  },
  input: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    fontSize: 20,
    marginTop: 16,
  },
  button: {
    marginTop: 128,
    backgroundColor: '#000000',
    borderRadius: 50,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
});

export default styles;

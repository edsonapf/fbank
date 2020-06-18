import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 128,
  },
  titleText: {
    color: '#000000',
    fontSize: 20,
  },
  input: {
    marginTop: 128,
    marginBottom: 128,
    borderBottomColor: '#000000',
    borderBottomWidth: 2,
    fontSize: 20,
  },
  button: {
    backgroundColor: '#000000',
    borderRadius: 50,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;

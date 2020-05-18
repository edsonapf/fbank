import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scroll: {
    flexGrow: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  inputTitles: {
    fontSize: 18,
    fontFamily: 'Gibson',
    color: '#000000',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#E5E5E5',
    borderRadius: 50,
    width: '100%',
    marginBottom: 20,
    paddingLeft: 15,
  },
  button: {
    backgroundColor: '#000000',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
  },
  footerText: {
    fontSize: 18,
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
});

export default styles;

import {StyleSheet, Dimensions} from 'react-native';

const heightScreen = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width;

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
    marginBottom: 15,
    marginLeft: 5,
  },
  input: {
    backgroundColor: '#E5E5E5',
    borderRadius: 50,
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
    marginBottom: 80,
  },
  footerText: {
    fontSize: 18,
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  backdrop: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.4)',
    height: heightScreen,
    width: widthScreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;

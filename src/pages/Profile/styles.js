import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imageContainer: {
    paddingVertical: 32,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  image: {
    height: 110,
    width: 110,
    borderRadius: 75,
  },
  name: {
    marginTop: 16,
    fontSize: 20,
    fontWeight: 'bold',
  },
  accountInformationContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 32,
    flexGrow: 1,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 100,
    marginTop: 32,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default styles;

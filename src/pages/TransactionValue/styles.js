import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 16,
  },
  titleText: {
    color: '#000000',
    fontSize: 20,
  },
  balanceText: {
    color: '#6C7B8A',
    fontSize: 40,
  },
  input: {
    marginTop: 64,
    marginBottom: 128,
    borderBottomColor: '#000000',
    borderBottomWidth: 2,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
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

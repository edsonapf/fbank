import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'space-around',
    paddingVertical: 32,
    paddingHorizontal: 8,
  },
  titleText: {
    color: '#000000',
    fontSize: 20,
  },
  valueText: {
    color: '#000000',
    fontSize: 32,
    fontWeight: 'bold',
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
  changeValueButton: {
    backgroundColor: '#C4C4C4',
    // backgroundColor: '#000000',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  changeValueText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    height: 200,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;

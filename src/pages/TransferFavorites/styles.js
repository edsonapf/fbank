import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexGrow: 1,
    paddingTop: 32,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  buttonIcon: {
    borderRadius: 50,
    borderWidth: 1,
    borderStyle: 'dashed',
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  contactTitleText: {
    color: '#979797',
    fontSize: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});

export default styles;

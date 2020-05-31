import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  chartHeaderContainer: {
    paddingHorizontal: 16,
  },
  charHeaderText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#140F26',
  },
  charHeaderTextValue: {
    fontSize: 16,
    color: '#6C7B8A',
  },
  titleSectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 8,
  },
  balanceText: {
    textAlign: 'center',
    fontSize: 40,
  },
});

export default styles;

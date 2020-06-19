import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  chartHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 8,
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
    paddingRight: 8,
    marginTop: 8,
    marginBottom: 8,
  },
  balanceText: {
    textAlign: 'center',
    fontSize: 40,
  },
});

export default styles;

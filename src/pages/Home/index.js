import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import styles from './styles';
import FbankApi from '../../services';
import AppContainer from '../../components/AppContainer';
import Header from '../../components/Header';
import TitleSection from '../../components/TitleSection';
import SearchIcon from '../../assets/img/search_icon.svg';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const transactionMock = [
  {
    transaction_type: 1,
    transaction_description: 'Deposit',
    date: '19/05/2020',
    value: 50.01,
  },
  {
    transaction_type: 2,
    transaction_description: 'Withdraw',
    date: '19/05/2020',
    value: 121.45,
  },
  {
    transaction_type: 3,
    transaction_description: 'Transfer',
    date: '19/05/2020',
    value: 77.77,
  },
];

export default function() {
  const [currentMonth, setCurrentMonth] = useState('');
  const [monthValue, setMonthValue] = useState(0.0);
  const [accountBalance, setAccountBalance] = useState(120.55);

  useEffect(() => {
    setCurrentMonth(monthNames[new Date().getMonth()]);
    setMonthValue(10.25);
  }, []);

  async function press() {
    try {
      // const response = await FbankApi.getAccountByUserId(2);
      console.warn('response');
    } catch (err) {
      console.warn(err);
    }
  }

  return (
    <AppContainer menu>
      <View style={styles.chartHeaderContainer}>
        <Text style={styles.charHeaderText}>Value {currentMonth}</Text>
        <Text style={styles.charHeaderTextValue}>
          $ {monthValue.toFixed(2)}
        </Text>
      </View>
      <LineChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [-1.5, 12, 346.65, 213.51, -321.25],
            },
          ],
        }}
        withDots={false}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(189, 202, 219, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '0',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          marginHorizontal: 16,
          borderRadius: 16,
        }}
      />
      <View style={styles.titleSectionContainer}>
        <TitleSection title="Transactions" />
        <TouchableOpacity onPress={press}>
          <SearchIcon />
        </TouchableOpacity>
      </View>
      <View>
        {transactionMock.map((transaction, index) => (
          <View key={index}>
            <Text>{transaction.transaction_description}</Text>
            <Text>{transaction.date}</Text>
            <Text>{transaction.value}</Text>
          </View>
        ))}
      </View>
      <View style={styles.titleSectionContainer}>
        <TitleSection title="Account balance" />
      </View>
      <Text style={styles.balanceText}>$ {accountBalance}</Text>
    </AppContainer>
    // <View style={styles.main}>
    //   <Header menu />
    // </View>
  );
}

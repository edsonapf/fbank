import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {List, ListItem, Divider, Tooltip} from '@ui-kitten/components';
import styles from './styles';
import FbankApi from '../../services';
import AppContainer from '../../components/AppContainer';
import TitleSection from '../../components/TitleSection';
import SearchIcon from '../../assets/img/search_icon.svg';
import TransferIcon from '../../assets/img/transfer_icon.svg';
import WithdrawIcon from '../../assets/img/withdraw_icon.svg';
import DepositIcon from '../../assets/img/deposit_icon.svg';

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

const dataset = [-1.5, 12, 346.65, 213.51, -321.25];

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
    value: -121.45,
  },
  {
    transaction_type: 3,
    transaction_description: 'Transfer',
    date: '19/05/2020',
    value: 77.77,
  },
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
    value: -121.45,
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

  function onPressItem() {
    console.log('EUUUUUUUUUUUUU');
  }

  function renderIcon(transactionType) {
    switch (transactionType) {
      case 1:
        return (
          <DepositIcon
            stroke="#000000"
            strokeWidth="1"
            fill="#000000"
            height={30}
            width={30}
          />
        );
      case 2:
        return (
          <WithdrawIcon
            stroke="#000000"
            strokeWidth="1"
            fill="#000000"
            height={30}
            width={30}
          />
        );
      case 3:
        return <TransferIcon stroke="#000000" height={30} width={30} />;
    }
  }

  function renderItem({item, index}) {
    return (
      <ListItem
        key={index}
        title={item.transaction_description}
        description={item.date}
        accessoryLeft={() => renderIcon(item.transaction_type)}
        accessoryRight={() => (
          <Text style={{fontWeight: 'bold'}}>$ {item.value}</Text>
        )}
        onPress={onPressItem}
      />
    );
  }

  function renderDotContent({x, y, index}) {
    return (
      <Text
        style={{position: 'absolute', top: y - 25, left: x - 10, fontSize: 12}}>
        {dataset[index]}
      </Text>
    );
  }

  return (
    <AppContainer menu>
      <View style={styles.chartHeaderContainer}>
        <View>
          <Text style={styles.charHeaderText}>Value {currentMonth}</Text>
          <Text style={styles.charHeaderTextValue}>
            $ {monthValue.toFixed(2)}
          </Text>
        </View>
        <TitleSection title="Last 5 months" />
      </View>
      <LineChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May'],
          datasets: [
            {
              data: dataset,
            },
          ],
        }}
        withDots={true}
        withOuterLines={false}
        withInnerLines={false}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisInterval={1} // optional, defaults to 1
        renderDotContent={renderDotContent}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: () => 'rgb(0, 0, 0, 0.3)',
          labelColor: () => 'rgb(189, 202, 219)',
          propsForDots: {
            r: '3',
            fill: '#000000',
            strokeWidth: '2',
            stroke: '#000000',
          },
          propsForLabels: {
            fontWeight: 'bold',
            fontSize: 12,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
        }}
      />
      <View style={styles.titleSectionContainer}>
        <TitleSection title="Transactions" />
        <TouchableOpacity onPress={press}>
          <SearchIcon />
        </TouchableOpacity>
      </View>
      <View style={{height: 175}}>
        {transactionMock && (
          <List
            data={transactionMock}
            ItemSeparatorComponent={Divider}
            renderItem={renderItem}
          />
        )}
      </View>
      <View style={styles.titleSectionContainer}>
        <TitleSection title="Account balance" />
      </View>
      <Text style={styles.balanceText}>$ {accountBalance}</Text>
    </AppContainer>
  );
}

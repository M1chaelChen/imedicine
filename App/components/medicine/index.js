import React from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Medicine from './medicine';
import AddMedicine from './add';

export default StackNavigator({
  Medicine: {
    screen: Medicine,
    navigationOptions: {
      title: 'Medicine',
    }
  },
  AddMedicine: {
    screen: AddMedicine,
    navigationOptions: {
      title: 'Add Medicine',
    }},
}, {
  mode: 'modal',
});

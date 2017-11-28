import React from 'react';
import { StackNavigator } from 'react-navigation';
import Medicine from './medicine';
import AddMedicine from './add';

export default StackNavigator({
  Medicine: {
    screen: Medicine,
    navigationOptions: {
      headerTintColor:'#3F51B5',
      title: 'Medicine',
    }
  },
  AddMedicine: {
    screen: AddMedicine,
    navigationOptions: {
      headerTintColor:'#3F51B5',
      title: 'Add',
    }},
}, {
  mode: 'modal',
});

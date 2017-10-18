import React from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Medicine from './medicine';

export default StackNavigator({
  Medicine: { screen: Medicine },
}, {
  headerMode: 'none',
});

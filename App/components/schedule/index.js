import React from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Schedule from './schedule';

export default StackNavigator({
  Schedule: { screen: Schedule },
}, {
  headerMode: 'none',
});

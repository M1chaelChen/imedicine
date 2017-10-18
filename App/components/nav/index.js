import { StackNavigator, TabNavigator } from 'react-navigation';
import UserScreen from '../users';
import React, { Component } from 'react';
import DrawerNavigation from './drawer';

export default RootNavigation = StackNavigator({
    User: {screen:UserScreen},
    Home: {screen:DrawerNavigation}
},{
    headerMode: 'none',
    navigationOptions:{
        gesturesEnabled:false
    }
});
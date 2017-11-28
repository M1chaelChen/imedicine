import { StackNavigator, TabNavigator } from 'react-navigation';
import Login from '../users/login';
import React, { Component } from 'react';
import TabNavigation from './tab';

export default RootNavigation = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
          header: null,
        },
    },
    Home: {screen:TabNavigation}
},{
    headerMode: 'none',
    navigationOptions:{
        gesturesEnabled:false
    }
});
import { StackNavigator, TabNavigator } from 'react-navigation';
import UserScreen from '../users';
import React, { Component } from 'react';
import TabNavigation from './tab';

export default RootNavigation = StackNavigator({
    User: {screen:UserScreen},
    Home: {screen:TabNavigation}
},{
    headerMode: 'none',
    navigationOptions:{
        gesturesEnabled:false
    }
});
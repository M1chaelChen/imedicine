import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import store from './store/store.js';
import RootNavigation from './components/nav';

const App = () =>{
    return (
        <Provider store={store}>
            <RootNavigation/>
        </Provider>
    );
}

export default App;
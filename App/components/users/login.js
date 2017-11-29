import React, { Component } from 'react';
import {StyleSheet, Alert, View, StatusBar} from 'react-native';
import { Container, Header, Content, Button, Form, Text, Item, Input, Spinner } from 'native-base';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import PushNotification from 'react-native-push-notification';
import LinearGradient from 'react-native-linear-gradient';

import store from '../../store/store';
import styles from '../../styles';
import * as ActionTypes from '../actions/types';

PushNotification.configure({
  
      // (required) Called when a remote or local notification is opened or received
      onNotification: function(notification) {
          console.log( 'NOTIFICATION:', notification );
      },
  
      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
          alert: true,
          badge: true,
          sound: true
      },
  
      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,
  
      /**
        * (optional) default: true
        * - Specified if permissions (ios) and token (android and ios) will requested or not,
        * - if not, you must call PushNotificationsHandler.requestPermissions() later
        */
      requestPermissions: true,
  });

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      password:''
    }
  }

  componentDidMount() {
    PushNotification.localNotificationSchedule({
      message: "Time to take your medicine", // (required)
      date: new Date(Date.now() + (5 * 1000)) // in 60 secs
    });
  }

  handleSignin = () =>{
    const { name, password } = this.state;
    const user = { name, password };

    store.dispatch({
      type: ActionTypes.LOGIN,
      user
    })
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home'}),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render(){
    return(
      <View style={{flex: 1,
        justifyContent: 'center',
        alignItems: 'center'}}>
        <StatusBar
          barStyle="light-content"
        />
        <LinearGradient
        colors={['#3F51B5', '#5C6BC0']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{...StyleSheet.absoluteFillObject}}
        >
        <View style={{paddingTop:100, backgroundColor:'transparent'}}>
          <Text style={{alignSelf:'center', fontSize:32, fontWeight:'bold', color:'white'}}>iMedicine</Text>
        </View>
        <View style={{paddingTop: 150, paddingHorizontal:20}}>
          <Form style={{backgroundColor: 'transparent'}}>
            <Item>
              <Input
                style={{color:'white'}}
                value={this.state.name}
                onChangeText={name =>this.setState({ name })}
                placeholder="Name"
                placeholderTextColor="#EEEEEE"
                autoCorrect={false}
              />
            </Item>
            <Item>
              <Input
                style={{color:'white'}}
                secureTextEntry
                value={this.state.password}
                placeholder="password"
                placeholderTextColor="#EEEEEE"
                onChangeText={password =>this.setState({ password })} 
              />
            </Item>
            <Button block rounded onPress={this.handleSignin} style={{marginTop:20, backgroundColor: 'white'}}>
              <Text style={{color:'#3F51B5'}}>SIGN IN</Text>
            </Button>
            <Text style={{padding: 10,alignSelf: 'center', color:'white'}} onPress={() => this.props.navigation.navigate('Signup')}>Don't have an account?</Text>                        
          </Form>  
        </View>
      </LinearGradient>
      </View>
    )
  }
}

export default connect((store)=>{return {store}})(Login)

import React, { Component } from 'react';
import {StyleSheet, Alert} from 'react-native';
import { Container, Header, Content, Button, Form, Text, Item, Input, Spinner } from 'native-base';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import PushNotification from 'react-native-push-notification';

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
      message: "My Notification Message", // (required)
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
    this.props.navigation.navigate('Home')
  }

  render(){
    return(
      <Container style={styles.appBackground}>
        <Content padder>
          <Form>
            <Item>
              <Input 
                value={this.state.name}
                onChangeText={name =>this.setState({ name })}
                placeholder="Name"
                autoCorrect={false}
              />
            </Item>
            <Item>
              <Input 
                value={this.state.password}
                placeholder="password"
                onChangeText={password =>this.setState({ password })} 
              />
            </Item>
            <Button block onPress={this.handleSignin}>
              <Text>SIGN IN</Text>
            </Button>
            <Text style={{padding: 10,alignSelf: 'center'}} onPress={() => this.props.navigation.navigate('Signup')}>Don't have an account?</Text>                        
          </Form>     
        </Content>
      </Container>
    )
  }
}

export default connect((store)=>{return {store}})(Login)

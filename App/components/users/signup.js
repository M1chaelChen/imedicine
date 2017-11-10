import React, { Component } from 'react';
import {StyleSheet, Alert} from 'react-native';
import { Container, Header, Content, Button, Form, Text, Item, Input, Spinner } from 'native-base';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import store from '../../store/store';
import styles from '../../styles';
import * as ActionTypes from '../actions/types';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      password:'',
    };
  }

  handleSignup = () =>{
    const { name, password } = this.state;
    const user = { name, password };
    
    store.dispatch({
      type: ActionTypes.LOGIN,
      user
    })
    this.props.navigation.navigate('Home')
  }

  render(){
    const { name, password } = this.state;
    return(
      <Container style={styles.appBackground}>
        <Content padder>
          <Form>
            <Item>
              <Input
                autoFocus
                autoCapitalize={'none'}
                autoCorrect={false}
                value={name}
                onChangeText={(name) => this.setState({ name })}
                placeholder="Name"
              />
            </Item>
            <Item>
              <Input
                secureTextEntry
                value={password}
                onChangeText={(password) => this.setState({ password })}
                placeholder="Password"
              />
            </Item>
            <Button block onPress={this.handleSignup}>
              <Text>CREATE ACCOUNT</Text>
            </Button>                       
          </Form>      
        </Content>
      </Container>
    )
  }
}

export default Signup;

import React, { Component } from 'react';
import {StyleSheet, Alert} from 'react-native';
import { Container, Header, Content, Button, Form, Text, Item, Input, Spinner } from 'native-base';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import store from '../../store/store';
import config from '../../config';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      phone:''
    }
  }

  handleSignin = () =>{
    this.props.navigation.navigate('Home')
  }

  render(){
    return(
      <Container style={{backgroundColor:config.style.backgroundColor}}>
        <Content padder>
          <Form>
            <Item>
              <Input 
                value={this.state.name}
                onChangeText={text =>this.setState({name:text})}
                placeholder="Name"
                autoCapitalize={'none'}
                autoCorrect={false}
              />
            </Item>
            <Item>
              <Input 
                secureTextEntry
                value={this.state.phone}
                placeholder="Phone"
                onChangeText={text =>this.setState({phone:text})} 
              />
            </Item>
            <Button block onPress={this.handleSignin}>
              <Text>SIGN IN</Text>
            </Button>                       
          </Form>     
        </Content>
      </Container>
    )
  }
}

export default connect((store)=>{return {store}})(Login)

import React from 'react';
import { StyleSheet } from 'react-native';
import { Header, Title, Left, Icon, Right, Button, Body, Text } from 'native-base';

const AppHeader = props => (
  <Header>
      <Left>
      </Left>
      <Body>
          <Title style={{color:'#3F51B5'}}>{props.title}</Title>
      </Body>
      <Right />
  </Header>
);

export default AppHeader;


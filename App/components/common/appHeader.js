import React from 'react';
import { StyleSheet } from 'react-native';
import { Header, Title, Left, Icon, Right, Button, Body, Text } from 'native-base';

const styles = StyleSheet.create({
  buttonColor: {
    color: '#007aff',
  },
});

const AppHeader = props => (
  <Header>
      <Left>
      <Button
        transparent
        onPress={() => props.navigation.navigate('DrawerOpen')}
      >
        <Icon name="menu" />
      </Button>
      </Left>
      <Body>
          <Title>{props.title}</Title>
      </Body>
      <Right />
  </Header>
);

export default AppHeader;


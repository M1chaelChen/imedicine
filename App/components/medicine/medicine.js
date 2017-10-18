import React from 'react';
import { Container, Content, Card, CardItem, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { connect } from 'react-redux';
import AppHeader from '../common/appHeader';
import store from '../../store/store';

const Medicine = (props) => {
  return (
    <Container style={{ backgroundColor: config.style.backgroundColor }}>
      <AppHeader
        title="Medicine"
        navigation={props.navigation}
      />
      <Content padder>
        
      </Content>
    </Container>
  );
}

export default connect(store => store)(Medicine)


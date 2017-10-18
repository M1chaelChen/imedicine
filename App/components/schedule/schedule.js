import React from 'react';
import { Container, Content, Card, CardItem, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { connect } from 'react-redux';
import AppHeader from '../common/appHeader';
import config from '../../config';
import store from '../../store/store';

const Schedule = (props) => {
  return (
    <Container style={{ backgroundColor: config.style.backgroundColor }}>
      <AppHeader
        title="Dashboard"
        navigation={props.navigation}
      />
      <Content padder>
        
      </Content>
    </Container>
  );
}

export default connect(store => store)(Schedule)


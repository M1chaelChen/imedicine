import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Tab, SwipeRow, Tabs, TabHeading, Icon, Text, Content, Right , Left, Button, Title, Body, List, ListItem, Form, Item, Input, Label, H2} from 'native-base';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';

import AppHeader from '../common/appHeader';
import store from '../../store/store';
import styles from '../../styles';
import * as ActionTypes from '../actions/types';

class Medicine extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container style={styles.appBackground}>
        <Content>
          {this.props.medicine.map((medicine, index) => (
            <SwipeRow
              key={index}
              disableRightSwipe
              leftOpenValue={75}
              rightOpenValue={-75}
              body={
                <View>
                  <Body>
                    <Text>{medicine.name}</Text>
                    <Text note>{medicine.time}</Text>
                  </Body>
                </View>}
              right={
                <Button danger>
                  <Icon name="trash" />
                </Button>}
            />))}
          <Button rounded style={{marginTop: 10, alignSelf:'center'}} onPress={() => this.props.navigation.navigate('AddMedicine')}>
            <Text>Add</Text>
          </Button>
        </Content>
      </Container>
    );
  }

}

export default connect(store => store)(Medicine)


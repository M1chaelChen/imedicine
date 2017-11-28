import React, { Component } from 'react';
import { View, ScrollView} from 'react-native';
import { Container, Header, Fab, Tab, SwipeRow, Tabs, TabHeading, Icon, Text, Content, Right , Left, Button, Title, Body, List, ListItem, Form, Item, Input, Label, H2} from 'native-base';
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
        <View style={{flex:1}}>
          <ScrollView>
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
          {this.props.medicine.length === 0 && (
            <View style={{ marginTop:20, flex: 1 }}>
              <Text style={{ color:'#c9c9c9', alignSelf:'center' }}>No medicine yet</Text>
            </View>
          )}
          </ScrollView>
          <Fab
            style={{backgroundColor: '#3F51B5'}}
            onPress={() => this.props.navigation.navigate('AddMedicine')}
          >
            <Icon size={25} color="white" name="add" />
          </Fab>
        </View>
      </Container>
    );
  }
}

export default connect(store => store)(Medicine)


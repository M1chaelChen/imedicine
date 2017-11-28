import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Text, Content, Right , Left, Button, Title, Body, List, ListItem, Form, Item, Input, Label, H2} from 'native-base';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialIcons';

import AppHeader from '../common/appHeader';
import store from '../../store/store';
import styles from '../../styles';
import * as ActionTypes from '../actions/types';

class AddMedicine extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      quantity: '',
      time: '',
    };
  }

  handleAddMedicine = () => {
    const { name, description, quantity, time } = this.state;
    const medicine = { name, description, quantity, time };

    store.dispatch({
      type: ActionTypes.ADD_MEDICINE,
      medicine
    })

    this.props.navigation.goBack();
  }

  render() {
    return (
      <Container style={styles.appBackground}>
        <Content padder>
        <Form>
          <Item stackedLabel>
            <Label>Name</Label>
            <Input
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
            />
          </Item>
          <Item stackedLabel>
            <Label>Description</Label>
            <Input
              value={this.state.description}
              onChangeText={description => this.setState({ description })}
            />
          </Item>
          <Item stackedLabel>
            <Label>Quantity</Label>
            <Input
              value={this.state.quantity}
              onChangeText={quantity => this.setState({ quantity })}
            />
          </Item>
          <Item stackedLabel last>
            <Label>Time</Label>
            <DatePicker
              style={{ width: 200 }}
              date={this.state.time}
              mode="datetime"
              placeholder="select time"
              format="YYYY-MM-DD h:mm a"
              minDate={moment().format('YYYY-MM-DD h:mm')}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              onDateChange={time => this.setState({ time })}
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 5
                },
                // ... You can check the source to find the other keys.
              }}
              iconComponent={<Icon color="#3F51B5" size={30} name='date-range'/>}
            />
          </Item>
          <Button block rounded style={{marginTop:20, backgroundColor: '#3F51B5'}} onPress={this.handleAddMedicine}>
            <Text>Add</Text>
          </Button> 
        </Form>
      </Content>
    </Container>
    );
  }
}

export default connect(store => store)(AddMedicine)


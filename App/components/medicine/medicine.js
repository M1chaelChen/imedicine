import React, { Component } from 'react';
import { DatePickerIOS, View } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Content, Right , Left, Button, Title, Body, List, ListItem, Form, Item, Input, Label, H2} from 'native-base';
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

    this.props.navigation.navigate('Schedule')
  }
  
  MyMedicine = () => (
    <Content>
      <List>
        {this.props.medicine.map((medicine, index) => 
        <ListItem key={index}>
          <Body>
            <Text>{medicine.name}</Text>
            <Text note>{medicine.time}</Text>
          </Body>
        </ListItem>)}
        {this.props.medicine.length ===0 && 
          <H2>You don't have any medicine yet !</H2>
        }
      </List>
    </Content>
  )
 
  AddMedicine = () => (
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
          <Label>description</Label>
          <Input
            value={this.state.description}
            onChangeText={description => this.setState({ description })}
          />
        </Item>
        <Item stackedLabel>
          <Label>quantity</Label>
          <Input
            value={this.state.quantity}
            onChangeText={quantity => this.setState({ quantity })}
          />
        </Item>
        <Item stackedLabel last>
          <Label>time</Label>
          <DatePicker
            style={{ width: 200 }}
            date={this.state.time}
            mode="datetime"
            placeholder="select date"
            format="YYYY-MM-DD h:mm a"
            minDate={moment().format('YYYY-MM-DD h:mm')}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={time => this.setState({ time })}
          />
        </Item>
        <Button style={{marginTop:15}} onPress={this.handleAddMedicine} block>
          <Text>Add</Text>
        </Button> 
      </Form>
    </Content>
  )

  render() {

    return (
      <Container style={styles.appBackground}>
        <Header hasTabs>
          <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate('DrawerOpen')}
          >
            <Icon name="menu" />
          </Button>
          </Left>
          <Body>
              <Title>Medicine</Title>
          </Body>
          <Right />
        </Header>
        <Tabs>
          <Tab heading={ <TabHeading><Icon name="person" /><Text>My</Text></TabHeading>}>
            {this.MyMedicine()}
          </Tab>
          <Tab heading={ <TabHeading><Icon name="add" /><Text>Add</Text></TabHeading>}>
            {this.AddMedicine()}
          </Tab>
        </Tabs>
      </Container>
    );
  }

}

export default connect(store => store)(Medicine)


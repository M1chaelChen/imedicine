import React from 'react';
import { DatePickerIOS, View } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Content, Right , Left, Button, Title, Body, List, ListItem, Form, Item, Input, Label } from 'native-base';
import { connect } from 'react-redux';
import AppHeader from '../common/appHeader';
import store from '../../store/store';
import styles from '../../styles';

const MyMedicine = () => (
  <Content>
    <List>
      <ListItem>
        <Body>
          <Text>Sankhadeep</Text>
          <Text note>Its time to build a difference . .</Text>
        </Body>
      </ListItem>
    </List>
  </Content>
)

const AddMedicine = () => (
  <Content padder>
    <Form>
      <Item stackedLabel>
        <Label>Name</Label>
        <Input />
      </Item>
      <Item stackedLabel>
        <Label>description</Label>
        <Input />
      </Item>
      <Item stackedLabel>
        <Label>quantity</Label>
        <Input />
      </Item>
      <Item stackedLabel last>
        <Label>time</Label>
        <DatePickerIOS
          date={new Date()} 
          onDateChange={date => console.log(date)}
          mode="datetime"
        />
      </Item>
      <Button block>
        <Text>Add</Text>
      </Button> 
    </Form>
  </Content>
)

const Medicine = (props) => {
  return (
    <Container style={styles.appBackground}>
      <Header hasTabs>
        <Left>
        <Button
          transparent
          onPress={() => props.navigation.navigate('DrawerOpen')}
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
          <MyMedicine />
        </Tab>
        <Tab heading={ <TabHeading><Icon name="add" /><Text>Add</Text></TabHeading>}>
          <AddMedicine />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default connect(store => store)(Medicine)


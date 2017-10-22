import React from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Content, Right , Left, Button, Title, Body } from 'native-base';
import { connect } from 'react-redux';
import AppHeader from '../common/appHeader';
import store from '../../store/store';
import styles from '../../styles';

const MyMedicine = () => (
  <Text>MyMedicine</Text>
)

const AddMedicine = () => (
  <Text>AddMedicine</Text>
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


import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Container, Content, Card, CardItem, Text, Button, Icon, Body, Thumbnail, List, ListItem, Separator } from 'native-base';
import { connect } from 'react-redux';
import AppHeader from '../common/appHeader';
import store from '../../store/store';
import styles from '../../styles';

const Profile = (props) => {
  handleLogout = () => {
    props.navigation.navigate('Login');
  }

  return (
    <Container style={{
      backgroundColor: '#353445'}}>
      <AppHeader
        title="Profile"
        navigation={props.navigation}
      />
      <Content>
        <Thumbnail large source={{uri: 'https://i.pinimg.com/736x/fe/61/db/fe61dba545c0b8b87a722cad8408d37d--centenarian-aging-gracefully.jpg'}} style={styles.center} />
        <Text style={styles.profileText}>{props.user.name} </Text>
        <Text style={styles.profilePhone} note>{props.user.phone} </Text>
        <List>
          <ListItem last onPress={handleLogout}>
            <Text>Sign Out</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
}

export default connect(store => store)(Profile)


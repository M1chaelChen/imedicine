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
    <Container>
      <AppHeader
        title="Profile"
        navigation={props.navigation}
      />
      <Content>
        <Card>
          <CardItem header>
            <Thumbnail large source={{uri: 'https://i.pinimg.com/736x/fe/61/db/fe61dba545c0b8b87a722cad8408d37d--centenarian-aging-gracefully.jpg'}} style={styles.center} />
            <Text style={{marginLeft: 20}}>{props.user.name}</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text note>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            </Body>
          </CardItem>
        </Card>
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


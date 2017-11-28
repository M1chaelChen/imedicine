import React from 'react';
import { StyleSheet, View, ImageBackground, ScrollView } from 'react-native';
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
    <Container style={{backgroundColor:'white'}}>
      <AppHeader
        title="Profile"
        navigation={props.navigation}
      />
      <ScrollView>
      <ImageBackground source={{uri: 'https://process.filestackapi.com/AhTgLagciQByzXpFGRI0Az/blur=amount:7/https://i.pinimg.com/736x/fe/61/db/fe61dba545c0b8b87a722cad8408d37d--centenarian-aging-gracefully.jpg'}} style={{ height: 200, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Thumbnail large source={{uri: 'https://i.pinimg.com/736x/fe/61/db/fe61dba545c0b8b87a722cad8408d37d--centenarian-aging-gracefully.jpg'}} style={{borderWidth:3, borderColor:"#3F51B5"}} />
        <Text style={{fontSize:18, fontWeight:'bold', fontFamily:'roboto', marginTop:10,color:'white', backgroundColor:'transparent'}}>{props.user.name}</Text>
        <Text style={{fontSize:16, fontFamily:'roboto',marginTop:10,color:'white', backgroundColor:'transparent'}}>65</Text>
      </ImageBackground>
      <View style={{backgroundColor:'white'}}>
        <CardItem>
          <Body>
            <Text note>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
          </Body>
        </CardItem>
        <Button block rounded style={{backgroundColor: '#3F51B5', margin:20}} onPress={handleLogout}>
          <Text>Sign Out</Text>
        </Button>
      </View>
      </ScrollView>
    </Container>
  );
}

export default connect(store => store)(Profile)


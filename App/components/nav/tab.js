import React from 'react';
import { StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Button, Icon, Footer, FooterTab, Text } from 'native-base';

import ScheduleStack from '../schedule';
import MedicineStack from '../medicine';
import ProfileStack from '../profile';

export default TabNavigator({
  MedicineTab: { screen: MedicineStack },
  ScheduleTab: { screen: ScheduleStack },
  ProfileTab: { screen: ProfileStack },
}, {
  tabBarPosition: 'bottom',
  lazy: true,
  tabBarComponent: props => (
    <Footer>
      <FooterTab>
        <Button vertical onPress={() => props.navigation.navigate('MedicineTab')} >
          <Icon name="list-box" style={{ color:'#3F51B5', fontSize: 30 }} active={props.navigationState.index === 0} />
          <Text style={{color:'#3F51B5'}}>Medicine</Text>
        </Button>
        <Button vertical onPress={() => props.navigation.navigate('ScheduleTab')}>
          <Icon name="calendar" style={{ color:'#3F51B5', fontSize: 30 }} active={props.navigationState.index === 1} />
          <Text style={{color:'#3F51B5'}}>Schedule</Text>
        </Button>
        <Button vertical onPress={() => props.navigation.navigate('ProfileTab')}>
          <Icon name="person" style={{ color:'#3F51B5', fontSize: 30 }} active={props.navigationState.index === 2} />
          <Text style={{color:'#3F51B5'}}>Profile</Text>
        </Button>
      </FooterTab>
    </Footer>
  ),
});
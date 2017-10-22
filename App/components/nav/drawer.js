import React, { Component } from 'react';
import {StyleSheet,View} from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import SideBar from '../common/sidebar';
import ScheduleScreen from '../schedule';
import ProfileScreen from '../profile';
import MedicineScreen from '../medicine';

export default DrawerNavigation = DrawerNavigator({
		Home: {screen: ScheduleScreen},
		Profile: {screen: ProfileScreen},
		Medicine: {screen: MedicineScreen}
	},
		{
			contentComponent: props => <SideBar {...props} />
		}
	);

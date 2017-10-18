import React, { Component } from 'react';
import {StyleSheet,View} from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import SideBar from '../common/sidebar';
import Schedule from '../schedule';
//import Profile from '../profile';
import Medicine from '../medicine';

export default DrawerNavigation = DrawerNavigator({
		Home: {screen: Schedule},
		//Profile: {screen: Profile},
		Medicine: {screen: Medicine}
	},
		{
			contentComponent: props => <SideBar {...props} />
		}
	);

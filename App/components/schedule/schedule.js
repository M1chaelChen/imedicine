import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Container, Content, Card, CardItem, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { connect } from 'react-redux';
import { Agenda } from 'react-native-calendars';
import moment from 'moment';
import  { _ } from 'underscore';
import LinearGradient from 'react-native-linear-gradient';

import AppHeader from '../common/appHeader';
import styles from '../../styles';
import store from '../../store/store';

class Schedule extends Component{
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }

  componentDidMount() {
    console.log(this.props)
  }

  loadItems = (day) => {
    const schedule = this.props.medicine?this.props.medicine:null;
    for (let i = 0; i < 60; i++) {
      const strTime = moment(day.timestamp).add(i,'day').format('YYYY-MM-DD');
      this.state.items[strTime] = [];
      //map schdule to agenda
      _.each(_.filter(schedule,s => moment(s.time, 'YYYY-MM-DD h:mm a').format('YYYY-MM-DD') == strTime), medicine=>{
        this.state.items[strTime].push({
          time: medicine.time,
          quantity: medicine.quantity,
          name: medicine.name,
          description: medicine.description,
          height:100,
        })
      })
    }

    const newItems = {};
    Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
    this.setState({
      items: newItems
    });
  }

  renderItem = (item) => {
    return (
        <TouchableOpacity onPress={this.handleTaskClick.bind(this,item)} style={[styles.item, {height: item.height, backgroundColor:'#3F51B5'}]}>
          <Text style={{color:'white', fontSize:14, fontWeight:'bold'}}>{item.time}</Text>
          <Text style={{color:'white'}} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
          <Text style={{color:'white'}} numberOfLines={1} ellipsizeMode="tail" note>{item.description}</Text>
        </TouchableOpacity>
    );
  }

  renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>No schedule on this date!</Text>
      </View>
    );
  }

  rowHasChanged = (r1, r2) => r1.title !== r2.title;

  handleTaskClick = (task) =>{
    //this.props.navigation.navigate('TaskDetail', { task });
  }

  render() {
    return (
      <Container style={styles.appBackground}>
        <AppHeader 
          title='Schedule'
          navigation={this.props.navigation}
        />
        <Agenda
          items={this.state.items}
          loadItemsForMonth={this.loadItems.bind(this)}
          selected={moment().format('YYYY-MM-DD')}
          pastScrollRange={12}
          futureScrollRange={12}
          renderItem={this.renderItem.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          rowHasChanged={this.rowHasChanged.bind(this)}
          theme={{
            todayTextColor: '#3F51B5',
            selectedDayBackgroundColor: '#3F51B5',
            dayTextColor: '#3F51B5',
            dotColor: '#3F51B5',
            selectedDotColor: '#ffffff',
            agendaTodayColor: '#3F51B5',
            agendaKnobColor: '#3F51B5'
          }}
        />
      </Container>
    );
  }
}

export default connect(store => store)(Schedule)


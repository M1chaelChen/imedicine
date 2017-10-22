import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Container, Content, Card, CardItem, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { connect } from 'react-redux';
import { Agenda } from 'react-native-calendars';
import moment from 'moment';
import  { _ } from 'underscore';

import AppHeader from '../common/appHeader';
import config from '../../config';
import store from '../../store/store';

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
    marginRight: 10,
    marginTop: 20,
    borderRadius: 2
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 40
  }
});

class Schedule extends Component{
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }

  loadItems = (day) => {
    const schedule = this.props.schedule?this.props.schedule:null;
    for (let i = 0; i < 60; i++) {
      const strTime = moment(day.timestamp).add(i,'day').format('YYYY-MM-DD');
      this.state.items[strTime] = [];
      //map tasks to agenda
      _.each(_.filter(schedule,s => s.date == strTime), task=>{
        this.state.items[strTime].push({
          time: s.time,
          title: s.title,
          description: s.description,
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
      <TouchableOpacity onPress={this.handleTaskClick.bind(this,item)} style={[styles.item, {height: item.height}]}>
        <Text>{item.timeRange}</Text>
        <Text numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
        <Text numberOfLines={1} ellipsizeMode="tail" note>{item.description}</Text>
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
    this.props.navigation.navigate('TaskDetail', { task });
  }

  render() {
    return (
      <Container style={{ backgroundColor: config.style.backgroundColor }}>
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
        />
      </Container>
    );
  }
}

export default connect(store => store)(Schedule)


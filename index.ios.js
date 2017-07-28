'use strict';

import React, { Component, PropTypes } from 'react';
import { NavigatorIOS, Text, AppRegistry, View, TouchableHighlight, StyleSheet, Button } from 'react-native';
import Location from './js/components/Location.js'

export default class LocationFinder extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: LaunchScreen,
          title: 'My Initial Scene',
        }}
        style={{ flex: 1 }}
      />
    );
  }
}

class LaunchScreen extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }
  
  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
  }

  _onForward = () => {
    this.props.navigator.push({
      title: 'Places ',
      component: Location,
    });
  }

  render() {
    return (
      <View style={styles.parentView}>
         <Button 
          title="Show Places"
          onPress={this._onForward}>
        </Button> 
      </View>
    )
  }
}

var styles = StyleSheet.create({
  parentView: {
    paddingTop: 64,
  },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => LocationFinder);
'use strict';

import React, { Component, PropTypes } from 'react';
import { NavigatorIOS, Text , AppRegistry , View , TouchableHighlight } from 'react-native';

export default class LocationFinder extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: LaunchScreen,
          title: 'My Initial Scene',
        }}
        style={{flex: 1}}
      />
    );
  }
}

class LaunchScreen extends Component {
  /*static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  _onForward = () => {
    this.props.navigator.push({
      title: 'Scene ' + nextIndex,
    });
  }*/

  render() {
    return (
      <View>
        {/* <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this._onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight> */}
      </View>
    )
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => LocationFinder);
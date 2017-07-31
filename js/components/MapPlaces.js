import React, { Component } from 'react';
import {
  StyleSheet,         // CSS-like styles
  Text,               // Renders text
  TouchableOpacity,   // Pressable container
  View,                // Container component
} from 'react-native';

import MapView from 'react-native-maps'
import Callout from '/Users/st29/Programs/react/TextInput/AwesomeProject/js/components/Callout.js';

// Import data
import { characters } from '/Users/st29/Programs/react/TextInput/AwesomeProject/js/components/Data.js';


export default class MapPlaces extends Component {

  state = {
    // Show good or all characters flag
    showGoodOnly: false,
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Map*/}
        <MapView
          style={styles.map}
          // Position on Ahmedabad, Gujarat
          initialRegion={{
            latitude: 23.0225,
            longitude: 72.5714,
            latitudeDelta: 0.0491,
            longitudeDelta: 0.0375,
          }}
        >
          {/* Loop through characters and add pins on the map */}
          {characters.map((character, index) =>
            // If showGoodOnly is true, but the character is bad - do not show it
            this.state.showGoodOnly && !character.good || <MapView.Marker
              coordinate={{
                latitude: character.coordinate[0],
                longitude: character.coordinate[1],
              }}
              // Callout offset
              calloutOffset={{ x: -8, y: 28 }}
              // Greed color for good characters and red for others
              pinColor={character.good ? '#009688' : '#f44336'}
              key={index}>

              {/* Callout */}
              <MapView.Callout tooltip style={styles.callout}>
                <Callout
                  name={character.name}
                  image={character.image}
                />
                </MapView.Callout>
              </MapView.Marker>
          )}
        </MapView>
        {/* Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            // Toggle this.state.showGoodOnly
            onPress={() => this.setState({
              showGoodOnly: !this.state.showGoodOnly
            })}
          >
            <Text>{this.state.showGoodOnly ? 'Show All' : 'Show Good Only'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                            // Take up the whole screen
    justifyContent: 'flex-end',         // Arrange button at the bottom
    alignItems: 'center',               // Center button horizontally
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
    marginVertical: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 20,
    padding: 12,
    width: 160,
  },
  callout:{
    width:160,
  },
});

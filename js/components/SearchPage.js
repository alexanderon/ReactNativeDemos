'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    ActivityIndicator,
    Image
} from 'react-native';

class SearchPage extends Component {
    render() {
        return (<View style={styles.container}>
        <Text style={styles.description}>
           Search for locations!
        </Text>
        <Text style={styles.description}>
                You can search the location by name.
        </Text>
        </View>);
    } 
}

var styles = StyleSheet.create({
    description: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
         color: '#656565'
    },
    container: {
        padding: 30,
        marginTop: 65,
         alignItems: 'center'
    }
});

module.export = SearchPage;
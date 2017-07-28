
import React, { Component, PropTypes } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import MapPlaces from '/Users/st29/Programs/react/TextInput/AwesomeProject/js/components/MapPlaces.js';

class Location extends Component {
    static propTypes = {
        navigator: PropTypes.object.isRequired,
    }

    constructor(props, context) {
        super(props, context);
        this._onForward = this._onForward.bind(this);
    }

    _onForward = () => {
        selectedIndex = 3
        this.props.navigator.push({
            title: 'Locations in Map',
            component: MapPlaces,
        });
    }

    state = {
        names: [
            {
                id: 0,
                name: 'Ahmedabad',
            },
            {
                id: 1,
                name: 'Gandhinagar',
            },
            {
                id: 2,
                name: 'Kalol',
            },
            {
                id: 3,
                name: 'Mehsana',
            }
        ]
    }

    alertItemName = (item) => {
        alert(item.name)
    }

    render() {
        return (
            <View style={styles.parentView}>
                {
                    this.state.names.map((item, index) => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.container}
                            onPress={this._onForward}
                        >
                            <Text style={styles.text}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    parentView: {
        paddingTop: 64
    },
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#d9f9b1',
    },
    text: {
        color: '#4f603c'
    }
})

export default Location

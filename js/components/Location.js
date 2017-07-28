
import React, {Component, PropTypes } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

class Location extends Component {

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
         <View>
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}
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

export default Location

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#d9f9b1',
   },
   text: {
      color: '#4f603c'
   }
})
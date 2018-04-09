import React from 'react';
import { StyleSheet, View } from 'react-native';

/**
 * @description	Card Component. A visual box container. 
 * @constructor
 * @param {Object} props - The props that were defined by the caller of this component.
 * @param {string} props.title - The title of the header.
 */
const Card = (props) => {
  const { containerStyle } = styles;

  return (
    <View style={containerStyle}>
      {props.children}
    </View>
  );
};

/**
 * The component StyleSheet.
 */
const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  }
});

export default Card;

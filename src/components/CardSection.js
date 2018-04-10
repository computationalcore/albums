import React from 'react';
import { StyleSheet, View } from 'react-native';

/**
 * @description	Card section Component. Sections division inside a card.
 * @constructor
 * @param {Object} props - The props that were defined by the caller of this component.
 */
const CardSection = (props) => {
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
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
});

export default CardSection;

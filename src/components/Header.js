import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * @description	App Header Component.
 * @constructor
 * @param {Object} props - The props that were defined by the caller of this component.
 * @param {string} props.title - The title of the header.
 */
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.title}</Text>
    </View>
  );
};

/**
 * The component StyleSheet.
 */
const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
});

// Make the component available to other parts of the app
export default Header;

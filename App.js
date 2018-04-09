/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { displayName } from './app.json';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

/**
 * @description App root component.
 * @constructor
 * @param {Object} props - The props that were defined by the caller of this component.
 */
class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          title={displayName}
        />
        <AlbumList />
      </View>
    );
  }
}

export default App;

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

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Header
          title={displayName}
        />
        <AlbumList />
      </View>
    );
  }
}

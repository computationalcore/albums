/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { displayName } from './app.json';
import Header from './src/components/Header';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Header
        title={displayName}
      />
    );
  }
}

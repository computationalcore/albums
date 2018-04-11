/** @format */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

console.disableYellowBox = true;

// Render the App component to the device
AppRegistry.registerComponent(appName, () => App);

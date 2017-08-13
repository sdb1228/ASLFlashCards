'use strict';
import React, {
  Component
} from 'react';

import {
  AlertIOS,
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import SwipeCards from './SwipeCards.js';
import VideoView from './VideoView.js';


export default class ASLFlashCards extends Component {

  render() {
    const App = StackNavigator({
      Home: { screen: SwipeCards },
      Video: { screen: VideoView},
    });
    return <App />
  }
}

AppRegistry.registerComponent('ASLFlashCards', () => ASLFlashCards);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import App from './src/components/App'
import {
  AppRegistry
} from 'react-native';

import { Provider } from 'react-redux'
import store from './src/store'

export default class Project extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Project', () => Project);

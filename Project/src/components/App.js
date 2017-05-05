import React, { Component } from 'react';

import {
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation'
import ListPhoto from './ListPhoto'
import Detail from './Detail'
import About from './About'

const App = StackNavigator({
  ListPhoto: {screen: ListPhoto},
  Detail: {screen: Detail},
  About: {screen: About}
})

export default App

import React, { Component } from 'react'
import {
  AppRegistry,
  View
} from 'react-native'
import { Provider } from 'react-redux'

import App from './src/App'
import store from './src/store'

class MangoTree extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('MangoTree', () => App);

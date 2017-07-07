import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native'
import { Provider, connect } from 'react-redux'

import store from '../store'
import { startTree } from '../actions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#4EA384',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: 'white'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class Landing extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }

  constructor () {
    super ()
    this.state = {
      name: '',
      treeName: ''
    }
  }

  _startTree () {
    if (this.state.treeName.length > 0) {
      this.props.startTree(this.state.treeName)
      this.props.navigation.navigate('Playground')
    } else {
      alert('Our garden won\'t accept anonymous tree..')
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome!</Text>
        <View>
          <TextInput
            onChangeText={(text) => this.setState({ name: text })}
            value={ this.state.name }
            style={{ width: 300 }}
            placeholder='Your name'
          />
          <TextInput
            onChangeText={(text) => this.setState({ treeName: text })}
            value={ this.state.treeName }
            style={{ width: 300 }}
            placeholder='Give your tree a name'
          />
        </View>
        <View style={{ marginBottom: 50}}>
        <Button
          onPress={() => this._startTree() }
          title="Start"
          color="#841584"
          accessibilityLabel="Start the tree!"
        />
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startTree: (name) => dispatch(startTree(name))
  }
}

export default connect(null, mapDispatchToProps)(Landing)
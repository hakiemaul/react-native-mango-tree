import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
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

  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Welcome!</Text>
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
        <Button
          onPress={() => this._startTree() }
          title="Start"
          color="#841584"
          accessibilityLabel="Start the tree!"
        />
      </View>
    )
  }
}

export default Landing
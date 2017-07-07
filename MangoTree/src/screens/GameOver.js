import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

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

class GameOver extends React.Component {
  static navigationOptions = {
    title: 'Thanks for playing'
  }

  _reset () {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Landing'})
      ]
    })
    this.props.navigation.dispatch(resetAction)
  }

  _harvest () {
    this.props.harvest()
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>You just found {this.props.tree.name}!</Text>
        <Text>And he's dead.</Text>
        <Text>He's old anyway...</Text>
        <Button
          onPress={() => this._reset() }
          title="Play Again"
          color="#841584"
          accessibilityLabel="Re-grow the tree!"
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tree: state.tree
  }
}

export default connect(mapStateToProps, null)(GameOver)
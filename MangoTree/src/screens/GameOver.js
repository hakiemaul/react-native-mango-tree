import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image
} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#50AA8E',
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
  allText: {
    fontSize: 20,
    color: 'white'
  },
  fruitName: {
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
});

class GameOver extends React.Component {
  static navigationOptions = {
    header: null
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

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.allText}>You just found <Text style={styles.fruitName}>{this.props.tree.name}</Text>!</Text>
        <Text style={styles.allText}>And it's dead.</Text>
        <Text style={styles.allText}>It's old anyway...</Text>
        <Text style={styles.allText}>It gave you {this.props.tree.fruitsHarvested} fruits in its life..</Text>
        <Image
          source={require('../assets/4.png')}
          style={{ width: 150, height: 150}}
        />
        <Text style={styles.allText}>Game Over!</Text>
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
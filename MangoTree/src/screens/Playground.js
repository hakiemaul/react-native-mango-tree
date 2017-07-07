import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native'
import { connect } from 'react-redux'

import { addAge, harvest } from '../actions'

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

class Playground extends React.Component {
  static navigationOptions = {
    title: 'Play with your tree'
  }

  _addAge () {
    this.props.addAge()
  }

  _harvest () {
    this.props.harvest()
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>This is {this.props.tree.name}</Text>
        { (this.props.tree.age > 0) ? <Text>It's now {this.props.tree.age} years old.</Text> : <Text>It's a new tree! Take care of it.</Text>}
        <Text>{this.props.tree.fruits}</Text>
        <Text>Fruits harvested from {this.props.tree.name}: {this.props.tree.fruitsHarvested}</Text>
        <Text>{this.props.tree.harvestAge}</Text>
        <Button
          onPress={() => this._addAge() }
          title="Emulate"
          color="#841584"
          accessibilityLabel="Grow the tree!"
        />
        { (this.props.tree.age >= this.props.tree.harvestAge) ? <Button
          onPress={() => this._harvest() }
          title="Harvest"
          color="#841584"
          accessibilityLabel="Harvest the tree!"
        /> : <Text></Text>}
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addAge: () => dispatch(addAge()),
    harvest: () => dispatch(harvest())
  }
}

const mapStateToProps = (state) => {
  return {
    tree: state.tree
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playground)
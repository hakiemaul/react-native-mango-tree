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
    const { deadStatus } = this.props.tree
    if (deadStatus) {
      this.props.navigation.navigate('GameOver')
    }
  }

  _harvest () {
    this.props.harvest()
  }

  render () {
    const quarter = Math.floor(this.props.tree.deadAge / 4)
    const half = Math.floor(this.props.tree.deadAge / 2)
    if (this.props.tree.age === 0) {
      return (
        <View style={styles.container}>
          <Text>This is {this.props.tree.name}</Text>
          <Text>It's a new tree! Take care of it.</Text>
          <Text>({this.props.tree.fruits})</Text>
          <Image
            source={require('../assets/0.png')}
            style={{ width: 150, height: 150}}
          />
          <Text>Fruits harvested from {this.props.tree.name}: {this.props.tree.fruitsHarvested}</Text>
          <View style={{ marginTop: 100, width: 300, justifyContent: 'space-between', flexDirection: 'row'}}>
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
            /> : <Button
              onPress={() => this._harvest() }
              title="Harvest"
              color="#841584"
              disabled={true}
              accessibilityLabel="Harvest the tree!"
            />}
          </View>
        </View>
      )
    } else if (this.props.tree.age >= quarter && this.props.tree.age < half) {
      return (
        <View style={styles.container}>
          <Text>{this.props.tree.name} getting older.</Text>
          <Text>He is now {this.props.tree.age} years old.</Text>
          <Text>({this.props.tree.fruits})</Text>
          <Image
            source={require('../assets/2.png')}
            style={{ width: 150, height: 150}}
          />
          <Text>Fruits harvested from {this.props.tree.name}: {this.props.tree.fruitsHarvested}</Text>
          <View style={{ marginTop: 100, width: 300, justifyContent: 'space-between', flexDirection: 'row'}}>
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
            /> : <Button
              onPress={() => this._harvest() }
              title="Harvest"
              color="#841584"
              disabled={true}
              accessibilityLabel="Harvest the tree!"
            />}
          </View>
        </View>
      )
    } else if (this.props.tree.age > 0 && this.props.tree.age < quarter) {
      return (
        <View style={styles.container}>
          <Text>{this.props.tree.name} has grown..</Text>
          <Text>He is now {this.props.tree.age} years old.</Text>
          <Text>({this.props.tree.fruits})</Text>
          <Image
            source={require('../assets/1.png')}
            style={{ width: 150, height: 150}}
          />
          <Text>Fruits harvested from {this.props.tree.name}: {this.props.tree.fruitsHarvested}</Text>
          <View style={{ marginTop: 100, width: 300, justifyContent: 'space-between', flexDirection: 'row'}}>
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
            /> : <Button
              onPress={() => this._harvest() }
              title="Harvest"
              color="#841584"
              disabled={true}
              accessibilityLabel="Harvest the tree!"
            />}
          </View>
        </View>
      )
    }
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
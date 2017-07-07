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
    backgroundColor: '#4EA384',
  },
  containerMature: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#46947A',
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
  ageText: {
    fontWeight: 'bold'
  }
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
          <Text style={styles.allText}>This is <Text style={styles.fruitName}>{this.props.tree.name}</Text></Text>
          <Text style={styles.allText}>It's a new tree! Take care of it.</Text>
          <Text>({this.props.tree.fruits})</Text>
          <Image
            source={require('../assets/0.png')}
            style={{ width: 150, height: 150}}
          />
          <Text style={styles.allText}>Fruits harvested from <Text style={styles.fruitName}>{this.props.tree.name}</Text>: {this.props.tree.fruitsHarvested}</Text>
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
          <Text style={styles.allText}><Text style={styles.fruitName}>{this.props.tree.name}</Text> getting older.</Text>
          <Text style={styles.allText}>He is now <Text style={styles.ageText}>{this.props.tree.age}</Text> years old.</Text>
          <Text>({this.props.tree.fruits})</Text>
          <Image
            source={require('../assets/2.png')}
            style={{ width: 150, height: 150}}
          />
          <Text style={styles.allText}>Fruits harvested from <Text style={styles.fruitName}>{this.props.tree.name}</Text>: {this.props.tree.fruitsHarvested}</Text>
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
          <Text style={styles.allText}><Text style={styles.fruitName}>{this.props.tree.name}</Text> has grown..</Text>
          <Text style={styles.allText}>He is now {this.props.tree.age} years old.</Text>
          <Text>({this.props.tree.fruits})</Text>
          <Image
            source={require('../assets/1.png')}
            style={{ width: 150, height: 150}}
          />
          <Text style={styles.allText}>Fruits harvested from <Text style={styles.fruitName}>{this.props.tree.name}</Text>: {this.props.tree.fruitsHarvested}</Text>
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
    } else if (this.props.tree.age >= half) {
      return (
        <View style={styles.containerMature}>
          <Text style={styles.allText}>Now you can harvest <Text style={styles.fruitName}>{this.props.tree.name}</Text>!</Text>
          <Text style={styles.allText}>Let's celebrate its {this.props.tree.age}th birthday.</Text>
          <Text>({this.props.tree.fruits})</Text>
          <Image
            source={require('../assets/3.png')}
            style={{ width: 150, height: 150}}
          />
          <Text style={styles.allText}>Fruits harvested from <Text style={styles.fruitName}>{this.props.tree.name}</Text>: {this.props.tree.fruitsHarvested}</Text>
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
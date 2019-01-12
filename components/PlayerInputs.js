import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Dimensions,
} from 'react-native';
import { Entypo } from '@expo/vector-icons'
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import Colors from '../constants/Colors';
import { addPlayer, updatePlayerName } from '../actions/players';

class PlayerInputs extends React.Component {
  handleChange = (name, index) => {
    this.props.dispatch(updatePlayerName(name, index));
  };
  handlePress = () => {
    this.props.dispatch(addPlayer());
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          {this.props.players.map((player, i) => {
            return (
              <TextInput
                key={i}
                style={styles.playerName}
                value={player.name}
                onChangeText={(name) => this.handleChange(name, i)}
              />
            );
          })}
          <TouchableOpacity
            onPress={this.handlePress}
          >
            <Entypo
              style={styles.addBtn}
              name={'circle-with-plus'}
              size={35}
            />
          </TouchableOpacity>
        </ScrollView>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('GameView')}
        >
          <Text style={styles.startBtn}>Start</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    players: state.playersReducer.players
  };
}

export default withNavigation(connect(mapStateToProps)(PlayerInputs));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gameBackgroundColor,
  },
  contentContainer: {
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerName: {
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: Dimensions.get('window').width / 1.5,
    color: Colors.white,
    fontSize: 35,
    textAlign: 'left',
    fontFamily: 'space-mono',
  },
  startBtn: {
    fontFamily: 'space-mono',
    color: Colors.yellow,
    fontSize: 35,
    textAlign: 'center',
  },
  addBtn: {
    paddingTop: 10,
    fontFamily: 'space-mono',
    color: Colors.orange,
    fontSize: 35,
    textAlign: 'center',
  },
});

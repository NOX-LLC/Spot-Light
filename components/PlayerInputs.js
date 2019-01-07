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
import Colors from '../constants/Colors';

class PlayerInputs extends React.Component {
  state =  {
    players: [
      {
        name: 'player1',
        numberOfPoints: 0,
      },
      {
        name: 'player2',
        numberOfPoints: 0,
      },
      {
        name: 'player3',
        numberOfPoints: 0,
      },
    ]
  };
  handleChange = (name, index) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.map((player, i) => {
          if (i !== index) {
            return player;
          }
          return {
            ...player,
            name,
          };
        })
      };
    });
  };
  addPlayer = () => {
    this.setState((prevState) => {
      const playersLength = prevState.players.length;
      return {
        players: [
          ...prevState.players,
          {
            name: `player${playersLength + 1}`,
            numberOfPoints: 0,
          },
        ],
      };
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          {this.state.players.map((player, i) => {
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
            onPress={this.addPlayer}
          >
            <Entypo
              style={styles.addBtn}
              name={'circle-with-plus'}
              size={35}
            />
          </TouchableOpacity>
        </ScrollView>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('GameView', {
            players: this.state.players
          })}
        >
          <Text style={styles.startBtn}>Start</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(PlayerInputs);

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

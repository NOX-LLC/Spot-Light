import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../constants/Colors';

export default class HomeScreen extends React.Component {
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
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Spot-Light</Text>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          {this.state.players.map((player, i) => {
            return (
              <Text key={i} style={styles.playerName}>
                {player.name}
              </Text>
            );
          })}
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('GameView', {
              players: this.state.players
            })}
          >
            <Text style={styles.startBtn}>Start</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gameBackgroundColor,
  },
  contentContainer: {
    paddingTop: 30,
  },
  headerTitle: {
    fontFamily: 'space-mono',
    color: Colors.orange,
    fontSize: 35,
    textAlign: 'center',
  },
  playerName: {
    color: Colors.white,
    fontSize: 35,
    textAlign: 'center',
    fontFamily: 'space-mono',
  },
  startBtn: {
    fontFamily: 'space-mono',
    color: Colors.yellow,
    fontSize: 35,
    textAlign: 'center',
  },
});

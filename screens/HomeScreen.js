import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

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
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          {this.state.players.map((player, i) => {
            return <Text key={i}>{player.name}</Text>
          })}
          <TouchableOpacity onPress={() => this.props.navigation.navigate('GameView', {
            players: this.state.players
          })}>
            <Text>Start</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
});

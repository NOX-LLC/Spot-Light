import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Colors from '../constants/Colors';
import PlayerInputs from '../components/PlayerInputs';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Spot-Light</Text>
        <PlayerInputs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gameBackgroundColor,
  },
  headerTitle: {
    fontFamily: 'space-mono',
    color: Colors.orange,
    fontSize: 35,
    textAlign: 'center',
  },
});

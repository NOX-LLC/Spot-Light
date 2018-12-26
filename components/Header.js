import React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default class Header extends React.Component {
  render() {
    const { playerName } = this.props;
    return (
      <View style={styles.row}>
        <Text>{playerName}</Text>
        <Ionicons
          name={Platform.OS === 'ios' ? 'ios-close-circle' : 'close-circle-outline'}
          size={50}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 2,
    alignItems: 'center',
    height: 45,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
});


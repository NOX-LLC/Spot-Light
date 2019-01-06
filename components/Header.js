import React from 'react';
import { Text, View, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors';

class Header extends React.Component {
  render() {
    const { playerName } = this.props;
    return (
      <View style={styles.row}>
        <Text style={styles.header}>{playerName}</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Main')}
        >
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-close-circle' : 'close-circle-outline'}
            size={35}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(Header);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    height: 45,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  header: {
    fontFamily: 'space-mono',
    fontSize: 30,
    color: Colors.orange,
  },
});


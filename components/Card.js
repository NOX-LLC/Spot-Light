import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';

export default class Card extends React.Component {
  render() {
    const { handleHigherLowerSelect, currentCard } = this.props;
    if (currentCard === null) {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={handleHigherLowerSelect.bind({}, 'higher')}>
            <View>
              <Text>{`${currentCard.suit} ${currentCard.value}`}</Text>
              <Text>HIGHER</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleHigherLowerSelect.bind({}, 'lower')}>
            <View>
              <Text>LOWER</Text>
              <Text>{`${currentCard.suit} ${currentCard.value}`}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#fff',
  },
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
  },
});


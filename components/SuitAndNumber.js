import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import cardKeyValue from '../helpers/cardKeyValue';
import { MaterialCommunityIcons } from '@expo/vector-icons';

handleSuit = ({ suit }) => {
  let name = '';
  if (suit === 'Diamonds') {
    name = 'cards-diamond';
  } else if (suit === 'Clubs') {
    name = 'cards-club';
  } else if (suit === 'Spades') {
    name = 'cards-spade';
  } else {
    name = 'cards-heart';
  }
  return (
    <MaterialCommunityIcons
      name={name}
      style={styles.suitAndNumber}
      size={50}
      color={Colors.yellow}
    />
  );
};

export default SuitAndNumber = ({
  currentCard,
  style = {},
  reverse = false,
}) => {
  return (
    <View style={[styles.container, style]}>
      {reverse ? handleSuit({ suit: currentCard.suit }) : null}
      <Text style={[styles.suitAndNumber, styles.text]}>
        {cardKeyValue({ value: currentCard.value })}
      </Text>
      {reverse ? null : handleSuit({ suit: currentCard.suit })}
    </View>
  );
};

const styles = StyleSheet.create({
  suitAndNumber: {
    color: Colors.yellow,
    textAlign: 'center',
    fontFamily: 'space-mono',
  },
  text: {
    fontSize: 35,
  },
  container: {
    flex: 1,
    position: 'absolute',
  },
});

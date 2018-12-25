import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';

// TODO: remove from this file
function shuffle (array) {
  let length = 0
    , index = 0
    , temp = null

  for (length = array.length - 1; length > 0; length -= 1) {
    index = Math.floor(Math.random() * (length + 1));
    temp = array[length];
    array[length] = array[index];
    array[index] = temp;
  }
  return array;
}
function deck(){
  const names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const suits = ['Hearts','Diamonds','Spades','Clubs'];
  var cards = [];

  for( var s = 0; s < suits.length; s++ ) {
    for( var n = 0; n < names.length; n++ ) {
      cards.push({
        value: n + 1,
        name: names[n],
        suit: suits[s]
      });
    }
  }

  return cards;
}

export default class GameView extends React.Component {
  state = {
    isSpotLight: false,
    multiplier: 0,
    currentPlayerIndex: 0,
    cardsAlreadyUsed: [],
    currentCard: null,
    nextCard: null,
    deckOfCards: [],
  };
  handleHigherLowerSelect = (option) => {
    const { isSpotLight, multiplier, currentCard, nextCard } = this.state;
    // if isSpotLight
    //  current === previous -> go to next player
    //  current !== previous ->
    //    isSpotLight === true -> game over for player
    //    isSpotLight !== true -> change isSpotLight=true, same player, go NextCard
    console.log('current/next', currentCard.value, nextCard.value);
    console.log('option', this.isHigherOrLower(option));
  };
  isHigherOrLower = (option) => {
    const { currentCard, nextCard } = this.state;
    if (option === 'higher') {
      if (currentCard.value < nextCard.value) return true;
    } else { // option === 'lower'
      if (currentCard.value > nextCard.value) return true;
    }
    return false;
  };

  componentDidMount() {
    const deckOfCards = deck();

    this.setState(() => {
      const currentCard = shuffle(deckOfCards).pop();
      const nextCard = deckOfCards.pop();
      const cardsAlreadyUsed = [currentCard];

      return {
        currentCard,
        deckOfCards,
        cardsAlreadyUsed,
        nextCard,
      };
    });
  }

  render() {
    const { isSpotLight, multiplier, currentPlayerIndex, currentCard } = this.state;
    const { players } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Header
          playerName={players[currentPlayerIndex].name}
          isSpotLight={isSpotLight}
          multiplie={multiplier}
        />
        <Card
          handleHigherLowerSelect={this.handleHigherLowerSelect}
          currentCard={currentCard}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import shuffle from '../helpers/shuffle';
import deck from '../helpers/deck';

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
    console.log('current/next', currentCard.value, nextCard.value);
    console.log('option', this.isHigherOrLower(option));
    if (this.isHigherOrLower(option)) {
      alert('Correct!');
    } else {
      alert('Wrong!');
    }
    // go to next card
    // go to next player
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

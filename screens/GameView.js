import React from 'react';
import { View, StyleSheet } from 'react-native';
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
  componentDidMount() {
    const deckOfCards = deck();

    this.setState(() => {
      const currentCard = shuffle(deckOfCards).pop();
      const nextCard = deckOfCards[0];
      const cardsAlreadyUsed = [currentCard];

      return {
        currentCard,
        deckOfCards,
        cardsAlreadyUsed,
        nextCard,
      };
    });
  }
  handleHigherLowerSelect = (option) => {
    const { currentCard, nextCard } = this.state;
    if (this.isHigherOrLower(option)) {
      console.log(`Correct: ${nextCard.value} is ${option} then ${currentCard.value}`);
      // alert(`Correct: ${nextCard.value} is ${option} then ${currentCard.value}`);
    } else {
      console.log(`Incorrect: ${nextCard.value} is NOT ${option} then ${currentCard.value}`);
      // alert(`Incorrect: ${nextCard.value} is NOT ${option} then ${currentCard.value}`);
    }
    this.goToNextCard();
    this.goToNextPlayer()
  };
  goToNextPlayer = () => {
    const { currentPlayerIndex } = this.state;
    const { players } = this.props.navigation.state.params;

    if (currentPlayerIndex + 1 < players.length) {
      this.setState((prevState) => {
        return { currentPlayerIndex: prevState.currentPlayerIndex + 1 };
      })
    } else {
      this.setState(() => {
        return { currentPlayerIndex: 0 };
      })
    }
  };
  goToNextCard = () => {
    const { deckOfCards, cardsAlreadyUsed } = this.state;

    this.setState(() => {
      const newCurrentCard = deckOfCards[0];
      const newNextCard = deckOfCards[1];

      // remove first card from deck and add it to the cardsAlreadyUsed pile
      let newDeckOfCards = deckOfCards.filter((item, i) => i !== 0);
      let newCardsAlreadyUsed = cardsAlreadyUsed.concat(newCurrentCard);

      // re-shuffle cardsAlreadyUsed back into deck
      if (newDeckOfCards.length === 1) {
        const tempNewDeck = shuffle(cardsAlreadyUsed);
        // add the last card back into the deck
        tempNewDeck.concat(newDeckOfCards[0]);
        newDeckOfCards = tempNewDeck;
        // add current and next cards into cards already in use
        newCardsAlreadyUsed = [newCurrentCard, newNextCard];
      }
      return {
        currentCard: newCurrentCard,
        nextCard: newNextCard,
        deckOfCards: newDeckOfCards,
        cardsAlreadyUsed: newCardsAlreadyUsed,
      };
    });
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

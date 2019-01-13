import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import ActionCard from '../components/ActionCard';
import {
  incrementCardIndex,
  resetCards,
  updateIsEndOfDeck,
} from '../actions/cards';
import { incrementPlayerIndex, updatePlayerIndex } from '../actions/players';

class GameView extends React.Component {
  handleHigherLowerSelect = (option) => {
    const { cards, currentCardIndex, dispatch } = this.props;
    const currentCard = cards[currentCardIndex];
    const nextCard = cards[currentCardIndex + 1];

    if (currentCardIndex < 51) {
      if (this.isOptionCorrect(option)) {
        console.log(`Correct: ${nextCard.value} is ${option} then ${currentCard.value}`);
      } else {
        console.log(`Incorrect: ${nextCard.value} is NOT ${option} then ${currentCard.value}`);
      }
      this.goToNextCard();
      this.goToNextPlayer();
    } else {
      dispatch(updateIsEndOfDeck(true));
      this.goToNextPlayer();
      dispatch(resetCards());
    }
  };
  goToNextPlayer = () => {
    const { dispatch, currentPlayerIndex, players } = this.props;

    if (currentPlayerIndex + 1 < players.length) {
      dispatch(incrementPlayerIndex());
    } else {
      dispatch(updatePlayerIndex(0))
    }
  };
  goToNextCard = () => {
    this.props.dispatch(incrementCardIndex());
  };
  isOptionCorrect = (option) => {
    const { cards, currentCardIndex } = this.props;
    const currentCard = cards[currentCardIndex];
    const nextCard = cards[currentCardIndex + 1];

    if (option === 'higher') {
      if (currentCard.value < nextCard.value) return true;
    } else { // option === 'lower'
      if (currentCard.value > nextCard.value) return true;
    }
    return false;
  };

  render() {
    const { cards, currentCardIndex, currentPlayerIndex, players, isEndOfDeck } = this.props;

    if (isEndOfDeck) {
      return (
        <ActionCard
          text="Everyone Drinks!"
          handlePress={() => {
            this.props.dispatch(updateIsEndOfDeck(false));
          }}
        />
      );
    }

    return (
      <View style={styles.container}>
        <Header
          playerName={players[currentPlayerIndex].name}
        />
        <Card
          handleHigherLowerSelect={this.handleHigherLowerSelect}
          currentCard={cards[currentCardIndex]}
        />
        <Text style={{ flex: 2 }}>Empty view for button</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { cards, currentCardIndex, isEndOfDeck } = state.cardsReducer;
  const { currentPlayerIndex, players } = state.playersReducer;
  const currentCard = cards[currentCardIndex];
  return {
    cards,
    currentCardIndex,
    currentCard,
    currentPlayerIndex,
    players,
    isEndOfDeck
  };
}

export default connect(mapStateToProps)(GameView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

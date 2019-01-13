import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import ActionCard from '../components/ActionCard';
import cardKeyValue from '../helpers/cardKeyValue';
import {
  incrementCardIndex,
  resetCards,
  updateIsEndOfDeck,
  updateDisplayActionCard,
} from '../actions/cards';
import { incrementPlayerIndex, updatePlayerIndex } from '../actions/players';

class GameView extends React.Component {
  state = {
    option: '',
  };
  handleHigherLowerSelect = (option) => {
    const { currentCardIndex, dispatch } = this.props;

    if (currentCardIndex < 51) {
      if (!this.isOptionCorrect(option)) {
        this.setState({ option });
        dispatch(updateDisplayActionCard(true));
      }
      this.goToNextCard();
      this.goToNextPlayer();
    } else { // end of the deck
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
    const {
      cards,
      currentCardIndex,
      currentPlayerIndex,
      players,
      isEndOfDeck,
      displayActionCard,
    } = this.props;

    if (displayActionCard) {
      const lastPlayer = players[
        currentPlayerIndex === 0 ? players.length - 1 : currentPlayerIndex -1
      ].name;
      const lastCardValue = cards[currentCardIndex - 1].value;
      const currentCard = cards[currentCardIndex].value;
      const option = this.state.option;

      return (
        <ActionCard
          text={`${cardKeyValue({ value: currentCard })} was not ${option} then ${cardKeyValue({ value: lastCardValue })}. ${lastPlayer} take ${lastCardValue} drinks!`}
          handlePress={() => {
            this.props.dispatch(updateDisplayActionCard(false));
          }}
        />
      );
    }
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
  const { cards, currentCardIndex, isEndOfDeck, displayActionCard } = state.cardsReducer;
  const { currentPlayerIndex, players } = state.playersReducer;
  const currentCard = cards[currentCardIndex];
  return {
    cards,
    currentCardIndex,
    currentCard,
    currentPlayerIndex,
    players,
    isEndOfDeck,
    displayActionCard,
  };
}

export default connect(mapStateToProps)(GameView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

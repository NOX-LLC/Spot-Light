import {
  INCREMENT_CARD_INDEX,
  RESET_CARDS,
  UPDATE_IS_END_OF_DECK
} from '../actions/cards';
import deck from '../helpers/deck';
import shuffle from '../helpers/shuffle';

export default function cardsReducer (state = {
  cards: shuffle(deck()),
  currentCardIndex: 0,
  isEndOfDeck: false,
}, action) {
  switch (action.type) {
    case INCREMENT_CARD_INDEX :
      return {
        ...state,
        currentCardIndex: state.currentCardIndex + 1,
      };
    case RESET_CARDS :
      return {
        ...state,
        cards: shuffle(deck()),
        currentCardIndex: 0,
      };
    case UPDATE_IS_END_OF_DECK :
      return {
        ...state,
        isEndOfDeck: action.isEndOfDeck,
      };
    default:
      return state;
  }
};
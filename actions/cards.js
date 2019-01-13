export const INCREMENT_CARD_INDEX = 'INCREMENT_CARD_INDEX';
export const RESET_CARDS = 'RESET_CARDS';
export const UPDATE_IS_END_OF_DECK = 'UPDATE_IS_END_OF_DECK';
export const UPDATE_DISPLAY_ACTION_CARD = 'UPDATE_DISPLAY_ACTION_CARD';

export function incrementCardIndex () {
  return {
    type: INCREMENT_CARD_INDEX,
  };
}

export function updateDisplayActionCard (displayActionCard) {
  return {
    type: UPDATE_DISPLAY_ACTION_CARD,
    displayActionCard,
  };
}

export function resetCards () {
  return {
    type: RESET_CARDS,
  };
}

export function updateIsEndOfDeck (isEndOfDeck) {
  return {
    type: UPDATE_IS_END_OF_DECK,
    isEndOfDeck,
  };
}

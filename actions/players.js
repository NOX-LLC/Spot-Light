export const ADD_PLAYER = 'ADD_PLAYER';
export const UPDATE_PLAYER_NAME = 'UPDATE_PLAYER_NAME';
export const INCREMENT_PLAYER_INDEX = 'INCREMENT_PLAYER_INDEX';
export const UPDATE_CURRENT_PLAYER_INDEX = 'UPDATE_CURRENT_PLAYER_INDEX';

export function addPlayer () {
  return {
    type: ADD_PLAYER,
  };
}

export function incrementPlayerIndex () {
  return {
    type: INCREMENT_PLAYER_INDEX,
  };
}

export function updatePlayerIndex (newIndex) {
  return {
    type: UPDATE_CURRENT_PLAYER_INDEX,
    newIndex,
  };
}

export function updatePlayerName (name, index) {
  return {
    type: UPDATE_PLAYER_NAME,
    data: {
      name,
      index,
    },
  };
}

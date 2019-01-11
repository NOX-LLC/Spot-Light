export const ADD_PLAYER = 'ADD_PLAYER';
export const UPDATE_PLAYER_NAME = 'UPDATE_PLAYER_NAME';

export function addPlayer () {
  return {
    type: ADD_PLAYER,
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

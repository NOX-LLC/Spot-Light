import {
  ADD_PLAYER,
  UPDATE_PLAYER_NAME,
  INCREMENT_PLAYER_INDEX,
  UPDATE_CURRENT_PLAYER_INDEX
} from '../actions/players';

export default function playersReducer (state = {
  players: [
    {
      name: 'player1',
      numberOfPoints: 0,
    },
    {
      name: 'player2',
      numberOfPoints: 0,
    },
    {
      name: 'player3',
      numberOfPoints: 0,
    },
  ],
  currentPlayerIndex: 0,
}, action) {
  switch (action.type) {
    case ADD_PLAYER : {
      const playersLength = state.players.length;
      return {
        ...state,
        players: [
          ...state.players,
          {
            name: `player${playersLength + 1}`,
            numberOfPoints: 0,
          },
        ],
      };
    }
    case UPDATE_PLAYER_NAME :
      return {
        ...state,
        players: state.players.map((player, i) => {
          if (i !== action.data.index) {
            return player;
          }
          return {
            ...player,
            name: action.data.name,
          };
        })
      };
    case INCREMENT_PLAYER_INDEX :
      return {
        ...state,
        currentPlayerIndex: state.currentPlayerIndex + 1,
      };
    case UPDATE_CURRENT_PLAYER_INDEX :
      return {
        ...state,
        currentPlayerIndex: action.newIndex,
      };
    default:
      return state;
  }
};

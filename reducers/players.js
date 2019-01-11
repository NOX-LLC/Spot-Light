import { ADD_PLAYER, UPDATE_PLAYER_NAME } from '../actions/players';

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
    default:
      return state;
  }
};

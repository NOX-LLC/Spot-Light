import { combineReducers } from 'redux';
import playersReducer from './players';
import cardsReducer from './cards';

export default combineReducers({
  playersReducer,
  cardsReducer,
})

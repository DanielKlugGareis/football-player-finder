import * as t from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  name: '',
  age: '',
  position: '',
  searching: false
});

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case t.UPDATE:
    
      return {
        ...state,
        [action.payload.filter]: action.payload.text
      }

    case t.CLEAR:

      return initialState;

    case t.SEARCH:

      return {
        ...state,
        searching: action.payload.value
      }

    default:
      return state;
  }

};
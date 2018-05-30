import * as actionTypes from '../actionTypes';
import { Reducer } from 'redux-testkit';
import { reducer } from '../reducer';

const initialState = {
  name: '',
  age: '',
  position: '',
  searching: false
};

//To perform test we should keep initial state value

describe('Filter module reducer', () => {
  it('should have initial state', () => {
    expect(reducer()).toEqual(initialState);
  });
  it('should not affect state', () => {
    Reducer(reducer).expect({type: 'NOT_EXISTING'}).toReturnState(initialState);
  });

  it('should update filters', () => {
    const text = 'test';
    const filter = 'name';
    const action = { type: actionTypes.UPDATE, payload: { text, filter } };
    Reducer(reducer).expect(action).toReturnState({ ...initialState, name: 'test' });
  });
  it('should allow to search ', () => {
    const value = true;
    const action = { type: actionTypes.SEARCH, payload: {value} };
    Reducer(reducer).expect(action).toReturnState({...initialState,searching:value});
  });
  it('should stop searching and clear', () => {
    const expected = { ...initialState,searching: false };
    const action = { type: actionTypes.CLEAR, payload:{} };
    Reducer(reducer).expect(action).toReturnState(initialState);
  });
});


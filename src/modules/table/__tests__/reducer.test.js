import * as actionTypes from '../actionTypes';
import { Reducer } from 'redux-testkit';
import { reducer } from '../reducer';

const initialState = {

  data: [],
  isLoading: false,
  error: false

};

const mockData = [
  {
    contractUntil: '2022-06-30',
    dateOfBirth: '1993-05-13',
    jerseyNumber: 9,
    name: 'Romelu Lukaku',
    nationality: 'Belgium',
    position: 'Centre-Forward'
  },
  {
    contractUntil: '2019-06-30',
    dateOfBirth: '1990-11-07',
    jerseyNumber: 1,
    name: 'David de Gea',
    nationality: 'Spain',
    position: 'Keeper'
  }];

describe('Table module reducer', () => {
  it('should have initial state', () => {
    expect(reducer()).toEqual(initialState);
  });
  it('should not affect state', () => {
    Reducer(reducer).expect({ type: 'NOT_EXISTING' }).toReturnState(initialState);
  });

  it('should request data', () => {
    const action = { type: actionTypes.REQUEST_DATA, payload: {} };
    Reducer(reducer).expect(action).toReturnState({ ...initialState, isLoading: true });
  });
  it('should request data success ', () => {
    const action = { type: actionTypes.REQUEST_DATA_SUCCESS, payload: { data: mockData } };
    Reducer(reducer).expect(action).toReturnState({ ...initialState, isLoading: false, data: mockData });
  });
  it('should request data success ', () => {
    const action = { type: actionTypes.REQUEST_DATA_ERROR, payload: {} };
    Reducer(reducer).expect(action).toReturnState({ ...initialState, isLoading: false, data: [], error: true });
  });

});


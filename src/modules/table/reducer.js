import * as t from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    data: [],
    isLoading: false,
    error: false
});

export const reducer = (state = initialState, action = {}) => {
    state = state || initialState;
    switch (action.type) {
        case t.REQUEST_DATA:

            return {
                ...state,
                isLoading: true
            }

        case t.REQUEST_DATA_SUCCESS:

            return {
                ...state,
                isLoading: false,
                data: action.payload.data
            }


        case t.REQUEST_DATA_ERROR:

            return {
                ...state,
                isLoading: false,
                data: [],
                error:true
            }

        default:
            return state;
    }

};
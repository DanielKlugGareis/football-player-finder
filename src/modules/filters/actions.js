import * as t from './actionTypes';

export const update = (text, filter) => ({
    type: t.UPDATE,
    payload: { text, filter }
});

export const search = (value) => ({
    type: t.SEARCH,
    payload: { value }
});

export const clear = () => ({
    type: t.CLEAR,
    payload: {}
})
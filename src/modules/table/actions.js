import  * as t  from './actionTypes';

export const getData = () => ({
    type: t.REQUEST_DATA,
    payload: {  }   
});

export const getDataSuccess = (data) => ({
    type: t.REQUEST_DATA_SUCCESS,
    payload: { data }   
});

export const getDataError = (data) => ({
    type: t.REQUEST_DATA_ERROR,
    payload: { data }   
});


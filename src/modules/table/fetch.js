import * as actions from '../table/actions';
import { URL } from '../table/constants';

export const fetchData = (params) => {
  return (dispatch) => {
    dispatch(actions.getData());
    return fetch(URL, { method: 'GET' })
      .then(response => Promise.all([response, response.json()])).then(([response, json]) => {
        if (response.status === 200) {
          dispatch(actions.getDataSuccess(json));
        }
        else {
          dispatch(actions.getDataError(response));
        }
      })
  }
}


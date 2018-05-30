import * as actionTypes from '../actionTypes';
import * as actions from '../actions';


describe('Filter module actions', () => {
    it('should fire getData action ', () => {
        const action = actions.getData();
        expect(action).toEqual({
            type: actionTypes.REQUEST_DATA,
            payload: {},
        });
    });
    it('should fire getData action success', () => {
        const data = [];
        const action = actions.getDataSuccess(data);
        expect(action).toEqual({
            type: actionTypes.REQUEST_DATA_SUCCESS,
            payload: { data }
        });
    });
    it('should fire getData action error', () => {
        const data = [];
        const action = actions.getDataError(data);
        expect(action).toEqual({
            type: actionTypes.REQUEST_DATA_ERROR,
            payload: { data }
        });
    });
});

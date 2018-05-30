import * as actionTypes from '../actionTypes';
import * as actions from '../actions';

describe('Filter module actions', () => {
    it('should fire update action', () => {
        const text = 'test';
        const filter = 'name'
        
        const action = actions.update(text, filter);
        expect(action).toEqual({
            type: actionTypes.UPDATE,
            payload: { text, filter },
        });
    });
    it('should fire search action', () => {
        const value = true;
        const action = actions.search(value);
        expect(action).toEqual({
            type: actionTypes.SEARCH,
            payload: { value }
        });
    });
    it('should fire clean action', () => {
        const action = actions.clear();
        expect(action).toEqual( {
            type: actionTypes.CLEAR,
            payload:{}
        });
    });
});

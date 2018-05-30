import Immutable from 'seamless-immutable';
import { reducer } from '../reducer';
import { Selector } from 'redux-testkit';
import * as selectors from '../selectors';


const emptyState = Immutable({
  filters: {
    name: '',
    age: '',
    position: '',
    searching: false
  }
});


const fullState = Immutable({
  filters: {
    name: 'Lu',
    age: '25',
    position: 'Attacking Midfield',
    searching: true
  }
});



describe('Filter module selectors', () => {
  it('should get name when empty', () => {
    const result = '';
    Selector(selectors.getFiltersName).expect(emptyState).toReturn(result);
  });

  it('should get name when full', () => {
    const result = 'Lu';
    Selector(selectors.getFiltersName).expect(fullState).toReturn(result);
  });

  it('should get age when empty', () => {
    const result = '';
    Selector(selectors.getFiltersAge).expect(emptyState).toReturn(result);
  });

  it('should get age when full', () => {
    const result = '25';
    Selector(selectors.getFiltersAge).expect(fullState).toReturn(result);
  });
  
  it('should get position when empty', () => {
    const result = '';
    Selector(selectors.getFiltersPosition).expect(emptyState).toReturn(result);
  });

  it('should get position when full', () => {
    const result = 'Attacking Midfield';
    Selector(selectors.getFiltersPosition).expect(fullState).toReturn(result);
  });
    
  it('should get searching', () => {
    const result = false;
    expect(selectors.getFiltersSearch(emptyState)).toBe(result);
  });

});







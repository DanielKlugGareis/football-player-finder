import Immutable from 'seamless-immutable';
import { reducer } from '../reducer';
import { Selector } from 'redux-testkit';
import * as selectors from '../selectors';
import * as filtersSelector from '../../filters/selectors'


const emptyState = Immutable({
  filters: {
    name: '',
    age: '',
    position: '',
    searching: false
  },
  playersTable: {
    data: []
  }
});


let fullState = Immutable({
  filters: {
    name: 'Lu',
    age: '25',
    position: 'Centre-Forward',
    searching: true
  },
  playersTable: {
    data: [
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
      },
      {
        "contractUntil": "2021-06-30",
        "dateOfBirth": "1987-02-22",
        "jerseyNumber": 20,
        "name": "Sergio Romero",
        "nationality": "Argentina",
        "position": "Keeper"
      }]
  }
});



describe('Table module selectors', () => {

  it('should nothing on empty', () => {
    Selector(selectors.dataSelector).expect(emptyState).toReturn(emptyState.playersTable.data);
  });

  it('should get all on complete', () => {
    Selector(selectors.dataSelector).expect(fullState).toReturn(fullState.playersTable.data);
  });

  it('should get all on complete', () => {
    const result = fullState.playersTable.data;
    Selector(selectors.dataSelector).expect(fullState).toReturn(result);
  });

  it('should get all maping age property', () => {
    const result = Selector(selectors.dataAgeSelector).execute(fullState).every(p => p.hasOwnProperty('age'));
    expect(result).toBe(true);
  });

  it('should get filtered player', () => {
    const name = filtersSelector.getFiltersName(fullState);
    const age = filtersSelector.getFiltersAge(fullState);
    const position = filtersSelector.getFiltersPosition(fullState);
    const expected = [
      {
        "age": "25",
        contractUntil: '2022-06-30',
        dateOfBirth: '1993-05-13',
        jerseyNumber: 9,
        name: 'Romelu Lukaku',
        nationality: 'Belgium',
        position: 'Centre-Forward'
      }
    ]
    Selector(selectors.dataFilteredSelector).expect(fullState).toReturn(expected);

  });

  it('should get various players when filter is missing', () => {
    //another test
    const newState = Immutable.merge(fullState, { filters: { name: '', age: '', position: 'Keeper', searching: true } });

    const expected = [
      {
        'age': '27',
        contractUntil: '2019-06-30',
        dateOfBirth: '1990-11-07',
        jerseyNumber: 1,
        name: 'David de Gea',
        nationality: 'Spain',
        position: 'Keeper'
      },
      {
        'age': '31',
        "contractUntil": "2021-06-30",
        "dateOfBirth": "1987-02-22",
        "jerseyNumber": 20,
        "name": "Sergio Romero",
        "nationality": "Argentina",
        "position": "Keeper"
      }
    ]
    Selector(selectors.dataFilteredSelector).expect(newState).toReturn(expected);
  })

  it('should not filter on search off', () => {
    //another test
    const newState = Immutable.merge(fullState, { filters: { name: '', age: '', position: 'Keeper', searching: false } });
    const result = Selector(selectors.dataAgeSelector).execute(newState);
    expect(result.length).toBe(3);
  })
});







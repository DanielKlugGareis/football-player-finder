import { createSelector } from 'reselect';
import { getAge, NAME } from './constants';
import * as filtersSelectors from '../filters/selectors';


export const dataSelector = state => state[NAME].data;

export const dataAgeSelector = createSelector(
    dataSelector,
    data => data.map(player => ({
        ...player,
        age: !player.dateOfBirth ? '' : getAge(player.dateOfBirth).toString(),
    })),
);


export const dataFilteredSelector = createSelector(
    dataAgeSelector,
    filtersSelectors.getFiltersName,
    filtersSelectors.getFiltersAge,
    filtersSelectors.getFiltersPosition,
    filtersSelectors.getFiltersSearch,
    (data, name, age, position, searching) => {
        if (searching) {
            let auxName = !name ? data : data.filter(p => (p.name.search(new RegExp(name, "i")) > 0));
            let auxPosition = !position ? auxName : data.filter(p => p.position === position);
            return !age ? auxPosition : auxPosition.filter(p => p.age === age);
        } else { return data; }
    }
);
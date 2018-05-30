import { connect } from 'react-redux'
import Filters from './filters';
import * as selectors from '../selectors';
import * as actions from '../actions';


const mapStateToProps = (state) => ({
    filtersName: selectors.getFiltersName(state),
    filtersAge: selectors.getFiltersAge(state),
    filtersPosition: selectors.getFiltersPosition(state)
});

const mapDispatchToProps = dispatch => ({
    setFiltersName(filtersName) {
        dispatch(actions.update(filtersName, "name"));
    },
    setFiltersAge(filtersAge) {
        dispatch(actions.update(filtersAge, "age"));
    },
    setFiltersPosition(filtersPosition) {
        dispatch(actions.update(filtersPosition,"position"));
    },
    setSearching(value){
        dispatch(actions.search(value));
    },
    setClear(){
        dispatch(actions.clear());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);

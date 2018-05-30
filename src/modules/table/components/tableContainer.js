import { connect } from 'react-redux'
import AppTable from './table';
import * as selectors from '../selectors';
import * as actions from '../actions';
import { fetchData } from '../fetch';


const mapStateToProps = (state) => ({
    data: selectors.dataFilteredSelector(state),
});

const mapDispatchToProps = dispatch => ({
    componentMount() {
        dispatch(fetchData());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AppTable)

import  Filters  from '../../components/filters';
import { shallow } from 'enzyme';
import React from 'react';
import SelectCombo from '../../components/selectCombo';
import InputFilter from '../../components/inputFilter';
import {Button} from 'reactstrap';

const mockProps = {
  filtersName: '',
  filtersAge: '',
  filtersPoisition: '',
  setFiltersName: jest.fn(),
  setFiltersAge: jest.fn(),
  setFiltersPosition: jest.fn(),
  setSearching: jest.fn(),
  setClear: jest.fn()
}

describe('<Filters />', () => {
  it('renders a filters component complete', () => {
    const wrapper = shallow(
      <Filters {...mockProps} />
    );
    expect(wrapper.find(SelectCombo).length).toBe(1);
    expect(wrapper.find(InputFilter).length).toBe(2);
    expect(wrapper.find(Button).length).toBe(2);

  });

  it('it should handle shearching click no filter', () => {
    const wrapper = shallow(
      <Filters {...mockProps} />
    );
    wrapper.find('.button-search').simulate('click');
    expect(mockProps.setSearching).not.toHaveBeenCalled();
  });

  
  it('it should handle shearching click  filter', () => {
    mockProps.filtersName = 'Lu';
    const wrapper = shallow(
      <Filters {...mockProps} />
    );
    wrapper.find('.button-search').simulate('click');
    expect(mockProps.setSearching).toHaveBeenCalled();
    
  });
  
  it('it should handle clear click', () => {
    const wrapper = shallow(
      <Filters {...mockProps} />
    );
    wrapper.find('.button-clear').simulate('click');
    expect(mockProps.setClear).toHaveBeenCalled();
    
  });


});

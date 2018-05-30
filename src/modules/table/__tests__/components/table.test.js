import  AppTable  from '../../components/table';
import { shallow } from 'enzyme';
import React from 'react';
import {Container} from 'reactstrap';

const mockProps = {
  data:[],
  componentMount: jest.fn()
}

describe('<Table />', () => {
  it('renders a filters component complete and calls', () => {
    const wrapper = shallow(
      <AppTable {...mockProps} />
    );
    expect(wrapper.find(Container).length).toBe(1);
    expect(mockProps.componentMount).toHaveBeenCalled();
  });

});

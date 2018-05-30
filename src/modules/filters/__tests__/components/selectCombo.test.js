import { shallow } from 'enzyme';
import React from 'react';
import SelectCombo from '../../components/selectCombo';
import { Input } from 'reactstrap';

const mockProps = {
    onChange: jest.fn(),
    selected: ''
}

describe('<SelectCombo />', () => {
    beforeEach(() => {
        jest.clearAllMocks();
      });
    

    it('renders a filters input complete', () => {
        const wrapper = shallow(
            <SelectCombo {...mockProps} />
        );
        expect(wrapper.find(Input).length).toBe(1);

    });

    it('it should handle input on change with correct value', () => {
        const wrapper = shallow(
            <SelectCombo {...mockProps} />
        );
        wrapper.find(Input).props().onChange({ target: { value: '' } });
        expect(mockProps.onChange).toHaveBeenCalled();
    });


});

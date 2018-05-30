import { shallow } from 'enzyme';
import React from 'react';
import InputFilter from '../../components/inputFilter';
import { Input } from 'reactstrap';

const mockProps = {
    name: "name",
    pattern: "[a-zA-Z]+",
    onChange: jest.fn(),
    selected: ''
}

describe('<InputFilter />', () => {
    beforeEach(() => {
        jest.clearAllMocks();
      });
    

    it('renders a filters input complete', () => {
        const wrapper = shallow(
            <InputFilter {...mockProps} />
        );
        expect(wrapper.find(Input).length).toBe(1);

    });

    it('it should handle input on change with correct value', () => {
        const wrapper = shallow(
            <InputFilter {...mockProps} />
        );
        wrapper.find(Input).props().onChange({ target: { value: 'lu', checkValidity:jest.fn(() => true) } });
        expect(mockProps.onChange).toHaveBeenCalled();
    });

    it('it should handle input onchange with incorrect value and not modify state', () => {
        const wrapper = shallow(
            <InputFilter {...mockProps} />
        );
        wrapper.find(Input).props().onChange({ target: { value: '123', checkValidity:jest.fn() } });
        expect(mockProps.onChange).not.toHaveBeenCalled();
    });


});

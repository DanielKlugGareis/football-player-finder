import React from 'react';
import { shallow } from 'enzyme'
import  Header from '../header'

describe('Header component', () => {
    describe('render', () => {
        test('should render a header element', () => {
            const component = shallow(<Header/>);
            const header = component.find('header').length;
            expect(header).toBe(1);
        });
    });
});

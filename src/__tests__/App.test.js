import React from 'react';
import { shallow } from 'enzyme'
import  App from '../app'

describe('App component', () => {
    describe('render', () => {
        test('should render a header and main elements', () => {
            const component = shallow(<App/>);
            const header = component.find('Header').length;
            
            const main = component.find('Main').length;
            expect(header).toBe(1);
            expect(main).toBe(1);
        });
    });
});

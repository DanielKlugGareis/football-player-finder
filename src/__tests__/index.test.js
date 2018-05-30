import React from 'react';
import { shallow } from 'enzyme'

describe('Index component', () => {
    describe('render', () => {
        test('should render without crash', () => {
            const root = document.createElement('div');
            root.setAttribute('id', 'root');
            document.body.appendChild(root);
            require('../index');
        });
    });
});

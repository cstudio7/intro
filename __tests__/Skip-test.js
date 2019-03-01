import React from 'react';
import renderer from 'react-test-renderer';
import Skip from '../src/components/Skip.js';


test('Skip renders well', () => {
    const tree = renderer.create(<Skip />).toJSON();
    expect(tree).toMatchSnapshot()
})

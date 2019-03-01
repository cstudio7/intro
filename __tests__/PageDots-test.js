import React from 'react';
import renderer from 'react-test-renderer';
import PageDots from '../src/components/PageDots.js';

test('PageDots renders correctly', () => {
    const tree = renderer.create(<PageDots />).toJSON();
    expect(tree).toMatchSnapshot()
});

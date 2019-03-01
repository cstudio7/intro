import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PageContent from '../src/components/PageContent.js';



Enzyme.configure({ adapter: new Adapter() });


const mockStore = configureMockStore()


describe('PageContent wrapped with redux is ok', () => {
    let wrapper, store;

    const initialState = {currentIndex: 0}

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = shallow(<PageContent store={store} />);
    });

    it('renders alright', () => {
        expect(wrapper).toMatchSnapshot()
    });

    it('gets redux props', () => {
        expect(wrapper.props().currentIndex).toEqual(0)
    });

});

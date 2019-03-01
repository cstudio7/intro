import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import Enzyme, {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';

import Page from '../src/components/Page.js';



Enzyme.configure({ adapter: new Adapter() });


const mockStore = configureMockStore()


describe('Page wrapped with redux is ok', () => {
    let wrapper, store;

    const initialState = {currentIndex: 0}

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = shallow(<Page store={store} />);
    });

    it('renders alright', () => {
        expect(wrapper).toMatchSnapshot()
    });

    it('gets redux props', () => {
        expect(wrapper.props().currentIndex).toEqual(0)
    });

});

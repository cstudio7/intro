import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Paginator from '../src/components/Paginator.js';



Enzyme.configure({ adapter: new Adapter() });


const mockStore = configureMockStore()


describe('Paginator wrapped with redux is ok', () => {
    let wrapper, store;

    const initialState = {currentIndex: 0}

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = shallow(<Paginator store={store} />);
    });

    it('renders alright', () => {
        expect(wrapper).toMatchSnapshot()
    });

    it('gets redux props', () => {
        expect(wrapper.props().currentIndex).toEqual(0)
    });

});

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './src/reducers';
import Page from './src/components/Page';

const pages = [
    { backgroundColor: '#FFFFFF', image: 'https://images.pexels.com/photos/1548992/pexels-photo-1548992.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', title: 'First Page Of Intro (Onboarding)', subtitle: 'This page has a light background' },
    { backgroundColor: "#ff4949", image: 'https://images.pexels.com/photos/861112/pexels-photo-861112.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', title: 'Second Page Of Onboarding', subtitle: 'The background is not light' },
    { backgroundColor: "#FAFAFA", image: 'https://images.pexels.com/photos/1260239/pexels-photo-1260239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', title: 'Third Page Of User Intro', subtitle: 'The background is FAFAFA' },
    { backgroundColor: "#592DEA", image: 'https://images.pexels.com/photos/994197/pexels-photo-994197.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', title: 'Fourth Page Of Onboarding', subtitle: 'The background is indigo (not light)' },
];

const store = createStore(rootReducer);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Page
                    pages={pages}
                    numberOfDots={pages.length}
                />
            </Provider>
        );
    }
}

import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    Animated,
    Image,
    View,
    Text
} from 'react-native';
import PropTypes from 'prop-types';

const PageDots = ({ ...props }) => {

    function numberOfDots() {
        let dots = [];
        for (let i = 0; i < props.numberOfDots; i++) {
            dots.push(i)
        }
        return dots;
    }

    return (
        <View style={styles.container}>
            {numberOfDots().map((dot) =>
                <View
                    key={dot}
                    style={
                        dot === props.currentIndex ?
                            props.lightBackground ?
                                styles.currentDotDark : styles.currentDot
                            :
                            props.lightBackground ?
                                styles.dotDark : styles.dot

                    }
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        zIndex: 2
    },

    currentDot: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#FFF',
        width: 10,
        height: 10,
        borderRadius: 5,
        margin: 2
    },

    dot: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#FFF',
        width: 10,
        height: 10,
        borderRadius: 5,
        margin: 2
    },

    currentDotDark: {
        backgroundColor: '#000',
        borderWidth: 1,
        borderColor: '#000',
        width: 10,
        height: 10,
        borderRadius: 5,
        margin: 2
    },

    dotDark: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#000',
        width: 10,
        height: 10,
        borderRadius: 5,
        margin: 2
    }
});

PageDots.propTypes = {
    numberOfDots: PropTypes.number.isRequired,
    currentIndex: PropTypes.number.isRequired,
    lightBackground: PropTypes.bool.isRequired
}

export default PageDots;

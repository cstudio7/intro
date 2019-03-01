import React from 'react';
import {
    StyleSheet,
    Dimensions,
    TouchableHighlight,
    View,
    Text
} from 'react-native';
import PropTypes from 'prop-types';

const Skip = ({ ...props }) => {
    return (
        <View style={styles.container}>
            <TouchableHighlight
                onPress={() => props.onSkip()}
                underlayColor={props.lightBackground ? '#FAFAFA' : '#999'}
            >
                <Text style={[styles.text, {color: props.lightBackground ? '#000' : '#FAFAFA'}]}>
                    Skip
                </Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 20
    },

    text: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});

Skip.propTypes = {
    numberOfDots: PropTypes.number.isRequired,
    lightBackground: PropTypes.bool,
    onSkip: PropTypes.func
}


export default Skip;

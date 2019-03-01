import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    View,
    Text
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setIndex } from '../actions/PageActions';

import PageDots from './PageDots';

class Paginator extends Component {

    updateCurrentPageIndex = (direction) => {
        //We detect the direction
        //this.props.scroll() passes the direction to
        //the parent = Page.js.
        //In the parent we use the direction to calculate
        // offset along x axis so that we can pass the offset
        // as props to another component and scroll to that offset
        // within that component
        console.log(this.props.currentIndex)
        if (direction === 'prev') {
            if (this.props.currentIndex > 0) {
                this.props.setIndex(this.props.currentIndex-1);
                this.props.scroll('prev')
            }
        }

        if (direction === 'next') {
            if (this.props.currentIndex < (this.props.numberOfDots-1)) {
                this.props.setIndex(this.props.currentIndex + 1);
                this.props.scroll('next')
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.props.currentIndex > 0 ?
                    <TouchableHighlight
                        onPress={() => this.updateCurrentPageIndex('prev')}
                        underlayColor={this.props.lightBackground ? "#FFF" : "#999"}
                    >
                        <Text style={[styles.button, {color: this.props.lightBackground ? '#000' : '#FAFAFA'}]}>
                            Prev
                        </Text>
                    </TouchableHighlight>
                    :
                    <View style={{ padding: 5 }} />
                }
                <View style={{ zIndex: 5 }}>
                    <PageDots
                        numberOfDots={this.props.numberOfDots}
                        currentIndex={this.props.currentIndex}
                        lightBackground={this.props.lightBackground}
                        {...this.props}
                    />
                </View>
                {
                    this.props.currentIndex < (this.props.numberOfDots-1) ?
                    <TouchableHighlight
                        onPress={() => this.updateCurrentPageIndex('next')}
                        underlayColor={this.props.lightBackground ? "#FFF" : "#999"}
                    >
                        <Text style={[styles.button, {color: this.props.lightBackground ? '#000' : '#FAFAFA'}]}>
                            Next
                        </Text>
                    </TouchableHighlight>
                    :
                    <View style={{ padding: 5 }} />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 5,
        paddingLeft: 5,
    },

    button: {
        padding: 5,
        fontWeight: 'bold',
        fontSize: 16,
    }
});

const mapStateToProps = (state) => {
    return {
        currentIndex: state.page.currentIndex
    }
}

Paginator.propTypes = {
    numberOfDots: PropTypes.number.isRequired,
    pages: PropTypes.arrayOf(PropTypes.shape({
        backgroundColor: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired
    })).isRequired,
    scroll: PropTypes.func.isRequired,
    lightBackground: PropTypes.bool.isRequired
}


export default connect(
    mapStateToProps, {
    setIndex
})(Paginator);

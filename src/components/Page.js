import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    StatusBar
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import tinycolor from 'tinycolor2';
import PageContent from './PageContent';
import Paginator from './Paginator';
import Skip from './Skip';

export class Page extends Component {
    state = {
        offsetX: 0
    }


    offsetAlongX = (direction) => {
        // calculate offset along X axis
        // We get this direction from the child = Paginator.js
        // We will pass the value of offset to PageContent.js
        // from where we scrollTo offset
        const { width } = Dimensions.get('window');
        let offsetX = 0;
        if (direction === 'next') {
            offsetX = this.state.offsetX + width;
        } else {
            offsetX = this.state.offsetX - width;
        }
        this.setState({ offsetX });
    }

    lightBackground() {
        // detect if the background color is light or dark
        const color = tinycolor(this.props.pages[this.props.currentIndex].backgroundColor)
        return color.getBrightness() > 180;
    }

    render() {
        return (
            <View
                style={[styles.container, {backgroundColor: this.props.pages[this.props.currentIndex].backgroundColor}]}
            >
                <StatusBar
                    backgroundColor={this.props.pages[this.props.currentIndex].backgroundColor}
                    barStyle={this.lightBackground() ? 'dark-content' : 'light-content'}
                />
                <Skip
                    numberOfDots={this.props.numberOfDots}
                    lightBackground={this.lightBackground()}
                    onSkip={() => console.log('Alert: Navigate to the root App')}
                />
                <PageContent
                    pages={this.props.pages}
                    offsetX={this.state.offsetX} //offset gotten
                    lightBackground={this.lightBackground()}
                />
                <Paginator
                    numberOfDots={this.props.numberOfDots}
                    pages={this.props.pages}
                    scroll={this.offsetAlongX}
                    lightBackground={this.lightBackground()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
});

const mapStateToProps = (state) => {
    return {
        currentIndex: state.page.currentIndex
    }
}

Page.propTypes = {
    pages: PropTypes.arrayOf(PropTypes.shape({
        backgroundColor: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired
    })).isRequired,
    numberOfDots: PropTypes.number.isRequired
};

//Page.defaultProps = {
//
//}

export default connect(mapStateToProps)(Page);

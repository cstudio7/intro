import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    Animated,
    Easing,
    Image,
    View,
    Text,
    ScrollView
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setIndex } from '../actions/PageActions';

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');

class PageContent extends Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.offsetX !== this.props.offsetX) {
            this.ref.scrollTo({ x: this.props.offsetX, y:0, animated: true });
        }
    }

    scrollEvent = (event) => {
        // Get the index which will equal the page index showing
        const currentIndex = Math.round(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
        this.props.setIndex(currentIndex);
    }

    renderPages() {
        return this.props.pages.map((page, index) =>
            <View
                key={index}
                style={styles.pageContainer}
            >
                <Animated.View>
                    <Image
                        style={styles.image}
                        source={{uri: page.image}}
                    />
                </Animated.View>
                <View style={styles.titleView}>
                    <Text style={[styles.titleText, {color: this.props.lightBackground ? '#000' : '#FAFAFA'}]}>
                        {page.title}
                    </Text>
                </View>
                <View>
                    <Text style={[styles.subtitleText, {color: this.props.lightBackground ? '#000' : '#FAFAFA'}]}>
                        {page.subtitle}
                    </Text>
                </View>
            </View>
        );
    }

    render() {
        return (
            <ScrollView
                ref={(ref) => this.ref = ref}
                horizontal
                pagingEnabled={true}
                onMomentumScrollEnd={this.scrollEvent} //triggers when scroll is ending
                scrollEventThrottle={100} //limits the time events fire
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.container}
            >
                {this.renderPages()}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    pageContainer: {
        width: deviceWidth,
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        alignSelf: 'center'
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 5
    },
    subtitleText: {
        fontSize: 16,
        fontWeight: 'normal',
        textAlign: 'center',
        padding: 0,
    },
    titleView: {
        marginTop: 16
    }
})

const mapStateToProps = (state) => {
    return {
        currentIndex: state.page.currentIndex
    }
}

PageContent.propTypes = {
    pages: PropTypes.arrayOf(PropTypes.shape({
        backgroundColor: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired
    })).isRequired,

    offsetX: PropTypes.number.isRequired,
    lightBackground: PropTypes.bool
}


export default connect(
    mapStateToProps, {
    setIndex
})(PageContent);

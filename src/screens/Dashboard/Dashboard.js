/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { connect } from "react-redux";

import { dashboardAction } from '../../store/actions/dashboardActions';

class Dashboard extends Component {

  componentDidMount() {
    this.props.dashboardAction();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.trendingGiphs !== this.props.trendingGiphs) {
      window.console.log('ss', this.props.trendingGiphs);
    }
  }

  render() {
    return (
        <View style={styles.container}>
          {this.props.trendingGiphs && this.props.trendingGiphs.map(giph => (
              <Image src={giph.url} />
          ))}
              <Text>ÖNDY</Text>
        </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    trendingGiphs: state.dashboard.trendingGiphs.images,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dashboardAction: () => dispatch(dashboardAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

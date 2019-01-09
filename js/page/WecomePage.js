import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View
} from 'react-native';
import NavigatorUtil from '../util/NavigatorUtil';
import ThemeDao from '../expand/dao/ThemeDao';

export default class WelcomePage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    new ThemeDao().getTheme().then((data) => {
      this.theme = data;
      console.log(this.theme);
    })
    this.timer = setTimeout(() => {
      NavigatorUtil.resetToHomePage({
        theme: this.theme,
        navigation: this.props.navigation
      })
    },500)

    //console.log(this.props.navigation)
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to WelcomePage</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
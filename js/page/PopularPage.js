import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import LanguageDao, {FLAG_LANGUAGE} from '../expand/dao/LanguageDao';
import NavigationBar from '../common/NavigationBar';


export default class PopularPage extends Component {
  constructor(props) {
    super(props);
    this.languageDao = new LanguageDao(FLAG_LANGUAGE.flag_key)
    this.state = {
      theme: this.props.theme,
      languages: [],
      
    }
    this.loadLanguage();
  }
  loadLanguage() {
    // console.log(this.languageDao.fetch());
    this.languageDao.fetch().then((languages) => {
        console.log(languages);
        if (languages) {
            this.setState({
                languages: languages,
            });
        }
    }).catch((error) => {

    });
    
  }
  renderRightButton() {
    return (
      <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
              onPress={() => {
                  NavigatorUtil.goToSearchPage(this.props);
              }}
          >
              <View style={{padding: 5, marginRight: 8}}>
                  <Image
                      style={{width: 24, height: 24}}
                      source={require('../../res/images/ic_search_white_48pt.png')}
                  />
              </View>

          </TouchableOpacity>
      </View>
    )
}
  render() {
    let statusBar = {
      backgroundColor: this.state.theme.themeColor,
      barStyle: 'light-content',
    }
    let navigationBar = 
      <NavigationBar
        title={'最热'}
        statusBar={statusBar}
        style={this.state.theme.styles.navBar}
        rightButton={this.renderRightButton()}
      />
    let content = 
        <ScrollableTabView
          tabBarUnderlineStyle={{backgroundColor: '#e7e7e7', height: 2}}
          tabBarInactiveTextColor='mintcream'
          tabBarActiveTextColor='white'
          tabBarBackgroundColor={this.state.theme.themeColor}
          initialPage={0}
          renderTabBar={() => <ScrollableTabBar style={{height: 40, borderWidth: 0, elevation: 2}}
          tabStyle={{height: 39}}  />}>
          {
            this.state.languages.map((reuslt, i, arr) => {
              let language = arr[i];
              return language.checked ? <PopularTab key={i} tabLabel={language.name} {...this.props}/> : null;
            })
          }
      </ScrollableTabView>
    return (
      <View style={styles.container}>
        {navigationBar}
        {content}

      </View>
    );
  }
}

class PopularTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: this.props.theme
    }
  }
  render() {
    return null;
  }
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
  }
});
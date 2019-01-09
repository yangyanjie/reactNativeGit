import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Image
} from 'react-native';
// 底部tab;
import TabNavigator from 'react-native-tab-navigator';



// tab 切换页面;
import PopularPage from './PopularPage';
import TrendingPage from './TrendingPage';
import FavoritePage from './FavoritePage';
import MyPage from './my/myPage';

// tab 的切换标志；
export const FLAG_TAB = {
  flag_popularTab: 'tb_popular',
  flag_trendingTab: 'tb_trending',
  flag_favoriteTab: 'tb_favorite',
  flag_my: 'tb_my'
};

// 主题样式；
import ThemeFactory, {ThemeFlags} from '../../res/styles/ThemeFactory'


export default class HomePage extends Component {
  
  constructor(props) {
    super(props);
    this.params = this.props.navigation.state.params;
    let selectedTab = this.params.selectedTab ? this.params.selectedTab : 'tb_popular';
    this.state = {
      selectedTab: selectedTab,
      theme: this.params.theme || ThemeFactory.createTheme(ThemeFlags.Default),
    }
  }
  onTabClick(from, to) {
    this.setState({selectedTab: to})
  }
  _renderTab(Commponent, selectedTab, title, renderIcon) {
    return (
      <TabNavigator.Item 
        title={title}
        selectedTitleStyle={this.state.theme.styles.selectedTitleStyle}
        SelectedIconStyle={this.state.theme.styles.tabBarSelectedIcon}
        selected={this.state.selectedTab === selectedTab}
        renderIcon={() => <Image style={styles.image} source={renderIcon} />}
        renderSelectedIcon={() => <Image style={[styles.image,this.state.theme.styles.tabBarSelectedIcon]} source={renderIcon} />}
        onPress={() => this.onTabClick(this.state.selectedTab, selectedTab)}

      >
        <Commponent {...this.props} theme={this.state.theme}/>
      </TabNavigator.Item>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          {this._renderTab(PopularPage, FLAG_TAB.flag_popularTab,'最热', require('../../res/images/ic_polular.png'))}
          {this._renderTab(TrendingPage, FLAG_TAB.flag_trendingTab, '趋势', require('../../res/images/ic_trending.png'))}
          {this._renderTab(FavoritePage, FLAG_TAB.flag_favoriteTab, '收藏', require('../../res/images/ic_favorite.png'))}
          {this._renderTab(MyPage, FLAG_TAB.flag_my,'我的', require('../../res/images/ic_my.png'))}
          
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  selectedTitle: {
    color: '#2196F3'
  },
  tabBarSelectedIcon: {
    tintColor: '#2196F3'
  },
  image: {
    width: 26,
    height: 26
  }
});
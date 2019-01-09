import {StackActions,NavigationActions} from 'react-navigation';

export default class NavigatorUtil {
    /**
     * 跳转首页
     */
    static resetToHomePage(params) {
        //console.log(params);
        const {navigation, theme, selectedTab} = params;
        const resetAction = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: "HomePage",
                    params: {
                        theme: theme,
                        selectedTab: selectedTab
                    }
                })
            ]
        });
        navigation.dispatch(resetAction);
    }

}
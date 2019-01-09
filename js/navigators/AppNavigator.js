import { createStackNavigator, createAppContainer } from "react-navigation";
import HomePage from '../page/HomePage';
import WelcomePage from '../page/WecomePage';

const StackNavigator = createStackNavigator({
    WelcomePage: {
        screen: WelcomePage
    },
    HomePage: {
        screen: HomePage
    },
},{
    defaultNavigationOptions: {
        header:null
    }
})

export const AppNavigator =  createAppContainer(StackNavigator);
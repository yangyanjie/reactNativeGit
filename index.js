/** @format */

import {AppRegistry} from 'react-native';
import setup from './js/page/setup'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => setup);

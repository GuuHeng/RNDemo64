/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import App from './App';
import OAUserInfo from './OAUserInfo';
// import {name as appName} from './app.json';
// import OAUserInfo from './OAUserInfo';

// AppRegistry.registerComponent(appName, () => OAUserInfo);

Navigation.registerComponent('appName', () => OAUserInfo);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'appName',
              options: {
                topBar: {
                  background: {
                    color: 'clear',
                  },
                  visible: true,
                  title: {
                    text: '个人信息',
                  },
                  leftButtons: [
                    {
                      title: {text: 'aaa'},
                      id: 'aa',
                      icon: require('./resource/arrow_left.png'),
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    },
  });
});

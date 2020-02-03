/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {
  StatusBar,
  BackHandler,AsyncStorage,Alert
} from 'react-native';
import {Root} from 'native-base';
import Login from './src/components/Login';
import Dashboard from './src/navigation/navigation';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import 'react-native-gesture-handler';
import { Constant } from './src/Constants/appconstants';
import { createStackNavigator } from 'react-navigation-stack';
import Signup from './src/components/Signup';
const REGLOG=createStackNavigator({
  Login:Login,
  Signup:Signup
},{
  headerMode:'none'
})
const NAV=createSwitchNavigator({
  Login:REGLOG,
  Dashboard:Dashboard
})
const AppContainer = createAppContainer(NAV);
class App extends Component {
  // componentDidMount () {
  //   this.backHandler=BackHandler.addEventListener('hardwareBackPress', this.handleBackPress)
  // }  
  // componentWillUnmount() {
  //   this.backHandler.remove()
  // }   
  
  // handleBackPress = () => {
  //   switch (Actions.currentScene) {
  //     case 'home'||'start'||'Home':
  //       Alert.alert(
  //           'Exit App',
  //           'Exiting the application?',
  //           [
  //             {
  //               text: 'Cancel',
  //               //onPress: () => console.log('Cancel Pressed'),
  //               style: 'cancel'
  //             },
  //             {
  //               text: 'OK',
  //               onPress: () => BackHandler.exitApp()
  //             }
  //           ],
  //           {
  //             cancelable: false
  //           }
  //         );
  //       break
  //       case 'start':
  //           Alert.alert(
  //               'Exit App',
  //               'Exiting the application?',
  //               [
  //                 {
  //                   text: 'Cancel',
  //                   //onPress: () => console.log('Cancel Pressed'),
  //                   style: 'cancel'
  //                 },
  //                 {
  //                   text: 'OK',
  //                   onPress: () => BackHandler.exitApp()
  //                 }
  //               ],
  //               {
  //                 cancelable: false
  //               }
  //             );
  //           break
  //     default: Actions.pop()
  //   }

  //   return true
  // }
 
  render(){
  return (
    <Root style={{flexGrow:1}}>
      <StatusBar barStyle="dark-content" backgroundColor={Constant.backGroundColor} />
      
        <AppContainer/>
    
    </Root>
  );
};
}

export default App;

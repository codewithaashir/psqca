import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Alert from '../components/Alert';
import SearchProduct from '../components/SearchProduct';
import VerifyQr from '../components/VerifyQr';
import About from '../components/About';
import Links from '../components/Links';
import { createAppContainer } from 'react-navigation';
import Dashbord from '../components/Dashbord';
import Feedback from '../components/Feedback';
import SearchResult from '../components/SearchResult';
const Linkz=createStackNavigator({
    Links:Links,
    Feedback:Feedback, 
},{
    headerMode:'none'
})
const Search=createStackNavigator({
    SearchProduct:SearchProduct,
    SearchResult:SearchResult, 
},{
    headerMode:'none'
})
const Dashboard=createStackNavigator({
   Main:{screen:Dashbord}, 
   Alerts:{screen:Alert},
   SearchProduct:{screen:Search},
   VerifyQr:{screen:VerifyQr},
   About:{screen:About},
   Links:{screen:Linkz}
},{
    headerMode:'none'
})
export default createAppContainer(Dashboard);
import React, { useState, useEffect, Component } from 'react';
import { ImageBackground, Text, View, BackHandler, AsyncStorage, Alert, TouchableOpacity,FlatList, Linking,Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import {Toast} from 'native-base';
import { Constant } from '../Constants/appconstants';
const styles = {
    container: {
        flex: 1,
        backgroundColor: Constant.backGroundColor
    },  Logo:{
        width:200,
        height:130,
        resizeMode:'contain',
        alignSelf:'center'
            },
            btn: {
    width: 130,
    height: 60,
    resizeMode:'contain'
  },
  btntext: {
    color: "#C91F25",
    fontWeight: "bold",
    fontSize: 12,
    marginVertical:10,
    textAlign: "center"
  }
}
const dashbord=[{id:1,name:'ALERTS',nav:'Alerts',image:require('../assets/alert.png')},{id:2,name:'SEARCH PRODUCTS',nav:'SearchProduct',image:require('../assets/search.png')},{id:3,name:'VERIFY QR CODE',nav:'VerifyQr',image:require('../assets/qr.png')},{id:4,name:'ABOUT PSQCA',nav:'About',image:require('../assets/about.png')},{id:5,name:'DOWNLOADS',nav:'browser_link',image:require('../assets/formdownload.png')},{id:6,name:'LINKS',nav:'Links',image:require('../assets/links.png')}]
class Dashboard extends Component {

    // componentDidMount() {
    //     this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress)
    // }
    // componentWillUnmount() {
    //     this.backHandler.remove()
    // }

    // handleBackPress = () => {
    //     Alert.alert(
    //         'Exit App',
    //         'Exiting the application?',
    //         [
    //             {
    //                 text: 'Cancel',
    //                 //onPress: () => console.log('Cancel Pressed'),
    //                 style: 'cancel'
    //             },
    //             {
    //                 text: 'OK',
    //                 onPress: () => BackHandler.exitApp()
    //             }
    //         ],
    //         {
    //             cancelable: false
    //         }
    //     );

    //     return true
    // }
    renderItem = ({ item, index }) => {
        return (
          <View
            key={index}
            style={{
              margin: 30,
              alignItems: "center",
              justifyContent: "center",
              borderBottomWidth:1
            }}
          >
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.7}
              onPress={() => {
               if(item.name==='DOWNLOADS'){
                   Linking.openURL('https://wwww.google.com')
                   return;
                }
                this.props.navigation.navigate(item.nav)
              }}
            >
              {/* require("../../../assets/img/plumbing-button.png") */}
              <Image
                source={item.image}
                style={{
                  width: "100%",
                  height: "100%",
                  resizeMode: "contain"
                }}
              />
            </TouchableOpacity>
            <Text style={styles.btntext}>{item.name}</Text>
          </View>
        )
      }
      Logout=()=>{
        //console.warn('heell')
        AsyncStorage.removeItem('UserDetail')
        .then(value => {
          AsyncStorage.removeItem('CART');
          global.User = null;
          this.props.navigation.navigate('Login');
          Toast.show({
            text: "Logout",
          });
        })
        .catch(reason => {
          Toast.show({
            text: reason.message,
          });
        });
      }
    render() {
        return (
            <View style={styles.container}>
                        <Image source={require('../assets/logo.png')} style={styles.Logo}/>
                       
                <ImageBackground source={require('../assets/slide2.png')} style={{flex:1,width:'100%',marginBottom:40,height:'94%',justifyContent:'center'}} resizeMode='stretch'>
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',marginVertical:10}}>
                <FlatList
            numColumns={2}
            keyExtractor={item => item.id}
            columnWrapperStyle={{ justifyContent: "center" }}
            data={dashbord}
            renderItem={this.renderItem}
          // onEndReached={this.OnEnd}
          //onEndReachedThreshold={0.3}
          />
                        
            
                    </View>

            <TouchableOpacity activeOpacity={0.7} onPress={this.Logout}style={{flexDirection:'row',alignSelf:'center',height:30,justifyContent:'center'}}>
              <Image source={require('../assets/log.png')} style={{width:150,height:50,resizeMopde:'contain'}}/>
            </TouchableOpacity>       
                </ImageBackground>
             
            </View>
        )
    }
}
export default withNavigation(Dashboard);
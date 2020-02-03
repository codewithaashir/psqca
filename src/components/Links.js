import React,{useState,useEffect} from 'react';
import {ImageBackground,Text,Image,View,TouchableOpacity, Linking} from 'react-native';
import {withNavigation} from 'react-navigation';

import { Constant } from '../Constants/appconstants';
const styles = {
    container: {
        flex: 1,
        backgroundColor: Constant.backGroundColor
    },  
    Logo:{
        width:200,
        height:130,
        resizeMode:'contain',
        position:'absolute',
        top:18,
        alignSelf:'center'
            },
            btntext: {
                color: "#C91F25",
                fontWeight: "bold",
                fontSize: 12,
                marginVertical:10,
                textAlign: "center"
              },
  left:{flexDirection:'column',width:160,height:200,borderWidth:1,borderRadius:10,marginRight:1,borderColor:'#ddd',justifyContent:'center',alignItems:'center'},
  right:{flexDirection:'column',width:160,height:200,borderWidth:1,borderRadius:10,borderColor:'#ddd',justifyContent:'center',alignItems:'center'},
  MainView:{flexDirection:'column',justifyContent:'center',alignItems:'center',alignSelf:'center',bottom:90,position:'absolute'}
}
function Links(props){
return(
    <ImageBackground source={require('../assets/homegreen.jpg')} style={{flex:1,width:'100%',height:'100%',justifyContent:'center'}}>
      <Image source={require('../assets/logo.png')} style={styles.Logo}/>
      <View style={styles.MainView
    }>
          <View style={{flexDirection:'row',}}>
          <TouchableOpacity style={styles.left} activeOpacity={0.7} 
          onPress={()=>props.navigation.navigate('Feedback')}
          >
          <Image source={require('../assets/ic_loginicon.png')} style={{width:50,height:50}}/>
          <Text style={styles.btntext}>FEEDBACK AND COMPLAINTS</Text>
          </TouchableOpacity>
           <TouchableOpacity style={styles.right} activeOpacity={0.7}
           onPress={()=>Linking.openURL('https://most.gov.pk')}
           
           >
           <Image source={require('../assets/ic_application.png')} style={{width:50,height:50}}/>
           <Text style={styles.btntext}>MINISTRY OF SCIENCE AND TECHNOLOGY</Text>
           </TouchableOpacity>          
            </View>
          <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
          <TouchableOpacity style={styles.left} activeOpacity={0.7}>
          <Image source={require('../assets/ic_about_mmc.png')} style={{width:50,height:50}}/>
          <Text style={styles.btntext}>PHOTO GALLERY</Text>
          </TouchableOpacity>
           <TouchableOpacity style={styles.right} activeOpacity={0.7}
           onPress={()=>Linking.openURL('https://m.facebook.com/PSQCA.headoffice')}
           >
           <Image source={require('../assets/ic_facebook.png')} style={{width:50,height:50}}/>
           <Text style={styles.btntext}>FACEBOOK</Text>

               </TouchableOpacity> 
          </View>
          </View>
        </ImageBackground>
)
}
export default withNavigation(Links);
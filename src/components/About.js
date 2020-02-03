import React,{useState,useEffect} from 'react';
import {ImageBackground,Text,ScrollView,View,Image} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Item} from 'native-base';

import { Constant } from '../Constants/appconstants';
function About(props){
return(
    <ImageBackground source={require('../assets/aboutmmc.png')} style={{width:'100%',height:'100%',justifyContent:'center'}}>
      <ScrollView contentContainerStyle={{flexGrow: 1,}}>
      
        <View style={{justifyContent: 'center', alignItems: 'center', padding:10,marginVertical:40}}>
        <Image source={require('../assets/psqca.png')} style={{width:140,height:80,resizeMode:"contain"}}/>
         <Item style={{flexDirection:"column",marginVertical:20}}>
         <Text style={{left:0,color:Constant.backGroundColor,fontSize:18}}>About PSQCA</Text>

             <Text style={{color:'#aaa',fontSize:14}}>
             Having realized the importance and development of Metrology, Standards, Testing and Quality (MSTQ) infrastructure that provide an essential building block for industrial development in the country, the Government of Pakistan has established the Pakistan Standards and Quality Control Authority (PSQCA) by Act-VI of 1996 to provide one window services for Standardization and Conformity Assessment.
             </Text>
             </Item>
             <Item style={{flexDirection:"column",fontSize:14,marginVertical:20}}>
                
                 <Text style={{color:'#aaa'}}>
                 The main function of the Authority is to foster and promote standards and conformity assessment as a means of advancing the national economy, promoting industrial efficiency and development, ensuring the health and safety of the public, protecting the consumers. Facilitating domestic and international trade and furthering international co-operation relation to Standards and conformity assessment in the interest of consumers.


                 </Text>
                 
                 </Item>
         
          
          </View>
          </ScrollView>
        
        </ImageBackground>
)
}
export default withNavigation(About);
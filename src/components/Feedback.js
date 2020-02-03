import React,{useState,useEffect} from 'react';
import {ImageBackground,Text,Image,View,ScrollView,TouchableOpacity, Linking} from 'react-native';
import {withNavigation} from 'react-navigation';
import { Constant } from '../Constants/appconstants';
import {Input,Item,Icon,InputGroup} from 'native-base';
const styles={
    Container:{
        flex:1,
        backgroundColor:Constant.backGroundColor,
        justifyContent:'center',
        alignItem:'center'
    },
    Logo:{
        width:200,
        height:80,
        resizeMode:'contain',
            },
    card:{
        width:'80%',
        height:'80%',
        alignSelf:'center',
        borderRadius:10,
        elevation:2
        
    }
}
function Feedback(props){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
return(
    <View style={styles.Container}>
        <View style={{backgroundColor:'#ffffff',elevation:4,width:'84%',height:'80%',borderRadius:14,alignSelf:'center'}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('../assets/psqca.png')} style={styles.Logo}/>
        <Text style={{fontWeight:'bold',fontStyle: 'italic',fontSize:12}} >Stay Updated with PSQCA</Text>
        <InputGroup borderType='rounded' >
              <Icon active name='ios-man' style={{color: Constant.backGroundColor}}  />
              <Input placeholder='Enter Your Name' onChangeText={(text) => setEmail(text)} placeholderTextColor="#687373" />
          </InputGroup>
          <InputGroup borderType='rounded' >
              <Icon active name='ios-mail' style={{color: Constant.backGroundColor}}  />
              <Input placeholder='Enter Email' onChangeText={(text) => setEmail(text)} placeholderTextColor="#687373" />
          </InputGroup>
          <InputGroup borderType='rounded' >
              <Icon active name='md-phone-portrait' style={{color: Constant.backGroundColor}}  />
              <Input placeholder='Enter Mobile No' onChangeText={(text) => setEmail(text)} placeholderTextColor="#687373" />
          </InputGroup>
          
          <InputGroup borderType='rounded' >
              <Icon active name='ios-paper' style={{color: Constant.backGroundColor}} />
              <Input placeholder='Company' onChangeText={(text) => setPassword(text)} secureTextEntry={true} placeholderTextColor="#687373" />
          </InputGroup>
          <InputGroup borderType='rounded' >
          <Icon active name='ios-paper' style={{marginTop: -20,color:Constant.backGroundColor}}/>
                  <Input
                    placeholder='Enter Message here...'
                    multiline={true}
                    style={{height: 100, marginTop: -20}}
                    onChangeText={(text) =>setEmail(text)}/>
          </InputGroup>
          <TouchableOpacity activeOpacity={0.7} style={{borderWidth:0,flexDirection:'row',borderRadius:25,width:'50%',height:40,marginVertical:10,backgroundColor:Constant.backGroundColor,justifyContent:'center',alignItems:'center'}}>
               <Text style={{color:'#fff',fontWeight:'bold'}}>SIGN UP</Text>
          </TouchableOpacity>
          </View>
        </ScrollView>  
        </View> 
          </View>
      
        
  
)
}
export default withNavigation(Feedback);
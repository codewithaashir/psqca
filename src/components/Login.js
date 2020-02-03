import React,{useState,useEffect} from 'react';
import {ImageBackground,Text,Image,View,ScrollView,TouchableOpacity, Linking,Modal,AsyncStorage} from 'react-native';
import {withNavigation} from 'react-navigation';
import { Constant } from '../Constants/appconstants';
import {Input,Item,Icon,InputGroup} from 'native-base';
import { Loading } from '../Loaders/loading';
import Axios from 'axios';
import { Apis } from '../apis/apis';
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
        alignSelf:'center',
        marginBottom:20
        
            },
    card:{
        width:'80%',
        height:'80%',
        alignSelf:'center',
        borderRadius:10,
        elevation:2
        
    }
}
function Login(props){
    const [email,setEmail]=useState('');
    const [loading,setLoading]=useState(false);
    const [password,setPassword]=useState('');
    const [showError,setError]=useState({msg:'',sh:false});
    
    const Login=()=>{
        setLoading(true);
        console.warn(Apis.Login+email+'/'+password);
        Axios.get(Apis.Login+email+'/'+password).then(res=>{
            setLoading(false)
         if(res.data[0].Remarks=="OK"){   
          //console.warn(JSON.stringify(res.data[0]));
          global.User=res.data[0].Result[0];
          AsyncStorage.setItem('UserDetail',res.data[0].Result[0]);
          props.navigation.navigate('Dashboard')
        }
          //props.navigation.navigate('Dashboard')
        }).catch(err=>{
            setLoading(false)
            console.warn(err);
        })
        
         
    }
    const handleVerify=()=>{
        if(!email&&!password){
            setError({msg:'Email or Password Required',sh:true})
           return;
          }
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if(!reg.test(email)){
      setError({msg:'Please enter valid email address',sh:true})
      return;
     }
     
    if(!email||!password){setError({msg:'All Field Required',sh:true})
     return;
    }
    Login();
    

   }
return(
    <View style={styles.Container}>
        <View style={{backgroundColor:'#ffffff',elevation:4,width:'84%',height:'80%',borderRadius:14,alignSelf:'center'}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('../assets/psqca.png')} style={styles.Logo}/>   
        <Text style={{fontWeight:'bold',fontStyle: 'italic',fontSize:12,marginBottom:10}} >Stay Updated with PSQCA</Text>
        <InputGroup borderType='rounded' >
              <Icon active name='ios-mail' style={{color: Constant.backGroundColor}}  />
              <Input placeholder='Email' onChangeText={(text) => setEmail(text)} keyboardType='email-address' autoCapitalize='none' placeholderTextColor="#687373" />
          </InputGroup>
          <InputGroup borderType='rounded' >
              <Icon active name='ios-lock' style={{color: Constant.backGroundColor}} />
              <Input placeholder='Password' onChangeText={(text) => setPassword(text)} secureTextEntry={true} placeholderTextColor="#687373" />
          </InputGroup>
          {showError?<Text style={{color: "#c0392b", textAlign: 'center', marginTop: 10}}>{showError.msg}</Text>:null}

          <TouchableOpacity activeOpacity={0.7} onPress={()=>handleVerify()} style={{borderWidth:0,flexDirection:'row',borderRadius:25,width:'50%',height:40,marginVertical:10,backgroundColor:Constant.backGroundColor,justifyContent:'center',alignItems:'center'}}>
               <Text style={{color:'#fff',fontWeight:'bold'}}>LOG IN</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={{marginTop:12}} onPress={()=>props.navigation.navigate('Signup')}>
              <Text>Don't have account? Register</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} style={{marginTop:12}} onPress={()=>Linking.openURL('https://www.mmc.biz.pk')}>
              <Text>Design And Develop By MMC</Text>
              </TouchableOpacity>
          </View>
          <Modal transparent visible={loading}>
              {Loading}
            </Modal>
       </ScrollView>  
        </View> 
        
        
          </View>
      
        
  
)
}
export default withNavigation(Login);
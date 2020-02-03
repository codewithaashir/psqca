import React,{useState,useEffect} from 'react';
import {ImageBackground,Text,Image,View,ScrollView,TouchableOpacity, Linking} from 'react-native';
import {withNavigation} from 'react-navigation';
import { Constant } from '../Constants/appconstants';
import {Input,Item,Icon,InputGroup} from 'native-base';
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
function Signup(props){
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [mobile,setMobile]=useState('');
    const [company,setCompany]=useState('');
    const Sign=()=>{
        setLoading(true);
        Axios.post(Apis.Signup+name+'/'+'/'+email+'/'+mobile+'/'+password+'/'+company).then(res=>{
            setLoading(false)
          console.warn(JSON.stringify(res));
        }).catch(err=>{
            setLoading(false)
            console.warn(err.message);
        })
        //props.navigation.navigate('Dashboard')
         
    }
    const handleVerify=()=>{
        if(!email&&!password&&!name&&!mobile&&!company){
            setError({msg:'All field are required',sh:true})
           return;
          }
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if(!reg.test(email)){
      setError({msg:'Please enter valid email address',sh:true})
      return;
     }
     
    if(!email||!password||!name||!mobile||!company){setError({msg:'All Field Required',sh:true})
     return;
    }
    Sign();
    

   }
return(
    <View style={styles.Container}>
        <View style={{backgroundColor:'#ffffff',elevation:4,width:'84%',height:'80%',borderRadius:14,alignSelf:'center'}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('../assets/psqca.png')} style={styles.Logo}/>
        <Text style={{fontWeight:'bold',fontStyle: 'italic',fontSize:12,marginBottom:10}} >Stay Updated with PSQCA</Text>
        <InputGroup borderType='rounded' >
              <Icon active name='ios-man' style={{color: Constant.backGroundColor}}  />
              <Input placeholder='Enter Your Name' keyboardType='email-address' autoCapitalize='none'  onChangeText={(text) => setName(text)} placeholderTextColor="#687373" />
          </InputGroup>
          <InputGroup borderType='rounded' >
              <Icon active name='ios-mail' style={{color: Constant.backGroundColor}}  />
              <Input placeholder='Enter Email' onChangeText={(text) => setEmail(text)} placeholderTextColor="#687373" />
          </InputGroup>
          <InputGroup borderType='rounded' >
              <Icon active name='md-phone-portrait' style={{color: Constant.backGroundColor}}  />
              <Input placeholder='Enter Mobile No' onChangeText={(text) => setMobile(text)} placeholderTextColor="#687373" />
          </InputGroup>
          <InputGroup borderType='rounded' >
              <Icon active name='ios-lock' style={{color: Constant.backGroundColor}}  />
              <Input placeholder='Enter Password' onChangeText={(text) => setPassword(text)} placeholderTextColor="#687373" />
          </InputGroup>
          <InputGroup borderType='rounded' >
              <Icon active name='ios-paper' style={{color: Constant.backGroundColor}} />
              <Input placeholder='Company' onChangeText={(text) => setCompany(text)} secureTextEntry={true} placeholderTextColor="#687373" />
          </InputGroup>
          <TouchableOpacity activeOpacity={0.7} style={{borderWidth:0,flexDirection:'row',borderRadius:25,width:'50%',height:40,marginVertical:20,backgroundColor:Constant.backGroundColor,justifyContent:'center',alignItems:'center'}}>
               <Text style={{color:'#fff',fontWeight:'bold'}}>SIGN UP</Text>
          </TouchableOpacity>
          </View>
        </ScrollView>  
        </View> 
          </View>
      
        
  
)
}
export default withNavigation(Signup);
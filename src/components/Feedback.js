import React,{useState,useEffect} from 'react';
import {ImageBackground,Text,Image,View,ScrollView,TouchableOpacity, Linking,Modal} from 'react-native';
import {withNavigation} from 'react-navigation';
import { Constant } from '../Constants/appconstants';
import {Input,Item,Icon,InputGroup,Toast} from 'native-base';
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
    const [mobile,setMobile]=useState('');
    const [name,setName]=useState('');
    const [company,setCompany]=useState('');
    const [message,setMessage]=useState('');
    const [showError,setError]=useState({msg:'',sh:false});
    const [loading,setLoading]=useState(false);
    const Submit=()=>{
        setLoading(true);
        
        Axios.post(Apis.Feedback+name+'/'+email+'/'+mobile+'/'+message+'/'+company).then(res=>{
            setLoading(false)
         if(res.data[0].status==1){   
          Toast.show({
              text:"Your Response has been recorded",
              duration:3000
          })
          props.navigation.goBack();
          
        }
          //props.navigation.navigate('Dashboard')
        }).catch(err=>{
            setLoading(false)
            console.warn(err);
        })
        
         
    }
    const handleVerify=()=>{
        if(!email&&!name&&!mobile&&!company&&!message){
            setError({msg:'All Field Required!',sh:true})
           return;
          }
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if(!reg.test(email)){
      setError({msg:'Please enter valid email address',sh:true})
      return;
     }
     
    if(!email||!name||!mobile||!company||!message){setError({msg:'One or more feilds missing!',sh:true})
     return;
    }
    Submit();
    

   }
return(
    <View style={styles.Container}>
        <View style={{backgroundColor:'#ffffff',elevation:4,width:'84%',height:'80%',borderRadius:14,alignSelf:'center'}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('../assets/psqca.png')} style={styles.Logo}/>
        <Text style={{fontWeight:'bold',fontStyle: 'italic',fontSize:12}} >Stay Updated with PSQCA</Text>
        <InputGroup borderType='rounded' >
              <Icon active name='ios-man' style={{color: Constant.backGroundColor}}  />
              <Input placeholder='Enter Your Name' onChangeText={(text) => setName(text)} placeholderTextColor="#687373" />
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
              <Icon active name='ios-home' style={{color: Constant.backGroundColor}} />
              <Input placeholder='Company' onChangeText={(text) => setCompany(text)}  placeholderTextColor="#687373" />
          </InputGroup>
          <InputGroup borderType='rounded' >
          <Icon active name='ios-paper' style={{marginTop: -20,color:Constant.backGroundColor}}/>
                  <Input
                    placeholder='Enter Message here...'
                    multiline={true}
                    style={{height: 100, marginTop: -20}}
                    onChangeText={(text) =>setMessage(text)}/>
          </InputGroup>
          {showError?<Text style={{color: "#c0392b", textAlign: 'center', marginTop: 10}}>{showError.msg}</Text>:null}

          <TouchableOpacity activeOpacity={0.7} 
          onPress={handleVerify}
          style={{borderWidth:0,flexDirection:'row',borderRadius:25,width:'50%',height:40,marginVertical:10,backgroundColor:Constant.backGroundColor,justifyContent:'center',alignItems:'center'}}>
               <Text style={{color:'#fff',fontWeight:'bold'}}>SUBMIT</Text>
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
export default withNavigation(Feedback);

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Input, Picker
} from 'native-base'
import { withNavigation, ScrollView } from 'react-navigation';
import AlertItem from './AlertItem'
import Axios from 'axios';
import { Apis } from '../apis/apis';
function SearchProduct(props) {

  const [licenseNo, setLicenseNo] = useState('')
  const [product, setProduct] = useState('')
  const [manufacturer, setManufacturer] = useState('')
  const [brandName, setBrandName] = useState('')
  const [loading,setLoading]=useState('');
  const [productlist,setProductList]=useState([]);
  const [list,updateList]=useState([]); 
useEffect(()=>{
  Axios.get(Apis.ProductList).then(res=>{
    setLoading(false);
    if(res.data[0].Remarks=='OK'){
      updateList(res.data[0].Result.filter((item)=>item.pssname!=""));
      
    }
 //console.warn(JSON.stringify(res.data[0].Result[0]));
   
  //props.navigation.navigate('Dashboard')
}).catch(err=>{
    setLoading(false)
    console.warn(err);
})
}) 
const SEARCH=async ()=>{
  //props.navigation.navigate('SearchResult')
  if(manufacturer&&licenseNo&&brandName&&product){
    await Axios.get(Apis.ProductSearch+licenseNo+'/'+manufacturer+'/'+product+'/'+brandName).then(res=>{
      setProductList(res.data[0].Result);
      props.navigation.navigate('SearchResult',{data:productlist})
    }).catch(err=>{
      console.warn(err.message);
    })
    return;
  }
  if(manufacturer&&licenseNo){
    await Axios.get(Apis.ProductSearch+licenseNo+'/'+manufacturer+'/_'+'/_').then(res=>{
      setProductList(res.data[0].Result);
      props.navigation.navigate('SearchResult',{data:productlist})
    }).catch(err=>{
      console.warn(err.message);
    })
    return;
  }
  if(manufacturer&&!licenseNo&&!product&&!brandName){
    await Axios.get(Apis.ProductSearch+'_/'+manufacturer+'/_'+'/_').then(res=>{
      setProductList(res.data[0].Result);
      props.navigation.navigate('SearchResult',{data:productlist})
    }).catch(err=>{
      console.warn(err.message);
    })
    return;
  }
  if(licenseNo&&!manufacturer&&!product&&!brandName) {
    await Axios.get(Apis.ProductSearch+licenseNo+'/_'+'/_'+'/_').then(res=>{
      setProductList(res.data[0].Result);
      props.navigation.navigate('SearchResult',{data:productlist})
    }).catch(err=>{
      console.warn(err.message);
    })
    return;
  }
  if(product&&!manufacturer&&!licenseNo&&!brandName) {
    await Axios.get(Apis.ProductSearch+'_/_'+'/'+product+'/_').then(res=>{
      setProductList(res.data[0].Result);
      props.navigation.navigate('SearchResult',{data:productlist})
    }).catch(err=>{
      console.warn(err.message);
    })
    return;
  }
  if(brandName&&!licenseNo&&!manufacturer&&!product){
    await Axios.get(Apis.ProductSearch+'_/_'+'/_'+'/'+brandName).then(res=>{
      setProductList(res.data[0].Result);
      props.navigation.navigate('SearchResult',{data:productlist})
    }).catch(err=>{
      console.warn(err.message);
    })
    return;
  }
  
}

  return (
    <ScrollView
      contentContainerStyle={{flexGrow:1}}
    >
      <ImageBackground
        source={require('../assets/aboutmmc.png')}
        resizeMode={'stretch'}
        style={styles.container}
      >
        <Image
          resizeMode={'contain'}
          source={require('../assets/psqca.png')}
          style={styles.logo}
        />
        <Text
          style={styles.description}
        >
          Stay Updated with PSQCA
        </Text>
        <View
          style={styles.inputContainer}
        >
          <Input
            onChangeText={text => setLicenseNo(text)}
            underlineColorAndroid={'transparent'}
            style={styles.inputField}
            placeholder='Enter License No'
            placeholderTextColor='#ccc'
          />
        </View>

        <View
          style={styles.pickerContainer}
        >
          <Picker
            mode='dropdown'
            selectedValue={product}
            onValueChange={value => setProduct(value)}
            style={styles.picker}
          >
            {list.map((value,index)=>(
              <Picker.Item label={value.pssname} value={value.pssname} />
            ))
             }
          </Picker>
        </View>
        <View
          style={styles.inputContainer}
        >
          <Input
            onChangeText={text => setManufacturer(text)}
            underlineColorAndroid={'transparent'}
            style={styles.inputField}
            placeholder='Enter Manufacturer'
            placeholderTextColor='#ccc'
          />
        </View>
        <View
          style={styles.inputContainer}
        >
          <Input
            onChangeText={text => setBrandName(text)}
            underlineColorAndroid={'transparent'}
            style={styles.inputField}
            placeholder='Enter Brand Name'
            placeholderTextColor='#ccc'
          />
        </View>
        <TouchableOpacity
          style={styles.subtmitButton}
          onPress={SEARCH }
        >
          <Text
            style={styles.buttonText}
          >
            Search
        </Text>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center'
  },
  logo: {
    marginTop: 30,
    width: 200,
    height: 200,
  },
  description: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 30,
  },
  inputContainer: {
    borderWidth: 1,
    width: '80%',
    height: 50,
    borderRadius: 16,
    borderColor: '#d3d3d3',
    marginVertical: 6,
  },
  inputField: {
    paddingLeft: 20,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    width: '80%',
    height: 50,
    borderRadius: 16,
    borderColor: '#d3d3d3',
    marginVertical: 6,
  },
  picker: {
    width: '100%',
    marginLeft: 10,
  },
  subtmitButton: {
    marginTop: 10,
    width: '50%',
    height: 40,
    backgroundColor: '#006600',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 22,
    color: '#fff',
  }
})
export default withNavigation(SearchProduct);

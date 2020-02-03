import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import AlertItem from './AlertItem'
import { Apis } from '../apis/apis';
import Axios from 'axios';
function Alert(props) {
 const [loading,setLoading]=useState('');
 const [list,updateList]=useState([]); 
useEffect(()=>{
  Axios.get(Apis.Alerts).then(res=>{
    setLoading(false);
    if(res.data[0].Remarks=='OK'){
      updateList(res.data[0].Result);
    }
 console.warn(JSON.stringify(res.data[0]));
   
  //props.navigation.navigate('Dashboard')
}).catch(err=>{
    setLoading(false)
    console.warn(err);
})
},[])
  return (
    <View
      style={styles.mainContainer}
    >
      <ImageBackground
        source={require('../assets/aboutmmc.png')}
        resizeMode={'stretch'}
        style={styles.container}
      >
        <View
          style={styles.titleContainer}
        >
          <Text
            style={styles.title}
          >Alerts</Text>
        </View>
        <View
          style={styles.flatlistContainer}
        >
          <FlatList
            style={styles.flatlist}
            data={list}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  backgroundColor: '#fff',
                  height: 0.5,
                  width: '100%'
                }}
              ></View>
            )}
            renderItem={({ item }) => (
              <AlertItem
                title={item.alert_subject}
                date={item.alert_date}
                content={item.alert_desc}
              />
            )}
          />
        </View>

      </ImageBackground>

    </View>
  )
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleContainer: {
    width: '100%',
    paddingTop: 20,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: '#006600',
    fontWeight: 'bold'
  },
  flatlistContainer: {
    width: '92.5%',
    height: '85%',
    backgroundColor: '#006600',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
})
export default withNavigation(Alert);
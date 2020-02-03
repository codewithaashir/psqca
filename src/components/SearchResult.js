import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ImageBackground,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultItem from './ResultItem'
import { Apis } from '../apis/apis';
import Axios from 'axios';
const searchData = [
    {
        title: 'Conference',
        product: 'Three Wheeler Auto Vehicle',
        manufacturer: 'Memon Motor (PVT) Ltd',
        LicenseNo: 'CM/L-1468',
        licenseIssueDate: '08-08-2019',
        LicenseValidUpto: '08-08-2024',
        LicenseStatus: 'Valid'
    },
    {
        title: 'Conference',
        product: 'Three Wheeler Auto Vehicle',
        manufacturer: 'Memon Motor (PVT) Ltd',
        LicenseNo: 'CM/L-1468',
        licenseIssueDate: '08-08-2019',
        LicenseValidUpto: '08-08-2024',
        LicenseStatus: 'Valid'
    },
    {
        title: 'Conference',
        product: 'Three Wheeler Auto Vehicle',
        manufacturer: 'Memon Motor (PVT) Ltd',
        LicenseNo: 'CM/L-1468',
        licenseIssueDate: '08-08-2019',
        LicenseValidUpto: '08-08-2024',
        LicenseStatus: 'Valid'
    },
    {
        title: 'Conference',
        product: 'Three Wheeler Auto Vehicle',
        manufacturer: 'Memon Motor (PVT) Ltd',
        LicenseNo: 'CM/L-1468',
        licenseIssueDate: '08-08-2019',
        LicenseValidUpto: '08-08-2024',
        LicenseStatus: 'Valid'
    },
    {
        title: 'Conference',
        product: 'Three Wheeler Auto Vehicle',
        manufacturer: 'Memon Motor (PVT) Ltd',
        LicenseNo: 'CM/L-1468',
        licenseIssueDate: '08-08-2019',
        LicenseValidUpto: '08-08-2024',
        LicenseStatus: 'Valid'
    },

]

function SearchResults(props) {
  const [loading,setLoading]=useState('');
 const [list,updateList]=useState([]); 
useEffect(()=>{
  Axios.get(Apis.SearchList+3).then(res=>{
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
                    >Search Results</Text>
                </View>
                <View
                    style={styles.flatlistContainer}
                >
                    <FlatList
                        style={styles.flatlist}
                        data={searchData}
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
                            <ResultItem
                                title={item.title}
                                product={item.product}
                                manufacturer={item.manufacturer}
                                licenseNo={item.LicenseNo}
                                licenseIssueDate={item.licenseIssueDate}
                                licenseValidUpto={item.LicenseValidUpto}
                                licenseStatus={item.LicenseStatus}
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
export default withNavigation(SearchResults);

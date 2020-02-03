// import React,{useState,useEffect} from 'react';
// import {ImageBackground,Text,Platform,PermissionsAndroid, TouchableOpacity,} from 'react-native';
// import {withNavigation} from 'react-navigation';
// import ImagePicker from "react-native-image-crop-picker";
// const requestPermission = async () => {
    
//   PermissionsAndroid.requestMultiple([
//     PermissionsAndroid.PERMISSIONS.CAMERA,
//     PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
//   ])
//     .then(value => {
//       if (
//         value["android.permission.CAMERA"] &&
//         value["android.permission.READ_EXTERNAL_STORAGE"] ===
//         PermissionsAndroid.RESULTS.GRANTED
//       ) {
//         OpenCamera()
//       } else {
//         // console.warn("Permission denied");
//       }
//     })
//     .catch(err => {
      
//     });

  
// };



// const OpenCamera = () => {
//   ImagePicker.openCamera({
//     //includeBase64: true,
//     cropping: true,
//     compressImageQuality: Platform == 'ios' ? 0.8 : 0.2,
//   }).then(image => {
//     var name=image.path.split('/');
//     var img={
//       name:name[name.length-1],
//       size:image.size,
//       type:image.mime,
//       uri:image.path
//     }
//     this.setState({
//       selectedImg: img
      
//     });
//   });
// }
// function VerifyQr(props){
// return(
//     <ImageBackground source={require('../assets/loginbg.jpg')} style={{width:'100%',height:'100%',justifyContent:'center'}}>
//       <TouchableOpacity>
//       <Text>VerifyQr</Text>
//       </TouchableOpacity>
//         </ImageBackground>
// )
// }
// export default withNavigation(VerifyQr);
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

export default class ScanScreen extends Component {
  onSuccess = (e) => {
    Linking
      .openURL(e.data)
      .catch(err => console.error('An error occured', err));
  }

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        //flashMode={QRCodeScanner.Constants.FlashMode.torch}
        //permissionDialogMessage="USES CAMERA"     
        permissionDialogTitle='PSQCA'
        permissionDialogMessage='Want to access your camera'
        topContent={
          <Text style={styles.centerText}>
            Scan the QR code.
          </Text>
        }
        // bottomContent={
        //   <TouchableOpacity style={styles.buttonTouchable}>
        //     <Text style={styles.buttonText}>OK. Got it!</Text>
        //   </TouchableOpacity>
        // }
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

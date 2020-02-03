import React,{Component} from 'react';
import {View,ActivityIndicator} from 'react-native'
import { Constant } from '../Constants/appconstants';
const Loading=(
<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <ActivityIndicator size={50} color={Constant.backGroundColor}/>
    </View>
);
const LoadingModal=(
    <View>
        
        <ActivityIndicator size={14} color={Constant.backGroundColor}/>
        </View>
)

export {Loading,LoadingModal}
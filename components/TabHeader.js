import React from "react";
import {Image,View} from "react-native";
import HLogo from "../assets/images/logoh.jpeg";
const TabHeader=()=>{
    return (
        <View style={{flexDirection:"row",alignItems:"center"}}>
            <Image source={HLogo} style={{height:40,width:40}}/>
        </View>
    )
}
export default TabHeader
import React from "react";
import {Dimensions, Image, Text,View} from "react-native";
import HLogo from "../assets/images/logoh.jpeg";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';
const OtherProfileHeader=()=>{
    const navigation=useNavigation()
    const width=Dimensions.get("window").width
    return (
        <View style={{flexDirection:"row",alignItems:"center"}}>
            <Image source={HLogo} style={{height:40,width:40}}/>
        </View>
    )
}
export default OtherProfileHeader
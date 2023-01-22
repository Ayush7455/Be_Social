import React from "react";
import {Dimensions, Image, Text,View} from "react-native";
import HLogo from "../assets/images/logoh.jpeg";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';
const AccountHeader=()=>{
    const navigation=useNavigation()
    const width=Dimensions.get("window").width
    return (
        <View style={{flexDirection:"row",alignItems:"center"}}>
            <Image source={HLogo} style={{height:40,width:40}}/>
            <Ionicons name="settings-sharp"  size={24} color="#267FFF" style={{marginLeft:width-100}} onPress={()=>navigation.navigate("SettingsScreen")} />
        </View>
    )
}
export default AccountHeader
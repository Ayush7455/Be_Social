import React from "react";
import {Dimensions, Image, Text,View} from "react-native";
import HLogo from "../assets/images/logoh.jpeg";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
const HomeHeader=()=>{
    const width=Dimensions.get("window").width
    const navigation=useNavigation()
    return (
        <View style={{flexDirection:"row",alignItems:"center"}}>
            <Image source={HLogo} style={{height:40,width:40}}/>
            <Ionicons name="chatbubbles" size={24} color="#267FFF" style={{marginLeft:width-100}} onPress={()=>navigation.navigate("ChatScreen")}/>
        </View>
    )
}
export default HomeHeader
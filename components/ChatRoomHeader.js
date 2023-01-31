import React from "react";
import {Text,View,Image, useWindowDimensions, TouchableOpacity} from "react-native";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import noimg from "../assets/images/noimg.png"
const ChatRoomHeader=({fuserdata})=>{
    const navigation=useNavigation()
    console.log(fuserdata)
    return (
        <View style={{flexDirection:"row",justifyContent:"space-between",padding:10,alignItems:"center",backgroundColor:"#fff"}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            {fuserdata?.profilepic?
            <Image source={{uri:fuserdata?.profilepic}} style={{width:30,height:30,borderRadius:30,marginLeft:10}}/>:<Image source={noimg} style={{width:30,height:30,borderRadius:30,marginLeft:10}}/>
        }
            <Text style={{flex:1,fontWeight:"bold",marginLeft:10}}>{fuserdata?.username}</Text>
        </View>
    )
}
export default ChatRoomHeader
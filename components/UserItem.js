import { useNavigation } from "@react-navigation/native";
import React from "react";
import {Text,View,Image, Pressable} from "react-native";
const UserItem=(
    {
    username,
    profile_image,
    }
)=>{

    return (
        
        
        <Pressable style={{flexDirection:"row",padding:10}}>
        
       <Image source={{
        uri:profile_image
       }} style={{width:50,height:50,borderRadius:25,marginRight:10}}/>

       <View style={{flex:1,justifyContent:"center"}}>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <Text style={{fontWeight:"bold",fontSize:18,width:260}}>{username}</Text>
        </View>
       </View>
       </Pressable>
       
    )

}
export default UserItem
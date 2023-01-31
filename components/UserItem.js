import { useNavigation } from "@react-navigation/native";
import React from "react";
import {Text,View,Image, Pressable, TouchableOpacity} from "react-native";
import nopic from "../assets/images/noimg.png"
const UserItem=(
    {
  user
    }
)=>{
    const navigation=useNavigation()
    console.log(user)

    return (
        
        <TouchableOpacity onPress={()=>navigation.navigate("OtherUserScreen",{user:user})}>
        <View style={{flexDirection:"row",padding:10}}>
        {user.profilepic?
        <Image source={{
            uri:user.profilepic
           }} style={{width:50,height:50,borderRadius:25,marginRight:10}}/>
           :<Image source={nopic} style={{width:50,height:50,borderRadius:25,marginRight:10}}/>
       
}
       <View style={{flex:1,justifyContent:"center"}}>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <Text style={{fontWeight:"bold",fontSize:18,width:260}}>{user.username}</Text>
        </View>
       </View>
       </View>
       </TouchableOpacity>
       
    )

}
export default UserItem
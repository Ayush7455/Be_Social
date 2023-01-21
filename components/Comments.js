import React from "react";
import {Text,View} from "react-native";
const Comments=({
    username,
    content
})=>{
    return (
        <View style={{padding:4}}>
            <Text style={{fontSize:17,fontWeight:"bold"}}>{username}</Text>
            <Text>{content}</Text>
        </View>
    )
}
export default Comments
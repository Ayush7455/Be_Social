import React from "react";
import {Text,View} from "react-native";
import {FontAwesome5} from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
const BottomNavBar=({page})=>{
    console.log(page)
    
    const navigation=useNavigation()

    return(
        <View style={{position:"absolute",bottom:0,width:"100%",height:50,alignItems:"center",zIndex:100,borderTopColor:"#F8F8F8",borderTopWidth:1,flexDirection:"row",justifyContent:"space-around",backgroundColor:"#fff"}}>
            {page==="HomeScreen"?
            <FontAwesome5 name="home" size={20} color={"#267FFF"} onPress={()=>navigation.navigate("HomeScreen")}/>:<FontAwesome5 name="home" size={20} color={"gray"} onPress={()=>navigation.navigate("HomeScreen")}/>
}
{page==="SearchScreen"?
            <FontAwesome5 name="search" size={20} color={"#267FFF"} onPress={()=>navigation.navigate("SearchScreen")}/>:<FontAwesome5 name="search" size={20} color={"gray"} onPress={()=>navigation.navigate("SearchScreen")}/>
}
{page==="NotificationScreen"?
            <Ionicons name="ios-notifications" size={20} color={"#267FFF"} onPress={()=>navigation.navigate("NotificationScreen")}/>:<Ionicons name="ios-notifications" size={20} color={"gray"} onPress={()=>navigation.navigate("NotificationScreen")}/>
}
            {page==="AccountScreen"?
            <FontAwesome5 name="user-alt" size={20} color={"#267FFF"} onPress={()=>navigation.navigate("AccountScreen")}/>:<FontAwesome5 name="user-alt" size={20} color={"gray"} onPress={()=>navigation.navigate("AccountScreen")}/>
}
        </View>
    )
}
export default BottomNavBar
import React from "react";
import {Text,TouchableOpacity,View} from "react-native";
import {FontAwesome5} from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
const BottomNavBar=({page})=>{
    console.log(page)
    
    const navigation=useNavigation()

    return(
        <View style={{position:"absolute",bottom:0,width:"100%",height:50,alignItems:"center",zIndex:100,borderTopColor:"#F8F8F8",borderTopWidth:1,flexDirection:"row",justifyContent:"space-around",backgroundColor:"#fff"}}>
            {page==="HomeScreen"?
            <TouchableOpacity onPress={()=>navigation.navigate("HomeScreen")}>
            <FontAwesome5 name="home" size={20} color={"#267FFF"} />
            </TouchableOpacity>:
            <TouchableOpacity onPress={()=>navigation.navigate("HomeScreen")}><FontAwesome5 name="home" size={20} color={"gray"} />
            </TouchableOpacity>
}
{page==="SearchScreen"?
    <TouchableOpacity  onPress={()=>navigation.navigate("SearchScreen")}>
            <FontAwesome5 name="search" size={20} color={"#267FFF"}/></TouchableOpacity>:
            <TouchableOpacity onPress={()=>navigation.navigate("SearchScreen")}>
            <FontAwesome5 name="search" size={20} color={"gray"} />
            </TouchableOpacity>
}
{page==="NotificationScreen"?
    <TouchableOpacity onPress={()=>navigation.navigate("NotificationScreen")}>
            <Ionicons name="ios-notifications" size={20} color={"#267FFF"} />
            </TouchableOpacity>:
            <TouchableOpacity onPress={()=>navigation.navigate("NotificationScreen")}><Ionicons name="ios-notifications" size={20} color={"gray"} />
            </TouchableOpacity>
}
            {page==="AccountScreen"?
            <TouchableOpacity onPress={()=>navigation.navigate("AccountScreen")}>
            <FontAwesome5 name="user-alt" size={20} color={"#267FFF"} />
            </TouchableOpacity>:
            <TouchableOpacity onPress={()=>navigation.navigate("AccountScreen")}><FontAwesome5 name="user-alt" size={20} color={"gray"} />
            </TouchableOpacity>
}
        </View>
    )
}
export default BottomNavBar
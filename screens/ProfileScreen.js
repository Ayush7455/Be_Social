import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";
import {View} from "react-native";
import {FontAwesome5} from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import HomeHeader from "../components/HomeHeader";
import TabHeader from "../components/TabHeader";
import AccountHeader from "../components/AccountHeader";
import HomeScreen from "./TabNavigatorScreens/HomeScreen";
import SearchScreen from "./TabNavigatorScreens/SearchScreen";
import NotificationScreen from "./TabNavigatorScreens/NotificationScreen";
import AccountScreen from "./TabNavigatorScreens/AccountScreen";
import BottomNavBar from "../components/BottomNavBar";




const ProfileScreen=()=>{
   
const Tab=createBottomTabNavigator()
    
    return(
        <View style={{flex:1,backgroundColor:"#fff"}}>
    
    <BottomNavBar/>
    </View>
    )

           
























        
        // <Tab.Navigator 
            
        // screenOptions={
        //     {
        //         tabBarShowLabel:false,
        //         style:{
        //             backgroundColor:"white",
        //             position:"absolute",
        //             bottom:30,
        //             marginHorizontal:20,
        //             height:60,
        //             borderRadius:10,
        //             shadowColor:"#000",
        //             shadowOpacity:0.06,
        //             shadowOffset:{
        //                 width:10,
        //                 height:10
        //             }
        //         }
        //     }
        // }
        // initialRouteName="Home"
        // >
        //     <Tab.Screen name={"Home"} component={HomeScreen}
        //     options={
                
        //         {
        //         headerTitle:HomeHeader,
        //         tabBarIcon:({focused})=>(
        //             <View style={{
        //                alignItems:"center"
        //             }}>
        //                 <FontAwesome5 name="home" size={20} color={focused?"#267FFF":"gray"}/>
        //                 </View>
        //         )
        //     }
        // }
        //     />
        //     <Tab.Screen name={"Search"} component={SearchScreen}
        //     options={{
        //         headerTitle:TabHeader,
        //         tabBarIcon:({focused})=>(
        //             <View style={{
        //                alignItems:"center"
        //             }}>
        //                 <FontAwesome5 name="search" size={20} color={focused?"#267FFF":"gray"}/>
        //                 </View>
        //         )
        //     }}/>
        //     <Tab.Screen name={"Notification"} component={NotificationScreen}
        //     options={{
        //         headerTitle:TabHeader,
        //         tabBarIcon:({focused})=>(
        //             <View style={{
        //                alignItems:"center"
        //             }}>
        //                 <Ionicons name="ios-notifications" size={20} color={focused?"#267FFF":"gray"} />
        //                 </View>
        //         )
        //     }}/>
        //     <Tab.Screen name={"Account"} component={AccountScreen}
        //     options={{
        //         headerTitle:AccountHeader,
        //         tabBarIcon:({focused})=>(
        //             <View style={{
        //                alignItems:"center"
        //             }}>
        //                 <FontAwesome5 name="user-alt" size={20} color={focused?"#267FFF":"gray"} />
        //                 </View>
        //         )
        //     }}/>

        // </Tab.Navigator>
        


    
}
export default ProfileScreen
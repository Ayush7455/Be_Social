import React from "react";
import {SafeAreaView, StatusBar, View} from "react-native";
import BottomNavBar from "../../components/BottomNavBar";
const NotificationScreen=()=>{
    return(
        <>
        <StatusBar
        backgroundColor={"white"}
        barStyle={"dark-content"}
        />
        <SafeAreaView style={{backgroundColor:"#fff",height:"100%"}}>
            <BottomNavBar page={"NotificationScreen"}/>
        </SafeAreaView>
        </>
            )
}
export default NotificationScreen
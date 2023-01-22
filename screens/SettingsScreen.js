import React from "react";
import {Image, Text,Touchable,View} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import HLogo from "../assets/images/logoh.jpeg";
import { TouchableOpacity } from "react-native";

const SettingsScreen=()=>{

    return (
        <View style={{flex:1,backgroundColor:"#fff"}}>
            <TouchableOpacity>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginBottom:10,marginTop:10,borderBottomColor:"#F8F8F8",borderBottomWidth:1,height:50,padding:5}}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
            <MaterialCommunityIcons name="account" size={25} color="#267FFF" />
                <Text style={{marginLeft:5,fontSize:17}}>Edit Profile</Text>
                </View>
                <View>
                <MaterialIcons name="navigate-next" size={30} color="#267FFF" />
                </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginBottom:10,borderBottomColor:"#F8F8F8",borderBottomWidth:1,height:50,padding:5}}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                <Ionicons name="ios-lock-closed" size={25} color="#267FFF" />
                <Text style={{marginLeft:5,fontSize:17}}>Change Password</Text>
                </View>
                <View>
                <MaterialIcons name="navigate-next" size={30} color="#267FFF" />
                </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginBottom:10,borderBottomColor:"#F8F8F8",borderBottomWidth:1,height:50,padding:5}}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                <AntDesign name="customerservice" size={25} color="#267FFF" />
                <Text style={{marginLeft:5,fontSize:17}}>Customer Support</Text>
                </View>
                <View>
                <MaterialIcons name="navigate-next" size={30} color="#267FFF" />
                </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginBottom:10,borderBottomColor:"#F8F8F8",borderBottomWidth:1,height:50,padding:5}}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                <Entypo name="info-with-circle" size={25} color="#267FFF"/>
                <Text style={{marginLeft:5,fontSize:17}}>About</Text>
                </View>
                <View>
                <MaterialIcons name="navigate-next" size={30} color="#267FFF" />
                </View>
            </View>
            </TouchableOpacity>
            <Image source={HLogo} style={{height:40,width:40,marginTop:40}}/>
        </View>

    )
}
export default SettingsScreen
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center} from "native-base";
import LoginForm from "../components/LoginForm";
import { Image, View } from "react-native";
import Logo from "../assets/images/logo.jpeg"
import SignUpForm from "../components/SignUpForm";
const SignUpScreen=()=>{
    const navigation=useNavigation()
    return (
        <View style={{justifyContent:"center",alignItems:"center",backgroundColor:"#fff",width:"100%",height:"100%",backgroundColor:"#F2F6FF"}}>
            <Image source={Logo} style={{width:50,height:50}}/>
            
       <View style={{width:"90%",backgroundColor:"#fff",borderRadius:10,elevation:2}}>
        <SignUpForm/>
       </View>
       </View>
    )
}
export default SignUpScreen
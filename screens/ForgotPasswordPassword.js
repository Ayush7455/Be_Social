import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center} from "native-base";
import LoginForm from "../components/LoginForm";
import { Image, SafeAreaView, StatusBar, View } from "react-native";
import Logo from "../assets/images/logo.jpeg"
import ChooseUserName from "../components/ChooseUserNameForm";
import ForgotPasswordEmailForm from "../components/ForgotPasswordEmailForm";
import ForgotPasswordPasswordForm from "../components/ForgotPasswordPasswordForm";
const ForgotPasswordPasswordScreen=({route})=>{
    const {email}=route.params
    const navigation=useNavigation()
    return (
        <>
        <StatusBar
        backgroundColor={"white"}
        barStyle={"dark-content"}
        />
        <SafeAreaView style={{justifyContent:"center",alignItems:"center",backgroundColor:"#fff",width:"100%",height:"100%",backgroundColor:"#F2F6FF"}}>
            <Image source={Logo} style={{width:50,height:50}}/>
            
       <View style={{width:"90%",backgroundColor:"#fff",borderRadius:10,elevation:2}}>
        <ForgotPasswordPasswordForm email={email}/>
       </View>
       </SafeAreaView>
       </>
    )
}
export default ForgotPasswordPasswordScreen
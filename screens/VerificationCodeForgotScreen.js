import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center} from "native-base";
import LoginForm from "../components/LoginForm";
import { Image, StatusBar, View } from "react-native";
import Logo from "../assets/images/logo.jpeg"
import ChooseUserName from "../components/ChooseUserNameForm";
import ForgotPasswordEmailForm from "../components/ForgotPasswordEmailForm";
import ForgotPasswordPasswordForm from "../components/ForgotPasswordPasswordForm";
import VerificationCodeForgotForm from "../components/VerificationCodeForgotForm";
import { SafeAreaView } from "react-native";
const VerificationCodeForgotScreen=({route})=>{
    const { useremail, userVerificationCode } = route.params;
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
        <VerificationCodeForgotForm useremail={useremail} userVerificationCode={userVerificationCode}/>
       </View>
       </SafeAreaView>
       </>
    )
}
export default VerificationCodeForgotScreen
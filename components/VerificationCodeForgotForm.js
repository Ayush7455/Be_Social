import React, { useEffect, useState } from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, useNativeBase } from "native-base";
import { MaterialIcons } from '@expo/vector-icons'; 
import { Image, Modal, Pressable, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const VerificationCodeForgotForm = ({
  useremail,
  userVerificationCode
}) => {
  const navigation=useNavigation()
  const [verificationCode,setVerificationCode]=useState("")
  const handleVerificationCode = () => {

    if (verificationCode != userVerificationCode) {
        alert('Invalid Verification Code')
    }
    else {
        alert('Verification Code Matched')
        navigation.navigate("ForgotPasswordPasswordScreen", { email: useremail })
    }

    // navigation.navigate('ForgotPassword_ChoosePassword')
}
  return <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} style={{textAlign:"center"}}>
          A verification code has been sent to your email
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <View style={{borderWidth:2,borderColor:"#F2F6FF",height:45,alignItems:'center',flexDirection:"row",borderRadius:5}}>
            <MaterialIcons name="email" size={20} color="#267FFF" style={{paddingRight:7}}/>
            <TextInput  placeholder="Enter your 6 digit code" style={{width:"100%"}} onChangeText={(text)=>setVerificationCode(text)}></TextInput>
            </View>
          </FormControl>
          
          <Button mt="2" colorScheme="indigo" style={{backgroundColor:"#267FFF"}} onPress={()=>handleVerificationCode()}>
            Verify
          </Button>
          
        </VStack>
      </Box>
    </Center>;
};
export default VerificationCodeForgotForm
import React, { useEffect, useState } from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, useNativeBase } from "native-base";
import { MaterialIcons } from '@expo/vector-icons'; 
import { ActivityIndicator, Alert, Image, Modal, Pressable, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {useToast} from "native-base"

const SignUpForm = () => {
  const toast = useToast();
  const navigation=useNavigation()
  const [email,setEmail]=useState("")
  const [loading,setLoading]=useState(false)
  const handleEmail = () => {
    // setLoading(true)
    // navigation.navigate('Signup_EnterVerificationCode')
    if (email == '') {
        alert('Please enter email')
    }
    else {
        setLoading(true)
        fetch('https://kind-erin-shrimp-vest.cyclic.app/verify', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email
            })
        })
            .then(res => res.json()).then(
                data => {
                    if (data.error === "Invalid Credentials") {
                        // alert('Invalid Credentials')
                        toast.show({
                          render: () => {
                            return <Box backgroundColor={"#FF0000"} px="2" py="1" rounded="sm" mb={5}>
                                    Invalid Credentials
                                  </Box>;
                          }
                        })
                        setLoading(false)
                    }
                    else if (data.message === "Verification Code Sent to your Email") {
                        setLoading(false)
                        toast.show({
                          render: () => {
                            return <Box bg="emerald.200" px="2" py="1" rounded="sm" mb={5}>
                                    {data.message}
                                  </Box>;
                          }
                        })
                        navigation.navigate('VerificationCodeScreen', {
                            useremail: data.email,
                            userVerificationCode: data.VerificationCode
                        })

                    }
                }
            )
    }
}
  
  return <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} style={{textAlign:"center"}}>
          Sign up with your email
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <View style={{borderWidth:2,borderColor:"#F2F6FF",height:45,alignItems:'center',flexDirection:"row",borderRadius:5}}>
            <MaterialIcons name="email" size={20} color="#267FFF" style={{paddingRight:7}}/>
            <TextInput  placeholder="Enter your email" style={{width:"100%"}} onChangeText={(text)=>setEmail(text)}></TextInput>
            </View>
          </FormControl>
        
          
          
          <Button mt="2" colorScheme="indigo" style={{backgroundColor:"#267FFF"}} onPress={()=>handleEmail()}>
          {loading?<ActivityIndicator color={"#fff"}/>:<Text style={{color:"white"}}>Sign Up</Text>} 
          </Button>

        </VStack>
      </Box>
    </Center>;
};
export default SignUpForm
import React, { useEffect, useState } from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, useNativeBase } from "native-base";
import { MaterialIcons } from '@expo/vector-icons'; 
import { ActivityIndicator, Alert, Image, Modal, Pressable, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Success from "../assets/images/success.png";
import Cross from "../assets/images/x.png";
import { FontAwesome } from '@expo/vector-icons';
import {useToast} from "native-base"

const ForgotPasswordEmailForm= () => {
  const [email,setEmail]=useState("")
  const [loading,setLoading]=useState(false)
  const toast = useToast();
  const navigation=useNavigation()
  const handleEmail = () => {
    if (email === '') {
        Alert.alert('Please enter email')
    }

    else {
        setLoading(true)
        fetch('https://kind-erin-shrimp-vest.cyclic.app/verifyfp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        })
            .then(res => res.json()).then(data => {
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
                    Alert.alert(data.message);
                    toast.show({
                      render: () => {
                        return <Box backgroundColor={"#FF0000"} px="2" py="1" rounded="sm" mb={5}>
                                {data.message}
                              </Box>;
                      }
                    })
                    navigation.navigate('VerificationCodeForgotScreen', {
                        useremail: data.email,
                        userVerificationCode: data.VerificationCode
                    })

                }
            })
    }
}
  
  return <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} style={{textAlign:"center"}}>
          Verify your email
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <View style={{borderWidth:2,borderColor:"#F2F6FF",height:45,alignItems:'center',flexDirection:"row",borderRadius:5}}>
            <FontAwesome name="user" size={20} color="#267FFF" style={{paddingRight:7}}/>
            <TextInput  placeholder="Enter your email" style={{width:"100%"}} onChangeText={(text)=>setEmail(text)}></TextInput>
            </View>
          </FormControl>
          <Button mt="2" colorScheme="indigo" style={{backgroundColor:"#267FFF"}} onPress={()=>handleEmail()}>
            {loading?<ActivityIndicator color={"#fff"}/>:<Text style={{color:"#fff"}}>Next</Text>}
          </Button>
          
        </VStack>
      </Box>
    </Center>;
};
export default ForgotPasswordEmailForm
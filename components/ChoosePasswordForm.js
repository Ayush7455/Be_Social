import React, { useEffect, useState } from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, useNativeBase } from "native-base";
import { MaterialIcons } from '@expo/vector-icons'; 
import { ActivityIndicator, Alert, Image, Modal, Pressable, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
   
const ChoosePasswordForm = ({email,username}) => {
  const navigation=useNavigation()
  const [password,setPassword]=useState("")
  const [confirmPassword,setConfirmPassword]=useState("")
  const [loading,setLoading]=useState(false)
  const handlePassword = () => {
    if (password == '' || confirmPassword == '') {
        alert('Please enter password')
    } else if (password != confirmPassword) {
        alert('Password does not match')
    }
    else {
        setLoading(true)
        fetch('https://kind-erin-shrimp-vest.cyclic.app/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email:email, username: username, password: password })
        })
            .then(res => res.json()).then(
                data => {
                    if (data.message === "User Registered Successfully") {
                        setLoading(false)
                        alert(data.message);
                        navigation.navigate('AccountConfirmationScreen')
                    }
                    else {
                        setLoading(false)
                        alert("Please try again");
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
          Choose your password
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
          <View style={{borderWidth:2,height:45,borderColor:"#F2F6FF",alignItems:'center',flexDirection:"row",borderRadius:5}}>
          <MaterialIcons name="lock" size={20} color="#267FFF" style={{paddingRight:7}} />
            <TextInput placeholder="Enter your password" style={{width:"100%"}} onChangeText={(text)=>setPassword(text)}></TextInput>
            </View>
          </FormControl>
          <FormControl>
          <View style={{borderWidth:2,height:45,borderColor:"#F2F6FF",alignItems:'center',flexDirection:"row",borderRadius:5}}>
          <MaterialIcons name="lock" size={20} color="#267FFF" style={{paddingRight:7}} />
            <TextInput placeholder="Confirm your password" style={{width:"100%"}} onChangeText={(text)=>setConfirmPassword(text)}></TextInput>
            </View>
          </FormControl>
         
          <Button mt="2" colorScheme="indigo" style={{backgroundColor:"#267FFF"}} onPress={()=>handlePassword()}>
          {loading?<ActivityIndicator color={"#fff"}/>:<Text style={{color:"#fff"}}>Sign Up</Text>}
          </Button>
        </VStack>
      </Box>
    </Center>;
};
export default ChoosePasswordForm
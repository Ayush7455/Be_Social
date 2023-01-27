import React, { useEffect, useState } from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, useNativeBase } from "native-base";
import { MaterialIcons } from '@expo/vector-icons'; 
import { ActivityIndicator, Alert, Image, Modal, Pressable, TextInput, TouchableOpacity, View,AsyncStorage } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Success from "../assets/images/success.png";
import Cross from "../assets/images/x.png";
import { FontAwesome } from '@expo/vector-icons';
import Logo from "../assets/images/logo.jpeg";

const ChangeUserName= () => {
  const [username,setUserName]=useState("")
  const [loading,setLoading]=useState(false)
  const navigation=useNavigation()


    const handleUsername = () => {
        if (username == '') {
            alert('Please enter username')
        }
        else {
            setLoading(true)
            AsyncStorage.getItem('user')
                .then(data => {
                    fetch('https://kind-erin-shrimp-vest.cyclic.app/setusername', {
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: JSON.parse(data).user.email,
                            username: username
                        })
                    })
                        .then(res => res.json())
                        .then(
                            data => {
                                if (data.message === "Username Updated Successfully") {
                                    setLoading(false)
                                    alert('Username has been set successfully')
                                    navigation.navigate('EditProfileScreen')
                                }
                                else if (data.error === "Invalid Credentials") {
                                    alert('Invalid Credentials')
                                    setLoading(false)
                                    navigation.navigate('LoginScreen')
                                }
                                else {
                                    setLoading(false)
                                    alert("Username not available");
                                }
                            }
                        )
                        .catch(err => {
                            alert('Something went wrong')
                            setLoading(false)
                        })
                })
                .catch(err => {
                    alert('Something went wrong')
                    setLoading(false)
                }
                )
        }

        // navigation.navigate('Signup_ChoosePassword')
    }
  return (
    <View style={{justifyContent:"center",alignItems:"center",backgroundColor:"#fff",width:"100%",height:"100%",backgroundColor:"#F2F6FF"}}>
            <Image source={Logo} style={{width:50,height:50}}/>
            <View style={{width:"90%",backgroundColor:"#fff",borderRadius:10,elevation:2}}>
  <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} style={{textAlign:"center"}}>
          Change your username
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <View style={{borderWidth:2,borderColor:"#F2F6FF",height:45,alignItems:'center',flexDirection:"row",borderRadius:5}}>
            <FontAwesome name="user" size={20} color="#267FFF" style={{paddingRight:7}}/>
            <TextInput  placeholder="Enter your username" style={{width:"100%"}} onChangeText={(text)=>setUserName(text)}></TextInput>
            </View>
          </FormControl>

          
          <Button mt="2" colorScheme="indigo" style={{backgroundColor:"#267FFF"}} onPress={()=>handleUsername()}>
          {loading?<ActivityIndicator color={"#fff"}/>:<Text style={{color:"white"}}>Next</Text>}
          </Button>
        </VStack>
      </Box>
    </Center>
    </View>
       </View>
  )
};
export default ChangeUserName
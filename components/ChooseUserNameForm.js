import React, { useEffect, useState } from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, useNativeBase } from "native-base";
import { MaterialIcons } from '@expo/vector-icons'; 
import { ActivityIndicator, Alert, Image, Modal, Pressable, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Success from "../assets/images/success.png";
import Cross from "../assets/images/x.png";
import { FontAwesome } from '@expo/vector-icons';

const ChooseUserName = ({email}) => {
  const [userName,setUserName]=useState("")
  const [loading,setLoading]=useState(false)
  const navigation=useNavigation()
  const handleUserName=()=>{
    if(userName==""){
      Alert.alert("Please enter the username")
    }
    else{
      setLoading(true)
      fetch("http://10.0.2.2:3000/changeusername",{
        method:"post",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email:email,
          username:userName
        })
      })
      .then(res=>res.json()).then(
        data=>{
          if(data.message==="Username Available"){
            setLoading(false)
            navigation.navigate("ChoosePasswordScreen",{email:email,username:userName})
          }
          else{
            setLoading(false)
            Alert.alert("Username already taken")
          }
        }
      ).catch(err=>{
        console.log(err)
      })
    }
  }
  
  return <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} style={{textAlign:"center"}}>
          Choose your username
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <View style={{borderWidth:2,borderColor:"#F2F6FF",height:45,alignItems:'center',flexDirection:"row",borderRadius:5}}>
            <FontAwesome name="user" size={20} color="#267FFF" style={{paddingRight:7}}/>
            <TextInput  placeholder="Enter your username" style={{width:"100%"}} onChangeText={(text)=>setUserName(text)}></TextInput>
            </View>
          </FormControl>

          
          <Button mt="2" colorScheme="indigo" style={{backgroundColor:"#267FFF"}} onPress={()=>handleUserName()}>
          {loading?<ActivityIndicator color={"#fff"}/>:<Text style={{color:"white"}}>Next</Text>}
          </Button>
        </VStack>
      </Box>
    </Center>;
};
export default ChooseUserName
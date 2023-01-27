import React, { useEffect, useState } from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, useNativeBase } from "native-base";
import { MaterialIcons } from '@expo/vector-icons'; 
import { ActivityIndicator, Alert, Image, Modal, Pressable, TextInput, TouchableOpacity, View ,AsyncStorage} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../assets/images/logoh.jpeg";
   
const ChangePasswordScreen = ({email,username}) => {
  const navigation=useNavigation()
  const [newpassword,setNewPassword]=useState("")
  const [confirmnewPassword,setConfirmNewPassword]=useState("")
  const [oldpassword,setOldPassword]=useState("")
  const [loading,setLoading]=useState(false)
  const handlePasswordChange = () => {
    if (oldpassword === '' || newpassword === '' || confirmnewPassword === '') {
        alert('Please fill all the fields')
    } else if (newpassword !== confirmnewPassword) {
        alert('New password and confirm new password must be same')
    }
    else {
        setLoading(true)
        AsyncStorage.getItem('user')

            .then(data => {
                fetch('https://kind-erin-shrimp-vest.cyclic.app/changepassword', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": 'Bearer ' + JSON.parse(data).tokens
                    },
                    body: JSON.stringify({ email: JSON.parse(data).user.email, oldpassword: oldpassword, newpassword: newpassword })
                })
                    .then(res => res.json()).then(data => {
                        if (data.message == 'Password Changed Successfully') {
                            setLoading(false)
                            alert('Password Changed Successfully')
                            AsyncStorage.removeItem('user')
                            navigation.navigate('LoginScreen')
                        }
                        else {
                            alert('Wrong Password')
                            setLoading(false)
                        }
                    }
                    )
            })
    }
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
          Choose your password
        </Heading>

        <VStack space={3} mt="5">
        <FormControl>
          <View style={{borderWidth:2,height:45,borderColor:"#F2F6FF",alignItems:'center',flexDirection:"row",borderRadius:5}}>
          <MaterialIcons name="lock" size={20} color="#267FFF" style={{paddingRight:7}} />
            <TextInput placeholder="Enter old password" style={{width:"100%"}} onChangeText={(text)=>setOldPassword(text)}></TextInput>
            </View>
          </FormControl>
          <FormControl>
          <View style={{borderWidth:2,height:45,borderColor:"#F2F6FF",alignItems:'center',flexDirection:"row",borderRadius:5}}>
          <MaterialIcons name="lock" size={20} color="#267FFF" style={{paddingRight:7}} />
            <TextInput placeholder="Enter your new password" style={{width:"100%"}} onChangeText={(text)=>setNewPassword(text)}></TextInput>
            </View>
          </FormControl>
          <FormControl>
          <View style={{borderWidth:2,height:45,borderColor:"#F2F6FF",alignItems:'center',flexDirection:"row",borderRadius:5}}>
          <MaterialIcons name="lock" size={20} color="#267FFF" style={{paddingRight:7}} />
            <TextInput placeholder="Confirm your new password" style={{width:"100%"}} onChangeText={(text)=>setConfirmNewPassword(text)}></TextInput>
            </View>
          </FormControl>
         
          <Button mt="2" colorScheme="indigo" style={{backgroundColor:"#267FFF"}} onPress={()=>handlePasswordChange()}>
          {loading?<ActivityIndicator color={"#fff"}/>:<Text style={{color:"#fff"}}>Sign Up</Text>}
          </Button>
        </VStack>
      </Box>
    </Center>
    </View>
       </View>
    )
};
export default ChangePasswordScreen
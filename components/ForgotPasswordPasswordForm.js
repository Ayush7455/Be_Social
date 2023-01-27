import React, { useEffect, useState } from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, useNativeBase } from "native-base";
import { MaterialIcons } from '@expo/vector-icons'; 
import { ActivityIndicator, Alert, Image, Modal, Pressable, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Success from "../assets/images/success.png";
import Cross from "../assets/images/x.png";
const ModalPopup=({children,visible})=>{
    const [showModal,setShowModal]=useState(visible)
    useEffect(()=>{
      ToggleModal()
    },[visible])
    const ToggleModal=()=>{
      if(visible){
        setShowModal(true)
      }
      else{
        setShowModal(false)
      }
    }
    return(
        <Modal transparent visible={showModal}>
          <View style={{flex:1,backgroundColor:"rgba(0,0,0,0.5)",justifyContent:"center",alignItems:"center"}}>
          <View style={{width:"80%",backgroundColor:"white",paddingHorizontal:20,paddingVertical:30,borderRadius:20,elevation:20}}>
          {children}
          </View>
          </View>
        </Modal>
      )
    }
const ForgotPasswordPasswordForm = ({
  email

}) => {
  const navigation=useNavigation()
  const [password, setpassword] = useState('')
  const [confirmpassword, setconfirmpassword] = useState('')
  const [loading, setLoading] = useState(false)
  const[visible,setVisible]=useState(false)
  const handlePasswordChange = () => {
    if (password == '' || confirmpassword == '') {
        Alert.alert('Please enter password')
    } else if (password != confirmpassword) {
        Alert.alert('Password does not match')
    }

    else {
        setLoading(true);
        fetch('https://kind-erin-shrimp-vest.cyclic.app/resetpassword', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password })
        })
            .then(res => res.json()).then(
                data => {
                    if (data.message === "Password Changed Successfully") {
                        setLoading(false)
                        setVisible(true)
                    }
                    else {
                        setLoading(false)
                        Alert.alert("Something went wrong");
                    }
                })
            .catch(err => {
                setLoading(false);
                Alert.alert(err)
            })
    }

    // navigation.navigate('ForgotPassword_AccountRecovered')
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
            <TextInput placeholder="Enter your password" style={{width:"100%"}} onChangeText={(text)=>setpassword(text)}></TextInput>
            </View>
          </FormControl>
          <FormControl>
          <View style={{borderWidth:2,height:45,borderColor:"#F2F6FF",alignItems:'center',flexDirection:"row",borderRadius:5}}>
          <MaterialIcons name="lock" size={20} color="#267FFF" style={{paddingRight:7}} />
            <TextInput placeholder="Confirm your password" style={{width:"100%"}} onChangeText={(text)=>setconfirmpassword(text)}></TextInput>
            </View>
          </FormControl>
          <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <ModalPopup visible={visible}>
              <View style={{alignItems:"center"}}>
                <View style={{width:"100%",height:40,alignItems:"flex-end",justifyContent:"center"}}>
                  <TouchableOpacity onPress={()=>navigation.navigate("LoginScreen")}>
                  <Image source={Cross} style={{width:30,height:30}}/>
                  </TouchableOpacity>

                </View>

              </View>
              <View style={{alignItems:"center"}}>
              <Image source={Success} style={{height:150,width:150,marginVertical:10}}/>
              </View>
              <Text style={{marginVertical:30,fontSize:20,textAlign:"center"}}>Password reset successful</Text>
              <Button mt="2" colorScheme="indigo" style={{backgroundColor:"#267FFF"}} onPress={()=>navigation.navigate("LoginScreen")}>
            Sign In
          </Button>
            </ModalPopup>
          </View>
          
          <Button mt="2" colorScheme="indigo" style={{backgroundColor:"#267FFF"}} onPress={()=>{handlePasswordChange()}}>
            {
              loading?<ActivityIndicator color={"#fff"}/>:<Text style={{color:"#fff"}}>Sign Up</Text>
            }
          </Button>
          
        </VStack>
      </Box>
    </Center>;
};
export default ForgotPasswordPasswordForm
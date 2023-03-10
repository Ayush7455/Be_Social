import React, { useEffect, useState } from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, useNativeBase } from "native-base";
import { MaterialIcons } from '@expo/vector-icons'; 
import { Alert, Image, Modal, Pressable, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {useToast} from "native-base"

const VerificationCodeForm = ({useremail,userVerificationCode}) => {
  const toast = useToast();
  const navigation=useNavigation()
  const [verification,setVerification]=useState("")
  const handleVerification=()=>{
    if(userVerificationCode==verification){
      navigation.navigate("ChooseUserNameScreen",{email:useremail})
    }
    else{
      toast.show({
        render: () => {
          return <Box backgroundColor={"#FF0000"} px="2" py="1" rounded="sm" mb={5}>
                  Verification code is incorrect
                </Box>;
        }
      })
    }
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
            <TextInput  placeholder="Enter your 6 digit code" style={{width:"100%"}} onChangeText={(text)=>setVerification(text)}></TextInput>
            </View>
          </FormControl>
          
          <Button mt="2" colorScheme="indigo" style={{backgroundColor:"#267FFF"}} onPress={()=>handleVerification()}>
            Verify
          </Button>
          
        </VStack>
      </Box>
    </Center>;
};
export default VerificationCodeForm
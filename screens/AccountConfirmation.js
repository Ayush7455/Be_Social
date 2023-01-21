import React, { useEffect, useState } from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, useNativeBase } from "native-base";
import { MaterialIcons } from '@expo/vector-icons'; 
import { Image, Modal, Pressable, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Success from "../assets/images/success.png";
import Logo from "../assets/images/logo.jpeg";
import Cross from "../assets/images/x.png";
import { FontAwesome } from '@expo/vector-icons';


const AccountConfirmationScreen = () => {
  const navigation=useNavigation()
  
  
  return (
  <View style={{justifyContent:"center",alignItems:"center",backgroundColor:"#fff",width:"100%",height:"100%",backgroundColor:"#F2F6FF"}}>
  <Image source={Logo} style={{width:50,height:50}}/>
  
<View style={{width:"90%",backgroundColor:"#fff",borderRadius:10,elevation:2}}>
  
        <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <View style={{alignContent:"center",justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
      <Image
        source={Success}
        style={{height:55,width:55,marginRight:10}}
        />
       <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} style={{textAlign:"center"}}>
          Account created successfully
        </Heading>
        </View>

        <VStack space={3} mt="5">


          <Button mt="2" colorScheme="indigo" style={{backgroundColor:"#267FFF"}} onPress={()=>navigation.navigate("ProfileScreen")}>
            Let's Roll
          </Button>
          
        </VStack>
      </Box>
    </Center>
    </View>
       </View>
    )
};
export default AccountConfirmationScreen
import React, { useEffect, useState } from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, useNativeBase } from "native-base";
import { MaterialIcons } from '@expo/vector-icons'; 
import { ActivityIndicator, Alert, Image, Modal, Pressable, TextInput, TouchableOpacity, View,AsyncStorage } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Success from "../assets/images/success.png";
import Cross from "../assets/images/x.png";
import { FontAwesome } from '@expo/vector-icons';
import Logo from "../assets/images/logo.jpeg";
import { Feather } from '@expo/vector-icons';
import {firebase} from "../Firebase/Config";
import * as ImagePicker from "expo-image-picker";
const AddPostsScreen=()=>{
    const[loading1,setLoading1]=useState(false)
    const[loading2,setLoading2]=useState(false)
    const[post,setPost]=useState(false)

    const handlePosts=()=>{

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
          Add Posts
        </Heading>

        <VStack space={3} mt="5">
            {loading1?<ActivityIndicator color={"#267FFF"}/>:
            <>
            {post?
            <View style={{alignItems:'center',borderRadius:5}}>
            <Image source={{uri:"https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"}} style={{height:120,width:120}}/>
            </View>:
          <FormControl>
            <View style={{alignItems:'center'}}>
            <Feather name="upload-cloud" size={60} color="#267FFF" />
            </View>
          </FormControl>
          }
          </>
}
          
          <Button mt="2" colorScheme="indigo" style={{backgroundColor:"#267FFF"}} onPress={()=>handlePosts()}>
          {loading2?<ActivityIndicator color={"#fff"}/>:<Text style={{color:"white"}}>Upload</Text>}
          </Button>
          <View style={{width:"100%",height:35,borderColor:"#F8F8F8",borderWidth:1}}>
            <TextInput placeholder={"Description optional"}></TextInput>
          </View>
        </VStack>
      </Box>
    </Center>
    </View>
       </View>
    )
}
export default AddPostsScreen
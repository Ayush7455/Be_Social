import React, { useEffect, useState } from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, useNativeBase } from "native-base";
import { MaterialIcons } from '@expo/vector-icons'; 
import { ActivityIndicator, Alert, Image, Modal, Pressable, TextInput, TouchableOpacity, View,AsyncStorage, SafeAreaView, StatusBar } from "react-native";
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
    const[post,setPost]=useState(null)
    const navigation=useNavigation()
    const [postdescription,setPostDescription]=useState("")
    const [data,setData]=useState([])
    const pickImage = async () => {
        setLoading1(true)
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        })
        // console.log(result)

        if (!result.cancelled) {
            const source = { uri: result.uri };


            const response = await fetch(result.uri);
            const blob = await response.blob();
            const filename = result.uri.substring(result.uri);

            const ref = firebase.storage().ref().child(filename);
            const snapshot = await ref.put(blob);
            const url = await snapshot.ref.getDownloadURL();

            setLoading1(false)
            setPost(url)
            // console.log(url)
        }
        else {
            setLoading1(false)
            setPost(null)
        }
    }

    const handleUpload = () => {

        if (post != null) {
            AsyncStorage.getItem('user')
                .then(data => {
                   
                    setLoading2(true)
                    fetch('https://kind-erin-shrimp-vest.cyclic.app/addpost', {
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            username: JSON.parse(data).user.username,
                            profilepic:JSON.parse(data).user.profilepic,
                            post: post,
                            postdescription: postdescription
                        })
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.message == 'Post added successfully') {
                                alert('Post added successfully')
                                setLoading2(false)
                                navigation.navigate('HomeScreen')
                            }
                            else {
                                alert('Something went wrong, please try again')
                                setLoading2(false)
                            }
                        })
                }).catch((err)=>{
                    alert("Something went wrong")
                    setLoading2(false)
                })
        }
        else {
            alert('Please select an image')
        }
    }

    return (
        <>
        <StatusBar
        backgroundColor={"white"}
        barStyle={"dark-content"}
        />
        <SafeAreaView style={{justifyContent:"center",alignItems:"center",backgroundColor:"#fff",width:"100%",height:"100%",backgroundColor:"#F2F6FF"}}>
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
            <TouchableOpacity onPress={()=>pickImage()}>
            <View style={{alignItems:'center',borderRadius:5}}>
            <Image source={{uri:post}}style={{width:"100%",height:200,
                backgroundColor:"rgba(0,0,0,0.06",marginTop:20,borderRadius:10}}/>
            </View>
            </TouchableOpacity>:
          <TouchableOpacity onPress={()=>pickImage()}>
          <FormControl>
            
            <View style={{alignItems:'center'}}>
            <Feather name="upload-cloud" size={60} color="#267FFF" />
            </View>
          </FormControl>
          </TouchableOpacity>
          }
          </>
}
          
          <Button mt="2" colorScheme="indigo" style={{backgroundColor:"#267FFF"}} onPress={()=>handleUpload()}>
          {loading2?<ActivityIndicator color={"#fff"}/>:<Text style={{color:"white"}}>Upload</Text>}
          </Button>
          <View style={{width:"100%",height:35,borderColor:"#F8F8F8",borderWidth:1}}>
            <TextInput placeholder={"Description optional"} onChangeText={(text)=>setPostDescription(text)}></TextInput>
          </View>
        </VStack>
      </Box>
    </Center>
    </View>
       </SafeAreaView>
       </>
    )
}
export default AddPostsScreen
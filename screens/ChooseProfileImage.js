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

const ChooseProfileImage= () => {
  const navigation=useNavigation()
  const [image, setImage] = useState(null);

    const [loading, setLoading] = useState(false)

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        })
        


        if (!result.cancelled) {
            const source = { uri: result.uri };
            setImage(source);

            const response = await fetch(result.uri);
            const blob = await response.blob();
            const filename = result.uri.substring(result.uri);

            const ref = firebase.storage().ref().child(filename);
            const snapshot = await ref.put(blob);
            const url = await snapshot.ref.getDownloadURL();

           
            return url
        }
        else {
            return null
        }
    }

    const handleUpload = () => {
        
        AsyncStorage.getItem('user')
            .then(data => {
                setLoading(true)

                pickImage().then(url => {
                    fetch('https://kind-erin-shrimp-vest.cyclic.app/setprofilepic', {
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: JSON.parse(data).user.email,
                            profilepic: url
                        })
                    })
                        .then(res => res.json()).then(
                            data => {
                                if (data.message === "Profile picture updated successfully") {
                                    setLoading(false)
                                    alert('Profile picture updated successfully')
                                    navigation.navigate('EditProfileScreen')
                                }
                                else if (data.error === "Invalid Credentials") {
                                    alert('Invalid Credentials')
                                    setLoading(false)
                                    navigation.navigate('LoginScreen')
                                }
                                else {
                                    setLoading(false)
                                    alert("Please Try Again");
                                }
                            }
                        )
                        .catch(err => {
                            console.log(err)
                        })

                })
            })
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
          Upload your image
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <View style={{alignItems:'center',borderRadius:5}}>
            <Feather name="upload-cloud" size={80} color="#267FFF" />
            </View>
          </FormControl>

          
          <Button mt="2" colorScheme="indigo" style={{backgroundColor:"#267FFF"}} onPress={()=>handleUpload()}>
          {loading?<ActivityIndicator color={"#fff"}/>:<Text style={{color:"white"}}>Upload</Text>}
          </Button>
        </VStack>
      </Box>
    </Center>
    </View>
       </View>
  )
};
export default ChooseProfileImage
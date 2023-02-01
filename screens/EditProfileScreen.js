import React, { useEffect, useState } from "react";
import {ActivityIndicator, Image, Modal, Text,TextInput,Touchable,View,AsyncStorage, StatusBar} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import HLogo from "../assets/images/logoh.jpeg";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Cross from "../assets/images/x.png";
import { Button } from "native-base";
import Success from "../assets/images/success.png";
import {useToast,Box} from "native-base"
import {firebase} from "../Firebase/Config";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native";
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

const EditProfileScreen=()=>{
    const toast = useToast();
    const navigation=useNavigation()
    const[visible,setVisible]=useState(false)
    const [description, setdescription] = useState('')

    const [loading, setLoading] = useState(false)


    const handleDescription = () => {

        if (description == '') {
            alert('Please enter username')
          
        }
        else {
            setLoading(true)
            AsyncStorage.getItem('user').then(
                data => {
                    fetch('https://kind-erin-shrimp-vest.cyclic.app/setdescription', {
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: JSON.parse(data).user.email,
                            description: description
                        })
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.message === "Description Updated Successfully") {
                                setLoading(false)
                                setVisible(false)
                                toast.show({
                                  render: () => {
                                    return <Box bg="emerald.200" px="2" py="1" rounded="sm" mb={5}>
                                            Description changed successfully
                                          </Box>;
                                  }
                                })
                            }
                            else if (data.error === "Invalid Credentials") {
                                alert('Invalid Credentials')
                                setLoading(false)
                                navigation.navigate('LoginScreen')
                            }
                            else {
                                setLoading(false)
                                toast.show({
                                  render: () => {
                                    return <Box backgroundColor={"#FF0000"} px="2" py="1" rounded="sm" mb={5}>
                                            Please Try Again
                                          </Box>;
                                  }
                                })
                               
                            }
                        })
                        .catch(err => {
                          toast.show({
                            render: () => {
                              return <Box backgroundColor={"#FF0000"} px="2" py="1" rounded="sm" mb={5}>
                                     Something went wrong
                                    </Box>;
                            }
                          })
                           
                            setLoading(false)
                        })
                }
            )
                .catch(err => {
                    alert('Something went wrong')
                    setLoading(false)
                })
        }

        // navigation.navigate('Signup_ChoosePassword')
    }


    return (
      <>
      <StatusBar
      backgroundColor={"white"}
      barStyle={"dark-content"}
      />
        <SafeAreaView style={{flex:1,backgroundColor:"#fff"}}>
            <TouchableOpacity onPress={()=>navigation.navigate("ChooseProfileImage")}>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginBottom:10,marginTop:10,borderBottomColor:"#F8F8F8",borderBottomWidth:1,height:50,padding:5}}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                <FontAwesome name="user-circle-o"  size={25} color="#267FFF" />
                <Text style={{marginLeft:5,fontSize:17}}>Change Profile Picture</Text>
                </View>
                <View>
                <MaterialIcons name="navigate-next" size={30} color="#267FFF" />
                </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("ChangeUserNameScreen")}>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginBottom:10,borderBottomColor:"#F8F8F8",borderBottomWidth:1,height:50,padding:5}}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                <MaterialIcons name="drive-file-rename-outline"size={25} color="#267FFF" />
                <Text style={{marginLeft:5,fontSize:17}}>Change UserName</Text>
                </View>
                <View>
                <MaterialIcons name="navigate-next" size={30} color="#267FFF" />
                </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setVisible(true)}>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginBottom:10,borderBottomColor:"#F8F8F8",borderBottomWidth:1,height:50,padding:5}}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                <MaterialIcons name="description"  size={25} color="#267FFF" />
                <Text style={{marginLeft:5,fontSize:17}}>Change Description</Text>
                </View>
                <View>
                <MaterialIcons name="navigate-next" size={30} color="#267FFF" />
                </View>
            </View>
            </TouchableOpacity>
            <Image source={HLogo} style={{height:40,width:40,marginTop:40}}/>
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <ModalPopup visible={visible}>
              <View style={{alignItems:"center"}}>
                <View style={{width:"100%",height:40,alignItems:"flex-end",justifyContent:"center"}}>
                  <TouchableOpacity onPress={()=>setVisible(false)}>
                  <Image source={Cross} style={{width:30,height:30}}/>
                  </TouchableOpacity>

                </View>

              </View>
              <View style={{alignItems:"center"}}>
              <View style={{height:100,width:"90%",borderColor:"#267FFF",borderWidth:1}}>
                <TextInput placeholder="Description" style={{height:"100%",width:"100%"}} onChangeText={(text)=>setdescription(text)} multiline={true} numberOfLines={5}></TextInput>
              </View>
              <Text style={{marginVertical:30,fontSize:20,textAlign:"center"}}>Add your description</Text>
              {loading?<ActivityIndicator color={"#267FFF"}/>:
              <Button mt="2" colorScheme="indigo" style={{backgroundColor:"#267FFF"}} onPress={()=>handleDescription()}>
            Change Description
          </Button>
          }
          </View>
            </ModalPopup>
          </View>
        </SafeAreaView>
        </>

    )
}
export default EditProfileScreen
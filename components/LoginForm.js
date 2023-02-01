import  React, { useState } from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";
import { MaterialIcons } from '@expo/vector-icons'; 
import { ActivityIndicator, Alert, TextInput, Touchable, TouchableOpacity, View,AsyncStorage } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {useToast} from "native-base"
 


const LoginForm = () => {
  const toast = useToast();
  const navigation=useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = () => {
      if (email == '' || password == '') {
          alert('Please enter email and password')
      }
      else {
          setLoading(true)
          fetch('https://kind-erin-shrimp-vest.cyclic.app/signin', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  email,
                  password
              })
          })
              .then(res => res.json())
              .then(async data => {
                  if (data.error) {
                      setLoading(false)
                      toast.show({
                        render: () => {
                          return <Box bg="emerald.200" px="2" py="1" rounded="sm" mb={5}>
                                 Server Error
                                </Box>;
                        }
                      })
                  }
                  else if (data.message == 'Successfully Signed In') {
                      setLoading(false)
                      await AsyncStorage.setItem("user",JSON.stringify(data))
                      navigation.navigate('HomeScreen', { data })
                  }
              })
              .catch(err => {
                  setLoading(false)
                  toast.show({
                    render: () => {
                      return <Box bg="emerald.200" px="2" py="1" rounded="sm" mb={5}>
                             Something went wrong
                            </Box>;
                    }
                  })
              })
      }
      // navigation.navigate('MainPage')
  }
  return <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} style={{textAlign:"center"}}>
          Welcome Back
        </Heading>
        <Heading mt="1" _dark={{
        color: "Gray.100"
      }} color="coolGray.400" fontWeight="small" size="xs" style={{textAlign:"center"}}>
          Enter your credentials to access your account
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <View style={{borderWidth:2,borderColor:"#F2F6FF",height:45,alignItems:'center',flexDirection:"row",borderRadius:5}}>
            <MaterialIcons name="email" size={20} color="#267FFF" style={{paddingRight:7}}/>
            <TextInput  placeholder="Enter your email" style={{width:"100%"}} onChangeText={(text)=>setEmail(text)}></TextInput>
            </View>
          </FormControl>
          <FormControl>
          <View style={{borderWidth:2,height:45,borderColor:"#F2F6FF",alignItems:'center',flexDirection:"row",borderRadius:5}}>
          <MaterialIcons name="lock" size={20} color="#267FFF" style={{paddingRight:7}} />
            <TextInput placeholder="Enter your password" style={{width:"100%"}} onChangeText={(text)=>setPassword(text)}></TextInput>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("ForgotPasswordEmailScreen")}>
            <Text style={{color:"#267FFF",marginRight:10,alignSelf:"flex-end",padding:5}}>
                Forget Password ?
            </Text>
            </TouchableOpacity>
          </FormControl>
          
          <Button mt="2" colorScheme="indigo" style={{backgroundColor:"#267FFF"}} onPress={()=>handleLogin()}>
          {loading?<ActivityIndicator color={"#FFF"}/>:<Text style={{color:"#fff"}}>Sign in</Text>}
            </Button>
          <HStack mt="6" justifyContent="center">
            <View style={{flexDirection:"row"}}>
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              I'm a new user 
              </Text>
              <TouchableOpacity onPress={()=>navigation.navigate("SignUpScreen")}>
                <Text style={{color:"#267FFF",marginLeft:4}}>Sign Up</Text>
              </TouchableOpacity>

            </View>
          </HStack>
        </VStack>
      </Box>
    </Center>;
};
export default LoginForm
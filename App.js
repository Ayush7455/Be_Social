import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from "native-base"
import { useState,useEffect } from 'react';
import {AsyncStorage} from "react-native";
import { StyleSheet, Text, View } from 'react-native';
import AccountHeader from './components/AccountHeader';
import ChatRoomHeader from './components/ChatRoomHeader';
import HomeHeader from './components/HomeHeader';
import OtherProfileHeader from './components/OtherProfileHeader';
import TabHeader from './components/TabHeader';
import AccountConfirmationScreen from './screens/AccountConfirmation';
import AddPostsScreen from './screens/AddPostsScreen';
import ChangePasswordScreen from './screens/ChangePasswordScreen';
import ChangeUserName from './screens/ChangeUserName';
import ChatRoomScreen from './screens/ChatRoomScreen';
import ChatScreen from './screens/ChatScreen';
import ChoosePasswordScreen from './screens/ChoosePasswordScreen';
import ChooseProfileImage from './screens/ChooseProfileImage';
import ChooseUserNameScreen from './screens/ChooseUserNameScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import ForgotPasswordEmailScreen from './screens/ForgotPasswordEmailScreen';
import ForgotPasswordPasswordScreen from './screens/ForgotPasswordPassword';
import LoginScreen from './screens/LoginScreen';
import OtherUserScreen from './screens/OtherUserScreen';
import SettingsScreen from './screens/SettingsScreen';
import SignUpScreen from './screens/SignUpScreen';
import AccountScreen from './screens/TabNavigatorScreens/AccountScreen';
import HomeScreen from './screens/TabNavigatorScreens/HomeScreen';
import NotificationScreen from './screens/TabNavigatorScreens/NotificationScreen';
import SearchScreen from './screens/TabNavigatorScreens/SearchScreen';
import VerificationCodeForgotScreen from './screens/VerificationCodeForgotScreen';
import VerificationCodeScreen from './screens/VerificationCodeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [userdata,setUserdata]=useState(null)
    useEffect(()=>{
     AsyncStorage.getItem("user").then(data=>{
         setUserdata(JSON.parse(data))
     }).catch(err=>console.log(err))
    },[])

  return (
    <NativeBaseProvider>
    <NavigationContainer>
    <Stack.Navigator>

      {userdata?<Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerTitle:HomeHeader,headerShadowVisible:false}}/>:
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}} />
  }
  {userdata?<Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}} />:<Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerTitle:HomeHeader,headerShadowVisible:false}}/>
  }
      <Stack.Screen name="SignUpScreen" component={SignUpScreen}options={{headerShown:false}} />
      <Stack.Screen name="VerificationCodeScreen" component={VerificationCodeScreen}options={{headerShown:false}} />
      <Stack.Screen name="ChooseUserNameScreen" component={ChooseUserNameScreen} options={{headerShown:false}} />
      <Stack.Screen name="AccountConfirmationScreen" component={AccountConfirmationScreen} options={{headerShown:false}} />
      <Stack.Screen name="ForgotPasswordEmailScreen" component={ForgotPasswordEmailScreen} options={{headerShown:false}} />
      <Stack.Screen name="VerificationCodeForgotScreen" component={VerificationCodeForgotScreen} options={{headerShown:false}} />
      <Stack.Screen name="ForgotPasswordPasswordScreen" component={ForgotPasswordPasswordScreen} options={{headerShown:false}} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} options={{headerTitle:"Your Chats"}}/>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{headerTitle:"Settings"}}/>
      <Stack.Screen name="ChoosePasswordScreen" component={ChoosePasswordScreen} options={{headerShown:false}}/>
      <Stack.Screen name="AccountScreen" component={AccountScreen} options={{headerTitle:AccountHeader,headerShadowVisible:false,headerBackVisible:false}}/>
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} options={{headerShadowVisible:false,headerTitle:TabHeader,headerBackVisible:false}}/>
      <Stack.Screen name="SearchScreen" component={SearchScreen} options={{headerShadowVisible:false,headerTitle:TabHeader,headerBackVisible:false}}/>
      <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} options={{headerShown:false}}/>
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} options={{headerTitle:"Edit Profile"}}/>
      <Stack.Screen name="ChangeUserNameScreen" component={ChangeUserName} options={{headerShown:false}}/>
      <Stack.Screen name="ChooseProfileImage" component={ChooseProfileImage} options={{headerShown:false}}/>
      <Stack.Screen name="AddPostsScreen" component={AddPostsScreen} options={{headerShown:false}}/>
      <Stack.Screen name="OtherUserScreen" component={OtherUserScreen} options={{headerTitle:OtherProfileHeader,headerShadowVisible:false}}/>
      <Stack.Screen name="ChatRoomScreen" component={ChatRoomScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  </NativeBaseProvider>
  );
}

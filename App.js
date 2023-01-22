import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from "native-base"
import { StyleSheet, Text, View } from 'react-native';
import TabHeader from './components/TabHeader';
import AccountConfirmationScreen from './screens/AccountConfirmation';
import ChatScreen from './screens/ChatScreen';
import ChoosePasswordScreen from './screens/ChoosePasswordScreen';
import ChooseUserNameScreen from './screens/ChooseUserNameScreen';
import ForgotPasswordEmailScreen from './screens/ForgotPasswordEmailScreen';
import ForgotPasswordPasswordScreen from './screens/ForgotPasswordPassword';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import SignUpScreen from './screens/SignUpScreen';
import VerificationCodeForgotScreen from './screens/VerificationCodeForgotScreen';
import VerificationCodeScreen from './screens/VerificationCodeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen}options={{headerShown:false}} />
      <Stack.Screen name="VerificationCodeScreen" component={VerificationCodeScreen}options={{headerShown:false}} />
      <Stack.Screen name="ChooseUserNameScreen" component={ChooseUserNameScreen} options={{headerShown:false}} />
      <Stack.Screen name="AccountConfirmationScreen" component={AccountConfirmationScreen} options={{headerShown:false}} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown:false}} />
      <Stack.Screen name="ForgotPasswordEmailScreen" component={ForgotPasswordEmailScreen} options={{headerShown:false}} />
      <Stack.Screen name="VerificationCodeForgotScreen" component={VerificationCodeForgotScreen} options={{headerShown:false}} />
      <Stack.Screen name="ForgotPasswordPasswordScreen" component={ForgotPasswordPasswordScreen} options={{headerShown:false}} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} options={{headerTitle:"Your Chats"}}/>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{headerTitle:"Settings"}}/>
      <Stack.Screen name="ChoosePasswordScreen" component={ChoosePasswordScreen} options={{headerShown:false}}/>

    </Stack.Navigator>
  </NavigationContainer>
  </NativeBaseProvider>
  );
}

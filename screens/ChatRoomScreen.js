import {
    StyleSheet, Text, View, StatusBar, ScrollView, Image,
     ActivityIndicator, TouchableOpacity, TextInput,AsyncStorage,KeyboardAvoidingView
,Pressable} from 'react-native'

import React, { useEffect, useRef, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import nopic from '../assets/images/noimg.png'
import io from 'socket.io-client'
import {SimpleLineIcons,Feather,MaterialCommunityIcons,AntDesign,Ionicons } from "@expo/vector-icons"
import { SafeAreaView } from 'react-native';
const socket = io('http://192.168.30.72:3001')


const MessagePage = ({ navigation, route }) => {

    const { fuseremail, fuserid } = route.params;

    const [ouruserdata, setOuruserdata] = React.useState(null);
    const [fuserdata, setFuserdata] = React.useState(null);

    const [userid, setUserid] = React.useState(null);
    const [roomid, setRoomid] = React.useState(null);
    const [chat, setChat] = React.useState([]);

    // OUR ID & ROOM ID FOR SOCKET.IO

    useEffect(() => {
      loaddata()
    },[chat])

    useEffect(() => {
        socket.on('receive_message', (data) => {
            console.log('recieved message - ', data)
            
        })
    },[socket])


    const sortroomid = (id1, id2) => {
        if (id1 > id2) {
            return id1 + id2
        } else {
            return id2 + id1
        }
    }


    const loaddata = async () => {
        AsyncStorage.getItem('user')
            .then(async (value) => {
                fetch('https://kind-erin-shrimp-vest.cyclic.app/userdata', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + JSON.parse(value).token
                    },
                    body: JSON.stringify({ email: JSON.parse(value).user.email })
                })
                    .then(res => res.json()).then(data => {
                        if (data.message == 'User Found') {
                            // console.log('our user data ', data.user.username)
                            setOuruserdata(data.user)
                            setUserid(data.user._id)

                            fetch('https://kind-erin-shrimp-vest.cyclic.app/otheruserdata', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({ email: fuseremail })
                            })
                                .then(res => res.json())
                                .then(async data1 => {
                                    if (data1.message == 'User Found') {
                                        // console.log('fuser data ', data1.user.username)
                                        setFuserdata(data1.user)
                                        let temproomid = await sortroomid(fuserid, data.user._id)

                                        setRoomid(temproomid)
                                        // console.log('room id ', temproomid)
                                        socket.emit('join_room', { roomid: temproomid })
                                        loadMessages(temproomid)
                                    }
                                    else {
                                        
                                        // navigation.navigate('Login')
                                    }
                                })
                                .catch(err => {
                                    // console.log(err)
                                    
                                })
                        }
                        else {
                            
                           
                        }
                    })
                    .catch(err => {
                       
                    })
            })
            .catch(err => {
                
            })
    }

    // const joinroom = () => {
    //     socket.emit('join_room', { roomid: roomid })
    // }

    const sendMessage = async () => {
        const messagedata = {
            message: currentmessage,
            roomid: roomid,
            senderid: userid,
            recieverid: fuserdata._id
        }
        fetch('https://kind-erin-shrimp-vest.cyclic.app/savemessagetodb', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(messagedata)
        }).then(res => res.json())
            .then(data => {
                if (data.message == 'Message saved successfully') {

                    socket.emit('send_message', messagedata)
                    loadMessages(roomid)
                    console.log('message sent')

                   

                    setCurrentmessage('')

                }
                else {
                    alert('Network Error')
                    setCurrentmessage('')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }


    const [currentmessage, setCurrentmessage] = React.useState(null);


    const loadMessages = (temproomid) => {
        fetch('https://kind-erin-shrimp-vest.cyclic.app/getmessages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ roomid: temproomid })
        }).then(res => res.json())
            .then(data => {
                setChat(data)
            })
    }
    const scrollViewRef = useRef();
    return (
        <>
        <StatusBar/>
        <SafeAreaView style={styles.container}>
            <View style={styles.s1}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goback}>
                <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>

                {
                    fuserdata?.profilepic ?
                        <Image source={{ uri: fuserdata?.profilepic }} style={styles.profilepic} />
                        :
                        <Image source={nopic} style={styles.profilepic} />

                }
                <Text style={styles.username}>{fuserdata?.username}</Text>
            </View>
            

            {chat.length>0?
                
                <ScrollView style={styles.messageView}
                ref={scrollViewRef}
                onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
            >
                {
                    chat.map((item, index) => {
                        return (
                            <View style={styles.message} key={index}>
                                {
                                    item.senderid == userid &&
                                    <View style={{backgroundColor:"lightgrey",padding:10,marginLeft:"auto",margin:10,borderRadius:10,marginRight:10,maxWidth:"75%"}}>
                                    <Text style={{color:"black"}}>{item.message}</Text>
                                </View>
                                }
                                {
                                    item.senderid != userid && item != '' &&
                                    <View style={{backgroundColor:"#3777F0",padding:10,marginLeft:10,margin:10,borderRadius:10,marginRight:"auto",maxWidth:"75%"}}>
                                    <Text style={{color:"white"}}>{item.message}</Text>
                                </View>
                                }
                            </View>
                        )
                    })
                }
            </ScrollView>:<View></View>
            }
    


    <KeyboardAvoidingView style={{flexDirection:"row",padding:10,bottom:0,zindex:100,position:"absolute",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(255,255,255,0.9)"}}
        behavior={Platform.OS==="ios"?"padding":"height"}
        keyboardVerticalOffset={100}
        >
            <View style={{backgroundColor:"#f2f2f2",flex:1,marginRight:10,borderRadius:25,justifyContent:"center",
            alignItems:"center",borderWidth:1,borderColor:"#dedede",flexDirection:"row",padding:5}}>
                <SimpleLineIcons style={{marginHorizontal:5}} name="emotsmile" size={24} color="#595959"/>
            <TextInput style={{flex:1,marginHorizontal:5}}
            value={currentmessage}
            placeholder="Send a message" onChangeText={(text)=>setCurrentmessage(text)}/>
            <Feather name="camera" size={24} color="#595959" style={{marginHorizontal:5}}/>
            <MaterialCommunityIcons name="microphone-outline" size={24} color="#595959" style={{marginHorizontal:5}}/>
            
            </View>
            <Pressable onPress={()=>sendMessage()} style={{width:40,height:40,backgroundColor:"#3777f0",borderRadius:25,justifyContent:"center",alignItems:"center"}}>
           {currentmessage?<Ionicons name="send" size={18} color="white" />:<AntDesign name="plus" size={24} color="white" />}
            </Pressable>
            
        </KeyboardAvoidingView>
        </SafeAreaView>
        </>
    )
}

export default MessagePage

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    profilepic: {
        width: 40,
        height: 40,
        borderRadius: 25,
    },
    username: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    s1: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: "white",
        padding: 10,
    },
    sbottom: {
        width: '100%',
        height: 50,
        backgroundColor: '#111111',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        position: 'absolute',
        bottom: 0,
        borderRadius: 30,
    },
    sbottominput: {
        width: '80%',
        height: 40,
        fontSize: 17,
        color: 'white',
    },

    message: {
        width: '100%',
        // padding:10,
        borderRadius: 10,
        // marginVertical:5,
        // backgroundColor:'red',
    },
    messageView: {
        width: '100%',
        marginBottom: 50,
    },
    messageRight: {
        width: '100%',
        alignItems: 'flex-end',
        // backgroundColor:'red'
    },
    messageTextRight: {
        color: 'white',
        backgroundColor: '#1e90ff',
        // width:'min-content',
        minWidth: 100,
        padding: 10,
        fontSize: 17,
        borderRadius: 20,
        margin: 10,
    },
    messageLeft: {
        width: '100%',
        alignItems: 'flex-start',
        // backgroundColor:'red'
    },
    messageTextLeft: {
        color: 'white',
        backgroundColor: '#222222',
        color: 'white',
        fontSize: 17,
        minWidth: 100,
        padding: 10,
        borderRadius: 20,
        margin: 10,
    },
})
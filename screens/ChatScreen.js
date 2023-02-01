import React, { useEffect, useState } from "react";
import {FlatList, SafeAreaView, StatusBar, Text,TextInput,View,AsyncStorage,StyleSheet} from "react-native";
import ChatComponent from "../components/ChatComponent";
import {ScrollView, useToast} from "native-base"
import {Ionicons} from "@expo/vector-icons";


const ChatScreen=()=>{
    const[searchInput,setSearchInput]=useState("")
    const toast = useToast();

    const [filteredData, setFilteredData] = useState(chats);
    const [chats, setChats] = useState(null)
    const [userdata, setUserdata] = useState(null)
    useEffect(() => {
        loadchats()
    }, [])
    const loadchats = () => {
        AsyncStorage.getItem('user')
            .then(data => {
                setUserdata(JSON.parse(data))
                let userid = JSON.parse(data).user._id;
                console.log(userid)
                fetch('https://kind-erin-shrimp-vest.cyclic.app/getusermessages', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        userid:userid
                    })
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        data.sort((a, b) => {
                            if(a.date > b.date){
                                return -1
                            }
                        })
                        setChats(data)
                    })
                    .catch(err => {
                        toast.show({
                            render: () => {
                              return <Box backgroundColor={"#FF0000"} px="2" py="1" rounded="sm" mb={5}>
                                      Something went wrong
                                    </Box>;
                            }
                          })
                        setChats([])
                    })
            })
            .catch(err => alert(err))
    }
    console.log(chats)
    // const filterData = (searchInput, chats) => {
    //     if(chats!=null){
    //     return chats.filter(item => {
    //       return item.username.toLowerCase().includes(searchInput.toLowerCase())||item.lastmessage.toLowerCase().includes(searchInput.toLowerCase());
    //     });
        
    // }
    // else{
    //     return null
    // }
    //   };
    // useEffect(() => {
    //     setFilteredData(filterData(searchInput, chats))
    //   }, [searchInput]);
    return (
        <>
        <StatusBar
        backgroundColor={"white"}
        barStyle={"dark-content"}
        />
        <SafeAreaView style={{backgroundColor:"#fff",flex:1}}>
    <View style={{alignItems:"center"}}><TextInput value={searchInput} onChangeText={(text)=>setSearchInput(text)} placeholder={"Search Users"} placeholderTextColor={"#000"} style={{width:"95%",height:39,backgroundColor:"#F0F0F0",borderRadius:20,paddingLeft:15,marginTop:20}}/></View>
        <ScrollView>

        <View style={{marginTop:10,paddingBottom:60}}>
                {
                    chats!==null && chats.filter(
                        (chat) => {
                            if (searchInput == '') {
                                return chat
                            }
                            else if (
                                chat?.fusername?.toLowerCase().includes(searchInput.toLowerCase())
                                ||
                                chat?.lastmessage?.toLowerCase().includes(searchInput.toLowerCase())
                            ) {
                                return chat
                            }
                        }
                    ).map((chat) => {
                        return <ChatComponent key={chat.fuserid} chat={chat}/>
                    })
                }
            </View>
        </ScrollView>
        </SafeAreaView>
        </>
    )
}
export default ChatScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
    },
    gohomeicon: {
        position: 'absolute',
        top: 15,
        left: 20,
        zIndex: 10,
        color: 'white',
        fontSize: 30,
    },
    c1: {
        width: '95%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 30,
        backgroundColor: '#111111',
        alignSelf: 'center',
        borderRadius: 20,
        borderColor: 'gray',
        borderWidth: 1,
    },
    searchbar: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
        fontSize: 18,
    },
    c2: {
        width: '100%',
        padding: 10,
    }

})

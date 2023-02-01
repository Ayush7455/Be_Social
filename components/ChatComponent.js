import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import nopic from '../assets/images/noimg.png'
import { useNavigation } from '@react-navigation/native'
import {useToast} from "native-base"
const ChatCard = ({ chat}) => {
    const navigation=useNavigation()
    const toast = useToast();

    console.log(chat.fuserid)
    let [fuserdata, setFuserdata] = React.useState(null);
    useEffect(() => {
        fetch('https://kind-erin-shrimp-vest.cyclic.app/getuserbyid', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userid: chat.fuserid
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setFuserdata(data)
            })
            .catch(err => {
                toast.show({
                    render: () => {
                      return <Box backgroundColor={"#FF0000"} px="2" py="1" rounded="sm" mb={5}>
                              Something went wrong
                            </Box>;
                    }
                  })
                setFuserdata(null)
            })
    }, [])
    return (

        <View style={styles.ChatCard} >
            {
                fuserdata?.user?.profilepic ?
                    <Image source={{ uri: fuserdata?.user?.profilepic }} style={styles.image} />
                    :
                    <Image source={nopic} style={styles.image} />
            }

            <View style={styles.c1}>
                <Text style={styles.username} onPress={
                    
                        ()=>{
                            navigation.navigate('ChatRoomScreen',{
                                fuseremail : fuserdata.user.email,
                                fuserid : fuserdata.user._id,
                            })
                        }
                    
                }>{fuserdata?.user?.username}</Text>
                <Text style={styles.lastmessage}>{chat.lastmessage}</Text>
            </View>
        </View>




    )
}

export default ChatCard

const styles = StyleSheet.create({
    ChatCard: {
        backgroundColor: 'white',
        width: '100%',
        marginTop: 10,
        borderRadius: 20,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    username: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    c1: {
        marginLeft: 20,
        maxWidth:"85%"
    },
    lastmessage: {
        color: 'gray',
        fontSize: 19,
    }
})
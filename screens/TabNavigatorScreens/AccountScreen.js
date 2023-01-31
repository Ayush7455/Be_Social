import React, {useEffect, useState } from "react";
import {Dimensions, Text,View,ActivityIndicator, ScrollView, AsyncStorage,RefreshControl, SafeAreaView} from "react-native";
import {useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import NoImage from "../../assets/images/noimg.png";
import BottomNavBar from "../../components/BottomNavBar";
import { StatusBar } from "react-native";
const AccountScreen=()=>{
    const width=Dimensions.get("window").width
    const navigation=useNavigation()
    const [userdata, setUserdata] = useState(null)
    const [refresh,setRefresh]=useState(false)
    const[posts,setPosts]=useState([])
    const loaddata = async () => {
        setRefresh(true)
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
                            setUserdata(data.user)
                            fetch('http://10.0.2.2:3000/getuserposts',{
                                method:"POST",
                                headers:{
                                    "Content-Type":"application/json"
                                },
                                body: JSON.stringify({ username: JSON.parse(value).user.username })

                            })
          .then(res => res.json())
          .then(data => setPosts(data))
          .catch(error => console.error(error));
                        }
                        else {
                            alert('Login Again')
                            navigation.navigate('LoginScreen')
                        }
                    })
                    .catch(err => {
                        navigation.navigate('LoginScreen')
                    })
            })
            .catch(err => {
                navigation.navigate('LoginScreen')
            })
            setTimeout(()=>{
                setRefresh(false)
            },3000)
    }
    useEffect(() => {
        loaddata()
    }, [])

    console.log('userdata ', userdata)

    return(
        <>
        <StatusBar
        backgroundColor={"white"}
        barStyle={"dark-content"}
        />
        <SafeAreaView style={{backgroundColor:"#fff",flex:1,paddingBottom:35}}>
            {userdata?
            <ScrollView showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl
                refreshing={refresh}
                onRefresh={()=>loaddata()}
                />
            }
            
            >
                
                <View style={{alignItems:"center"}}>
                    <View style={{width:200,height:200,borderRadius:100,overflow:"hidden",marginTop:10}}>
                        {userdata.profilepic.length>0?
                        <Image source={{
                            uri:userdata.profilepic
                        }} style={{flex:1,width:undefined,height:undefined}}/>:
                    <Image source={NoImage} style={{flex:1,width:undefined,height:undefined}}/>
                }
                    </View>
                    <View style={{backgroundColor:"#41444B",position:"absolute",top:30,left:width-300,width:40,height:40,borderRadius:20,alignItems:"center",justifyContent:"center"}}>
                        <MaterialIcons name="chat" size={18} color="#DFD8C8" onPress={()=>navigation.navigate("ChatScreen")}></MaterialIcons>
                    </View>
                    <View style={{alignSelf:"center",alignItems:"center",marginTop:16}}>
                    <Text style={{fontWeight:"200",fontSize:36}}>{userdata.username}</Text>
                        <Text style={{fontSize:14,color:"#AEB5BC"}}>{userdata.description}</Text>
                    </View>
        
                        <View style={{flexDirection:"row",alignSelf:"center",marginTop:16}}>
                            <View style={{alignItems:"center",flex:1}}>
                            <Text style={{fontSize:24}}>{userdata.posts.length}</Text>
                            <Text style={{fontSize:12,color:"#AEB5BC",textTransform:"uppercase",fontWeight:"500"}}>Posts</Text>
                            </View>
                            <View style={{alignItems:"center",flex:1,borderColor:"#DFD8C8",borderLeftWidth:1,borderRightWidth:1}}>
                            <Text style={{fontSize:24}}>{userdata.followers.length}</Text>
                            <Text style={{fontSize:12,color:"#AEB5BC",textTransform:"uppercase",fontWeight:"500"}}>Followers</Text>
                            </View>
                            <View style={{alignItems:"center",flex:1}}>
                            <Text style={{fontSize:24}}>{userdata.following.length}</Text>
                            <Text style={{fontSize:12,color:"#AEB5BC",textTransform:"uppercase",fontWeight:"500"}}>Following</Text>
                            </View>
                        </View>
                </View>
                {posts.length>0?
                <View style={{marginTop:32,alignItems:"center"}}>
                <Text style={{fontWeight:"200",fontSize:20,textAlign:"center",marginBottom:20}}>Your Posts</Text>
                <View style={{flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}}>
                    
                    {
                    posts?.map(
                    (item)=>{
                    return(
                    <Image key={item.post} source={
                        {
                            uri:item.post
                        }
                    } style={{height:120,width:"30%",margin:5}}/>
                    )
                }
                    )

                }
                </View>
                </View>:<View style={{marginTop:32,alignItems:"center"}}>
                <Text style={{fontWeight:"200",fontSize:20,textAlign:"center",marginBottom:20}}>You have not posted anything</Text>
                </View>
}
            </ScrollView>:<ActivityIndicator color={"#267FFF"} size={"large"}/>
}

        <BottomNavBar page={"AccountScreen"}/>
        </SafeAreaView>
        </>
            )
}
export default AccountScreen

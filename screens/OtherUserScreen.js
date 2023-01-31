import React, {useEffect, useState } from "react";
import {Dimensions, Text,View,ActivityIndicator, ScrollView, AsyncStorage,RefreshControl, StatusBar} from "react-native";
import {useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import NoImage from "../assets/images/noimg.png";
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from "react-native";
const OtherUserScreen=({route})=>{
    const width=Dimensions.get("window").width
    const navigation=useNavigation()
    const [userdata, setUserdata] = useState(null)
    const [issameuser, setIssameuser] = useState(false)
    const [posts,setPosts]=useState([])
      
    
        const { user } = route.params

        // console.log(user)
        const ismyprofile = (
            otheruser
        ) => {
    
            AsyncStorage.getItem('user').then((loggeduser) => {
                const loggeduserobj = JSON.parse(loggeduser);
                if (loggeduserobj.user._id == otheruser._id) {
                    setIssameuser(true)
    
                }
                else {
                    setIssameuser(false)
                }
            })
        }
        const loaddata = async () => {
            fetch('https://kind-erin-shrimp-vest.cyclic.app/otheruserdata', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: user.email })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.message == 'User Found') {
                        setUserdata(data.user)
                        ismyprofile(data.user)
                        CheckFollow(data.user)
                    }
                    else {
                        alert('User Not Found')
                        navigation.navigate('SearchScreen')
                        // navigation.navigate('Login')
                    }
                })
                .catch(err => {
                    // console.log(err)
                    alert('Something Went Wrong')
                    navigation.navigate('SearchScreen')
                })
        }
        useEffect(() => {
            fetch('http://10.0.2.2:3000/getuserposts',{
                                method:"POST",
                                headers:{
                                    "Content-Type":"application/json"
                                },
                                body: JSON.stringify({ username: user.username })

                            })
          .then(res => res.json())
          .then(data => setPosts(data))
          .catch(error => console.error(error));
            loaddata()
            
        }, [])
    
    console.log('userdata ', userdata)
    const FollowThisUser = async () => {
        console.log('FollowThisUser')
        const loggeduser = await AsyncStorage.getItem('user');
        const loggeduserobj = JSON.parse(loggeduser);
        fetch('https://kind-erin-shrimp-vest.cyclic.app/followuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                followfrom: loggeduserobj.user.email,
                followto: userdata.email
            })
        }).then(res => res.json())
            .then(data => {
                if (data.message == 'User Followed') {
                    // alert('Followed')
                    loaddata()
                    setIsfollowing(true)
                }
                else {
                    alert('Something Went Wrong')
                }
            })
    }

    const [isfollowing, setIsfollowing] =useState(false)
    const CheckFollow = async (otheruser) => {
        AsyncStorage.getItem('user')
            .then(loggeduser => {
                const loggeduserobj = JSON.parse(loggeduser);
                fetch('https://kind-erin-shrimp-vest.cyclic.app/checkfollow', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        followfrom: loggeduserobj.user.email,
                        followto: otheruser.email
                    })
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.message == 'User in following list') {
                            setIsfollowing(true)
                        }
                        else if (
                            data.message == 'User not in following list'
                        ) {

                            setIsfollowing(false)
                        }
                        else {
                            // loaddata()
                            alert('Something Went Wrong')
                        }
                    })
            })

    }



    const UnfollowThisUser = async () => {
        console.log('UnfollowThisUser')
        const loggeduser = await AsyncStorage.getItem('user');
        const loggeduserobj = JSON.parse(loggeduser);
        fetch('https://kind-erin-shrimp-vest.cyclic.app/unfollowuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                followfrom: loggeduserobj.user.email,
                followto: userdata.email
            })
        }).then(res => res.json())
            .then(data => {
                if (data.message == 'User Unfollowed') {
                    // alert('Followed')
                    loaddata()
                    setIsfollowing(false)
                }
                else {
                    alert('Something Went Wrong')
                }
            })
    }

    return(
        <>
        <StatusBar
        backgroundColor={"white"}
        barStyle={"dark-content"}
        />
        <SafeAreaView style={{backgroundColor:"#fff",flex:1}}>
            {userdata?
            <ScrollView showsVerticalScrollIndicator={false}
            
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
                    {!issameuser&&
                    <View style={{backgroundColor:"#41444B",position:"absolute",top:30,left:width-300,width:40,height:40,borderRadius:20,alignItems:"center",justifyContent:"center"}}>
                        <MaterialIcons name="chat" size={18} color="#DFD8C8" onPress={()=>navigation.navigate("ChatRoomScreen",{fuseremail:userdata.email,fuserid:userdata._id})}></MaterialIcons>
                       
                    </View>
}
                    {!issameuser&&<View style={{backgroundColor:"#41444B",position:"absolute",top:160,left:width-150,width:50,height:50,borderRadius:25,alignItems:"center",justifyContent:"center"}}>
                        {isfollowing?
                    <AntDesign name="check" size={35} color="white" onPress={()=>UnfollowThisUser()}/>:
                    <AntDesign name="plus" size={35} color="white" onPress={()=>FollowThisUser()}/>
                
                }
                    
                        
                       
                    </View>
                    }
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
                {isfollowing||issameuser?<View>
                {posts.length>0?
                <View style={{marginTop:32,alignItems:"center"}}>
                <Text style={{fontWeight:"200",fontSize:20,textAlign:"center",marginBottom:20}}>Posts</Text>
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
                <Text style={{fontWeight:"200",fontSize:20,textAlign:"center",marginBottom:20}}>Not posted anything</Text>
                </View>
}
                </View>:<View style={{marginTop:32,alignItems:"center"}}>
                <Text style={{fontWeight:"200",fontSize:20,textAlign:"center",marginBottom:20}}>Follow to see the posts</Text>
                </View>}
            </ScrollView>:<ActivityIndicator color={"#267FFF"} size={"large"}/>
}

       
        </SafeAreaView>
        </>
            )
}
export default OtherUserScreen

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import {Animated, Dimensions, Text,View,FlatList,ActivityIndicator, TextInput, ScrollView, AsyncStorage} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {FontAwesome5} from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import HomeHeader from "./HomeHeader";
import FeedItems from "./FeedItems";
import TabHeader from "./TabHeader";
import UserItem from "./UserItem";
import { useFocusEffect } from '@react-navigation/native';
import AccountHeader from "./AccountHeader";
import { Image } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import NoImage from "../assets/images/noimg.png";

const datas=[
    {
        id:1,
        username:"Naruto",
        feedimage:"https://mms.businesswire.com/media/20130820005803/en/379599/5/Hello_Everywhere_Film_Poster.jpg",
        profile_photo:"https://media.istockphoto.com/id/1188980757/vector/young-man-anime-style-character.jpg?s=612x612&w=0&k=20&c=uOfXeG7GdMpLqEXPDNA8KbZgEZdIDk9JhvAfIE1_D9A=",
        likes:[
            "Doremon",
            "Hattori"
        ],
        comments:[
            {
            id:1,
            username:"Doremon",
            comment:"Nice Post",
            },
            {
                id:2,
                username:"Hattori",
                comment:"Feel the feed and kill the weed",

            }
        ]
        
    },
    {
        id:3,
        username:"Naruto",
        feedimage:"https://mms.businesswire.com/media/20130820005803/en/379599/5/Hello_Everywhere_Film_Poster.jpg",
        profile_photo:"https://media.istockphoto.com/id/1188980757/vector/young-man-anime-style-character.jpg?s=612x612&w=0&k=20&c=uOfXeG7GdMpLqEXPDNA8KbZgEZdIDk9JhvAfIE1_D9A=",
        likes:[
            "Doremon",
            "Hattori"
        ],
        comments:[
            {
            id:3,
            username:"Doremon",
            comment:"Nice Post",
            },
            {
                id:4,
                username:"Hattori",
                comment:"Feel the feed and kill the weed",

            }
        ]
        
    }
    ,{
        id:5,
        username:"Naruto",
        feedimage:"https://mms.businesswire.com/media/20130820005803/en/379599/5/Hello_Everywhere_Film_Poster.jpg",
        profile_photo:"https://media.istockphoto.com/id/1188980757/vector/young-man-anime-style-character.jpg?s=612x612&w=0&k=20&c=uOfXeG7GdMpLqEXPDNA8KbZgEZdIDk9JhvAfIE1_D9A=",
        likes:[
            "Doremon",
            "Hattori"
        ],
        comments:[
            {
            id:5,
            username:"Doremon",
            comment:"Nice Post",
            },
            {
                id:6,
                username:"Hattori",
                comment:"Feel the feed and kill the weed",

            }
        ]
        
    }
    ,{
        id:6,
        username:"Naruto",
        feedimage:"https://mms.businesswire.com/media/20130820005803/en/379599/5/Hello_Everywhere_Film_Poster.jpg",
        profile_photo:"https://media.istockphoto.com/id/1188980757/vector/young-man-anime-style-character.jpg?s=612x612&w=0&k=20&c=uOfXeG7GdMpLqEXPDNA8KbZgEZdIDk9JhvAfIE1_D9A=",
        likes:[
            "Doremon",
            "Hattori"
        ],
        comments:[
            {
            id:7,
            username:"Doremon",
            comment:"Nice Post",
            },
            {
                id:8,
                username:"Hattori",
                comment:"Feel the feed and kill the weed",

            }
            ,
            {
                id:8,
                username:"Hattori",
                comment:"Feel the feed and kill the weed",

            }
            ,
            {
                id:8,
                username:"Hattori",
                comment:"Feel the feed and kill the weed",

            }
            ,
            {
                id:8,
                username:"Hattori",
                comment:"Feel the feed and kill the weed",

            }
            ,
            {
                id:8,
                username:"Hattori",
                comment:"Feel the feed and kill the weed",

            }
            ,
            {
                id:8,
                username:"Hattori",
                comment:"Feel the feed and kill the weed",

            }
            ,
            {
                id:8,
                username:"Hattori",
                comment:"Feel the feed and kill the weed",

            }
            ,
            {
                id:8,
                username:"Hattori",
                comment:"Feel the feed and kill the weed",

            }
            ,
            {
                id:8,
                username:"Hattori",
                comment:"Feel the feed and kill the weed",

            }
            ,
            {
                id:8,
                username:"Hattori",
                comment:"Feel the feed and kill the weed",

            }
            ,
            {
                id:8,
                username:"Hattori",
                comment:"Feel the feed and kill the weed",

            }
            ,
            {
                id:8,
                username:"Hattori",
                comment:"Feel the feed and kill the weed",

            }
            ,
            {
                id:8,
                username:"Hattori",
                comment:"Feel the feed and kill the weed",

            }
            ,
            {
                id:8,
                username:"Hattori",
                comment:"Feel the feed and kill the weed",

            }
            ,
            {
                id:8,
                username:"Hattori",
                comment:"Feel the feed and kill the weed",

            }
            ,
            {
                id:8,
                username:"Hattori",
                comment:"Feel the feed and kill the weed",

            }
            ,
            {
                id:8,
                username:"Hattori",
                comment:"Feel the feed and kill the weed",

            }
            ,
            {
                id:8,
                username:"Hattori",
                comment:"Feel the feed and kill the weed",

            }
            ,
            {
                id:8,
                username:"Hattori",
                comment:"Feel the feed and kill the weed",

            }
            ,
            {
                id:8,
                username:"Hattori",
                comment:"Feel the feed and kill the weed",

            }
            ,
            {
                id:8,
                username:"Hattori",
                comment:"Feel the feed and kill the weed",

            }
            ,
            {
                id:8,
                username:"Hattori",
                comment:"Feel the feed and kill the weed",

            }
            ,
            {
                id:8,
                username:"Hattori",
                comment:"Feel the feed and kill the weed",

            }
            ,
            {
                id:8,
                username:"Hattori",
                comment:"Feel the feed and kill the weed",

            }
            ,
            {
                id:8,
                username:"Hattori",
                comment:"Feel the feed and kill the weed",

            }
            
        ]
        
    }
]
const users=[
    {
        username:"Yorishobu",
       
        profile_image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZWr4HVTvL9Mizj4dpW3qfR-oyFGpTXx6wXg&usqp=CAU"

    },
    {
        username:"Yorinabu",
       
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabu",

        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabus",
       
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabusa",
       
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabusaa",
        
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabusaaa",
        
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabusaaaa",
      
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabusaaaaa",
        
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabusaaaaaaaa",
  
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabusaaaaaaaaaa",
    
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabusaaaaaaaaaaaa",
       
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabusaaaaaaaaaaaaaa",
        
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabusaaaaaaaaaaaaaaaa",
    
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabusaaaaaaaaaaaaaaaaaa",
        
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabusaaaaaaaaaaaaaaaaaaaaaa",
       
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabusaaaaaaaaaaaaaaaaaaaaaaaaa",
        
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabusasdsd",
        
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabufds",
       
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabudsawaw",
       
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabuwas",
       
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    }



]


const HomeScreen=()=>{
   const [userdata,setUserdata]=useState(null)
   useEffect(()=>{
    AsyncStorage.getItem("user").then(data=>{
        setUserdata(JSON.parse(data))
    }).catch(err=>alert(err))
   },[])
    console.log("userdata",userdata)
    return(
<View style={{backgroundColor:"#fff",flex:1}}>
<View style={{width:"100%"}}>
            {datas.length<1?<ActivityIndicator size={"large"} color={"#2FBBF0"}/>:
            <FlatList data={datas} renderItem={({item,index})=>(<FeedItems username={item.username} profile_photo={item.profile_photo} feedimage={item.feedimage} likes={item.likes} comments={item.comments} key={item.id}/>)}
            keyExtractor={(item,index)=>{return item.id.toFixed()}}
            showsVerticalScrollIndicator={false}
            />
            }
        </View>

</View>
    )
}
const SearchScreen=()=>{
    const[searchInput,setSearchInput]=useState("")
    const [filteredData, setFilteredData] = useState([]);
    const filterData = (searchInput, users) => {
        if(searchInput==""){
            return null
        }
        else{
        return users.filter(item => {
          return item.username.toLowerCase().includes(searchInput.toLowerCase())
        });
    }
      };
      useFocusEffect(
        useCallback(() => {
          setSearchInput("");
        }, [])
      );
    useEffect(() => {
        setFilteredData(filterData(searchInput, users))
      }, [searchInput]);
    return (
<View style={{backgroundColor:"#fff",flex:1}}>
    <View style={{alignItems:"center"}}><TextInput value={searchInput} onChangeText={(text)=>setSearchInput(text)} placeholder={"Search Users"} placeholderTextColor={"#000"} style={{width:"95%",height:39,backgroundColor:"#F0F0F0",borderRadius:20,paddingLeft:15,marginTop:20}}/></View>
    <View style={{marginTop:10,paddingBottom:60}}>
<FlatList
        data={filteredData}
       renderItem={({item})=><UserItem username={item.username} profile_image={item.profile_image} key={item.username}/>}
       showsVerticalScrollIndicator={false}
       />
    
</View>
</View>
    )
}
const AccountScreen=()=>{
    const width=Dimensions.get("window").width
    const navigation=useNavigation()
    const [userdata, setUserdata] = React.useState(null)
    useEffect(() => {
        AsyncStorage.getItem('user')
            .then(async (value) => {
                fetch('http://10.0.2.2:3000/userdata', {
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
                        }
                        else {
                            alert('Login Again')
                            navigation.navigate('Login')
                        }
                    })
                    .catch(err => {
                        navigation.navigate('Login')
                    })
            })
            .catch(err => {
                navigation.navigate('Login')
            })
    }, [])

    console.log('userdata ', userdata)

    return(
        <View style={{backgroundColor:"#fff",flex:1}}>
            {userdata?
            <ScrollView showsVerticalScrollIndicator={false}>
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
                {userdata.posts.length>0?
                <View style={{marginTop:32,alignItems:"center"}}>
                <Text style={{fontWeight:"200",fontSize:20,textAlign:"center",marginBottom:20}}>Your Posts</Text>
                <View style={{flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}}>
                    <Image source={
                        {
                            uri:"https://occ-0-395-1007.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABYxJFBDckfZw1YUEIPwyuIg43Kw_HUBLvnCcgdOlvvf5Nc90SF3HSAi5L8uLyBqjziKBY-kGD2wu2JAqVsdHVR0frb6qG26I_U5v.jpg?r=77f"
                        }
                    } style={{height:120,width:"30%",margin:5}}/>
                    
                </View>
                </View>:<View style={{marginTop:32,alignItems:"center"}}>
                <Text style={{fontWeight:"200",fontSize:20,textAlign:"center",marginBottom:20}}>You have not posted anything</Text>
                </View>
}
            </ScrollView>:<ActivityIndicator color={"#267FFF"} size={"large"}/>
}


        </View>
            )
}
const FavouritesScreen=()=>{
    return(
        <View style={{backgroundColor:"#fff",height:"100%"}}></View>
            )
}
const Tab=createBottomTabNavigator()
const TabNavigator=()=>{

    return (
            <Tab.Navigator initialRouteName="Home"
            
            screenOptions={
                {
                    tabBarShowLabel:false,
                    style:{
                        backgroundColor:"white",
                        position:"absolute",
                        bottom:30,
                        marginHorizontal:20,
                        height:60,
                        borderRadius:10,
                        shadowColor:"#000",
                        shadowOpacity:0.06,
                        shadowOffset:{
                            width:10,
                            height:10
                        }
                    }
                }
            }>
                {

                }
                <Tab.Screen name={"Home"} component={HomeScreen}
                options={
                    
                    {
                    headerTitle:HomeHeader,
                    tabBarIcon:({focused})=>(
                        <View style={{
                           alignItems:"center"
                        }}>
                            <FontAwesome5 name="home" size={20} color={focused?"#267FFF":"gray"}/>
                            </View>
                    )
                }
            }
                />
                <Tab.Screen name={"Search"} component={SearchScreen}
                options={{
                    headerTitle:TabHeader,
                    tabBarIcon:({focused})=>(
                        <View style={{
                           alignItems:"center"
                        }}>
                            <FontAwesome5 name="search" size={20} color={focused?"#267FFF":"gray"}/>
                            </View>
                    )
                }}/>
                <Tab.Screen name={"Favourites"} component={FavouritesScreen}
                options={{
                    headerTitle:TabHeader,
                    tabBarIcon:({focused})=>(
                        <View style={{
                           alignItems:"center"
                        }}>
                            <Ionicons name="ios-notifications" size={20} color={focused?"#267FFF":"gray"} />
                            </View>
                    )
                }}/>
                <Tab.Screen name={"Account"} component={AccountScreen}
                options={{
                    headerTitle:AccountHeader,
                    tabBarIcon:({focused})=>(
                        <View style={{
                           alignItems:"center"
                        }}>
                            <FontAwesome5 name="user-alt" size={20} color={focused?"#267FFF":"gray"} />
                            </View>
                    )
                }}/>

            </Tab.Navigator>
    )
}
export default TabNavigator
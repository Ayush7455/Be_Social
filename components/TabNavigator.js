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
import HomeScreen from "../screens/TabNavigatorScreens/HomeScreen";
import SearchScreen from "../screens/TabNavigatorScreens/SearchScreen";
import NotificationScreen from "../screens/TabNavigatorScreens/NotificationScreen";
import AccountScreen from "../screens/TabNavigatorScreens/AccountScreen";

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


const Tab=createBottomTabNavigator()
const TabNavigator=()=>{

    return (
            <Tab.Navigator 
            
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
            }
            initialRouteName="Home"
            >
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
                <Tab.Screen name={"Notification"} component={NotificationScreen}
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
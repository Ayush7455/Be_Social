import React, { useCallback, useEffect, useState } from "react";
import {View,FlatList,TextInput, ActivityIndicator,Text,ScrollView, SafeAreaView, StatusBar} from "react-native";
import UserItem from "../../components/UserItem";
import { useFocusEffect } from '@react-navigation/native';
import BottomNavBar from "../../components/BottomNavBar";

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
const SearchScreen=()=>{
    const[searchInput,setSearchInput]=useState("")
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
    const getallusers = async () => {
        if (searchInput.length > 0) {
            setLoading(true)
            fetch('https://kind-erin-shrimp-vest.cyclic.app/searchuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ keyword: searchInput })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.error) {
                        setData([])
                        setError(data.error)
                        setLoading(false)
                    }
                    else if (data.message == 'User Found') {
                        setError(null)
                        setData(data.user)
                        setLoading(false)
                    }
                })
                .catch(err => {
                    setData([])
                    setLoading(false)
                })
        }
        else {
            setData([])
            setError(null)
        }
    }
    getallusers()

}, [searchInput])

      useFocusEffect(
        useCallback(() => {
          setSearchInput("");
        }, [])
      );
    return (
        <>
        <StatusBar
        
        backgroundColor={"white"}
        barStyle={"dark-content"}
        />
<SafeAreaView style={{backgroundColor:"#fff",flex:1}}>
    <View style={{alignItems:"center"}}><TextInput value={searchInput} onChangeText={(text)=>setSearchInput(text)} placeholder={"Search Users"} placeholderTextColor={"#000"} style={{width:"95%",height:39,backgroundColor:"#F0F0F0",borderRadius:20,paddingLeft:15,marginTop:20}}/></View>
    {loading?<ActivityIndicator style={{marginTop:10}} color={"#267FFF"}/>:
    <>
    {error?<Text style={{textAlign:"center",marginTop:10}}>{error}</Text>:
    <View style={{marginTop:10,paddingBottom:60}}>
<FlatList
        data={data}
       renderItem={({item})=><UserItem user={item}/>}
       showsVerticalScrollIndicator={false}
       />
      
    
</View>
    }
    </>
    
}
 <BottomNavBar page={"SearchScreen"}/>
</SafeAreaView>
</>
    )
}
export default SearchScreen
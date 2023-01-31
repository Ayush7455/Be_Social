import React, { useEffect,useState } from "react";
import {View,FlatList,ActivityIndicator,AsyncStorage, SafeAreaView, StatusBar} from "react-native";
import BottomNavBar from "../../components/BottomNavBar";
import FeedItems from "../../components/FeedItems";
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

    const [posts, setPosts] = useState([]);
      useEffect(() => {
        fetch('http://10.0.2.2:3000/getposts')
          .then(res => res.json())
          .then(data => setPosts(data))
          .catch(error => console.error(error));
      }, [posts]);
    
     return(
        <>
        <StatusBar
        backgroundColor={"white"}
        barStyle={"dark-content"}
        />
 <SafeAreaView  style={{backgroundColor:"#fff",flex:1,paddingBottom:25}}>
 <View style={{width:"100%"}}>
             {datas.length<1?<ActivityIndicator size={"large"} color={"#2FBBF0"}/>:
             <FlatList data={posts} renderItem={({item,index})=>(<FeedItems username={item.username} profile_photo={item.profilepic} feeditem={item.post} comments={item.comments} postdescription={item.postdescription} likes={item.likes} key={item._id} />)}
             
             showsVerticalScrollIndicator={false}
             />
             }
         </View>
         <BottomNavBar page={"HomeScreen"}/>
 
 </SafeAreaView>
 </>
     )
 }
 export default HomeScreen
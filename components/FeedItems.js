import React, { useState ,useEffect} from "react";
import {Text,View,ActivityIndicator, FlatList, Image, TouchableOpacity,Modal} from "react-native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Cross from "../assets/images/x.png";
import Comments from "./Comments";
import nopic from "../assets/images/noimg.png";
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
const ModalPopup=({children,visible})=>{
    const [showModal,setShowModal]=useState(visible)
    useEffect(()=>{
      ToggleModal()
    },[visible])
    const ToggleModal=()=>{
      if(visible){
        setShowModal(true)
      }
      else{
        setShowModal(false)
      }
    }
    return(
      <Modal transparent visible={showModal}>
        <View style={{flex:1,backgroundColor:"rgba(0,0,0,0.5)",justifyContent:"center",alignItems:"center"}}>
        <View style={{width:"80%",maxHeight:"60%",backgroundColor:"white",paddingHorizontal:20,paddingVertical:30,borderRadius:20,elevation:20,flex:1}}>
        {children}
        </View>
        </View>
      </Modal>
    )
  }
  
const FeedItems=({
    username,
    profile_photo, 
    postdescription,
    feeditem,
    comments,
    likes

})=>{
        const[liked,setLiked]=useState(false)
        const [commentsSelected,setcommentsSelected]=useState(false)
        const [visible,setVisible]=useState(false)

    return (
             
            
                <View style={{width:"100%",alignItems:"center",marginTop:20,borderBottomColor:"#F8F8F8",borderBottomWidth:2,paddingBottom:10}}>
                    <View style={{width:"90%",display:"flex",justifyContent:"space-between",flexDirection:"row",
                alignItems:"center"}}>
                    <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                      {profile_photo?
                        <Image style={{backgroundColor:"rgba(0,0,0,0.06)",width:50,height:50,borderRadius:50}} source={{uri:profile_photo}}/>:
                        <Image style={{backgroundColor:"rgba(0,0,0,0.06)",width:50,height:50,borderRadius:50}} source={nopic}/>
                      }
                        
                        <View style={{marginLeft:15}}>
                        <Text style={{fontSize:16,fontWeight:"bold"}}>{username}</Text>
                        </View>
                        </View>
                    <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                        <Text style={{marginRight:10}}>Comments</Text>
                        {commentsSelected?
                        <View>
                        <Ionicons name="chatbox" size={24} color="#267FFF" onPress={()=>setVisible(true)}/>
                        </View>:<View>
                        <Ionicons name="chatbox-outline" size={24}  color="#267FFF" onPress={()=>{setVisible(true),setcommentsSelected(true)}}/>
                        </View>
                        }
                        </View>
                    </View>
                    <Image
                    style={{width:"90%",height:200,
                backgroundColor:"rgba(0,0,0,0.06",marginTop:20,borderRadius:10}}
                    source={{
                        uri:feeditem
                    }}
                    />
                    {
                      postdescription&&<View style={{alignSelf:"flex-start",marginLeft:25,marginTop:10}}>
                      <Text style={{color:"#267FFF"}}>{postdescription}</Text>
                      </View>
                    }
                   {liked? <View style={{marginVertical:15,marginLeft:25,flexDirection:"row",alignSelf:"flex-start",alignItems:"center"}}>
                
                        <AntDesign name="like1" size={24} color="#267FFF" onPress={()=>{setLiked(false)}}/>
        
                        <Text style={{marginLeft:5,color:"#267FFF"}}> {likes.length+1}</Text>
                        </View>: <View style={{marginVertical:15,marginLeft:25,flexDirection:"row",alignSelf:"flex-start",alignItems:"center"}}>
                     
                        <AntDesign name="like2" size={24} color="#267FFF" onPress={()=>setLiked(true)}/>
                       
                        <Text style={{marginLeft:5,color:"#267FFF"}}>{likes.length}</Text>
                        </View>
                   
                   }
                   <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <ModalPopup visible={visible}>
              <View style={{alignItems:"center"}}>
                
                <View style={{width:"100%",height:40,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                <Text style={{fontSize:20,fontWeight:"bold"}}>Comments</Text>
                  <TouchableOpacity onPress={()=>{setVisible(false),setcommentsSelected(false)}}>
                  <Image source={Cross} style={{width:30,height:30}}/>
                  </TouchableOpacity>
                  </View>
                {/* <Text style={{marginVertical:30,fontSize:20,textAlign:"center",fontSize:20,fontWeight:"bold"}}>Comments</Text> */}
              </View>
              <View style={{padding:10}}>
                   
              <FlatList data={comments} renderItem={({item,index})=>(<Comments username={item.username} content={item.comment} key={item.id}/>)}
            showsVerticalScrollIndicator={false}/>
              </View>
            </ModalPopup>
          </View>
               
                    
                </View>


    )
}
export default FeedItems
import React, { useEffect, useState } from "react";
import {FlatList, Text,TextInput,View} from "react-native";
import ChatComponent from "../components/ChatComponent";
const chats=[
    {
        username:"Yorishobu",
        lastmessage:"hello",
        time:"12:00",
        profile_image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZWr4HVTvL9Mizj4dpW3qfR-oyFGpTXx6wXg&usqp=CAU"

    },
    {
        username:"Yorinabu",
        lastmessage:"When did you came back from USA to Tokyo",
        time:"1:00",
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabu",
        lastmessage:"When did you came back from USA to Tokyo",
        time:"1:00",
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabus",
        lastmessage:"When did you came back from USA to Tokyo",
        time:"1:00",
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabusa",
        lastmessage:"When did you came back from USA to Tokyo",
        time:"1:00",
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabusaa",
        lastmessage:"When did you came back from USA to Tokyo",
        time:"1:00",
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabusaaa",
        lastmessage:"When did you came back from USA to Tokyo",
        time:"1:00",
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabusaaaa",
        lastmessage:"When did you came back from USA to Tokyo",
        time:"1:00",
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabusaaaaa",
        lastmessage:"When did you came back from USA to Tokyo",
        time:"1:00",
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabusaaaaaaaa",
        lastmessage:"When did you came back from USA to Tokyo",
        time:"1:00",
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabusaaaaaaaaaa",
        lastmessage:"When did you came back from USA to Tokyo",
        time:"1:00",
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabusaaaaaaaaaaaa",
        lastmessage:"When did you came back from USA to Tokyo",
        time:"1:00",
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabusaaaaaaaaaaaaaa",
        lastmessage:"When did you came back from USA to Tokyo",
        time:"1:00",
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabusaaaaaaaaaaaaaaaa",
        lastmessage:"When did you came back from USA to Tokyo",
        time:"1:00",
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabusaaaaaaaaaaaaaaaaaa",
        lastmessage:"When did you came back from USA to Tokyo",
        time:"1:00",
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabusaaaaaaaaaaaaaaaaaaaaaa",
        lastmessage:"When did you came back from USA to Tokyo",
        time:"1:00",
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabusaaaaaaaaaaaaaaaaaaaaaaaaa",
        lastmessage:"When did you came back from USA to Tokyo",
        time:"1:00",
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabusasdsd",
        lastmessage:"When did you came back from USA to Tokyo",
        time:"1:00",
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabufds",
        lastmessage:"When did you came back from USA to Tokyo",
        time:"1:00",
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabudsawaw",
        lastmessage:"When did you came back from USA to Tokyo",
        time:"1:00",
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    },
    {
        username:"Yorinabuwas",
        lastmessage:"When did you came back from USA to Tokyo",
        time:"1:00",
        profile_image:"https://pyxis.nymag.com/v1/imgs/df1/bdf/5c012eec9eef195ccdc36e79fc1da9e344-anime-lede.rsquare.w700.jpg"

    }



]

const ChatScreen=()=>{
    const[searchInput,setSearchInput]=useState("")
    const [filteredData, setFilteredData] = useState(chats);
    const filterData = (searchInput, chats) => {
        return chats.filter(item => {
          return item.username.toLowerCase().includes(searchInput.toLowerCase())||item.lastmessage.toLowerCase().includes(searchInput.toLowerCase());
        });
      };
    useEffect(() => {
        setFilteredData(filterData(searchInput, chats))
      }, [searchInput]);
    return (
<View style={{backgroundColor:"#fff",flex:1}}>
    <View style={{alignItems:"center"}}><TextInput value={searchInput} onChangeText={(text)=>setSearchInput(text)} placeholder={"Search Users"} placeholderTextColor={"#000"} style={{width:"95%",height:39,backgroundColor:"#F0F0F0",borderRadius:20,paddingLeft:15,marginTop:20}}/></View>
    <View style={{marginTop:10,paddingBottom:60}}>
<FlatList
        data={filteredData}
       renderItem={({item})=><ChatComponent username={item.username} lastmessage={item.lastmessage} time={item.time} profile_image={item.profile_image} key={item.username}/>}
       showsVerticalScrollIndicator={false}
       />
    
</View>
</View>
        
    )
}
export default ChatScreen
import { View, Text, Image, TouchableOpacity } from "react-native"
import { FontAwesome6 } from "@expo/vector-icons"
import { useState } from "react"
type PostProps = {
  username: string,
  caption: string,
  image?: string,
  profile?: string
}


export default function Post({ username, caption, image, profile }: PostProps) {

  const [like, setLike] = useState(0)
 




  return (
    <View style={{ backgroundColor: "pink", padding: 15, borderRadius: 8, marginHorizontal: 15 }}>
      <View style={{ flexDirection: "row" }}>
          <Image source={{uri: profile}} style={{borderRadius: 50, width: 40, height: 40}}/>

          <Text style={{fontSize: 18, fontWeight:"600" , padding: 5}}>panittha_</Text>

       
      </View>


      <Text>{caption}</Text>
      {
        image && <Image source={{ uri: image }} style={{ width: "100%", height: 200 }} />
      }


      <View style={{flexDirection: "row" , marginTop:15}}>
      <TouchableOpacity onPress={() => setLike(like + 1)}>
        <FontAwesome6 name="heart" size={22} color="red" />
      </TouchableOpacity>
      <Text>{like}</Text>
      <TouchableOpacity style={{marginLeft:15}}>
        <FontAwesome6 name="comment"  size={22} color="comment-captions"/>
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft:15}}>
        <FontAwesome6 name="share" size={22} color="black"   />
      </TouchableOpacity>
      </View>
้
    </View>
  )
}
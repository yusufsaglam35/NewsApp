import React from "react";
import {View,Text,Image,StyleSheet,Dimensions } from 'react-native'



const newsApp =  props => {
return(

    <View style={styles.container}>

        <Image style={styles.image} source ={{uri: props.news.imageUrl}}/>
        <Text style={styles.title} >{props.news.title}</Text>
        <Text style={styles.description} >{props.news.description}</Text>
        <Text style={styles.author} >{props.news.author}</Text>


    </View>

)
}
export default newsApp;
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"white",
      margin:10,
      borderRadius:10,
    },
    image:{
        height: Dimensions.get('window').height/4,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    title:{
        fontWeight:"bold",
        fontSize:18,
    },
    description:{
        marginTop:5,
    },
    author:{
        fontStyle:'italic',
        textAlign:"right",
    }
})

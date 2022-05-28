import { Text, StyleSheet, View, FlatList,ScrollView,Image,Dimensions } from 'react-native'
import React, { Component } from 'react'
import news_data from "./news_data.json"
import News_card from './components/NewsCards'
import Banner_data from "./news_banner_data.json"

const App =() => {

  const Renderİtems = ({item}) =>  <News_card  news = {item} />; 
     return (
      <View style = {styles.container}>

        <Text style={styles.news_text}>NEWS</Text>
        <FlatList
  
        ListHeaderComponent={()=>         
          <ScrollView horizontal showsHorizontalScrollIndicator ={false}>
          {
            Banner_data.map(banner_news => ( <Image style={styles.banner_image} source={{uri: banner_news.imageUrl}}/>))
          }
          
          </ScrollView> } 
        data={news_data}
        renderItem= {Renderİtems}
        />
  
      </View>
    )
}

export default App;
const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:"#eceff1"
},
banner_image:{
  height: Dimensions.get('window').height/4,
  width: Dimensions.get('window').width/2,
},
news_text:{
  fontWeight:'bold',
  fontSize:50,
  color:"black",
  textAlign:'center'
}

})
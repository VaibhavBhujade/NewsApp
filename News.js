import React from 'react';
import { StyleSheet,Text, Image, View,SafeAreaView, FlatList, ActivityIndicator} from 'react-native';
import { Header, Icon } from 'react-native-elements'
import { BarIndicator } from 'react-native-indicators'
import NewsCard from './components/Card'
import HeaderSection from './components/Header'


const request = require('request');
const net = require('net');
const tls = require('tls');

const emotion_color={"Bored":"#FFFAEC","Angry":"#D5A6E6", "Sad":"#ACACAC",
"Fear":"#F5AE92","Happy":"#FFA4B6","Excited":"#FF8B3D"}

export default class News extends React.Component {
 
    constructor(props){
        super(props);
        this.state = {
          isLoading: true,
          data: [],
          searchQuery: "",
          isRefreshing: false,
        }

        this.fetchNews = this.fetchNews.bind(this)
        this.setId = this.setId.bind(this)
        this.getSearchQuery = this.getSearchQuery.bind(this)
        this._refresh = this._refresh.bind(this)
        this.fetchEmotion = this.fetchEmotion.bind(this)
    }

    componentDidMount() {
      console.log("Fetching news....")
      this.fetchNews()
      console.log('Fetching complete....')
    }

    async fetchEmotion(text) {
      console.log("******************** Fetch Emotion:  ********************")
      var emotion="";
      console.log(text);
      var api_key='vBIZIfZVhBprS6QctIdzVDvqNz9p3yPLBiMxpdZXv9E' 
      const res = await fetch('https://apis.paralleldots.com/v3/emotion?text='+text+'&'                       +'api_key='+api_key, {
      method: 'POST'
      }).then((response) => response.json())
      .then((json) => { 
              this.setState({
              isLoading: false,
              isRefreshing: false
              }) 
              emotion = json.emotion
              console.log(emotion_color[emotion]) })
      .catch((error) => console.error(error))

      console.log("Emotion"+ emotion)
      //console.log()
      
      return await emotion_color[emotion];
    }

    fetchNews(query = "") {
      console.log("******************** Fetch Query: " + query + " ********************")
      var squery = 'q=' + query + '&'
      var head = 'https://newsapi.org/v2/top-headlines?'
      var end = 'country=in&' +
          'language=en&' +
          'sortBy=popularity&' +
          'pageSize=10&' +
          'apiKey=37cd3cdf5dfa4cad8b5c6dc29a2b9e39';

      
      var url = query === "" ? (head+end) : (head+squery+end)
      var req = new Request(url)

      fetch(req)
        .then(res => res.json())
        .then(json => {
            
            this.setState({
              isLoading: false,
              isRefreshing: false,
              searchQuery: query,
              data: this.setId(json.articles)
            })
            
            console.log(json.articles[0])
        })
        .catch(error => {
          console.log(error)
        })
    }

    setId(arr) {
      console.log(arr)
      const obj = []
      this.setState({
              isLoading: false,
              isRefreshing: false,
      })
      for (let index = 0; index < arr.length; index++) {
        obj[index] = { ...arr[index], id: index, bgcolor: this.fetchEmotion(JSON.stringify(arr[index].title + arr[index].description)) }
        console.log("tetx:"+ JSON.stringify(arr[index].description) )
        
      }
      return obj
    }

    getSearchQuery(text) {
      console.log("******************** Search Query: " + text + " ********************")
      this.setState({ searchQuery: text, isLoading: true })
      this.fetchNews()
    }

    _refresh(query) {
      this.setState({ isRefreshing: true, isLoading: true})
      this.fetchNews(query)
    }

    render() {

      return (
        <SafeAreaView style={styles.container}>
          <HeaderSection  getSearchText={this.fetchNews} />
          <View style={{ flex: 1, flexDirection: 'row' , alignItems: 'center', justifyContent: 'center' }}>
              { this.state.isLoading ? 
                <BarIndicator size={50} color='#F97F51' count={5} /> :
                <FlatList
                  data={this.state.data}
                  renderItem={({ item }) => (
                    <NewsCard  article={item} bgcolor={"#ccc"} />
                  )}
                  contentContainerStyle={{ paddingBottom: 20 }}
                  keyExtractor={(item) => item.id.toString()}
                  onRefresh={() => this._refresh(this.state.searchQuery)}
                  refreshing={this.state.isRefreshing}
              />
              }
          </View>
         
        </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#2C3A47',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

// #34495e
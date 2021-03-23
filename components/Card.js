import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Linking, Clipboard, ToastAndroid, Dimensions, TouchableOpacity } from 'react-native';
import { Card, Text, ListItem, Divider , Button, Icon } from 'react-native-elements';
import * as Speech from 'expo-speech';
import { Ionicons } from '@expo/vector-icons';
const width = Dimensions.get("screen")

export default function NewsCard({ article, bgcolor }) {

    const [dark, setDark] = useState(false)
    const [expand, setExpand] = useState(false)

    const copyText = () => {
        Clipboard.setString(article.url)
        ToastAndroid.show("Link Copied", ToastAndroid.SHORT)
      }

    const toogleDark = () => {
        setDark(!dark)
        console.log("***************** Dark Mode : " + dark)
    }

    const toggleExpand = () => {
        setExpand(!expand)
        console.log("*************** Expand clicked : " + expand )
    }

    const speak = () => {
        const thingToSay = article.title + article.description;
        Speech.speak(thingToSay);
    }
    
     
    return(
        <Card
            title={"Source : " + article.source.name}
            titleStyle={[{ color: "#341677"  , margin: 0 }, (dark ? (styles.darkTitle): null )]}
            image={{ uri: article.urlToImage }} 
            containerStyle={[{ margin: 8, backgroundColor: article.bgcolor._W, borderWidth: 0, elevation: 2 }, ( dark ? (styles.darkBackground) : null )]}
            imageStyle={styles.image}
            borderRadius={10}
            >    
            <Text selectable style={[{ paddingBottom: 10 ,color: '#333', fontSize: 18,  }, ( dark ? (styles.darkText) : null )]}>
                {article.title}
            </Text>

            { expand ? (
                <Text selectable numberOfLines={10} style={[{ marginLeft: 5, borderTopWidth: 0, paddingLeft: 10, borderLeftWidth: 4, borderLeftColor: "#333", fontSize: 14, }, (dark ? (styles.darkDetail) : null ) ]} >
                    {article.description}
                </Text>
                ) : null
            }


            
            <Button 
                title="Read More"
                titleStyle={{ paddingRight: 10 }}
                type='clear' 
                size={10} 
                icon={ <Ionicons name='md-download' size={15} color='#1B9CFC' /> }
                iconRight={true}
                onPress={toggleExpand} />

            <Divider style={[{ backgroundColor: 'blue' }, ( dark ? (styles.darkDivider) : null  )]} />


            <View style={styles.icons} >
                <TouchableOpacity onPress={copyText}>
                    <Ionicons raised name='md-copy' size={30}  color="#1B9CFC"  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { Linking.openURL(article.url) }} >
                    <Ionicons raised name='md-link' size={30} color='#FD7272'  />
                </TouchableOpacity>
                <TouchableOpacity onPress={speak}>
                    <Ionicons raised name='md-volume-high' size={30} color='#55E6C1' />
                </TouchableOpacity>
                <TouchableOpacity onPress={toogleDark}>
                    <Ionicons raised name='md-color-palette' size={30} color='#2C3A47' />
                </TouchableOpacity>
            </View>
        </Card>
    )
}
//`${dark} ? "#ff6363" : "#333"`
//`${dark} ? "#341677" : "#182C61" ` 
//`${dark} ? '#000272' : '#f1f2f6' `

const styles = StyleSheet.create({
    darkBackground: {
        backgroundColor: "#232931",
    },
    darkTitle: {
        color: "#12cad6"
    },
    darkText: {
        color: '#fff'
    },
    darkDetail: {
        color: '#fff',
        borderLeftColor: '#ee4540',        
    },
    darkDivider: {
        backgroundColor: "#12cad6"
    },
    icons: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 5,
        justifyContent: 'space-evenly'
    },
    image: {
        borderRadius: 10,
    }
})
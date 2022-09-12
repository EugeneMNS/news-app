import {StatusBar} from 'expo-status-bar';
import {Text, View, Alert} from 'react-native';
import {Post} from "./components/Post";
import React from "react";
import axios from "axios";


export default function App() {
    const [items, setItems] = React.useState();

    React.useEffect(()=>{
        axios.get('https://5c3755177820ff0014d92711.mockapi.io/articles/')
            .then(({ data }) =>{
                setItems(data);
            })
            .catch(err => {
                console.log(err)
                Alert.alert('Error', 'Something went wrong')
                //alert('Error to fetch articles')
        })
    }, [])

    return (
        <View>
            {items.map((obj) => (
                <Post
                title={obj.title}
                createdAt={obj.createdAt}
                imageUrl={obj.imageUrl}
                />
            ))}
            <StatusBar style="auto" />
        </View>
    );
}

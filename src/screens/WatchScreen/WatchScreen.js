// src/screens/WatchScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './WatchScreen.styles';
import { GetMovies } from '../../services/Service';
import { imgaeUrl } from '../../services/Apis';

const WatchScreen = ({ navigation }) => {
    let [data, setData] = useState([])

    useEffect(() => {
        GetMoviesList()
    }, [])

    const GetMoviesList = async () => {
        let movies = await GetMovies()
        setData(movies?.results)
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('MovieDetail', { id: item?.id })}>
            <Image source={{ uri: `${imgaeUrl}${item.poster_path}` }} style={styles.movieImage} />
            <Text style={styles.movieTitle}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <TextInput placeholder="Search" style={styles.searchInput} />
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};


export default WatchScreen;

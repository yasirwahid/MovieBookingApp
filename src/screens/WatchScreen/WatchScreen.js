// src/screens/WatchScreen.js
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './WatchScreen.styles';
import {GetMovies} from '../../services/Service';
import MovieItem from '../../components/MovieItem';
import {Images} from '../../assets';

const WatchScreen = ({navigation}) => {
  let [data, setData] = useState([]);

  useEffect(() => {
    GetMoviesList();
  }, []);

  const GetMoviesList = async () => {
    let movies = await GetMovies();
    setData(movies?.results);
  };

  const renderItem = ({item}) => (
    <MovieItem item={item} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Watch</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation?.navigate('SearchScreen')}>
          <Image source={Images.search} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default WatchScreen;

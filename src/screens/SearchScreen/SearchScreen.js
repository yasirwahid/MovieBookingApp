import React, {useEffect, useState} from 'react';
import {View, TextInput, FlatList} from 'react-native';
import styles from './SearchScreen.styles';
import {SearchMovie} from '../../services/Service';
import SearchItem from '../../components/SearchItem';

const SearchScreen = ({navigation}) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async text => {
    let response = await SearchMovie(text);
    setMovies(response.results);
  };

  useEffect(() => {
    searchMovies('A');
  }, []);

  const renderMovieItem = ({item}) => (
    <SearchItem item={item} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="TV shows, movies and more"
        style={styles.searchInput}
        value={query}
        onChangeText={text => {
          searchMovies(text);
          setQuery(text);
        }}
        onSubmitEditing={searchMovies}
      />
      <FlatList
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

export default SearchScreen;

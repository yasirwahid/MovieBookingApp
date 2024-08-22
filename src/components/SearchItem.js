//import liraries
import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  View,
} from 'react-native';
import {imgaeUrl} from '../services/Apis';

// create a component
const SearchItem = ({item, navigation}) => {
  let [loading, setLoading] = useState(true);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('MovieDetail', {id: item.id})}
      style={styles.movieContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: `${imgaeUrl}${item.poster_path}`}}
          style={styles.movieImage}
          onLoadEnd={() => setLoading(false)}
        />
        {loading ? (
          <ActivityIndicator
            size={'small'}
            color={'$000'}
            style={styles.loading}
          />
        ) : null}
      </View>
      <Text style={styles.movieTitle}>{item.title}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  movieContainer: {
    flex: 1,
    marginBottom: 16,
    alignItems: 'center',
  },
  movieImage: {
    width: 150,
    height: 225,
    borderRadius: 12,
  },
  movieTitle: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loading: {
    position: 'absolute',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default SearchItem;

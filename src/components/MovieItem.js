import React, { useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {imgaeUrl} from '../services/Apis';

const MovieItem = ({item, navigation}) => {
  let [loading, setLoading] = useState(true);
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('MovieDetail', {id: item?.id})}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: `${imgaeUrl}${item.poster_path}`}}
          style={styles.movieImage}
          onLoadEnd={() => setLoading(false)}
        />
        {loading ? <ActivityIndicator size={'small'} color={'$000'} /> : null}
      </View>
      <Text style={styles.movieTitle}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 10,
  },
  imaeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  movieTitle: {
    textAlign: 'center',
    marginTop: 8,
    fontSize: 22,
    fontWeight: 'bold',
    position: 'absolute',
    color: 'white',
    bottom: 10,
    left: 20,
  },
});

export default MovieItem;

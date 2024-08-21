import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import styles from './MovieDetailsScreen.styles';
import { GetMovieDetails } from '../../services/Service';
import { imgaeUrl } from '../../services/Apis';

const MovieDetailScreen = ({ route, navigation }) => {
  const { id } = route.params;
  let [data, setData] = useState(null)
  const colors = ["#15D2BC", "#E26CA5", "#564CA3", "#CD9D0F"]

  useEffect(() => {
    GetDetails()
  }, [])

  const GetDetails = async () => {
    let movieDetails = await GetMovieDetails(id)
    setData(movieDetails)
  }



  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View style={styles.posterContainer}>
          <Image source={{ uri: imgaeUrl + data?.poster_path }} style={styles.movieImage} />
          <View style={styles.imageOverlap}>
            <Text style={styles.movieTitle}>{data?.title}</Text>
            <Text style={styles.overview} numberOfLines={3}>
              {data?.tagline}
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TicketBooking')} activeOpacity={0.7}>
              <Text style={styles.btnText}>Get Tickets</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonBorder} onPress={() => navigation.navigate('TicketBooking')} activeOpacity={0.7}>
              <Text style={styles.btnText}>Watch Trailer</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <Text style={styles.heading}>Genres</Text>
          <View style={styles.genreContainer}>
            {data?.genres?.map((item, index) => {
              return (
                <View style={[styles.genre, { backgroundColor: colors[index] ? colors[index] : colors[0] }]}><Text style={styles.text}>{item?.name}</Text></View>
              )
            })}
          </View>
          <View style={styles.separator} />
          <Text style={styles.heading}>Overview</Text>
          <Text style={[styles.overview, { color: "#8F8F8F" }]}>{data?.overview}</Text>

        </View>
      </View>

    </ScrollView>
  );
};

export default MovieDetailScreen;

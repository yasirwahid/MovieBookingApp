import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  ActivityIndicator,
} from 'react-native';
import styles from './MovieDetailsScreen.styles';
import {GetMovieDetails, GetMovieVideos} from '../../services/Service';
import {imgaeUrl} from '../../services/Apis';
import YoutubePlayer from 'react-native-youtube-iframe';

const MovieDetailScreen = ({route, navigation}) => {
  const {id} = route.params;
  let [data, setData] = useState(null);
  let [videos, setVideos] = useState([]);
  let [isVisible, setIsVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  let [loading, setLoading] = useState(true);
  const colors = ['#15D2BC', '#E26CA5', '#564CA3', '#CD9D0F'];

  useEffect(() => {
    GetDetails();
    GetVideo();
  }, []);

  const GetDetails = async () => {
    let movieDetails = await GetMovieDetails(id);
    setData(movieDetails);
  };
  const GetVideo = async () => {
    let movieDetails = await GetMovieVideos(id);
    setVideos(movieDetails?.results);
  };

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      setIsVisible(false);
    }
  }, []);

  return (
    <>
      <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.container}>
          <View style={styles.posterContainer}>
            <View style={styles.loadingContainer}>
              <Image
                source={{uri: imgaeUrl + data?.poster_path}}
                style={styles.movieImage}
                onLoadEnd={() => setLoading(false)}
              />
              {loading ? (
                <ActivityIndicator size={'large'} color={'$000'} style={styles.loading}/>
              ) : null}
            </View>
            <View style={styles.imageOverlap}>
              <Text style={styles.movieTitle}>{data?.title}</Text>
              <Text style={styles.overview} numberOfLines={3}>
                {data?.tagline}
              </Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  navigation.navigate('TicketBooking', {movieDetails: data})
                }
                activeOpacity={0.7}>
                <Text style={styles.btnText}>Get Tickets</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonBorder}
                onPress={() => {
                  setIsVisible(true);
                  setPlaying(true);
                }}
                activeOpacity={0.7}>
                <Text style={styles.btnText}>Watch Trailer</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.body}>
            <Text style={styles.heading}>Genres</Text>
            <View style={styles.genreContainer}>
              {data?.genres?.map((item, index) => {
                return (
                  <View
                    style={[
                      styles.genre,
                      {
                        backgroundColor: colors[index]
                          ? colors[index]
                          : colors[0],
                      },
                    ]}>
                    <Text style={styles.text}>{item?.name}</Text>
                  </View>
                );
              })}
            </View>
            <View style={styles.separator} />
            <Text style={styles.heading}>Overview</Text>
            <Text style={[styles.overview, {color: '#8F8F8F'}]}>
              {data?.overview}
            </Text>
          </View>
        </View>
      </ScrollView>
      <Modal visible={isVisible}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => setIsVisible(false)}>
            <Text>Done</Text>
          </TouchableOpacity>
          <YoutubePlayer
            height={'100%'}
            play={true}
            videoId={videos.length ? videos[0].key : null}
            onChangeState={onStateChange}
            contentScale={1}
          />
        </View>
      </Modal>
    </>
  );
};

export default MovieDetailScreen;

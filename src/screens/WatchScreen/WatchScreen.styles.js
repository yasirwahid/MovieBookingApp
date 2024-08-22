import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20, // it will come from notch size
  },
  itemContainer: {
    marginBottom: 10,
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
  icon: {
    height: 30,
    width: 30,
  },
  title:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  }
});

export default styles;

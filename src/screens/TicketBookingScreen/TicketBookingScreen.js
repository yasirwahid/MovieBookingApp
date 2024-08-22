import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';

const seatTypes = {
  selected: '#F59E0B',
  notAvailable: '#D1D5DB',
  vip: '#4B5563',
  regular: '#60A5FA',
};

const Footer = ({totalPrice}) => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.priceContainer}>
        <Text style={styles.totalPrice}>Total Price: ${totalPrice}</Text>
      </View>
      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payButtonText}>Proceed to pay</Text>
      </TouchableOpacity>
    </View>
  );
};

const SeatInfo = () => {
  return (
    <View style={styles.seatInfoContainer}>
      <View style={styles.seatInsideInfoContainer}>
        <View style={styles.legend}>
          <View
            style={[styles.legendItem, {backgroundColor: seatTypes.selected}]}
          />
          <Text style={styles.legendLabel}>Selected</Text>
        </View>
        <View style={styles.legend}>
          <View style={[styles.legendItem, {backgroundColor: seatTypes.vip}]} />
          <Text style={styles.legendLabel}>VIP (150$)</Text>
        </View>
      </View>
      <View style={styles.seatInsideInfoContainer}>
        <View style={styles.legend}>
          <View
            style={[styles.legendItem, {backgroundColor: seatTypes.regular}]}
          />
          <Text style={styles.legendLabel}>Regular (50$)</Text>
        </View>
        <View style={styles.legend}>
          <View
            style={[
              styles.legendItem,
              {backgroundColor: seatTypes.notAvailable},
            ]}
          />
          <Text style={styles.legendLabel}>Not Available</Text>
        </View>
      </View>
    </View>
  );
};

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seats = [
    [
      'notAvailable',
      'notAvailable',
      'notAvailable',
      'notAvailable',
      'notAvailable',
      'notAvailable',
      'notAvailable',
      'regular',
      'notAvailable',
    ],
    [
      'notAvailable',
      'regular',
      'regular',
      'regular',
      'notAvailable',
      'notAvailable',
      'notAvailable',
      'regular',
      'regular',
    ],
    [
      'regular',
      'regular',
      'notAvailable',
      'notAvailable',
      'notAvailable',
      'regular',
      'regular',
      'regular',
      'regular',
    ],
    [
      'regular',
      'regular',
      'regular',
      'regular',
      'notAvailable',
      'notAvailable',
      'regular',
      'regular',
      'regular',
    ],
    [
      'notAvailable',
      'regular',
      'notAvailable',
      'notAvailable',
      'notAvailable',
      'regular',
      'regular',
      'regular',
      'regular',
    ],
    [
      'notAvailable',
      'regular',
      'regular',
      'regular',
      'regular',
      'regular',
      'regular',
      'regular',
      'regular',
    ],
    ['vip', 'vip', 'vip', 'vip', 'vip', 'vip', 'vip', 'vip', 'vip'],
  ];

  const seats1 = [
    ['notAvailable', 'regular'],
    ['notAvailable', 'regular', 'regular', 'regular'],
    ['notAvailable', 'regular', 'notAvailable', 'regular'],
    ['notAvailable', 'regular', 'regular', 'regular'],
    ['notAvailable', 'regular', 'regular', 'regular'],
    ['notAvailable', 'notAvailable', 'regular', 'notAvailable'],
    ['vip', 'vip', 'vip', 'vip'],
  ];

  const toggleSeatSelection = (row, seat) => {
    const seatId = `${row}-${seat}`;
    setSelectedSeats(prevSelected =>
      prevSelected.includes(seatId)
        ? prevSelected.filter(id => id !== seatId)
        : [...prevSelected, seatId],
    );
  };

  return (
    <View style={styles.seatGridContainer}>
      <ScrollView horizontal style={styles.scrollview}>
        <View>
          {seats1.map((row, rowIndex) => (
            <View
              style={{...styles.seatRow, justifyContent: 'flex-end'}}
              key={rowIndex}>
              {row.map((seat, seatIndex) => (
                <TouchableOpacity
                  key={seatIndex}
                  style={[
                    styles.seat,
                    {
                      backgroundColor: selectedSeats.includes(
                        `${rowIndex}-${seatIndex}`,
                      )
                        ? seatTypes.selected
                        : seatTypes[seat],
                    },
                  ]}
                  onPress={() => toggleSeatSelection(rowIndex, seatIndex)}
                  disabled={seat === 'notAvailable'}
                />
              ))}
            </View>
          ))}
        </View>
        <View style={styles.seatsContainer}>
          {seats.map((row, rowIndex) => (
            <View style={styles.seatRow} key={rowIndex}>
              {row.map((seat, seatIndex) => (
                <TouchableOpacity
                  key={seatIndex}
                  style={[
                    styles.seat,
                    {
                      backgroundColor: selectedSeats.includes(
                        `${rowIndex}-${seatIndex}`,
                      )
                        ? seatTypes.selected
                        : seatTypes[seat],
                    },
                  ]}
                  onPress={() => toggleSeatSelection(rowIndex, seatIndex)}
                  disabled={seat === 'notAvailable'}
                />
              ))}
            </View>
          ))}
        </View>
        <View>
          {seats1.map((row, rowIndex) => (
            <View style={styles.seatRow} key={rowIndex}>
              {row.map((seat, seatIndex) => (
                <TouchableOpacity
                  key={seatIndex}
                  style={[
                    styles.seat,
                    {
                      backgroundColor: selectedSeats.includes(
                        `${rowIndex}-${seatIndex}`,
                      )
                        ? seatTypes.selected
                        : seatTypes[seat],
                    },
                  ]}
                  onPress={() => toggleSeatSelection(rowIndex, seatIndex)}
                  disabled={seat === 'notAvailable'}
                />
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const MovieDetails = ({details}) => {
  return (
    <View style={styles.movieDetailsContainer}>
      <Text style={styles.movieTitle}>{details?.title}</Text>
      <Text style={styles.movieInfo}>{details?.tagline}</Text>
    </View>
  );
};

const TicketBookingScreen = ({route}) => {
  const [totalPrice, setTotalPrice] = useState(50);
  const details = route?.params?.movieDetails;

  return (
    <View style={styles.container}>
      <MovieDetails details={details} />
      <SeatSelection />
      <SeatInfo />
      <View style={styles.bottomContainer}>
        <Footer totalPrice={totalPrice} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  priceContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 10,
    backgroundColor: 'lightgrey',
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  payButton: {
    flex: 1,
    backgroundColor: '#60A5FA',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  seatInfoContainer: {
    flex: 1,
  },
  seatInsideInfoContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  legend: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  legendItem: {
    width: 30,
    height: 30,
    borderRadius: 8,
    marginRight: 15,
  },
  legendLabel: {
    fontSize: 16,
    color: '#4B5563',
  },
  scrollview: {
    paddingBottom: 40,
  },
  seatGridContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  seatsContainer: {
    marginHorizontal: 10,
  },
  seatRow: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  seat: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
    borderRadius: 4,
  },
  movieDetailsContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  movieInfo: {
    color: '#9CA3AF',
    marginTop: 5,
  },
});

export default TicketBookingScreen;

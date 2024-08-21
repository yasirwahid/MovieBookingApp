import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import styles from './TicketBookingScreen.styles';

const TicketBookingScreen = () => {
  const [selectedDate, setSelectedDate] = useState('5 Mar');

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{selectedDate}</Text>
      {/* Render date picker and seat selection here */}
      <Button title="Proceed to Pay" onPress={() => {/* Handle payment */}} />
    </View>
  );
};



export default TicketBookingScreen;

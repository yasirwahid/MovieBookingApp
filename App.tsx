import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from './src/screens/DashboardScreen/DashboardScreen';
import WatchScreen from './src/screens/WatchScreen/WatchScreen';
import MovieDetailsScreen from './src/screens/MovieDetailsScreen/MovieDetailsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TicketBookingScreen from './src/screens/TicketBookingScreen/TicketBookingScreen';
// import { NativeModules } from 'react-native';

const Stack = createNativeStackNavigator();

function WatchStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WatchScreen" component={WatchScreen} />
      <Stack.Screen name="MovieDetail" component={MovieDetailsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="TicketBooking" component={TicketBookingScreen} />
    </Stack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

function App() {

  useEffect(() => {
    // NativeModules.DevSettings.setIsDebuggingRemotely(true)

  }, [])
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Watch" component={WatchStackNavigator} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChefRequestScreen from './ChefRequestScreen';
import ChefProfile from './ChefProfile';
import BookingHistory from './BookingHistory';
import UserProfile from './UserProfile';
import { SignUp } from './SignUp';
import { SignIn } from './SignIn';
import { AboutScreen } from './AboutScreen';
import HomeScreen from './HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="ChefRequest" component={ChefRequestScreen} />
        <Stack.Screen name="ChefProfile" component={ChefProfile} />
        <Stack.Screen name="BookingHistory" component={BookingHistory} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


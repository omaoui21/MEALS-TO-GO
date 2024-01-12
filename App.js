import { StatusBar as StatusBarExpo } from 'expo-status-bar';
import React from 'react';
import {Image, Text,View } from 'react-native';
import {RestaurantsScreen} from './src/features/restaurants/screens/restaurants.screen';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import {  useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato,Lato_400Regular } from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {restaurantsRequest} from './src/services/restaurants/restaurants.service';
restaurantsRequest()
const Tab = createBottomTabNavigator();
function Setting() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function Map() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Map!</Text>
    </View>
  );
}
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  return (
    <>
    <ThemeProvider theme={theme}>
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({color, size }) => {
          let iconName;

          if (route.name === 'Restaurant') {
            iconName ='md-restaurant';
          } else if (route.name === 'Settings') {
            iconName ='md-settings';
          }else if (route.name === 'Map') {
            iconName ='md-map';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Restaurant" component={RestaurantsScreen} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Settings" component={Setting} />
    </Tab.Navigator>
    </NavigationContainer>
    <StatusBarExpo style="auto"/>
    </ThemeProvider>
    </>
  );
}



import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Home from './Screens/Home';
import Detail from './Screens/Detail';
import Favorite from './Screens/Favorite';
import Profile from './Screens/Profile';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {

  return (
    <NavigationContainer>
        <Tab.Navigator
          initialRouteName = "Food"
          tabBarOptions={{
            activeTintColor: '#841584'
          }}
        >
          <Tab.Screen 
           name="Home"
           component={HomeStack}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons 
                  name="home"
                  color={color}
                  size={size}
                />
              )
            }}
          />

          <Tab.Screen 
           name="Favorite"
           component={FavoriteStack}
            options={{
              tabBarLabel: "Favorite",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons 
                  name="heart"
                  color={color}
                  size={size}
                />
              )
            }}
          />

          <Tab.Screen 
           name="Profile"
           component={ProfileStack}
            options={{
              tabBarLabel: "Profile",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons 
                  name="account"
                  color={color}
                  size={size}
                />
              )
            }}
          />

        </Tab.Navigator>      
    </NavigationContainer>
  );
}

function HomeStack(){
  return (
    <Stack.Navigator 
      initialRouteName = "Home" 
      screenOptions={{
        headerStyle:{backgroundColor: '#841584'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'}
      }}
    >

      <Stack.Screen 
        name="Home"
        component={Home}
        options = {{
            title: "Home Page"
        }}
      />

      <Stack.Screen 
        name="Detail"
        component={Detail}
        options = {{
            title: "Detail Page"
        }}
      />

    </Stack.Navigator>
  );
}

function FavoriteStack(){
  return (
    <Stack.Navigator 
      initialRouteName = "Favorite" 
      screenOptions={{
        headerStyle:{backgroundColor: '#841584'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'}
      }}
    >

      <Stack.Screen 
        name="Favorite"
        component={Favorite}
        options = {{
            title: "Favorite Page"
        }}
      />

    </Stack.Navigator>
  );
}

function ProfileStack(){
  return (
    <Stack.Navigator 
      initialRouteName = "Profile" 
      screenOptions={{
        headerStyle:{backgroundColor: '#841584'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'}
      }}
    >

      <Stack.Screen 
        name="Profile"
        component={Profile}
        options = {{
            title: "Profile Page"
        }}
      />

    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Ionicons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

const Header = () => (
  <View style={styles.header}>
  </View>
);

export default function Rotas() {
  const { logado } = useContext(AuthContext);

  if (!logado) {
    return <Login />;
  }

  return (
    <>
      <Header />  
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName='Home'
          activeColor='black'
          inactiveColor='gray'
          barStyle={styles.tabBar}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={25} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: '#282828',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  tabBar: {
    backgroundColor: '#282828',
    height: 50,
  },
});

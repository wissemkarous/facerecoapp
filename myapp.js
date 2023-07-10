import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, ImageBackground, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Time to sign in!</Text>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

function Timeclock() {
  const startVideo = () => {
    // Code to start the video here
  };

  const makeCoffee = () => {
    // Code to make coffee here
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FeatherIcon name="clock" size={100} />
      <Text>Work Time!</Text>
      <TouchableOpacity onPress={startVideo} style={styles.cameraButton}>
        <FeatherIcon name="play" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={makeCoffee} style={styles.coffeeButton}>
        <FeatherIcon name="coffee" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

function TimesheetsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Work Time!</Text>
    </View>
  );
}

function DashboardScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Dashboard</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs({ isAdmin }) {
  return (
    <Tab.Navigator>
      {isAdmin && (
        <Tab.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FeatherIcon name="home" color={color} size={size} />
            ),
          }}
        />
      )}
      {isAdmin && (
        <Tab.Screen
          name="User"
          component={Timeclock}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FeatherIcon name="user" color={color} size={size} />
            ),
          }}
        />
      )}
      <Tab.Screen
        name="Time clock"
        component={Timeclock}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FeatherIcon name="clock" color={color} size={size} />
          ),
        }}
      />
      {isAdmin && (
        <Tab.Screen
          name="Timesheets"
          component={TimesheetsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FeatherIcon name="clipboard" color={color} size={size} />
            ),
          }}
        />
      )}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6e6fa',
  },
  logoContainer: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    
  },
  inputContainer: {
    backgroundColor: '#fff',
    padding: 20,
    //alarger width than the logo container
    width: '80%',
    //border radius to match the logo container
    borderRadius: 10,
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 40,
    borderRadius: 60,
    borderWidth: 2,
  },
  loginButton: {
    //  change the  background color to gris clair 
    
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  loginButtonText: {
    //change the color of the text to white   
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cameraButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#00bfff',
    borderRadius: 50,
    padding: 10,
  },
  coffeeButton: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    backgroundColor: 'orange',
    borderRadius: 50,
    padding: 10,
  },
  logoutButton: {
    position: 'absolute',
    top: 20,
    right: 0,
    padding: 20,
  },
  logoutIcon: {
    fontSize: 35,
    color: 'black',
  },
});

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsAdmin(password === 'admin123'); // Replace 'admin123' with your admin password
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  if (!isLoggedIn) {
    return (
      <View style={styles.loginContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={{ uri: 'https://www.bootdey.com/img/Content/avatar/avatar7.png' }}
            style={styles.logo}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Username" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <MyTabs isAdmin={isAdmin} />
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <FeatherIcon name="log-out" style={styles.logoutIcon} />
      </TouchableOpacity>
    </NavigationContainer>
  );
}

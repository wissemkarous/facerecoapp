import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importer l'icône d'horloge

const backgroundImage = require('./assets/timeerrrr1.png');

const App = () => {
  const [time, setTime] = useState(new Date());
  const [capturedImage, setCapturedImage] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (time) => {
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
      timeZone: 'Africa/Tunis',
    };
    const timeString = time.toLocaleTimeString('en-US', options);
    const dateString = time.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return { timeString, dateString };
  };

  const { timeString, dateString } = formatTime(time);

  const handleCapture = () => {
    // Code pour capturer l'image et effectuer la reconnaissance faciale
    // Vous pouvez utiliser une bibliothèque comme React Native Camera pour la capture d'image
    // ou une API externe pour la reconnaissance faciale
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Work Attendance</Text>
      </View>
      <View style={styles.imageContainer}>
        <View style={styles.image}>
          <ImageBackground source={backgroundImage} style={styles.imageBackground} resizeMode="contain" />
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.captureButtonContainer}>
          <TouchableOpacity style={styles.captureButton} onPress={handleCapture}>
            <Icon name="camera" size={30} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        <View style={styles.dateTimeContainer}>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>{dateString}</Text>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>{timeString}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  header: {
    backgroundColor: '#FFFFFF',
    // decaler le header vers la droite de 30px
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40,
    overflow: 'hidden',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    // changer la couleur du text noire
    color: '#000000',
    // changer la police du text ITALIC
    fontStyle: 'italic',
    // fontStyle: 'italic',
    fontWeight: 'bold',
    fontFamily: 'System',
  },
  imageContainer: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 400,
    height: 400,
    borderRadius: 80,
    overflow: 'hidden',
  },
  imageBackground: {
    flex: 1,
  },
  footer: {
    backgroundColor: '#FFFFFF',
    padding: 0,
    // decaler le footer vers en haut de 30px
    // marginTop: 60,
    // marginVertical: 80,
    // overflow: 'hidden',
    // borderRadius: 10,
    // marginLeft: 20,
    // marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dateContainer: {
    marginRight: 10,
  },
  dateText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  timeContainer: {
    marginLeft: 10,
  },
  timeText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  captureButtonContainer: {
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  captureButton: {
//changer la couleur du bouton en bleu ciel 
    backgroundColor: '#00BFFF',
    borderRadius: 100,
    padding: 20,
    mazrginTop: 10,
    marginVertical : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

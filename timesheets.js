import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';

const App = () => {
  const [selected, setSelected] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Organization Timesheets</Text>
      <View style={styles.calendarContainer}>
        <Calendar
          style={styles.calendar}
          onDayPress={day => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  headerText: {
    fontSize: 20,
     // change the color of the text to empty black
    color: '#000000',
    // changer police de text italic 
    fontStyle: 'italic',
    //ajouter une soulignement au text
    textDecorationLine: 'underline',
     fontWeight: 'bold',  

    // change the font of the text to italic
    // fontStyle: 'italic',
    marginBottom: 10,
    marginVertical: 29,
  },
  calendarContainer: {
    alignSelf: 'flex-end',
    marginRight: 0,
    marginLeft: 70,
  },
  calendar: {
    width: 505,
    height: 800,
  },
});

export default App;
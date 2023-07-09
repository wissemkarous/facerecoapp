import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TextInput } from 'react-native';
import { Calendar } from 'react-native-calendars';

const App = () => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([
    { id: 1, title: 'ayoubchaari' },
    { id: 2, title: 'wissemkarous' },
    { id: 3, title: 'bibou' },
    { id: 4, title: 'nakamura' },
  ]);

  useEffect(() => {
    setFilteredDataSource(masterDataSource);
  }, []);

  const searchFilterFunction = (text) => {
    setSearch(text);
    const newData = masterDataSource.filter((item) => {
      const itemData = item.title ? item.title.toUpperCase() : '';
      const textData = text.toUpperCase();
      return itemData.includes(textData);
    });
    setFilteredDataSource(newData);
  };

  const ItemView = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemId}>{item.id}.</Text>
        <Text style={styles.itemTitle}>{item.title.toUpperCase()}</Text>
      </View>
    );
  };

  const getItem = (item) => {
    alert('Id: ' + item.id + ' Title: ' + item.title);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Organization Timesheets</Text>
      </View>
      <View style={styles.calendarContainer}>
        <Calendar
          style={styles.calendar}
          onDayPress={(day) => {
            // Do something with selected date
          }}
          markedDates={{}}
        />
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
      </View>
      <View style={styles.resultsContainer}>
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Change the background color to gris clai
    backgroundColor: '#f2f2f2',
     // Change the background color to gray
  },
  headerContainer: {
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: '#000000',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  calendarContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 70,
    marginBottom: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    overflow: 'hidden',
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
  resultsContainer: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  itemId: {
    marginRight: 10,
    fontWeight: 'bold',
  },
  itemTitle: {
    textTransform: 'uppercase',
  },
  calendar: {
    width: '100%',
    height: 300,
  },
});

export default App;

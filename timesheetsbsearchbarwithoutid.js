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
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.id}.{item.title.toUpperCase()}
      </Text>
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
      <FlatList
        data={filteredDataSource}
        keyExtractor={(item, index) => index.toString()}
        renderItem={ItemView}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2', // Fond gris clair
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
    paddingVertical: 60,
    marginBottom: 10,
    overflow: 'hidden',
    borderRadius: 140,
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
  itemStyle: {
    padding: 10,
    color: 'transparent',
  },
  calendar: {
    width: '100%',
    height: 300,
  },
});

export default App;

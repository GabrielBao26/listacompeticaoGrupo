import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#2A9F91" />
      <View style={styles.headerContainer}>
        <Text style={styles.header}>LISTAS</Text>
      </View>
      <ScrollView style={styles.listContainer}>
        <View style={[styles.rectangle, styles.redBackground]}>
          <Text style={[styles.text, styles.redText]}>Animais</Text>
        </View>
        <View style={[styles.rectangle, styles.pinkBackground]}>
          <Text style={[styles.text, styles.pinkText]}>Carros</Text>
        </View>
        <View style={[styles.rectangle, styles.lightBlueBackground]}>
          <Text style={[styles.text, styles.lightBlueText]}>Peixes</Text>
        </View>
        <View style={[styles.rectangle, styles.lightGreenBackground]}>
          <Text style={[styles.text, styles.lightGreenText]}>Times</Text>
        </View>
        <View style={[styles.rectangle, styles.grayBackground]}>
          <Text style={[styles.text, styles.grayText]}>Filmes</Text>
        </View>
        <View style={[styles.rectangle, styles.yellowBackground]}>
          <Text style={[styles.text, styles.yellowText]}>Linguagens</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    marginLeft: -10, 
    marginRight: -10,
  },
  headerContainer: {
    backgroundColor: '#2A9F91',
    paddingVertical: 10,
    width: '100%',
  },
  header: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold', 
  },
  listContainer: {
    width: '90%',
    marginTop: 10,
  },
  rectangle: {
    height: 100,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -10, 
    marginRight: -10,
  },
  redBackground: {
    backgroundColor: '#FFA4A4',
  },
  pinkBackground: {
    backgroundColor: '#EDA4FF',
  },
  lightBlueBackground: {
    backgroundColor: '#A4D4FF',
  },
  lightGreenBackground: {
    backgroundColor: '#A4FFC3',
  },
  grayBackground: {
    backgroundColor: '#D1D6D3',
  },
  yellowBackground: {
    backgroundColor: '#E8EFBD',
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '600',
    lineHeight: 31,
    
  },
  redText: {
    color: '#C62222',
  },
  pinkText: {
    color: '#7422C6',
  },
  lightBlueText: {
    color: '#2277C6',
  },
  lightGreenText: {
    color: '#22C646',
  },
  grayText: {
    color: '#434A44',
  },
  yellowText: {
    color: '#747D10',
  },
});

export default App;
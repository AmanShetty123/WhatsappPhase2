import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import Header from './components/Header';
import Stories from './components/Stories';
import MainMessage from './components/MainMessage';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Header />
        <Stories />
        <MainMessage />
        <Navigation />
      </View>
    </SafeAreaView>
  );
};

export default App;

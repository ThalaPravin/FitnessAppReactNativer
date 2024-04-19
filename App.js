import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import StackNavigator from './StackNavigator';
import {FitnessContext} from './Context';

const App = () => {
  return (
    <FitnessContext>
      <StackNavigator />
    </FitnessContext>
  );
};

export default App;

const styles = StyleSheet.create({});

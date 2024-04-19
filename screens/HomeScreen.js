import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { home } from '../assets';
import FitnessCards from '../components/FitnessCards';
import { FitnessItems } from '../Context';
import { useContext } from 'react';

const HomeScreen = () => {
  const {
    completed,
    setCompleted,
    minutes,
    setMinutes,
    calories,
    setCalories,
    setWorkout,
    workout,
  } = useContext(FitnessItems);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={home} style={styles.backgroundImage} />
        <View style={styles.overlay}></View>
        <Text style={styles.headerText}>HOME WORKOUT</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{workout}</Text>
            <Text style={styles.statLabel}>WORKOUT</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{parseFloat(calories).toFixed(2)}</Text>
            <Text style={styles.statLabel}>KCAL</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{parseFloat(minutes).toFixed(2)}</Text>
            <Text style={styles.statLabel}>MINS</Text>
          </View>
        </View>
      </View>
      <View style={styles.cardsContainer}>
        <FitnessCards />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f7f7f7',
  },

  headerContainer: {
    backgroundColor: '#2E7D32',
  },
  backgroundImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  headerText: {
    fontWeight: '700',
    fontSize: 28,
    color: 'white',
    marginTop: 20,
    marginLeft:85
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '135%',
    backgroundColor: 'rgba(0, 0, 0, 0.68)', 
  },

  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 19,
    fontWeight: '500',
    color: 'white',
    margin:5,
  },
  statLabel: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    margin: 5,
  },
  cardsContainer: {
    marginTop: 65,
  },
});

export default HomeScreen;

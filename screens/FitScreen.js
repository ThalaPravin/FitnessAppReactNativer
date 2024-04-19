import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useContext} from 'react';
import {FitnessItems} from '../Context';

const FitScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const exercises = route.params?.exercises;
  const current = exercises[index];
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
    <SafeAreaView style={{ backgroundColor:'#F9F9ED', height:'100%' }}>
      <Image
        style={{height: 380, width: '100%',marginTop:1}}
        source={{uri: current?.image}}
      />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 30,
          color:'black',
          marginRight: 'auto',
          marginLeft: 'auto',
          marginTop: 30,
        }}>
        {current?.name}
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 40,
          marginRight: 'auto',
          marginLeft: 'auto',
          marginTop: 20,
          color: 'red',
        }}>
        x{current?.sets}
      </Text>
      {index + 1 >= exercises.length ? (
        <Pressable
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={{
            backgroundColor: 'red',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            width: '45%',
            alignSelf: 'center',
            borderRadius: 20,
            marginTop: 30,
            height: 55,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 10,
              fontWeight: '600',
              color: 'black',
            }}>
            Done
          </Text>
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            navigation.navigate('Rest');
            setCompleted([...completed, current.name]);
            console.log(completed);
            setWorkout(workout + 1);
            setMinutes(minutes + 2.5);
            setCalories(calories + 6.3);
            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}
          style={{
            background: 'red',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            width: '45%',
            alignSelf: 'center',
            borderRadius: 20,
            marginTop: 30,
            height: 55,
          }}>
            <View style={{ backgroundColor:'green',backgroundColor: 'green',
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
              width: '70%',
              alignSelf: 'center',
              borderRadius: 20,
              height: 55, }} > 
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: '900',
              color: 'white',
            }}>
            Done
          </Text>
          </View>
        </Pressable>
      )}

      <Pressable
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 30,
          width: '90%',
        }}>
        <Pressable
          disabled={index == 0}
          onPress={() => {
            navigation.navigate('Rest');
            setTimeout(() => {
              setIndex(index - 1);
            }, 2000);
          }}
          style={{
            backgroundColor: 'red',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            width: '40%',
            alignSelf: 'center',
            borderRadius: 20,
            height: 55,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: '600',
              color: 'white',
            }}>
            PREV
          </Text>
        </Pressable>
        {index + 1 >= exercises.length ? (
          <Pressable
            onPress={() => {
              navigation.navigate('Home');
            }}
            style={{
              backgroundColor: 'green',
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
              width: '40%',
              alignSelf: 'center',
              borderRadius: 20,
              height: 55,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                fontWeight: '600',
                color: 'white',
              }}>
              SKIP
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              navigation.navigate('Rest');
              setTimeout(() => {
                setIndex(index + 1);
              }, 2000);
            }}
            style={{
              backgroundColor: 'red',
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
              width: '40%',
              alignSelf: 'center',
              borderRadius: 20,
              height: 55,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                fontWeight: '600',
                color: 'white',
              }}>
              SKIP
            </Text>
          </Pressable>
        )}
      </Pressable>
    </SafeAreaView>
  );
};

export default FitScreen;

const styles = StyleSheet.create({});

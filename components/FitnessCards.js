import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import fitness from '../data/fitness';
import {sparkler} from '../assets';
import {useNavigation} from '@react-navigation/native';

const FitnessCards = () => {
  const navigation = useNavigation();
  const FitnessData = fitness;
  return (
    <View style={{ marginTop:'20' }}>
     
      {FitnessData.map((item, key) => (
        <Pressable
          onPress={() =>
            navigation.navigate('Work', {
              image: item?.image,
              exercises: item?.excersises,
              id: item?.id,
            })
          }
          key={key}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            marginBottom: 1,
          }}>
          <Image
            style={{height: 140, width: '95%', borderRadius: 10}}
            source={{uri: item?.image}}
          />
           <View style={styles.overlay}></View>

          <Text
            style={{
              position: 'absolute',
              color: 'white',
              fontSize: 17,
              fontWeight: '600',
              left: 25,
              top: 20,
            }}>
            {item?.name}
          </Text>
          <Image
            style={{
              height: 30,
              width: 30,
              
              tintColor: 'white',
              position: 'absolute',
              left: 20,
              bottom: 15,
            }}
            source={sparkler}
          />
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    marginLeft:10,
    borderRadius: 10,
    width: '95%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
  }
})
export default FitnessCards;



import {View, Text, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import { builder } from '../assets';

const RestScreen = () => {
  let timer = 0;
  const [timeLeft, setTimeLeft] = useState(5);
  const navigation = useNavigation();
  const startTime = () => {
    setTimeout(() => {
      if (timeLeft <= 0) {
        navigation.goBack();
        clearTimeout(timer);
      }
      setTimeLeft(timeLeft - 1);
    }, 1000);
  };

  useEffect(() => {
    startTime();
    
    return () => clearTimeout(timer);
  });

  return (
    <SafeAreaView>
      <Image
        source={builder}
        style={{width: '100%', height: 420}}
      />
      <Text
        style={{
          textAlign: 'center',
          color:'black',
          fontSize: 30,
          fontWeight: '900',
          marginTop: 40,
        }}>
        TAKE A BREAK
      </Text>
      <Text
        style={{
          fontSize: 50,
          fontWeight: '900',
          color:'black',
          marginTop: 50,
          textAlign: 'center',
        }}>
        {timeLeft}
      </Text>
    </SafeAreaView>
  );
};

export default RestScreen;

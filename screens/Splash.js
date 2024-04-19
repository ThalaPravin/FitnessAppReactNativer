import React, {useEffect} from 'react';
import {View, Image, Dimensions} from 'react-native';
import {splash} from '../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, []);

  return (
    <View style={{flex: 1}}>
      <Image
        source={splash}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          resizeMode: 'contain',
        }}
        resizeMode="cover"
      />
    </View>
  );
};

export default Splash;

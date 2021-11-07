import 'react-native-gesture-handler';
import React from 'react';
import {Image} from 'react-native';

export default function LogoTitle() {
  return (
    <Image
      style={{width: 90, height: 45}}
      source={require('../src/logoID.png')}
    />
  );
}

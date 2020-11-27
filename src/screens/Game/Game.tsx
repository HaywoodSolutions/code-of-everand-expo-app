import * as React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { Dimensions } from 'react-native';
import BottomBar from './BottomBar/BottomBar';
import { scaleH } from './Scales';
import Room from './Room';

class Game extends React.Component {
  componentDidMount() {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Room />
        <View style={{flex: 0, height: scaleH * 47}}>
          <BottomBar />
        </View>
      </View>
    );
  }
}

export default Game;
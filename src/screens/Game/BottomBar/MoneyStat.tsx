import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { scaleH, scaleW } from '../Scales';

export default class BottomBar extends React.Component<{currency: number}> {
  render() {
    return (
      <View style={{flex: 0, flexDirection: 'row', paddingHorizontal: 3 * scaleW, height: 22 * scaleH, justifyContent: 'center', alignItems: 'flex-start'}}>
        <View style={{flex: 0, height: scaleH * 22, width: 115 * scaleW, paddingRight: 30 * scaleW, padding: 2 * scaleH, backgroundColor: '#2884A6', borderRadius: 5 * scaleH, justifyContent: 'center', alignItems: 'flex-end', paddingHorizontal: 15 * scaleW}}>
          <Text style={{color: '#81DBE6', fontSize: 12 * scaleH}}>{this.props.currency}</Text>
        </View>
        <View style={{flex: 0, height: scaleH * 32, width: 32 * scaleH, backgroundColor: '#2884A6', borderRadius: 16 * scaleH, marginTop: -5 * scaleH, marginLeft: -22 * scaleW}}>
          <Image source={require('../../../../assets/Coin.png')} style={{width: 32 * scaleH, height: 32 * scaleH}} />
        </View>
      </View>
    );
  }
};
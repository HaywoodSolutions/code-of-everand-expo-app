import * as React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import BottomBarStat from './BottomBarStat';
import DoubleStatBar from './DoubleStatBar';
import MoneyStat from './MoneyStat';
import { scaleH, scaleW } from '../Scales';

export default class BottomBar extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#036774', padding: 2}}>
        <View style={{
          flex: 1,
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
          overflow: 'hidden'
        }}>
          <ImageBackground source={require('../../../../assets/StatbarBG.png')}
            style={{
              flex: 1,
              overflow: 'hidden',
              justifyContent: 'center',
            }}
            resizeMode="repeat"
          >
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
              {/* <View style={{flex: 0, flexDirection: 'row', paddingHorizontal: 3 * scaleW, height: 32 * scaleW}}>
                <View style={{flex: 0, height: scaleH * 32, width: 32 * scaleH, padding: 2 * scaleH, backgroundColor: '#2884A6', borderRadius: 5 * scaleH}} />
              </View> */}
              <View style={{flex: 0, flexDirection: 'row', paddingHorizontal: 3 * scaleW, height: 32 * scaleW}}>
                <Image source={require('../../../../assets/Chat.png')} style={{width: 32 * scaleW, height: 32 * scaleW}} />
              </View>
              <View style={{flex: 0, flexDirection: 'row', paddingHorizontal: 3 * scaleW, height: 32 * scaleW}}>
                <Image source={require('../../../../assets/Map.png')} style={{width: 32 * scaleW, height: 32 * scaleW}} />
              </View>
              <View style={{flex: 0, flexDirection: 'row', paddingHorizontal: 3 * scaleW, height: 32 * scaleW, justifyContent: 'center', alignItems: 'flex-start'}}>
                <Image source={require('../../../../assets/QuestBook.png')} style={{width: 32 * scaleW, height: 32 * scaleW}} />
              </View>

              <DoubleStatBar
                percentageLeft={0.91}
                percentageRight={1}
                barColor='#D63C32'
                midBarColor='#D63C32'
                labelLeftA="100"
                labelLeftB="91"
                labelRightA="100"
                labelRightB="100"
              />

              <BottomBarStat
                percentage={100}
                barColor='#4A9AFF'
                labelLeft="100"
                labelRight="100"
              />

              <BottomBarStat
                percentage={0.2}
                barColor='#FFD100'
                labelLeft="LVL"
                labelRight="1"
              />

              <MoneyStat
                currency={1}
              />
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
};
import * as React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { scaleH, scaleW } from '../Scales';
import { TriangleCornerTopLeft, TriangleCornerBottomRight } from '../utils/Triangle';

type Props = {
  percentage: number,
  labelLeft: string|number,
  labelRight: string|number,
  barColor: string
};

export default class BottomBarStat extends React.Component<Props> {
  render() {
    return (
      <View style={{flex: 0, flexDirection: 'row', paddingHorizontal: 3 * scaleW}}>
        <View style={{flex: 0, flexDirection: 'row', height: scaleH * 22, width: 133 * scaleW, padding: 2 * scaleH, backgroundColor: '#88D3EA', borderTopLeftRadius: 5 * scaleH, borderBottomLeftRadius: 5 * scaleH}}>
          <View style={{flex: 0, padding: 1 * scaleH, height: scaleH * 18, width: 93 * scaleW, backgroundColor: '#0F344C', borderRadius: 3 * scaleH}}>
            <View style={{flex: 0, height: scaleH * 16, width: Math.floor(Math.min(1, this.props.percentage) * 91 * scaleW), backgroundColor: this.props.barColor, borderRadius: 2 * scaleH}} />
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'black', fontSize: 12 * scaleH}}>{this.props.labelLeft}</Text>
          </View>
        </View>
        <TriangleCornerTopLeft
          backgroundColor='#88D3EA'
          width={scaleW * 8}
          height={scaleH * 21.8}
          styles={{
            marginLeft: -0.35
          }}
        />
        <TriangleCornerBottomRight
          backgroundColor='#2884A6'
          width={scaleW * 8}
          height={scaleH * 21.8}
          styles={{
            marginLeft: -6 * scaleW
          }}
        />
        <View style={{flex: 0, height: scaleH * 22, width: 46 * scaleW, padding: 3 * scaleW, backgroundColor: '#2884A6', borderTopRightRadius: 5 * scaleH, borderBottomRightRadius: 5 * scaleH, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#81DBE6', fontSize: 12 * scaleH}}>{this.props.labelRight}</Text>
        </View>
      </View>
    );
  }
};
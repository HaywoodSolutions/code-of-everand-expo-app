import * as React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { scaleH, scaleW } from '../Scales';
import { TriangleCornerTopLeft, TriangleCornerBottomRight, TriangleTopLeftCorner } from '../utils/Triangle';

type Props = {
  percentageLeft: number,
  percentageRight: number,
  labelLeftA: string|number,
  labelLeftB: string|number,
  labelRightA: string|number,
  labelRightB: string|number,
  barColor: string,
  midBarColor: string
};

export default class DoubleStatBar extends React.Component<Props> {
  render() {
    return (
      <View style={{flex: 0, flexDirection: 'row', paddingHorizontal: 3 * scaleW}}>
        <View style={{flex: 0, height: scaleH * 22, width: 46 * scaleW, padding: 3 * scaleW, backgroundColor: '#2884A6', borderTopLeftRadius: 5 * scaleH, borderBottomLeftRadius: 5 * scaleH, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#81DBE6', fontSize: 12 * scaleH}}>{this.props.labelRightA}</Text>
        </View>
        <TriangleCornerTopLeft
          backgroundColor='#2884A6'
          width={scaleW * 8}
          height={scaleH * 21.8}
          styles={{
            marginLeft: -0.35
          }}
        />
        <TriangleCornerBottomRight
          backgroundColor='#88D3EA'
          width={scaleW * 8}
          height={scaleH * 21.8}
          styles={{
            marginLeft: -6 * scaleW
          }}
        />
        <View style={{flex: 0, flexDirection: 'row', height: scaleH * 22, width: 167 * scaleW, padding: 2 * scaleH, backgroundColor: '#88D3EA'}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'black', fontSize: 12 * scaleH}}>{this.props.labelLeftB}</Text>
          </View>
          <View style={{flex: 0, flexDirection: 'row', padding: 1 * scaleH, height: scaleH * 18, width: 96 * scaleW, backgroundColor: '#0F344C', borderRadius: 3 * scaleH}}>
            <View style={{flex: 0, width: 46 * scaleW, alignItems: 'flex-end'}}>
              <View style={{flex: 0, height: scaleH * 16, width: this.props.percentageLeft * 46 * scaleW, backgroundColor: '#D63C32', borderTopLeftRadius: 2 * scaleH, borderBottomLeftRadius: 2 * scaleH}} />
            </View>
            <View style={{flex: 0, height: scaleH * 16, width: 1 * scaleW, backgroundColor: '#6E130C'}} />
            <View style={{flex: 0, width: 46 * scaleW, alignItems: 'flex-start'}}>
              <View style={{flex: 0, height: scaleH * 16, width: this.props.percentageRight *46 * scaleW, backgroundColor: '#D63C32', borderTopRightRadius: 2 * scaleH, borderBottomRightRadius: 2 * scaleH}} />
            </View>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'black', fontSize: 12 * scaleH}}>{this.props.labelRightB}</Text>
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
          <Text style={{color: '#81DBE6', fontSize: 12 * scaleH}}>{this.props.labelRightA}</Text>
        </View>
      </View>
    );
  }
};
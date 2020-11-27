import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

export const TriangleCornerTopLeft = function(props: {styles?: StyleProp<ViewStyle>, width?: number, height?: number, backgroundColor?: string}) {
  return (
    <View
      style={[{
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: props.width,
        borderTopWidth: props.height,
        borderRightColor: 'transparent',
        borderTopColor: props.backgroundColor || 'transparent'
      }, props.styles]}
    />
  )
};


export const TriangleCornerTopRight  = function(props: {styles?: StyleProp<ViewStyle>, width?: number, height?: number, backgroundColor?: string}) {
  return (
    <TriangleCornerTopLeft
      {...props}
      styles={[{
        transform: [
          {rotate: '90deg'}
        ]
      }, props.styles]}
    />
  )
};

export const TriangleTopLeftCorner = function(props: {styles?: StyleProp<ViewStyle>, width?: number, height?: number, backgroundColor?: string}) {
  return (
    <TriangleCornerTopLeft
      {...props}
      styles={[{
        transform: [
          {rotate: '270deg'}
        ]
      }, props.styles]}
    />
  )
};


export const TriangleCornerBottomRight  = function(props: {styles?: StyleProp<ViewStyle>, width?: number, height?: number, backgroundColor?: string}) {
  return (
    <TriangleCornerTopLeft
      {...props}
      styles={[{
        transform: [
          {rotate: '180deg'}
        ]
      }, props.styles]}
    />
  )
};
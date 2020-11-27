import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const scaleW = Math.max(windowWidth, windowHeight) / 980;
export const scaleH = Math.min(windowWidth, windowHeight) / 565; 
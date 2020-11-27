import * as React from 'react';
import Game from '../screens/Game/Game';

import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

function App() {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, borderRadius: 10, overflow: 'hidden'}}>
          <StatusBar style="light" />
          <Game />
        </View>
      </SafeAreaView>
    </View>
  );
}

export default App;
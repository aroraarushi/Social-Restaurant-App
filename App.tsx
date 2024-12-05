import {View, Text} from 'react-native';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// navigator
import MainNavigator from './src/navigations/MainNavigator';

export default function App() {
  return(
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MainNavigator />
    </GestureHandlerRootView>
    );
}
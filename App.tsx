/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { FadeScreen } from './src/screens/FadeScreen';


export const App = () => {
  return (
    <NavigationContainer>
      <Navigation />

    </NavigationContainer>
  )
}

export default App
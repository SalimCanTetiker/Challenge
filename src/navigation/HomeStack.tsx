import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainPage from '../screen/MainPage/MainPage'
import MarketPage from '../screen/MarketPage/MarketPage'
import LoginPage from '../screen/LoginPage/LoginPage'

const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={LoginPage} />
      <Stack.Screen name='Main' component={MainPage} />
      <Stack.Screen name='Market' component={MarketPage} />
    </Stack.Navigator>
  )
}

export default HomeStack
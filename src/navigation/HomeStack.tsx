import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainPage from '../screen/MainPage/MainPage'
import MarketPage from '../screen/MarketPage/MarketPage'

const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Main' component={MainPage}/>
        <Stack.Screen name='Market' component={MarketPage}/>
    </Stack.Navigator>
  )
}

export default HomeStack
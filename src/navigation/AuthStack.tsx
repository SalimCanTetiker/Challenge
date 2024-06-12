import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginPage from '../screen/LoginPage/LoginPage'
import MainPage from '../screen/MainPage/MainPage'

const Stack = createNativeStackNavigator()

const AuthStack = () => {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={LoginPage} />
      <Stack.Screen name='Main' component={MainPage} />
    </Stack.Navigator>
  )
}

export default AuthStack
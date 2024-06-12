import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginPage from '../screen/LoginPage/LoginPage'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login' component={LoginPage}/>
    </Stack.Navigator>
  )
}

export default AuthStack
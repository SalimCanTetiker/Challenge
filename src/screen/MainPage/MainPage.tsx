import { View, Text, Button } from 'react-native'
import React from 'react'
import { supabase } from '../../supabaseClient'
import { useNavigation } from '@react-navigation/native'

const MainPage = () => {

  const navigation = useNavigation()

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log('error')
    } else {
      console.log('succes')
    }
    try {
      navigation.navigate('Login')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View>
      <Text>MainPage</Text>
      <Button title='Çık' onPress={signOut} />
    </View>
  )
}

export default MainPage
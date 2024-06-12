import React, { useState, useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { supabase } from '../supabaseClient'

import HomeStack from './HomeStack'
import AuthStack from './AuthStack'

const RootNavigation = () => {

  const [session, setSession] = useState()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <NavigationContainer>
      {
        session ? (<AuthStack />) : (<HomeStack />)
      }
    </NavigationContainer>
  )
}

export default RootNavigation
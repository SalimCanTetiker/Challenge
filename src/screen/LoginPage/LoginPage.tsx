import { View, Text } from 'react-native'
import React from 'react'


import styles from './LoginPage.style'

import Input from '../../components/Input/Input'
import CustomButton from '../../components/CustommButton/CustomButton'
import { Formik } from 'formik'
import { supabase } from '../../supabaseClient'
import { useNavigation } from '@react-navigation/native'

const initialFormValues = {
  usermail: '',
  password: '',
};

const LoginPage = () => {

  const navigation = useNavigation()

  const handleFormSubmit = async (formValues) => {
    await supabase.auth.signInWithPassword({
      email: formValues.usermail,
      password: formValues.password,
    })
    navigation.navigate('Main')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Brand Name</Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>Log in</Text>
      </View>
      <View style={styles.input}>
        <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
          {({ handleChange, handleSubmit, values }) => (
            <>
              <Input
                placeholder={'E-mail'}
                value={values.usermail} onChangeText={handleChange('usermail')}
                secureTextEntry={false}
              />
              <Input
                placeholder={'Password'}
                value={values.password} onChangeText={handleChange('password')}
                secureTextEntry={true}
              />
              <CustomButton
                title={'Log in'}
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
      </View>
    </View>
  )
}

export default LoginPage
import { View, Text } from 'react-native'
import React from 'react'

import styles from './LoginPage.style'

import Input from '../../components/Input/Input'
import CustomButton from '../../components/CustommButton/CustomButton'

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Brand Name</Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>Log in</Text>
      </View>
      <View style={styles.input}>
        <Input
          placeholder={'E-mail'}
        />
        <Input
          placeholder={'Password'}
        />
      </View>
      <View style={styles.button}>
        <CustomButton
          title={'Log in'} />
      </View>
    </View>
  )
}

export default LoginPage
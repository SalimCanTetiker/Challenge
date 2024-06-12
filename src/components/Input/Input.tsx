import { View, TextInput } from 'react-native'
import React from 'react'

import styles from './Input.style'

const Input = ({placeholder, value, onChangeText, secureTextEntry}) => {
  return (
    <View>
    <TextInput
    style={styles.textInput}
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    secureTextEntry={secureTextEntry}
    />
  </View>
  )
}

export default Input
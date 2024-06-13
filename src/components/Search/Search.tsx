import { View, TextInput } from 'react-native'
import React from 'react'
import styles from './Search.style'

const Search = () => {
  return (
    <View>
        <TextInput
        style={styles.search}
        placeholder='search'
        />
    </View>
  )
}

export default Search
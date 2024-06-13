import { View } from 'react-native'
import React from 'react'

import styles from './MainPage.style'

import AddComponent from '../../components/AddComponent/AddComponent'
import Search from '../../components/Search/Search'

const MainPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.add}>
        <AddComponent />
      </View>
      <View style={styles.search}>
        <Search/>
      </View>
    </View>
  )
}

export default MainPage
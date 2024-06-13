import { View } from 'react-native'
import React from 'react'

import styles from './MainPage.style'

import Search from '../../components/Search/Search'
import AddProduct from '../../components/AddProduct/AddProduct'

const MainPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.add}>
        <AddProduct/>
      </View>
      <View style={styles.search}>
        <Search/>
      </View>
    </View>
  )
}

export default MainPage
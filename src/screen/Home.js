import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import UibTab from '../navigation/UibTab'

const Home = () => {
  return (
    <View style={styles.container} >
      <UibTab/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"red"
    }
})
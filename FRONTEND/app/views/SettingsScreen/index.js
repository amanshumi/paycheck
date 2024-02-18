// SettingsScreen.js
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BackButton from '../../components/BackButton'

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <BackButton />
      <Text>Settings Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default SettingsScreen

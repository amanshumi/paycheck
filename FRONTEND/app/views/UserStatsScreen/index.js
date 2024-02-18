// UserStatsScreen.js
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BackButton from '../../components/BackButton'
import NavigationBar from '../../components/NavigationBar'
import { useNavigation } from '@react-navigation/native'

const UserStatsScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <BackButton />
      <NavigationBar />
      <Text>User Stats Screen</Text>
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

export default UserStatsScreen

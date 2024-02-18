// DashboardScreen.js
import React from 'react'
import { View, Text, StyleSheet, Box } from 'native-base'
import BackButton from '../../components/BackButton'
import NavigationBar from '../../components/NavigationBar'

const DashboardScreen = () => {
  return (
    <Box flex={1} alignItems="center">
      <BackButton />
      <Text>Dashboard Screen</Text>
      <NavigationBar />
      {/* Example usage: onPress to navigate to "Groups" */}
    </Box>
  )
}

export default DashboardScreen

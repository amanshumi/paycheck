import React from 'react'
import { Image, Box, Text, TouchableOpacity } from 'native-base'
import { BackButton } from '../../config/C4'
import NavigationBar from '../../components/NavigationBar'
import { useNavigation } from '@react-navigation/native'
import HeaderProfile from '../../components/HeaderProfile'
import Card from '../../components/Card'

const HomeView = () => {
  const navigation = useNavigation()

  const handlePress = (routeName) => {
    navigation.navigate(routeName)
  }

  return (
    <Box flex={1} alignItems="center" backgroundColor="gray.100">
      {/* <BackButton /> */}
      <HeaderProfile />
      <Card />

      <NavigationBar />
    </Box>
  )
}

export default HomeView

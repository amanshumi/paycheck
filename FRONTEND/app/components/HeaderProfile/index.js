// ProfileHeader.js
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { VStack, HStack } from 'native-base'
import { Avatar } from 'react-native-elements'
import { isTablet } from 'react-native-device-detection'
//import FontAwesome from '@expo/vector-icons/FontAwesome'
import Ionicons from '@expo/vector-icons/Ionicons'
import Styling from '../../config/Settings/styling.json'

const ProfileHeader = ({ userName, profileImageUrl }) => {
  return (
    <VStack style={styles.container}>
      <Avatar
        rounded
        source={require('../../assets/avatar.jpg')}
        size="medium"
        containerStyle={styles.avatar}
      />
      <HStack style={styles.textContainer}>
        <Text style={styles.greetingText}>Hello,</Text>
        <Text style={styles.userNameText}>Michael Jefferson</Text>
      </HStack>
      <Ionicons
        name="notifications-outline"
        size={isTablet ? 60 : 35}
        color="black"
        style={styles.icon}
      />
    </VStack>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    padding: 15,
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 1, // Ensures the header is rendered above other components
  },
  avatar: {
    marginRight: 15,
  },
  textContainer: {
    flexDirection: 'column',
  },
  greetingText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userNameText: {
    fontSize: 16,
  },
  icon: {
    marginLeft: 'auto', // Push the icon to the right (end of HStack)
    marginTop: 5,
  },
})

export default ProfileHeader

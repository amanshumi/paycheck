import React from 'react'
import { Button, Text, Pressable } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { isTablet } from 'react-native-device-detection'
import Styling from '../../config/Settings/styling.json'
import Ionicons from '@expo/vector-icons/Ionicons'

const BackButton = ({ transparent }) => {
  const navigation = useNavigation()

  return (
    <Button
      zIndex={99}
      position="absolute"
      top="2"
      left="3"
      borderRadius="2xl"
      alignSelf="flex-start"
      backgroundColor={Styling.primaryColor}
      _pressed={{
        backgroundColor: Styling.secondaryColor,
        transform: [
          {
            scale: 0.95,
          },
        ],
      }}
      onPress={() => navigation.goBack()}
    >
      <Ionicons name="arrow-back-outline" size={25} color="white" />
    </Button>
  )
}

export default BackButton

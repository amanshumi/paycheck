import React, { useState, useEffect, useContext } from 'react'
import {
  Button,
  Text,
  Center,
  Box,
  VStack,
  Heading,
  PresenceTransition,
  AlertDialog,
  useToast,
  Spinner,
  Image,
} from 'native-base'
import { isTablet, isAndroid, width } from 'react-native-device-detection'
import { useNavigation, useRoute } from '@react-navigation/native'
import BackButton from '../../components/BackButton'
import { LinearGradient } from 'expo-linear-gradient'

const WelcomeView = () => {
  const navigation = useNavigation()

  const handleLogin = () => {
    // Navigate to LoginView
    navigation.navigate('LoginView')
  }

  const handleRegister = () => {
    // Navigate to RegisterView
    navigation.navigate('RegisterView')
  }

  useEffect(() => {
    // Any additional initialization logic can be added here
  }, [])

  return (
    <Box flex={1} alignItems="center">
      <BackButton />
      {/* <Text>WelcomeView</Text> */}
      <Center h="100%">
        <Image
          alt="footer"
          source={require('../../assets/vector_header_green.png')}
          resizeMode="contain"
          width={width}
          height={isTablet ? 400 : 200}
          style={{ position: 'absolute', top: 0 }}
        />
        <VStack space={4}>
          <Button
            bg="#007D76"
            top="280"
            width={width - 30}
            borderRadius="2xl"
            size="lg"
            onPress={handleLogin}
          >
            <Text fontSize="18" color="white" shadow={2}>
              Login
            </Text>
          </Button>
          <Button
            bg="#007D76"
            top="280"
            width={width - 30}
            borderRadius="2xl"
            size="lg"
            onPress={handleRegister}
          >
            <Text fontSize="18" color="white" shadow={2}>
              Register
            </Text>
          </Button>
          {/* <VStack alignItems="center" mt={4}>
            <Text fontSize="16" marginLeft={4}>{'\u2022'} te</Text>
            <Text fontSize="16" marginLeft={4}>{'\u2022'} Bullet Point 2</Text>
            <Text fontSize="16" marginLeft={4}>{'\u2022'} Bullet Point 3</Text>
          </VStack> */}
        </VStack>
      </Center>
    </Box>
  )
}

export default WelcomeView

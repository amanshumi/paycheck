import React, { useState, useEffect } from 'react'
import { Image, Box, HStack, Spinner, Center, Heading, Text } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { isTablet, isAndroid, width } from 'react-native-device-detection'
import { LinearGradient } from 'expo-linear-gradient'

const SplashScreenView = () => {
  const navigation = useNavigation()
  const [connectionStatus, setConnectionStatus] = useState(true)

  useEffect(() => {
    // Simulating an asynchronous operation (e.g., fetching data) with a timeout
    const fetchData = async () => {
      try {
        // Your asynchronous operation (API call, data fetching, etc.) goes here
        // For now, just setting a timeout to simulate loading
        await new Promise((resolve) => setTimeout(resolve, 5000))

        // Navigate to HomeView after 5 seconds
        navigation.navigate('LoginView')
      } catch (error) {
        console.error('Error fetching data:', error)
        setConnectionStatus(false) // Update connection status if there's an error
      }
    }

    fetchData() // Invoke the asynchronous operation

    // Clean up the timeout in case the component unmounts before the timeout completes
    return () => clearTimeout()
  }, [navigation])

  return (
    <Box flex={1}>
      <LinearGradient
        colors={['#6CFEB8', '#007D76']}
        style={{ flex: 1, alignItems: 'center' }}
      >
        <Center h="100%">
          <Image
            alt="header"
            source={require('../../assets/vector_header_white.png')}
            resizeMode="contain"
            width={width}
            //height={isTablet ? 200 : 300}
            style={{ position: 'absolute', top: 0 }}
          />
          <Image
            alt="splash image"
            source={require('../../assets/logo.png')}
            resizeMode="contain"
          />
          <HStack space={2} alignItems="center" mt={2} mr="8">
            <Spinner
              accessibilityLabel="Loading posts"
              size={'lg'}
              color="white"
            />
            <Heading color="white" fontSize={isTablet ? 'xl' : 'lg'}>
              {connectionStatus
                ? 'Getting things ready'
                : 'Trying to get content...'}
            </Heading>
          </HStack>
        </Center>
      </LinearGradient>
      <HStack
        position="absolute"
        bottom={1}
        left={1}
        right={1}
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Box>
          <Text>Powered by thesmartway@2024</Text>
        </Box>
      </HStack>
      <Image
        alt="header"
        source={require('../../assets/vector_footer_white.png')}
        resizeMode="contain"
        width={width}
        //height={isTablet ? 200 : 300}
        style={{ position: 'absolute', bottom: -10 }}
      />
    </Box>
  )
}

export default SplashScreenView

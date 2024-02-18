import React from 'react'
import { Button, Text, Box } from 'native-base'
import { width } from 'react-native-device-detection'
import Styling from '../../config/Settings/styling.json'

const LoginButton = () => {
  return (
    <Button
      bg={Styling.primaryColor}
      width={width - 30}
      //rounded="full"
      borderRadius="xl"
      //size="lg"
      //justifyContent="flex-end"
      onPress={handleLogin}
      _pressed={{
        //backgroundColor: Styling.secondaryColor,
        transform: [
          {
            scale: 0.95,
          },
        ],
      }}
    >
      <Text fontSize="18" color="white">
        Login
      </Text>
    </Button>
  )
}
export default LoginButton

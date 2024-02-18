import React from 'react'
import { Center, Text, Button, Image, Box, View } from 'native-base'
import RegisterForm from '../../components/RegisterForm'
import Styling from '../../config/Settings/styling.json'
import { isTablet, isAndroid, width } from 'react-native-device-detection'

const RegisterView = () => {
  return (
    <Box flex={1} borderWidth={2} borderColor={Styling.secondaryColor}>
      {/* <BackButton /> */}
      {/* <Text>LoginView</Text> */}
      <Center h="100%">
        <Image
          alt="footer"
          source={require('../../assets/vector_header_green.png')}
          resizeMode="contain"
          width={width}
          height={isTablet ? 400 : 200}
          style={{ position: 'absolute', top: 0 }}
        />

        <Center h="100%" w="100%" top="0">
          <RegisterForm />
        </Center>
      </Center>
    </Box>
    // </Center>
  )
}

export default RegisterView

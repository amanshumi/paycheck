import React, { useContext, useEffect } from 'react'
import { Center, Text, Button, Image, Box, TouchableOpacity } from 'native-base'
import LoginForm from '../../components/LoginForm'
import BackButton from '../../components/BackButton'
import { useNavigation, useRoute } from '@react-navigation/native'
import Styling from '../../config/Settings/styling.json'
import { isTablet, isAndroid, width } from 'react-native-device-detection'

const LoginView = () => {
  const [transition, setTransition] = React.useState(false)
  const navigation = useNavigation()
  //const content = userContext(ContentContext);

  useEffect(() => {
    setTransition(true)
  }, [])

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

        <Button
          zIndex={99}
          position="relative"
          top="7"
          right="2"
          borderRadius="2xl"
          flexDirection="row"
          alignSelf="flex-end"
          bg={Styling.primaryColor}
          onPress={() => navigation.navigate('HomeView')}
          _pressed={{
            backgroundColor: Styling.secondaryColor,
            transform: [
              {
                scale: 0.95,
              },
            ],
          }}
        >
          <Text color="white">Guest</Text>
        </Button>

        <Center h="100%" w="100%" top="0">
          <LoginForm />
        </Center>
      </Center>
    </Box>
    // </Center>
  )
}

export default LoginView

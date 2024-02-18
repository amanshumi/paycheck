import React, { useState, useEffect } from 'react'
import {
  VStack,
  Input,
  Button,
  FormControl,
  Text,
  Box,
  View,
} from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import { width, height } from 'react-native-device-detection'
import Styling from '../../config/Settings/styling.json'
import ForgotPassword from '../ForgotPassword'
import { Keyboard } from 'react-native'


//API Handler register function
import { loginUser } from '../../config/APIHandler/auth';

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [buttonPosition, setButtonPosition] = useState('absolute') // initial position of the button
  const navigation = useNavigation()

  const handleLogin = async () => {
    const { success, data } = await loginUser({ email, password });
    if (success) {
      // Handle successful login
      console.log('Login successful:', data);
    } else {
      // Handle failed login
      console.log('Login failed:', data);
    }
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setButtonPosition('relative') // Change position to absolute when the keyboard is displayed
      },
    )

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setButtonPosition('absolute')
      },
    )

    return () => {
      keyboardDidShowListener.remove()
      keyboardDidHideListener.remove()
    }
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Box
        h={140}
        top={150}
        height={height - 180}
        borderWidth={2}
        borderColor={Styling.primaryColor}
        justifyContent="flex-start"
        alignItems="center"
      >
        <VStack space={4} width="80%" alignItems="center">
          <Text
            bold
            color={Styling.primaryColor}
            fontSize="25"
            fontWeight="bold"
          >
            Login
          </Text>
          <FormControl
            width={width - 30}
            borderRadius="100"
            position="relative"
          >
            <Input
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              keyboardType="email-address"
            />
          </FormControl>
          <FormControl width={width - 30}>
            <Input
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
          </FormControl>
        </VStack>
        <View alignSelf="flex-end" marginTop="1" marginBottom="5">
          <ForgotPassword />
        </View>

        <Text bold alignSelf="center" marginBottom={6} color="gray.600" top={0}>
          Dont't have an account?
          <Text
            color={Styling.primaryColor}
            onPress={() => navigation.navigate('RegisterView')}
          >
            Register
          </Text>
        </Text>
        <Button
          bg={Styling.primaryColor}
          width={width - 30}
          borderRadius="xl"
          position={buttonPosition}
          bottom={0}
          onPress={handleLogin}
          _pressed={{
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
      </Box>
    </View>
  )
}

export default LoginForm

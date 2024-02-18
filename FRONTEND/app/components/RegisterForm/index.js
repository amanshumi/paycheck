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
import { width, height } from 'react-native-device-detection'
import Styling from '../../config/Settings/styling.json'
import { Keyboard } from 'react-native'

//API Handler register function
import { registerUser } from '../../config/APIHandler/auth';

const RegisterForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('');
  const [buttonPosition, setButtonPosition] = useState('absolute') // initial position of the button
  const navigation = useNavigation()


  const handleRegister = async () => {
    const { success, data } = await registerUser({ email, name, password });
    if (success) {
      // Handle success (e.g., navigate or show a message)
      console.log('Registration successful:', data);
    } else {
      // Handle failure (e.g., show error message)
      console.log('Registration failed:', data);
    }
  };




  // const handleLogin = () => {
  //   // Add your login logic here
  //   console.log('Email:', email)
  //   console.log('Password:', password)
  //   // Implement your authentication logic or API calls
  // }

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
        //flex={1}
        top={150}
        height={height - 180}
        //bottom={1}
        // borderWidth={2}
        // borderColor={Styling.primaryColor}
        justifyContent="flex-start"
        //position="absolute"
        alignItems="center"
      >
        <VStack space={4} width="80%" alignItems="center">
          <Text
            bold
            color={Styling.primaryColor}
            fontSize="25"
            fontWeight="bold"
          >
            Register
          </Text>
          <FormControl
            width={width - 30}
            borderRadius="100"
            position="relative"
          >
            {/* <FormControl.Label>Email</FormControl.Label> */}
            <Input
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              keyboardType="email-address"
            />
          </FormControl>
          <FormControl width={width - 30}>
            <Input
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
            />
          </FormControl>
          <FormControl width={width - 30}>
            {/* <FormControl.Label>Password</FormControl.Label> */}
            <Input
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry // This prop makes the text input for the password hidden
            />
          </FormControl>
          <FormControl width={width - 30}>
            {/* <FormControl.Label>Password</FormControl.Label> */}
            <Input
              placeholder="Confirm password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry // This prop makes the text input for the password hidden
            />
          </FormControl>
        </VStack>
        <Box
          //bottom="0"
          //   borderWidth={2}
          //   borderColor={Styling.primaryColor}
          top="5"
        >
          <Text
            //bottom={0}
            bold
            alignSelf="center"
            //marginBottom={10}
            color="gray.600"
            //top={5}
          >
            Already have an account?
            <Text
              color={Styling.primaryColor}
              onPress={() => navigation.navigate('LoginView')}
            >
              Login
            </Text>
          </Text>
        </Box>
        <Button
          bg={Styling.primaryColor}
          width={width - 30}
          borderRadius="xl"
          position={buttonPosition}
          //bottom="2"
          // top={buttonPosition}
          bottom={0}
          onPress={handleRegister}
          _pressed={{
            transform: [
              {
                scale: 0.95,
              },
            ],
          }}
        >
          <Text fontSize="18" color="white">
            Register
          </Text>
        </Button>
      </Box>
    </View>
  )
}

export default RegisterForm

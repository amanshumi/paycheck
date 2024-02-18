import React, { useState } from 'react'
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native'
import { Input, Button, VStack, FormControl } from 'native-base' // Assuming you are using native-base
import { width, height } from 'react-native-device-detection'
import Styling from '../../config/Settings/styling.json'

const ForgotPassword = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [email, setEmail] = useState('')

  const handleSend = () => {
    // Implement logic to send password reset email
    console.log('Sending email to:', email)
    // Add your logic here, such as sending a password reset email
    // You can also close the modal after sending the email
    setModalVisible(false)
  }

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Forgot your password?</Text>
            <VStack space={4} width={width - 35} alignItems="center">
              <Text style={styles.modalText}>
                No worries! It happens to the best of us. Let's get you back
                into your account.
              </Text>
              <FormControl width="85%" borderRadius="100" position="relative">
                <Input
                  placeholder="Email"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  keyboardType="email-address"
                />
              </FormControl>
            </VStack>
            <Button
              bg={Styling.primaryColor}
              width={width - 90}
              height="10"
              top={4}
              borderRadius="xl"
              position="relative"
              bottom={0}
              onPress={handleSend}
              _pressed={{
                transform: [
                  {
                    scale: 0.95,
                  },
                ],
              }}
            >
              <Text style={styles.loginStyle}>Login</Text>
            </Button>
            <Button
              bg="white"
              width={width - 90}
              top={5}
              borderRadius="xl"
              position="relative"
              bottom={0}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.nevermindStyle}>Nevermind</Text>
            </Button>
          </View>
        </View>
      </Modal>

      <Pressable onPress={() => setModalVisible(true)} bg="gray.100">
        <Text style={styles.forgotPassword}>I forgot my password</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    //margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    height: 300,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  nevermindStyle: {
    color: Styling.gray,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: Styling.primaryColor,
    fontWeight: 'bold',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 15,
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    width: 250,
    textAlign: 'center',
    fontSize: 15,
    color: Styling.gray,
  },
})

export default ForgotPassword

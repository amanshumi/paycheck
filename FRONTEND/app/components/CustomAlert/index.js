// CustomAlert.js

import React from 'react'
import Styling from '../../config/Settings/styling.json'
import { Alert, Button, View } from 'react-native'

const CustomAlert = ({ title, message }) => {
  const showAlert = () => {
    Alert.alert(title || 'Alert', message || 'This is an alert message.', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ])
  }

  return (
    <Button
      bold
      title={'2-Button Alert'}
      onPress={showAlert}
      alignSelf="flex-end"
      color={Styling.primaryColor}
      marginBottom={4}
    />
  )
}

export default CustomAlert

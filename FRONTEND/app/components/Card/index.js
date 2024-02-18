// CardComponent.js
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Box, HStack, Divider } from 'native-base'

const Card = ({ title, cardTitle, currency }) => {
  return (
    <View style={styles.container}>
      <HStack space={2} alignItems="center">
        <Text style={styles.title}>Payed</Text>
        <Text style={styles.currency}>0 USD</Text>
      </HStack>

      <Box style={styles.cardBox}>
        <Text style={styles.cardTitle}>Total amount</Text>
      </Box>

      <Divider style={styles.divider} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 100,
    elevation: 3, // for Android shadow
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardBox: {
    backgroundColor: '#EAEAEA',
    borderRadius: 10,
    padding: 15,
    marginTop: 10, // Add margin to separate the title from the box
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  currency: {
    fontSize: 16,
    marginLeft: 'auto', // Push the currency to the right
    backgroundColor: 'gray.100',
  },
  divider: {
    marginTop: 10,
    height: 1,
    backgroundColor: '#CCCCCC',
  },
})

export default Card

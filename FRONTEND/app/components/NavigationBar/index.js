import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Pressable, Text, Box, VStack, HStack } from 'native-base'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { isTablet } from 'react-native-device-detection'
import Styling from '../../config/Settings/styling.json'
// import {
//   DashboardScreen,
//   GroupsScreen,
//   UserStatsScreen,
//   SettingsScreen,
// } from '../../config/C4'

const Tab = createBottomTabNavigator()

const NavigationBar = () => {
  const [navigationButtons, setNavigationButtons] = useState([
    { label: 'Dashboard', screen: 'DashboardScreen', icon: 'home-outline' },
    { label: 'Groups', screen: 'GroupsScreen', icon: 'people-outline' },
    { label: 'My Stats', screen: 'UserStatsScreen', icon: 'person-outline' },
    { label: 'Settings', screen: 'SettingsScreen', icon: 'settings-outline' },
  ])
  const [isPressed, setIsPressed] = useState(false)
  const navigation = useNavigation()

  const onButtonPress = (screen, params = {}) => {
    navigation.navigate(screen, params)
  }

  const buttonStyle = {
    borderColor: isPressed ? Styling.primaryColor : Styling.gray,
    borderWidth: isPressed ? 2 : 0,
  }

  const NavigationButton = ({ label, screen, icon }) => (
    <Pressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={() => onButtonPress(screen)}
      justifyContent="center"
      bg={isTablet ? 'white' : undefined}
      width={isTablet ? 90 : undefined}
      height={isTablet ? 90 : 10}
      mx={isTablet ? '2' : '1'}
      mb={isTablet ? '2' : '2'}
    >
      <Box
        flexDirection={'column'}
        justifyContent="center"
        alignItems="center"
        paddingBottom="2"
      >
        <Ionicons name={icon} size={isTablet ? 20 : 30} color={Styling.gray} />
        <Text
          color={Styling.gray}
          textAlign="center"
          textTransform="uppercase"
          fontWeight="600"
          fontSize={isTablet ? 15 : 11}
          mt={2}
          //shadow={2}
        >
          {label}
        </Text>
      </Box>
    </Pressable>
  )

  const PhoneNav = () => (
    <HStack
      bg="white"
      justifyContent="space-around"
      pt="30"
      py="0.5"
      px="3"
      width="100%"
      position="absolute"
      bottom={0}
    >
      {navigationButtons.map((button, i) => (
        <NavigationButton
          borderTopWidth="2"
          borderTopColor={Styling.primaryColor}
          key={i}
          label={button.label}
          screen={button.screen}
          icon={button.icon}
        />
      ))}
    </HStack>
  )
  return <PhoneNav />
  // return isTablet ? <TabletNav /> : <PhoneNav />
}

export default NavigationBar

// import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { Ionicons } from '@expo/vector-icons'
// import {
//   DashboardScreen,
//   GroupsScreen,
//   UserStatsScreen,
//   SettingsScreen,
// } from '../../config/C4'

// const Tab = createBottomTabNavigator()

// const NavigationBar = () => {
//   return (
//     <Tab.Navigator
//       tabBarOptions={{
//         activeTintColor: 'white',
//         inactiveTintColor: 'gray',
//         style: {
//           backgroundColor: 'blue', // Change the background color as needed
//           borderTopWidth: 0,
//           elevation: 0, // Remove the shadow on Android
//         },
//       }}
//     >
//       <Tab.Screen
//         name="Dashboard"
//         component={DashboardScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="home" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Groups"
//         component={GroupsScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="search" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="My stats"
//         component={UserStatsScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="person" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Settings"
//         component={SettingsScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="person" size={size} color={color} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   )
// }

// export default NavigationBar

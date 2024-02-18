import React, { useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider } from 'native-base'
import { isTablet, isAndroid } from 'react-native-device-detection'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  SplashScreenView,
  WelcomeView,
  LoginView,
  RegisterView,
  ForgotPasswordView,
  HomeView,
  DashboardScreen,
  GroupsScreen,
  UserStatsScreen,
  SettingsScreen,
  Styling,
} from './app/config/C4'

const initialRoute = 'SplashScreenView'
const Stack = createNativeStackNavigator()

export default function App() {
  useEffect(() => {
    //SplashScreen.hide();
    return () => {}
  }, [])

  handleAppStateChange = (nextAppState) => {
    if (nextAppState === 'active') {
      // app comes into focus
      // DataService.contentUpdate();
    }
  }

  getActiveRouteName = (navigationState) => {
    if (!navigationState) {
      return null
    }
    const route = navigationState.routes[navigationState.index]
    if (route.routes) {
      return this.getActiveRouteName(route)
    }
    return route.routeName
  }

  const updateScreenLockInfo = (state) => {
    const currentRoute = state.routes[state.index].name
    // if(!isTablet){
    //   Orientation.lockToPortrait();
    // } else {
    //   Orientation.lockToLandscape();
    // }
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NativeBaseProvider>
        <NavigationContainer
          onStateChange={(state) => updateScreenLockInfo(state)}
        >
          {isTablet || isAndroid ? (
            <StatusBar hidden />
          ) : (
            <StatusBar barStyle="light-content" />
          )}
          <SafeAreaView
            style={{ flex: 0, backgroundColor: Styling.primaryColor }}
          />
          <SafeAreaView
            style={{ flex: 1, backgroundColor: Styling.primaryColor }}
          >
            <Stack.Navigator
              initialRoute={initialRoute}
              screenOptions={{ headerShown: false }}
            >
              <Stack.Group>
                <Stack.Screen
                  name="SplashScreenView"
                  component={SplashScreenView}
                />
                {/* <Stack.Screen name="WelcomeView" component={WelcomeView} /> */}
                <Stack.Screen name="LoginView" component={LoginView} />
                <Stack.Screen name="RegisterView" component={RegisterView} />
                <Stack.Screen
                  name="ForgotPasswordView"
                  component={ForgotPasswordView}
                />
                <Stack.Screen name="HomeView" component={HomeView} />
                <Stack.Screen
                  name="DashboardScreen"
                  component={DashboardScreen}
                />
                <Stack.Screen name="GroupsScreen" component={GroupsScreen} />
                <Stack.Screen
                  name="UserStatsScreen"
                  component={UserStatsScreen}
                />
                <Stack.Screen
                  name="SettingsScreen"
                  component={SettingsScreen}
                />
              </Stack.Group>
              {/* TO BE USED LATER FOR MODAL VIEWS -- ModalView component needs to be made*/}
              {/* <Stack.Group screenOptions={{presentation: 'modal', animation: 'slide_from_bottom'}}>
                <StackScreen name="modalView" component={ModalView} options={() => ({presentation: 'modal', animation: 'slide_from_bottom'})} />
              </Stack.Group> */}
            </Stack.Navigator>
          </SafeAreaView>
        </NavigationContainer>
      </NativeBaseProvider>
    </GestureHandlerRootView>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })

import React from 'react'
import {View} from 'react-native'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import TextScreen from './screens/TextScreen'

const Stack = createStackNavigator()

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='TextScreen' component={TextScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router

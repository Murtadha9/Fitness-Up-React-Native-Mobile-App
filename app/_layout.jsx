import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack
    screenOptions={{
      headerShown: false
    }} 
    >
      <Stack.Screen name='Exercices' options={{
        presentation:'fullScreenModal'
      }} />

      <Stack.Screen name='exerciesDetial' options={{
        presentation:'modal'
      }} />
    </Stack>
     
  )
}

export default _layout


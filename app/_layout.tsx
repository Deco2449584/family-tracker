import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { auth } from '../firebase';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name="home" />
    </Stack>
  );
}

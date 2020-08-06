import { useConfig } from '@expoBoiler/app/src/hooks/useConfig'
import { Landing } from '@expoBoiler/app/src/screens/Landing'
import { NotFoundScreen } from '@expoBoiler/app/src/screens/NotFoundScreen'
import { Screen } from '@expoBoiler/app/src/screens/Screen'
import { RootNavigatorKeys } from '@expoBoiler/utils'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import * as Linking from 'expo-linking'
import * as React from 'react'
import { ColorSchemeName } from 'react-native'

const Stack = createStackNavigator<RootNavigatorKeys>()
const linkingConfig = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: 'Landing',
      Screen: 'Screen',
      NotFound: '*',
    },
  },
}
const transitionConfig = {
  animation: 'spring' as const,
  config: {
    stiffness: 1100,
    damping: 170,
    mass: 20,
    overshootClamping: true,
    restDisplacementThreshold: 1,
    restSpeedThreshold: 0.01,
  },
}

function RootNavigator() {
  const {
    /* access config here */
  } = useConfig()

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        transitionSpec: { open: transitionConfig, close: transitionConfig },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="Root" component={Landing} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="Screen" component={Screen} />
    </Stack.Navigator>
  )
}

export function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer linking={linkingConfig} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  )
}

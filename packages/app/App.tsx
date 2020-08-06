/* eslint-disable import/no-default-export */
import { BaseLayout } from '@expoBoiler/app/src/components/BaseLayout'
import { Text } from '@expoBoiler/app/src/components/Text'
import { AppContainer } from '@expoBoiler/app/src/containers/AppContainer'
import { ConfigContext } from '@expoBoiler/app/src/context'
import { store } from '@expoBoiler/app/src/store/store'
import { colors } from '@expoBoiler/app/src/ui'
import { config } from '@expoBoiler/config'
import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import { Appearance, AppState } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import * as Sentry from 'sentry-expo'
import { ThemeProvider } from 'styled-components'

// Sentry.init({
//   dsn: '<add dsn here and uncomment code>',
//   debug: true,
// })

type Props = {}
type State = { error?: Error }

export default class App extends Component<Props, State> {
  static getDerivedStateFromError(error) {
    return { error }
  }

  state = {
    error: undefined,
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange)
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange)
  }

  handleAppStateChange = () => {
    /**
     * update color theme
     */
    this.forceUpdate()
  }

  componentDidCatch(error, info) {
    console.log({ catchError: error, info })
    if (__DEV__) {
      return
    }
    Sentry.captureException(error)
  }

  render() {
    const scheme = Appearance.getColorScheme() ?? 'light'
    const { error } = this.state
    if (error) {
      return (
        <BaseLayout>
          <Text style={{ fontSize: 33 }}>Oops, something went wrong</Text>
        </BaseLayout>
      )
    }

    return (
      <Provider store={store}>
        <ConfigContext.Provider value={config()}>
          <ThemeProvider theme={colors[scheme]}>
            <SafeAreaProvider>
              <StatusBar />
              <AppContainer />
            </SafeAreaProvider>
          </ThemeProvider>
        </ConfigContext.Provider>
      </Provider>
    )
  }
}

import {
  TitilliumWeb_300Light,
  TitilliumWeb_400Regular,
  TitilliumWeb_600SemiBold,
} from '@expo-google-fonts/titillium-web'
import { TopLevelDataContext } from '@expoBoiler/app/src/context'
import { useCachedResources } from '@expoBoiler/app/src/hooks/useCachedResources'
import { useColorScheme } from '@expoBoiler/app/src/hooks/useColorScheme'
import { useConfig } from '@expoBoiler/app/src/hooks/useConfig'
import { Navigation } from '@expoBoiler/app/src/navigation'
import { JSObject } from '@expoBoiler/utils'
import { useFonts } from 'expo-font'
import * as React from 'react'
import { useDispatch } from 'react-redux'

type PublicProps = JSObject

type Props = PublicProps

const AppContainerComponent: React.FC<Props> = () => {
  const dispatch = useDispatch()
  const {
    /* access config here */
  } = useConfig()
  React.useEffect(() => {
    /**
     * set up App mount logic here
     */
  }, [])
  const colorScheme = useColorScheme()
  const isLoadingComplete = useCachedResources()
  let [fontsLoaded] = useFonts({
    TitilliumWeb_300Light,
    TitilliumWeb_400Regular,
    TitilliumWeb_600SemiBold,
  })

  if (!isLoadingComplete || !fontsLoaded) {
    return null
  }

  return (
    <TopLevelDataContext.Provider value={null /* context value here */}>
      <Navigation colorScheme={colorScheme} />
    </TopLevelDataContext.Provider>
  )
}

export const AppContainer = AppContainerComponent as React.FC<PublicProps>

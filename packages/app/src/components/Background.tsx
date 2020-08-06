import backgroundDark from '@expoBoiler/app/assets/images/background.dark.png'
import backgroundLight from '@expoBoiler/app/assets/images/background.light.png'
import { useColorScheme } from '@expoBoiler/app/src/hooks/useColorScheme'
import { useConfig } from '@expoBoiler/app/src/hooks/useConfig'
import { JSObject } from '@expoBoiler/utils'
import * as React from 'react'
import { ImageBackground } from 'react-native'

export const Background: React.FC<JSObject> = () => {
  const { layout } = useConfig()
  const dark = useColorScheme() === 'dark'

  return (
    <ImageBackground
      source={dark ? backgroundDark : backgroundLight}
      style={{
        width: layout.window.width,
        height: layout.window.height,
        position: 'absolute',
        top: 0,
        right: 0,
      }}
    />
  )
}

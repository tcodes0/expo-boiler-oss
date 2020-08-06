import { useThemeColor } from '@expoBoiler/app/src/hooks/useThemeColor'
import * as ui from '@expoBoiler/app/src/ui'
import { ThemeProps } from '@expoBoiler/utils'
import * as React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export type BaseLayoutProps = ThemeProps & View['props']

export function BaseLayout(props: BaseLayoutProps) {
  const { style, lightColor, darkColor, ...otherProps } = props
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background')

  return (
    <SafeAreaView
      style={[
        {
          backgroundColor,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: ui.w(6),
          paddingRight: ui.w(6),
          paddingTop: ui.h(3),
          paddingBottom: ui.h(3),
        },
        style,
      ]}
      {...otherProps}
    />
  )
}

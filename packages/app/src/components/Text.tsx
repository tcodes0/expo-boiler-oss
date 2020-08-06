import { useThemeColor } from '@expoBoiler/app/src/hooks/useThemeColor'
import { fontFamily } from '@expoBoiler/app/src/ui'
import { ThemeProps } from '@expoBoiler/utils'
import * as React from 'react'
import { Text as DefaultText } from 'react-native'

export type TextProps = ThemeProps & DefaultText['props']

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text')

  return <DefaultText style={[{ color, fontFamily: fontFamily['400'] }, style]} {...otherProps} />
}

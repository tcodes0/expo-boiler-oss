import { useColorScheme } from '@expoBoiler/app/src/hooks/useColorScheme'
import * as ui from '@expoBoiler/app/src/ui'
import { ThemeProps, JSObject } from '@expoBoiler/utils'
import * as React from 'react'
import { StyleProp, TextStyle } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { useTheme } from 'styled-components'
import { Text } from './Text'

export type ButtonProps = ThemeProps & {
  textStyle?: StyleProp<TextStyle>
  title: string
}

const defaulTextStyle = {
  fontFamily: ui.fontFamily['600'],
  padding: ui.w(2),
  fontSize: ui.w(5),
}

const defaulButtonStyle = {
  padding: ui.w(1),
  borderRadius: ui.w(5.3),
}

export function Button(props: JSObject & ButtonProps) {
  const { textStyle = {}, title, style, ...otherProps } = props
  const dark = useColorScheme() === 'dark'
  const theme = useTheme()

  return (
    <PaperButton
      color={theme.interactive}
      dark={dark}
      mode="contained"
      style={[defaulButtonStyle, style]}
      {...otherProps}
    >
      <Text lightColor={theme.background} style={[defaulTextStyle, textStyle]}>
        {title}
      </Text>
    </PaperButton>
  )
}

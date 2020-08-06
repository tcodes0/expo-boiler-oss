import { View } from '@expoBoiler/app/src/components/View'
import * as ui from '@expoBoiler/app/src/ui'
import { ThemeProps, JSObject } from '@expoBoiler/utils'
import * as React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { Card } from 'react-native-paper'
import styled, { useTheme } from 'styled-components/native'

export type QuestionCardProps = ThemeProps & {
  style?: StyleProp<ViewStyle>
  contentStyle?: StyleProp<ViewStyle>
}

const CardWrapper = styled(View)`
  justify-content: flex-start;
  align-items: center;
  width: ${ui.wpx(88)};
`

const defaultCardContentStyle = {
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flex: 1,
} as const

export function FruitCard(props: JSObject & QuestionCardProps) {
  const { style, contentStyle, children, ...otherProps } = props
  const theme = useTheme()

  return (
    <CardWrapper>
      <Card
        style={[
          {
            backgroundColor: theme.cardBackground,
            borderRadius: ui.w(5),
            padding: ui.w(2),
            maxHeight: ui.h(53),
          },
          style,
        ]}
        elevation={10}
        {...otherProps}
      >
        <Card.Content style={[defaultCardContentStyle, contentStyle]}>{children}</Card.Content>
      </Card>
    </CardWrapper>
  )
}

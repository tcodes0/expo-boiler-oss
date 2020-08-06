import * as ui from '@expoBoiler/app/src/ui'
import * as React from 'react'
import { View } from 'react-native'

export const Space: React.FC<{ width?: number | string; height?: number | string; style?: View['props'] }> = ({
  width,
  height,
  style,
  ...props
}) => (
  <View
    {...props}
    style={[{ height: height ? ui.h(height) : undefined, width: width ? ui.w(width) : undefined }, style]}
  />
)

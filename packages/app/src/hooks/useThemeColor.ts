import { useColorScheme } from '@expoBoiler/app/src/hooks/useColorScheme'
import { colors } from '@expoBoiler/app/src/ui'

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof colors.light & keyof typeof colors.dark
) {
  const theme = useColorScheme()
  const colorFromProps = props[theme]

  if (colorFromProps) {
    return colorFromProps
  }
  return colors[theme][colorName]
}

import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import 'styled-components'

/**
 * return a number % of screen width
 */
export const w = widthPercentageToDP
/**
 * return a number % of screen height
 */
export const h = heightPercentageToDP
/**
 * return a string % of screen height + "px"
 */
export const hpx = (n: string | number) => `${heightPercentageToDP(n)}px`
/**
 * return a string % of screen width + "px"
 */
export const wpx = (n: string | number) => `${widthPercentageToDP(n)}px`
export const fontFamily = {
  300: 'TitilliumWeb_300Light',
  400: 'TitilliumWeb_400Regular',
  600: 'TitilliumWeb_600SemiBold',
}
const darkColors = {
  text: '#eceeef',
  background: '#252c4a',
  cardBackground: '#1A1E33',
  notImportantBackground1: '#979BA6',
  notImportantBackground2: '#ACB0BD',
  correct: '#15B35F',
  incorrect: '#F03A52',
  interactive: '#117eeb',
}

const lightColors = {
  ...darkColors,
  text: '#333333',
  background: '#fafafa',
  notImportantBackground2: darkColors.notImportantBackground1,
  cardBackground: '#f6f6f6',
  correct: '#19d974',
  incorrect: '#ff3d58',
  interactive: '#1288FF',
}
export const colors = {
  light: lightColors,
  dark: darkColors,
}

declare module 'styled-components' {
  type MyTheme = typeof colors.dark
  // eslint-disable-next-line
  export interface DefaultTheme extends MyTheme {}
}

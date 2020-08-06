export type TypedFunction<Args extends any[] = any[], Return = void> = (...args: Args) => Return
export type TypedAsyncFunction<Args extends any[] = any[], Return = Promise<void>> = (...args: Args) => Promise<Return>
export type JSObject<Value = any> = Record<string, Value>

export const isTest = () => process.env.NODE_ENV === 'test'
export const isDev = () => __DEV__

export type RootNavigatorKeys = {
  Root: undefined
  Screen: undefined
  NotFound: undefined
}

export enum Fruits {
  apple = 'apple',
  banana = 'banana',
  avocado = 'avocado',
  pear = 'pear',
}

export type BottomTabParamList = {
  TabOne: undefined
  TabTwo: undefined
}

export type TabOneParamList = {
  TabOneScreen: undefined
}

export type TabTwoParamList = {
  TabTwoScreen: undefined
}

export type ThemeProps = {
  lightColor?: string
  darkColor?: string
}

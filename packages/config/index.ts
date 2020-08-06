/**
 * @expoBoiler/config injects configuration of the app, interacts and validates env
 */
import { Dimensions } from 'react-native'

const questions = {
  amount: 10,
  difficulty: 'hard',
  type: 'boolean',
}
const results = {
  heading: 'You scored',
  buttonText: 'Play again?',
}
const landing = {
  heading: 'Welcome to the expoBoiler Challenge!',
  body: `You will be presented with ${questions.amount} true or false questions.`,
  punchLine: `Can you score 10/10 ?`,
  buttonText: 'Begin',
}
const apiUrl = 'opentdb.com/api.php'
/**
 * Layout
 */
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const layout = {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
}

const dev = {
  questions,
  results,
  landing,
  apiUrl,
  layout,
}

export type expoBoilerConfig = typeof dev
let configValue: expoBoilerConfig
const prod = dev
configValue = __DEV__ ? dev : prod

/**
 * Valid expoBoiler configuration. Set by configure
 */
export function config() {
  return configValue
}

/**
 * Resets configuration to initial state
 */
export function unconfigure() {
  configValue = (null as unknown) as expoBoilerConfig
}

/**`
 * Validates and decouples essential configuration.
 * call first before doing anything else
 */
export function configure(envConfig: Partial<expoBoilerConfig>) {
  const abort = (message: string) => {
    throw Error(`Invalid expoBoiler configuration: ${message}.`)
  }
  if (!envConfig) abort('required argument envConfig not passed')
  if (!envConfig.apiUrl) abort(`invalid apiUrl, received: "${envConfig.apiUrl}"`)
  /**
   * any other validation logic here
   */
  const definedConfig = envConfig as expoBoilerConfig
  configValue = definedConfig
}

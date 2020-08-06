import { ConfigContext } from '@expoBoiler/app/src/context'
import * as React from 'react'

export function useConfig() {
  return React.useContext(ConfigContext)
}

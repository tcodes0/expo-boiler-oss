import { TopLevelDataContext } from '@expoBoiler/app/src/context'
import * as React from 'react'

export function useTopLevelDataContext() {
  return React.useContext(TopLevelDataContext)
}

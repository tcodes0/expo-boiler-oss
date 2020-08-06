import { config } from '@expoBoiler/config'
import { createContext } from 'react'
import { responseInterface } from 'swr'

export type TTopLevelDataContext = responseInterface<any, any> | null

export const ConfigContext = createContext(config())
export const TopLevelDataContext = createContext<TTopLevelDataContext>(null)

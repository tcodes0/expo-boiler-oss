import useSWR, { ConfigInterface } from 'swr'

export function useNetwork(url: string, config?: ConfigInterface<any, any>) {
  return useSWR(url, fetch, config)
}

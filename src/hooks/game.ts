import { useContract } from '@starknet-react/core'
import { Abi } from 'starknet'
import abi from './abi/main.json'

export function useGameContract() {
  return useContract({
    abi: abi as Abi,
    address: '0x06d1e8024d2375e38d9a56955b7fefcbde5c5422bf5d792fe417f766bda3c11f',
  })
}

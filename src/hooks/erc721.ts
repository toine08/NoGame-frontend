import { useContract } from '@starknet-react/core'
import { Abi } from 'starknet'
import abi from './abi/erc721.json'

export function useErc721Contract() {
  return useContract({
    abi: abi as Abi,
    address: '0x01cf7806d778ab0a82869c2a52de3365d63583d6c095ea1095f51bd8f59a4d5c',
  })
}

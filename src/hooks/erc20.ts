import { useContract } from '@starknet-react/core'
import { Abi } from 'starknet'
import abi from './abi/erc20.json'

export function useMetalContract() {
  return useContract({
    abi: abi as Abi,
    address: '0x01fc36c9795064f8bf9686fbda40ec92d15eeefadfe7fbb3c6549f1e016875eb',
  })
}

export function useCrystalContract() {
  return useContract({
    abi: abi as Abi,
    address: '0x01fc36c9795064f8bf9686fbda40ec92d15eeefadfe7fbb3c6549f1e016875eb',
  })
}

export function useDeuteriumContract() {
  return useContract({
    abi: abi as Abi,
    address: '0x0159baa3a691f6e56f8fb010f874ace7b4c97058392c4c3996a71486dcd13c13',
  })
}

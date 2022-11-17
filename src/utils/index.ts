import { BigNumber } from 'bignumber.js'
import { uint256 } from 'starknet'

export const dataToNumber = (value: any) => new BigNumber(value).toNumber()

export const E18ToNumber = (value: any) => Math.floor(new BigNumber(value).toNumber() / 10 ** 18)

export const bigDataToNumber = (value: any) => new BigNumber(uint256.uint256ToBN(value)).toNumber()

export const calculEnoughResources = (
  required: { metal: number; crystal: number; deuterium: number },
  available: { metal: number; crystal: number; deuterium: number }
) => {
  if (!available) {
    return false
  }

  return (
    available.metal - required.metal >= 0 &&
    available.crystal - required.crystal >= 0 &&
    available.deuterium - required.deuterium >= 0
  )
}

export const numberWithCommas = (num: number) => {
  return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}
